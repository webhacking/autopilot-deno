<p align="center">

![](docs/logo.png)

</p>

[![stars](https://img.shields.io/github/stars/divy-work/autopilot-deno)](https://github.com/divy-work/autopilot-deno/stargazers)
[![issues](https://img.shields.io/github/issues/divy-work/autopilot-deno)](https://github.com/divy-work/autopilot-deno/issues)
[![ci](https://github.com/divy-work/autopilot-deno/workflows/ci/badge.svg)](https://github.com/divy-work/autopilot-deno/actions)
![version](https://img.shields.io/badge/version-0.1.4-success)
![deno version](https://img.shields.io/badge/deno-1.0.5-success)
[![vr scripts](https://badges.velociraptor.run/flat.svg)](https://velociraptor.run)

AutoPilot is a simple cross-platform desktop automation library for Deno.

> __NOTE__: Works with Deno v1.0.5 or up.


### Features

- [x] Keyboard
  - [x] Type a string using `.type`
  - [x] Tap a key using `.tap`
  - [x] Toggle key using `.toggleKey`

- [x] Mouse
  - [x] Simulate mouse movement using `.moveMouse`
  - [x] Get mouse position using `.mousePosition`
  - [x] Get mouse position pixel color `.pixelColor`

- [x] Screen
  - [x] Capture screen using `.screenshot`
  - [x] Get screen size using `.screenSize`
  - [x] Check if point out of bounds using `.pointVisible`
  - [x] Get number of pixels in a point using `.screenScale`
  - [ ] Screen recording

- [x] Notifications
  - [x] Native popup using `.alert`
  - [x] Notifications using `.notify`

- [x] Monitors
   - [x] Get the number of monitors using `.getMonitors`

- [x] Window management __(only for linux)__
  - [x] Get window title using `.getWindow`
  - [x] Transform windows size using `.transformByIndex`

#### Join Discord

[![](https://discordapp.com/api/guilds/715564894904123424/widget.png?style=banner2)](https://discord.gg/uqywa4W)

### Documentation

Detailed documentation of the API is available at:

https://autopilot.divy.work

### Requirements

#### Linux
```sh
sudo apt-get update
sudo apt-get install libdbus-1-dev x11-xserver-utils wmctrl libxtst-dev cmake libc-dev libx11-dev libxcb1-dev
```

### Usage

Running your Deno script with AutoPilot requires some flags
```sh
deno run --unstable -A file.ts
```

**NOTE**: Prebuilt binaries are automatically downloaded the first time you import Autopilot in your project and are cached.

```typescript
import AutoPilot from 'https://deno.land/x/autopilot/mod.ts';

// create a new AutoPilot instance.
var pilot = new AutoPilot();

// type a string
pilot.type("Yay! This works");

// alert something
pilot.alert("This is a alert");

// get screen size
pilot.screenSize();

// move mouse
pilot.moveMouse(200, 400);

// take a full-screen screenshot
pilot.screenshot("screenshot.png");
```
