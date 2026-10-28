// ============================================================
// BILDER – hier (und nur hier) die Platzhalter austauschen.
// Beispiel: "bilder/rathaus-1.png" statt platzhalter(1)
// ============================================================
const bilder = [
  platzhalter(1),
  platzhalter(2),
  platzhalter(3),
  platzhalter(4),
  platzhalter(5),
  platzhalter(6),
  platzhalter(7),
  platzhalter(8),
  platzhalter(9),
  platzhalter(10),
  platzhalter(11),
  platzhalter(12),
  platzhalter(13),
  platzhalter(14),
  platzhalter(15),
  platzhalter(16),
  platzhalter(17),
  platzhalter(18),
];

// Einfarbiger Kasten mit Text, als SVG-Data-URL (braucht keine Datei).
function platzhalter(stufe) {
  const farbe = `hsl(${stufe * 20}, 55%, 45%)`;
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">` +
    `<rect width="100%" height="100%" fill="${farbe}"/>` +
    `<text x="50%" y="50%" fill="white" font-size="40" font-family="Arial" ` +
    `text-anchor="middle" dominant-baseline="middle">Rathaus ${stufe}</text>` +
    `</svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

// ---- Galerie-Logik ----
const bildElement = document.getElementById("bild");
const beschriftung = document.getElementById("beschriftung");
let aktuell = 0;

function anzeigen() {
  const text = "Rathaus " + (aktuell + 1);
  bildElement.src = bilder[aktuell];
  bildElement.alt = text;
  beschriftung.textContent = text;
}

document.getElementById("zurueck").addEventListener("click", function () {
  aktuell = (aktuell - 1 + bilder.length) % bilder.length;
  anzeigen();
});

document.getElementById("weiter").addEventListener("click", function () {
  aktuell = (aktuell + 1) % bilder.length;
  anzeigen();
});

anzeigen();

// ---- Hell/Dunkel ----
const modusKnopf = document.getElementById("modus");

function modusSetzen(dunkel) {
  document.body.classList.toggle("dunkel", dunkel);
  modusKnopf.textContent = dunkel ? "Hell" : "Dunkel";
  localStorage.setItem("dunkel", dunkel);
}

modusKnopf.addEventListener("click", function () {
  modusSetzen(!document.body.classList.contains("dunkel"));
});

if (localStorage.getItem("dunkel") === "true") modusSetzen(true);
