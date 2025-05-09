# MCP Resume

To use the MCP resume, install the MCP server in the `.cursor` directory.

You will be redirected to mcplug.ai to signin and then redirected back to Cursor.

```json .cursor/mcp.json
{
  "mcpServers": {
    "beynar-resume": {
      "command": "npx",
      "args": ["mcp-remote", "https://connect.mcplug.ai/mcp?id=01JTT8M6779MNJXT08VVP9G347", "--http-only"]
    }
  }
}
```

A web version of the resume is available at [https://resume.beynar.workers.dev](https://resume.beynar.workers.dev).
