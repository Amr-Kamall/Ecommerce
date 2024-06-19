import Link from "next/link";

function NavLink({ children, href, setIsOpenMenu }) {
  return (
    <li onClick={() => setIsOpenMenu(false)}>
      <Link
        href={`/${href}`}
        className="md:text-md font-semibold relative capitalize before:content-[''] before:absolute before:left-0 md:before:top-5 before:top-8 before:duration-500 before:w-[0] before:h-[3px] before:rounded-md before:bg-black hover:before:w-full hover:opacity-100 opacity-[0.9]"
      >
        {children}
      </Link>
    </li>
  );
}

export default NavLink;
