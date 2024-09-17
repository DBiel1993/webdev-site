import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import Webdev from "@/components/ui/Webdev";
import Maintenance from "@/components/ui/Maintenance";
import Webhosting from "@/components/ui/Webhosting";
import Pricing from "@/components/ui/Pricing";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      <Hero />
      <Webdev />
      <Webhosting />
      <Maintenance />
      <Pricing />
      <Footer />
    </div>
  );
}

type MountainIconProps = React.SVGProps<SVGSVGElement>;

function MountainIcon(props: MountainIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
