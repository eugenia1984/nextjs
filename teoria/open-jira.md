# <img width="48" height="48" src="https://img.icons8.com/color/48/jira.png" alt="jira"/> OpenJira - Ejercicios con MaterialUI

Simulando el Dashboard de Jira, para manejar un CRUD (Create, Read, Update, Delete), y permitir:

- tareas pendientes

- tareas que se están trabajando

- tareas terminadas

- crear nuevas tareas

- ver las tareas pendientes

- editar las tareas

-> Nuevo concepto **getServerSideProps**, es una función que NEXTjs va a ejecutar bajo demanda del cleitne, cuando el usuario hace una solicitud a una URL. Se puede cargar la información de la Base de Datos, por ejemplo, se pueden hacer llamados a las APIs a otros lugares o en la propia API.

---

## <img width="40" height="40" src="https://img.icons8.com/clouds/40/note.png" alt="note"/> Temas

### <img width="30" height="30" src="https://img.icons8.com/clouds/30/note.png" alt="note"/> 1 - Manejo del contexto

---

### <img width="30" height="30" src="https://img.icons8.com/clouds/30/note.png" alt="note"/> 2 - Material UI

- Instalamos MaterialUI con la configuración por defecto con emotion: `yarn add @mui/material @emotion/react @emotion/styled`

- Configuramos para utilizar su feunte por defecto: **Roboto**:

`yarn add @fontsource/roboto`

Y luego importamos lo que necesitamos:

```
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```


O sino directamente con Google Fonts:

```
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
/>
```

```
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```

- Si usamos los iconos: `yarn add @mui/icons-material`
  
---

### <img width="30" height="30" src="https://img.icons8.com/clouds/30/note.png" alt="note"/> 3 - Temas de Material UI

- En la raiz del proyecto creo la careta `themes`, con el `index.ts` y los themes: `ligh-theme.ts` y `dark-theme.ts`.

Dejoe el ejemplo de uno:

```TypeScript
import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#19874b'
    },
    error: {
      main: red.A400
    }
  },
})
```

- En `_app.ts` utilizo el `ThemeProvider` con el `theme`. 

- Siempre recordar agregar ` <CssBaseline />`

```TypeScript
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme, darkTheme } from '../themes'
import '@/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={ darkTheme }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App

```

---

### <img width="30" height="30" src="https://img.icons8.com/clouds/30/note.png" alt="note"/> 4 - Creación de snippets


---
