# TripleTen web_project_around_es

## Proyecto Web Around (Proyecto 10)
Este proyecto es una página web interactiva donde se muestran diferentes lugares naturales en forma de tarjetas con imágenes. El usuario puede interactuar con la página editando su perfil, dando like a las tarjetas, eliminándolas y ampliando las imágenes en una ventana modal.

En esta etapa (Proyecto 10), el enfoque principal fue la Programación Orientada a Objetos (POO). Se refactorizó todo el código base para organizar la lógica en clases reutilizables y módulos de JavaScript, mejorando la estructura y escalabilidad del código.

## Funcionalidad
La página permite realizar las siguientes acciones:

- Refactorización POO: Lógica organizada en clases independientes para Tarjetas y Validación.

- Módulos JS: Uso de import y export para conectar diferentes scripts.

- Gestión de Tarjetas: Crear, dar like y eliminar tarjetas dinámicamente.

- Interacción Modal: Editar perfil y agregar nuevos lugares con cierre mediante botón, overlay o tecla Esc.

- Validación Avanzada: Cada formulario cuenta con su propia instancia de validación en tiempo real.

- Servidor Local: Implementación de módulos que requieren ejecución mediante un servidor (Live Server).

## Tecnologías utilizadas
** HTML5

** CSS3 (Metodología BEM)

** JavaScript (ES6+)

**Programación Orientada a Objetos (OOP)

** Módulos de JavaScript

** Git / GitHub

## Estructura del proyecto
El proyecto ha evolucionado a una estructura modular:

/blocks
  (Archivos CSS por componentes)

/images
  (Iconos y recursos visuales)

/pages
  index.css

/scripts
  Card.js
  FormValidator.js
  utils.js
  index.js

/vendor
  (Normalize.css y fuentes)

index.html
README.md
.prettierignore

 Descripción de la carpeta Scripts (Refactorizada)
* Card.js Contiene la clase Card, encargada de crear el marcado de la tarjeta, configurar los manejadores de eventos (like, eliminar, abrir imagen) y devolver el elemento funcional.

* FormValidator.js Contiene la clase FormValidator, que gestiona la validación de campos, mensajes de error y el estado de los botones de envío para cualquier formulario de la página.

* utils.js Almacena las funciones utilitarias de apertura y cierre de modales que son compartidas por los diferentes módulos.

* index.js El archivo principal que importa las clases, inicializa las instancias de validación y coordina el renderizado inicial de la aplicación.

## Proyecto en línea
Puedes ver el proyecto publicado en GitHub Pages en el siguiente enlace:

https://ruzarate31-sudo.github.io/web_project_around_es/