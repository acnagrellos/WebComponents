# Organización de Web Components

Este proyecto es una landing para una hamburguesería. La Landing se ha desarrollado usando la tecnología de Web Components en Javascript.

## Estructura de carpetas

La estructura de carpetas para nuestros Web Components será:

```
.
├── src
│   ├── components
│   │   ├── module1
│   |   │   ├── components
│   │   │   ├── ├── my-component-1.js
│   │   │   ├── ├── my-component-1.css
│   │   │   ├── ├── components
│   │   │   ├── ├── ├── my-component-1-1
│   │   │   ├── ├── ├── ├── my-component-1-1.js
│   │   │   ├── ├── ├── ├── my-component-1-1.css
│   │   │   ├── ├── └── my-component-1-n
│   │   ├── module2
│   │   ├── ...
│   │   └── module-n
│   ├── css
│   │   ├── global.css
│   │   └── reset.css
│   ├── img
│   │   ├── logo
│   │   └── ...
│   ├── page1
│   │  └── index.html
│   ├── page2
│   │   └── index.html
│   ├── ...
│   │   └── index.html
│   │   page-n
│   └── └── index.html
└── main.js
└── index.html
```

## Debugging

1. Es necesario instalar todas las dependencias del proyecto con `npm install`.

2. Para arrancar el proyecto usaremos el comando `npm run dev`

3. Tu proyecto se ha arrancado en la url: `http://localhost:5885`

## Deploy

Tenemos la aplicación desplegada en Github Pages. Puedes acceder a ella entrando en la siguiente dirección:

* [https://acnagrellos.github.io/WebComponents](https://acnagrellos.github.io/WebComponents)