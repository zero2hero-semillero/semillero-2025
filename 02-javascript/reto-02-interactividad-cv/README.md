# Reto 02 - Interactividad para tu CV (HTML + CSS + JavaScript)

## Vision general

Partiendo de la pagina personal que creaste en el Bloque 01, ahora vas a darle dinamismo con JavaScript. Tu sitio deberia reaccionar a la persona que lo visita: mostrar contenido generado por codigo, validar formularios sin recargar y ofrecer pequenos detalles que hagan la experiencia mas fluida.

Objetivo mental: que un reclutador vea tu CV y piense que ya puedes mover una interfaz web basica por tu cuenta.

---

## Restricciones tecnicas

- Solo HTML, CSS y JavaScript plano (sin frameworks ni librerias grandes).
- Todo el JavaScript debe ir en `script.js`, enlazado con:
  ```html
  <script src="script.js" defer></script>
  ```
- Evita `onclick` o `onchange` en el HTML; usa `addEventListener` desde `script.js`.
- Mantener la estructura semantica y los estilos logrados en el Bloque 01.

---

## Requisitos funcionales minimos

Implementa al menos estos puntos. Puedes sumar extras si quieres.

1) **Navegacion y feedback**
- Smooth scroll o enfoque claro al navegar por el menu.
- Si tienes menu movil, debe abrir/cerrar con JavaScript (clases que muestren/oculten).

2) **Datos generados desde JavaScript**
- Renderiza al menos una lista desde un arreglo de objetos en `script.js` (ejemplo: proyectos, habilidades o certificaciones).
- Cada item debe generarse con `createElement` o `innerHTML` controlado y luego insertarse en el DOM.

3) **Interaccion de usuario**
- Al menos dos comportamientos de esta lista (elige cuales):
  - Boton para cambiar tema (claro/oscuro) o variar la paleta; debe guardar preferencia en `localStorage`.
  - Seccion de "ver mas" / "ver menos" que expanda o colapse texto.
  - Validacion del formulario de contacto en el cliente (campos requeridos, formato basico de email) mostrando mensajes de exito/error sin recargar.
  - Pequenio contador o badge que refleje datos (ejemplo: numero de proyectos filtrados o anos de experiencia calculados automaticamente a partir de un anio de inicio).

4) **Estados visuales y accesibilidad**
- Todo elemento interactivo debe tener foco visible y texto alternativo claro.
- No debe haber errores en consola al interactuar con la pagina.

Extras opcionales (ganas puntos de estilo):
- Animacion suave al mostrar/ocultar secciones (usando clases CSS que actives con JS).
- Guardar en `localStorage` la ultima seccion visitada y resaltarla al volver.
- Cargar datos desde un archivo local `.json` (sin backend) usando `fetch`.

---

## Entregable y estructura

En tu repositorio personal crea (o reutiliza) la carpeta:

```text
02-javascript/
  reto-02-interactividad-cv/
    index.html
    style.css
    script.js
```

Reutiliza el HTML/CSS del Bloque 01, mejoralo y enlaza tu nuevo `script.js`.

---

## Sugerencia de pasos

1. Copia tu pagina del Bloque 01 a esta carpeta.
2. Enlaza `script.js` con `defer` y verifica que carga sin errores (`console.log` inicial).
3. Modela tus datos en arreglos/objetos (proyectos, habilidades) y renderealos dinamicamente.
4. Implementa los comportamientos elegidos (tema, ver mas, validacion, contador).
5. Ajusta estilos si necesitas clases nuevas para estados activos/ocultos.
6. Pasa por un checklist rapido (abajo) y prueba en desktop/movil.

---

## Checklist de entrega

- [ ] `script.js` sin errores en consola (abre devtools y revisa).
- [ ] Menu y/o scroll funcionan con JS y tienen feedback visual.
- [ ] Al menos una lista se genera desde datos en `script.js`.
- [ ] Dos comportamientos de usuario implementados (tema, ver mas, validacion, contador).
- [ ] Preferencias o estado guardados en `localStorage` cuando aplique.
- [ ] HTML semantico, CSS ordenado y sin estilos inline innecesarios.

---

## Que evaluara el mentor

- Funcionamiento real de la interaccion (nada roto en consola).
- Orden y claridad del codigo JavaScript: funciones pequenas, nombres descriptivos, eventos bien asignados.
- Mantenimiento del diseno base (no perder legibilidad en mobile).
- Creatividad: como usas los datos y la interactividad para contar mejor tu historia.
