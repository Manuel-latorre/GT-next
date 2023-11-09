'use client'

import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import './Faqs.css'



export default function Faqs() {
  return (
    <div className="accordion">
      <Accordion variant="shadow">
        <AccordionItem key="1" aria-label="Accordion 1" title="¿Cómo puedo ponerme en contacto con ustedes?">
          Podes contactarnos completando el formulario desde la sección de “contacto” o simplemente tocar en el botón de chat de nuestra página para hablar con un representante en tiempo real.
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="¿Cómo elijo mi servicio ideal?">
          Podes ver la descripción de cada servicio en la sección “servicios”, si no sabes cual es el mejor para tu empresa, envianos un email desde la sección de “contacto”o presiona el botón de chat para hablar con uno de nuestros representantes.
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="¿Puedo tener un pack personalizado?">
          Si, contactanos y te asesoramos para armar un pack personalizado según tus necesidades.
        </AccordionItem>
        <AccordionItem key="4" aria-label="Accordion 4" title="¿En cuanto tiempo tendré listo mi proyecto?">
          Depende. Según el servicio elegido, la complejidad del proyecto, y las funcionalidades se va a estipular un tiempo de entrega.
        </AccordionItem>
        <AccordionItem key="5" aria-label="Accordion 5" title="¿Que métodos de pago aceptan?">
          -
        </AccordionItem>
      </Accordion>
    </div>
  );
}
