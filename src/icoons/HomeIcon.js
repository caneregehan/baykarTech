import React from "react";
import Svg, { Path } from "react-native-svg";

export default function HomeIcon({ w = "100%", h = "100%", fill = "#CDD0E3" }) {
  return (
    <Svg width={w} height={h} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M28.3914 10.8558L19.8744 2.29708C16.8114 -0.765694 11.8613 -0.765694 8.79828 2.29708L0.281336 10.8558C0.00698144 11.1295 -0.0754371 11.5427 0.0727705 11.9015C0.220978 12.2603 0.570381 12.4934 0.956959 12.4914H2.40034V21.8216C2.40597 25.603 5.45504 28.667 9.21799 28.6727H10.6818C11.2093 28.6671 11.6339 28.2358 11.6339 27.7057V19.8465H17.0388V27.7057C17.0388 28.2358 17.4634 28.6671 17.9909 28.6727H19.4547C23.2177 28.667 26.2667 25.603 26.2724 21.8216V12.4914H27.7157C28.1023 12.4934 28.4517 12.2603 28.5999 11.9015C28.7481 11.5427 28.6657 11.1295 28.3914 10.8558Z"
        fill={fill}
      />
    </Svg>
  );
}