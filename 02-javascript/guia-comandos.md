# Guia de comandos - Bloque 02: JavaScript

Estos comandos te ayudan a trabajar mas rapido mientras agregas interactividad a tu CV.

## Checa tu entorno

```bash
node -v     # version de Node (usa 18+ si puedes)
npm -v      # version de npm
```

Si no tienes Node instalado, descargalo desde https://nodejs.org (LTS).

## Servir tu sitio en local (elige una opcion)

1) Sin instalar nada extra (Python instalado):
```bash
cd 02-javascript/reto-02-interactividad-cv
python -m http.server 5500
# abre http://localhost:5500 en tu navegador
```

2) Con `npx http-server` (usa npm):
```bash
cd 02-javascript/reto-02-interactividad-cv
npx http-server . -p 3000
# abre http://localhost:3000
```

3) Con recarga automatica (live-server):
```bash
npm install --save-dev live-server
npx live-server 02-javascript/reto-02-interactividad-cv
```

## Flujo sugerido de trabajo

```bash
# 1) Crear package.json rapido (si aun no lo tienes)
npm init -y

# 2) Instalar live-server para trabajar con recarga
npm install --save-dev live-server

# 3) Agregar un script a package.json (se edita el archivo):
# "scripts": { "dev": "live-server 02-javascript/reto-02-interactividad-cv" }

# 4) Levantar tu sitio
npm run dev
```

## Formateo y limpieza rapida

```bash
npx prettier --write "02-javascript/**/*.js"
npx prettier --write "02-javascript/**/*.md"
```

## Depurar tu JavaScript

- Abre DevTools (F12) y revisa la pestana Console: no deberia haber errores.
- Usa `console.log` para ver valores y `console.table` para arreglos/objetos.
- Usa `debugger;` dentro de una funcion; al recargar, el navegador se detiene ahi.

## Probar el script de ejemplos

```bash
node 02-javascript/script-ejemplos.js
# Ejecuta tres demostraciones y muestra el resultado en consola.
```

Puedes copiar las funciones de ese archivo dentro de tu `script.js` y adaptarlas a tu HTML.
