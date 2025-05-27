# Semesterarbeit-IM2

## Kurzbeschreibung des Projekts:
„Churshine“ ist eine interaktive Web-App, die den UV-Index für Chur visuell und spielerisch darstellt. Nutzer:innen können per Schieberegler die UV-Werte der nächsten Stunden abrufen. Ein Emoji reagiert dynamisch auf die Intensität der UV-Strahlung, und per Hover oder Klick erscheint eine Info-Box mit Uhrzeit und UV-Wert. Das Design ist responsiv, funktioniert auf allen Geräten und kombiniert Funktionalität mit humorvollem Look.

## Learnings und Schwierigkeiten von Leo:
Hauptsächlich habe ich gelernt wie genau das CSS, HTML und Javascript miteinander funktionnieren. Schwierigkeiten lagen darin den Slider so zu machen wie ich ihn mir im Figma vorgestellt habe.

## Benutzte Ressourcen: 
Copilot, ChatGPT, Youtube-Videos

## gut gelungene Prompts:
"Ich möchte die Icons immernoch grösser haben, wie kann ich damit rumprobieren?"
-> Ich habe mein Ziel (größere Icons) genannt und um Anleitung zum Experimentieren gebeten. Die Antwort mit background-size + Live-Anpassung in den DevTools konnte ich direkt verwenden.

„Wie kann ich einen Schatten beim Regler (Thumb) selber machen, der Schatten sollte von links nach rechts gehen und in der selben Stärke des Schattens des Slider sein.“
-> Ich habe genau beschrieben, welches Element betroffen ist (der Regler/Thumb), in welche Richtung der Schatten gehen soll (von links nach rechts) und wie stark er wirken soll. ChatGPT konnte mir sofort einen passenden inset-Schatten liefern, den ich übernehmen konnte ohne Rückfragen.

## weniger gut gelungene Prompts:
"Ich möchte jetzt, dass der Balken einen boxshadow von y -22 hat, wie kann ich das anpassen?"
-> Ich habe den falschen Begriff verwendet. Boxshadow ist ein Schatten nach aussen doch ich wollte einen innerhalb der Box und y -22 ist ebenfalls falsch, da er mit dieser Beschreibung falsch ausgerichtet war.

"Jetzt möchte ich, dass die Sonne und der Mond (links und rechts) von dem Slider innerhalb des Sliders zu sehen sind. Wie kann ich das machen?"
-> Die Angaben waren zu undeutlich. Denn der vorgeschlagene Code von ChatGPT hat dann bewirkt, dass der Fortschrittsbalken nicht mehr richtig funktionnierte und die Emojis innerhalb des Balkens verzogen wurden.