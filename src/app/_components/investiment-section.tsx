import { Check } from "lucide-react"
import HeadingSections from "./heading-sections"
import PreEnrollment from "./pre-enrollment"
import Enrollment from "./enrollment"

function InvestimentSection() {
  return (
    <section id="investiment" className='container space-y-6 py-8 md:py-12 lg:py-24'>
      <HeadingSections title="Investimento" description="Faça o melhor investimento da sua carreira. Veja os benefícios e vantagens de ser um aluno da primeira turma do curso."/>
    <div className="grid w-full border rounded-lg items-start gap-10 p-10 md:grid-cols-[1fr_200px]">
    <div className='grid gap-6'>
          <h3 className='text-xl font-bold sm:text-2xl'>O que está incluído</h3>
          <ul className='grid gap-3 text-sm text-muted-foreground sm:grid-cols-2'>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Aulas gravadas para assistir
              quando e onde quiser
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Acesso vitalício aos conteúdos
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Direito a lançamentos futuros 
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Direito a atualização dos conteúdos
            </li>            
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Workshops e Webinars exclusivos
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Acesso ao código fonte do
              projeto
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Servidor exclusivo no discord 
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Contato direto com o(s) intrutor(es)
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-4 text-center'>
          <div className='space-y-2'>
            <h4 className='font-bold'>
              12x
              <br />
              R$<span className='text-6xl font-bold text-primary'>97,61</span>
            </h4>
            <h4 className='font-bold text-xl'>ou R$ 978,00 à vista</h4>
          </div>
          <PreEnrollment />
          <Enrollment />
        </div>
    </div>
    </section>
  )
}

export default InvestimentSection