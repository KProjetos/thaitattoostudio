function address() {
  return (
    <section className="w-full direction-col-center py-0 bg-second">
      <div className="w-full direction-col justify-end">
        <iframe
          className="w-full h-[375px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1946.577355905785!2d-46.571218225764845!3d-23.722832758137386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4166e758d15d%3A0x6722c47df4074cfd!2sAv.%20Sen.%20Ricardo%20Batista%2C%20165%20-%20Assun%C3%A7%C3%A3o%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009812-490!5e0!3m2!1spt-BR!2sbr!4v1700329132641!5m2!1spt-BR!2sbr"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="w-[320px] rounded-r-full p-4 text-center absolute bg-details mb-2 shadow-xl text-second">
          <p>Av. Senador Ricardo Batista, 165</p>
          <p>SBC/SP</p>
          <span className="text-[0.8em] hover:underline"><a href="https://www.google.com/maps/dir//Av.+Sen.+Ricardo+Batista,+165+-+Assun%C3%A7%C3%A3o+S%C3%A3o+Bernardo+do+Campo+-+SP+09812-490/@-23.7227611,-46.5712531,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x94ce4166e758d15d:0x6722c47df4074cfd">Clique aqui para acessar Rotas</a></span>
        </div>
      </div>
    </section>
  );
}

export default address;
