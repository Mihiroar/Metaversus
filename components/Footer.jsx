import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
      yoyo: Infinity,
    },
  },
};

const socialIconVariants = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2,
      yoyo: Infinity,
    },
  },
};

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the Metaverse with Me.
        </h4>
        <motion.a
          href="https://mihiroar.me"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
          variants={buttonVariants}
          whileHover="hover"
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Enter Metaverse;)
          </span>
        </motion.a>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            METAVERSE
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 - 2024 Metaversus. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <img
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
