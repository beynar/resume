# MCP Resume

To use the MCP resume, install the MCP server in the `.cursor` directory.

You will be redirected to mcplug.ai to signin and then redirected back to Cursor.

```json .cursor/mcp.json
{
  "mcpServers": {
    "arnaud-resume": {
      "command": "npx",
      "args": ["mcp-remote", "https://connect.mcplug.ai/mcp?id=01JTT9CYKNPCGK67M021AQTQQQ", "--http-only"]
    }
  }
}
```

A web version of the resume is available at [https://resume.beynar.workers.dev](https://resume.beynar.workers.dev).
