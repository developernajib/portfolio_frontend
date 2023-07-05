import { Html, useProgress } from "@react-three/drei";
import { ReactComponent as LoaderSVG } from "../../assets/loader.svg";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{  }}>
      <LoaderSVG />
      </div>
      <p
        style={{
          fontSize: 14,
          color: "var(--secondary-color)",
          fontWeight: 800,
          marginTop: "-15px",
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;