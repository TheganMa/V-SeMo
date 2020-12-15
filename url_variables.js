function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


//? um die Variablen anzukuendigen

//language=english& um die Sprache auf Englisch zu stellen (das &-Zeichen zum trennen der Variablen)
let language = getUrlVars()["language"];
//buildStartGeodesics=1& um die Startgeodaeten einzuschalten
let buildStartGeodesics = getUrlVars()["buildStartGeodesics"];
//buildStartMarks=1& um die Markierungen zu Anfang einzuschalten
let buildStartMarks = getUrlVars()["buildStartMarks"];
//textured=1& um die Texturen der Erdkarte einzuschalten (nur fuer die Kugel)
let textured = getUrlVars()["textured"];
//textureColored=1& um die Texturen der Erdkarte farbig darzustellen (beachte, dass es dann Nordafrika ist)
let textureColored = getUrlVars()["textureColored"];
//showAutoSet=1& um den Button fuer das automatische Zusammensetzen entlang einer Geodaete einzuschalten
let showAutoSet = getUrlVars()["showAutoSet"];
//showAreaSector=1& um den Button fuer die Sektorflaeche anzuzeigen
let showAreaSector = getUrlVars()["showAreaSector"];
//showAutoComplete=1& um den Button fuer die automatische Vervollstaendigung anzuzeigen
let showAutoComplete = getUrlVars()["showAutoComplete"];
//showChangeDirection=1& um den Button fuer die Aenderung der Startrichtung anzuzeigen
let showChangeDirection = getUrlVars()["showChangeDirection"];
//setPositionAndAngleRandomly=1& um die Startposition und den Startwinkel der Sektoren zufaellig einzurichten
let setPositionAndAngleRandomly = getUrlVars()["setPositionAndAngleRandomly"];

//autoSetOnDraw=1& um das automatische Zusammensetzen der Sektoren beim Zeichnen einer Linie zu aktivieren
//noch zu entwickeln
let autoSetOnDraw = getUrlVars()["autoSetOnDraw"];