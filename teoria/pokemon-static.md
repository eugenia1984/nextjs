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

Hay que tener en cuenta que cuando se renderiza del lado del servidor **no** tenemos ni ^^localStorage** ni **window**, si no se considera hay errores, posibles soluciones:

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
