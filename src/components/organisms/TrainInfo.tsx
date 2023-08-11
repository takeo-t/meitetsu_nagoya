import { Station } from "../../type"

type TrainKey = "rpdLtdExp" | "limitedExp" | "rpdExp" | "exp" | "semiExp";

export const TrainInfo: React.FC<Station> = (props) => {
    const trainMapping: { name: string, key: TrainKey }[] = [
        { name: "快速特急", key: "rpdLtdExp" },
        { name: "特急", key: "limitedExp" },
        { name: "快速急行", key: "rpdExp" },
        { name: "急行", key: "exp" },
        { name: "準急", key: "semiExp" }
    ];

return (
    <div>
      {trainMapping.map((train) => (
        <div key={train.key}>
          {train.name} {props[train.key] ? "◯" : "×"}
        </div>
      ))}
    </div>
  );
}