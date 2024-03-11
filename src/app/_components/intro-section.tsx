import { cn } from "@/lib/utils"
import { ModeToggle } from "./mode-toggle"
import { buttonVariants } from "@/components/ui/button"

export function IntroSection(){
  return (    
    <section id="intro" className="space-y-6 py-8 md:py-12 lg:py-32 relative">
    <div className="flex flex-1 justify-end">
      <ModeToggle/>
    </div>
    <svg viewBox="0 0 1024 1024" className="absolute left-1/3 top-full md:left-1/2 md:top-1/2 -z-10 h-[16rem] w-[16rem] md:h-[54rem] md:w-[54rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
      <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
      <defs>
        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
          <stop stopColor="#7775D6" />
          <stop offset="1" stopColor="#E935C1" />
        </radialGradient>
      </defs>
    </svg>
    <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4">
      <span className="rounded-2xl bg-muted px-4 py-1.5 text-smfont-medium flex items-center mb-8">🗓️ 1ª turma dia 01 de Julho de 2024
      </span>
      <h1 className="font-heading text-4xl md:text-6xl ls:text-7xl">Inicie agora a sua carreira
        <br />
        como <span className="text-primary">
          Dev
        </span>
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Do zero ao avançado, torne-se um desenvolvedor web full-stack altamente qualificado e pronto para o mercado de trabalho. <span className="text-primary">
          Mesmo sem nunca ter escrito uma única linha de código.
        </span>
      </p>
      <div className="space-x-4 flex flex-col md:flex-row gap-y-4">
        <a href="#investment" className={cn(buttonVariants({ variant: 'outline', size: 'lg', className: "bg-primary border-primary px-4 text-md text-white rounded shadow-lg shadow-primary font-bold py-8" }))}>Impulsionar a minha carreira</a>
        <a href="#feature" className={cn(buttonVariants({ variant: 'outline', size: 'lg', className: 'py-8' }))}>Saiba mais sobre o curso</a>
        <button></button>
      </div>
    </div>
  </section>
  )
}

export default IntroSection