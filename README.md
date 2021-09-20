Example to use Kaboom with a texture packer ([`free-tex-packer-core`](https://www.npmjs.com/package/free-tex-packer-core) in this case)

The sprite atlas is built automatically in `build.js`, it generates a `sprites.json` which kaboom can directly load by `loadSpriteAtlas()`

To start the demo, a local dev server is needed to load files, e.g.
```
$ python3 -m http.server
```
