# Showcase of Different Mono Repo Approaches

This is only a showcase. Do not expect an awesome app. The focus is on showing different mono repo approaches and which steps are required.

_Switch branches to see different approaches_
You can clean the mono repo with the following command to start from a clean workspace:

```bash
$ npm run cleanup
```

## Approach 2 &ndash; Lerna with npm

All 3 projects are located at _projects_ folder. The following steps are required to run the app:

1. Init Lerna and bootstrap all dependencies of all projects.

```bash
$ npm i
$ npm run bootstrap
```

2. Build lib.

```bash
$ cd projects/lib
$ npm run build:lib
```

3. Run app.

```bash
$ cd projects/app
$ npm i
$ npm run serve
```

4. Run server.

```bash
$ cd projects/server
$ npm start
```
