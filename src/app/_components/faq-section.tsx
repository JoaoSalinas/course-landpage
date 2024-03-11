import HeadingSections from "./heading-sections"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function FaqSection() {
  return (
    <section id="faq" className='bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24'>
     <HeadingSections title="FAQ"/>
     <div className='mx-auto text-center md:max-w-[58rem]'>
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='item-1'>
            <AccordionTrigger>Como comprar o curso?</AccordionTrigger>
            <AccordionContent key="item-1" className='text-left'>
              <p>
              Caso esteja no período de inscrições abertas, simplesmente clique no botão <span className="font-bold">
                Matricular</span>. Você será encaminhado diretamente para a página de finalização da compra. Após a conclusão, o acesso às aulas será enviado imediatamente para o seu e-mail.
              </p>
              <p>
              Se o período de inscrições já tiver terminado, você tem a opção de clicar no botão {' '}
                <span className='font-bold'>Lista de Espera </span>. Ao preencher o formulário, você será notificado assim que as matrículas estiverem disponíveis novamente.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>Para quem é este curso?</AccordionTrigger>
            <AccordionContent key="item-2" className='text-left'>
              <p>
                Para quem possui conhecimentos básicos de HTML, CSS e JavaScript
              </p>
              <p>Para quem quer aprender desenvolver uma aplicação do zero</p>
              <p>
                Para quem quer estar atualizado com os conhecimentos que as
                grandes empresas procuram
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>
              Por quanto tempo terei acesso ao curso?
            </AccordionTrigger>
            <AccordionContent key="item-3" className='text-left'>
              Você terá acesso vitalício a este curso e todas suas atualizações. 
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger>O Curso irá emitir certificado?</AccordionTrigger>
            <AccordionContent key="item-4" className='text-left'>
              Sim. Você terá acesso ao certificado após concluir o curso mediante entrega das atividades propostas com nota suficiente para aprovação (70%).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-5'>
            <AccordionTrigger>Como funciona o Suporte?</AccordionTrigger>
            <AccordionContent key="item-5" className='text-left'>
              Você terá acesso exclusivo a comunidade no Discord onde os alunos poderão trocar experiências e fazer seu networking e também terá contato direto comigo via Discord e WhatsApp, onde eu irei tirar suas dúvidas por lá.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-6'>
            <AccordionTrigger>
              Matriculando no curso terei acesso imediato às aulas?
            </AccordionTrigger>
            <AccordionContent key="item-6" className='text-left'>
              Sim. Todos os conteúdos são liberados imediatamente após a liberação do acesso.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-7'>
            <AccordionTrigger>Como funciona o reembolso?</AccordionTrigger>
            <AccordionContent key="item-7" className='text-left'>
              Conforme previsto legalmente, até 7 dias após a compra o aluno tem direito legal para se arrepender, cancelar sua compra e receber reembolso integral. Mas como acreditamos completamente no nosso método estendemos esse prazo para 15 dias, para que você consiga testar, ver se gosta da metodologia de ensino e se realmente faz sentido para você se manter na turma. Caso desista nesse período, assim como acontece no prazo legal de 7 dias, o reembolso é feito integralmente.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-8'>
            <AccordionTrigger>Qual o tempo de duração do curso?</AccordionTrigger>
            <AccordionContent key="item-8" className='text-left'>
              Isso depende majoritariamente do esforço e tempo que cada pessoa está disposta a investir no conteúdo e quanto tempo precisa para realizar as atividades praticas propostas, mas cada módulo tem uma proposta bem conservadora de semanas para ser realizado. Seguindo este plano, dispendendo poucos minutos por dia, em 1 ano é possível se tornar um desenvolvedor fullStack que atende todos os requisitos e além para alcançar vagas que paguem um bom salário, mas conforme mais tempo e esforço for empregado nas aulas esse tempo diminui proporcionalmente.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-9'>
            <AccordionTrigger>O que são os módulos Complementares?</AccordionTrigger>
            <AccordionContent key="item-9" className='text-left'>
              São módulos que não fazem parte diretamente da proposta do curso mas abrem outras propostas paralelas para colocar em ação enquanto estiver no meio do curso. Quando o conhecimento necessário para cada um deles for alcançado eu citarei isso em aula e deixarei isso de forma explicita no módulo em questão. Para exemplificar: com Woocommerce, por exemplo, mesmo sem ter feito nenhum dos demais módulos ja conseguimos montar um e-commerce e/ou dropshipping antes mesmo de aprender de forma mais profunda programação.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default FaqSection