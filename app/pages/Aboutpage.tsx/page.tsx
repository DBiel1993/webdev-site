import {
  ArrowRight,
  Code,
  Server,
  Shield,
  Zap,
  Users,
  HeartHandshake,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AboutPage() {
  const coreValues = [
    {
      title: "Innovation",
      description:
        "We stay at the forefront of web technologies to deliver cutting-edge solutions.",
      icon: <Zap className="h-8 w-8 mb-2" />,
    },
    {
      title: "Reliability",
      description:
        "Our hosting and maintenance services ensure your website is always up and running.",
      icon: <Server className="h-8 w-8 mb-2" />,
    },
    {
      title: "Security",
      description:
        "We prioritize the safety of your data and implement robust security measures.",
      icon: <Shield className="h-8 w-8 mb-2" />,
    },
    {
      title: "Customer-Centric",
      description:
        "We tailor our solutions to meet your specific business needs and goals.",
      icon: <Users className="h-8 w-8 mb-2" />,
    },
    {
      title: "Quality",
      description:
        "We are committed to delivering high-quality, performant web solutions.",
      icon: <Code className="h-8 w-8 mb-2" />,
    },
    {
      title: "Partnership",
      description:
        "We view our clients as long-term partners and provide ongoing support.",
      icon: <HeartHandshake className="h-8 w-8 mb-2" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        About Acme Web Solutions
      </h1>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Your Partner in Web Excellence
          </h2>
          <p className="text-lg mb-6">
            At Acme Web Solutions, we're passionate about creating exceptional
            web experiences. With years of expertise in web development,
            hosting, and maintenance, we've helped businesses of all sizes
            establish a strong online presence and achieve their digital goals.
          </p>
          <p className="text-lg mb-6">
            Our team of skilled professionals combines technical prowess with
            creative flair to deliver custom, responsive websites that not only
            look great but also perform exceptionally well. We pride ourselves
            on using cutting-edge technologies to ensure your website is fast,
            secure, and scalable.
          </p>
          <Button asChild>
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="relative h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Acme Web Solutions Team"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  {value.icon}
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-muted p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Our Approach
        </h2>
        <p className="text-lg mb-6">
          We believe in a holistic approach to web solutions. From the initial
          design concept to ongoing maintenance and optimization, we're with you
          every step of the way. Our process involves:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Understanding your unique business needs and goals</li>
          <li>Crafting a custom solution tailored to your requirements</li>
          <li>Implementing robust, scalable technologies</li>
          <li>Rigorous testing and quality assurance</li>
          <li>Providing reliable hosting and ongoing support</li>
          <li>Continuous optimization and performance monitoring</li>
        </ol>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Ready to Transform Your Web Presence?
        </h2>
        <p className="text-lg mb-8">
          Whether you're starting from scratch or looking to upgrade your
          existing website, Acme Web Solutions has the expertise and tools to
          help you succeed online.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/services">Explore Our Services</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
