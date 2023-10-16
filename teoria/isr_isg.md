# Incremental Static Regeneration (ISR) e Incremental Static Generation (ISG)

- **Incremental Side Regeneration** cierta página se actualiza cada cierto tiempo, una vez que pasa ese tiempo volve a regenerar la web y guardalo en el file system. Nextjs revalida la página, el primer usuario regenera el contenido y el resto de los usuarios que vienen van a ver el que ya se generó. El cambio se va a hacer recién cuando pase ese tiempo.

Un ejemplo es Udemy, se carga casi todo el curso, pero siempre se va actualizando el precio.


---

Esta es una sección pequeña pero nos ayudará a comprender sobre dos formas de expandir nuestra generación estática con una configuración muy simple.

El objetivo es que nuestro servidor de Next pueda almacenar respuestas para su futuro uso y a la vez que pueda revalidar el contenido previamente generado.

---