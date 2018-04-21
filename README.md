# Stream Logic
![](https://img.shields.io/github/release/patriciopenamunoz/stream-logic.svg) ![](https://img.shields.io/github/forks/patriciopenamunoz/stream-logic.svg) ![](https://img.shields.io/github/downloads/patriciopenamunoz/stream-logic/total.svg)

A simple controller that makes dynamic content for live streamings easier.

## How to use
For now, the application only can make a gallery of images which can be watched through a HTTP protocol (more features are coming!).

Just add your images into a folder and the app will do the rest.
While the app is executing, you can share the live view using the URL provided by the app which you can copy and paste it into your favorite Streaming application (like OBS Studio).
![](https://i.imgur.com/hlry6Zk.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing.

If you just want a release version for productive (or funny) purposes, you can get the binaries here: [Download the latest release.](https://github.com/patriciopenamunoz/stream-logic/releases)

### Prerequisites

To edit, test and execute the source code of this project you will Node.js (at least the 8.11.1 LTS version) with NPM.

### Installing

This project was build with Electron, so to prepare the development env just install the NPM packages that comes into the package.json
```
npm install
```
To start the application via command line, execute the following:
```
npm start
```

### Convert the source code to an executable app.

You can use [Electron Packager](https://github.com/electron-userland/electron-packager) for this task.
This is a quick example of how I use it:
```
electron-packager stream-logic --icon=stream-logic/lib/img/icon.ico --all stream-logic
```

## Built With

* [Electron](https://github.com/electron/electron) - The framework used
* [Node JS](https://maven.apache.org/) - The run-time enviroment
* [Vue.js]() - An open-source JavaScript framework for building user interfaces.

## Versioning

This project use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/patriciopenamunoz/stream-logic/tags).

## Authors

* **Patricio Andrés Peña Muñoz** - *Initial work* - [patriciopenamunoz](https://github.com/patriciopenamunoz/)

See also the list of [contributors](https://github.com/patriciopenamunoz/stream-logic/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* This is my first time trying to create a complete Github repository! (hehe... any suggestion is welcome)
* Thanks to [Derek Chiang](https://github.com/derekchiang) for his amazing [gist](https://gist.github.com/derekchiang/a38b72878d79d1fe4e19eb032ff2b505) which let me build a HTTP server in seconds.
* This README.md was possible thanks to this [gist](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) made by [Billie Thompson](https://gist.github.com/PurpleBooth).
