# <img width="40" height="40" src="https://img.icons8.com/cute-clipart/40/pokemon.png" alt="pokemon"/>  Pokemon Static - Continuación

En esta sección trabajaremos con la **hidratación de nuestro contenido con código de React**.

También aprenderemos a utilizar librerías de terceros aunque no fueran escritas en TypeScript.

---

## <img width="30" height="30" src="https://img.icons8.com/emoji/30/memo-emoji.png" alt="memo emoji"/> ¿Cuando generamos las cosas del lado del Back End y cuando del lado del servidor?

- NEXTjs siempre se asegura que la aplicación que se genera en el FrontEnd sea siempre la misma que la que se esta renderizando del lado del BackEnd. Si no es igual, hay errores, podemos tener errores **500**, ahi sabemos que es del lado dle Servidor, ahi vemos la consola a ver que error nos da.

Por ejemplo si en el Front usamos el **localStorage** en el Back tenemos Nodejs y ahi no contamos con el localStorage, es nativo de JavaScript, pero no de Nodejs. Toda la información del objeto **window** solo está en JavaScript, no está en Nodejs.

---

## <img width="30" height="30" src="https://img.icons8.com/emoji/30/memo-emoji.png" alt="memo emoji"/> Guardar en LocalStorage

En la página de cada Pokemon quiero que al hacer click en el botón **Guardar en favoritos** puede ir agregando el Pokemon en la lista de favoritos para luego verlo en la pagina `/favorites`

Como puedo tener más de un favorito, la idea es guardarlo en un array.

Hay que tener en cuenta que cuando se renderiza del lado del servidor **no** tenemos ni **localStorage** ni **window**, si no se considera hay errores, posibles soluciones:

```TypeScript
/**
 * Retorna true si existe el id del Pokemon en favoritos.
 * Retorna false si no existe el id dle Pokemon en favoritos
 */
const existInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') return false // porque window no esta en Nodejs

  const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]')

  return favorites.includes(id)
}
```

---

## <img width="30" height="30" src="https://img.icons8.com/emoji/30/memo-emoji.png" alt="memo emoji"/>  Librerías externas - Canvas Confetti

- Instalamos Canvas - Confetti : `yarn add canvas-confetti`
  
- Como estamos usando TypeScript, debemos agregar el tipado: `$ yarn add -D @types/canvas-confetti`
  
---


## <img width="30" height="30" src="https://img.icons8.com/emoji/30/memo-emoji.png" alt="memo emoji"/>   Tarea sobre contenido estático

1. Crear una página que se llame ```PokemonByNamePage``` en este path:
```
pages/name/[name].tsx
```

2. Deben de generar de manera estática (getStaticProps y getStaticPaths) 151 páginas que leeran el parámetro ```name``` por el url.

3. El parámetro name, lo usarán para traer la información de ese pokémon por NOMBRE (no por ID)

4. Realizar el build de producción ```yarn build``` y confirmar que tengan las nuevas 151 páginas dentro del servidor/pages/name


### Tips:
* Obtener información del pokémon por nombre:
https://pokeapi.co/api/v2/pokemon/ditto

* Traer los 151 pokémons
https://pokeapi.co/api/v2/pokemon?limit=151

* El componente de PokemonByNamePage es idéntico al de pokémon por id ```[id].tsx```, es decir recibe el mismo pokémon como argumento.

---

##  <img width="30" height="30" src="https://img.icons8.com/emoji/30/memo-emoji.png" alt="memo emoji"/> Open GRaph

[Link](https://ahrefs.com/blog/open-graph-meta-tags/)

```html
<meta property="og:title" content="How to Become an SEO Expert (8 Steps)" />
<meta property="og:description" content="Get from SEO newbie to SEO pro in 8 simple steps." />
<meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png" />
```

### Which Open Graph tags should you use?

Facebook lists 17 OG tags in their official documentation, plus dozens of object types. We’re not going to discuss all of these. Only four are required for Facebook to understand the basics of your page, and there are a couple of others that sometimes help.

Let’s go through these.

##  og:title

The title of your page.

Syntax
```html
<meta property="og:title" content="Open Graph Meta Tags: Everything You Need to Know" />
```

Best practices:

- Add it to all “shareable” pages.

- Focus on accuracy, value, and clickability.

- Keep it short to prevent overflow. There’s no official guidance on this, but 40 characters for mobile and 60 for desktop is roughly the sweet spot.
Use the raw title. Don’t include branding (e.g., your site name).

##  og:url

The URL of the content.

Syntax:
```html
<meta property="og:url" content="https://ahrefs.com/blog/open-graph-meta-tags/" />
```

Best practices

- Use the canonical URL. It helps consolidate all connected data, such as likes, across all the duplicate URLs posted.


## og:image

The URL of an image for the social snippet. 

Note that this is perhaps the most essential Open Graph tag because it occupies the most social feed real estate.

Syntax:

```html
<meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2020/01/fb-open-graph-1.jpg" />
```

Best practices:

- Use custom images for “shareable” pages (e.g., homepage, articles, etc.)

- Use your logo or any other branded image for the rest of your pages.

- Use images with a 1.91:1 ratio and minimum recommended dimensions of 1200x630 for optimal clarity across all devices.

## og:type

The type of object you’re sharing. (e.g., article, website, etc.)

Syntax:

```html
<meta property="og:type" content="article" />
```

Best practices:

- Use article for articles and website for the rest of your pages.

- Describe object types further where appropriate (optional).


## og:description

A brief description of the content. 

Syntax:

```html
<meta property="og:description" content="Learn about 13 features that set Ahrefs apart from the competition." />
```

Best practices:

- Complement the title to make the snippet as appealing and click-worthy as possible.

- Copy your meta description here if it makes sense. 

- Keep it short and sweet. Facebook recommends 2-4 sentences, but that often truncates.

## og:locale

Defines the content language.

Syntax: 

```html
<meta property="og:locale" content="en_GB" />
```

Best practices: 

- Use only for content not written in American English (en_US). Facebook assumes content without this tag is written in this language.

---

---
