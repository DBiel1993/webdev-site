/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vASQwxU6CdY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Web Solutions</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Web Development
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Web Hosting
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Maintenance
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Elevate Your Online Presence with Acme Web Solutions
                </h1>
                <p className="max-w-[600px] text-secondary-foreground md:text-xl">
                  Unlock the full potential of your website with our
                  comprehensive web development, hosting, and maintenance
                  solutions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
      <section
        id="about"
        className="w-full py-12 md:py-24 lg:py-32 bg-background"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Web Development
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Custom, Responsive Websites Built for Your Business
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of experienced web developers create custom, modern
                websites that not only look great but also drive results for
                your business. We specialize in building user-friendly,
                responsive websites that are tailored to your unique needs.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Cutting-Edge Technologies</h3>
                <p className="text-muted-foreground">
                  We leverage the latest web development frameworks and
                  technologies to ensure your website is fast, secure, and
                  scalable.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">User-Centric Design</h3>
                <p className="text-muted-foreground">
                  Our designers create visually appealing and intuitive
                  interfaces that provide an exceptional user experience.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  We don't just build your website and leave you on your own.
                  Our team provides ongoing maintenance and support to ensure
                  your website is always up-to-date and performing at its best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="services"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Web Hosting
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Reliable and Secure Hosting Solutions
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Acme Web Solutions, we provide reliable and secure hosting
                services to ensure your website is always online and performing
                at its best. Our hosting plans are designed to meet the needs of
                businesses of all sizes, from startups to enterprises.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Scalable Infrastructure</h3>
                <p className="text-muted-foreground">
                  Our hosting infrastructure is built to scale dynamically with
                  your website's traffic, ensuring optimal performance and
                  uptime.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Robust Security</h3>
                <p className="text-muted-foreground">
                  We implement the latest security measures, including SSL
                  certificates, firewalls, and regular backups, to protect your
                  website and your data.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Our dedicated support team is available around the clock to
                  assist you with any issues or questions you may have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="portfolio"
        className="w-full py-12 md:py-24 lg:py-32 bg-background"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Maintenance
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ongoing Website Maintenance and Support
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of experts provides ongoing maintenance and support to
                ensure your website is always up-to-date, secure, and performing
                at its best. From regular updates and bug fixes to content
                management and analytics, we've got you covered.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            <Card className="overflow-hidden rounded-xl">
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Maintenance Service"
                  className="aspect-video object-cover"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-xl font-bold">Website Updates</h3>
                <p className="text-muted-foreground">
                  We'll keep your website up-to-date with the latest
                  technologies, security patches, and content updates.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden rounded-xl">
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Maintenance Service"
                  className="aspect-video object-cover"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-xl font-bold">Performance Optimization</h3>
                <p className="text-muted-foreground">
                  We'll optimize your website's performance to ensure fast
                  loading times and a seamless user experience.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden rounded-xl">
              <CardHeader>
                <img
                  src="/placeholder.svg"
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
                  understand your website's performance and make informed
                  decisions.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Pricing
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Affordable Web Development and Hosting Plans
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the perfect web development and hosting plan to fit your
                business needs and budget.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            <Card className="overflow-hidden rounded-xl">
              <CardHeader className="bg-muted p-6 text-center">
                <h3 className="text-2xl font-bold">Starter</h3>
                <p className="text-4xl font-bold">$99</p>
                <p className="text-muted-foreground">per month</p>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li>1 Website</li>
                  <li>5 GB Storage</li>
                  <li>1 GB RAM</li>
                  <li>1 CPU Core</li>
                  <li>Unlimited Bandwidth</li>
                  <li>Free SSL Certificate</li>
                  <li>Monthly Maintenance</li>
                </ul>
              </CardContent>
              <CardFooter className="p-6">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                />
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

function MountainIcon(props) {
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
