import {useState} from "react";
import style from "../css/modules/Carousel.module.css";
import carouselData from "../assets/db/data.js";

function TheCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0);

	function nextSlide() {
		setCurrentSlide((prev) => (prev + 1) % carouselData.length);
	}

	function prevSlide() {
		setCurrentSlide(
			(prev) => (prev - 1 + carouselData.length) % carouselData.length,
		);
	}

	function handleKeyDown(e) {
		if (e.key === "ArrowRight") {
			nextSlide();
		} else if (e.key === "ArrowLeft") {
			prevSlide();
		}
	}

	return (
		<div className={style.carousel} onKeyDown={handleKeyDown}>
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
			<p>Usare i tasti freccia destra e sinistra per scorrere il carosello</p>
			<p>(Prima però bisogna cliccare sui buttons...)</p>
		</div>
	);
}
export default TheCarousel;
