# Showcase of Different Mono Repo Approaches

This is only a showcase. Do not expect an awesome app. The focus is on showing different mono repo approaches and which steps are required.

_Switch branches to see different approaches_
You can clean the mono repo with the following command to start from a clean workspace:

```bash
$ yarn cleanup
```

## Approach 4 &ndash; Lerna with yarn workspaces

All 3 projects are located at _projects_ folder. The following steps are required to run the app:

1. Bootstrap all dependencies of all projects. No `lerna bootstrap` is required since `yarn` or `yarn install` is doing the same.

```bash
$ yarn
```

2. Build lib.

```bash
$ cd projects/lib
$ yarn build:lib
```

3. Run app.

```bash
$ cd projects/app
$ yarn serve
```

4. Run server.

```bash
$ cd projects/server
$ yarn start
```

## Thoughts about this Mono Repo Approach

`Lerna` does not have any advantage if you just consider the `mono repo perspective`. Dependency management and hoisting to root level is natively done by `Yarn Workspaces`. However, `Lerna` can add benefit with its sophisticated commands, e.g., publishing, scoped commands, running a series of operations, etc.
