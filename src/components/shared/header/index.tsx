import { ShoppingCart, CircleUser } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { DONUT_SHOP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper  flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/donuts.ico"
              alt="Donut Shop"
              width={32}
              height={32}
            />
            <span className="text-lg font-semibold hidden lg:block ml-3">
              {DONUT_SHOP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-12">
          <Button asChild variant="ghost" size="icon">
            <Link href="/cart">
              <ShoppingCart /> My Cart
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href="/login">
              <CircleUser /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
