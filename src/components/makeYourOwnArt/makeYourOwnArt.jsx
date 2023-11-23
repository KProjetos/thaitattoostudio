function MakeYourOwnArt() {
    return (
      <section className="w-full direction-col-center bg-second">
        <div className="w-[90%] max-w-[1080px] direction-col">
          <div className="titleBox ">
            <h1 className="title">Faça sua própria arte</h1>
            <p className="subtitle">Desenhe sua história</p>
          </div>

          <div className="w-full direction-col lg:direction-row">
            <div className="w-full lg:w-[50%] h-[250px] direction-col-center bg-principal lg:mt-8 my-6 rounded-lg">
              vídeo
            </div>
            <div className="w-full lg:w-[45%] px-2 lg:px-4">
              <p>
              No nosso estúdio, cada tatuagem é uma obra de arte exclusiva, criada sob medida para contar a sua história. Utilizamos tablets para simular a tatuagem na sua pele antes mesmo do primeiro traço, assegurando que cada detalhe esteja perfeitamente alinhado. Aqui, não seguimos tendências, nós as criamos. Sua expressão, nossa paixão.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default MakeYourOwnArt;
  