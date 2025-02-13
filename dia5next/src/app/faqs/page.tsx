import {
  Accordion as AccordionPrimitive,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/ui/Accordion/ShadcnAccordion";

const FAQS = [
  { title: "Pregunta uno", body: "información uno" },
  { title: "Pregunta udos", body: "información dos" },
  { title: "Pregunta tres", body: "información tres" },
];

export default function Page() {
  //ha una peticion a una api que devuelve las faqs y hay que renderizalas en acordeones

  return (
    <>
      <AccordionPrimitive type="single">
        {FAQS.map((faq, index) => {
          return (
            <AccordionItem value={`faq-${index}`} key={`faq-${index}`}>
              <AccordionContent>{faq.body}</AccordionContent>
              <AccordionTrigger>{faq.title}</AccordionTrigger>
            </AccordionItem>
          );
        })}
      </AccordionPrimitive>
    </>
  );
}
