# Cline-CLI

Cline-CLI is a command line interface for Cline, a powerful AI assistant for developers.

## ⚠️ Development Status

**Note:** This project is currently under development and is not recommended for production use. Features may change, and stability is not guaranteed.

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

## License

Apache-2.0
