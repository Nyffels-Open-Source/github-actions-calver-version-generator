"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const github = __importStar(require("@actions/github"));
const dayjs_1 = __importDefault(require("dayjs"));
async function run() {
    try {
        const prefix = core.getInput("prefix") ?? "";
        const suffix = core.getInput("suffix") ?? "";
        const format = core.getInput("format") ?? "YYYYMMDD";
        const subversion = core.getInput("build") ?? "build";
        const buildNumber = github.context.runNumber;
        const currentDate = new Date().toUTCString();
        let versionStr = (0, dayjs_1.default)(currentDate).format(format);
        if (prefix.length > 0) {
            versionStr = prefix + versionStr;
        }
        if (suffix.length > 0) {
            versionStr += suffix;
        }
        switch (subversion) {
            default: {
                versionStr += `.${buildNumber}`;
            }
        }
        core.exportVariable("VERSION", versionStr);
        core.setOutput("version", versionStr);
    }
    catch (err) {
        core.setFailed(err.message);
    }
}
run();
//# sourceMappingURL=index.js.map