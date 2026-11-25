// Rebuild the CS295 Final study deck from lesson-sources/cs295-lecture-07-strings.md.
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const sourcePath = path.join(root, "lesson-sources", "cs295-lecture-07-strings.md");
const outputPath = path.join(root, "docs", "semester-04", "cs295", "final", "index.md");
const source = fs.readFileSync(sourcePath, "utf8").replace(/\r\n/g, "\n");

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, char =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function inline(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function renderBody(body) {
  const html = [];
  const lines = body.split("\n");
  let code = null;
  let language = "";
  for (const line of lines) {
    const trimmed = line.trim();
    const fence = trimmed.match(/^```([a-zA-Z0-9]*)$/);
    if (fence) {
      if (code) {
        html.push(`<pre><code class="language-${language}">${escapeHtml(code.join("\n")).replace(/\n/g, "&#10;")}</code></pre>`);
        code = null;
      } else {
        code = [];
        language = fence[1] || "text";
      }
      continue;
    }
    if (code) { code.push(line); continue; }
    if (!trimmed || trimmed === "---") continue;
    const subheading = trimmed.match(/^####\s+(.+)$/);
    if (subheading) {
      html.push(`<h4>${inline(subheading[1])}</h4>`);
    } else if (/^\*\s+💡/.test(trimmed)) {
      html.push(`<p class="lesson-remember">${inline(trimmed.slice(2))}</p>`);
    } else if (/^\*\s+/.test(trimmed)) {
      html.push(`<p class="lesson-point">${inline(trimmed.slice(2))}</p>`);
    } else if (/^\d+\.\s+/.test(trimmed)) {
      html.push(`<p class="lesson-step">${inline(trimmed)}</p>`);
    } else {
      html.push(`<p>${inline(trimmed)}</p>`);
    }
  }
  if (code) throw new Error("Unclosed code fence in lesson source");
  return html.join("\n");
}

const topicPattern = /^### \*\*Topic (\d+): (.+)\*\*\s*$/gm;
const matches = [...source.matchAll(topicPattern)];
if (matches.length !== 20) throw new Error(`Expected 20 topics, found ${matches.length}`);
const summaryStart = source.indexOf("## **Lecture 7 Quick Summary**");
if (summaryStart < 0) throw new Error("Lecture summary missing");

const topics = matches.map((match, index) => {
  const end = index + 1 < matches.length ? matches[index + 1].index : summaryStart;
  return {
    number: Number(match[1]),
    title: match[2],
    body: source.slice(match.index + match[0].length, end),
  };
});
if (topics.some((topic, index) => topic.number !== index + 1)) {
  throw new Error("Topics must be numbered 1 through 20");
}

const jumpLinks = topics.map(topic => {
  const number = String(topic.number).padStart(2, "0");
  return `<a href="#lesson-${number}" class="study-jump">${number} <span>${inline(topic.title)}</span></a>`;
}).join("\n");
const cards = topics.map(topic => {
  const number = String(topic.number).padStart(2, "0");
  const id = `lecture7-topic-${number}`;
  return `<details class="study-lesson" id="lesson-${number}" data-lesson-id="${id}"${topic.number === 1 ? " open" : ""}>
<summary><span class="lesson-index">${number}</span><span class="lesson-title">${inline(topic.title)}</span><span class="lesson-state">TO DO</span></summary>
<div class="lesson-body">
${renderBody(topic.body)}
<div class="lesson-actions"><button type="button" class="lesson-done" aria-pressed="false">Mark lesson done ✓</button><span>Lesson ${number} of 20</span></div>
</div>
</details>`;
}).join("\n\n");

const page = `---
hide:
  - toc
---

<div class="study-deck" data-study-deck="cs295-lecture-07">
<div class="study-dashboard">
<span class="p-eyebrow">CS295 / Final / Lecture 07</span>
<h1>Strings in Python</h1>
<p>Work through 20 short lessons, try the examples, and mark each one done. Your progress is saved in this browser.</p>
<div class="study-progress-label"><strong id="study-progress-count">0 of 20 complete</strong><span id="study-progress-percent">0%</span></div>
<div class="study-meter" role="progressbar" aria-label="Lecture 7 progress" aria-valuemin="0" aria-valuemax="20" aria-valuenow="0"><div class="study-meter-fill"></div></div>
<p class="study-complete-message" hidden>All 20 lessons done. Nice work! ★</p>
</div>
<nav class="study-jumps" aria-label="Jump to a lesson">
${jumpLinks}
</nav>
<div class="study-lessons">
${cards}
</div>
<section class="study-recap">
<span class="p-eyebrow">Quick recap</span>
<h2>Keep these five ideas</h2>
<ol>
<li>Strings are immutable: create a new string when you need a change.</li>
<li>Indexing starts at 0; negative indices count from the right.</li>
<li>Slices use <code>[start:end:step]</code>, with the end excluded.</li>
<li>Methods such as <code>.strip()</code>, <code>.split()</code>, <code>.join()</code>, and <code>.replace()</code> help parse text.</li>
<li>f-strings insert values and format their display.</li>
</ol>
<h3>Find vs index</h3>
<div class="study-table-wrap"><table><thead><tr><th>Method</th><th>Found</th><th>Missing</th></tr></thead><tbody><tr><td><code>.find()</code></td><td>First position</td><td><code>-1</code></td></tr><tr><td><code>.index()</code></td><td>First position</td><td>Raises <code>ValueError</code></td></tr></tbody></table></div>
<h3>Quick self-test</h3>
<ol>
<li>What happens when you run <code>"Python"[0] = "J"</code>?</li>
<li>What does <code>"Python"[::-1]</code> return?</li>
<li>What does <code>"banana".find("z")</code> return?</li>
</ol>
<a class="p-button p-button--secondary" href="../">← Back to CS295</a>
</section>
</div>
`;
fs.writeFileSync(outputPath, page, "utf8");
console.log(`Generated ${outputPath} with ${topics.length} lessons`);
