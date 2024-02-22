import Link from "next/link";
import Container from "../Container";
import { Redressed, Titillium_Web } from "next/font/google";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });
// const titillium_Web = Titillium_Web({ subsets: ["latin"], weight: ["200", "400", "600", "900"] });

const NavBar = () => {
  return (
    <div className="sticky top-0 w-full bg-[#090e10] z-30 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md-gap-0">
            <Link className={`${redressed.className} font-bold text-2xl`} href="/">
              E-shop
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md:gap-12">
              <div>CartCount</div>
              <div>UserMenu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
