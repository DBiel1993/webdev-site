"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 text-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Pricing
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that's right for your business. Our flexible
              pricing options make it easy to get started and scale as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>

              <Collapsible>
                {/* Pass necessary props to CollapsibleTrigger */}
                <CollapsibleTrigger
                  onOpen={() => console.log("Opened")}
                  onClose={() => console.log("Closed")}
                  isOpen={false}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h3 className="text-lg font-medium">
                    What payment methods do you accept?
                  </h3>
                </CollapsibleTrigger>
                <CollapsibleContent isOpen={false}>
                  <p className="text-muted-foreground">
                    We accept all major credit cards, PayPal, and bank
                    transfers.
                  </p>
                </CollapsibleContent>
              </Collapsible>

              {/* Add more FAQs */}
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Still have questions?
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team is here to help. Get in touch with us and we'll be
                happy to answer any questions you have.
              </p>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
