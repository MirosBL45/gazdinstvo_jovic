import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/images/logo.png'
import { usePathname } from "next/navigation";
import style from "./navbar.module.css";


// Replace import { useRouter } from 'next/router';
// With import { usePathname } from "next/navigation";

// Replace const router = useRouter();
// With const pathname = usePathname();

// and then replace className={router.pathname == "/" ? "active" : ""}
// with className={pathname == "/" ? "active" : ""}

function Navbar() {
  const pathname = usePathname();

  return (
    // <nav>
    //   <div className="logo">
    //     <Image src="/logo.png" alt="logo" width={128} height={77} />
    //   </div>
    //   <Link href="/">Home</Link>
    //   <Link href="/about">About</Link>
    //   <Link href="/ninjas">Ninja Listing</Link>
    // </nav>
    <nav>
      <div className="container nav__container">
      <Link href="/" className={style.logo}>
      <Image src={Logo} alt="Nav Logo" width={128} height={77} />
      </Link>
        nav links
        nav buttons
      </div>
    </nav>
  );
}

export default Navbar;
