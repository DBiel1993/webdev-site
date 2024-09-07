"use client"; // This makes the component run as a client-side component

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function StarterCheckoutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // such as sending the data to a payment processor
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your purchase! (This is a demo - no actual purchase was made)"
    );
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Checkout - Starter Plan
      </h1>
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="bg-muted p-6">
            <h2 className="text-2xl font-bold">Order Summary</h2>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex justify-between mb-4">
              <span>Starter Plan (Monthly)</span>
              <span className="font-bold">$99.00</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between">
                <span className="font-bold">Total</span>
                <span className="font-bold">$99.00</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mt-8">
          <CardHeader className="bg-muted p-6">
            <h2 className="text-2xl font-bold">Payment Details</h2>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Complete Purchase
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="mt-6 text-center">
          <Link
            href="/pricing/starter"
            className="text-primary hover:underline"
          >
            Back to Starter Plan Details
          </Link>
        </div>
      </div>
    </div>
  );
}
