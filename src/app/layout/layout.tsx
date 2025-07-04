"use client";

import { ReactNode, useCallback, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import Navbar from "../components/navbar";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });

const PageLayout = ({ children }: { children: ReactNode }) => {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    const raf = useCallback(
        (time: number) => {
            lenis?.raf(time);
            requestAnimationFrame(raf);
        },
        [lenis]
    );

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });

        if (!lenis) {
            setLenis(new Lenis());
        }

        requestAnimationFrame(raf);

        return () => {
            lenis?.destroy();
        };
    }, [lenis, raf]);

    return (
        <div className={`pageLayout ${openSans.className}`}>
            <Navbar />
            <div className="App">{children}</div>
            {/* <Footer /> */}
        </div>
    );
};

export default PageLayout;
