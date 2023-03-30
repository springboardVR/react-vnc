const fs = require('fs');
const path = require('path');
const pkg = require('./package.json');

// NOTE(roerohan): remove dependencies that are not needed for the library.
const {
	react,
	'react-scripts': reactScripts,
	'react-dom': reactDom,
	'@testing-library/jest-dom': testingLibraryjestDom,
	'@testing-library/react': testingLibraryReact,
	'@testing-library/user-event': testingLibraryUserEvent,
	'@types/jest': typesJest,
	'@types/node': typesNode,
	'@types/react': typesReact,
	'@types/react-dom': typesReactDom,
	'web-vitals': webVitals,
	...dependencies
} = pkg.dependencies;

const peerDependencies = {
	react: '>=16.0.0',
	'react-scripts': '>=4.0.0',
	'react-dom': '>=16.0.0',
};

// NOTE(Springboard Edit): Keep the publish:sbvr script in tact
const {
  start,
  build,
  test,
  eject,
  'build:lib': buildLib,
  lint,
  'lint:fix': lintFix,
  prepare,
  prepack,
  prepublishOnly,
  postpublish,
  submodule,
  ...scripts
} = pkg.scripts;

fs.writeFileSync('package.json', JSON.stringify({
	name: pkg.name,
	description: pkg.description,
	version: pkg.version,
	repository: pkg.repository,
	keywords: pkg.keywords,
	main: pkg.main,
	module: pkg.module,
	exports: pkg.exports,
	typings: pkg.typings,
	publishConfig: pkg.publishConfig,
	dependencies,
	peerDependencies,
  scripts,
}, null, 4));

// NOTE(Springboard Edit): Remove non-essential files from dist directory
const builtDir = path.join('dist', 'types');
const builtTypesFiles = fs.readdirSync(builtDir);
builtTypesFiles.forEach(builtTypeFile => {
  switch (builtTypeFile) {
    case "lib": return;
    case "noVNC": return;
    default:
      fs.rmSync(path.join(builtDir, builtTypeFile));
      return;
  }
});
