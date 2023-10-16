# <img width="38" height="38" src="https://img.icons8.com/color/38/pokemon.png" alt="pokemon"/> NEXTjs Pokemon App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), from the course **NEXTjs** of Fernando Herrera at Udemy's learning platform.

Small application for managing ISR and SSG.

---

## 📦 Demo 

---

## 📢 Features


🔜 A Pokemon's web application using the API: [https://pokeapi.co/](https://pokeapi.co/) to take teh information display.

✔️ A Home Page with the 151 Pokemons, each Pokemon it's inside a card, and once it`s clicked, it's redirect to that Pokemon detail page.  

✔️ A Pokemons Detail Page to show more information about the Pokemon. And with a **favorite** button, to add or delete the Pokemon from favorites

✔️ A Favorites Page with all the favorites Pokemons.

- Home page:

![image](https://github.com/eugenia1984/next-pokemon/assets/72580574/c9d25353-ddff-4b84-8c63-0306a6e4c1b9)

- Favorites Page:

![image](https://github.com/eugenia1984/next-pokemon/assets/72580574/e75b58eb-2d47-43ed-a2e9-2d0230dea4f4)

- Pokemon information by name

![image](https://github.com/eugenia1984/next-pokemon/assets/72580574/f264f7b7-f626-4f91-b871-f73153eba0a7)


---

## 🛠️ Technologies 

- <img width="28" height="28" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/28/external-typescript-an-open-source-programming-language-developed-and-maintained-by-microsoft-logo-color-tal-revivo.png" alt="typescript icon"/> [**TypeScript**](https://www.typescriptlang.org/)

- <img width="28" height="28" src="https://img.icons8.com/office/28/react.png" alt="react icon"/> [**React**](https://react.dev/)

- <img width="28" height="28" src="https://img.icons8.com/color/28/nextjs.png" alt="nextjs icon"/> [**Nextjs**](https://nextjs.org/)

- [**NextUI**](https://nextui.org/)

- [**https://pokeapi.co/**](https://pokeapi.co/)

- [**Axios**](https://axios-http.com/)

- [**Canvas Confetti**](https://www.npmjs.com/package/canvas-confetti)

## Tools

- [**quicktype.io**](https://quicktype.io/typescript), instantly generate TypeScript interfaces from JSON.

---

## Project structure

```
> .next
> api
   index.ts
   pokeApi.ts
> components
   > layouts
      index.ts
      Layout.tsx
   > pokemon
      FavoriteCardPokemon.tsx
      FavoritesPokemons.tsx
      index.ts
      PokemonCard.tsx
      PokemonCardAbilities.tsx
      PokemonCardFavorite.tsx
      PokemonCardTypes.tsx
      PokemonTable.tsx
   > ui
      FooterApp.tsx
      index.ts
      Navbar.tsx
      NoFavorites.tsx
> interfaces
     index.ts
     pokemon-by-name.ts
     pokemon-full.ts
     pokemon-list.ts
   > node_modules
> pages
   > favorites
      index.tsx
   > name
      [name].tsx   
   > pokemon
      [id].tsx
   _ app.tsx
   _document.tsx
   index.tsx
> public
    favicon.ico
> styles
    globals.css
> theme
    darktheme.ts
    index.ts
> utils
    getPokemonInfo.ts
    index.ts
    localFavorites.ts
.eslintrc.json
.gitignore
next-env.d.ts
next.config.js
pckage.json
README.md
tsconfig.json
yarn.lock
```

---

##  <img width="30" height="30" src="https://img.icons8.com/plasticine/30/apple-notes--v1.png" alt="apple notes"/> Notes

I appreciate your interest in this Project ⌨️ with ❤️ by [María Eugenia Costa](https://github.com/eugenia1984) 😊 and follow me at [LinkedIn](http://www.linkedin.com/in/maríaeugeniacosta)

---
---

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

---

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---
