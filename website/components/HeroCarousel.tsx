import { Box, Flex } from "@chakra-ui/core";
import useInterval from "@use-it/interval";
import React, { useState } from "react";

interface HeroCarouselProps {
	imageUrlList: string[];
	enableTransition: boolean;
	[prop: string]: any;
}
const HeroCarousel = ({
	imageUrlList,
	enableTransition,
}: HeroCarouselProps) => {
	const [activeSlide, setActiveSlide] = useState(1);
	const [shouldTransition, setShouldTransition] = useState(true);
	const intervalDuration = 5000;
	const x = -(100 / imageUrlList.length) * (activeSlide - 1);

	if (enableTransition) {
		useInterval(() => {
			setActiveSlide((current) => {
				if (!shouldTransition) {
					setShouldTransition(true);
				}

				let next = current + 1;

				// loop back to image 1 once it reaches the end
				if (next > imageUrlList.length) {
					setShouldTransition(false);
					next = 1;
				}
				return next;
			});
		}, intervalDuration);
	}

	return (
		<Flex
			transform={`translateX(${x}%)`}
			transition={shouldTransition ? "transform 200ms" : undefined}
			top="0"
			position="absolute"
			w={`calc(100% * ${imageUrlList.length})`}
			h="100%"
		>
			{imageUrlList.map((image, index) => (
				<Box
					key={index}
					width="100%"
					height="100%"
					backgroundImage={`url(${image})`}
					backgroundSize={["100%", "cover"]}
					style={{ backgroundBlendMode: "overlay" }}
					backgroundColor="gray.600"
				/>
			))}
		</Flex>
	);
};
