//Java Script 
// Ichuta Sinka Yara Belen 
// INF - 113 Programación Web 

function generarCorreo(n, a, fna) {
    let pan = n.split(" ");
    let paa = a.split(" ");
    let ino = pan.map(p => p[0]).join("");

    if (paa.length === 1) {
        paa.push(paa[0]);
    }

    let iap = paa.map(p => p[0]).join("");

    let f = fna.split("-");
    let fco = f.map(prt => prt.slice(-2)).join("");

    let c = `${ino}${iap}${fco}@gmail.com`;
    return c.toLowerCase();
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registroForm");
    const cg = document.getElementById("cg");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const n = document.getElementById("n").value;
        const a = document.getElementById("a").value;
        const fna = document.getElementById("f").value;

        const c = generarCorreo(n, a, fna);

        console.log(`Generated Email: ${c}`);

        cg.textContent = `Cg: ${c}`;
        localStorage.setItem('username', c);
        localStorage.setItem('password', fna);
    });
});
