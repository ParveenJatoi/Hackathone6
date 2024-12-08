
import Hero from "./components/hero";
import BrowseRangeComponent from "./components/browseRange";
import OurProducts from "./components/ourproducts";
import Rooms from "./components/rooms";
import ImageGallery from "./components/gallery";

export default function Home() {
  return (
    <div>
      <Hero/>
      <BrowseRangeComponent/>
      <OurProducts/>
      <Rooms/>
      <ImageGallery/>

    </div>

  )
}