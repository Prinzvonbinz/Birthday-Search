document.addEventListener("DOMContentLoaded", function () {
    // Seiten-Logik
    const seiten = [
        document.getElementById("seite0"),
        document.getElementById("seite1"),
        document.getElementById("seite2"),
        document.getElementById("seite3"),
        document.getElementById("seite4"),
    ];

    const letters = [];

    function showSeite(n) {
        seiten.forEach((s, i) => (s.style.display = i === n ? "block" : "none"));
    }

    // Start-Button
    document.getElementById("startBtn").onclick = function () {
        showSeite(1);
    };

    // Zahlen-Seite
    document.getElementById("zahlenSubmit").onclick = function () {
        const input = document.getElementById("zahlenInput");
        const val = input.value.trim();
        const result = document.getElementById("zahlenResult");
        if (val === "111") {
            result.textContent = 'Richtig! Dein Buchstabe: "Sc"';
            letters[0] = "Sc";
            setTimeout(() => {
                input.value = "";
                result.textContent = "";
                showSeite(2);
            }, 1500);
        } else {
            result.textContent = "Leider falsch. Versuch es nochmal!";
            setTimeout(() => { result.textContent = ""; }, 1200);
        }
    };

    // Eis-Seite
    document.getElementById("eisSubmit").onclick = function () {
        const input = document.getElementById("eisInput");
        let val = input.value.trim().toLowerCase();
        const result = document.getElementById("eisResult");
        if (val === "vanille") {
            result.textContent = 'Richtig! Dein Buchstabe: "hu"';
            letters[1] = "hu";
            setTimeout(() => {
                input.value = "";
                result.textContent = "";
                showSeite(3);
            }, 1500);
        } else {
            result.textContent = "Leider falsch. Versuch es nochmal!";
            setTimeout(() => { result.textContent = ""; }, 1200);
        }
    };

    // Finale Aufgabe-Seite
    document.getElementById("finalSubmit").onclick = function () {
        // Finale Buchstaben
        letters[2] = "ppen";
        document.getElementById("finalResult").textContent = 'Super! Dein Buchstabe: "ppen"';
        setTimeout(() => {
            document.getElementById("finalResult").textContent = "";
            showSeite(4);
            // Ausgabe der gesammelten Buchstaben
            document.getElementById("lettersDisplay").textContent = letters.join("");
        }, 1500);
    };

    // Optional: Enter-Taste für Inputs
    document.getElementById("zahlenInput").addEventListener("keypress", function (e) {
        if (e.key === "Enter") document.getElementById("zahlenSubmit").click();
    });
    document.getElementById("eisInput").addEventListener("keypress", function (e) {
        if (e.key === "Enter") document.getElementById("eisSubmit").click();
    });

    // Initiale Seite
    showSeite(0);
});
