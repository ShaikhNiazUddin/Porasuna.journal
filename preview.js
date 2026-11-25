// Local preview for machines without Python. Run: node preview.js
// The published site is still built by MkDocs from docs/.
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const docs = path.resolve(__dirname, "docs");
const port = Number(process.env.PORT || 8000);
const sections = [
  ["class-test", "Class Test"],
  ["mid-term", "Mid Term"],
  ["final", "Final"],
  ["presentation", "Presentation"],
  ["project", "Project"],
];
const courseLabels = { pphs7102: "PPHS 7102" };
function courseLabel(name) { return courseLabels[name] || name.toUpperCase(); }

function exists(file) { return fs.existsSync(file); }
function esc(value) {
  return String(value).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[c]);
}
function label(name) {
  if (/^ct-\d+$/.test(name)) return "Class Test " + name.slice(3);
  return sections.find(([key]) => key === name)?.[1] || courseLabels[name] || name.replace(/-/g, " ").toUpperCase();
}
function semesterDirs() {
  return fs.readdirSync(docs, { withFileTypes: true })
    .filter(x => x.isDirectory() && /^semester-\d\d$/.test(x.name))
    .map(x => x.name).sort();
}
function courseDirs(semester) {
  const folder = path.join(docs, semester);
  const preferred = {
    "semester-01": ["bus101", "eng7101", "mat101", "sta191"],
    "semester-02": ["cs191", "mat102", "phy100"],
    "semester-03": ["dsa101", "eng7102", "mat291"],
    "semester-04": ["pphs7102", "cs295", "sta293"],
  }[semester] || [];
  return fs.readdirSync(folder, { withFileTypes: true })
    .filter(x => x.isDirectory() && /^[a-z]+\d+$/.test(x.name))
    .map(x => x.name)
    .sort((a, b) => (preferred.indexOf(a) < 0 ? 99 : preferred.indexOf(a)) -
                    (preferred.indexOf(b) < 0 ? 99 : preferred.indexOf(b)) || a.localeCompare(b));
}
function allPages() {
  const pages = [{ title: "Home", href: "/" }];
  for (const sem of semesterDirs()) {
    const n = Number(sem.slice(-2));
    pages.push({ title: "Semester " + n, href: "/" + sem + "/" });
    for (const course of courseDirs(sem)) {
      const base = "/" + sem + "/" + course + "/";
      pages.push({ title: courseLabel(course), href: base });
      for (const [key, title] of sections) {
        if (exists(path.join(docs, sem, course, key, "index.md"))) {
          pages.push({ title: courseLabel(course) + " — " + title, href: base + key + "/" });
        }
      }
    }
  }
  return pages;
}
function inline(value) {
  return esc(value)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}
function markdown(source) {
  const lines = source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "").split(/\r?\n/);
  const out = [];
  let list = false;
  function closeList() { if (list) { out.push("</ul>"); list = false; } }
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) { closeList(); continue; }
    if (line.trimStart().startsWith("<")) { closeList(); out.push(line); continue; }
    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      closeList();
      const level = heading[1].length;
      out.push(`<h${level}>${inline(heading[2])}</h${level}>`);
      continue;
    }
    const item = line.match(/^-\s+(.+)$/);
    if (item) {
      if (!list) { out.push("<ul>"); list = true; }
      out.push("<li>" + inline(item[1]) + "</li>");
      continue;
    }
    const note = line.match(/^!!!\s+\w+\s+"([^"]+)"/);
    if (note) {
      closeList();
      const body = (lines[i + 1] || "").trim();
      out.push('<div class="admonition"><p class="admonition-title">' +
               esc(note[1]) + "</p><p>" + inline(body) + "</p></div>");
      i++;
      continue;
    }
    closeList();
    out.push("<p>" + inline(line) + "</p>");
  }
  closeList();
  return out.join("\n");
}
function sidebar(parts) {
  const sem = parts[0], course = parts[1];
  let items = '<a class="preview-side-title" href="/">PORASUNA</a>';
  if (course) {
    items += `<a href="/${sem}/">← Semester ${Number(sem.slice(-2))}</a>`;
    items += `<a class="preview-side-heading" href="/${sem}/${course}/">${courseLabel(course)}</a>`;
    for (const [key, title] of sections) {
      if (exists(path.join(docs, sem, course, key, "index.md"))) {
        items += `<a href="/${sem}/${course}/${key}/">${title}</a>`;
      }
    }
    return items;
  }
  if (sem) {
    items += '<a href="/">← All semesters</a>';
    items += `<span class="preview-side-heading">Semester ${Number(sem.slice(-2))}</span>`;
    for (const c of courseDirs(sem)) items += `<a href="/${sem}/${c}/">${courseLabel(c)}</a>`;
    return items;
  }
  for (const s of semesterDirs()) items += `<a href="/${s}/">Semester ${Number(s.slice(-2))}</a>`;
  return items;
}
function page(relative, content) {
  const parts = relative.split("/").filter(Boolean).filter(x => x !== "index.md");
  const title = parts.length ? parts.map(label).join(" / ") : "Home";
  const entries = allPages();
  const dropdown = semesterDirs().map(s =>
    `<a href="/${s}/">Semester ${Number(s.slice(-2))}</a>`).join("");
  return `<!doctype html>
<html lang="en" data-md-color-scheme="default"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)} · Porasuna</title>
<link rel="icon" href="/assets/brand-logo.png" type="image/png">
<link rel="stylesheet" href="/assets/stylesheets/porasuna.css">
<script src="/assets/javascripts/lesson-progress.js" defer></script>
<style>
  html{font-size:20px}*{box-sizing:border-box}body{margin:0;color:var(--p-ink)}
  .md-header{position:sticky;top:0;z-index:10}.preview-header{max-width:1440px;margin:auto;display:flex;align-items:center;gap:1rem;padding:.5rem 1.4rem}
  .preview-brand{color:var(--p-ink);font:700 1rem var(--p-display);text-decoration:none;white-space:nowrap}
  .preview-brand-mark{display:inline-block;width:1.1rem;height:1.6rem;margin-right:.35rem;object-fit:contain;vertical-align:middle}
  .preview-search{margin-left:auto;position:relative;max-width:18rem;width:100%}.preview-search input{width:100%;padding:.45rem .6rem;background:var(--p-paper);color:var(--p-ink);border:2px solid var(--p-ink);box-shadow:3px 3px 0 var(--p-ink);font:400 .65rem var(--p-body)}
  #results{position:absolute;top:2.4rem;right:0;width:100%;max-height:16rem;overflow:auto;background:var(--p-paper);border:2px solid var(--p-ink);box-shadow:5px 5px 0 var(--p-ink);display:none}
  #results a{display:block;padding:.45rem .6rem;color:var(--p-ink);font-size:.65rem;text-decoration:none;border-bottom:1px solid var(--p-ink)}#results a:hover{background:var(--p-yellow)}
  .preview-toggle{padding:.4rem .55rem;background:var(--p-paper);color:var(--p-ink);border:2px solid var(--p-ink);font-size:.8rem;cursor:pointer}
  .preview-tabs{display:flex;align-items:center;gap:1.2rem;max-width:1440px;margin:auto;padding:.3rem 1.4rem}.preview-tabs a,.preview-tab-button{font:700 .58rem var(--p-display);text-transform:uppercase;color:var(--p-ink);text-decoration:none}
  .preview-menu{position:relative}.preview-tab-button{border:0;background:none;cursor:pointer}.preview-dropdown{display:none;position:absolute;top:100%;left:0;min-width:10rem;padding:.4rem;background:var(--p-paper);border:2px solid var(--p-ink);box-shadow:5px 5px 0 var(--p-ink)}.preview-menu:hover .preview-dropdown,.preview-menu:focus-within .preview-dropdown{display:block}.preview-dropdown a{display:block;padding:.4rem}
  .preview-layout{display:grid;grid-template-columns:11rem minmax(0,1fr);gap:1.4rem;max-width:1440px;margin:1.4rem auto;padding:0 1.4rem}.md-sidebar{position:sticky;top:6rem;align-self:start;max-height:calc(100vh - 7rem);overflow:auto}.md-sidebar a,.md-sidebar span{display:block;padding:.4rem .55rem;color:var(--p-ink);font-size:.66rem;text-decoration:none}.md-sidebar a:hover{background:var(--p-yellow)}.md-sidebar .preview-side-title,.md-sidebar .preview-side-heading{font:700 .7rem var(--p-display);text-transform:uppercase;border-bottom:2px solid var(--p-ink);margin-bottom:.4rem}.md-content{min-width:0}.md-typeset h1{margin-top:0}.md-typeset ul{padding-left:1.2rem}.md-typeset li{margin:.3rem 0}.md-typeset .admonition{padding:.6rem 1rem}.md-typeset .admonition-title{margin:-.6rem -1rem .6rem;padding:.4rem 1rem}
  @media(max-width:800px){.preview-layout{display:block;padding:0 .7rem}.md-sidebar{position:static;display:flex;overflow:auto;white-space:nowrap;max-height:none;margin-bottom:1rem}.md-sidebar a,.md-sidebar span{border:1px solid var(--p-ink);margin-right:.35rem}.preview-header{padding:.5rem .7rem}.preview-tabs{padding:.25rem .7rem}.preview-search{max-width:10rem}.preview-brand{font-size:.7rem}}
</style></head><body>
<header class="md-header"><div class="preview-header"><a class="preview-brand" href="/"><img class="preview-brand-mark" src="/assets/brand-logo.png" alt="">PORASUNA</a><div class="preview-search"><input id="search" type="search" aria-label="Search courses and pages" placeholder="Search courses..."><div id="results"></div></div><button class="preview-toggle" id="theme" aria-label="Toggle dark mode">☾</button></div></header>
<nav class="md-tabs"><div class="preview-tabs"><a href="/">Home</a><div class="preview-menu"><button class="preview-tab-button">Semesters ▾</button><div class="preview-dropdown">${dropdown}</div></div></div></nav>
<main class="preview-layout"><aside class="md-sidebar md-nav">${sidebar(parts)}</aside><article class="md-content"><div class="md-content__inner md-typeset">${markdown(content)}</div></article></main>
<script>
const pages=${JSON.stringify(entries)};
const search=document.getElementById("search"),results=document.getElementById("results");
search.addEventListener("input",()=>{const q=search.value.trim().toLowerCase();results.innerHTML=q?pages.filter(p=>p.title.toLowerCase().includes(q)).slice(0,12).map(p=>'<a href="'+p.href+'">'+p.title+'</a>').join(""):"";results.style.display=results.innerHTML?"block":"none"});
document.getElementById("theme").onclick=()=>{const root=document.documentElement;const next=root.dataset.mdColorScheme==="default"?"slate":"default";root.dataset.mdColorScheme=next;localStorage.setItem("porasuna-theme",next)};
document.documentElement.dataset.mdColorScheme=localStorage.getItem("porasuna-theme")||"default";
</script></body></html>`;
}

http.createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname); }
  catch { res.writeHead(400).end("Bad URL"); return; }
  let relative = pathname.replace(/^\/+/, "");
  if (!relative || relative.endsWith("/")) relative += "index.md";
  let file = path.resolve(docs, relative);
  if (file !== docs && !file.startsWith(docs + path.sep)) { res.writeHead(403).end("Forbidden"); return; }
  if (!exists(file) || !fs.statSync(file).isFile()) { res.writeHead(404).end("Page not found"); return; }
  const ext = path.extname(file).toLowerCase();
  const types = { ".css": "text/css", ".svg": "image/svg+xml", ".otf": "font/otf",
                  ".pdf": "application/pdf", ".js": "application/javascript", ".png": "image/png" };
  res.setHeader("Content-Type", ext === ".md" ? "text/html; charset=utf-8" : (types[ext] || "application/octet-stream"));
  res.end(ext === ".md" ? page(relative, fs.readFileSync(file, "utf8")) : fs.readFileSync(file));
}).listen(port, "127.0.0.1", () => {
  console.log("Porasuna local preview: http://127.0.0.1:" + port + "/");
});
