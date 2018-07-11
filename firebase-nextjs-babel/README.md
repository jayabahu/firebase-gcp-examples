<h1 align="center">next.js on cloud functions for firebase with firebase hosting</h1>

<p align="center">host a next.js server rendered app on firebase ephemeral compute with clean hosting urls</p>

<!-- badges -->
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

<p align="center"></p>

<!-- toc -->

<p align="center">
    <em>
    <a href="#why">why</a>
    · <a href="#how">how</a>
    · <a href="#installation">installation</a>
    </em>
</p>

<!-- 01 -->

<h2 id="why">why</h2>
<!-- contents -->

<!-- 02 -->

<h2 id="how">how</h2>
<!-- contents -->

<!-- 03 -->

<h2 id="installation">installation</h2>
<!-- contents -->

List all business domains (herein pacakge) in a project:

```shell
yarn lerna ls
```

Add a package to all packages:
```shell
yarn lerna add cpx --dev
```

Remove `node_modules` for each package:
```shell
yarn lerna clean
```

## TODO
- [ ] single dist/ & deployment vs 1 per domain group
    - single
    - per domain: custom for each, although not so beneficial when using a BaaS as the deployment and build process won't be too different. custom build scripts per domain could be managed at the root package.json
- [x] babel cli source maps
- [x] remove individual functions - cannot be done. Must full deploy. This works though as it uploads new, updates existing, then deletes old. THIS WORKS - https://stackoverflow.com/questions/42840960/how-do-you-un-deploy-cloud-functions-for-firebase?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
- [x] deploy all from project root with this setup? - lerna
- [x] yarn workspaces / lerna to remove duplicated deps/need to install dev deps numerous times
- [ ] discuss differences with partial deployment of funcs from different folders with different deps vs same folder shared deps:
    - allFuncs/index.js with single package.json
    - func1/index.js with pkg.json & func2/index.js with pkg.json