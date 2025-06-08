import { useNavigate } from "react-router-dom";
import earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import right from "../assets/shared/desktop/icon-arrow-right.svg";

function HeadOverlay() {
  const navigate = useNavigate();

  const handleNavigate = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="flex flex-col py-12 pt-16 md:flex-row md:w-5/6 md:mx-auto ">
      {[
        { name: "earphones", img: earphones },
        { name: "headphones", img: headphones },
        { name: "speakers", img: speakers },
      ].map((item) => (
        <div
          key={item.name}
          onClick={() => handleNavigate(item.name)}
          className="flex flex-col items-center bg-[#f1f1f1] mx-auto w-5/6 rounded-xl relative mb-16 cursor-pointer transition hover:scale-105"
        >
          <img
            src={item.img}
            alt={`${item.name} image`}
            className="w-36 h-34 -mt-10"
          />
          <h1 className="font-semibold uppercase">{item.name}</h1>
          <div className="flex items-center mt-2 mb-6">
            <span className="text-[#00000080] mr-2">SHOP</span>
            <img src={right} alt="arrow" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeadOverlay;
