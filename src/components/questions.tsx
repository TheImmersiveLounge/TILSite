import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div id="FAQ" className="mx-6 mt--10 flex flex-col items-center justify-center text-xl md:mx-40">
      <h1 className="text-3em">
        About Us
      </h1>
      <Accordion type="single" collapsible className="w-full text-left">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is immersive music to us?</AccordionTrigger>
          <AccordionContent className="text-lg">
            We define immersive music as music that integrates spatial audio technology with the goal of creating a listening experience for immersive formats. Immersive music expands from the common stereo listening playback format (of left and right channels) to a 360-degree sound field that allows for the use of both the horizontal and vertical planes. Whether it is binaural (for YouTube) or Dolby Atmos on streaming platforms, we make music that translates across various playback devices. However, all you need is a pair of headphones!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            What is our motivation?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            The foundation of our project is built on research around workflows for immersive music production. A preliminary analysis of the research has shown 1. there is a knowledge gap through lack of awareness as well as inaccessibility to information, 2. there are inconsitencies in monitoring and translation practices, and 3. there are financial limitations.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What are our goals?</AccordionTrigger>
          <AccordionContent className="text-lg">
            To inform both academia and the music industry. To inform artists. To document our processes and create high-quality immersive music productions. 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>What makes us different?</AccordionTrigger>
          <AccordionContent className="text-lg">
          We are guiding artists throughout the process of producing their music for immersive formats starting from composition, arranging and pre-producing, to recording, to mixing, to mastering. We provide knowldge so artists can be inspired by the technology. One of our goals is to think about our productions spatially from the beginning, rather than leaving these creative decisions for the mixing stage.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Who are we?</AccordionTrigger>
          <AccordionContent className="text-lg">
            We are a group of creatives, engineers, producers, and researchers - find out more below...
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
