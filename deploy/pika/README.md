# Daily rebuild on pika

`jod-daily.timer` (systemd user timer, `OnCalendar=*-*-* 00:03:00 America/Denver`, linger enabled) runs `jod-daily-deploy.sh`, which rebuilds the site from `~/jod-build/repo`
and deploys it with wrangler, so the static home page already holds the new day's quote (America/Denver). It sources `~/.config/jod/cloudflare.env` (mode 600) and never prints it.
Install: copy the script to `~/jod-deploy/`, the two units to `~/.config/systemd/user/`, then `systemctl --user daemon-reload && systemctl --user enable --now jod-daily.timer`. Log: `~/jod-deploy/daily.log`.
If a rebuild fails, the home page still shows the right quote: the page embeds the next days' quotes and corrects itself before first paint (see the home quote block in `gen/build.js`).
