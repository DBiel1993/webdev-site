import {
  ArrowRight,
  BarChart2,
  Users,
  TrendingUp,
  Globe,
  Search,
  ShoppingCart,
} from "lucide-react";
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

export default function AnalyticsAndReportingPage() {
  const analyticsServices = [
    {
      title: "Website Traffic Analysis",
      description:
        "Gain deep insights into your website's visitor behavior, traffic sources, and user engagement.",
      features: [
        "Visitor demographics and behavior tracking",
        "Traffic source analysis",
        "Page performance metrics",
        "Custom event tracking",
      ],
      icon: <BarChart2 className="h-6 w-6" />,
    },
    {
      title: "User Experience (UX) Analytics",
      description:
        "Understand how users interact with your website to optimize the user experience and increase conversions.",
      features: [
        "User flow visualization",
        "Heatmap and click tracking",
        "Form analytics",
        "Session recordings",
      ],
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Conversion Rate Optimization",
      description:
        "Identify opportunities to improve your website's conversion rates and achieve your business goals.",
      features: [
        "Goal tracking and funnel analysis",
        "A/B testing implementation",
        "Conversion path analysis",
        "ROI tracking for marketing campaigns",
      ],
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      title: "SEO Performance Tracking",
      description:
        "Monitor and improve your website's search engine performance to drive organic traffic growth.",
      features: [
        "Keyword ranking tracking",
        "Organic traffic analysis",
        "Backlink profile monitoring",
        "Technical SEO audits",
      ],
      icon: <Search className="h-6 w-6" />,
    },
    {
      title: "E-commerce Analytics",
      description:
        "Track and analyze your online store's performance to boost sales and improve customer experience.",
      features: [
        "Product performance analysis",
        "Shopping cart abandonment tracking",
        "Customer lifetime value calculation",
        "Sales funnel optimization",
      ],
      icon: <ShoppingCart className="h-6 w-6" />,
    },
    {
      title: "Custom Reporting Dashboards",
      description:
        "Get tailored reports and dashboards that provide actionable insights for your specific business needs.",
      features: [
        "Customizable KPI dashboards",
        "Automated report generation",
        "Data visualization tools",
        "Multi-channel data integration",
      ],
      icon: <Globe className="h-6 w-6" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Analytics and Reporting Services
      </h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Harness the power of data with our comprehensive analytics and reporting
        services. We provide deep insights into your website's performance, user
        behavior, and business metrics to drive informed decision-making and
        growth.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {analyticsServices.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                {service.icon}
                <Badge variant="secondary">Advanced Analytics</Badge>
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
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Why Choose Our Analytics and Reporting Services?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Our expert team leverages industry-leading tools and techniques to
          provide you with actionable insights. We tailor our analytics approach
          to your specific business goals, ensuring you get the data you need to
          make informed decisions and drive growth.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/contact">Request a Demo</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/pricing">View Pricing Plans</Link>
          </Button>
        </div>
      </div>

      <div className="mt-16 bg-muted p-8 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">
          Our Analytics and Reporting Process
        </h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Initial consultation to understand your business goals and KPIs
          </li>
          <li>
            Setup and configuration of analytics tools tailored to your needs
          </li>
          <li>Implementation of tracking codes and event tracking</li>
          <li>Creation of custom dashboards and reports</li>
          <li>Regular analysis and insights delivery</li>
          <li>Ongoing optimization and refinement of analytics strategy</li>
        </ol>
      </div>
    </div>
  );
}
