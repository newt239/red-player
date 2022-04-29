# RED Player

This is a project using [Svelte](https://svelte.dev) on [tauri](https://tauri.studio/). Repositories are below.

- Svelte: https://github.com/sveltejs/template
- tauri: https://github.com/tauri-apps/tauri

## What's this?

Youtube client app for Desktop. You can run it on Windows.

### Feature

- Like mobile app UI
- No ad
- [working] Loop the same movie
- [working] An endless play in Playlist, random movies, etc

Waiting for your feature request at isuues.

## For developer

*Note that you will need to have [Node.js](https://nodejs.org) and [Rust](https://www.rust-lang.org/) installed.*

Install the dependencies...

```bash
cd red-player
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run tauri dev
```

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run tauri build
```