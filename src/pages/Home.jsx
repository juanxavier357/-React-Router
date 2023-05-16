import './Home.scss'

function Home() {

  return (
    <>
      <h1>Home</h1>
      <div className="content">
        <div className="content__image">
          <img src="/pestanas.jpg" alt="Me gustan tus pestanas" width="300px" />
          <p>
            <em>
            En resumen, React Router es una biblioteca<br />
            esencial para gestionar la navegación y las<br />
            rutas en tu página web principal construida<br />
            con React. Proporciona una forma fácil y<br />
            declarativa de definir rutas, enlazar<br />
            componentes y ofrecer una experiencia<br />
            de navegación fluida en tu aplicación.</em>
          </p>
        </div>
        <div className="content__description">
          <p>
            React Router es una biblioteca de enrutamiento diseñada específicamente para aplicaciones web construidas con React.<br />
            Permite crear rutas y manejar la navegación entre diferentes componentes dentro de una aplicación de una manera
            declarativa y fácil de usar.<br />
            En una página web principal, React Router te permite definir rutas para diferentes secciones o vistas de tu sitio.<br />
            Puedes establecer una ruta para la página de inicio, así como para otras secciones como Acerca de nosotros,
            Contacto o cualquier otra página que desees incluir.<br />
            Con React Router, puedes crear enlaces y botones que direccionen al usuario a diferentes rutas dentro de tu aplicación,
            lo que permite una experiencia de navegación fluida y sin recargas de página completas.<br />
            Esto significa que los cambios de contenido ocurren de manera instantánea, sin que el usuario tenga que esperar a que
            se cargue una nueva página.<br />
            Además, React Router ofrece características avanzadas como la posibilidad de manejar parámetros dinámicos en las rutas,
            lo que te permite crear rutas más flexibles y dinámicas.<br />
            Por ejemplo, puedes tener una ruta que muestre los detalles de un producto específico pasando su ID como parámetro en la URL.
          </p>
        </div>
      </div>
    </>
  )
}

export default Home