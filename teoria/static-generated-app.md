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

- Pasamos del Theme `light` al `dark`, usando el custom Hook `useTheme()`, similar a MUI.


El que sugiere la documentación:

```JavaScript
// pages/_app.js

// 1. Import `createTheme`
import { createTheme, NextUIProvider } from "@nextui-org/react"

// 2. Call `createTheme` and pass your custom theme values
const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: '#4ADE7B',
      secondary: '#F9CB80',
      error: '#FCC5D8',
    },
  }
})


// 3. Pass the new `theme`` to the `NextUIProvider`
function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
```

Teniendo ``<NextUiProvider>` puedo especificarle el theme en **MyApp**, pero vamos a crear un nuevo directorio llamado **theme** o **themes** para tenerlo separado (a nivel raiz de la app) y dentro dos archivos:

- `index.ts`, para que sea el archivo de exportacion de todo lo que se encuentre en la carpeta themes

- `darktheme.ts` aca va a estar todo lo que sea referiado al dark theme. Asi si a futuro quiero tener un light theme, me creo un nuevo archivo y ahi puedo switcher entre dark y light theme

-`darktheme.ts`
```typescript
import { createTheme } from '@nextui-org/react'

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {},
  }
})
```

Y en el `index.ts:

```typescript
export * from './darktheme'
```

- Volviendo a `_app.tsx` en `<NextUIProvider theme={darkTheme}>` que lo voy a importar de `import { darkTheme } from '../theme'` y ahora tengo mi aplicación con el fondo negro.
  
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
