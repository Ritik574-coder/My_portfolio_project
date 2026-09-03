import { writeFileSync, copyFileSync } from "node:fs";
import { join } from "node:path";
import handler from "../.vercel/output/functions/__server.func/index.mjs";

async function main() {
  console.log("[gh-pages] Rendering static index.html for GitHub Pages...");
  const request = new Request("http://localhost/");
  const response = await handler.fetch(request);
  let html = await response.text();

  // Convert root-absolute paths to relative paths so GitHub Pages subpaths work
  html = html
    .replaceAll('="/', '="./')
    .replaceAll('"/assets/', '"./assets/')
    .replaceAll('"/__grok/', '"./__grok/');

  const staticDir = join(process.cwd(), ".vercel/output/static");
  const indexPath = join(staticDir, "index.html");
  const fallbackPath = join(staticDir, "404.html");

  writeFileSync(indexPath, html, "utf8");
  copyFileSync(indexPath, fallbackPath);

  console.log("[gh-pages] Successfully generated index.html and 404.html in .vercel/output/static");
}

main().catch((err) => {
  console.error("[gh-pages] Failed to generate static HTML:", err);
  process.exit(1);
});
