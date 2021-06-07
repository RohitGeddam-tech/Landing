import {Helmet} from "react-helmet";
import banner from "../images/Banner-min.webp";

const Preload = () => (
  <Helmet>
    <link
      rel="preload"
      as="image"
      href={banner}
      type="image/webp"
      crossOrigin="anonymous"
    />
  </Helmet>
);

export default Preload;
