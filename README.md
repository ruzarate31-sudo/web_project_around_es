# TripleTen web_project_around_es

# Proyecto Web Around (Proyecto 9)

## Descripción

Este proyecto es una página web interactiva donde se muestran diferentes lugares naturales en forma de tarjetas con imágenes.  
El usuario puede interactuar con la página editando su perfil, dando like a las tarjetas, eliminándolas y también ampliando las imágenes en una ventana modal.

El proyecto fue desarrollado como parte del **Proyecto 9 del curso de desarrollo web**, construyéndose en varias etapas para agregar nuevas funcionalidades con JavaScript, incluyendo validación de formularios y mejoras en la experiencia de usuario.

El proyecto se dividió en **3 partes principales**:

1. Se implementó la estructura básica del proyecto, se crearon las tarjetas a partir de un template en HTML y se renderizaron dinámicamente con JavaScript usando un array de datos inicial.

2. Se agregó la funcionalidad de interacción con las tarjetas, permitiendo:
   - Dar like a las tarjetas.
   - Eliminar tarjetas del grid.
   - Crear nuevas tarjetas mediante un formulario y pulsando Enter mientras se escribe.

3. Se agregaron ventanas modales (popups) para mejorar la interacción del usuario:
   - Editar la información del perfil con validación de los campos.
   - Agregar nuevas tarjetas con validación en tiempo real.
   - Mostrar las imágenes en tamaño grande al hacer clic.
   - Cerrar cualquier ventana modal mediante:
     - Botón de cierre
     - Clic en el overlay (superposición)
     - Pulsando la tecla Esc

---

## Funcionalidad

La página permite realizar las siguientes acciones:

- Editar el nombre y la descripción del perfil mediante un formulario en un modal.
- Crear nuevas tarjetas con título e imagen.
- Mostrar tarjetas de lugares con imagen y título.
- Dar **like** a una tarjeta.
- **Eliminar** una tarjeta del listado.
- **Abrir una imagen en tamaño grande** al hacer clic en la tarjeta.
- Cerrar las ventanas modales usando el botón, overlay o tecla Esc.
- Validación de todos los campos de los formularios antes de permitir el envío.
- Botón de envío deshabilitado si algún campo no cumple la validación.

Todas estas interacciones fueron implementadas usando **JavaScript y manipulación del DOM**, siguiendo buenas prácticas y metodología **BEM**.

---

## Tecnologías utilizadas

Para desarrollar este proyecto se utilizaron las siguientes tecnologías:

- **HTML5**
- **CSS3**
- **JavaScript**
- **Metodología BEM** para la organización de estilos
- **Git** para control de versiones
- **GitHub** para almacenar el repositorio
- **GitHub Pages** para publicar el proyecto en línea

---

## Estructura del proyecto

El proyecto está organizado en diferentes carpetas para mantener el código más ordenado y fácil de entender.
/blocks
  card.css
  cards.css
  content.css
  footer.css
  header.css
  page.css
  popup.css
  profile.css

/images
  add-icon.svg
  avatar.jpg
  close.svg
  delete-icon.svg
  edit-icon.svg
  like-active.svg
  like-inactive.svg
  logo.svg
  placeholder.jpg

/pages
  index.css

/scripts
  index.js
  validate.js

/vendor
  fonts/
  fonts.css
  normalize.css

index.html
README.md
.prettierignore


### Descripción de las carpetas

**blocks/**  
Contiene los estilos CSS organizados con la metodología **BEM**, donde cada bloque de la interfaz tiene su propio archivo.

**images/**  
Contiene todos los iconos e imágenes utilizadas en la página.

**pages/**  
Contiene el archivo principal de estilos que importa los estilos de los bloques.

**scripts/**  
Contiene los archivos **index.js** y **validate.js**, donde se implementa toda la lógica de JavaScript del proyecto, incluyendo:

- Renderizado dinámico de tarjetas.
- Interacciones de perfil y tarjetas.
- Gestión de ventanas modales y eventos (overlay, Esc, botón de cierre).
- Validación de formularios.

**vendor/**  
Contiene archivos externos utilizados en el proyecto, como **normalize.css** y las fuentes.

---

#### Proyecto en línea

Puedes ver el proyecto publicado en GitHub Pages en el siguiente enlace:  
https://ruzarate31-sudo.github.io/web_project_around_es/