import Image from "next/image"

function AboutSection() {
  return (
    <section id="about">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]">
        <div className="lg:pl-20 flex justify-center">
          <div className="max-h-xs px-2.5 lg:max-w-none">
            <Image src="/dev.svg" alt="Avatar" width={500} height={500} priority className="rounded-lg my-8" />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2 text-center md:text-start">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl">Sobre o Curso</h2>
          <p className="mt-8 text-base text-muted-foreground">Nossos cursos foram meticulosamente desenhados para levar você, independente do seu nível atual de conhecimento, através de uma jornada de aprendizado em programação, desde os fundamentos da lógica de programação até as tecnologias mais avançadas utilizadas no desenvolvimento web. Com um currículo abrangente que inclui toda fundamentação teórica, habilidades técnicas (Hard Skills) que passam por HTML, CSS, JavaScript, TypeScript, UI/UX Design, Tailwind, React, Next14 e muito mais, além de habilidades não-técnicas (Soft Skills), como trabalho remoto, gestão de projetos e processos e SCRUM, você estará equipado para enfrentar e se destacar em relação à concorrência quando de frente com os desafios do desenvolvimento front-end, back-end e full-stack. Prepare-se para uma carreira transformadora com habilidades que estão em alta demanda no mercado.
          Junte-se a nós e comece sua jornada para se tornar um desenvolvedor agora mesmo. <a href="#investiment" className="text-primary">Inscreva-se</a> e dê o primeiro passo em direção a uma carreira promissora e gratificante.
          </p>         
        </div>
      </div>
    </section>
  )
}

export default AboutSection