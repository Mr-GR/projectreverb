import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Link } from "react-router-dom"

const Info = () => {
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full text-violet-500">
            Registration Information
          </h2>

          <p className="text-wrap text-left w-full text-violet-500 mb-7">
            Our process for registration is simple and fast follow these steps.....
          </p>

          <h2 className="h3-bold md:h2-bold text-left w-full text-violet-500">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" className="mb-7" collapsible>
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
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-violet-500" >Method of payment</AccordionTrigger>
              <AccordionContent className="text-violet-500">
                We accept zelle, cash, check, and paypal.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-violet-500" >How long are classes</AccordionTrigger>
              <AccordionContent className="text-violet-500">
                Our classes are 2 hours.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <h2 className="h3-bold md:h2-bold text-left w-full text-violet-500">
            Still have questions?
          </h2>
          <Link to="/contact" className="navbar-links-info">Contact Reverb</Link>

        </div>
      </div>
    </div>
  )
}

export default Info