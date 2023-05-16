import './About.scss'

function About() {

  return (
    <>
      <h1>About</h1>
      <h2>7 Pasos para crear una página <strong>About</strong> en tu sitio web</h2>
      <div className="content">
        <div className="content__image">
          <img src="/pestanas.jpg" alt="Me gustan tus pestanas" width="300px" />
          <p>
            <em>
              Recuerda que este es solo un modelo básico<br /> 
              para una página de <strong>About</strong>.<br />
              Puedes personalizarlo y agregar más secciones
              según tus necesidades y la naturaleza de tu empresa.<br />
              La idea es proporcionar información relevante sobre 
              tu proyecto o negocio para que los visitantes del 
              sitio puedan conocerte mejor.</em>
          </p>
        </div>
        <div className="content__description">
          <p>
            <ol>
              <li>Crea un componente funcional llamado <strong>About</strong> que represente la página de Acerca de nosotros.</li>
              <li>Dentro del componente <strong>About</strong>, puedes incluir una sección de encabezado con información relevante sobre tu empresa o proyecto. Puedes agregar un título, una descripción y tal vez un logotipo.</li>
              <li>Luego, puedes agregar secciones adicionales para proporcionar más detalles sobre tu empresa. Por ejemplo, podrías incluir una sección de <em>Misión y visión</em> donde expliques los objetivos y valores de tu empresa.</li>
              <li>También puedes agregar una sección para resaltar los miembros clave de tu equipo. Puedes mostrar sus nombres, cargos y una breve descripción de sus roles y experiencia.</li>
              <li>Otra sección útil puede ser la de <em>Historia</em> donde cuentes la evolución y el crecimiento de tu empresa a lo largo del tiempo. Puedes resumir los hitos importantes y los logros alcanzados.</li>
              <li>No te olvides de incluir una sección de contacto al final de la página. Puedes proporcionar información de contacto, como dirección de correo electrónico o número de teléfono, para que los visitantes puedan comunicarse contigo si tienen preguntas o consultas.</li>
              <li>Finalmente, utiliza estilos CSS para darle un diseño atractivo a tu página. Puedes aplicar colores, fuentes y diseños que sean coherentes con el estilo visual de tu sitio web principal.</li>
            </ol>
          </p>
        </div>
      </div>
    </>
  )
}

export default About