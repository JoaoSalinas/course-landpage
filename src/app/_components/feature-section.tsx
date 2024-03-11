'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import HeadingSections from './heading-sections';
import { content } from '../mocks/modules'
import StacksSection from './stacks-section';

function FeatureSection() {
  return (
    <section
      id='feature'
      className='bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24'
    >
      <HeadingSections 
        title="Tech Stack" 
        description="Venha desenvolver conosco as habilidades necessárias para ingressar no mercado como Dev ou realizar a tão sonhada migração de carreira, partindo do ponto zero, até a primeira contratação."/>
      <StacksSection/>
      <div className='mx-auto text-center md:max-w-[58rem]'>
        <p className='leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-4'>
          Iremos desenvolver em cada módulo a fundamentação teórica acompanhada de tarefas mão na massa, desafios e um projeto final para cada módulo prático.
        </p>
        <Accordion type='single' collapsible className='w-full'>   
          {content.map((item) => (            
            <AccordionItem value={`item-${item!.id}`} key={item!.id}>
              <AccordionTrigger>
                <div className='space-y-1 text-left'>
                  <h4 className='text-sm font-medium leading-none'>
                    {item!.title}
                  </h4>
                  <p className='text-sm text-muted-foreground'>
                    {item!.week}                    
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className='text-left' key={item?.title}>
                {item!.episodes.map((episode) => (
                  <>
                    <div key={episode.id} className='text-sm'>
                      {`Ep-${episode.id}: ${episode.title}`}
                    </div>
                    <Separator className='my-2' />
                  </>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FeatureSection;