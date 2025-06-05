import earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";

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
          <span className="text-[#d87d4a] mt-2 mb-6">SHOP</span>
        </div>
        <div className="flex flex-col items-center bg-[#f1f1f1] mx-auto w-4/5 rounded-xl relative mb-16">
          <img
            src={headphones}
            alt="earphone image"
            className="w-36 h-34 -mt-10"
          />
          <h1 className="font-semibold">HEADPHONES</h1>
          <span className="text-[#d87d4a] mt-2 mb-6">SHOP</span>
        </div>
        <div className="flex flex-col items-center bg-[#f1f1f1] mx-auto w-4/5 rounded-xl relative">
          <img
            src={speakers}
            alt="earphone image"
            className="w-36 h-34 -mt-10"
          />
          <h1 className="font-semibold">SPEAKERS</h1>
          <span className="text-[#d87d4a] mt-2 mb-6">SHOP</span>
        </div>
      </div>
    </div>
  );
}

export default HeadOverlay;
