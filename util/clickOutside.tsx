import { useEffect } from "react";

const useClickOutside = (
  closeModel: () => void,
  ref: React.RefObject<HTMLDivElement>,
  activeCheck: boolean
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref && ref.current && !ref.current.contains(e.target as Element)) {
        if (activeCheck) {
          e.stopPropagation();
        }

        closeModel();
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [activeCheck, closeModel, ref]);
};

export default useClickOutside;
