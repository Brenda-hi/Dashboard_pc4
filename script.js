/* =====================================================================
   DOE DASHBOARD UNI-FIIS — PC4 Control Estadístico de Procesos
   ---------------------------------------------------------------------
   ⚠️ ZONA DE EDICIÓN — EDITA SOLO ESTE BLOQUE (PROBLEMAS) MAÑANA.
   Todo lo que está debajo de "MOTOR DEL DASHBOARD" es lógica genérica,
   no necesitas tocarla.

   Por cada problema completa:
     - titulo / enunciado / imagenEnunciado (opcional)
     - tipoCarta: 'xbar-r' | 'individuals' | 'p' | 'c'
     - datos: según el tipo de carta (ver ejemplos abajo)
     - identificacion: por qué esa carta es la adecuada
     - excelNotas / minitabNotas: lo que quieras describir de tu desarrollo
     - interpretacion / conclusiones
     - prompts: registro de prompts usados con la IA
     - completado: true cuando termines el problema (activa el check ✅)
   ===================================================================== */

const PROBLEMAS = [
  {
    id: "problema-1",
    numero: 1,
    icono: "📐",
    titulo: "Título del Problema 1 (edítalo)",
    enunciado:
      "Pega aquí el enunciado completo del problema 1 tal como aparece en el examen: " +
      "contexto de la empresa, la variable medida, el tamaño de subgrupo (n) y la " +
      "frecuencia de muestreo.",
    tipoCarta: "xbar-r", // 'xbar-r' | 'individuals' | 'p' | 'c'
    // Ejemplo con la estructura del enunciado guía (Amazon Robotics, n=5).
    // Reemplaza estos subgrupos por los datos reales del Problema 1.
    datos: {
      unidad: "g",
      subgrupos: [
        [54.8, 54.9, 55.0, 54.7, 54.9],
        [55.1, 55.0, 54.9, 55.2, 55.1],
        [55.2, 55.3, 55.1, 55.2, 55.4],
        [55.5, 55.4, 55.6, 55.5, 55.4],
        [55.8, 55.7, 55.6, 55.8, 55.7],
      ],
    },
    identificacion:
      "Explica aquí por qué corresponde una carta X̄-R (o la que corresponda): " +
      "tipo de variable (continua/discreta), tamaño de subgrupo, y qué se busca detectar.",
    excelNotas:
      "Describe el procedimiento seguido en Excel: fórmulas de X̄, R, límites de control, " +
      "funciones usadas (PROMEDIO, MAX-MIN, etc.) y cómo se construyó el gráfico.",
    minitabNotas:
      "Describe el procedimiento en Minitab Assistant: menú utilizado (Assistant > Control Charts), " +
      "resultados relevantes del reporte de diagnóstico y capacidad si aplica.",
    interpretacion:
      "Interpreta los resultados: ¿el proceso está en control estadístico? ¿hay puntos fuera de límites, " +
      "rachas, tendencias? ¿qué implica para el proceso real?",
    conclusiones:
      "Conclusiones técnicas del problema 1 y recomendaciones para la empresa.",
    prompts: [
      { prompt: "", objetivo: "", respuesta: "", modifique: "", reflexion: "" },
    ],
    completado: false,
  },
  {
    id: "problema-2",
    numero: 2,
    icono: "📏",
    titulo: "Título del Problema 2 (edítalo)",
    enunciado: "Pega aquí el enunciado completo del problema 2.",
    tipoCarta: "individuals",
    // Para 'individuals' (carta I-MR): un solo array de mediciones individuales.
    datos: {
      unidad: "",
      valores: [10, 10.2, 9.8, 10.1, 9.9, 10.3, 10.0, 9.7, 10.2, 10.1],
    },
    identificacion: "Justifica la elección de la carta I-MR u otra.",
    excelNotas: "Notas del desarrollo en Excel.",
    minitabNotas: "Notas del desarrollo en Minitab.",
    interpretacion: "Interpretación de resultados.",
    conclusiones: "Conclusiones del problema 2.",
    prompts: [
      { prompt: "", objetivo: "", respuesta: "", modifique: "", reflexion: "" },
    ],
    completado: false,
  },
  {
    id: "problema-3",
    numero: 3,
    icono: "🔬",
    titulo: "Título del Problema 3 (edítalo)",
    enunciado: "Pega aquí el enunciado completo del problema 3.",
    tipoCarta: "p",
    // Para carta 'p' (proporción de defectuosos): un array de muestras {n, defectuosos}.
    datos: {
      muestras: [
        { n: 50, defectuosos: 3 },
        { n: 50, defectuosos: 2 },
        { n: 50, defectuosos: 4 },
        { n: 50, defectuosos: 1 },
        { n: 50, defectuosos: 5 },
      ],
    },
    identificacion: "Justifica por qué corresponde una carta p (o np).",
    excelNotas: "Notas del desarrollo en Excel.",
    minitabNotas: "Notas del desarrollo en Minitab.",
    interpretacion: "Interpretación de resultados.",
    conclusiones: "Conclusiones del problema 3.",
    prompts: [
      { prompt: "", objetivo: "", respuesta: "", modifique: "", reflexion: "" },
    ],
    completado: false,
  },
  {
    id: "problema-4",
    numero: 4,
    icono: "🧪",
    titulo: "Título del Problema 4 (edítalo)",
    enunciado: "Pega aquí el enunciado completo del problema 4.",
    tipoCarta: "c",
    // Para carta 'c' (conteo de defectos por unidad de inspección): array de conteos.
    datos: {
      conteos: [4, 6, 3, 5, 7, 4, 2, 6, 5, 4],
    },
    identificacion: "Justifica por qué corresponde una carta c (o u).",
    excelNotas: "Notas del desarrollo en Excel.",
    minitabNotas: "Notas del desarrollo en Minitab.",
    interpretacion: "Interpretación de resultados.",
    conclusiones: "Conclusiones del problema 4.",
    prompts: [
      { prompt: "", objetivo: "", respuesta: "", modifique: "", reflexion: "" },
    ],
    completado: false,
  },
  {
    id: "problema-5",
    numero: 5,
    icono: "🧮",
    titulo: "Título del Problema 5 (edítalo)",
    enunciado: "Pega aquí el enunciado completo del problema 5.",
    tipoCarta: "xbar-r",
    datos: {
      unidad: "",
      subgrupos: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    },
    identificacion: "Justificación de la carta elegida.",
    excelNotas: "Notas del desarrollo en Excel.",
    minitabNotas: "Notas del desarrollo en Minitab.",
    interpretacion: "Interpretación de resultados.",
    conclusiones: "Conclusiones del problema 5.",
    prompts: [
      { prompt: "", objetivo: "", respuesta: "", modifique: "", reflexion: "" },
    ],
    completado: false,
  },
  {
    id: "problema-6",
    numero: 6,
    icono: "📈",
    titulo: "Título del Problema 6 (edítalo)",
    enunciado: "Pega aquí el enunciado completo del problema 6.",
    tipoCarta: "individuals",
    datos: {
      unidad: "",
      valores: [0, 0, 0, 0, 0, 0],
    },
    identificacion: "Justificación de la carta elegida.",
    excelNotas: "Notas del desarrollo en Excel.",
    minitabNotas: "Notas del desarrollo en Minitab.",
    interpretacion: "Interpretación de resultados.",
    conclusiones: "Conclusiones del problema 6.",
    prompts: [
      { prompt: "", objetivo: "", respuesta: "", modifique: "", reflexion: "" },
    ],
    completado: false,
  },
];

/* =====================================================================
   MOTOR DEL DASHBOARD — no necesitas editar debajo de esta línea.
   ===================================================================== */

// Constantes estándar de cartas de control por variables (n = 2..10)
const CONSTANTES_SPC = {
  2: { A2: 1.880, D3: 0, D4: 3.267, d2: 1.128 },
  3: { A2: 1.023, D3: 0, D4: 2.575, d2: 1.693 },
  4: { A2: 0.729, D3: 0, D4: 2.282, d2: 2.059 },
  5: { A2: 0.577, D3: 0, D4: 2.115, d2: 2.326 },
  6: { A2: 0.483, D3: 0, D4: 2.004, d2: 2.534 },
  7: { A2: 0.419, D3: 0.076, D4: 1.924, d2: 2.704 },
  8: { A2: 0.373, D3: 0.136, D4: 1.864, d2: 2.847 },
  9: { A2: 0.337, D3: 0.184, D4: 1.816, d2: 2.970 },
  10: { A2: 0.308, D3: 0.223, D4: 1.777, d2: 3.078 },
};

const CHART_COLORS = {
  line: "#a78bfa",
  point: "#c4b5fd",
  cl: "#22d3ee",
  limits: "#f472b6",
  grid: "rgba(168,148,224,0.12)",
  text: "#a99bc9",
};

const chartRegistry = {};

function mean(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

/* ---------- Cálculo de límites según tipo de carta ---------- */

function calcularXbarR(subgrupos) {
  const n = subgrupos[0].length;
  const k = CONSTANTES_SPC[n] || CONSTANTES_SPC[5];
  const xbars = subgrupos.map(mean);
  const ranges = subgrupos.map((s) => Math.max(...s) - Math.min(...s));
  const xbarbar = mean(xbars);
  const rbar = mean(ranges);
  return {
    xbar: {
      labels: xbars.map((_, i) => "Subgrupo " + (i + 1)),
      valores: xbars,
      cl: xbarbar,
      ucl: xbarbar + k.A2 * rbar,
      lcl: xbarbar - k.A2 * rbar,
      titulo: "Carta X̄ (medias de subgrupo)",
    },
    r: {
      labels: ranges.map((_, i) => "Subgrupo " + (i + 1)),
      valores: ranges,
      cl: rbar,
      ucl: k.D4 * rbar,
      lcl: k.D3 * rbar,
      titulo: "Carta R (rangos de subgrupo)",
    },
  };
}

function calcularIndividuals(valores) {
  const movingRanges = [];
  for (let i = 1; i < valores.length; i++) {
    movingRanges.push(Math.abs(valores[i] - valores[i - 1]));
  }
  const xbar = mean(valores);
  const mrbar = mean(movingRanges);
  const d2 = 1.128; // n=2 para rango móvil
  return {
    individuals: {
      labels: valores.map((_, i) => "Obs. " + (i + 1)),
      valores: valores,
      cl: xbar,
      ucl: xbar + 3 * (mrbar / d2),
      lcl: xbar - 3 * (mrbar / d2),
      titulo: "Carta I (valores individuales)",
    },
    mr: {
      labels: movingRanges.map((_, i) => "Rango " + (i + 1)),
      valores: movingRanges,
      cl: mrbar,
      ucl: 3.267 * mrbar,
      lcl: 0,
      titulo: "Carta MR (rango móvil)",
    },
  };
}

function calcularP(muestras) {
  const totalN = muestras.reduce((a, m) => a + m.n, 0);
  const totalDef = muestras.reduce((a, m) => a + m.defectuosos, 0);
  const pbar = totalDef / totalN;
  const proporciones = muestras.map((m) => m.defectuosos / m.n);
  const nPromedio = totalN / muestras.length;
  const sigma = Math.sqrt((pbar * (1 - pbar)) / nPromedio);
  return {
    p: {
      labels: muestras.map((_, i) => "Muestra " + (i + 1)),
      valores: proporciones,
      cl: pbar,
      ucl: Math.min(1, pbar + 3 * sigma),
      lcl: Math.max(0, pbar - 3 * sigma),
      titulo: "Carta p (proporción de defectuosos)",
    },
  };
}

function calcularC(conteos) {
  const cbar = mean(conteos);
  const sigma = Math.sqrt(cbar);
  return {
    c: {
      labels: conteos.map((_, i) => "Unidad " + (i + 1)),
      valores: conteos,
      cl: cbar,
      ucl: cbar + 3 * sigma,
      lcl: Math.max(0, cbar - 3 * sigma),
      titulo: "Carta c (defectos por unidad)",
    },
  };
}

function fuerapuntos(serie) {
  return serie.valores.filter((v) => v > serie.ucl || v < serie.lcl).length;
}

/* ---------- Render de cada panel de problema ---------- */

function crearTablaSubgrupos(subgrupos, unidad) {
  const n = subgrupos[0].length;
  const headers = Array.from({ length: n }, (_, i) => "X" + (i + 1));
  let html = '<div class="table-wrap"><table class="data-table"><thead><tr><th>Subgrupo</th>';
  headers.forEach((h) => (html += `<th>${h}</th>`));
  html += `<th>X̄</th><th>R</th></tr></thead><tbody>`;
  subgrupos.forEach((s, i) => {
    const xb = mean(s).toFixed(3);
    const r = (Math.max(...s) - Math.min(...s)).toFixed(3);
    html += `<tr><td>${i + 1}</td>`;
    s.forEach((v) => (html += `<td>${v}${unidad ? " " + unidad : ""}</td>`));
    html += `<td class="cell-strong">${xb}</td><td class="cell-strong">${r}</td></tr>`;
  });
  html += "</tbody></table></div>";
  return html;
}

function crearTablaSimple(valores, colLabel, unidad) {
  let html = `<div class="table-wrap"><table class="data-table"><thead><tr><th>#</th><th>${colLabel}</th></tr></thead><tbody>`;
  valores.forEach((v, i) => {
    html += `<tr><td>${i + 1}</td><td>${v}${unidad ? " " + unidad : ""}</td></tr>`;
  });
  html += "</tbody></table></div>";
  return html;
}

function crearTablaP(muestras) {
  let html = `<div class="table-wrap"><table class="data-table"><thead><tr><th>Muestra</th><th>n</th><th>Defectuosos</th><th>p</th></tr></thead><tbody>`;
  muestras.forEach((m, i) => {
    html += `<tr><td>${i + 1}</td><td>${m.n}</td><td>${m.defectuosos}</td><td class="cell-strong">${(m.defectuosos / m.n).toFixed(3)}</td></tr>`;
  });
  html += "</tbody></table></div>";
  return html;
}

function statsCards(series) {
  return series
    .map(
      (s) => `
    <div class="stat-card">
      <span class="stat-label">${s.titulo}</span>
      <div class="stat-row"><span>LCS</span><strong>${s.ucl.toFixed(3)}</strong></div>
      <div class="stat-row"><span>LC</span><strong>${s.cl.toFixed(3)}</strong></div>
      <div class="stat-row"><span>LCI</span><strong>${s.lcl.toFixed(3)}</strong></div>
      <div class="stat-row"><span>Puntos fuera de control</span><strong class="${fuerapuntos(s) > 0 ? "flag-warn" : "flag-ok"}">${fuerapuntos(s)}</strong></div>
    </div>`
    )
    .join("");
}

function promptsTabla(prompts) {
  let rows = prompts
    .map(
      (p) => `
    <tr>
      <td>${p.prompt || "—"}</td>
      <td>${p.objetivo || "—"}</td>
      <td>${p.respuesta || "—"}</td>
      <td>${p.modifique || "—"}</td>
      <td>${p.reflexion || "—"}</td>
    </tr>`
    )
    .join("");
  return `<div class="table-wrap"><table class="data-table prompts-table">
    <thead><tr><th>Prompt</th><th>Objetivo</th><th>Respuesta de la IA</th><th>¿Qué modifiqué?</th><th>Reflexión personal</th></tr></thead>
    <tbody>${rows}</tbody></table></div>`;
}

function panelHTML(p) {
  const badge = p.completado
    ? '<span class="badge badge--done">✅ Completo</span>'
    : '<span class="badge badge--pending">✏️ Pendiente de datos</span>';

  return `
  <header class="problem-hero">
    <div class="problem-hero__top">
      <span class="problem-num">Problema ${p.numero}</span>
      ${badge}
    </div>
    <h2 class="problem-title"><span class="problem-icon">${p.icono}</span>${p.titulo}</h2>
  </header>

  <div class="card">
    <div class="card-title"><span class="card-title__icon">📝</span><span>1. Descripción del problema</span></div>
    <p class="card-text">${p.enunciado}</p>
    <div class="datatable-slot" data-slot="tabla-datos"></div>
  </div>

  <div class="card">
    <div class="card-title"><span class="card-title__icon">🧭</span><span>2. Identificación de la carta de control</span></div>
    <div class="chip-row">
      <span class="chip">Tipo sugerido: <strong>${p.tipoCarta.toUpperCase()}</strong></span>
    </div>
    <p class="card-text">${p.identificacion}</p>
  </div>

  <div class="grid-2">
    <div class="card">
      <div class="card-title"><span class="card-title__icon">🟩</span><span>3. Desarrollo en Excel</span></div>
      <div class="media-slot">
        <img src="img/${p.id}-excel.png" alt="Captura Excel — ${p.titulo}"
             onerror="this.closest('.media-slot').classList.add('media-slot--empty'); this.remove();">
        <div class="media-placeholder">📎 Coloca aquí <code>img/${p.id}-excel.png</code></div>
      </div>
      <p class="card-text">${p.excelNotas}</p>
    </div>

    <div class="card">
      <div class="card-title"><span class="card-title__icon">🟦</span><span>4. Desarrollo en Minitab</span></div>
      <div class="media-slot">
        <img src="img/${p.id}-minitab.png" alt="Captura Minitab — ${p.titulo}"
             onerror="this.closest('.media-slot').classList.add('media-slot--empty'); this.remove();">
        <div class="media-placeholder">📎 Coloca aquí <code>img/${p.id}-minitab.png</code></div>
      </div>
      <p class="card-text">${p.minitabNotas}</p>
    </div>
  </div>

  <div class="card">
    <div class="card-title"><span class="card-title__icon">📈</span><span>Gráfico de control interactivo</span></div>
    <div class="charts-slot" data-slot="charts"></div>
    <div class="stats-row" data-slot="stats"></div>
  </div>

  <div class="grid-2">
    <div class="card">
      <div class="card-title"><span class="card-title__icon">💡</span><span>5. Interpretación de resultados</span></div>
      <p class="card-text">${p.interpretacion}</p>
    </div>
    <div class="card">
      <div class="card-title"><span class="card-title__icon">✅</span><span>6. Conclusiones</span></div>
      <p class="card-text">${p.conclusiones}</p>
    </div>
  </div>

  <div class="card">
    <div class="card-title"><span class="card-title__icon">🤖</span><span>Apoyo de IA — registro de prompts</span></div>
    <div class="datatable-slot" data-slot="tabla-prompts"></div>
  </div>
  `;
}

function construirPanel(p) {
  const section = document.createElement("section");
  section.className = "tab-panel";
  section.id = p.id;
  section.dataset.panel = p.id;
  section.innerHTML = panelHTML(p);

  // Tabla de datos según tipo de carta
  const slotDatos = section.querySelector('[data-slot="tabla-datos"]');
  if (p.tipoCarta === "xbar-r") {
    slotDatos.innerHTML = crearTablaSubgrupos(p.datos.subgrupos, p.datos.unidad);
  } else if (p.tipoCarta === "individuals") {
    slotDatos.innerHTML = crearTablaSimple(p.datos.valores, "Valor", p.datos.unidad);
  } else if (p.tipoCarta === "p") {
    slotDatos.innerHTML = crearTablaP(p.datos.muestras);
  } else if (p.tipoCarta === "c") {
    slotDatos.innerHTML = crearTablaSimple(p.datos.conteos, "Defectos", "");
  }

  section.querySelector('[data-slot="tabla-prompts"]').innerHTML = promptsTabla(p.prompts);

  document.getElementById("problemas-root").appendChild(section);
}

function seriesDe(p) {
  if (p.tipoCarta === "xbar-r") {
    const r = calcularXbarR(p.datos.subgrupos);
    return [r.xbar, r.r];
  }
  if (p.tipoCarta === "individuals") {
    const r = calcularIndividuals(p.datos.valores);
    return [r.individuals, r.mr];
  }
  if (p.tipoCarta === "p") {
    return [calcularP(p.datos.muestras).p];
  }
  if (p.tipoCarta === "c") {
    return [calcularC(p.datos.conteos).c];
  }
  return [];
}

function renderCharts(p) {
  const panel = document.getElementById(p.id);
  const slot = panel.querySelector('[data-slot="charts"]');
  const statsSlot = panel.querySelector('[data-slot="stats"]');
  if (slot.dataset.rendered === "1") return;

  const series = seriesDe(p);
  slot.innerHTML = series
    .map((_, i) => `<div class="chart-box"><canvas id="${p.id}-chart-${i}"></canvas></div>`)
    .join("");
  statsSlot.innerHTML = statsCards(series);

  series.forEach((s, i) => {
    const ctx = document.getElementById(`${p.id}-chart-${i}`).getContext("2d");
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: s.labels,
        datasets: [
          {
            label: s.titulo,
            data: s.valores,
            borderColor: CHART_COLORS.line,
            backgroundColor: CHART_COLORS.point,
            pointBackgroundColor: s.valores.map((v) =>
              v > s.ucl || v < s.lcl ? "#f472b6" : CHART_COLORS.point
            ),
            pointRadius: 4,
            tension: 0.15,
            fill: false,
          },
          {
            label: "LC",
            data: s.labels.map(() => s.cl),
            borderColor: CHART_COLORS.cl,
            borderDash: [6, 4],
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            label: "LCS",
            data: s.labels.map(() => s.ucl),
            borderColor: CHART_COLORS.limits,
            borderDash: [2, 3],
            pointRadius: 0,
            borderWidth: 1.5,
          },
          {
            label: "LCI",
            data: s.labels.map(() => s.lcl),
            borderColor: CHART_COLORS.limits,
            borderDash: [2, 3],
            pointRadius: 0,
            borderWidth: 1.5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "nearest", intersect: false },
        plugins: {
          legend: { labels: { color: CHART_COLORS.text, font: { size: 11 } } },
          title: { display: true, text: s.titulo, color: "#ede8f7", font: { size: 13, weight: "600" } },
        },
        scales: {
          x: { ticks: { color: CHART_COLORS.text, font: { size: 10 } }, grid: { color: CHART_COLORS.grid } },
          y: { ticks: { color: CHART_COLORS.text, font: { size: 10 } }, grid: { color: CHART_COLORS.grid } },
        },
      },
    });
    chartRegistry[`${p.id}-${i}`] = chart;
  });

  slot.dataset.rendered = "1";
}

/* ---------- Navegación entre pestañas ---------- */

function activarTab(tabId) {
  document.querySelectorAll(".nav-item").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.tab === tabId);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.panel === tabId);
  });

  const problema = PROBLEMAS.find((p) => p.id === tabId);
  if (problema) renderCharts(problema);

  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

function actualizarProgreso() {
  const done = PROBLEMAS.filter((p) => p.completado).length;
  document.getElementById("progress-pill").textContent = `${done} / ${PROBLEMAS.length} problemas completos`;
}

function init() {
  PROBLEMAS.forEach(construirPanel);
  actualizarProgreso();

  document.getElementById("nav").addEventListener("click", (e) => {
    const btn = e.target.closest(".nav-item");
    if (!btn) return;
    activarTab(btn.dataset.tab);
  });
}

document.addEventListener("DOMContentLoaded", init);
