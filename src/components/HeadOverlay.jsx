import earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import right from "../assets/shared/desktop/icon-arrow-right.svg";

function HeadOverlay() {
  return (
    <div>
      <div className="flex flex-col py-12 pt-16 ">
        <div className="flex flex-col items-center bg-[#f1f1f1] mx-auto w-4/5 rounded-xl relative mb-16">
          <img
            src={earphones}
            alt="earphone image"
            className="w-36 h-34 -mt-10"
          />
          <h1 className="font-semibold">EARPHONES</h1>
          <div className="flex items-center mt-2 mb-6">
            <span className="text-[#00000080] mr-2">SHOP</span>
            <img src={right} alt="none" />
          </div>{" "}
        </div>
        <div className="flex flex-col items-center bg-[#f1f1f1] mx-auto w-4/5 rounded-xl relative mb-16">
          <img
            src={headphones}
            alt="earphone image"
            className="w-36 h-34 -mt-10"
          />
          <h1 className="font-semibold">HEADPHONES</h1>
          <div className="flex items-center mt-2 mb-6">
            <span className="text-[#00000080] mr-2">SHOP</span>
            <img src={right} alt="none" />
          </div>{" "}
        </div>
        <div className="flex flex-col items-center bg-[#f1f1f1] mx-auto w-4/5 rounded-xl relative">
          <img
            src={speakers}
            alt="earphone image"
            className="w-36 h-34 -mt-10"
          />
          <h1 className="font-semibold">SPEAKERS</h1>
          <div className="flex items-center mt-2 mb-6">
            <span className="text-[#00000080] mr-2">SHOP</span>
            <img src={right} alt="none" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadOverlay;
