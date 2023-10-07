# <img width="30" height="30" src="https://img.icons8.com/color/30/nextjs.png" alt="nextjs"/> Introducción a Next.js

## <img width="20" height="20" src="https://img.icons8.com/3d-fluency/20/eyes-1.png" alt="eyes-1"/> ¿ Qué se ve?

### <img width="20" height="20" src="https://img.icons8.com/color/20/nextjs.png" alt="nextjs"/> 1 - ¿ Qué es NEXT.js?

- Es un **Framework** poderoso para servir contenido estático y generado desde el lado del servidor.

- Está basado en **React**

- Al ser un marco de trabajo hay ciertos lineamientos a seguir.

- Podemos hacer todo lo que sabemos en React más **mejoras de rendimiento**, **SEO**, **Separación de código**, **router**, **dependencias** y más.

- Ya la nueva docuemtnación de React dejo de recomendar crear aplicaciones con CRA(Create React App) y recomienda utilizar **Vite** o **Gatsby** y si se quiere tener renderizados del lado del servidor usar **NEXT.js**.

- Cambia el paradigma de los SPA (Single Page Aplication) y te da opciones para trabajar tus aplicaciones. 

Ahora se cuenta con el **Sever-Side Rendering** y/o **generación estática**, y al mismo tiempo NEXT.js ofrece:

- **SRR**: Server-side rendering

- **SSG**: Static-site generation

- **CSR**: Client Side Rendering

- **ISR**: Incremental Static Regeneration

- **DR**: Dynamic Routing

- Una SPA funciona así:

1. El usuario entra a un URL el cual inicia la primera solisitud (**Request**)

2. El servidor responde con una respuesta (**Response**).

3. Esa response contiene toda la aplicación o una gran parte de ella. Usualmente asi viene el documento html y referencias a otros archivos necesarios.

4. La computadora cliente interpreta la respuesta. Y aquí viene nuestro contenido de React. 

Lo cual no es malo, pero pensemos ¿qué pasaría si la persona sólo quiere ver la página del about? Cargaría completamente **toda** nuestra aplicación, y eso incluye módulos que nunca usará.

Pero quizá, el peor panorama es que **no es SEO friendly** (SEO = Search Engine Optimization), solo lo tiene para la primer pantalla, al ser SPA, las meta tags no pueden ser personalizadas acorde a la página que se ve, todo esto hace que no se posicione bien en Google.

¿Por qué es tan importante el SEO? El impacto que tienes en la red.

- NEXT.js es un Framework poderoso para servir contenido estático y generado desde el lado del servidor.

---

### <img width="20" height="20" src="https://img.icons8.com/fluency/20/project-management.png" alt="project-management"/> 2 - Crear nuestro primer proyecto

En el curso se parte con nivel de 0 conocimiento de [NEXT.js](https://nextjs.org/) pero se entiende que ya se tiene conocimineto de REACT, como los **hooks**.

Recomienda ver su video de YouTube [React + TypeScript: Crear aplicación de React con Typescript](https://www.youtube.com/watch?v=dNxaP_BTtwQ&ab_channel=FernandoHerrera).

#### Cambios en NEXT.js 13.4

¿Cómo inicializarlo?

- Trabajando con **npm**: `npx create-next-app@latest`

- Trabajando con **yarn**: `yarn create next-app`

-> Con los recientes cambios que trajo la version **13.4** de NEXT.js (App Router ahora es estable), hubo cambios importantes a tener en cuenta al crear un nuevo proyecto.

Les recomendamos seleccionar las siguientes opciones para crear el proyecto lo más parecido a lo visto en el curso:

```
What is your project named? initial-demo
Would you like to use TypeScript with the project? Yes
Would you like to use ESLint with this project? YEs
Would you like to use Tailwind CSS with this project? No
Would you like to use `src/` directory with this project? No
Use App Router (recomended)? No
Would you like to cutomize the default import alias? No
```

- Entro al proyecto creado y para correr la aplicación: `yarn dev` y lo puedo ver en: [ http://localhost:3000]( http://localhost:3000)

---
### <img width="20" height="20" src="https://img.icons8.com/color/20/folders-group.png" alt="folders-group"/> 3 - Exposición sobre cada archivo y directorio

```
>.next
> components
> node_modules
> pages
  > contact
     index.tsx
  > pricing
     index.tsx   
  > api
  _app.tsx
  _document.tsx
  about.tsx
  index.tsx
> public
> styles
.dockerignore
.eslintrc.json
.gitignore
Dockerfile
next-env.d.ts
next.config.js
package.json
README.md
tsconfig.json
yarn.lock
```

- **.dockerignore** y **Dockerfile** solo si creamos la imagen de Docker

- **.next**, por defecto esta invisible(oculta). Si al clonar un proyecto no vemos este archivo hay que correr `yarn dev` para inciializarlo y que se cree, sin este archivo no se puede renderizar la aplicación, siempre que estemos en **Desarrollo**, esto no pasa si ya hacemos el **build**

- **components** donde van a estar todos mis componentes

- **node_modules**, no todos llegan a la versión de producción, algunos son para path refresh que se usan en desarrollo, peor luego no llegan a la versión de producción. Por eso se incluye siempre en el .gitignore

- **pages** ahi van a estar las páginas de la aplicación, son componentes funcionales y siempre deben estar **export default function NombreDelFunctionalComponent** (exportador por defecto). La diferencia con React es qeu el componente puede teenr un nombre y el archivo otro. La otra difernecia es que los nombres de los componentes ahora deben estar en **minuscula**, sin espacios, se puede usar `-` ó `_`, y el nombre debe ser el del **path** de la URL, por eso a la principal se la llama **index.tsx**. También tengo el archivo **_app.tsx** que es el **punto central de la aplicación** (Como el App.tsx de React), es útil para ahi aplicar algún **context** que quiero que esté disponible en toda la aplicación, por ejemplo aca puedo armar un `<header>` o un `<footer>`.

La diferencia que notamos es la etiqueta `<Head></Head>` donde tengo las **meta tags** para el titulo que se ve en la ventana del navegafor, el favicon y las description y todas las meta tags que le quiera poner. Esta es la difernecia por la cual tiene **SEO friendly**

Hay una carpeta especial lalmada **API** es una API REST Full ya lista, tenemos el archivo **hello.ts** por lo que si hacemos [http://localhost:3000/api/hello](http://localhost:3000/api/hello), vemos la respuesta JSON:

```
{
name: "John Doe"
}
```

- **public** con lso favicon o íconos svg, son los recursos estáticos, código que no es compilado, simeplemente es servido. Si no queremos que las imagenes no tengan hashes van aca.

- **styles** con los estilos de mi aplicación, el archivo **glabals.css** se importa como un archivo normal de CSS y se aplica de manera global en la aplicación, en cambio los demás archivos que empiezan en mayúsucla y se nombran: **NOmbre.modules.css** suelen ser los estilos particulares de un componente o página, las clases de estos archivos van a tener hashes. 

- **eslintrc.json** para configurar el ESLinter

- **.gitignore** los archivos que no se suben a GitHub

- **.next.config.js** para cambios específicos de NEXT.js

- **package.json** con el **nombre** de la aplicación, los **scripts** para poder correrla, compilarla, hacer el build, tenemos las **dependencias**

- **README.md** donde se puede dejar anotado las configuraciones necesarias por si clonan el repositorio

- **yarn.lock** nunca tocar este archivo, es como el package-lock.json

---

### <img width="20" height="20" src="https://img.icons8.com/emoji/20/link-emoji.png" alt="link-emoji"/> 4 - Componentes propios de Next (Link, Head)


- Es el `<head>` del HTML5, por esto es SEO friendly.

```
<Head>
  <title>Home</title>
  <meta name="description" content="Home Page" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.ico" />
</Head>
```

[Documentación de Next.js - Head](https://nextjs.org/docs/pages/api-reference/components/head)

- Con el `<Link>` podemos hacer el client side transition. Next.js versión 13 cambió un poco el componente `<Link>`:

-Antes:

```tsx
<Link href="/about">
  <a>About</a>
</Link>  
```

-Ahora - ya no es necesrio anadir `<a>` anchor tag manualmente como hijo de Link, el componente `<Link>` siempre crea un anchor tag:

```tsx
<Link href="/about">
  About
</Link>  
```

Usando `<Link>` evitamos el **refresh**, como el Link de react-router-dom que hace que la aplicación no se recargue. Hace un **pre fetch** de la página, se pre carga antes de renderizarse.

También se le puede enviar un objeto, por ejemplo:

```tsx
<Link
  href={{
    pathname: '/about',
    query: {name: 'test'}
  }}
>
 About
</Link> 
<Link
  href={{
    pathname: '/blog/[slug]',
    query: {slug: 'my-post'}
  }}
>
 Blog Post
</Link> 
```
-> Me crea la ruta: `/about?name=test` y la ruta dinámica: `/blog/my-post`


Puede tener **props**:


| Prop	| Example	| Type	| Required |
| href	| href="/dashboard"	| String or Object	| Yes |
| replace	| replace={false}	| Boolean	| - |
| scroll	| scroll={false}	| Boolean	| - |
| prefetch	| prefetch={false}	| Boolean	| - |

-> **Replace**: Defaults to false. When true, next/link will replace the current history state instead of adding a new URL into the browser’s history. 

-Me bloquea la flecha para ir hacia atrás. No se suele utilizar mucho. Un ejemplo de uso es en el Login, si ya se autentico que no regrese al Login.

-> **Scroll**: Defaults to true. The default behavior of `<Link>` is to scroll to the top of a new route or to maintain the scroll position for backwards and forwards navigation. When false, next/link will not scroll to the top of the page after a navigation.

-> **Prefetch**: Defaults to true. When true, next/link will prefetch the page (denoted by the href) in the background. This is useful for improving the performance of client-side navigations. Any `<Link />` in the viewport (initially or through scroll) will be preloaded. Prefetch can be disabled by passing prefetch={false}. Prefetching is only enabled in production.

**Good to know**: `<a>` tag attributes such as className or target="_blank" can be added to `<Link>` as props and will be passed to the underlying `<a>` element.

-> Ejempl ode ruta dinámica:

```javascript
import Link from 'next/link'
 
function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
 
export default Posts
```
### Static Generation vs. Sever-Side Rendering


Next.js trabaja con dos tipos generales de generación:

- **Static Generation**:  el HTML se crea en el momento de **build** (construccion) del sitio y se reutiliza en cada request. Es el contenido estático, que no cambiará.

- **Sever-Side Rendering**: el HTML es generado en cada **request** al cliente.

Por defecto lo hace en **Static generation**.

---

### <img width="20" height="20" src="https://img.icons8.com/color/20/css3.png" alt="css3"/> 5 - Módulos de CSS y estilos globales

Los **Estilos globales** están en **blonals.css**, los estilos que son de una página determinada o de un componente funcional van en módlo, y los nombramos: **Nombre.module.css**, lo importamos igual que el css: `import styles from './Navbar.module.css'` y lo utilizamos en el código.

Cuando tengo clases que son de más de una palabra y están unidas por `-`:

```tsx
<ul className={ styles['menu-container'] }>
```

---

### <img width="20" height="20" src="https://img.icons8.com/color/20/open-book--v1.png" alt="open-book--v1"/> 6 - Páginas


Desde la carpeta **pages**, la primer que se renderiza en la UR `/` es el archivo **index.tsx**, en la misma carpeta puedo crear mis otras paginas, siempre las nombro en minuscula, por ejemplo **about.tsx**,

Todo lo que esta dentro de **pages** termina siendo una parte de la ruta en la URL.

Tenemos la carpeta **api** que es donde vamos a tener lo de la API Rest Full.

---

### <img width="20" height="20" src="https://img.icons8.com/color/20/api.png" alt="api"/> 7 - API generadas por defecto

Es la arpeta que ya tenemos dentro de **pages** llamada **api** nos va a quedar la ruta: `http://localhost:3000/api/` + lo que tengamos dentro de api
---

### <img width="20" height="20" src="https://img.icons8.com/fluency/20/anchor-nodes.png" alt="anchor-nodes"/> 8 - Aplicar estilos basados en rutas

---

### <img width="20" height="20" src="https://img.icons8.com/stickers/20/channel-mosaic.png" alt="channel-mosaic"/> 9 - Layouts

Es un componente funcional (simple higher orden component) que recibe un **children**.

No va dentro de **pages** porque lo que hay ahi termina siendo uan ruta de la URL.

Va dentro de **components** en la carpeta **layouts**
---

### <img width="20" height="20" src="https://img.icons8.com/office/20/channel-mosaic.png" alt="channel-mosaic"/> 10 - Layouts anidados

Se crea un Layout dentro de otro Layout, pero queda medio complicado para leer.

Sino usando el PageName.getLayout.

(Documentacion de Next.js)[https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#layout-pattern]

---