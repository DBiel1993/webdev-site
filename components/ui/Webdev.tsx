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
export default function Webdev() {
  return (
    <section id="About" className="w-full py-8 md:py-16 lg:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Web Development
            </div>
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Custom, Responsive Websites Built for Your Business
            </h2>
            <p className="max-w-[600px] text-muted-foreground text-base md:text-lg">
              Our team of experienced web developers create custom, modern
              websites that not only look great but also drive results for your
              business.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="space-y-2">
              <h3 className="text-lg font-bold">Cutting-Edge Technologies</h3>
              <p className="text-muted-foreground">
                We leverage the latest web development frameworks and
                technologies to ensure your website is fast, secure, and
                scalable.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold">User-Centric Design</h3>
              <p className="text-muted-foreground">
                Our designers create visually appealing and intuitive interfaces
                that provide an exceptional user experience.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold">Ongoing Support</h3>
              <p className="text-muted-foreground">
                Our team provides ongoing maintenance and support to ensure your
                website is always up-to-date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
