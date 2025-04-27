import {
    vsCodeImpls,
    executeCommand,
    InitCommandOptions,
    TaskCommandOptions,
} from "./setup"

import { initMcpSettings, initSettings, loadSettings } from "./settings"
import { ExtensionContextImpl } from "./extensionContextImpl"
import { TaskController } from "./taskController"
import * as console from "./console"

executeCommand({
    init: executeInitComand,
    task: executeTaskCommand
})

async function executeInitComand(options: InitCommandOptions) {
    initSettings(options.settings)
    const mcpSettingsPath = await initMcpSettings(options.storage)

    console.log(`Cline-CLI Settings file at ${options.settings.fsPath}`)
    console.log(`Cline MCP Settings file at ${mcpSettingsPath}`)
}

async function executeTaskCommand(options: TaskCommandOptions) {
    const settings = loadSettings(options.settings)
    const context = new ExtensionContextImpl(options.storage)
    context.setGlobalState(settings.globalState)
    vsCodeImpls.workspace.setRootConfiguration(settings.settings)

    const taskController = new TaskController(context, options.forceApprovalUseMcp)

    if (options.customInstractions) {
        taskController.setCustomInstructions(options.customInstractions)
    }

    if (options.fullAuto) {
        taskController.setFullAutoMode()
    }

    if (options.task) {
        // cline-cli task "hoge" # always start a new task.
        // cline-cli task "hoge" --resume # resume task if exists.
        // cline-cli task "hoge" --resume-or-new # if the task exists, resume it; if not, start a new task.
        if (options.resumeOrNew) {
            taskController.resumeOrStartNewTask(options.task)
        }
        else if (options.resume) {
            taskController.resumeTask(options.task)
        }
        else {
            taskController.startNewTask(options.task)
        }
    }
    else {
        taskController.waitStartNewTask()
    }
}

