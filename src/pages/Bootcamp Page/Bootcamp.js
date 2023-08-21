import BootcampHeader from "./sections/BootcampHeader";
import BootcampInfo from "./sections/BootcampInfo";
import BootcampWhatYoullDo from "./sections/BootcampWhatYoullDo";
import Footer from "../../components/Footer.js";
import TopBar from "../../components/TopBar.js";
import BootcampApply from "./sections/BootcampApply";

export default function Bootcamp() {
  return (
    <>
      <TopBar />
      <BootcampHeader />
      <BootcampInfo />
      <BootcampWhatYoullDo />
      <BootcampApply />
      <Footer />
    </>
  );
}
