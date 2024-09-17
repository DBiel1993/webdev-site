import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
export function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-8 md:py-16 lg:py-24 bg-muted">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Affordable Web Development and Hosting Plans
          </h2>
          <p className="max-w-[900px] mx-auto text-muted-foreground text-base md:text-lg">
            Choose the perfect plan to fit your business needs and budget.
          </p>
        </div>
        <div className="mx-auto max-w-5xl w-full grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          {/* Starter Tier */}
          <Card className="overflow-hidden rounded-xl border border-gray-300">
            <CardHeader className="bg-muted p-6 text-center">
              <h3 className="text-2xl font-bold">Starter</h3>
              <p className="text-4xl font-bold">$99</p>
              <p className="text-muted-foreground">per month</p>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <ul className="space-y-2 text-muted-foreground">
                <li>1 Website</li>
                <li>5 GB Storage</li>
                <li>5 GB Bandwidth</li>
                <li>Basic Support</li>
                <li>Monthly Backups</li>
              </ul>
            </CardContent>
            <CardFooter className="p-6">
              <Link
                href="/pages/Pricing1"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                prefetch={false}
              >
                Get Started
              </Link>
            </CardFooter>
          </Card>

          {/* Pro Tier (Featured Card) */}
          <Card className="overflow-hidden rounded-xl border-4 border-primary shadow-lg scale-105">
            <CardHeader className="bg-primary p-6 text-center text-white">
              <h3 className="text-3xl font-bold">Pro</h3>
              <p className="text-5xl font-bold">$199</p>
              <p className="text-white">per month</p>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <ul className="space-y-2 text-muted-foreground">
                <li>1 Website</li>
                <li>50 GB Storage</li>
                <li>Unlimited Bandwidth</li>
                <li>Priority Support</li>
                <li>Weekly Backups</li>
                <li>Basic SEO Optimization</li>
              </ul>
            </CardContent>
            <CardFooter className="p-6">
              <Link
                href="/pages/Pricing2"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                prefetch={false}
              >
                Get Started
              </Link>
            </CardFooter>
          </Card>

          {/* Enterprise Tier */}
          <Card className="overflow-hidden rounded-xl border border-gray-300">
            <CardHeader className="bg-muted p-6 text-center">
              <h3 className="text-2xl font-bold">Enterprise</h3>
              <p className="text-4xl font-bold">$499</p>
              <p className="text-muted-foreground">per month</p>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <ul className="space-y-2 text-muted-foreground">
                <li>1 Website</li>
                <li>200 GB Storage</li>
                <li>Unlimited Bandwidth</li>
                <li>Dedicated Support</li>
                <li>Daily Backups</li>
                <li>Full SEO & Marketing Support</li>
                <li>Performance Enhancements (More CPU/RAM)</li>
              </ul>
            </CardContent>
            <CardFooter className="p-6">
              <Link
                href="/pages/Pricing3"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                prefetch={false}
              >
                Get Started
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
