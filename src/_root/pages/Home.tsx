import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

const Home = () => {

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
            <h2 className="h3-bold md:h2-bold text-left w-full text-violet-500 mb-5">
                Hola Bienvenidos
            </h2>

            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4 md:basis-1/2 lg:basis-1/3">
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
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 mb-4">
                        <img 
                            src='/assets/images/horario.jpeg'
                        />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>  

             <h2 className="text-wrap h3-bold text-center w-full text-violet-500">
              Welcome to ReVerb, we cannot wait for you to start you learning journey with us.
            </h2>          
        </div>
    </div>

    </div>
  )
}
export default Home