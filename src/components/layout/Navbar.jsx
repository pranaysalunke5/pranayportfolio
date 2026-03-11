// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <nav className="fixed top-0 w-full z-[100] backdrop-blur-md bg-black/20 border-b border-white/5">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <div className="text-2xl font-black tracking-tighter">PRANAY<span className="text-blue-500">.</span></div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex gap-8">
//           {navLinks.map((link) => (
//             <a key={link.name} href={link.href} className="text-sm uppercase tracking-widest hover:text-blue-500 transition-colors">
//               {link.name}
//             </a>
//           ))}
//         </div>

//         {/* Mobile Toggle */}
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-black/95 absolute w-full p-6 flex flex-col gap-4 text-center border-b border-white/10">
//           {navLinks.map((link) => (
//             <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg py-2 uppercase tracking-widest border-b border-white/5 last:border-0">
//               {link.name}
//             </a>
//           ))}
//         </motion.div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Project', href: '#projects' },
    { name: 'contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-[#101b4d] py-6 px-10">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        
         <div className="text-2xl font-black tracking-tighter">PRANAY<span className="text-blue-500">.</span></div>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`text-[17px] font-medium transition-all duration-300 ${
                active === link.name ? 'text-[#4fd1c5]' : 'text-white hover:text-[#4fd1c5]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          className="lg:hidden text-white p-2" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#020617] overflow-hidden"
          >
            <div className="flex flex-col items-center py-10 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActive(link.name);
                    setIsOpen(false);
                  }}
                  className={`text-xl font-medium ${
                    active === link.name ? 'text-[#4fd1c5]' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;