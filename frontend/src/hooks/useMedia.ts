import { useMediaQuery } from "react-responsive";

function useMedia() {
  const desktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const laptop = useMediaQuery({ query: "(max-width: 1023px)" });
  const mobile = useMediaQuery({ query: "(max-width: 767px)" });

  return {
    desktop,
    laptop,
    mobile,
  };
}

export { useMedia };
