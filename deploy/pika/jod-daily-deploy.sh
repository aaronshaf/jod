#!/usr/bin/env bash
# Daily rebuild + deploy of jod.mrm.org so the static home page holds today's quote (America/Denver).
# Run by jod-daily.timer at 00:03 America/Denver. Source: ~/jod-build/repo (the released gen/ source). No secrets are printed.
set -euo pipefail
export PATH="$HOME/tools/node/bin:$PATH"
LOG="$HOME/jod-deploy/daily.log"
exec >>"$LOG" 2>&1
echo "=== $(TZ=America/Denver date '+%F %T %Z') daily build start"
cd "$HOME/jod-build/repo"
OUT="$HOME/jod-build/repo/dist-daily"
rm -rf "$OUT"
node gen/build.js "$OUT" | tail -2
test -s "$OUT/index.html" && test -s "$OUT/quotes.json"
# publish into the wrangler project (assets dir)
rsync -a --delete "$OUT"/ "$HOME/jod-deploy/master/dist/"
cp -f "$HOME/jod-build/repo/worker/index.js" "$HOME/jod-deploy/master/worker/index.js"
cd "$HOME/jod-deploy/master"
set -a; . "$HOME/.config/jod/cloudflare.env"; set +a   # sourced, never echoed
npx --yes wrangler@4.152.0 deploy --message "daily quote rebuild $(TZ=America/Denver date +%F)" 2>&1 | grep -Ev 'token|TOKEN|secret|Authorization' | tail -12
echo "=== $(TZ=America/Denver date '+%F %T %Z') daily build done"
