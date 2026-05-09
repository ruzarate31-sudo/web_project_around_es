# TripleTen web_project_around_es

## Proyecto Web Around (Proyecto 12)

Este proyecto es una aplicación web interactiva donde los usuarios pueden compartir lugares mediante tarjetas con imágenes, interactuar con ellas y administrar su perfil personal.

En esta etapa (Proyecto 12), el proyecto evolucionó integrando completamente una API REST, permitiendo almacenar y sincronizar la información del usuario y las tarjetas directamente desde el servidor.

Además, se continuó profundizando en la Programación Orientada a Objetos (POO), el desacoplamiento de componentes y la arquitectura modular basada en clases ES6.

---

## Funcionalidades

La aplicación permite realizar las siguientes acciones:

### Perfil de usuario
* Editar nombre y descripción del perfil.
* Actualizar la foto de perfil mediante una URL.
* Renderizar automáticamente la información del usuario desde el servidor.

### Tarjetas
* Renderizar tarjetas dinámicamente desde la API.
* Crear nuevas tarjetas.
* Eliminar tarjetas propias con confirmación previa.
* Dar y quitar "Me gusta".
* Visualizar imágenes ampliadas en un popup.

### Experiencia de usuario
* Validación en tiempo real de formularios.
* Estados de carga en formularios ("Guardando...", "Creando...", etc.).
* Apertura y cierre de popups mediante overlay, botón de cierre y tecla ESC.
* Arquitectura desacoplada basada en clases reutilizables.

---

## Tecnologías utilizadas

* HTML5
* CSS3
* Metodología BEM
* JavaScript (ES6+)
* Programación Orientada a Objetos (POO)
* Módulos JavaScript
* API REST
* Webpack
* Babel
* Git / GitHub

---

## Estructura del proyecto

El proyecto utiliza una arquitectura modular organizada por componentes:

/components
│
├── Api.js
├── Card.js
├── FormValidator.js
├── Popup.js
├── PopupWithForm.js
├── PopupWithImage.js
├── PopupWithConfirmation.js
├── Section.js
└── UserInfo.js

/pages
│
├── index.css
└── index.js

#/blocks
#/images
#/vendor
#/utils

#index.html
#README.md

*Descripción de las clases
*Api.js

#Se encarga de manejar todas las solicitudes al servidor:

*Obtener información del usuario.
*Obtener tarjetas iniciales.
*Editar perfil.
*Actualizar avatar.
*Crear tarjetas.
*Eliminar tarjetas.
*Dar y quitar likes.
*Card.js

#Crea tarjetas dinámicamente y controla:

*Likes.
*Eliminación.
*Apertura de imágenes.
*Renderizado individual.
*FormValidator.js

#Gestiona:

*Validación en tiempo real.
*Mensajes de error.
*Estado de botones.
*Popup.js

#Clase base para todos los popups:

*Apertura.
*Cierre.
*Overlay.
*Escape (ESC).
*PopupWithForm.js

*Extiende Popup.
*Gestiona formularios y callbacks de envío.

*PopupWithImage.js

*Extiende Popup.
*Muestra imágenes ampliadas.

*PopupWithConfirmation.js

*Extiende Popup.
*Se utiliza para confirmar la eliminación de tarjetas.

*Section.js

*Renderiza listas dinámicas de elementos en el DOM.

*UserInfo.js

#Gestiona:

*Nombre.
*Descripción.
*Avatar.
*ID del usuario.
*index.js

#Archivo principal que:

*Conecta todas las clases.
*Inicializa componentes.
*Gestiona eventos.
*Coordina toda la lógica general de la aplicación.
*Características destacadas del Proyecto 12
*Integración completa con API REST.
*Arquitectura orientada a objetos escalable.
*Manejo de promesas y asincronía.
*Uso de Promise.all().
*Renderizado dinámico desde servidor.
*Confirmación de eliminación de tarjetas.
*Estados de carga en formularios.
*Código modular y reutilizable.

## Proyecto en línea

Podés ver el proyecto publicado en GitHub Pages acá:

https://ruzarate31-sudo.github.io/web_project_around_es/
