# Runtime configuration

The homepage loads its personal content from JSON files at runtime. No rebuild is required after changing the configuration.

## Create your private configuration

Copy the examples and edit the copies:

```bash
cp -R config.example config
```

`config/` is ignored by Git and Docker builds. Keep one file for each language you enable:

```text
config/
├── config.en.json
├── config.zh.json
├── avatar.jpg
└── background.jpg
```

The language switcher selects `config.<language>.json`. Regional browser languages are normalized, so `zh-CN` uses `config.zh.json`.

Each JSON file contains `site`, `socials`, and `links`. `site` supplies page metadata and the left-panel text. See [`config.example`](./config.example) for the full schema and valid icon examples.

Use `/config/...` paths for assets placed in this directory:

```json
{
  "site": {
    "logoUrl": "/config/avatar.jpg",
    "background": "/config/background.jpg"
  }
}
```

## Docker

Mount the directory read-only into the image:

```bash
docker run --rm -p 12444:3000 \
  -v "$(pwd)/config:/app/config:ro" \
  ghcr.io/your-github-user/jinli-home:latest
```

The image provides generic fallback files in `/default-config`; they are shown whenever a matching custom config file is not mounted.

Configuration is private from the source repository and public base image, but it is necessarily visible to visitors of the deployed static site.
