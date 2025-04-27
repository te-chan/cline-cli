# Cline-CLI

Cline-CLI is a command line interface for [Cline](https://github.com/cline/cline), a powerful AI assistant for developers.

## ⚠️ Development Status

**Note:** This project is currently under development and is not recommended for production use. Features may change, and stability is not guaranteed.

Currently, `browser_action` and `execute_command` tools are not supported in Cline-CLI.

## Installation

You can install Cline-CLI using npm:

```bash
npm install -g @yaegaki/cline-cli
```

After installation, the `cline-cli` command will be available in your terminal.

## Usage

### Initialization

Before using Cline-CLI, you need to initialize it:

```bash
cline-cli init
```

This will create the necessary configuration files:
- Cline-CLI Settings file
- Cline MCP Settings file

### Configuration Files

By default, Cline-CLI stores its settings in the following location:
```
~/.cline_cli/cline_cli_settings.json
```

You can specify a custom path for the settings file using the `--settings` option:
```bash
cline-cli init --settings /path/to/your/settings.json
cline-cli task "your task" --settings /path/to/your/settings.json
```

This allows you to maintain different configuration files for different projects or environments.

#### Configuration File Structure

The settings file is a JSON file with the following main sections:

```json
{
  "globalState": {
    // API provider settings
    "apiProvider": "",
    "apiModelId": "",
    
    // AWS related settings
    "awsRegion": "",
    "awsBedrockEndpoint": "",
    
    // Google Vertex AI related settings
    "vertexProjectId": "",
    "vertexRegion": "",
    
    // OpenAI related settings
    "openAiBaseUrl": "",
    "openAiModelId": "",
    
    // Other AI provider settings
    "ollamaModelId": "",
    "ollamaBaseUrl": "",
    "anthropicBaseUrl": "",
    
    // Auto approval settings
    "autoApprovalSettings": {
      "enabled": true,
      "actions": {
        "readFiles": false,
        "editFiles": false,
        "executeSafeCommands": false,
        "useMcp": false
      },
      "maxRequests": 20
    }
  },
  "settings": {
    "cline.enableCheckpoints": false
  }
}
```

You can configure various AI providers, set auto-approval preferences, and adjust other Cline-specific settings through this file.

#### Example Configurations

Here are some example configurations for different API providers:

##### Anthropic Configuration

```json
{
  "globalState": {
    "apiProvider": "anthropic",
    "apiModelId": "claude-3-7-sonnet-20250219",
    "autoApprovalSettings": {
      "enabled": true,
      "actions": {
        "readFiles": true,
        "editFiles": false,
        "executeSafeCommands": true,
        "useMcp": false
      },
      "maxRequests": 20
    }
  },
  "settings": {
    "cline.enableCheckpoints": false
  }
}
```

##### Google Vertex AI Configuration

```json
{
  "globalState": {
    "apiProvider": "vertex",
    "apiModelId": "claude-3-7-sonnet@20250219",
    "vertexProjectId": "your-gcp-project-id",
    "vertexRegion": "us-central1",
    "autoApprovalSettings": {
      "enabled": true,
      "actions": {
        "readFiles": true,
        "editFiles": false,
        "executeSafeCommands": true,
        "useMcp": false
      },
      "maxRequests": 20
    }
  },
  "settings": {
    "cline.enableCheckpoints": false
  }
}
```

### API Keys

Cline-CLI supports passing API keys via environment variables. This is a secure way to provide authentication credentials without storing them in configuration files.

The following environment variables are supported:

```
API_KEY                 # Anthropic API key
OPEN_ROUTER_API_KEY     # OpenRouter API key
CLINE_API_KEY           # Cline API key
AWS_ACCESS_KEY          # AWS access key
AWS_SECRET_KEY          # AWS secret key
AWS_SESSION_TOKEN       # AWS session token
OPEN_AI_API_KEY         # OpenAI API key
GEMINI_API_KEY          # Gemini API key
OPEN_AI_NATIVE_API_KEY  # OpenAI Native API key
DEEP_SEEK_API_KEY       # DeepSeek API key
REQUESTY_API_KEY        # Requesty API key
TOGETHER_API_KEY        # Together API key
QWEN_API_KEY            # Qwen API key
DOUBAO_API_KEY          # Doubao API key
MISTRAL_API_KEY         # Mistral API key
LITE_LLM_API_KEY        # LiteLLM API key
ASKSAGE_API_KEY         # AskSage API key
XAI_API_KEY             # XAI API key
SAMBANOVA_API_KEY       # Sambanova API key
```

Example usage:

```bash
# Set API key in your environment
export API_KEY="your-api-key-here"

# Run Cline-CLI with the API key from the environment
cline-cli task "your task description"
```

For Windows Command Prompt:
```cmd
set API_KEY=your-api-key-here
cline-cli task "your task description"
```

For Windows PowerShell:
```powershell
$env:API_KEY="your-api-key-here"
cline-cli task "your task description"
```

### Working with Tasks

Cline-CLI operates with the concept of tasks. Here are the main commands:

#### Start a new task

```bash
cline-cli task "your task description"
```

#### Resume an existing task

```bash
cline-cli task "your task description" --resume
```

#### Resume if exists, otherwise start new

```bash
cline-cli task "your task description" --resume-or-new
```

#### Start in interactive mode

```bash
cline-cli task
```

This will wait for you to input a task description.

### Additional Options

- `--full-auto`: Run in fully automated mode
- `--custom-instructions`: Provide custom instructions for the task
- `--workspace`: Specify a custom workspace directory path

By default, Cline-CLI uses the current directory as the workspace. You can specify a different directory using the `--workspace` option:

```bash
cline-cli task "your task description" --workspace /path/to/your/project
```

This is useful when you want to run Cline-CLI on a specific project directory that is different from your current working directory.

## License

Apache-2.0
