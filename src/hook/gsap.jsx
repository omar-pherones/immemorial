import { gsap } from 'gsap';
import { useEffect } from 'react';
import { Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
// navbar animation
export const useGsapDownStagger = (arr, delay = 0) => {
    useEffect(() => {
        const el = arr.map((item) => item.current);
        gsap.fromTo(
            el,
            {
                y: '-100%',
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: Expo.easeInOut,
                stagger: 0.3,
                delay: delay,
            }
        );
    }, []);
};

// hero section text animation
export const useGsapShutterUnveil = (item, delay = delay, trig) => {
    useEffect(() => {
        const el = item.current;
        gsap.fromTo(
            el,
            {
                height: '100%',
            },
            {
                height: 0,
                duration: 2,
                delay: delay,
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: trig.current,
                    toggleActions: 'play reverse play reverse',
                },
            }
        );
    }, []);
};

// hero section photo droping animation

export const useGsapPhotoDropping = (arr) => {
    useEffect(() => {
        const el = arr.map((item) => item.current);
        gsap.fromTo(
            el,
            {
                y: '-100vh',
                scale: 0,
            },
            {
                y: 0,
                scale: 1,
                delay: 2.2,
                duration: 2,
                stagger: 0.2,
                ease: Expo.easeInOut,
            }
        );
    }, []);
};

// hero section photo scrolling animation
export const useGsapPhotoLevitate = (arr, trig) => {
    useEffect(() => {
        const el = arr.map((item) => item.current);
        gsap.fromTo(
            el,
            {
                y: 0,
            },
            {
                y: '-30%',
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: trig.current,
                    scrub: 1,
                    toggleActions: 'play reverse play reverse',
                },
            }
        );
    }, []);
};

// featured section photo  animation
export const useGsapFeaturedLeftShutter = (item, trig) => {
    useEffect(() => {
        const el = item.current;
        gsap.fromTo(
            el,
            {
                height: '100%',
            },
            {
                height: 0,
                duration: 1.2,
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: trig.current,
                    start: 'top center',
                    end: 'bottom center',
                    toggleActions: 'play reverse play reverse',
                },
            }
        );
    }, []);
};

export const useGsapFeaturedRightShutter = (item, trig) => {
    useEffect(() => {
        const el = item.current;
        gsap.fromTo(
            el,
            {
                width: '100%',
            },
            {
                width: 0,
                duration: 1.2,
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: trig.current,
                    start: 'top center',
                    end: 'bottom center',
                    toggleActions: 'play reverse play reverse',
                },
            }
        );
    }, []);
};

// Galllery section  animation
export const useGsapGalleryImg = (item) => {
    useEffect(() => {
        const el = item.current;
        gsap.fromTo(
            el,
            {
                x: 0,
                width: 0,
            },
            {
                x: '30%',
                width: '100%',
                duration: 1,
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: el,
                    start: 'top center',
                    end: 'bottom top',
                    toggleActions: 'play reverse play reverse',
                },
            }
        );
    }, []);
};
export const useGsapGalleryTitle = (item, trig) => {
    useEffect(() => {
        const el = item.current;
        gsap.fromTo(
            el,
            {
                x: '30%',
            },
            {
                x: 0,
                duration: 1,
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: trig.current,
                    start: 'top center',
                    end: 'bottom top',
                    toggleActions: 'play reverse play reverse',
                },
            }
        );
    }, []);
};
export const useGsapGalleryCategory = (item, trig) => {
    useEffect(() => {
        const el = item.current;
        gsap.fromTo(
            el,
            {
                x: '-100vw',
            },
            {
                x: 0,
                duration: 1,
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: trig.current,
                    start: 'top center',
                    end: 'bottom top',
                    toggleActions: 'play reverse play reverse',
                },
            }
        );
    }, []);
};

// Footer animation

export const useGsapFooterHeadline = (item, trig) => {
    useEffect(() => {
        const el = item.current;

        gsap.fromTo(
            el,
            {
                y: '-100%',
            },
            {
                y: 0,
                duration: 1,
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: trig.current,
                    toggleActions: 'play',
                },
            }
        );
    }, []);
};

// Not Found;

export const useGsapNotFoundHeadline = (item) => {
    useEffect(() => {
        const el = item.current;

        gsap.fromTo(
            el,
            {
                x: '-100vw',
            },
            {
                x: 0,
                duration: 1.5,
                ease: Expo.easeInOut,
            }
        );
    }, []);
};

export const useGsapNotFoundHeadlineRight = (item) => {
    useEffect(() => {
        const el = item.current;

        gsap.fromTo(
            el,
            {
                x: '100vw',
            },
            {
                x: 0,
                duration: 1.5,
                ease: Expo.easeInOut,
            }
        );
    }, []);
};

export const useGsapNotFoundImg = (item) => {
    useEffect(() => {
        const el = item.current;

        gsap.fromTo(
            el,
            {
                scale: 0,
                borderRadius: '50%',
            },
            {
                scale: 1,
                borderRadius: 0,
                duration: 4,
                delay: 1,
                ease: 'elastic',
            }
        );
    }, []);
};
