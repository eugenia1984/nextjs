# Instalaciones recomendadas - Curso de Next.js

## <img width="20" height="20" src="https://img.icons8.com/stickers/20/maintenance.png" alt="maintenance"/> Instalaciones Necesarias

✔️  [Visual Studio Code](https://code.visualstudio.com/)

✔️  [Postman](https://www.postman.com/downloads/)

✔️  [Mongo Compass](https://www.mongodb.com/try/download/compass)

✔️  [Git](https://git-scm.com/)

```
git config --global user.name "Tu nombre"
git config --global user.email "Tu correo"
```

✔️ [Node](https://nodejs.org/es/)


-> Fernando prefiere utilizar **yarn** para **dependencias locales** y **npm** con **independencias globales**, si queremos hacer como el lo instalamos, sino cuando el pone yarn usamos `npm`


opcional - para instalar Yarn, de modo global: `npm install --global yarn`. Para corroborar que se instaló: `yarn --version`

✔️ npm, para corroborar que este, luego de instalar node: `npm --version`

✔️ [Google Chrome](https://www.google.com.mx/intl/es-419/chrome/?brand=CHBD&gclid=Cj0KCQiAtrnuBRDXARIsABiN-7AAMm13Ae3KDIib46Laxfe6tzD_w4yvDdpq5XsPw1eNlOkZ_0-3x3IaAvLEEALw_wcB&gclsrc=aw.ds)

✔️ [React DevTools](https://react.dev/learn/react-developer-tools)

* [Docker Desktop](https://www.docker.com/get-started)

Verificar con : `docker --version` y `docker-compose --version`. Una vez que en ambos veo número de versión, ejecuto para descargar imagen de Mongo 5.0.0, antes tener **corriendo docker**:

`docker pull mongo:5.0.0`

-> Si no se hace ahora luego al trabajar con Mongo se va a ahcer este paso

---

## <img width="20" height="20" src="https://img.icons8.com/color/20/visual-studio-code-2019.png" alt="visual-studio-code-2019"/> Extensiones de VSCode

✔️ [Activitus Bar](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar), para que aparezca la barrita de abajo

### Configuración del Bracket Pair Colorizer 2

✔️ [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2), esta ya sin vigencia, pero igualmente Fernando Herrare la sigue usando, si queremos tener su misma configuracion de colores:

```
"bracket-pair-colorizer-2.colors": [
    "#fafafa",
    "#9F51B6",
    "#F7C244",
    "#F07850",
    "#9CDD29",
    "#0098FA"
],
```

---

### <img width="20" height="20" src="https://img.icons8.com/color/20/visual-studio-code-2019.png" alt="visual-studio-code-2019"/>  Tema que estoy usando en VSCode:

✔️ [Tokyo Night](https://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night)

✔️ [Iconos](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)


---

### <img width="20" height="20" src="https://img.icons8.com/office/20/maintenance.png" alt="maintenance"/> Instalaciones adicionales

✔️ [NextJs Snippets](https://marketplace.visualstudio.com/items?itemName=willstakayama.vscode-nextjs-snippets)

✔️ [ES7 React/Redux](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

✔️ [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)

✔️ [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag), para auto cerrar etiquetas

✔️ [Paste JSON as Code](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype), creamos interfaces de TypeScript en base a un JSON

✔️ [TypeScript importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter), ayuda con las importaciones de TypeScript

✔️ [CSS Modules](https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules), ajuda a trabajar en los componentes de react y recomeinda clases de CSS como objetos literales de javaScript

✔️ [.env](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv), para ver bonito los archivos de configuración de variables de entornos

---