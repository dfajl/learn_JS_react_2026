import { useEffect, useState } from "react";

const getScrollProgress = () => {
	const scrollTop = window.scrollY;
	const scrollHeight =
		document.documentElement.scrollHeight - window.innerHeight;

	return scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
};

export const useScrollProgress = () => {
	const [scrollProgress, setScrollProgress] = useState(getScrollProgress);

	useEffect(() => {
		const handleScroll = () => {
			setScrollProgress(getScrollProgress());
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return scrollProgress;
};
