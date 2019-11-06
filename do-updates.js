const spawnSync = require('child_process').spawnSync;

let landoOutput = spawnSync('lando', ['wp', 'plugin', 'update', '--all', '--dry-run', '--format=json', '2>/dev/null'], { encoding : 'utf8' });
pluginData = JSON.parse(landoOutput.stdout);

for (let plugin of pluginData) {
    console.log(`Updating plugin ${plugin.name} from ${plugin.version} to ${plugin.update_version}`);
    spawnSync('lando', ['wp', 'plugin', 'update', plugin.name, '--format=json'], { encoding : 'utf8' });
    console.log("Adding git commit...");
    spawnSync('git', ['add', '-A']),
    spawnSync('git', ['commit', '-m', `Update plugin ${plugin.name} from ${plugin.version} to ${plugin.update_version}`]);
}