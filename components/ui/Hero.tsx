import Link from "next/link";
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
export default function Hero() {
  return (
    <section className="w-full py-8 md:py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">
                Elevate Your Online Presence with Acme Web Solutions
              </h1>
              <p className="max-w-[600px] text-secondary-foreground text-base md:text-xl">
                Unlock the full potential of your website with our comprehensive
                web development, hosting, and maintenance solutions.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                href="/pages/Pricingpage"
                className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-4 sm:px-6 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                prefetch={false}
              >
                Get Started
              </Link>
              <Link
                href="/pages/About"
                className="inline-flex h-10 text-black items-center justify-center rounded-md border border-input bg-background px-4 sm:px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
          <img
            src="/placeholder.svg"
            alt="Hero"
            className="mx-auto aspect-square rounded-xl object-cover w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  );
}
