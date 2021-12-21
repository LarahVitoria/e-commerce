/* eslint-disable jsx-a11y/alt-text */
import {
  Button,
  Card,
  CardContent,
} from "@mui/material";
import {
  CardMedia,
  Name,
  Price,
  Discount,
  PriceMember,
  PriceNonMember,
  ContainerPrice,
  ContainerName,
  DescriptionMember,
  ContainerMember,
} from "./style";
// sx={{display: "flex", flexDirection: "column", width:"300px" }}
const CardCatalog = ({
  image,
  name,
  price,
  discount,
  priceMember,
  priceNonMember,
  addProduct
}) => (
  <>
    <Card
      sx={{
        height: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardMedia>
        <img src={image}></img>
      </CardMedia>
      <CardContent sx={{ m: "0px", p: "0px", pb: "0px" }}>
        <ContainerName>
          <Name>{name}</Name>
        </ContainerName>
        <ContainerPrice>
          <Price>R$ {price}</Price>
          <Discount>{discount}% OFF</Discount>
        </ContainerPrice>
        <ContainerMember>
          <DescriptionMember>Sócio wine</DescriptionMember>
          <PriceMember>R$ {priceMember}</PriceMember>
        </ContainerMember>
        <PriceNonMember>Não sócio R$ {priceNonMember}</PriceNonMember>
      </CardContent>
    </Card>
    <Button
      onClick={addProduct}
      sx={{ width: "100%", my: "1rem" }}
      color="success"
      variant="contained"
    >
      adicionar
    </Button>
  </>
);

export default CardCatalog;
