/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Ae8CRwrsX6g
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import Link from "next/link";

export default function Component() {
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
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <p className="text-muted-foreground">
                    Perfect for individuals and small teams.
                  </p>
                </div>
                <div className="flex items-baseline justify-center space-x-2 my-8">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-muted-foreground">/ month</span>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />1 GB
                    storage
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />1 GB
                    bandwidth
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />1 user
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                    Basic support
                  </li>
                </ul>
                <Button className="w-full mt-8">Get Started</Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-muted-foreground">
                    For growing teams and small businesses.
                  </p>
                </div>
                <div className="flex items-baseline justify-center space-x-2 my-8">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-muted-foreground">/ month</span>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                    10 GB storage
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                    10 GB bandwidth
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />5 users
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                    Priority support
                  </li>
                </ul>
                <Button className="w-full mt-8">Get Started</Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-muted-foreground">
                    For large teams and high-growth businesses.
                  </p>
                </div>
                <div className="flex items-baseline justify-center space-x-2 my-8">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-muted-foreground">/ month</span>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                    100 GB storage
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                    100 GB bandwidth
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                    Unlimited users
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                    Dedicated support
                  </li>
                </ul>
                <Button className="w-full mt-8">Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <div className="space-y-2">
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left [&[data-state=open]>svg]:rotate-90">
                    <h3 className="text-lg font-medium">
                      What payment methods do you accept?
                    </h3>
                    <ChevronRightIcon className="h-5 w-5 transition-all" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="text-muted-foreground">
                      We accept all major credit cards, PayPal, and bank
                      transfers.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left [&[data-state=open]>svg]:rotate-90">
                    <h3 className="text-lg font-medium">
                      Can I upgrade or downgrade my plan?
                    </h3>
                    <ChevronRightIcon className="h-5 w-5 transition-all" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="text-muted-foreground">
                      Yes, you can upgrade or downgrade your plan at any time.
                      The changes will take effect on your next billing cycle.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left [&[data-state=open]>svg]:rotate-90">
                    <h3 className="text-lg font-medium">
                      Do you offer any discounts or promotions?
                    </h3>
                    <ChevronRightIcon className="h-5 w-5 transition-all" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="text-muted-foreground">
                      Yes, we offer a 20% discount for annual subscriptions and
                      occasional promotions throughout the year.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left [&[data-state=open]>svg]:rotate-90">
                    <h3 className="text-lg font-medium">
                      What is your refund policy?
                    </h3>
                    <ChevronRightIcon className="h-5 w-5 transition-all" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="text-muted-foreground">
                      We offer a 30-day money-back guarantee on all our plans.
                      If you're not satisfied, you can cancel and receive a full
                      refund.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </div>
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

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
