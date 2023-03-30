const { exec } = require('child_process');
const { existsSync } = require('fs');
const { copyFile } = require('fs/promises');
const { join } = require('path');

const backupPackageFileName = "package.json.bak";
const packageFileName = "package.json";
let isBuilt = false;

const executeCommandSafely = async command => {
  let promise = new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        return reject(error);
      }

      console.debug(`Executed command '${command}' and received output:`);
      console.debug(`${stdout}`);
      console.debug(`${stderr}`);
      return resolve();
    });
  });

  return await promise;
}

const run = async () => {
  // First, check if we are already in a built state
  if(existsSync(join(__dirname, backupPackageFileName))) {
    console.info(`Found ${backupPackageFileName}, continuing in built state...`);
    isBuilt = true;
  }

  if(isBuilt) {
    try {
      await copyFile(join(__dirname, backupPackageFileName), join(__dirname, packageFileName));
    } catch(e) {
      console.error(`Encountered exception copying ${backupPackageFileName} to ${packageFileName}: ${e}`)
      return;
    }
  }

  console.info(`Copied ${backupPackageFileName} to ${packageFileName}`);
  console.info(`Installing npm dependencies...`);
  const installCommand = "npm install";
  await executeCommandSafely(installCommand);

  console.info(`Building...`);
  const buildCommand = "npm run build:lib";
  await executeCommandSafely(buildCommand);
  
  console.info(`Prepping publish...`);
  const prepPublishCommand = "npm run prepublishOnly";
  await executeCommandSafely(prepPublishCommand);
}

run().catch(reason => {
  console.error(`Failed to run: ${reason}`);
});
