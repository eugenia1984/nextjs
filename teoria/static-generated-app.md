# Static Generated App - Pokemon App

Es la construcción estática del sitio.

Sabemos que existen 151 Pokemones, entonces para crear las paginas /1, /2 para mostrar el dato de cada Pokemon ya sabemos como se va a ver.

Vamos a usar: **getStaticPath** y **getStaticProps** para que trabajen en el biuld time, con el `npm run build` o `yarn build`.

---

## <img width="28" height="28" src="https://img.icons8.com/doodle/28/apple-notes.png" alt="apple notes"/> Temas

### 1 - Multiples componentes de NextUI

- **NextUI** es una librería de componentes estilizados

- En el video utiliza la [version 1](https://v1.nextui.org/docs/guide/getting-started)

- Inicializar: `yarn add @nextui-org/react@1.0.2-beta.2`

- Ahora en **_app.tsx** tengo que hacer cambios:

```Typescript
import type { AppProps } from 'next/app'

import { NextUIProvider } from '@nextui-org/react'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component { ...pageProps } />
    </NextUIProvider>
  )
}
```

## Using NextUI components

Once NextUI is installed you can use any of the components as follows. NextUI uses tree-shaking so the unused modules will not be included in the bundle during the build process and each component is exported separately.

```typexcript
import { Button } from '@nextui-org/react';

const Component = () => <Button>Click me</Button>;
```

## Individual components import

```typescript
import Button from '@nextui-org/react/button';

const Component = () => <Button>Click me</Button>;
```

## NextUIProvider Props

| Attribute	| Type	| Accepted values	| Description	Default |
| --------- | ----- | --------------- | ------------------- |
| theme |	NextUIThemes	| ThemeObject	| Optional custom theme, by default NextUI applies light theme	| - |
| disableBaseline	| boolean	| true/false	| NextUI automatically includes ``<CssBaseline/>``	| false |

## `<CssBaseline/>`

Es parecido al normalize para que todos los navegadores webs muestren la pagina igual, y hay que hacerlo en el archivo **_document.tsx**(es de **Next**, para aumentar el HTML y el `<body>`)
 
---

### 2 - Flex Layout

---

### 3 - Temas de NextUI


---

### 4 - Next _document

## _document.ts 

- Para tener el control de todo el documento, aca se puede indicar el idioma de la pagina, por ejemplo.

- Va en **pages**.

-  _document.tsx

```typescript
// pages/_document.js

import React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { CssBaseline } from "@nextui-org/react";

class MyDocument extends Document {

  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument
```  

- **DocumentContext** dentro de este context tenemos información de: request, response,
  
---

### 5 - Navegación

---

### 6 - Parámetros por URL

---

### 7 - Parámetros estáticos

---

### 8 - Next - GetStaticProps

---

### 9 - Next - getStaticPaths

---

### 10 - Generar 151 páginas de forma estática en tiempo de construcción (build time)


De manera estática en el build se crean las 151 paginas, para que cuando se soliciten ya se vean, ya estén listas, en la página dle pokemon muestra el nombre del mismo y los sprites.

---
