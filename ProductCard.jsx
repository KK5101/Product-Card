import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: lightpink;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  margin: 20px;
`;

const Image = styled.img`
  width: 100px;
  height: auto;
  border-radius: 10px;
`;

const Info = styled.div`
  flex: 1;
  margin-left: 15px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin: 0;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: gray;
  margin: 5px 0;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: #000;
`;

const BuyButton = styled.button`
  background: black;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #444;
  }
`;

const ProductCard = ({ image, title, subtitle, price }) => {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Info>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Price>${price}.00</Price>
      </Info>
      <BuyButton>Buy</BuyButton>
    </Card>
  );
};

export default ProductCard;
