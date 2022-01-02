# Showcase of Different Mono Repo Approaches

Companion project to my [blog post](https://doppelmutzi.github.io/monorepo-lerna-yarn-workspaces/) on mono-repo approaches with different package managers.

This is only a showcase. Do not expect an awesome app. The focus is on showing different mono repo approaches and which steps are required.

_Switch branches to see different approaches_
You can clean the mono repo with the following command to start from a clean workspace:

```bash
$ yarn cleanup
```

## Approach 1 &ndash; Do it yourself

All 3 projects are located at _projects_ folder. The following steps are required to run the app:

1. Install dependencies of lib project. Build lib.

```bash
$ cd projects/lib
$ yarn
$ yarn build:lib
```

2. Install dependencies of app project. Run app.

```bash
$ cd projects/app
$ yarn
$ yarn serve
```

3. Install dependencies and run server.

```bash
$ cd projects/server
$ yarn
$ yarn start
```
