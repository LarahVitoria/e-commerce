import styled from "styled-components";

export const CardMedia = styled.figure`
  display: flex;
  justify-content: center;
`;

export const ContainerName = styled.div``;

export const ContainerButtonMb = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  width: 100%;
  bottom: 0vh;
  left: 0;
  background: white;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  background-color: #7ebc43;
  border-radius: 4px;
  padding: 0.5rem 2rem;
  margin: 2rem 0;
  > span {
    color: white;
    font-size: 1.6rem;
    padding: 0rem 2rem;
  }
`;

export const Name = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  color: #111111;
`;

export const ContainerMember = styled.div`
  margin: 2.5rem 0;
`;

export const PriceMember = styled.h2`
  text-align: left;
  font-weight: 900;
  font-size: 2.5rem;
  color: #c81a78;
`;

export const PriceNonMember = styled.h4`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 13px;
  color: #888888;
`;

export const ContainerSummary = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  > img {
    width: 16px;
  }
`;

export const Summary = styled.h2`
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #555555;
  text-transform: capitalize;
  align-items: center;
  margin: 0.3rem;
`;

export const Description = styled.h2`
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #555555;
  align-items: center;
  margin: 0.3rem;
`;

export const ContainerDescription = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  padding: 0px;
  padding-bottom: 35%;
  > h6 {
    font-size: 16px;
  }
`;

export const Price = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 0.7rem;
  line-height: 12px;
  text-decoration-line: line-through;
  text-transform: uppercase;
  color: #888888;
  margin: 0.5rem;
`;

export const Discount = styled.h4`
  color: #fff;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: 0.7rem;
  line-height: 16px;
  padding: 0.2rem 0rem;
  background: #f79552;
  border-radius: 2px;
  width: 4rem;
  margin: -0.8rem 0 0 0rem;
`;
