function validarFormulario() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.trim() === "" || password.trim() === "") {
      alert("Por favor, complete todos los campos.");
      return false;
    }

    // Otras validaciones si es necesario

    return true;
  }

  const express = require('express');
const app = express();

// Usuarios simulados
const usuarios = [
  { id: 1, nombreUsuario: 'usuario1', contraseña: 'contraseña1' },
  { id: 2, nombreUsuario: 'usuario2', contraseña: 'contraseña2' },
  { id: 3, nombreUsuario: 'usuario3', contraseña: 'contraseña3' }
];

// Middleware para parsear el cuerpo de la solicitud
app.use(express.json());

// Ruta para el inicio de sesión
app.post('/login', (req, res) => {
  const { nombreUsuario, contraseña } = req.body;

  // Verificar si las credenciales son válidas
  const usuario = usuarios.find(u => u.nombreUsuario === nombreUsuario && u.contraseña === contraseña);

  if (usuario) {
    // Las credenciales son válidas
    res.json({ success: true, message: 'Inicio de sesión exitoso' });
  } else {
    // Las credenciales son inválidas
    res.status(401).json({ success: false, message: 'Credenciales inválidas' });
  }
});

// Iniciar el servidor en un puerto específico
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
