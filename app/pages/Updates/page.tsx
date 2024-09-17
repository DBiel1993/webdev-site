import { ArrowRight, CheckCircle, Clock, Zap } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function UpdatesPage() {
  const updateServices = [
    {
      id: 1,
      title: "Content Refresh",
      description:
        "Keep your website content fresh and engaging with our regular content update service. We'll work with you to revise text, update images, and ensure your information is always current.",
      features: [
        "Monthly content reviews",
        "SEO optimization",
        "New page creation as needed",
      ],
      icon: <Clock className="h-6 w-6" />,
    },
    {
      id: 2,
      title: "Design Tweaks",
      description:
        "Stay on top of design trends with our design update service. We'll make subtle improvements to your website's look and feel to keep it modern and appealing.",
      features: [
        "Quarterly design reviews",
        "UI/UX improvements",
        "Responsive design updates",
      ],
      icon: <Zap className="h-6 w-6" />,
    },
    {
      id: 3,
      title: "Functionality Upgrades",
      description:
        "Enhance your website's capabilities with our functionality upgrade service. We'll implement new features and improve existing ones to better serve your users.",
      features: [
        "New feature implementation",
        "Third-party integrations",
        "Performance optimization",
      ],
      icon: <CheckCircle className="h-6 w-6" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Website Update Services
      </h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Keep your website fresh, functional, and ahead of the competition with
        our comprehensive update services. We ensure your online presence
        evolves with your business and industry trends.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {updateServices.map((service) => (
          <Card key={service.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                {service.icon}
                <Badge variant="secondary">Professional Service</Badge>
              </div>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc list-inside space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Why Choose Our Update Services?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Our expert team ensures your website stays current, secure, and
          optimized for performance. We tailor our update services to your
          specific needs, ensuring your online presence always represents the
          best of your business.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/services">Explore All Services</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </div>

      <div className="mt-16 bg-muted p-8 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Our Update Process</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>Initial consultation to understand your update needs</li>
          <li>Development of a tailored update plan</li>
          <li>Implementation of updates in a staging environment</li>
          <li>Your review and approval of changes</li>
          <li>Deployment of updates to your live website</li>
          <li>Post-update testing and monitoring</li>
        </ol>
      </div>
    </div>
  );
}
