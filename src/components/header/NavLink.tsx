import { NewsCategory } from "@/types/newsCategory";
import Link from "next/link";

const NavLink = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs: NewsCategory[] = data.data;
  const navLinks = navs.filter((link) => link.scrapable);

  return (
    <div className="my-5 flex flex-wrap items-center gap-x-6 gap-y-3">
      {navLinks.map((link) => (
        <Link
          href={link.slug}
          key={link.slug}
          className="group relative py-1 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-red-600 sm:text-base"
        >
          {link.title}

          <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-red-600 transition-all duration-300 group-hover:w-full" />
        </Link>
      ))}
    </div>
  );
};

export default NavLink;
