import Link from "next/link";
import {
  Bolt,
  Cloud,
  Cpu,
  Database,
  Download,
  Gauge,
  Info,
  Layers,
  Lock,
  Mountain,
  PieChart,
  RefreshCw,
  Shield,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <Mountain className="h-6 w-6" />
          <span className="sr-only">Acme Web Solutions</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Services
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
            About
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Reliable Maintenance for Your Web Presence
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Black Box Web Solutions offers comprehensive maintenance
                    services to keep your website running smoothly and securely.
                    Trust our experts to optimize performance, safeguard your
                    data, and provide detailed analytics.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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
                alt="Maintenance"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                width="550"
                height="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Performance Optimization
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Keep Your Website Running at Peak Performance
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our experts will analyze your website's performance and
                    implement optimizations to ensure lightning-fast load times
                    and a seamless user experience.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Gauge className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold">
                        Page Speed Optimization
                      </h3>
                      <p className="text-muted-foreground">
                        Identify and address bottlenecks to improve page load
                        times.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Bolt className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold">CDN Integration</h3>
                      <p className="text-muted-foreground">
                        Leverage a global content delivery network for faster
                        asset delivery.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Cpu className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold">Server Optimization</h3>
                      <p className="text-muted-foreground">
                        Ensure your server infrastructure is configured for
                        optimal performance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Layers className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold">Caching Strategies</h3>
                      <p className="text-muted-foreground">
                        Implement caching techniques to reduce server load and
                        improve response times.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                alt="Performance"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                width="550"
                height="310"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                alt="Security"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                width="550"
                height="310"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Security
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Protect Your Website from Cyber Threats
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our security experts will monitor your website 24/7,
                    implement the latest security patches, and safeguard your
                    data from potential breaches.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold">
                        Vulnerability Scanning
                      </h3>
                      <p className="text-muted-foreground">
                        Regularly scan your website for potential
                        vulnerabilities and address them promptly.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold">Firewall Protection</h3>
                      <p className="text-muted-foreground">
                        Implement a robust web application firewall to block
                        malicious traffic.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold">
                        SSL/TLS Certificates
                      </h3>
                      <p className="text-muted-foreground">
                        Ensure your website is secured with the latest SSL/TLS
                        certificates.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldAlert className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold">Intrusion Detection</h3>
                      <p className="text-muted-foreground">
                        Monitor your website for suspicious activity and respond
                        to threats promptly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Backups and Disaster Recovery
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Safeguard Your Data with Reliable Backups
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our comprehensive backup and disaster recovery solutions
                    ensure your website and data are protected from unexpected
                    events, with easy restoration capabilities.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Database className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold">Daily Backups</h3>
                      <p className="text-muted-foreground">
                        Automated daily backups of your website and database.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Cloud className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold">Offsite Storage</h3>
                      <p className="text-muted-foreground">
                        Store backups securely in a remote, redundant location.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <RefreshCw className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold">Disaster Recovery</h3>
                      <p className="text-muted-foreground">
                        Quickly restore your website and data in the event of an
                        emergency.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Download className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold">
                        Downloadable Backups
                      </h3>
                      <p className="text-muted-foreground">
                        Access and download your website backups at any time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                alt="Backups"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                width="550"
                height="310"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                alt="Analytics"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                width="550"
                height="310"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Analytics and Reporting
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Gain Valuable Insights into Your Website's Performance
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our comprehensive analytics and reporting tools provide
                    detailed insights into your website's traffic, user
                    behavior, and key performance metrics, helping you make
                    informed decisions.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Info className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold">
                        Real-Time Monitoring
                      </h3>
                      <p className="text-muted-foreground">
                        Track your website's performance in real-time with
                        detailed metrics.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <PieChart className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold">
                        Comprehensive Reporting
                      </h3>
                      <p className="text-muted-foreground">
                        Receive detailed reports to monitor performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
