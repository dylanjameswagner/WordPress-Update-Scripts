const spawnSync = require('child_process').spawnSync;

let landoOutput = spawnSync('lando', ['wp', 'plugin', 'update', '--all', '--dry-run', '--format=json'], { encoding : 'utf8' });
pluginData = JSON.parse(landoOutput.stdout);

for (let plugin of pluginData) {
    console.log(`Updating plugin ${plugin.name} from ${plugin.version} to ${plugin.update_version}`);
    let output = spawnSync('lando', ['wp', 'plugin', 'update', plugin.name, '--format=json'], { encoding : 'utf8' });
    let resultData;
    try {
        resultData = JSON.parse(output.stdout);
    } catch (e) {
        console.log(e);
        continue;
    }
    if (resultData[0].status == 'Updated') {
        console.log("Adding git commit...");
        spawnSync('git', ['add', '-A']),
        spawnSync('git', ['commit', '-m', `Update plugin ${plugin.name} from ${plugin.version} to ${plugin.update_version}`]);
    } else {
        console.log(`Error updating ${plugin.name} from ${plugin.version} to ${plugin.update_version}`);
    }
    
}