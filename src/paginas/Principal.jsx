
const Principal = () => {

  return (
    <>
      <h1 className="text-3xl text-blue-500 font-bold text-center mb-5">El mejor evento del año</h1>

      <div className="md:grid md:grid-cols-2 text-center max-w-lg mx-auto mb-16">
        <div className="bg-blue-300 mr-0 p-3 border-4 border-red-400">
          <h2 className="uppercase font-bold mb-2">Música Rock</h2>
          <p>Disfruta de la música rock con un ambiente único realizado para los amantes del rock!</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-speaker mt-2 mx-auto" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fd0061" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="5" y="3" width="14" height="18" rx="2" />
            <circle cx="12" cy="14" r="3" />
            <line x1="12" y1="7" x2="12" y2="7.01" />
          </svg>
        </div>
        <div className="bg-red-300 mr-0 p-3 border-4 border-blue-400">
          <h2 className="uppercase font-bold mb-2">Eventos Únicos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptas itaque dolorum, blanditiis minus illo libero quo perspiciatis ipsum, magnam debitis!</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ticket mt-2 mx-auto" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00abfb" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="15" y1="5" x2="15" y2="7" />
            <line x1="15" y1="11" x2="15" y2="13" />
            <line x1="15" y1="17" x2="15" y2="19" />
            <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
          </svg>
        </div>
        <div className="bg-red-300 mr-0 p-3 border-4 border-blue-400">
          <h2 className="uppercase font-bold mb-2">Conoce a tus Artistas Favoritos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptas itaque dolorum, blanditiis minus illo libero quo perspiciatis ipsum, magnam debitis!</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hand-rock mt-2 mx-auto" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00abfb" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M11 11.5v-1a1.5 1.5 0 0 1 3 0v1.5" />
            <path d="M17 12v-6.5a1.5 1.5 0 0 1 3 0v10.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
            <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />
            <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />
          </svg>
        </div>
        <div className="bg-blue-300 mr-0 p-3 border-4 border-red-400">
          <h2 className="uppercase font-bold mb-2">Regalos Exclusivos</h2>
          <p>Disfruta de la música rock con un ambiente único realizado para los amantes del rock!</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gift mt-2 mx-auto" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fd0061" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="3" y="8" width="18" height="4" rx="1" />
            <line x1="12" y1="8" x2="12" y2="21" />
            <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
            <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
          </svg>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 gap-7 items-center mb-20 mx-auto max-w-5xl">
        <img src="src/img/evento.png" alt="Evento" />
        
        <div>
            <h1 className="mb-6 font-bold text-2xl">Festival de Música 2023</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae facilis autem enim aliquid exercitationem distinctio ipsum eligendi deserunt, iusto impedit consectetur quod accusamus non. Consequuntur non dolores autem minima quo.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et hic optio iusto sapiente harum at quos deleniti aliquam porro a voluptas alias, adipisci ab sint, aspernatur quaerat sequi nostrum omnis.</p>
        </div>
    </div>
    </>
  )
}

export default Principal;