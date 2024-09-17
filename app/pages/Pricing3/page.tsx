import {
  ArrowRight,
  Check,
  Info,
  Shield,
  Zap,
  Server,
  Users,
  BarChart,
  Lock,
  ShoppingCart,
  Globe,
  Activity,
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function PricingEnterprisePage() {
  const enterpriseFeatures = [
    {
      name: "Fully Custom Website Design",
      info: "Bespoke design tailored to your brand and specific requirements",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      name: "Unlimited Pages",
      info: "No restrictions on the number of pages for your website",
      icon: <Server className="h-5 w-5" />,
    },
    {
      name: "Advanced E-commerce Solutions",
      info: "Robust e-commerce platform with unlimited products and advanced features",
      icon: <ShoppingCart className="h-5 w-5" />,
    },
    {
      name: "Enterprise-grade Hosting",
      info: "High-performance, scalable hosting solution with guaranteed uptime",
      icon: <Server className="h-5 w-5" />,
    },
    {
      name: "24/7 Priority Support",
      info: "Round-the-clock support with dedicated account manager",
      icon: <Users className="h-5 w-5" />,
    },
    {
      name: "Advanced Security Measures",
      info: "Enterprise-level security including DDoS protection and daily security scans",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      name: "Custom Integrations",
      info: "Integration with your existing systems and third-party services",
      icon: <ArrowRight className="h-5 w-5" />,
    },
    {
      name: "Advanced Analytics and Reporting",
      info: "Comprehensive analytics with custom dashboards and regular insights",
      icon: <BarChart className="h-5 w-5" />,
    },
    {
      name: "Multi-language Support",
      info: "Support for multiple languages to reach a global audience",
      icon: <Globe className="h-5 w-5" />,
    },
    {
      name: "Regular Performance Audits",
      info: "Scheduled performance reviews and optimizations",
      icon: <Activity className="h-5 w-5" />,
    },
    {
      name: "Disaster Recovery Planning",
      info: "Robust backup and recovery solutions to ensure business continuity",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      name: "Compliance Support",
      info: "Assistance with industry-specific compliance requirements (GDPR, HIPAA, etc.)",
      icon: <Lock className="h-5 w-5" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Enterprise Solutions
      </h1>
      <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
        Empower your large-scale business with our Enterprise package. Tailored
        for organizations that demand the highest level of performance,
        security, and customization.
      </p>

      <div className="flex justify-center mb-12">
        <Card className="w-full max-w-4xl">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-3xl font-bold">
                Enterprise Package
              </CardTitle>
              <Badge variant="secondary" className="text-lg py-1">
                Ultimate Solution
              </Badge>
            </div>
            <CardDescription className="text-lg">
              Comprehensive solution for large businesses and organizations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-bold mb-6">Custom Pricing</div>
            <p className="text-lg mb-6">
              Contact us for a tailored quote based on your specific
              requirements and scale.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  {feature.icon}
                  <div className="ml-2">
                    <span className="font-medium">{feature.name}</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4 text-muted-foreground ml-2 inline" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{feature.info}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" size="lg">
              Request a Consultation
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Explore Our Other Plans</h2>
        <p className="mb-6">
          Not quite ready for Enterprise? Check out our other plans designed for
          businesses at different stages of growth.
        </p>
        <div className="space-x-4">
          <Button asChild variant="outline">
            <Link href="/pricing/starter">Starter Plan</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/pricing/professional">Professional Plan</Link>
          </Button>
        </div>
      </div>

      <div className="bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Why Choose Our Enterprise Package?
        </h2>
        <ul className="list-none space-y-4">
          <li className="flex items-center">
            <Shield className="h-6 w-6 text-primary mr-2" />
            <span>Unparalleled security and compliance support</span>
          </li>
          <li className="flex items-center">
            <Zap className="h-6 w-6 text-primary mr-2" />
            <span>Blazing-fast performance with enterprise-grade hosting</span>
          </li>
          <li className="flex items-center">
            <Users className="h-6 w-6 text-primary mr-2" />
            <span>Dedicated support team and account management</span>
          </li>
          <li className="flex items-center">
            <BarChart className="h-6 w-6 text-primary mr-2" />
            <span>
              Advanced analytics and reporting for data-driven decisions
            </span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="h-6 w-6 text-primary mr-2" />
            <span>
              Seamless integration with your existing business systems
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Scale Your Digital Presence?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Our Enterprise Package offers unmatched performance, security, and
          customization. Let's discuss how we can tailor our solutions to meet
          your organization's unique needs.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/case-studies">
              View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
