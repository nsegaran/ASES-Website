import WhatYoullDoComponent from "../../../components/WhatYoullDoComponent";
import data from "../../../textContent/bootcampWhatYoullDo.json";

export default function BootcampWhatYoullDo() {
  return (
    <div>
      <div>
        <h1>What you'll do</h1>
      </div>
      <div>
        {data.map((d) => {
          return (
            <WhatYoullDoComponent header={d.header} text={d.text} img={d.img} />
          );
        })}
      </div>
    </div>
  );
}
