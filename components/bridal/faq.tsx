 'use client';
import { Accordion,AccordionItem,AccordionTrigger,AccordionContent } from '@/components/ui/accordion';
import { faqs } from '@/lib/bridal';
export function FAQs(){return <Accordion type="single" collapsible className="faq-accordion">{faqs.map(([q,a],i)=><AccordionItem key={q} value={'faq-'+i}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent>{a}</AccordionContent></AccordionItem>)}</Accordion>}

