/* The Process Sheet: draws the career flow diagram and the scroll-linked
   highlighter on the sheet's spine.
   Content lives in the NODES array below so it can be edited in one place. */

(function () {
  "use strict";

  const NS = "http://www.w3.org/2000/svg";
  /* ---------- Data: one unit per stop on the line, in chronological order ---------- */

  const NODES = [
    { id: "tub", tag: "B.Sc.", symbol: "vessel", name: "TU Berlin", role: "B.Sc. Industrial Engineering", dates: "10/2023 – 10/2027", code: "#15181c", href: "#education",
      instruments: [["LTX", "LaTeX"], ["FUS", "Fusion"], ["C++", "C / C++"]], tenure: "4 years · to 10/2027" },
    { id: "cct", tag: "Consulting", symbol: "mixer", name: "Company Consulting Team", role: "Student Consultant, project lead", dates: "06/2024 – 06/2026", code: "#1f5fbf", href: "#exp-cct",
      instruments: [["ISO", "ISO 31000"], ["XLS", "Excel"]], bypassUntilBefore: "se", bypassLabel: "Student consulting continues in parallel · 06/2024 – 06/2026", tenure: "2 years 1 month" },
    { id: "abb", tag: "Engineering", symbol: "pump", name: "ABB", role: "Working Student, Industrial Engineering", dates: "10/2024 – 07/2025", code: "#2a8a4a", href: "#exp-abb",
      instruments: [["CAD", "AutoCAD"]], tenure: "10 months" },
    { id: "ucb", tag: "Exchange", symbol: "exchanger", name: "UC Berkeley", role: "Exchange semester, IEOR", dates: "08/2025 – 12/2025", code: "#15181c", href: "#education", raised: true,
      instruments: [["ENT", "Entrepreneurship"], ["STU", "Start-ups"]], tenure: "1 semester · 5 months" },
    { id: "ey", tag: "Audit", symbol: "filter", name: "EY", role: "Intern in Auditing", dates: "01/2026 – 04/2026", code: "#b8641b", href: "#exp-ey",
      instruments: [], tenure: "4 months" },
    { id: "se", tag: "Current role", symbol: "turbine", name: "Siemens Energy", role: "Working Student, Data Analytics & AI in Procurement", dates: "06/2026 – today", code: "#0e7c86", href: "#exp-se", current: true,
      instruments: [], tenure: "4 months · ongoing" }
  ];

  /* ---------- SVG helpers ---------- */

  function el(name, attrs, children) {
    const e = document.createElementNS(NS, name);
    if (attrs) for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (children) for (const c of children) e.append(c);
    return e;
  }
  function txt(x, y, str, cls, anchor) {
    const t = el("text", { x, y, class: cls });
    if (anchor) t.setAttribute("text-anchor", anchor);
    t.textContent = str;
    return t;
  }
  function wrap(str, maxChars) {
    const words = str.split(" "), lines = [];
    let cur = "";
    for (const w of words) {
      if ((cur + " " + w).trim().length > maxChars && cur) { lines.push(cur); cur = w; }
      else cur = (cur + " " + w).trim();
    }
    if (cur) lines.push(cur);
    return lines;
  }

  /* Equipment symbols, ISA/ISO 10628 flavored, each centered on 0,0 within about 60px. */
  const SYMBOLS = {
    vessel(g) {
      g.append(el("rect", { x: -20, y: -34, width: 40, height: 68, rx: 14 }));
      g.append(el("line", { x1: -20, y1: -8, x2: 20, y2: -8, class: "thin" }));
      g.append(el("line", { x1: -20, y1: 10, x2: 20, y2: 10, class: "thin" }));
    },
    mixer(g) {
      g.append(el("rect", { x: -20, y: -28, width: 40, height: 58, rx: 12 }));
      g.append(el("line", { x1: 0, y1: -40, x2: 0, y2: 12 }));
      g.append(el("path", { d: "M-13,12 H13 M-13,12 l-4,7 M13,12 l4,7" }));
      g.append(el("circle", { cx: 0, cy: -46, r: 9 }));
      g.append(txt(0, -42, "M", "sym-text"));
    },
    pump(g) {
      g.append(el("circle", { cx: 0, cy: 0, r: 27 }));
      g.append(el("polygon", { points: "-12,-15 20,0 -12,15", class: "solid" }));
      g.append(el("line", { x1: -22, y1: 32, x2: 22, y2: 32 }));
    },
    exchanger(g) {
      g.append(el("circle", { cx: 0, cy: 0, r: 27 }));
      g.append(el("path", { d: "M-27,0 H-15 L-9,-12 L-1,12 L7,-12 L15,0 H27", class: "thin" }));
    },
    filter(g) {
      g.append(el("rect", { x: -30, y: -20, width: 60, height: 40 }));
      g.append(el("path", { d: "M-30,-20 L30,20 M-30,20 L30,-20", class: "thin" }));
    },
    turbine(g) {
      g.append(el("polygon", { points: "-24,-15 24,-32 24,32 -24,15" }));
      g.append(el("line", { x1: -40, y1: 0, x2: -24, y2: 0 }));
      g.append(el("line", { x1: 24, y1: 0, x2: 40, y2: 0 }));
    }
  };

  function symbol(node, x, y) {
    const g = el("g", { class: "sym", transform: `translate(${x} ${y})` });
    SYMBOLS[node.symbol](g);
    return g;
  }
  function arrow(x, y, dir) {
    // dir: "r" right, "d" down
    const pts = dir === "d" ? `${x - 5},${y - 7} ${x + 5},${y - 7} ${x},${y + 5}` : `${x - 7},${y - 5} ${x - 7},${y + 5} ${x + 5},${y}`;
    return el("polygon", { points: pts, class: "arrow" });
  }
  function bubble(x, y, code, label, labelDy, r) {
    const g = el("g");
    g.append(el("circle", { cx: x, cy: y, r: r || 20, class: "bubble-c" }));
    g.append(txt(x, y + 4, code, "bubble-t"));
    const title = el("title"); title.textContent = label; g.append(title);
    if (labelDy) g.append(txt(x, y + labelDy, label, "bubble-l"));
    return g;
  }
  function nodeLink(node) {
    const target = location.pathname.endsWith("career-flow.html") ? `index.html${node.href}` : node.href;
    const a = el("a", { class: "node", href: target, style: `--code:${node.code}` });
    a.setAttribute("aria-label", `${node.name}: ${node.role}, ${node.dates}. Jump to details.`);
    return a;
  }

  /* ---------- Horizontal layout (desktop) ---------- */

  function buildHorizontal(svg) {
    const W = 1200, lineY = 280, raise = 118, top = 18, H = 458;
    svg.setAttribute("viewBox", `0 ${top} ${W} ${H - top}`);
    const xs = NODES.map((_, i) => 110 + i * 196);
    const ys = NODES.map(n => (n.raised ? lineY - raise : lineY));

    // One continuous main path. The raised unit gets a bump.
    let d = `M24,${lineY}`;
    NODES.forEach((n, i) => {
      if (n.raised) {
        d += ` H${xs[i] - 98} V${lineY - raise} H${xs[i] + 98} V${lineY}`;
      }
    });
    d += ` H${W - 24}`;

    const main = el("path", { d, class: "line-main" });
    svg.append(main);

    // Flow arrows between units
    NODES.forEach((n, i) => {
      if (i === NODES.length - 1) return;
      const mid = (xs[i] + xs[i + 1]) / 2;
      const raisedHere = NODES[i].raised || NODES[i + 1].raised;
      if (NODES[i + 1].raised) svg.append(arrow(xs[i + 1] - 98 - 40, lineY, "r"));
      else if (NODES[i].raised) svg.append(arrow(xs[i] + 98 + 40, lineY, "r"));
      if (!raisedHere) svg.append(arrow(mid, lineY, "r"));
    });

    // Bypass (parallel consulting line), dashed, above everything.
    NODES.forEach((n, i) => {
      if (!n.bypassUntilBefore) return;
      const j = NODES.findIndex(m => m.id === n.bypassUntilBefore);
      const x1 = xs[i] + 54, x2 = xs[j] - 98, yTop = 48;
      const bp = el("path", { d: `M${x1},${lineY} V${yTop} H${x2} V${lineY}`, class: "line-bypass", style: `--code:${n.code}` });
      svg.append(bp);
      svg.append(el("polygon", { points: `${x2 - 5},${lineY - 20} ${x2 + 5},${lineY - 20} ${x2},${lineY - 9}`, class: "arrow", style: `fill:${n.code}` }));
      const bl = txt((x1 + x2) / 2, yTop - 10, n.bypassLabel, "bypass-l", "middle");
      bl.style.setProperty("--code", n.code);
      svg.append(bl);
    });

    // Units
    NODES.forEach((n, i) => {
      const x = xs[i], y = ys[i];
      const a = nodeLink(n);
      a.append(el("circle", { cx: x, cy: y, r: 44, class: "focus-ring" }));
      a.append(symbol(n, x, y));

      // Tag + color swatch above the symbol
      const labelBelow = n.raised || n.id === "cct";
      const maxW = 170;
      if (!labelBelow) {
        // label block above: dates, role (1-2 lines), name, tag
        const roleLines = wrap(n.role, 30);
        let ty = y - 62;
        a.append(txt(x, ty, n.tag, "node-tag", "middle")); ty -= 0;
        a.append(el("line", { x1: x - 12, y1: y - 46, x2: x + 12, y2: y - 46, class: "code-swatch" }));
        const nameY = y - 62 - 20;
        a.append(txt(x, nameY, n.name, "node-name", "middle"));
        let ry = nameY - 20 - (roleLines.length - 1) * 15;
        roleLines.forEach((l, k) => a.append(txt(x, ry + k * 15, l, "node-role", "middle")));
        a.append(txt(x, ry - 18, n.dates, "node-dates", "middle"));
      } else {
        const below = y + (n.raised ? 40 : 50);
        a.append(el("line", { x1: x - 12, y1: below - 4, x2: x + 12, y2: below - 4, class: "code-swatch" }));
        a.append(txt(x, below + 12, n.tag + "   " + n.name, "node-name", "middle"));
        const roleLines = n.raised ? [n.role] : wrap(n.role, 34);
        roleLines.forEach((l, k) => a.append(txt(x, below + 29 + k * 15, l, "node-role", "middle")));
        a.append(txt(x, below + 30 + roleLines.length * 15, n.dates, "node-dates", "middle"));
      }
      void maxW;
      svg.append(a);

      // Instruments
      const insts = n.instruments;
      if (insts.length) {
        const above = labelBelow; // bubbles go opposite the label
        const by = n.raised ? y - 66 : (above ? y - 78 : y + 88);
        const spacing = insts.some(p => p[1].length > 10) ? 92 : 48;
        const x0 = x - ((insts.length - 1) * spacing) / 2;
        const g = el("g");
        // leader from symbol edge to bubble bus
        const symEdge = above ? y - (n.symbol === "mixer" ? 56 : 36) : y + 36;
        const busY = above ? by + 22 : by - 22;
        g.append(el("path", { d: `M${x},${symEdge} V${busY} M${x0},${busY} H${x0 + (insts.length - 1) * spacing}`, class: "leader" }));
        insts.forEach((p, k) => {
          const bx = x0 + k * spacing;
          g.append(el("line", { x1: bx, y1: busY, x2: bx, y2: above ? by + 20 : by - 20, class: "leader" }));
          g.append(bubble(bx, by, p[0], p[1], above ? -28 : 36));
        });
        svg.append(g);
      }

      if (n.current) {
        const g = el("g");
        g.append(el("path", { d: `M${x},${y + 34} V${y + 62}`, class: "leader" }));
        g.append(el("rect", { x: x - 66, y: y + 62, width: 132, height: 24, class: "status-box" }));
        g.append(txt(x, y + 78, "CURRENT ROLE · 06/2026", "status-t"));
        svg.append(g);
      }
    });

    // Dimension lines: tenure per unit, drawn the way a sheet dimensions a feature.
    const dimY = H - 8;
    NODES.forEach((n, i) => {
      if (!n.tenure) return;
      const x = xs[i], half = 84;
      const g = el("g", { class: "dim" });
      g.append(el("line", { x1: x - half, y1: dimY, x2: x + half, y2: dimY }));
      g.append(el("line", { x1: x - half, y1: dimY - 6, x2: x - half, y2: dimY + 6 }));
      g.append(el("line", { x1: x + half, y1: dimY - 6, x2: x + half, y2: dimY + 6 }));
      g.append(el("polygon", { points: `${x - half},${dimY} ${x - half + 9},${dimY - 3} ${x - half + 9},${dimY + 3}`, class: "dim-tick" }));
      g.append(el("polygon", { points: `${x + half},${dimY} ${x + half - 9},${dimY - 3} ${x + half - 9},${dimY + 3}`, class: "dim-tick" }));
      g.append(txt(x, dimY - 6, n.tenure, "dim-t", "middle"));
      svg.append(g);
    });

  }

  /* ---------- Vertical layout (phones) ---------- */

  function buildVertical(svg) {
    const W = 360, step = 150, lineX = 52, top = 30;
    const H = top + (NODES.length - 1) * step + 120;
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    const ys = NODES.map((_, i) => top + 40 + i * step);
    const xs = NODES.map(n => (n.raised ? lineX + 40 : lineX));

    let d = `M${lineX},${top - 20}`;
    NODES.forEach((n, i) => {
      if (n.raised) d += ` V${ys[i] - 70} H${lineX + 40} V${ys[i] + 70} H${lineX}`;
    });
    d += ` V${H - 10}`;
    svg.append(el("path", { d, class: "line-main" }));

    NODES.forEach((n, i) => {
      if (i === NODES.length - 1) return;
      if (!NODES[i].raised && !NODES[i + 1].raised) svg.append(arrow(lineX, (ys[i] + ys[i + 1]) / 2, "d"));
    });

    NODES.forEach((n, i) => {
      if (!n.bypassUntilBefore) return;
      const j = NODES.findIndex(m => m.id === n.bypassUntilBefore);
      const y1 = ys[i] + 40, y2 = ys[j] - 60, bx = 18;
      svg.append(el("path", { d: `M${lineX},${y1} H${bx} V${y2} H${lineX}`, class: "line-bypass", style: `--code:${n.code}` }));
      svg.append(el("polygon", { points: `${lineX - 16},${y2 - 5} ${lineX - 16},${y2 + 5} ${lineX - 5},${y2}`, class: "arrow", style: `fill:${n.code}` }));
      const t = txt(bx - 6, (y1 + y2) / 2, "Consulting in parallel · 06/2024 – 06/2026", "bypass-l", "middle");
      t.setAttribute("transform", `rotate(-90 ${bx - 6} ${(y1 + y2) / 2})`);
      t.style.setProperty("--code", n.code);
      svg.append(t);
    });

    NODES.forEach((n, i) => {
      const x = xs[i], y = ys[i];
      const a = nodeLink(n);
      a.append(el("circle", { cx: x, cy: y, r: 44, class: "focus-ring" }));
      a.append(symbol(n, x, y));
      const lx = x + 58;
      a.append(txt(lx, y - 34, n.tag, "node-tag"));
      a.append(el("line", { x1: lx, y1: y - 24, x2: lx + 24, y2: y - 24, class: "code-swatch" }));
      a.append(txt(lx, y - 4, n.name, "node-name"));
      const roleLines = wrap(n.role, 30);
      roleLines.forEach((l, k) => a.append(txt(lx, y + 14 + k * 15, l, "node-role")));
      a.append(txt(lx, y + 14 + roleLines.length * 15 + 2, n.dates, "node-dates"));
      svg.append(a);

      const insts = n.instruments;
      const rowY = y + 14 + roleLines.length * 15 + 30;
      if (insts.length) {
        const g = el("g");
        insts.forEach((p, k) => g.append(bubble(lx + 14 + k * 38, rowY, p[0], p[1], 0, 14)));
        svg.append(g);
      }
      if (n.current) {
        const g = el("g");
        g.append(el("rect", { x: lx, y: rowY - 12, width: 132, height: 24, class: "status-box" }));
        g.append(txt(lx + 66, rowY + 4, "CURRENT ROLE · 06/2026", "status-t"));
        svg.append(g);
      }
    });

  }

  /* ---------- Build and rebuild on breakpoint change ---------- */

  const svg = document.querySelector(".pfd-svg");
  const mq = window.matchMedia("(max-width: 760px)");
  function build() {
    const keep = Array.from(svg.children).filter(c => c.tagName === "title" || c.tagName === "desc");
    svg.replaceChildren(...keep);
    if (mq.matches) buildVertical(svg);
    else buildHorizontal(svg);
  }
  if (svg) {
    build();
    mq.addEventListener("change", build);
  }

  /* ---------- Revision cloud outline ---------- */

  function cloudPath(w, h, r) {
    const n = Math.max(2, Math.round(w / (2 * r))), m = Math.max(2, Math.round(h / (2 * r)));
    const sx = w / n, sy = h / m;
    let d = "M0,0";
    for (let i = 0; i < n; i++) d += ` A${sx / 2},${sx / 2} 0 0 1 ${((i + 1) * sx).toFixed(1)},0`;
    for (let i = 0; i < m; i++) d += ` A${sy / 2},${sy / 2} 0 0 1 ${w},${((i + 1) * sy).toFixed(1)}`;
    for (let i = 0; i < n; i++) d += ` A${sx / 2},${sx / 2} 0 0 1 ${(w - (i + 1) * sx).toFixed(1)},${h}`;
    for (let i = 0; i < m; i++) d += ` A${sy / 2},${sy / 2} 0 0 1 0,${(h - (i + 1) * sy).toFixed(1)}`;
    return d + "Z";
  }
  const cloud = document.querySelector(".rev-cloud");
  if (cloud) {
    const outline = cloud.querySelector(".cloud-outline");
    const path = outline.querySelector("path");
    const draw = () => {
      const w = cloud.offsetWidth, h = cloud.offsetHeight;
      outline.setAttribute("viewBox", `0 0 ${w} ${h}`);
      path.setAttribute("d", cloudPath(w, h, 11));
    };
    draw();
    if ("ResizeObserver" in window) new ResizeObserver(draw).observe(cloud);
    else window.addEventListener("resize", draw);
  }

  /* ---------- Spine: highlighter follows the reader down the sheet ---------- */

  const spine = document.querySelector(".spine-yellow");
  const body = document.querySelector(".sheet-body");
  if (spine && body) {
    let ticking = false;
    let hasScrolled = false;
    const update = () => {
      ticking = false;
      if (!hasScrolled) return;
      const rect = body.getBoundingClientRect();
      const readLine = window.innerHeight * 0.55;
      const p = Math.min(1, Math.max(0, (readLine - rect.top) / rect.height));
      spine.style.setProperty("--progress", p.toFixed(4));
    };
    const onScroll = () => {
      hasScrolled = true;
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    spine.style.setProperty("--progress", "0");
  }

  /* ---------- Collapsible navigation ---------- */

  const menu = document.querySelector(".site-menu");
  if (menu) {
    const toggle = menu.querySelector(".menu-toggle");
    const panel = menu.querySelector(".site-menu-panel");
    const setOpen = open => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      panel.hidden = !open;
      menu.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", () => setOpen(panel.hidden));
    panel.addEventListener("click", () => setOpen(false));
    document.addEventListener("click", event => {
      if (!menu.contains(event.target)) setOpen(false);
    });
  }
})();
