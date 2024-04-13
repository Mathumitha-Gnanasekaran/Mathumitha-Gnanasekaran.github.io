import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "../components/canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-[50vh] md:h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[110px] md:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-3'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Mathumitha Gnanasekaran</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Web Applications<br className='sm:block hidden' />
            and Mobile Applications
          </p>
        </div>
      </div>
      <div className="w-full h-full absolute -bottom-48 md:bottom-0">      
        <ComputersCanvas />
      </div>

      <div className='hidden absolute xs:-bottom-20 bottom-20 w-full sm:flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
