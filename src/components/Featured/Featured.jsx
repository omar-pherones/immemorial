import { useRef } from 'react';
import {
    useGsapFeaturedLeftShutter,
    useGsapFeaturedRightShutter,
} from '../../hook/gsap';

const Featured = () => {
    const featureRef = useRef();
    const featuredLeftShutter = useRef();
    const featuredRightShutter = useRef();
    useGsapFeaturedLeftShutter(featuredLeftShutter, featureRef);
    useGsapFeaturedRightShutter(featuredRightShutter, featureRef);
    return (
        <section className="featured wraper" ref={featureRef}>
            <h2 className="section-title">Featured</h2>
            <div className="features">
                <div className="feature-l">
                    <span className="feature-text">90'S TELEPHONE</span>
                    <img
                        src="https://images.pexels.com/photos/2587464/pexels-photo-2587464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="90'S TELEPHONE"
                    />
                    <span
                        className="feature-shutter-l"
                        ref={featuredLeftShutter}
                    ></span>
                </div>
                <div className="feature-r">
                    <span className="feature-text">90'S CASSETTE PLAYER</span>
                    <img
                        src="https://images.pexels.com/photos/6076410/pexels-photo-6076410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="90'S CASSETTE PLAYER"
                    />
                    <span
                        className="feature-shutter-r"
                        ref={featuredRightShutter}
                    ></span>
                </div>
            </div>
        </section>
    );
};

export default Featured;
