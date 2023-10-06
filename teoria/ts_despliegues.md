# TypeScript - Docker y Despliegues

## <img width="20" height="20" src="https://img.icons8.com/color/20/javascript--v1.png" alt="javascript icon"/>  <img width="20" height="20" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/20/external-typescript-an-open-source-programming-language-developed-and-maintained-by-microsoft-logo-color-tal-revivo.png" alt="typescript icon"/> 1 - Convertir una aplicación de Next.js en JavaSCript a TypeScript


Fuimos viendo en todos los archivos, ademas de cambiar el .js por el .ts o el .jsx por el .tsx le fuimos agregando todos los tipados necesarios.

---

## <img width="20" height="20" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/20/external-build-agile-flaticons-lineal-color-flat-icons.png" alt="build icon"/> 2 - Generar el build de producción / distribución

[Link a la documentacion de vercel](https://nextjs.org/docs/pages/building-your-application/deploying).

- **De modo manual**: Se usa el comando: `yarn build` ó `next build `. 

Si está ok, por terminal vemos:

```
yarn run v1.22.15
$ next build
 ✓ Linting and checking validity of types
 ✓ Creating an optimized production build    
 ✓ Compiled successfully
 ✓ Collecting page data    
 ✓ Generating static pages (6/6)
 ✓ Collecting build traces
 ✓ Finalizing page optimization

Route (pages)                              Size     First Load JS
┌ ○ /                                      920 B          82.6 kB
├   /_app                                  0 B            79.2 kB
├ ○ /404                                   181 B          79.4 kB
├ ○ /about                                 1.01 kB        82.7 kB
├ λ /api/hello                             0 B            79.2 kB
├ ○ /contact                               929 B          82.7 kB
└ ○ /pricing                               928 B          82.7 kB
+ First Load JS shared by all              79.9 kB
  ├ chunks/framework-142bc663a62a6fa3.js   45.3 kB
  ├ chunks/main-a82dbdedafde9961.js        32.8 kB
  ├ chunks/pages/_app-53cd83f24f57713a.js  315 B
  ├ chunks/webpack-fd8027ecb5121007.js     770 B
  └ css/4f88cda9188e5801.css               745 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)

Done in 80.78s.
```

Una vez que tenemos el **build** con `yarn start` ya nos corre en el servidor de Next.js.

- Otro modo es con **Docker**, creando una imagen

---

## <img width="20" height="20" src="https://img.icons8.com/fluency/20/window.png" alt="window"/>  3 - Desplegar la aplicación en Vercel (Creado por la misma gente de Next.js)

- [**Vercel**](https://vercel.com/), los mismos desarrolladores de **Next.js**, tiene 3 planes, hay uno **free**.

1. Nos creamos la cuenta en Vercel

2. Si el repositorio esta en GitHub agregamos nuestra cuenta, hacemos lo mismo si esta en GitLab.

3. Desde `Overview` > `Add New ...` `Project`.

4. Voy a GitHub, me creo un nuevo repositorio, donde voy a tener la aplicación desplegada y con ese repositorio voy a darle el seguimiento y desplegar en Vercel. Sugiere que por mas que en este repo tengamos todo junto lo del curso, luego tengamos un repositorio separado por cada proyecto, para desplegar en Vercel

5. Como yo tengo el projecto en el repositorio nextjs donde voy a tener todo junto y el repositorio nuevo exclusivo para los despliegues de vercel en [next-first-project](https://github.com/eugenia1984/next-first-project) voy a hacer el commit para que desde `nextjs` se suba al nuevo repo.



---

## <img width="20" height="20" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/20/external-docker-a-set-of-coupled-software-as-a-service-logo-color-tal-revivo.png" alt="docker icon"/> 4 - Generar una imagen de Docker

---

## <img width="20" height="20" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/20/external-docker-a-set-of-coupled-software-as-a-service-logo-color-tal-revivo.png" alt="docker icon"/> 5 - Crear la imagen de Docker siguiendo las prácticas recomendadas por Next

---

## <img width="20" height="20" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/20/external-docker-a-set-of-coupled-software-as-a-service-logo-color-tal-revivo.png" alt="docker icon"/>  6 - Correr la aplicación desde Docker Desktop

---