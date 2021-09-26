"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("./path");
const utils_1 = require("./utils");
function setupConfig(outDir, moduleType, targetType) {
    // Configure the tsconfit.package.json...
    const path = path_1.resolve("tsconfig.package.json");
    const content = utils_1.loadJson(path);
    content.compilerOptions.module = moduleType;
    content.compilerOptions.target = targetType;
    utils_1.saveJson(path, content, true);
    // Configure the browser field for every pacakge, copying the
    // browser.umd filed for UMD and browser.esm for ESM
    path_1.dirnames.forEach((dirname) => {
        const filename = path_1.getPackageJsonPath(dirname);
        const info = utils_1.loadJson(filename);
        if (info._ethers_nobuild) {
            return;
        }
        let path = path_1.resolve("packages", dirname, "tsconfig.json");
        let content = utils_1.loadJson(path);
        content.compilerOptions.outDir = outDir;
        utils_1.saveJson(path, content, true);
    });
}
function setupBuild(buildModule) {
    if (buildModule) {
        setupConfig("./lib._esm/", "es2015", "es2015");
    }
    else {
        setupConfig("./lib/", "commonjs", "es5");
    }
}
exports.setupBuild = setupBuild;
