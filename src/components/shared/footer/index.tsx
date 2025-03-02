import { DONUT_SHOP_NAME } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t">
      <div className="wrapper">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} {DONUT_SHOP_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
