
## Build (Gatsby-free)

    cd gen && npm ci && node build.js ../dist   # renders src/ React components to static HTML + .md/.json, llms.txt, Pagefind
    node gen/parity.js <gatsby-snapshot> dist   # text/link parity check against the old Gatsby output
    npx wrangler deploy
