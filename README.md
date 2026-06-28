# 🧮 Mathe-Lern-App

Eine interaktive Lern-App für Mathematik in der 1. und 2. Klasse der Grundschule (Sachsen, Deutschland).

## ✨ Features

- 📚 **Interaktive Lektionen** - Mathematik nach dem Lehrplan Sachsen
- ✅ **Automatische Erfolgskontrollen** - Mit direktem Feedback
- 🔄 **Intelligente Wiederholungen** - Spaced Repetition System
- 📊 **Fortschrittsanzeige** - Visueller Überblick über den Lernfortschritt
- 🎨 **Kinderfreundliches Design** - Große Buttons, klare Farben, einfache Bedienung
- 💾 **Lokale Speicherung** - Fortschritt wird im Browser gespeichert
- 📱 **Responsive Design** - Funktioniert auf Tablets und PCs

## 📋 Mathematische Inhalte (Klasse 1-2)

### Aktuelle Lektionen:
1. **Addition im Zahlenraum bis 10**
2. **Subtraktion im Zahlenraum bis 10**
3. **Zahlenraum bis 20**

### Geplant:
- Addition/Subtraktion bis 100
- Grundlagen Multiplikation und Division
- Geometrische Formen
- Zeitkonzepte
- Längen und Gewichte

## 🚀 Installation und Start

### Voraussetzungen
- Node.js (v14+)
- npm oder yarn

### Schritte

```bash
# Repository klonen
git clone https://github.com/quentinhirche-svg/mathe-lern-app.git
cd mathe-lern-app

# Dependencies installieren
npm install

# App starten
npm start
```

Die App öffnet sich automatisch unter `http://localhost:3000`

## 🎮 Wie benutzt man die App?

1. **Lektionen wählen**: Klicke auf eine Lektion, um zu starten
2. **Aufgaben lösen**: Wähle die richtige Antwort aus
3. **Feedback erhalten**: Sofortige Rückmeldung + Erklärung
4. **Fortschritt verfolgen**: Schau dir deine Erfolgsquote an
5. **Wiederholen**: Automatische Vorschläge für Wiederholungen

## 🧠 Spaced Repetition System

Die App nutzt ein intelligentes Wiederholungssystem:
- **Schwere Aufgaben** → Wiederholen nach 1 Tag
- **Mittlere Aufgaben** → Wiederholen nach 3 Tagen
- **Einfache Aufgaben** → Wiederholen nach 7 Tagen

## 📁 Projektstruktur

```
src/
├── components/
│   ├── Quiz.jsx                # Interaktive Quiz-Komponente
│   ├── ProgressTracker.jsx     # Fortschrittsanzeige
│   ├── LessonView.jsx          # Lektionsübersicht
│   └── RepeatingSystem.jsx     # Wiederholungsverwaltung
├── hooks/
│   └── useSpacedRepetition.js  # Spaced Repetition Hook
├── data/
│   └── lessons.js              # Lektionsdaten
├── App.jsx                     # Hauptkomponente
└── App.css                     # Styling
```

## 🛠️ Technologie

- **React 18** - UI Framework
- **JavaScript ES6+** - Programmiersprache
- **CSS3** - Styling
- **localStorage** - Persistente Speicherung

## 📈 Roadmap

- [ ] Mehr Aufgaben hinzufügen (100+ pro Lektion)
- [ ] Animationen und Sound-Effekte
- [ ] Benutzerprofile und Authentifizierung
- [ ] Eltern-Dashboard
- [ ] Mobile App (React Native)
- [ ] Datenbank-Integration (Firebase)
- [ ] Adaptive Schwierigkeitsstufen
- [ ] Multilingual Support

## 🤝 Beitragen

Du möchtest die App verbessern? Toll! Hier sind die nächsten Schritte:

1. Erstelle einen Branch: `git checkout -b feature/deine-idee`
2. Committen: `git commit -m 'Add feature: deine-idee'`
3. Push: `git push origin feature/deine-idee`
4. Öffne einen Pull Request

## 📝 Lizenz

MIT License - Frei verwendbar für Bildungszwecke

## 👨‍💻 Autor

Quentinhirche-svg

## 📞 Support

Fragen oder Probleme? Öffne ein Issue auf GitHub!
