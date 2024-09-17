import { ArrowRight, Zap, Clock, BarChart, Shield, Search } from "lucide-react";
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

export default function PerformanceOptimizationPage() {
  const optimizationServices = [
    {
      title: "Page Speed Optimization",
      description:
        "Boost your website's loading speed for better user experience and improved search engine rankings.",
      features: [
        "Image optimization and compression",
        "Minification of CSS, JavaScript, and HTML",
        "Browser caching implementation",
        "Content Delivery Network (CDN) integration",
      ],
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Server-Side Optimization",
      description:
        "Enhance your website's backend performance for faster data processing and reduced server response times.",
      features: [
        "Database query optimization",
        "Server caching setup",
        "Load balancing configuration",
        "PHP and MySQL optimization",
      ],
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "Front-End Performance",
      description:
        "Improve your website's client-side performance for smoother user interactions and faster rendering.",
      features: [
        "Code splitting and lazy loading",
        "Critical CSS implementation",
        "JavaScript performance optimization",
        "Efficient DOM manipulation techniques",
      ],
      icon: <BarChart className="h-6 w-6" />,
    },
    {
      title: "Mobile Performance",
      description:
        "Optimize your website for mobile devices to ensure fast loading and smooth operation on smartphones and tablets.",
      features: [
        "Responsive image optimization",
        "Mobile-first design principles",
        "Touch event optimization",
        "Accelerated Mobile Pages (AMP) implementation",
      ],
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "SEO Performance",
      description:
        "Enhance your website's search engine performance to improve visibility and organic traffic.",
      features: [
        "Schema markup implementation",
        "XML sitemap optimization",
        "Page load speed improvement",
        "Mobile-friendliness optimization",
      ],
      icon: <Search className="h-6 w-6" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Performance Optimization Services
      </h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Boost your website's speed, efficiency, and user experience with our
        cutting-edge performance optimization services. We ensure your site runs
        at peak performance, enhancing user satisfaction and improving search
        engine rankings.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {optimizationServices.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                {service.icon}
                <Badge variant="secondary">Expert Service</Badge>
              </div>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc list-inside space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
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
          Why Choose Our Performance Optimization Services?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Our expert team uses industry-leading tools and techniques to analyze
          and optimize your website's performance. We tailor our approach to
          your specific needs, ensuring maximum impact on your site's speed and
          efficiency.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/contact">Request a Performance Audit</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/pricing">View Pricing Plans</Link>
          </Button>
        </div>
      </div>

      <div className="mt-16 bg-muted p-8 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">
          Our Performance Optimization Process
        </h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>Comprehensive website performance audit</li>
          <li>Identification of performance bottlenecks</li>
          <li>Development of a tailored optimization strategy</li>
          <li>Implementation of performance enhancements</li>
          <li>Thorough testing and verification of improvements</li>
          <li>
            Detailed reporting and recommendations for ongoing optimization
          </li>
        </ol>
      </div>
    </div>
  );
}
