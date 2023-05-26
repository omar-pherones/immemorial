import { useRef } from 'react';
import {
    useGsapGalleryCategory,
    useGsapGalleryImg,
    useGsapGalleryTitle,
} from '../../hook/gsap';

const GalleryItem = ({ src, title, category }) => {
    const galleryTitleRef = useRef(null);
    const galleryCategoryRef = useRef(null);
    const galleryImageRef = useRef(null);
    useGsapGalleryTitle(galleryTitleRef, galleryImageRef);
    useGsapGalleryCategory(galleryCategoryRef, galleryImageRef);
    useGsapGalleryImg(galleryImageRef);
    return (
        <div className="gallery-item">
            <h1 className="gallery-item-title" ref={galleryTitleRef}>
                {title}
            </h1>
            <p className="gallery-item-category" ref={galleryCategoryRef}>
                {category}
            </p>
            <div
                style={{ backgroundImage: `url(${src})` }}
                className="gallery-item-image"
                ref={galleryImageRef}
            ></div>
        </div>
    );
};

export default GalleryItem;
