import { Anthropic } from "@anthropic-ai/sdk"
import { ApiHandler, SingleCompletionHandler } from "../"
import { ApiStream, ApiStreamUsageChunk } from "../transform/stream"
import { ApiHandlerOptions, ModelInfo, openAiModelInfoSaneDefaults } from "../../shared/api"


/**
 * Handles interaction with VS Code's Language Model API for chat-based operations.
 * This handler implements the ApiHandler interface to provide VS Code LM specific functionality.
 *
 * @implements {ApiHandler}
 *
 * @remarks
 * The handler manages a VS Code language model chat client and provides methods to:
 * - Create and manage chat client instances
 * - Stream messages using VS Code's Language Model API
 * - Retrieve model information
 *
 * @example
 * ```typescript
 * const options = {
 *   vsCodeLmModelSelector: { vendor: "copilot", family: "gpt-4" }
 * };
 * const handler = new VsCodeLmHandler(options);
 *
 * // Stream a conversation
 * const systemPrompt = "You are a helpful assistant";
 * const messages = [{ role: "user", content: "Hello!" }];
 * for await (const chunk of handler.createMessage(systemPrompt, messages)) {
 *   console.log(chunk);
 * }
 * ```
 */
export class VsCodeLmHandler implements ApiHandler, SingleCompletionHandler {

	constructor(options: ApiHandlerOptions) {
		throw new Error(
			`Cline <Language Model API>: Failed to initialize handler: Not supported"}`,
		)
	}

	createMessage(systemPrompt: string, messages: Anthropic.Messages.MessageParam[]): ApiStream {
		throw new Error("Method not implemented.")
	}
	getModel(): { id: string; info: ModelInfo } {
		throw new Error("Method not implemented.")
	}
	getApiStreamUsage?(): Promise<ApiStreamUsageChunk | undefined> {
		throw new Error("Method not implemented.")
	}
	completePrompt(prompt: string): Promise<string> {
		throw new Error("Method not implemented.")
	}
}
