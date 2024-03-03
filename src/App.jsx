import  RoutesApp  from "./routes"
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {

  window.onload = function () {
    var consentCookie =
      document.cookie.indexOf("cookieConsent=accepted") !== -1;
    var cookieBanner = document.getElementById("cookieBanner");

    if (!consentCookie && cookieBanner) {
      cookieBanner.style.display = "block";
    }
  };

  function acceptCookies() {
    document.cookie =
      "cookieConsent=accepted; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    var cookieBanner = document.getElementById("cookieBanner");
    if (cookieBanner) {
      cookieBanner.style.display = "none";
    }
  }
  

  return (
    <>
    <Header/>

    <RoutesApp/>

    <Footer/>
    
    <div id="cookieBanner">
      Este site usa cookies para garantir que você obtenha a melhor experiência. 
      <button type="submit" onClick={acceptCookies}>
        Aceitar
      </button>
    </div>
    </>
  )
}

export default App
