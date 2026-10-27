
## Build (Gatsby-free)

    cd gen && npm ci && node build.js ../dist   # renders src/ React components to static HTML + .md/.json, llms.txt, Pagefind
    node gen/parity.js <gatsby-snapshot> dist   # text/link parity check against the old Gatsby output
    npx wrangler deploy

## Agents

- Server: read-only MCP at `/mcp` (Worker, rate limited), JSON API at `/api/*`, `/llms.txt`, `/data/index.json`, per-discourse `index.md` / `index.json`. Overview for humans and agents: `/agents/`.
- WebMCP (in-browser agents): `gen/webmcp.js` is appended to the client bundle at build time (`__PF_PATH__` becomes the Pagefind path). It does nothing unless `document.modelContext` exists (`navigator.modelContext` in the Chrome 149 preview), then registers read-only tools (`readOnlyHint`): `search_discourses` (Pagefind, client side), `get_discourse`, `list_volumes`, `list_discourses_in_volume`, `get_speaker_discourses`, `get_daily_quote`, and `get_current_discourse` on discourse pages. They read only the static files (`/data/index.json`, `/<v>/<p>/index.json`, `/quotes.json`, Pagefind), so there is no server cost, and each result is short (default 1,500 characters, per Chrome's guidance) with canonical URLs and citations. On `/search/` the search form carries `toolname`/`tooldescription` (declarative API) and answers agent calls through `SubmitEvent.respondWith()`.
- Test: Chrome 156 with `--enable-features=WebMCP` (or `chrome://flags/#enable-webmcp-testing`); then `await document.modelContext.getTools()` and `executeTool(tool, {...})` in the console, or the Model Context Tool Inspector extension. Spec: https://webmachinelearning.github.io/webmcp/ , Chrome docs: https://developer.chrome.com/docs/ai/webmcp
