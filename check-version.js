
var semver = require('semver');
var { engines } = require('./package');

const version = engines.node;
if (!semver.satisfies(process.version, version)) {
    console.log(`您当前版本的NodeJS: ${process.version} 不满足开发需要的NodeJS版本： ${version}，请升级。`);
    process.exit(1);
}