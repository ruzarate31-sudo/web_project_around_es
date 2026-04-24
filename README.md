# TripleTen web_project_around_es

## Proyecto Web Around (Proyecto 11)

Este proyecto es una página web interactiva donde se muestran diferentes lugares naturales en forma de tarjetas con imágenes. El usuario puede interactuar con la página editando su perfil, dando like a las tarjetas, eliminándolas y ampliando las imágenes en una ventana modal.

En esta etapa (Proyecto 11), el enfoque principal fue la **profundización en la Programación Orientada a Objetos (POO)** mediante la creación de nuevas clases y la aplicación de **acoplamiento débil**. Se refactorizó aún más la arquitectura del proyecto para separar responsabilidades, mejorar la reutilización de componentes y facilitar la escalabilidad del código.

---

## Funcionalidad

La página permite realizar las siguientes acciones:

* Refactorización avanzada POO: Implementación de nuevas clases (Section, Popup, PopupWithForm, PopupWithImage, UserInfo).

* Arquitectura modular: Separación clara de responsabilidades entre componentes.

* Gestión de Tarjetas: Crear, dar like y eliminar tarjetas dinámicamente.

* Renderizado dinámico: Uso de la clase Section para renderizar listas de elementos.

* Interacción Modal: Apertura y cierre de popups mediante clases especializadas.

* Formularios desacoplados: Manejo de envío de datos mediante callbacks.

* Validación Avanzada: Cada formulario cuenta con su propia instancia de validación en tiempo real.

* Control centralizado: index.js actúa como punto de conexión entre todas las clases.

---

## Tecnologías utilizadas

** HTML5

** CSS3 (Metodología BEM)

** JavaScript (ES6+)

** Programación Orientada a Objetos (OOP)

** Módulos de JavaScript

** Git / GitHub

---

## Estructura del proyecto

El proyecto ha evolucionado a una estructura modular más robusta:

/blocks
  (Archivos CSS por componentes)

/components
  Card.js
  FormValidator.js
  Popup.js
  PopupWithForm.js
  PopupWithImage.js
  Section.js
  UserInfo.js

/images
  (Iconos y recursos visuales)

/pages
  index.css
  index.js

/utils
  utils.js

/vendor
  (Normalize.css y fuentes)

index.html
README.md
.prettierignore

---

## Descripción de las clases (Refactorización Proyecto 11)

* Card.js
  Encargada de crear tarjetas, manejar eventos (like, eliminar, click en imagen) y delegar la acción de apertura del popup mediante callbacks.

* FormValidator.js
  Gestiona la validación de formularios, mostrando errores y controlando el estado de los botones.

* Popup.js
  Clase base para todos los popups. Maneja apertura, cierre, overlay y tecla ESC.

* PopupWithImage.js
  Extiende Popup. Se encarga de mostrar imágenes ampliadas en un modal.

* PopupWithForm.js
  Extiende Popup. Gestiona formularios, captura datos y ejecuta callbacks al enviar.

* Section.js
  Responsable de renderizar listas de elementos en el DOM utilizando una función renderer.

* UserInfo.js
  Gestiona la información del usuario directamente desde el DOM (nombre y descripción).

* index.js
  Archivo principal que conecta todas las clases, crea instancias, define callbacks y controla el flujo de la aplicación.

---

## Proyecto en línea

Podes ver el proyecto publicado en GitHub Pages en el siguiente enlace:

https://ruzarate31-sudo.github.io/web_project_around_es/
