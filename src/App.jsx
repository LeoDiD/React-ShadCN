import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


function App() {
  return (
    <>
      <div className="p-4">
      <Carousel bg-black-400>
  <CarouselContent>
    <CarouselItem>I love you</CarouselItem>
    <CarouselItem>Mwaaaa</CarouselItem>
    <CarouselItem>Miss u</CarouselItem>
  </CarouselContent>
  <CarouselPrevious bg-black-400 />
  <CarouselNext />
</Carousel>

      </div>
    </>
  );
}

export default App;