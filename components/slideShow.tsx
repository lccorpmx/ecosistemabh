//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon,ArrowRightIcon } from '@heroicons/react/24/solid'
import promo from '../public/prueba.jpg'

const Slideshow = () => {
	//Array of Images
	const images = [
		"/prueba.jpg",
    "/prueba.jpg",
    "/prueba.jpg",
    "/prueba.jpg",
	];

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		scale: 1,
		duration: 5000,
		transitionDuration: 300,
		infinite: true,
		prevArrow: (
			<div className="ml-10 top-40 md:top-72">
				<ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />
			</div>
		),
		nextArrow: (
				<div className="mr-10 top-40 md:top-72">
				   <ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" />
			    </div>
		),
	};
	return (
		<div className="w-full h-screen">
			<Zoom {...zoomInProperties}>
				{images.map((each, index) => (
					<div key={index} className="flex justify-center md:items-center items-start w-100 h-100 relative">
						<img
							className="w-screen"
							src={each}
						/>
                        <p className="absolute md:top-80 top-40 inset-x-1/4 text-center z-10 md:text-2xl text-xl bold text-white">Promos del Dia</p>
					</div>
				))}
			</Zoom>
		</div>
	);
};

export default Slideshow;