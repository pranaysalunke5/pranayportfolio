import { AnimatePresence, motion } from 'framer-motion';
import { Facebook, Instagram, Github, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';
import Photo from "../../assets/Photo.png";




const Hero = () => {

  const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % titles.length);
  }, 3000); // Changes every 3 seconds
  return () => clearInterval(interval);
}, []);

  const titles = [
  "Web Developer",
  "Frontend Developer",
  "Full Stack Developer",
  "Backend Developer",
  "React Native Developer"
];
  return (
    <section id="home" className="min-h-screen w-full bg-[#101b4d] flex items-center px-6 md:px-20 py-20">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white z-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Hello, It's Me</h3>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">Pranay Salunke</h1>
         <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
  And I'm a 
  <div className="relative h-[40px] overflow-hidden">
    <AnimatePresence mode="wait">
      <motion.span
        key={titles[index]}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[#00eeff] drop-shadow-[0_0_10px_#00eeff] block"
      >
        {titles[index]}
      </motion.span>
    </AnimatePresence>
  </div>
</h3>
          
          <p className="text-gray-300 max-w-lg text-lg leading-relaxed mb-8">
            I'm a MERN Stack Developer with extensive experience in building complex web applications. 
            My expertise is to create intuitive Frontend designs, Backend logic, and many more....
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-10">
            {[
              { icon: <Facebook size={20} />, link: "https://facebook.com/pranav.salunke.395" },
              { icon: <Github size={20} />, link: "https://github.com/pranaysalunke5" },
              { icon: <Instagram size={20} />, link: "https://instagram.com/pranaysalunke5" },
              { icon: <Twitter size={20} />, link: "#" },
            ].map((social, i) => (
              <a 
                key={i}
                href={social.link}
                target="_blank"
                className="w-10 h-10 rounded-full border-2 border-[#00eeff] text-[#00eeff] flex items-center justify-center hover:bg-[#00eeff] hover:text-black hover:shadow-[0_0_20px_#00eeff] transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <button className="px-8 py-3 bg-[#00eeff] text-black font-bold rounded-full shadow-[0_0_20px_#00eeff] hover:shadow-[0_0_40px_#00eeff] transition-all duration-300">
            More About Me
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full flex justify-center items-center">
            <div className="absolute inset-0 rounded-full border-[6px] border-[#00eeff] shadow-[0_0_50px_#00eeff,inset_0_0_50px_#00eeff] animate-pulse"></div>
            
            <div className="w-[92%] h-[92%] rounded-full overflow-hidden border-4 border-[#020617] z-10">
              <img 
                 src={Photo}
                alt="Pranay Salunke" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;