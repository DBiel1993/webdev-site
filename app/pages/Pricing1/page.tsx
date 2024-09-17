"use client";

import { ArrowRight, Check, Info } from "lucide-react";
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

export default function PricingStarterPage() {
  const starterFeatures = [
    {
      name: "Responsive Website Design",
      info: "Mobile-friendly design that looks great on all devices",
    },
    {
      name: "5 Pages Included",
      info: "Home, About, Services, Contact, and one additional page of your choice",
    },
    {
      name: "Basic SEO Optimization",
      info: "Essential on-page SEO to help your site get found",
    },
    {
      name: "Content Management System",
      info: "Easy-to-use CMS for updating your website content",
    },
    {
      name: "1 Year Domain Registration",
      info: "Free domain registration for the first year",
    },
    {
      name: "Reliable Hosting",
      info: "Fast and secure hosting on our optimized servers",
    },
    {
      name: "SSL Certificate",
      info: "Secure your website with HTTPS encryption",
    },
    { name: "Email Support", info: "Get help via email during business hours" },
    {
      name: "Monthly Performance Report",
      info: "Basic analytics report delivered monthly",
    },
    {
      name: "1 Hour of Training",
      info: "Learn how to manage and update your website",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Pricing Plans</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Choose the perfect plan for your business. Our starter package offers
        great value for small businesses and startups looking to establish their
        online presence.
      </p>

      <div className="flex justify-center mb-12">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl font-bold">
                Starter Package
              </CardTitle>
              <Badge variant="secondary">Most Popular</Badge>
            </div>
            <CardDescription>
              Perfect for small businesses and startups
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold mb-4">
              $99<span className="text-xl font-normal">/month</span>
            </div>
            <ul className="space-y-2">
              {starterFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature.name}</span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-muted-foreground ml-2" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{feature.info}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" size="lg">
              Get Started
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Need More? We've Got You Covered
        </h2>
        <p className="mb-6">
          Our starter package is just the beginning. We offer a range of plans
          to suit businesses of all sizes, from growing startups to large
          enterprises.
        </p>
        <Button asChild variant="outline">
          <Link href="/pricing">
            View All Plans <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Why Choose Our Starter Package?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Affordable entry point for professional web presence</li>
          <li>All-in-one solution with design, hosting, and support</li>
          <li>
            Built with scalability in mind - easily upgrade as your business
            grows
          </li>
          <li>Optimized for performance and security from day one</li>
          <li>Expert support to help you succeed online</li>
        </ul>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="mb-6">
          Take the first step towards a powerful online presence with our
          Starter Package. Our team is ready to bring your vision to life.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/services">Learn More About Our Services</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
