# Static Generated App - Pokemon App

Es la construcción estática del sitio.

Sabemos que existen 151 Pokemones, entonces para crear las paginas /1, /2 para mostrar el dato de cada Pokemon ya sabemos como se va a ver.

Vamos a usar: **getStaticPath** y **getStaticProps** para que trabajen en el biuld time, con el `npm run build` o `yarn build`.

---

## <img width="38" height="38" src="https://img.icons8.com/doodle/38/apple-notes.png" alt="apple notes"/> Temas

### <img width="28" height="28" src="https://img.icons8.com/doodle/28/apple-notes.png" alt="apple notes"/> 1 - Multiples componentes de NextUI

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

### <img width="28" height="28" src="https://img.icons8.com/doodle/28/apple-notes.png" alt="apple notes"/> 2 - Flex Layout

- Creamos el Layout principal, creamos: `components`/ `layouts`

Dentro de `components` creo la carpeta `layouts` y dentro: `Layouts.tsx` e `index.ts`.

-> `index.ts`:
```
export * from './Layout'
```


-> `Layout.tsx`
```typecript
import React, { FC, ReactNode } from 'react'
import Head from 'next/head'

interface LayoutProps {
  children: ReactNode
  title?: string
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name="author" content="María Eugenia Costa" />
        <meta name="description" content={ `Información sobre el Pokemon: ${ title }` } />
        <meta name="keywords" content={ `${ title }, pokemon, pokedex` } />
      </Head>
      { /* Navbar*/ }
      <main>
        { children }
      </main>
    </>
  )
}

``` 

-> Entonces ahora en mi **HomePage** puedo aplicar el Layout:

```TypeScript
import React, { FC } from 'react'
import { Layout } from '../components/layouts'
import { Button } from '@nextui-org/react'

const HomePage:FC = () => {
  return (
    <Layout title='Listado de Pokemons'>
      <Button color="gradient">Click me</Button>
    </Layout>
  )
}

export default HomePage
```


---

### <img width="28" height="28" src="https://img.icons8.com/doodle/28/apple-notes.png" alt="apple notes"/> 3 - Temas de NextUI

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

```TypeScript
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

### <img width="28" height="28" src="https://img.icons8.com/doodle/28/apple-notes.png" alt="apple notes"/> 4 - Next _document

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

### <img width="28" height="28" src="https://img.icons8.com/doodle/28/apple-notes.png" alt="apple notes"/> 5 - Navegación

- Cuando queremos dar estilos a componentes de **NextUI** usamos la propiedad **css** (es como es sx de MUI), ejemplo: `  <Spacer css={ {flex: '1'} } />`

- Como la src d ela imagen que voy a usar no esta en mi proyecto, debo agregar el dominio en **next.config.js**:

```javascript
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com']
  }
}

module.exports = nextConfig
```

- Si quiero agregar estilos a otro componente que no sea de NextUI, lo hago con **Style**.

```
import { useTheme, Image, Spacer, Text} from '@nextui-org/react'
import React, { FC } from 'react'

const Navbar: FC = () => {
  const { theme } = useTheme()

  return (
    <div style={ {
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray800.value
    } }>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono de la aplicación"
        width={ 70 }
        height={ 70}
      />
      <Text
        color='white'
        h1
        style={ {
          fontSize: 'var(--nextui-fontSizes-lg)',
          lineHeight: 'var(--nextui-lineHeight-lg)'
        } }>
        <span>P</span>
        <span style={ { fontSize: 'var(--nextui-fontSizes-md)' } }>okemon</span>
      </Text>
      <Spacer css={ {flex: 1} } />
      <Text color='white'>Favoritos</Text>
    </div >
  )
}

export default Navbar
```


---

### <img width="28" height="28" src="https://img.icons8.com/doodle/28/apple-notes.png" alt="apple notes"/> 6 - Parámetros por URL

---

### <img width="28" height="28" src="https://img.icons8.com/doodle/28/apple-notes.png" alt="apple notes"/> 7 - Parámetros estáticos

---

### <img width="28" height="28" src="https://img.icons8.com/doodle/28/apple-notes.png" alt="apple notes"/> 8 - Next - GetStaticProps

- Solo se hace en el build (cuando hacemos `yarn build`) y se ejecuta del lado del servidor.

- Solo en las **NextPages**

- Las **props** que retorna `getStaticProps` son las **props** de la pagina
  
- You should use getStaticProps when:

-The data required to render the page is available at build time ahead of a user’s request.

-The data comes from a headless CMS.

-The data can be publicly cached (not user-specific).

-The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

```typescript
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await  // your fetch function here 

  return {
    props: {
      
    }
  }
}
```

---

### <img width="28" height="28" src="https://img.icons8.com/doodle/28/apple-notes.png" alt="apple notes"/> 9 - Next - getStaticPaths

---

### <img width="28" height="28" src="https://img.icons8.com/doodle/28/apple-notes.png" alt="apple notes"/> 10 - Generar 151 páginas de forma estática en tiempo de construcción (build time)


De manera estática en el build se crean las 151 paginas, para que cuando se soliciten ya se vean, ya estén listas, en la página dle pokemon muestra el nombre del mismo y los sprites.

---

## <img width="28" height="28" src="https://img.icons8.com/doodle/28/apple-notes.png" alt="apple notes"/> Tipos de render de la aplicación

- **SSR**: Server-side rendering, la persona/el usuario necesita una información y necesitamos que el servidor cree la página ya que debería actualizar algo.

- **SSG**: Static-site generation, generamos todo antes de que la persona haga el request, es lo más rápido. Todas las páginas se crean en el servidor, y al hacer el request ya se manda la página contruida.

- **CSR**: Client-side rendering

- **Dynamic routing**

- **IRS**: Increments Static Regeneration
    
---
