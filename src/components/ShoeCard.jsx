import React from "react";

const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImg }) => {

    const handleClick = () => {
        if(bigShoeImg !== imgUrl.bigShoe) {
            changeBigShoeImage(imgUrl.bigShoe)
        }
    }

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgUrl.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
        <div className="bg-card bg-center flex justify-center items-center bg-cover sm:h-40 sm:w-40 rounded-xl max-sm:p-4">
            <img src={imgUrl.thumbnail} alt="thumbnail" />
        </div>
    </div>
  );
};

export default ShoeCard;
