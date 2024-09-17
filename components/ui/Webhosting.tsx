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

export default function Webhosting() {
  return (
    <section id="services" className="w-full py-8 md:py-16 lg:py-24 bg-muted">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Web Hosting
            </div>
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Reliable and Secure Hosting Solutions
            </h2>
            <p className="max-w-[600px] text-muted-foreground text-base md:text-lg">
              We provide reliable and secure hosting services to ensure your
              website is always online and performing at its best.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="space-y-2">
              <h3 className="text-lg font-bold">Scalable Infrastructure</h3>
              <p className="text-muted-foreground">
                Our hosting infrastructure is built to scale dynamically with
                your website's traffic.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold">Robust Security</h3>
              <p className="text-muted-foreground">
                We implement the latest security measures to protect your
                website and your data.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold">24/7 Support</h3>
              <p className="text-muted-foreground">
                Our dedicated support team is available around the clock to
                assist you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
