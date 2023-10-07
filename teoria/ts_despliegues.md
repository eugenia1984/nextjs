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

- Hoy en día, hay que saber como crear la imagen y dockerizar la aplicación.

- La imagen tiene configurado el servidor, preparado Nodejs, tiene todo preparado para ejecutarse. Y puede tener otros contenedors y todos trabajar como una red.

1. Se crea en la raiz del proyecto un archivo **.dockerignore**, es similar al .gitignore., para poner que archivos no quiero que sean parte de la imagen que voy a terminar tomando. Y adentro:

```
Dockerfile
.dockerignore
node_modules
npm-debug.log
README.md 
.next
```

2. Me aseguro de tener corriendo DockerDesktop

3. Se crea el archivo **Dockerfile**, que son la serie de comandos que se ejecutan para genrar la imagen

- **simple.Dockerfile**, todos los comandos se ejecutan en secuencia:

```
FROM node:16-alpine 
# Linux con Nodejs
#aca va la version de Nodejs alpine es una version de Linux simplificada

# Creo el directorio app
RUN mkdir -p /app

# Voy a trabajar en el directorio app
WORKDIR /app

# Copio de mi proyecto el package.json 
# y lo pego en la carpeta app, el working directory
COPY package.json /app

# ejecutamos el yarn install para tenr los modulos en el lado de Linux
RUN yarn install

# Copio todo y lo pego en la carpeta app, menos lo del .dockerignore
COPY . /app

# Ejecuto el comando del build
RUN yarn build

# USER nextjs
# Para no trabajar con el usuario root, que tiene mayores accesos

# Expongo el puerto 3000, donde se esta ejecutando
EXPOSE 3000

# Ejecuto la aplicacion, el yarn start que ejecuta el: next start
CMD [ "yarn", "start" ]

# Super pesada +1GB
```

4. En comando: `docker build -t nextjs-initial`, `-t` es para crear el tag el lo nombro `nextjs-initial` y así se deja creada la imagen

5. Se va a DockerDesktop, en imagenes y se va a ver la imagen creada, se ve que es super pesada, más de 1GB, no es la version optima, pero es la versión simplificada. Hay una versión optimizada que pesa menos.


---

## Levantar la imagen de Docker

1. Tener el Docker corriendo

2. Estando en elproyecto en consola: 

`docker run --name=next-app -p 3000:3000 nextjs-initial`

-> Le asigno un nombre

-> Le indico el puerto, hago un puente entre el puerto 3000 de mi computadora y el puerto 3000 del contenedor

-> El nombre de la imagen a correr

Y por consola me dice que esta corrienod en el puerto 3000, `http://localhost:3000`


- Si quiero hacer mas facil al levantar directamente con localhost en el navegador, lo tengo que correr en el puerto 80:

`docker run --name=next-app -p 80:3000 nextjs-initial`

---

## <img width="20" height="20" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/20/external-docker-a-set-of-coupled-software-as-a-service-logo-color-tal-revivo.png" alt="docker icon"/> 5 - Crear la imagen de Docker siguiendo las prácticas recomendadas por Next

- recomendada.Dockerfile, crea un ambiente de Nodejs para crear la aplicacion y luego lo pasa al runner

```
# Fuente: https://github.com/vercel/next.js/blob/canary/examples/with-docker/README.md

# Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size 
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node", "server.js"]

# entre 50 a 150 MB
```

En consola:

`docker build -t nextjs-initial .`

`docker run --name=next-app -p 3000:3000 nextjs-initial`

Si da error de que no encuentra el Standalone(hace que la imagen sea mas pequeña) hay que ir a **next.config.js** y agregamos:

```
experimental: {
  outputStandaline: true
}
```

Y en el **package.json** a la hora de levantar la aplicación debemos configurar el puerto, en el **Script**: `"start": "next start -p ${PORT:=3000}",` de este modo configuro que sea el puerto 3000 en una variable de entorno

- En el DockerDesktop se ve la nueva imagen, de unos 110megas. 

---

## <img width="20" height="20" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/20/external-docker-a-set-of-coupled-software-as-a-service-logo-color-tal-revivo.png" alt="docker icon"/>  6 - Correr la aplicación desde Docker Desktop


1. Vemos la imagen

2. Le damos a **RUN**

3. Container Name: `next-initial`

4. Ports localhost: `3000` ò `3001`

Si vemos que ya esta voy al navegador y abro el `localhost:3000` o el numero de puerto que le indicamos

---