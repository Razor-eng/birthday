"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Fireworks from "fireworks-js"; // Fireworks library
import dynamic from "next/dynamic"; // Import dynamic from next

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
import { useSpring, animated } from "react-spring"; // React-Spring for smooth transitions

import gsap from "gsap"; // GSAP for animations
import AOS from "aos"; // AOS for scroll-based animations
import "aos/dist/aos.css"; // Import AOS styles

// Import the Lottie animation JSON files
import cakeAnimation from "../../../public/cake-animation.json"; // Cake animation
import confettiAnimation from "../../../public/confetti.json"; // Confetti animation
import Image from "next/image";
import Link from "next/link";

const WishPage = () => {
    const { name } = useParams();
    const [greeting, setGreeting] = useState("");

    const { opacity, transform } = useSpring({
        opacity: 1,
        transform: "translateY(0)",
        from: { opacity: 0, transform: "translateY(50px)" },
        config: { tension: 150, friction: 25 }
    });

    // GSAP animation for the balloons
    useEffect(() => {
        gsap.fromTo(".balloon",
            { y: 0, opacity: 0 },
            { opacity: 1, y: -20, stagger: 0.2, duration: 1 }
        );

        // Initialize AOS (Animate On Scroll) library
        AOS.init({ duration: 1000 });

        // Start fireworks animation
        const fireworkCanvas = document.getElementById("fireworks-canvas");
        const fireworks = new Fireworks(fireworkCanvas, {
            speed: 5,
            acceleration: 1.1,
            friction: 0.97,
            gravity: 1.5,
            particles: 200,
            trace: 3,
            explosion: 5
        });
        fireworks.start();

        if (name) {
            setGreeting(`Happy Birthday, ${name}! 🎉🎂`);
        }

        return () => fireworks.stop(); // Cleanup fireworks on component unmount
    }, [name]);

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen overflow-hidden bg-gradient-to-r from-[#89CFF0] via-[#E3BC9A] to-[#F4C2C2] text-white text-center relative">

            {/* Fireworks Canvas */}
            <canvas
                id="fireworks-canvas"
                className="absolute top-0 left-0 w-full h-full hidden md:block"
                style={{ pointerEvents: "none" }}
            ></canvas>

            {/* Lottie Cake Animation */}
            <div className="absolute top-10" data-aos="fade-up">
                <Lottie
                    options={{
                        animationData: cakeAnimation,
                        loop: true,
                        autoplay: true,
                        rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
                    }}
                    height={150}
                    width={150}
                />
            </div>

            {/* Lottie Confetti Animation */}
            <div className="absolute top-0" data-aos="fade-down">
                <Lottie
                    options={{
                        animationData: confettiAnimation,
                        loop: true,
                        autoplay: true,
                        rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
                    }}
                    height={300}
                    width={300}
                />
            </div>

            {/* Greeting Message with React Spring */}
            <animated.h1 style={{ opacity, transform }} className="text-5xl md:text-7xl font-bold mb-4 animate__animated animate__fadeInUp">
                {greeting}
            </animated.h1>

            {/* Animated Birthday Message */}
            <p className="text-xl md:text-3xl mb-6 animate__animated animate__fadeInUp animate__delay-1s">
                Wishing you a day filled with love, joy, and laughter!
            </p>

            {/* Realistic Floating Balloons with GSAP */}
            <div className="absolute grid grid-cols-2 lg:flex gap-5 z-10">
                <div className="balloon balloon-red flex items-center justify-center">
                    <Image
                        src="/naruto.gif"
                        alt="naruto"
                        width={200}
                        height={200}
                        className="size-28"
                        unoptimized
                        priority
                    />
                </div>
                <div className="balloon balloon-yellow flex items-center justify-center">
                    <Image
                        src="/kushina.gif"
                        alt="kushina"
                        width={200}
                        height={200}
                        className="size-24 rounded-xl"
                        unoptimized
                        priority
                    />
                </div>
                <div className="balloon balloon-green flex items-center justify-center">
                    <Image
                        src="/mikasa.gif"
                        alt="mikasa"
                        width={200}
                        height={200}
                        className="size-24 rounded-xl"
                        unoptimized
                        priority
                    />
                </div>
                <div className="balloon balloon-blue flex items-center justify-center">
                    <Image
                        src="/sawako.gif"
                        alt="sawako"
                        width={200}
                        height={200}
                        className="size-24 rounded-xl"
                        unoptimized
                        priority
                    />
                </div>
            </div>

            {/* "Celebrate Again" Button */}
            <Link
                href={`/more/${name}`}
                className="mb-64 md:mb-0 md:mt-10 px-6 py-2 bg-[#F4C2C2] text-black font-semibold rounded-md shadow-lg hover:bg-[#F4C2f5] transition duration-300 z-50 hover:cursor-pointer"
            >
                Please Click!
            </Link>
        </div>
    );
};

export default WishPage;