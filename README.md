 # Leistungsnachweis IM5: Clownfish Rrecognition 
 
 # Ausgangslage & Projektidee 
Im Modul "Interaktive Medien 5" entwickelte ich ein Webprojekt zur Identifizierung von Clownfischen, inspiriert von meinem Interesse am Tauchen und anknüpfend an mein Bachelorprojekt. Anfangs war das genaue Thema noch offen, aber die Idee, eine Webseite zur Unterscheidung verschiedener Clownfischarten zu erstellen, entstand aus meiner Begeisterung für die Unterwasserwelt.

Das Hauptziel war es, eine Website zu kreieren, die mindestens zwei Clownfischarten – umgangssprachlich "Nemos" – differenzieren kann, eine Herausforderung bei über 200 Arten. Die Plattform sollte informativ und benutzerfreundlich sein.

Im Dezember zeichnete sich ab, dass meine Bachelorarbeit eine Werbekampagne mit Spatial Audio umfassen würde, was zu einem Redesign der Startseite führte. Dies ermöglichte es, den Nutzern ein immersives Spatial Audio-Erlebnis zu bieten und so eine Verbindung zu meinem Bachelorprojekt herzustellen.

# Vorgehensweise
Zu Beginn meines Projekts stand ich vor der Aufgabe, die Grundlagen der Bilderkennung (Image Recognition) zu erlernen. Nach einiger Recherche entschied ich mich für die Nutzung von "Teachable Machine", einer Plattform, die es ermöglicht, eigene Bilderkennungsmodelle online zu erstellen. Mit Teachable Machine gelang es mir, ein funktionstüchtiges Modell zu entwickeln, das mir eine API zur Verfügung stellte. Diese API integrierte ich gemäss der Anleitung von Teachable Machine in meinen Code.

Für den Bilderkennungsprozess verwendete ich anfänglich je fünf Bilder von zwei Clownfischarten – Ocellaris und Melanopus – um das System zu trainieren. Nachdem der maschinelle Lernprozess erfolgreich implementiert war, widmete ich mich der Erstellung einer Datenbank unter Verwendung von SQL und PHP. Diese Datenbank enthielt zunächst eine Tabelle für diese beiden Fischarten mit Spalten für ID, Beschreibung, Namen und URLs für Bilder.

Nachdem alle Funktionen integriert waren, konzentrierte ich mich auf das Layout der Webseite. Es war mir wichtig, dass das Design sowohl für mich als auch für die Nutzer klar und einfach zu bedienen ist. Dies bedeutete ein schlichtes Layout mit einer begrenzten Anzahl an Buttons, welches ich zunächst als Wireframe auf Papier skizzierte. In der abschliessenden Phase passte ich die Webseite an mobile Endgeräte an.

Mit dem Wechsel meines Bachelorprojektthemas gestaltete ich ein neues Layout, das derzeit jedoch nur auf der Willkommensseite zu sehen ist.

# Challenges
In meinem Projekt traten zwei Hauptprobleme auf: das Gestalten eines responsiven Layouts mit CSS und Fehler im JavaScript-Code für die Bubble-Effekte auf der Willkommensseite.

Die Umsetzung eines responsiven Designs erwies sich als besonders knifflig, da es eine genaue Anpassung an verschiedene Bildschirmgrössen erforderte. Dieser Prozess verbesserte mein Verständnis und meine Fähigkeiten in CSS erheblich.

Beim JavaScript-Code für die Bubbles stiess ich auf ein Problem, bei dem der Code in einer Schleife steckenblieb, was zu Fehlfunktionen führte. Die Behebung dieses Fehlers war eine lehrreiche Erfahrung im Debugging und in der JavaScript-Programmierung.
Überraschenderweise verlief der Bereich des maschinellen Lernens ohne grössere Schwierigkeiten, was meine Erwartungen übertraf.

# Learnings
Das Projekt hat mir gezeigt, wie wichtig es ist, das Design frühzeitig und durchdacht zu planen. Ein Redesign der Willkommensseite mit Figma offenbarte, dass der Einsatz von Design-Tools wie Adobe XD oder Figma von Beginn an für alle Seiten hilfreich gewesen wäre, insbesondere für den CSS-Layoutprozess. Außerdem wäre es effizienter, zuerst die mobile Version zu gestalten und dann die Desktop-Version anzupassen.

Ein aktuelles Problem ist das Design des neuen Layouts, bei dem nicht sofort ersichtlich ist, dass eine Interaktion mit der Maus möglich ist. Dies macht den Bubble-Effekt weniger sichtbar und kann verwirrend sein. Ich habe erkannt, dass CSS komplexer ist, als ich zunächst annahm, insbesondere beim effektiven Layouten eines Designs.

# Quellen  & code snippets 

## KI 
    - ChatGPT 
    - Github Copilot 
    - Figma 
   ### Prompts
   Während des Projekts stellte ich fest, dass direkte Aufforderungen wie "Schreibe mir den Code" nicht immer effektiv waren. Stattdessen fokussierte ich mich auf spezifische Code-Snippets, etwa "JS-Code für eine Loop-Funktion", und deren Integration in meine Seite. Oft musste ich die gefundenen Codes anpassen, damit sie funktionierten. Bei der Fehlersuche war die KI zu etwa 60% hilfreich, aber in Fällen, in denen sie den Fehler nicht identifizieren konnte, verschlimmerte ihre Vorschläge manchmal den Code.
 
## Audio 
    - https://developer.chrome.com/blog/autoplay/#webaudio 
    - https://howlerjs.com/

## Machine Learning
    - https://experiments.withgoogle.com/
    - https://teachablemachine.withgoogle.com/

## Code Snippets & Help 
    - https://stackoverflow.com
    - https://www.freecodecamp.org/news
    - https://codesandbox.io
    - https://www.figma.com

    

 
 
 

