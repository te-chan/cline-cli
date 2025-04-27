
export class ErrorService {
	static logException(error: Error): void {
	}

	static logMessage(message: string, level: "error" | "warning" | "log" | "debug" | "info" = "log"): void {
	}
}
