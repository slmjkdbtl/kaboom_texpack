const fs = require("fs");
const path = require("path");
const pack = require("free-tex-packer-core");

const images = fs
	.readdirSync("sprites")
	.filter((p) => !p.startsWith("."))
	.map((p) => ({
		path: path.basename(p, path.extname(p)),
		contents: fs.readFileSync(`sprites/${p}`),
	}))
	;

pack(images, {
	textureName: "sprites",
	// can make "kaboom" an exporter to save the conversion
	exporter: "JsonHash",
	allowRotation: false,
	allowTrim: true,
}, (files, error) => {
	if (error) {
		console.error("ERROR:", error);
	} else {
		for (const item of files) {
			// why don't they pass json and img data as separate arguments
			if (item.name === "sprites.json") {
				const data = JSON.parse(item.buffer.toString());
				const kdata = {};
				for (const name in data.frames) {
					const frame = data.frames[name].frame;
					kdata[name] = {
						x: frame.x,
						y: frame.y,
						width: frame.w,
						height: frame.h,
					};
				}
				fs.writeFileSync("sprites.json", JSON.stringify(kdata, null, 4));
			} else {
				fs.writeFileSync(item.name, item.buffer);
			}
		}
	}
});
