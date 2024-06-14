"use client";

import { useEffect } from "react";
import Image from "next/image";

import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import styles from "../styles/Splide.module.css";

export default function SplideComponent() {
    useEffect(() => {
        const splide = new Splide(".splide", {
            // Splide.js options here
            type: "loop", // Example option
            // perPage: 3, // Example option
        });
        splide.mount();
        return () => {
            splide.destroy(); // Clean up Splide on unmount
        };
    }, []);

    // size 9/16
    const width = window.innerWidth;
    const height = (width * 9) / 16;
    const cards = [];
    for (let i = 0; i < 10; i++) {
        const imageUrl = `https://picsum.photos/200/300?random=${i}`;
        cards.push(
            <li className="splide__slide" key={i}>
                <div className={styles.card}>
                    <div className={styles.imageWraper}>
                        <Image
                            src={imageUrl}
                            alt="Random"
                            width={width}
                            height={height}
                            priority={true}
                        />
                    </div>
                </div>
            </li>
        );
    }

    return (
        <div className={styles.container}>
            <div className="splide">
                <div className="splide__track">
                    <ul className="splide__list">{cards}</ul>
                </div>
            </div>
        </div>
    );
}
