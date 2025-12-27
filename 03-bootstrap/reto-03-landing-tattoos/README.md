# Reto 03 - Landing page para estudio de tattoos (Bootstrap)

## Vision general

Vas a crear una landing page profesional para un estudio de tattoos usando **solo Bootstrap**. Tu objetivo es que la pagina se vea moderna, confiable y lista para convertir visitas en citas.

El reto es **no escribir CSS ni JavaScript propio**: todo debe resolverse con clases y componentes de Bootstrap.

---

## Restricciones tecnicas

- Solo HTML + Bootstrap (CDN).
- No crear `style.css` ni `script.js`.
- No usar `<style>` ni `<script>` con codigo propio.
- No usar librerias externas (iconos, animaciones, sliders, etc.). Solo Bootstrap.

Incluye Bootstrap asi:
```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

---

## Requisitos de contenido (secciones minimas)

Tu landing debe incluir, como minimo, estas secciones:

1) **Navbar**
- Logo o nombre del estudio.
- Enlaces a secciones de la pagina.

2) **Hero**
- Titulo potente (ej. "Tattoos personalizados con estilo propio").
- Subtitulo corto con propuesta de valor.
- Boton principal de accion: "Agenda tu cita".

3) **Servicios**
- Cards o list group con 3 a 6 servicios.
- Ejemplos: Linework, Realismo, Blackwork, Cover-ups, Piercing.

4) **Artistas**
- Cards con nombre, especialidad y mini bio.

5) **Galeria**
- Grid responsive con imagenes (pueden ser placeholders).

6) **Precios o paquetes**
- Tabla o cards con rangos y beneficios.

7) **Testimonios o FAQ**
- Usa un componente de Bootstrap: carousel o accordion.

8) **Contacto**
- Formulario con nombre, email, estilo deseado y mensaje.

9) **Footer**
- Direccion, horario, telefono y redes (texto simple).

---

## Requisitos de diseno (Bootstrap)

Tu HTML debe demostrar buen uso de Bootstrap:

- Grid: `container`, `row`, `col-*`, `g-*`.
- Utilidades: `mt-*`, `py-*`, `text-*`, `bg-*`, `shadow`, `rounded`.
- Componentes obligatorios (minimo 4):
  - `navbar`
  - `card`
  - `carousel` o `accordion`
  - `form`
- Debe ser responsive: secciones se adaptan en mobile sin romperse.

---

## Entregable y estructura

En tu repositorio personal crea:

```text
03-bootstrap/
  reto-03-landing-tattoos/
    index.html
    assets/ (opcional, solo si agregas imagenes locales)
```

---

## Checklist rapido

- [ ] No existe `style.css` ni `script.js`.
- [ ] Bootstrap cargado via CDN.
- [ ] Al menos 4 componentes de Bootstrap.
- [ ] Landing se ve bien en mobile y desktop.
- [ ] Contenido completo del estudio (servicios, artistas, galeria, contacto).

---

## Que evaluara el mentor

- Uso correcto de Bootstrap (grid + utilidades + componentes).
- Orden y limpieza del HTML.
- Coherencia visual sin CSS personalizado.
- Que la pagina parezca lista para un cliente real.
