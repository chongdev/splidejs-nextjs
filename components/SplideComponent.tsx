"use client";

import { useEffect } from "react";

import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function SplideComponent() {
    useEffect(() => {
        const splide = new Splide(".splide", {
            // Splide.js options here
            type: "loop", // Example option
            perPage: 3, // Example option
        });
        splide.mount();
        return () => {
            splide.destroy(); // Clean up Splide on unmount
        };
    }, []);

    return (
        <div>
            <div className="splide">
                <div className="splide__track">
                    <ul className="splide__list">
                        <li className="splide__slide">Slide 1</li>
                        <li className="splide__slide">Slide 2</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
