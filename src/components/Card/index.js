import React from "react";
import style from "./style.module.scss";
import cloth from "../../assets/images/cloth.jpg";
import { imgURL } from "../../utils/axiosInstance";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

const CardComponent = ({ item }) => {
  const {
    title: productTitle,
    brand: { name: BrandName },
    activePrice: { maxListPrice: productPrice },
    customerReviews: reviews,
    productMainImage: { mediumImg: productImage },
  } = item;
  return (
    <div className={style.cardMainContainer}>
      <div className={style.imgContainer}>
        <img src={`${imgURL}/${productImage}`} alt="" />
      </div>
      <div className={style.cardBodyContainer}>
        <div>
          <p className={style.title}>{productTitle}</p>
          <p className={style.description}>{BrandName}</p>
        </div>
        <div>
          <div>
            <span>
              {Math.ceil(reviews?.average) > 0 ? (
                <AiTwotoneStar />
              ) : (
                <AiOutlineStar />
              )}
              {Math.ceil(reviews?.average) > 1 ? (
                <AiTwotoneStar />
              ) : (
                <AiOutlineStar />
              )}
              {Math.ceil(reviews?.average) > 2 ? (
                <AiTwotoneStar />
              ) : (
                <AiOutlineStar />
              )}
              {Math.ceil(reviews?.average) > 3 ? (
                <AiTwotoneStar />
              ) : (
                <AiOutlineStar />
              )}
              {Math.ceil(reviews?.average) > 4 ? (
                <AiTwotoneStar />
              ) : (
                <AiOutlineStar />
              )}
            </span>
            <span>&nbsp;&nbsp;&nbsp;({reviews?.count})</span>
          </div>
          <p className={style.price}>${productPrice}</p>

          <div className={style.btnContainer}>
            <button className={style.btn}> Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
