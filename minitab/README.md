# Minitab — Guía paso a paso (Carta X̄-R)

> **Nota importante:** el archivo `.mpx` (proyecto de Minitab) es un formato binario
> propietario que solo Minitab puede generar y abrir correctamente. Esta carpeta no
> incluye un `.mpx` fabricado artificialmente porque un archivo así se corrompería o
> no reflejaría un análisis real hecho en el programa. En su lugar, esta guía te
> permite reproducir el análisis completo en tu propia instalación de Minitab en
> minutos, y `datos_ejemplo.csv` ya está listo para importar.
>
> Al terminar tu análisis, guarda tu proyecto como `proyecto.mpx` en esta misma
> carpeta — así completas la estructura de entrega exigida por la guía oficial.

---

## 1. Preparar los datos

1. Abre Minitab.
2. `File → Open Worksheet…` y selecciona `datos_ejemplo.csv` (o pega tus propios
   datos directamente en la hoja de trabajo).
3. Estructura esperada: una columna por posición dentro del subgrupo (`X1`, `X2`,
   …, `Xn`), una fila por subgrupo. También puedes usar el formato apilado (una
   columna de datos + una columna de subgrupo) si lo prefieres.

## 2. Generar la carta X̄-R (método estándar)

1. `Stat → Control Charts → Variables Charts for Subgroups → Xbar-R…`
2. En **Variables**, selecciona las columnas `X1…Xn`.
   - Si usas formato apilado: activa *"Observations for a subgroup are in one row of
     one column"* → ✗, en su lugar selecciona *"All observations for a chart are in
     one column"* e indica la columna de subgrupo en **Subgroup sizes**.
3. (Opcional) En **Xbar-R Options → Tests**, activa las pruebas de causas
   especiales que tu curso exige (por defecto: Test 1, puntos fuera de los
   límites de control).
4. (Opcional) En **Xbar-R Options → Estimate**, revisa que el método de
   estimación de sigma sea *Rbar* (consistente con el cálculo manual/Excel).
5. Clic en **OK**. Minitab genera ambas cartas (X̄ arriba, R abajo) en una sola
   ventana gráfica.
6. Clic derecho sobre el gráfico → `Copy Graph` o `Save Graph As…` → exporta como
   `.png` y colócalo en `../img/minitab-cartas.png` para insertarlo en el HTML.

## 3. Generar el análisis con Minitab Assistant (recomendado por la guía)

1. `Assistant → Control Charts…`
2. Selecciona **Xbar-R Chart** (variable continua, subgrupos de tamaño 2–10).
3. Sigue el asistente: selecciona las columnas de datos y confirma el tamaño de
   subgrupo.
4. Minitab genera automáticamente:
   - La carta X̄-R.
   - Un **Diagnostic Report** (verifica normalidad, cantidad de subgrupos y
     puntos fuera de control).
   - Un **Report Card** con advertencias en lenguaje simple (por ejemplo, si hay
     pocos subgrupos para estimar los límites con confianza).
5. Exporta ambos reportes como imagen o PDF y guárdalos en `../img/`.
6. Resume en el HTML (sección 04) lo que indicó el Report Card — esto es lo que
   la guía llama *"apoyo del Minitab Assistant"*.

## 4. Guardar el proyecto

`File → Save Project As…` → guarda como `proyecto.mpx` dentro de esta carpeta
(`minitab/proyecto.mpx`). Este es el archivo binario real de Minitab que la guía
oficial pide entregar.

## 5. Checklist antes de entregar

- [ ] `proyecto.mpx` guardado en esta carpeta con el análisis completo.
- [ ] Captura de la carta X̄-R exportada a `../img/minitab-cartas.png`.
- [ ] Captura del Report Card (si usaste el Assistant) exportada a `../img/`.
- [ ] Resultados (CL, LSC, LIC) contrastados con los obtenidos en Excel — deben
      coincidir o ser muy cercanos.
- [ ] Sección 04 del `index.html` actualizada con la interpretación.
