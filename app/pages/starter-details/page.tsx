import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function StarterDetailsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Starter Plan Details
      </h1>
      <div className="max-w-2xl mx-auto">
        <Card className="overflow-hidden rounded-xl">
          <CardHeader className="bg-muted p-6 text-center">
            <h3 className="text-2xl font-bold">Starter</h3>
            <p className="text-4xl font-bold">$99</p>
            <p className="text-muted-foreground">per month</p>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <ul className="space-y-2 text-muted-foreground">
              <li>1 Website</li>
              <li>5 GB Storage</li>
              <li>1 GB RAM</li>
              <li>1 CPU Core</li>
              <li>Unlimited Bandwidth</li>
              <li>Free SSL Certificate</li>
              <li>Monthly Maintenance</li>
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Plan Details:</h4>
              <p className="text-muted-foreground">
                Our Starter plan is perfect for small businesses or individuals
                looking to establish their online presence. With 1 website, 5 GB
                of storage, and 1 GB of RAM, you'll have everything you need to
                get started. Enjoy unlimited bandwidth and a free SSL
                certificate to keep your site secure. Our monthly maintenance
                ensures your site stays up-to-date and running smoothly.
              </p>
            </div>
          </CardContent>
          <CardFooter className="p-6">
            <Link href="/pages/starter-checkout" className="w-full">
              <Button className="w-full">Choose Starter Plan</Button>
            </Link>
          </CardFooter>
        </Card>
        <div className="mt-6 text-center">
          <Link href="/pricing" className="text-primary hover:underline">
            Back to All Plans
          </Link>
        </div>
      </div>
    </div>
  );
}
