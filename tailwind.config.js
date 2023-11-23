const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "principal": "#1E1E1E",
      "second": "#FFFF",
      "details": "#BD8210",
    },
    backgroundImage: {
      // TODO hospedar gifs e imagens em um storage e colocar o link aqui
      "desktopGif": "url('CAMINHO')",
      "mobileGif": "url('CAMINHO')",
      "makeYourOwnArtVideo": "url('CAMINHO')",
      "aboutUsVideo": "url('CAMINHO')"
    }
  },
  plugins: [],
});