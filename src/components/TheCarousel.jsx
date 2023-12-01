import {useState} from "react";
import style from "../css/modules/Carousel.module.css";
import carouselData from "../assets/db/data.js";

function TheCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () =>
		setCurrentSlide((prev) => (prev + 1) % carouselData.length);

	const prevSlide = () =>
		setCurrentSlide(
			(prev) => (prev - 1 + carouselData.length) % carouselData.length,
		);

	return (
		<div className={style.carousel}>
			<div className={style.image}>
				<img src={`/${carouselData[currentSlide].image}`} alt="Slide" />
				<button
					className={`${style.btnCarousel} ${style.btnPrev}`}
					onClick={prevSlide}>
					Prev
				</button>
				<button
					className={`${style.btnCarousel} ${style.btnNext}`}
					onClick={nextSlide}>
					Next
				</button>
				<p className={style.text}>{carouselData[currentSlide].text}</p>
			</div>
		</div>
	);
}
export default TheCarousel;
