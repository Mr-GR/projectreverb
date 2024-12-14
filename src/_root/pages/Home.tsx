import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const Home = () => {

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
            <h2 className="h3-bold md:h2-bold text-left w-full text-violet-500">
                Hola Bienvenidos
            </h2>

            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4 md:basis-1/2 lg:basis-1/3">
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                        <img 
                            src='/assets/images/reverbfounder.jpeg'
                        />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                        <img 
                            src='/assets/images/speakenglish.jpeg'
                        />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                        <img 
                            src='/assets/images/oportunidades.jpeg'
                        />
                    </CarouselItem>
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                        <img 
                            src='/assets/images/horario.jpeg'
                        />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <h2 className="h3-bold md:h2-bold text-left w-full text-violet-500">
                Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-violet-500">Class Time and Dates?</AccordionTrigger>
                <AccordionContent className="text-violet-500">
                    Our schedule is evenings from 6 pm-8 pm Monday, Wednesday, and Friday.
                </AccordionContent>
            </AccordionItem  >
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-violet-500" >Where are we located</AccordionTrigger>
                <AccordionContent className="text-violet-500">
                    We are located in Norcross, Georgia.
                </AccordionContent>
            </AccordionItem>
            </Accordion>

            
        </div>
    </div>

    </div>
  )
}

export default Home