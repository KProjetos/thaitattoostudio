function AboutUs() {
    return (
      <section className="w-full direction-col-center bg-second">

        <div className="w-[90%] max-w-[1080px] direction-col items-center text-center lg:direction-row mt-4 gap-2">

          <img className="w-[320px]" src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/tattoEx.png?alt=media&token=dbce4782-f18b-4eea-b467-e5d48ca47e3e" alt="" />
          <img className="w-[320px]" src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/tattoEx.png?alt=media&token=dbce4782-f18b-4eea-b467-e5d48ca47e3e" alt="" />
          <img className="w-[320px]" src="https://firebasestorage.googleapis.com/v0/b/thai-tattoo-studio-42df4.appspot.com/o/tattoEx.png?alt=media&token=dbce4782-f18b-4eea-b467-e5d48ca47e3e" alt="" />

        </div>

        <div className="w-[90%] max-w-[1080px] direction-col mt-[4em]">
          <div className="titleBox ">
            <h1 className="title">Sobre nós</h1>
            <p className="subtitle">Um pouco da nossa história</p>
          </div>

          <div className="w-full direction-col items-center">
            <div className="w-full lg:w-[45%] h-[250px] direction-col-center bg-principal lg:mt-8 mt-6 rounded-lg">
              vídeo
            </div>
            <a className="title text-[1.3em] mt-8 hover:underline" href="">Assista mais sobre nossa história</a>
          </div>
        </div>
      </section>
    );
  }
  
  export default AboutUs;
  