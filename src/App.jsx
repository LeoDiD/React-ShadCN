import { Button } from "./components/ui/Button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function App() {
  return (
    <>
      <div className="p-4">
        {/* Change the button variant for different background colors */}
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Hello shadcn
      </Button>

        {/* Accordion with custom background color */}
        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-gray-200 hover:bg-gray-300 p-2 rounded">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="bg-white p-4 rounded shadow">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

export default App;