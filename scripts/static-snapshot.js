// Runs after `react-scripts build`.
// 1) Injects a plain-HTML copy of the site content into build/index.html so
//    crawlers, LLM chatbots and agents that don't run JavaScript can read it.
//    React replaces it on load, so visitors never see it.
// 2) Writes build/llms.txt (Markdown summary for LLMs).
// Content comes from src/data/*.json, so update those files and rebuild.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const buildDir = path.resolve(root, process.env.BUILD_PATH || "build");
const load = (f) => JSON.parse(fs.readFileSync(path.join(root, "src/data", f), "utf8"));
const publications = load("publications.json");
const preprints = load("preprints.json");
const posters = load("posters.json");
const services = load("services.json");

const SITE = "https://daeunchoi.com";
// Keep in sync with src/sections/about.js
const ABOUT = {
  name: "DaEun Choi",
  intro:
    "I am a 3rd-year Ph.D. student in the School of Computing at KAIST, working with Prof. Juho Kim at KIXLAB. I interned at Adobe Research in summer 2025 and at Autodesk Research in summer 2026.",
  research:
    "My research interest is in Human-Computer Interaction (HCI). I design interactions for generative AI systems that support human creativity by enabling the expression, reuse, and evolution of ideas across diverse creative processes.",
  links: [
    ["CV", `${SITE}/CV.pdf`],
    ["Email", "mailto:daeun.choi@kaist.ac.kr"],
    ["Google Scholar", "https://scholar.google.com/citations?user=pI3S-WQAAAAJ"],
    ["Semantic Scholar", "https://www.semanticscholar.org/author/DaEun-Choi/2214749926"],
    ["X (Twitter)", "https://twitter.com/daeun_choi_"],
    ["LinkedIn", "https://www.linkedin.com/in/daeun-choi-1103/"],
    ["GitHub", "https://github.com/CheddarChoi"],
  ],
};

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const authors = (p) => (p.authors || []).map((a) => a.name).join(", ");
const venue = (p) => `${p.conference}${p.toappear ? " (to appear)" : ""}`;
const extraLinks = (p) =>
  [["Paper", p.url], ["PDF", p.pdf], ["arXiv", p.arxiv], ["Website", p.website], ["Video", p.video]].filter(
    ([, u]) => u
  );

// ---------- HTML snapshot ----------
const pubHtml = (p) =>
  `<li><strong>${esc(p.title)}</strong>. ${esc(authors(p))}. <em>${esc(venue(p))}</em>.` +
  (p.award ? ` ${esc(p.award)}.` : "") +
  extraLinks(p).map(([l, u]) => ` <a href="${esc(u)}">${l}</a>`).join("") +
  `</li>`;

const html = `<div id="static-snapshot" class="static-snapshot">
<h1>${ABOUT.name}</h1>
<p>${esc(ABOUT.intro)}</p>
<p>${esc(ABOUT.research)}</p>
<ul>${ABOUT.links.map(([l, u]) => `<li><a href="${esc(u)}">${l}</a></li>`).join("")}</ul>
<h2>Publications</h2><ol>${publications.map(pubHtml).join("")}</ol>
<h2>Preprints</h2><ol>${preprints.map(pubHtml).join("")}</ol>
<h2>Posters, Demos and Workshop Papers</h2><ol>${posters.map(pubHtml).join("")}</ol>
<h2>Academic Services</h2>
${services
  .map(
    (g) =>
      `<h3>${esc(g.role)}</h3><ul>${g.items
        .map((i) => `<li>${esc(i.name)} ${esc(i.year)}${i.award ? " " + esc(i.award) : ""}</li>`)
        .join("")}</ul>${g.legend ? `<p>${esc(g.legend)}</p>` : ""}`
  )
  .join("")}
</div>`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: ABOUT.name,
  alternateName: "최다은",
  url: SITE,
  image: `${SITE}/images/daeun.jpeg`,
  email: "daeun.choi@kaist.ac.kr",
  jobTitle: "Ph.D. Student",
  affiliation: { "@type": "CollegeOrUniversity", name: "KAIST", url: "https://kaist.ac.kr" },
  knowsAbout: ["Human-Computer Interaction", "Creativity Support Tools", "Generative AI", "Human-AI Interaction"],
  sameAs: ABOUT.links.map(([, u]) => u).filter((u) => u.startsWith("https://") && !u.startsWith(SITE)),
};

// Visually hidden (no flash before React loads) but present in the HTML source.
const style = `<style>.static-snapshot{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}</style>`;

const indexPath = path.join(buildDir, "index.html");
let index = fs.readFileSync(indexPath, "utf8");
index = index.replace(/<div id="static-snapshot"[\s\S]*?<\/div>\s*(?=<\/div>)/, ""); // idempotent
index = index.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
index = index.replace(
  "</head>",
  `${style}<script type="application/ld+json">${JSON.stringify(jsonLd)}</script></head>`
);
fs.writeFileSync(indexPath, index);

// ---------- llms.txt ----------
const pubMd = (p) =>
  `- **${p.title}**. ${authors(p)}. *${venue(p)}*.` +
  (p.award ? ` ${p.award}.` : "") +
  extraLinks(p).map(([l, u]) => ` [${l}](${u})`).join("");

const md = `# ${ABOUT.name}

> Ph.D. student in HCI at KAIST (KIXLAB). Research on generative AI systems that support human creativity.

${ABOUT.intro}

${ABOUT.research}

## Links
${ABOUT.links.map(([l, u]) => `- [${l}](${u})`).join("\n")}

## Publications
${publications.map(pubMd).join("\n")}

## Preprints
${preprints.map(pubMd).join("\n")}

## Posters, Demos and Workshop Papers
${posters.map(pubMd).join("\n")}

## Academic Services
${services
  .map(
    (g) =>
      `### ${g.role}\n${g.items.map((i) => `- ${i.name} ${i.year}${i.award ? " " + i.award : ""}`).join("\n")}${
        g.legend ? `\n\n${g.legend}` : ""
      }`
  )
  .join("\n\n")}
`;
fs.writeFileSync(path.join(buildDir, "llms.txt"), md);
console.log(`static-snapshot: injected HTML into index.html and wrote llms.txt in ${buildDir}`);
