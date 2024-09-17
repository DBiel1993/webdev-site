import Link from "next/link";
export function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
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
export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Web Solutions</span>
      </Link>
      <nav className="ml-auto flex gap-2 sm:gap-4">
        <Link
          href="/pages/Webdev"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Web Development
        </Link>
        <Link
          href="/pages/Webhostingpage"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Web Hosting
        </Link>

        <Link
          href="/pages/Pricingpage"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Pricing
        </Link>

        <Link
          href="/pages/Contact"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
