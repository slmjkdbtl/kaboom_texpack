Example to use Kaboom with a texture packer ([`free-tex-packer-core`](https://www.npmjs.com/package/free-tex-packer-core) in this case)

To build the sprite atlas

```
$ node build.js
```

This generates a `sprites.png` (an image containing all images) `sprites.json` (contains data of how to load each subimage) which kaboom can directly load by `loadSpriteAtlas()`

To start the demo, a local dev server is needed to load files, e.g.
```
$ python3 -m http.server
```
