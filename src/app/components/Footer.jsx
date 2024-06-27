"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  if (pathname === "/sign-up" || pathname === "/sign-in") return;

  return (
    <div className="bg-gray-100">
      <div className="py-6 w-4/5 mx-auto text-sm">
        <div className="flex flex-col md:flex-row justify-between gap-24">
          <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
            <Link href="/">
              <div className="text-2xl tracking-wide">AMRO</div>
            </Link>
            <p>
              3252 Winding Way, Central Plaza, Willowbrook, CA 90210, United
              States
            </p>
            <span className="font-semibold">hello@amro.dev</span>
            <span className="font-semibold">+1 234 567 890</span>
            <div className="flex gap-6">
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={16}
                height={16}
              />
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={16}
                height={16}
              />
              <Image src="/youtube.png" alt="YouTube" width={16} height={16} />
              <Image
                src="/pinterest.png"
                alt="Pinterest"
                width={16}
                height={16}
              />
              <Image src="/x.png" alt="X" width={16} height={16} />
            </div>
          </div>
          <div className="hidden lg:flex justify-between w-1/2">
            <div className="flex flex-col justify-between">
              <h1 className="font-medium text-lg">COMPANY</h1>
              <div className="flex flex-col gap-6">
                <Link href="">About Us</Link>
                <Link href="">Careers</Link>
                <Link href="">Affiliates</Link>
                <Link href="">Blog</Link>
                <Link href="">Contact Us</Link>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <h1 className="font-medium text-lg">SHOP</h1>
              <div className="flex flex-col gap-6">
                <Link href="">New Arrivals</Link>
                <Link href="">Accessories</Link>
                <Link href="">Men</Link>
                <Link href="">Women</Link>
                <Link href="">All Products</Link>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <h1 className="font-medium text-lg">HELP</h1>
              <div className="flex flex-col gap-6">
                <Link href="">Customer Service</Link>
                <Link href="">My Account</Link>
                <Link href="">Find a Store</Link>
                <Link href="">Legal & Privacy</Link>
                <Link href="">Gift Card</Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
            <h1 className="font-medium text-lg">SUBSCRIBE</h1>
            <p>
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Email address"
                className="p-4 w-3/4"
              />
              <button className="w-1/4 bg-lama text-white">JOIN</button>
            </div>
            <span className="font-semibold">Secure Payments</span>
            <div className="flex justify-between">
              <Image
                src="/discover.png"
                alt="Discover"
                width={40}
                height={20}
              />
              <Image src="/skrill.png" alt="Skrill" width={40} height={20} />
              <Image src="/paypal.png" alt="PayPal" width={40} height={20} />
              <Image
                src="/mastercard.png"
                alt="MasterCard"
                width={40}
                height={20}
              />
              <Image src="/visa.png" alt="Visa" width={40} height={20} />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
          <div>© 2024 Lama Shop</div>
          <div className="flex flex-col gap-8 md:flex-row">
            <div>
              <span className="text-gray-500 mr-4">Language</span>
              <span className="font-medium">United States | English</span>
            </div>
            <div>
              <span className="text-gray-500 mr-4">Currency</span>
              <span className="font-medium">$ USD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
