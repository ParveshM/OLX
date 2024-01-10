import { FaRegHeart } from "react-icons/fa";
const Cards = () => {
  return (
    <div className="relative shadow-md">
      <img
        className="p-5 overflow-hidden"
        src="https://apollo.olx.in/v1/files/p7yysv6y9apl1-IN/image;s=780x0;q=60"
        alt="Card"
      />
      <div className="absolute top-5 right-6 bg-white rounded-3xl px-2 py-2">
        <FaRegHeart style={{ fontSize: "1.5rem" }} />
      </div>
      <div className="px-6 ">
        <div className="font-bold text-xl mb-1">1055</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          quis hendrerit dui.
        </p>
        <div className="flex justify-between mb-2">
          <h2>place</h2>
          <h2>Dec 12</h2>
        </div>
      </div>
    </div>
  );
};

export default Cards;
