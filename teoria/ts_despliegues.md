# TypeScript - Docker y Despliegues

## <img width="20" height="20" src="https://img.icons8.com/color/20/javascript--v1.png" alt="javascript icon"/>  <img width="20" height="20" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/20/external-typescript-an-open-source-programming-language-developed-and-maintained-by-microsoft-logo-color-tal-revivo.png" alt="typescript icon"/> 1 - Convertir una aplicación de Next.js en JavaSCript a TypeScript


Fuimos viendo en todos los archivos, ademas de cambiar el .js por el .ts o el .jsx por el .tsx le fuimos agregando todos los tipados necesarios.

---

## <img width="20" height="20" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/20/external-build-agile-flaticons-lineal-color-flat-icons.png" alt="build icon"/> 2 - Generar el build de producción / distribución

[Link a la documentacion de vercel](https://nextjs.org/docs/pages/building-your-application/deploying).

- **De modo manual**: Se usa el comando: `yarn build` ó `next build `. Una vez que tnemos el **build** con `yarn start` ya nos corre en el servidor.

- Otro modo es con **Docker**, creando una imagen

---

## <img width="20" height="20" src="https://img.icons8.com/fluency/20/window.png" alt="window"/>  3 - Desplegar la aplicación en Vercel (Creado por la misma gente de Next.js)

- [**Vercel**](https://vercel.com/), los mismos desarrolladores de **Next.js**, tiene 3 planes, hay uno **free**.

1. Nos creamos la cuenta en Vercel

2. Si el repositorio esta en GitHub agregamos nuestra cuenta, hacemos lo mismo si esta en GitLab.

3. Desde `Overview` > `Add New ...` `Project`.

4. Voy a GitHub, me creo un nuevo repositorio, donde voy a tener la aplicación desplegada y con ese repositorio voy a darle el seguimiento y desplegar en Vercel. Sugiere que por mas que en este repo tengamos todo junto lo del curso, luego tengamos un repositorio separado por cada proyecto, para desplegar en Vercel

---

## <img width="20" height="20" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/20/external-docker-a-set-of-coupled-software-as-a-service-logo-color-tal-revivo.png" alt="docker icon"/> 4 - Generar una imagen de Docker

---

## <img width="20" height="20" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/20/external-docker-a-set-of-coupled-software-as-a-service-logo-color-tal-revivo.png" alt="docker icon"/> 5 - Crear la imagen de Docker siguiendo las prácticas recomendadas por Next

---

## <img width="20" height="20" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/20/external-docker-a-set-of-coupled-software-as-a-service-logo-color-tal-revivo.png" alt="docker icon"/>  6 - Correr la aplicación desde Docker Desktop

---