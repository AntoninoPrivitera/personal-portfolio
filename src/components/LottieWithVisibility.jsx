import { useRef, useEffect } from "react";
import Lottie from "react-lottie-player";

const LottieWithVisibility = ({
  animationData,
  play = false,
  loop = true,
  rendererSettings = { preserveAspectRatio: "xMidYMid slice" },
  style,
  threshold = 0.5,
}) => {
  const containerRef = useRef(null);
  const lottieRef = useRef();

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lottieRef.current?.play();
        } else {
          lottieRef.current?.stop();
        }
      },
      { threshold }
    );
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={containerRef} style={style}>
      <Lottie
        ref={lottieRef}
        animationData={animationData}
        play={play}
        loop={loop}
        rendererSettings={rendererSettings}
      />
    </div>
  );
};

export default LottieWithVisibility;