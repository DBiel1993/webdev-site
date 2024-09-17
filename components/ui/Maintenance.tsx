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
export default function Maintenance() {
  return (
    <section
      id="portfolio"
      className="w-full py-8 md:py-16 lg:py-24 bg-background"
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="space-y-2 text-center">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Maintenance
          </div>
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Ongoing Website Maintenance and Support
          </h2>
          <p className="max-w-[900px] text-muted-foreground mx-auto text-base md:text-lg">
            Our team of experts provides ongoing maintenance and support to
            ensure your website is always up-to-date, secure, and performing at
            its best.
          </p>
        </div>
        <div className="grid gap-6 py-12 sm:grid-cols-2 md:grid-cols-3">
          <Card className="overflow-hidden rounded-xl">
            <CardHeader>
              <img
                src="/updates.jpg"
                width="550"
                height="310"
                alt="Maintenance Service"
                className="aspect-video object-cover"
              />
            </CardHeader>
            <CardContent className="space-y-2">
              <h3 className="text-xl font-bold">Website Updates</h3>
              <p className="text-muted-foreground">
                We'll keep your website up-to-date with the latest technologies,
                security patches, and content updates.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/pages/Updates"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                prefetch={false}
              >
                Learn More
              </Link>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden rounded-xl">
            <CardHeader>
              <img
                src="/performance.jpg"
                width="550"
                height="310"
                alt="Maintenance Service"
                className="aspect-video object-cover"
              />
            </CardHeader>
            <CardContent className="space-y-2">
              <h3 className="text-xl font-bold">Performance Optimization</h3>
              <p className="text-muted-foreground">
                We'll optimize your website's performance to ensure fast loading
                times and a seamless user experience.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/pages/Performance"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                prefetch={false}
              >
                Learn More
              </Link>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden rounded-xl">
            <CardHeader>
              <img
                src="/analytics.jpg"
                width="550"
                height="310"
                alt="Maintenance Service"
                className="aspect-video object-cover"
              />
            </CardHeader>
            <CardContent className="space-y-2">
              <h3 className="text-xl font-bold">Analytics and Reporting</h3>
              <p className="text-muted-foreground">
                We'll provide detailed analytics and reporting to help you
                understand your website's performance.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/pages/Report"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                prefetch={false}
              >
                Learn More
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
