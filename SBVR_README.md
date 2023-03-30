# SpringboardVR Custom react-vnc

This repo is not perfect and should only be temporary (probably going to last
forever then). Main difference is that the React version has changed (from 17
to 16) and that the package will be hosted in the Github forked repo (not on
npm registry).

## Prepping Repo

Before running the custom publish script, pull any changes from upstream.
1. Check if there is an existing upstream remote (if exists, skip to 3)
```shell
git remote -v
```

2. Add upstream remote
```shell
git remote add upstream git@github.com:roerohan/react-vnc.git
```

3. Pull changes (no rebasing)
```shell
git fetch upstream
git merge upstream/main
```

4. Cherry pick changes from merge conflicts. No commands for this, just a manual
process for the following files. Keep all edits marked by `Springboard Edit`:
* prebulish.js
* .gitignore

5. Sync differences between `package.json.bak` and `package.json`. Again, another
manual process.
6. Run the `publish:sbvr` script
```shell
npm run publish:sbvr
```

7. Commit changes to origin and republish Arena.

| :information_source: NOTE                                                                                                                                                                                         |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Arena does not automatically rebuild the frontend when the solution is <br/>built, this is a manual process where the frontend app has to be built <br/>copied to the right place and then committed to the repo. |
