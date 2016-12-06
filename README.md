# Polymer App - Sample using REST API

#### Sample Polymer application 
#### Features: view, browse, and create content using the Nuxeo Platform.

This sample application is a starting point for building Nuxeo connected apps using a basic
drawer-based layout. The layout is provided by `app-layout` elements.

## Setup

#### Follow instructions to download and install Nuxeo here: https://www.nuxeo.com/downloads/

Next, clone this repository in a separate directory and follow instructions below:

### Install dependencies

```sh
npm install -g gulp bower && npm install && bower install
```

### Development workflow

#### Serve / watch

```sh
gulp serve
```

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.

#### Run tests

Testing is done with Nightwatch.js. 

To execute tests, first navigate to the 'polymer-nuxeo-mp/ftest/nightwatch' directory. Within that directory run the following commands:

```sh
npm start
```
In a separate terminal window/tab:

```sh
npm test
```
This runs the unit tests defined in the `ftest/nightwatch/tests` directory through `ftest/nightwatch/pages`

To execute tests, we use Selenium Web Driver. If you have trouble with this - please download it here (http://www.seleniumhq.org/download/)

#### Build & Vulcanize

```sh
gulp
```

Build and optimize the current project, ready for deployment. This includes linting as well as vulcanization, image, script, stylesheet and HTML optimization and minification.

## License

[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

##About Nuxeo

Nuxeo dramatically improves how content-based applications are built, managed and deployed, making customers more agile, innovative and successful. Nuxeo provides a next generation, enterprise ready platform for building traditional and cutting-edge content oriented applications. Combining a powerful application development environment with SaaS-based tools and a modular architecture, the Nuxeo Platform and Products provide clear business value to some of the most recognizable brands including Verizon, Electronic Arts, Sharp, FICO, the U.S. Navy, and Boeing. Nuxeo is headquartered in New York and Paris. More information is available at www.nuxeo.com.