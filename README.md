# Semillero Zero2Hero 2025

Bienvenido al **Semillero Zero2Hero 2025** 👨‍💻🚀  

Este repositorio es el **punto central** donde encontrarás:

- La estructura de los **bloques de aprendizaje**.
- Los **videos recomendados** de cada bloque.
- La descripción de los **retos** que deberás resolver en tu propio repositorio.

---

## 1. Estructura del repositorio

Cada carpeta principal corresponde a un **bloque/tema** del semillero.

Ejemplo:

```text
semillero-2025/
├─ README.md
└─ 01-html-css/
   ├─ README.md         # Explicación del bloque
   ├─ videos.md         # Links a videos recomendados
   └─ reto-01-cv-personal/
      └─ README.md      # Descripción detallada del reto
```

Dentro de cada bloque tendrás siempre:

- `README.md` → qué vas a aprender en ese bloque.
- `videos.md` → lista de videos (YouTube) para estudiar el tema.
- Carpetas de retos → cada reto tiene su propio `README.md` con instrucciones.

**Ejemplo actual:**

- Bloque 01: [`01-html-css/`](01-html-css/)
  - Explicación: [`01-html-css/README.md`](01-html-css/README.md)
  - Videos: [`01-html-css/videos.md`](01-html-css/videos.md)
  - Reto 01 (CV personal): [`01-html-css/reto-01-cv-personal/README.md`](01-html-css/reto-01-cv-personal/README.md)

- Bloque 02: [`02-javascript/`](02-javascript/)
  - Explicacion: [`02-javascript/README.md`](02-javascript/README.md)
  - Videos: [`02-javascript/videos.md`](02-javascript/videos.md)
  - Reto 02 (interactividad del CV): [`02-javascript/reto-02-interactividad-cv/README.md`](02-javascript/reto-02-interactividad-cv/README.md)
  - Guia de comandos y script base: [`02-javascript/guia-comandos.md`](02-javascript/guia-comandos.md) y [`02-javascript/script-ejemplos.js`](02-javascript/script-ejemplos.js)

- Bloque 03: [`03-bootstrap/`](03-bootstrap/)
  - Explicacion: [`03-bootstrap/README.md`](03-bootstrap/README.md)
  - Videos: [`03-bootstrap/videos.md`](03-bootstrap/videos.md)
  - Reto 03 (landing tattoos): [`03-bootstrap/reto-03-landing-tattoos/README.md`](03-bootstrap/reto-03-landing-tattoos/README.md)

---

## 2. Dinámica semanal: qué tienes que hacer

Cada bloque seguirá una dinámica parecida:

1. **Entrar a la carpeta del bloque**  
   Ejemplo para el primer bloque:  
   👉 [`01-html-css/`](01-html-css/)

2. **Leer el `README.md` del bloque**  
   Ahí verás:
   - Objetivos del tema.
   - Qué vas a construir.
   - Qué se espera que entregues.

3. **Revisar los videos en `videos.md`**  
   - Son recursos recomendados (YouTube) para aprender/reforzar el tema.
   - No tienes que verlo todo de golpe, pero sí lo suficiente para poder hacer el reto.

4. **Abrir la carpeta del reto y leer su `README.md`**  
   Ejemplo del primer reto:  
   👉 [`01-html-css/reto-01-cv-personal/README.md`](01-html-css/reto-01-cv-personal/README.md)

5. **Resolver el reto en tu propio repositorio personal**  
   - No subes tu solución a este repo central.
   - Tus soluciones van en **tu propio repositorio** (ver sección 3).

6. **Subir tu solución a GitHub y compartir el enlace**  
   - Harás `commit` y `push` en tu repo personal.
   - Luego compartirás el enlace según las instrucciones (grupo de WhatsApp, formulario, etc.).

---

## 3. Tu repositorio personal del semillero

Cada participante debe tener su **propio repositorio** donde subirá todos los retos del semillero.

### 3.1. Crear tu cuenta de GitHub (si aún no la tienes)

1. Entra a 👉 https://github.com  
2. Crea una cuenta con tu correo.  
3. Elige un nombre de usuario profesional (ejemplo: `jonatanblank`, `maria-dev`, etc.).

### 3.2. Crear tu repositorio personal

1. Inicia sesión en GitHub.  
2. Haz clic en el botón **“New”** (nuevo repositorio).  
3. Configura:
   - **Repository name:**  
     `semillero-2025-nombre-apellido`  
     Ejemplo: `semillero-2025-jonatan-blank`
   - **Visibility:** `Public` (recomendado para poder compartirlo fácil).
   - Puedes marcar “Add a README file” si quieres.
4. Haz clic en **“Create repository”**.

### 3.3. Estructura recomendada de tu repositorio

Tu repositorio personal debería ir creciendo por bloques, algo así:

```text
semillero-2025-nombre-apellido/
?? 01-html-css/
?  ?? reto-01-cv-personal/
?     ?? index.html
?     ?? style.css
?? 02-javascript/
?  ?? reto-02-interactividad-cv/
?     ?? index.html
?     ?? style.css
?     ?? script.js
?? 03-bootstrap/
?  ?? reto-03-landing-tattoos/
?     ?? index.html
?? 04-.../
```

Para el **primer bloque**, el objetivo mínimo es:

```text
semillero-2025-nombre-apellido/
└─ 01-html-css/
   └─ reto-01-cv-personal/
      ├─ index.html
      └─ style.css
```

Para el **segundo bloque**, agrega:

```text
semillero-2025-nombre-apellido/
?? 02-javascript/
   ?? reto-02-interactividad-cv/
      ?? index.html
      ?? style.css
      ?? script.js
```

Para el **tercer bloque**, agrega:

```text
semillero-2025-nombre-apellido/
?? 03-bootstrap/
   ?? reto-03-landing-tattoos/
      ?? index.html
```

---

## 4. Cómo trabajar con tu repositorio (flujo básico)

Un flujo de trabajo sencillo puede ser:

1. **Clonar tu repositorio** a tu computadora:

   ```bash
   git clone https://github.com/tu-usuario/semillero-2025-nombre-apellido.git
   cd semillero-2025-nombre-apellido
   ```

2. **Crear las carpetas para el bloque y el reto**  
   Ejemplo:

   ```bash
   mkdir -p 01-html-css/reto-01-cv-personal
   ```

3. **Crear tus archivos de solución**  
   Ejemplo para el primer reto:
   - `01-html-css/reto-01-cv-personal/index.html`
   - `01-html-css/reto-01-cv-personal/style.css`

4. **Hacer commit de tus cambios**:

   ```bash
   git add .
   git commit -m "Add Reto 01 - CV personal en HTML y CSS"
   ```

5. **Subir tu trabajo a GitHub**:

   ```bash
   git push origin main
   ```
   (o `master`, según cómo se llame tu rama principal).

6. **Compartir el enlace**  
   Envía el enlace a tu repositorio o directamente a la carpeta del reto cuando el mentor lo pida.

---

## 5. Qué revisará el mentor

En cada reto, se tendrá en cuenta:

- Que seguiste las instrucciones del `README` del reto.
- Que la estructura de carpetas en tu repositorio sea ordenada.
- Que el código sea legible (indentación, nombres, etc.).
- La calidad de tu solución:
  - En este bloque: estructura HTML5, uso de CSS, diseño limpio y profesional.

Este repositorio central **no es para subir tus soluciones**;  
es tu guía de referencia durante todo el Semillero Zero2Hero 2025.

---

Si lees este README completo y sigues los pasos, ya tendrás el 50% del trabajo avanzado:  
solo faltará sentarte a **estudiar los videos y construir tus retos con calma y constancia** 💪