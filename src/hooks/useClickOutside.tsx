import { RefObject, useEffect } from "react";

export default function useClickOutside(ref: RefObject<any>, func: () => void) {
	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			// This makes sure that the popup doesn't close when we click on it but closes when we click outside
			if (ref.current && !ref.current.contains(event.target as Node)) {
				func();
			}
		};

		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener); //For touchscreens

		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref]);
}
