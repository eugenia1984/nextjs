# Incremental Static Regeneration (ISR) e Incremental Static Generation (ISG)

- **Incremental Side Regeneration** cierta página se actualiza cada cierto tiempo, una vez que pasa ese tiempo volve a regenerar la web y guardalo en el file system. Nextjs revalida la página, el primer usuario regenera el contenido y el resto de los usuarios que vienen van a ver el que ya se generó. El cambio se va a hacer recién cuando pase ese tiempo.

Un ejemplo es Udemy, se carga casi todo el curso, pero siempre se va actualizando el precio.


---

Esta es una sección pequeña pero nos ayudará a comprender sobre dos formas de expandir nuestra generación estática con una configuración muy simple.

El objetivo es que nuestro servidor de Next pueda almacenar respuestas para su futuro uso y a la vez que pueda revalidar el contenido previamente generado.

---

**StaticPath** siempre necesita del **StaticPorps**, pero el **StaticPorps** no siempre necesita el **StaticPath**.

---

[Documentación: https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration)

En el `return` de `getStaticProps` hay que agregar la propiedades `revalidate`, el valor está en **Segundos**

```
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }

  return {
    props: {
      pokemon: await getPokemonInfo(id)
    },
    revalidate: 86400, // 60 * 60 * 24 -> se valida cada 24 horas
  }
}
```

---

## ISG - Almacenar en File System

Primero hacemos el **build time**, para ya tener las páginas pre cargaas en el servidor.

Tengo la necesidad de agregar una nueva página, luego del build time, en producción, para crearlo en File System.

-> Necesitamos cambiar la parte del `fallback`, al tenerla en `false` siempre da error 4040 si la web aun no existe. Hay que cambiar : `fallback: 'blocking'`

---
