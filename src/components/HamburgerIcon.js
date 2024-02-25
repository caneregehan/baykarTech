import React from "react";
import Svg, { Path } from "react-native-svg";

export default function HamburgerIcon({ w = "100%", h = "100%", fill = "#CDD0E3" }) {
  return (
    <Svg width={w} height={h} viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32 0V5.22135H8.64583V0H32ZM5.5026 20.0156V25.237H0V20.0156H5.5026ZM5.5026 10.0078V15.2292H0V10.0078H5.5026ZM5.5026 0V5.22135H0V0H5.5026ZM32 20.0156V25.237H8.64583V20.0156H32ZM32 10.0078V15.2292H8.64583V10.0078H32Z"
        fill={fill}
      />
    </Svg>
  );
}
