import { navItems } from "@/constant/data";
import { motion } from "framer-motion";
const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-x-9">
        {navItems.map((item, index) => {
          const { href, name } = item;
          return (
            <motion.li
              initial={{ opacity: 0, top: -10 }}
              whileInView={{ opacity: 1, top: 10 }}
              transition={{ duration: 2 }}
              key={index}
              className="hover:text-blue transition"
            >
              <a href={href}>{name}</a>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
