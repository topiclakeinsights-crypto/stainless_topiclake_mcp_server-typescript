import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.post('/mcp', (req, res) => {
  const { jsonrpc, id, method } = req.body;

  if (method === 'initialize') {
    return res.json({
      jsonrpc: "2.0",
      id,
      result: {
        protocolVersion: "2024-11-05",
        capabilities: {
          resources: {},
          tools: {},
          prompts: {}
        },
        serverInfo: {
          name: "TopicLake MCP",
          version: "1.0.0"
        }
      }
    });
  }

  // You can add more logic for other methods here later

  return res.status(400).json({
    jsonrpc: "2.0",
    id,
    error: {
      code: -32601,
      message: "Method not implemented"
    }
  });
});

const PORT = process.env['PORT'] || 8080;
app.listen(PORT, () => {
  console.log(`MCP server listening on port ${PORT}`);
});