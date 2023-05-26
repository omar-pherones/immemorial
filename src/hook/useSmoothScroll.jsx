import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const useSmoothScroll = () => {
    // const lenis = new Lenis({
    //     duration: 1.5,
    //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    //     direction: 'vertical',
    //     smooth: true,
    // });

    const lenis = new Lenis();

    lenis.on('scroll', (e) => {
        options: {
            duration: 1.5;
            easing: (t) => (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t));
            direction: 'vertical';
            smooth: true;
        }
    });

    useEffect(() => {
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);
};
