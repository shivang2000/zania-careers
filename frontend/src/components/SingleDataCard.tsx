import { useEffect, useState } from "react";
import data from "../data/data.json";
import { Spinner } from "./Spinner";

export interface ISingleDataCardProps {
  dataIndex: number;
}

const SingleDataCard = ({ dataIndex }: ISingleDataCardProps) => {
  const [showModal, setShowModal] = useState(false);

  const [hasImageLoaded, setHasImageLoaded] = useState(true);

  useEffect(() => {
    if (showModal) {
      const handleClick = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setShowModal(false);
        }
      };
      document.addEventListener("keydown", handleClick);

      return () => {
        document.removeEventListener("keydown", handleClick);
      };
    }
  }, [showModal]);

  return (
    <div className="flex flex-col h-80 ">
      <div>{data[dataIndex]?.title}</div>
      <div className="h-full w-full relative">
        <div>
          {hasImageLoaded && (
            <div className="absolute top-1/2 left-1/2 transform-top-left-1/2-1/2">
              <Spinner size="xlarge" />
            </div>
          )}
        </div>
        <img
          src={data[dataIndex].img_url}
          alt={data[dataIndex].title}
          // width={"100%"}
          // height={"100%"}
          // style={{
          //   objectFit: "cover",
          // }}
          className="max-h-72"
          onLoad={() => {
            setHasImageLoaded(false);
          }}
          onClick={() => setShowModal(true)}
        ></img>
      </div>

      {/* Full screen mode of component */}
      {showModal && (
        <div className="fixed inset-0 z-10 bg-slate-100/50 w-full h-full ">
          <div className="flex items-center justify-center w-full h-full">
            <img
              src={data[dataIndex].img_url}
              alt={data[dataIndex].title}
              // width={"100%"}
              // height={"128px"}
              // height={"128px"}
              // onLoad={() => {}}
              onClick={() => setShowModal(true)}
            ></img>
          </div>
        </div>
      )}
    </div>
  );
};
export default SingleDataCard;
