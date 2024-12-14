"use client"
import { useEffect, useState } from 'react';
import { motion, easeInOut, easeOut } from 'framer-motion';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Moon from '@/app/components/Moon';

const generateConfetti = () => {
    const confetti = [];
    for (let i = 0; i < 30; i++) {
        confetti.push(
            <motion.div
                key={i}
                className="w-2.5 h-2.5 rounded-full bg-yellow-400"
                style={{
                    left: `${Math.random() * 100}vw`,
                    top: `${Math.random() * -100}px`,
                }}
                initial={{
                    opacity: 0,
                    y: -100,
                    x: 0,
                }}
                animate={{
                    opacity: 1,
                    y: '100vh',
                    x: `${Math.random() * 30 - 15}vw`,
                }}
                transition={{
                    duration: 5 + Math.random() * 5,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: easeInOut,
                }}
            />
        );
    }
    return confetti;
};

const generateSparkles = () => {
    const sparkles = [];
    for (let i = 0; i < 20; i++) {
        sparkles.push(
            <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-white absolute"
                style={{
                    left: `${Math.random() * 100}vw`,
                    top: `${Math.random() * -50}px`,
                }}
                initial={{
                    opacity: 0,
                    y: -50,
                    scale: Math.random() * 0.8 + 0.2,
                }}
                animate={{
                    opacity: 1,
                    y: '100vh',
                    scale: Math.random() * 1.2 + 0.5,
                }}
                transition={{
                    duration: 4 + Math.random() * 4,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: easeOut,
                }}
            />
        );
    }
    return sparkles;
};

// Generate hearts similar to confetti
const generateHearts = () => {
    const hearts = [];
    for (let i = 0; i < 30; i++) {
        hearts.push(
            <motion.div
                key={i}
                className="w-6 h-6 text-red-500 absolute"
                style={{
                    left: `${Math.random() * 100}vw`,
                    top: `${Math.random() * -100}px`,
                }}
                initial={{
                    opacity: 0,
                    y: -100,
                    x: 0,
                }}
                animate={{
                    opacity: 1,
                    y: '100vh',
                    x: `${Math.random() * 30 - 15}vw`,
                }}
                transition={{
                    duration: 4 + Math.random() * 4,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: easeInOut,
                }}
            >
                ❤️
            </motion.div>
        );
    }
    return hearts;
};

export default function Message() {
    const { name } = useParams();
    const [confettiElements, setConfettiElements] = useState([]);
    const [sparklesElements, setSparklesElements] = useState([]);
    const [heartsElements, setHeartsElements] = useState([]);

    useEffect(() => {
        setConfettiElements(generateConfetti());
        setSparklesElements(generateSparkles());
        setHeartsElements(generateHearts()); // Add hearts rain effect
    }, []);

    return (
        <div className="relative h-screen w-screen bg-gradient-to-r from-pink-300 via-blue-300 to-amber-100 flex items-center justify-center overflow-hidden">
            {/* Confetti Container */}
            <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
                {confettiElements}
            </div>

            {/* Sparkles Container */}
            <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
                {sparklesElements}
            </div>

            {/* Hearts Rain Container */}
            <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none">
                {heartsElements} {/* Add the hearts rain effect */}
            </div>

            {/* Sweet Birthday Message */}
            <motion.div
                className="text-center text-white font-extrabold"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 2,
                    ease: easeOut,
                }}
            >
                <motion.h1
                    className="text-6xl md:text-8xl mb-4 text-pink-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: easeInOut,
                    }}
                >
                    Happy Birthday, <span className="text-yellow-300">{name}</span>
                </motion.h1>

                <motion.p
                    className="text-2xl md:text-4xl font-light text-gray-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 1,
                        ease: easeInOut,
                    }}
                >
                    Wishing you a day filled with love, laughter, and endless joy. 🎉🎂
                </motion.p>

                {/* Glowing Effect on the text */}
                <motion.p
                    className="mt-6 text-xl font-semibold text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: 1,
                        scale: 1.1,
                        textShadow: '0 0 8px rgba(255, 255, 255, 0.6)',
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        delay: 2,
                        ease: easeInOut,
                    }}
                >
                    You deserve all the happiness in the world! ✨🌟
                </motion.p>

                {/* Additional Sweet Message */}
                <motion.p
                    className="mt-6 text-xl font-semibold text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1.1 }}
                    transition={{
                        duration: 2,
                        ease: easeInOut,
                    }}
                >
                    May this year be filled with dreams come true and unforgettable memories! 💖🎈
                </motion.p>
            </motion.div>

            {/* Floating Hearts (same as before) */}
            <motion.div
                className="absolute bottom-0 left-1/4 h-16 flex items-center justify-center text-red-500 animate-floatingHeart"
                initial={{ bottom: 0 }}
                animate={{ bottom: '300px' }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 6,
                    ease: easeInOut,
                }}
                style={{ zIndex: 30 }}
            >
                <Image
                    src="/more_naruto.gif"
                    alt="naruto"
                    width={200}
                    height={200}
                    className="size-24"
                    unoptimized
                    priority
                />
            </motion.div>
            <motion.div
                className="absolute top-0 flex items-center justify-center animate-floatingHeart"
                initial={{ top: 0 }}
                animate={{ top: '300px' }}
                transition={{
                    repeatType: 'reverse',
                    duration: 6,
                    delay: 1,
                    ease: easeInOut,
                }}
                style={{ zIndex: 30 }}
            >
                <Image
                    src="/more_mikasa.gif"
                    alt="mikasa"
                    width={200}
                    height={200}
                    className="size-40"
                    unoptimized
                    priority
                />
            </motion.div>
            <motion.div
                className="absolute top-0 right-0 size-32 flex items-center justify-center animate-floatingHeart"
                initial={{ top: '-200px' }}
                animate={{ top: '0px' }}
                transition={{
                    repeatType: 'reverse',
                    duration: 4,
                    delay: 2,
                    ease: easeInOut,
                }}
                style={{ zIndex: 30 }}
            >
                <Moon />
            </motion.div>

            <div className="absolute top-10 left-4">
                <h1 className="text-sm font-bold text-rose-500 text-shadow-lg transform transition duration-500 ease-in-out hover:scale-110 hover:text-purple-400 animate-bounce">
                    Never forget to smile! 😊
                </h1>
            </div>

            <style jsx>{`
        @keyframes floatingHeart {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-50px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes floatingGiftBox {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-70px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
}
