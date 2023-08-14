import ZeroToOne from "./zerotoone";
import image from "../../../images/bootcamp-info.png";

export default function BootcampInfo() {
  return (
    <div className="w-full bg-[#FCFAFF] flex mobile:flex-col-reverse laptop:flex-row laptop:justify-around mobile:justify-center">
      <div>
        <p
          className="text-[#667085] laptop:w-3/4 laptop:p-24 mobile:p-6"
          style={{
            fontSize: "calc(10px + 1.5vmin)",
            fontWeight: "light",
          }}
        >
          ASES Bootcamp is a 12-week design-thinking intensive for Stanford
          freshmen and sophomores that serves as a stepping stone into the world
          of entrepreneurship. Following an innovative, action-oriented process,
          students will learn to identify and prototype impactful solutions to
          problems they’re interested in tackling. Bootcamp culminates in a
          final pitch presentation, in which teams of students pitch their
          startup ideas to a panel of Silicon Valley investors. This is your
          chance to join Stanford’s closest-knit startup community!
        </p>
        <img src={image} className="laptop:w-2/3" />
      </div>
      <ZeroToOne />
    </div>
  );
}
