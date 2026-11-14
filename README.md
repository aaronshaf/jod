
## Build (Gatsby-free)

    cd gen && npm ci && node build.js ../dist   # renders src/ React components to static HTML + .md/.json, llms.txt, Pagefind
    node gen/parity.js <gatsby-snapshot> dist   # text/link parity check against the old Gatsby output
    npx wrangler deploy

## Agents

- Server: read-only MCP at `/mcp` (Worker, rate limited), JSON API at `/api/*`, `/llms.txt`, `/data/index.json`, per-discourse `index.md` / `index.json`. Overview for humans and agents: `/agents/`.
- WebMCP (in-browser agents): `gen/webmcp.js` is appended to the client bundle at build time (`__PF_PATH__` becomes the Pagefind path). It does nothing unless `document.modelContext` exists (`navigator.modelContext` in the Chrome 149 preview), then registers read-only tools (`readOnlyHint`): `search_discourses` (Pagefind, client side), `get_discourse`, `list_volumes`, `list_discourses_in_volume`, `get_speaker_discourses`, `get_daily_quote`, and `get_current_discourse` on discourse pages. They read only the static files (`/data/index.json`, `/<v>/<p>/index.json`, `/quotes.json`, Pagefind), so there is no server cost, and each result is short (default 1,500 characters, per Chrome's guidance) with canonical URLs and citations. On `/search/` the search form carries `toolname`/`tooldescription` (declarative API) and answers agent calls through `SubmitEvent.respondWith()`.
- Test: Chrome 156 with `--enable-features=WebMCP` (or `chrome://flags/#enable-webmcp-testing`); then `await document.modelContext.getTools()` and `executeTool(tool, {...})` in the console, or the Model Context Tool Inspector extension. Spec: https://webmachinelearning.github.io/webmcp/ , Chrome docs: https://developer.chrome.com/docs/ai/webmcp

## Web platform (Modern Web Guidance)

- Lexend Deca is self-hosted from `gen/fonts/` (SIL OFL 1.1), latin file preloaded, `font-display: optional`; no third-party requests.
- `gen/build.js` appends security headers to `dist/_headers`: a hash-based CSP (SHA-256 of every inline script it emitted, recomputed each build, so the nightly quote script stays allowed), Referrer-Policy, Permissions-Policy, HSTS, COOP. Adding a new inline `<script>` needs no manual CSP edit; adding a third-party origin does.
- Dark mode follows `prefers-color-scheme` (no toggle): `build.js` rewrites colour literals in emitted CSS to custom properties (PALETTE; light values are the originals). Base CSS: `color-scheme: light dark`, `text-wrap: balance` (headings) / `pretty` (paragraphs), and a 150 ms cross-document view-transition fade (skipped for `prefers-reduced-motion`).
