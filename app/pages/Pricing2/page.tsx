import { ArrowRight, Check, Info, Star } from "lucide-react";
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

export default function PricingProfessionalPage() {
  const professionalFeatures = [
    {
      name: "Custom Responsive Website Design",
      info: "Unique, tailored design that adapts to all devices",
    },
    {
      name: "Up to 15 Pages",
      info: "Ample space to showcase your products, services, and company information",
    },
    {
      name: "Advanced SEO Optimization",
      info: "Comprehensive on-page and technical SEO to boost your search rankings",
    },
    {
      name: "Content Management System",
      info: "User-friendly CMS with advanced customization options",
    },
    {
      name: "E-commerce Integration",
      info: "Set up an online store with up to 100 products",
    },
    {
      name: "2 Years Domain Registration",
      info: "Free domain registration for two years",
    },
    {
      name: "High-Performance Hosting",
      info: "Faster, more robust hosting with increased resources",
    },
    {
      name: "SSL Certificate",
      info: "Secure your website with HTTPS encryption",
    },
    {
      name: "Email & Phone Support",
      info: "Get help via email and phone during extended business hours",
    },
    {
      name: "Weekly Performance Reports",
      info: "Detailed analytics reports delivered weekly",
    },
    {
      name: "5 Hours of Training",
      info: "Comprehensive training on website management and optimization",
    },
    {
      name: "Social Media Integration",
      info: "Connect your website with your social media profiles",
    },
    {
      name: "Blog Setup",
      info: "Custom blog setup to share your content and improve SEO",
    },
    {
      name: "Monthly Content Updates",
      info: "We'll make content updates for you each month",
    },
    {
      name: "Performance Optimization",
      info: "Regular speed and performance tuning",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Pricing Plans</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Elevate your online presence with our Professional Package. Designed for
        growing businesses that need a more robust and feature-rich website
        solution.
      </p>

      <div className="flex justify-center mb-12">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-3xl font-bold">
                Professional Package
              </CardTitle>
              <Badge variant="secondary" className="text-lg py-1">
                Best Value
              </Badge>
            </div>
            <CardDescription className="text-lg">
              Ideal for growing businesses and e-commerce
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-bold mb-6">
              $249<span className="text-2xl font-normal">/month</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {professionalFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
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
              Get Started with Professional
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Explore Our Other Plans</h2>
        <p className="mb-6">
          Whether you're just starting out or need an enterprise-level solution,
          we have a plan that fits your needs.
        </p>
        <div className="space-x-4">
          <Button asChild variant="outline">
            <Link href="/pricing/starter">Starter Plan</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/pricing/enterprise">Enterprise Plan</Link>
          </Button>
        </div>
      </div>

      <div className="bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Why Choose Our Professional Package?
        </h2>
        <ul className="list-none space-y-2">
          {[
            "Comprehensive solution for businesses ready to scale",
            "E-commerce capabilities to start selling online",
            "Advanced SEO and performance optimization for better visibility",
            "Increased support and training to ensure your success",
            "Regular content updates to keep your site fresh and engaging",
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Take Your Online Presence to the Next Level?
        </h2>
        <p className="mb-6">
          Our Professional Package offers the perfect balance of features,
          support, and value for growing businesses. Let's create something
          amazing together.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/contact">Speak to a Consultant</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
