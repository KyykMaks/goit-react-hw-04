import { useState} from "react";
import css from './ImageGallery.module.css';
import { ImageModal } from '../ImageModal/ImageModal';
import { ImageCard } from "../ImageCard/ImageCard";

export const ImageGallery = ({items}) => {
	const [selected,setSelected] = useState(null)

	const openModal = image =>{
		setSelected(image);
	};

	const closeModal = () =>{
		setSelected(null);
	};

	return (
		<div className={css.gallery}>
			<ul className={css.galleryList}>
			{items.map((item, index) => (
          <li className={css.galleryItem} key={`${item.id}_${index}`}>
            <ImageCard item={item} onClick={openModal} />
          </li>
        ))}
			</ul>
			<ImageModal
        isOpen={!!selected}
        image={selected}
        onRequestClose={closeModal}
      />
		</div>
	)
}