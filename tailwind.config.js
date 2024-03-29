const withMT = require("@material-tailwind/react/utils/withMT");

 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
    fontFamily: {
      'aref': ['Aref Ruqaa Ink', 'sans-serif']
    },
    screens: {
      'mobile': '320px',
      // => @media (min-width: 640px) { ... }
    },
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
      "aboutUsVideo": "url('CAMINHO')",
      "footer": "url('https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/footerBGWEB.webp?alt=media&token=af530061-d918-49ce-a60b-f91b80aaa8b9')"
    }
  },
  plugins: [
    
  ],
});