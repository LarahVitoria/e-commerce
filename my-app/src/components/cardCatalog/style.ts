import styled from "styled-components";

export const CardMedia = styled.div`
  width: 124px;
  height: 181px;
  >img{
    width: 100%;
    height: 100%;
  }
`;

export const ContainerName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  color: #111111;
  width: 100%;
  text-align: center;
`;

export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Price = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 0.7rem;
  line-height: 12px;
  text-align: right;
  text-decoration-line: line-through;
  text-transform: uppercase;
  color: #888888;
  margin: 0.5rem;
`;

export const Discount = styled.h4`
  color: #fff;
  font-style: normal;
  font-weight: normal;
  font-size: 0.7rem;
  line-height: 16px;
  padding: 0.5rem 1rem;
  background: #f79552;
  border-radius: 2px;
  margin: 0.5rem;
`;

export const ContainerMember = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DescriptionMember = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 0.7rem;
  color: #888888;
  text-transform: uppercase;
  text-align: right;
  width: 50px;
  margin: 0.5rem;
`;

export const PriceMember = styled.h2`
  font-weight: bold;
  font-size: 1rem;
  line-height: 28px;
  margin: 0.5rem;
  color: #c81a78;
`;

export const PriceNonMember = styled.h4`
  font-style: normal;
  font-weight: lighter;
  font-size: 0.8rem;
  text-align: center;
  text-transform: uppercase;
  color: #888888;
`;
