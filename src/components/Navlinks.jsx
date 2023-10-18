const NavLink = ({ href, title }) => {
  return (
    <a
      href={href}
      className="hidden py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 md:block hover:text-white"
    >
      {title}
    </a>
  )
}

export default NavLink
