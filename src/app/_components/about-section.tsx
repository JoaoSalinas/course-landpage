import Image from "next/image"
import Link from "next/link"

import { GitHubIcon, InstagramIcon, LinkedInIcon, YoutTubeIcon } from '@/components/social-icons'

function SocialLink({ icon: Icon, ...props }: any) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transaction group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:500" />
    </Link>
  )
}

function AboutSection() {
  return (
    <section id="about">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]">
        <div className="lg:pl-20 flex justify-center">
          <div className="max-h-xs px-2.5 lg:max-w-none">
            <Image src="/joao.png" alt="Avatar" width={500} height={500} quality="95" priority className="aspect-square rotate-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover" />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2 text-center md:text-start">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl">@Spixs</h2>
          <p className="mt-6 text-base text-muted-foreground">Na Spixs Tecnologia, nossa essência se enraíza na crença inabalável de que cada desafio tecnológico possui uma solução única, tão distinta quanto as necessidades que busca atender. Fundada em 2021, emergimos como um farol de inovação em um mar de conformismo, dedicando nossa jornada à criação de soluções tecnológicas personalizadas que transcendem as expectativas convencionais.

            Na Spixs Tecnologia, entendemos que a verdadeira transformação digital vai além da tecnologia; é sobre criar possibilidades. Cada linha de código que escrevemos é impulsionada por uma compreensão profunda de como a tecnologia pode servir como ponte para um futuro mais brilhante e eficiente. Nosso compromisso é com a entrega de valor, assegurando que cada solução que desenvolvemos seja não apenas uma resposta, mas a chave para novas oportunidades de crescimento e inovação.

            Junte-se a nós na Spixs Tecnologia, onde o futuro é moldado pela criatividade, paixão e a incessante busca pela perfeição em cada solução entregue.
          </p>
          <div className="mt-6 flex gap-6 justify-center md:justify-start">
            <SocialLink href="https://instagram.com/ojoaosalinas" icon={InstagramIcon} />
            <SocialLink href="https://github.com/joaoSalinas" icon={GitHubIcon} />
            <SocialLink href="https://youtube.com/joaosalinas" icon={YoutTubeIcon} />
            <SocialLink href="https://linkedin.com/joao-salinas" icon={LinkedInIcon} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection