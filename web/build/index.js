const fs = require('fs');
const path = require('path');

// Lee la ruta del archivo package.json
const packageJsonPath = path.resolve(__dirname, 'package.json');

// Define los argumentos del script
const args = process.argv.slice(2);
const versionPart = args[0];

// Lee el contenido del archivo package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));

// Define la función para actualizar la versión
function actualizarVersion(versionPart) {
  // Define el nuevo número de versión basado en la versión actual
  const versionParts = packageJson.version.split('.');
  let major = versionParts[0];
  let minor = versionParts[1];
  let patch = versionParts[2];

  switch (versionPart) {
    case 'major':
      major = Number(major) + 1;
      minor = 0;
      patch = 0;
      break;
    case 'minor':
      minor = Number(minor) + 1;
      patch = 0;
      break;
    case 'patch':
      patch = Number(patch) + 1;
      break;
    default:
      console.error(`El argumento '${versionPart}' no es válido`);
      return;
  }

  // Actualiza la versión en package.json
  const nuevaVersion = `${major}.${minor}.${patch}`;
  packageJson.version = nuevaVersion;

  // Guarda los cambios en el archivo package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  console.log(`La versión en package.json se ha actualizado a ${nuevaVersion}`);

  exec('npm publish', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al publicar el paquete: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

// Ejecuta la función para actualizar la versión
actualizarVersion(versionPart);