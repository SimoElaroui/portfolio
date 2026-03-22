import Link from "next/link";

// قمنا بإضافة onClick كخاصية اختيارية (?) لتجنب أي تعارض
interface NavLinkProps {
  href: string;
  title: string;
  onClick?: () => void; 
}

const NavLinks: React.FC<NavLinkProps> = ({ href, title, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick} // تأكد من تمريرها هنا ليتم تنفيذها عند الضغط
      className="block py-2 pl-3 pr-4 text-white font-weight prociono-regular sm:text-xl rounded md:p-0 hover:text-blue-600"
    >
      {title}
    </Link>
  );
};

export default NavLinks;
