const AboutUs = () => {
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
            <h2 className="h3-bold md:h2-bold text-left w-full text-violet-500">
                About Us 
            </h2>

            <p className="text-wrap text-left w-full text-violet-500 mb-3">
              ReVerb was founded by Albert Fortuna's passion for teaching was the main driver in starting the institute.
              He enjoys teaching students, and his passion, drive, and motivation have led him to teach more than 5,000 students.....
            </p>


            <h2 className="h3-bold md:h2-bold text-left w-full text-violet-500 mb-3">
                Words From Our Instructor
            </h2>

            <div className="max-w-md flex flex-row justify-items-center mb-3">
                <img 
                  src='/assets/images/reverbfounder.jpeg'
                  alt="founder"
                  className="rounded-lg"
                  /> 
            </div>
            <p className="text-left text-lg w-full text-violet-500 mb-3">
              Albert Fortuna
            </p>

            <p className="text-wrap text-left w-full text-violet-500 mb-3">
              ¡Hola a todos! Soy Albert Fortuna, profesor de inglés con más de 16 años de experiencia, durante los cuales he tenido el honor de enseñar a más de 5,000 alumnos, empoderándolos a alcanzar su potencial y lograr sus metas con éxito.
            </p>

            <p className="text-wrap text-left w-full text-violet-500 mb-3">
              Con una profunda pasión por la literatura, la gramática y la escritura, he creado esta página para ofrecer clases de inglés y conectar con estudiantes y educadores a través de mis clases dinámicas, energéticas, y sobre todo, entretenidas.
            </p>

            <p className="text-wrap text-left w-full text-violet-500 mb-3">
             Estoy deseando ayudarles a alcanzar sus objetivos y mejorar sus habilidades de inglés.
            </p>


        </div>
      </div>
    </div>
  )
}

export default AboutUs