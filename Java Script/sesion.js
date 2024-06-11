//Java Script 
// Ichuta Sinka Yara Belen 
// INF - 113 Programación Web 

let intentos = 0;

        function sesion(event) {
            event.preventDefault();
            let u = document.getElementById('u').value;
            let c = document.getElementById('c').value;

            let storedUser = localStorage.getItem('username');
            let storedPassword = localStorage.getItem('password');

            if (u === storedUser && c === storedPassword) {
                alert("Inicio de sesión exitoso");
                window.location.href = 'index.html';
                intentos = 0;
            } else {
                intentos += 1;
                if (intentos >= 3) {
                    alert("Se han excedido el número de intentos permitidos. Inténtalo más tarde.");
                    document.getElementById('loginForm').reset();
                } else {
                    alert("Usuario o contraseña incorrectos. Intentos restantes: " + (3 - intentos));
                }
            }
        }

        document.getElementById('loginForm').addEventListener('submit', sesion);