import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });
  if (view) {
    controls.start("after");
  } else {
    controls.start("before");
  }
  return [controls, element];
};
export default useScroll;
