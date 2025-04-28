import Image from "next/image";
import Link from "next/link";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="h-screen flex">
            {/* LEFT */}
            <div className="md-w-1/5 bg-slate-50">
              <div>
                <Link href="/" className="flex flex-col items-center gap-2">
                  <Image 
                    src="/academy-arc-pictorial-logo.svg"
                    alt="academy arc pictorial logo light version"
                    className="px-2 mt-4"
                    width={154}
                    height={56}
                  />
                  <h2 className="text-center text-2xl hidden lg:block font-mainLogo">Academy Arc</h2>
                  <h3 className="text-center text-sm hidden xl:block">School Management System</h3>
                </Link>
                <Menu />
              </div>
            </div>
            {/* RIGHT */}
            <div className="w-5/6 bg-slate-100 overflow-scroll">
              <Navbar />
              {children}
            </div>
        </div>
    );
  }
  