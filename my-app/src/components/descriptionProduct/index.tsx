import {
  AiOutlineLeft,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import {
  Button,
  Typography,
  Breadcrumbs,
  Link,
  Rating,
  Container,
  Grid,
  useTheme,
  useMediaQuery,
  Badge,
  IconButton,
  AppBar,
  Toolbar,
} from "@mui/material";
import {
  CardMedia,
  Name,
  PriceMember,
  PriceNonMember,
  ContainerName,
  ContainerMember,
  ContainerSummary,
  Description,
  Summary,
  ContainerDescription,
  ContainerButton,
  ContainerButtonMb,
  Price,
  Discount,
} from "./style";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
}
const DescProduct = ({
  id,
  image,
  name,
  country,
  flag, //imgbandeira
  type,
  classification,
  size,
  rating,
  avaliations,
  region,
  priceMember,
  priceNonMember,
  sommelierComment,
  price,
  discount,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {isMobile ? (
          <Grid
            item
            xs={4}
            sm={4}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div role="presentation" onClick={handleClick}>
              <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link underline="hover" color="#C81A78" href="/">
                  Vinhos
                </Link>
                <Link underline="hover" color="#C81A78" href="/">
                  {country}
                </Link>
                <Link
                  underline="hover"
                  color="text.primary"
                  href={`/productPage/${id}`}
                  aria-current="page"
                >
                  {region}
                </Link>
              </Breadcrumbs>
            </div>

            <ContainerName>
              <Name sx={{ textAlign: "center" }}>{name}</Name>
            </ContainerName>

            <ContainerSummary>
              <img src={flag}></img>
              <Summary>{country}</Summary>
              <Summary>{type}</Summary>
              <Summary>{classification}</Summary>
              <Summary>{size}</Summary>
            </ContainerSummary>
            <CardMedia>
              <img src={image}></img>
            </CardMedia>

            <ContainerDescription>
              <Typography variant="h6">Descrição</Typography>
              <Description>{sommelierComment}</Description>
            </ContainerDescription>
            <AppBar
              position="fixed"
              color="primary"
              sx={{ top: "auto", bottom: 0 }}
            >
              <Toolbar style={{padding:"0"}}>
                <ContainerMember style={{ margin:" 0 1.5rem 0 0 ", paddingLeft: "0.5rem" }}>
                  <Discount>{discount}% OFF</Discount>
                  <Price style={{ margin: "0.3rem 0" }}>R$ {price}</Price>
                  <PriceMember style={{ fontSize: "1.5rem" }}>
                    R$ {priceMember}
                  </PriceMember>
                  <PriceNonMember>
                    Preço não sócio R$ {priceNonMember}
                  </PriceNonMember>
                </ContainerMember>

                <Button
                  // onClick={() => navigate(`/productPage/${card.id}`)}
                  sx={{ p: " 12px 24px" }}
                  color="success"
                  variant="contained"
                >
                  adicionar
                </Button>
              </Toolbar>
            </AppBar>
            {/* <ContainerButtonMb>
              
            </ContainerButtonMb> */}
          </Grid>
        ) : (
          <>
            <Grid item xs={4} sm={4} md={6}>
              <Button
                variant="text"
                onClick={() => navigate("/")}
                color="secondary"
                startIcon={<AiOutlineLeft />}
              >
                Voltar
              </Button>
              <CardMedia>
                <img src={image}></img>
              </CardMedia>
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <div role="presentation" onClick={handleClick}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                  <Link underline="hover" color="#C81A78" href="/">
                    Vinhos
                  </Link>
                  <Link underline="hover" color="#C81A78" href="/">
                    {country}
                  </Link>
                  <Link
                    underline="hover"
                    color="text.primary"
                    href={`/productPage/${id}`}
                    aria-current="page"
                  >
                    {region}
                  </Link>
                </Breadcrumbs>
              </div>

              <ContainerName>
                <Name sx={{ textAlign: "left" }}>{name}</Name>
              </ContainerName>

              <ContainerSummary>
                <img src={flag}></img>
                <Summary>{country}</Summary>
                <Summary>{type}</Summary>
                <Summary>{classification}</Summary>
                <Summary>{size}</Summary>
                <Rating name="read-only" value={rating} readOnly />
                <Summary>({avaliations})</Summary>
              </ContainerSummary>

              <ContainerMember>
                <PriceMember>R$ {priceMember}</PriceMember>
                <PriceNonMember>
                  Não sócio R$ {priceNonMember}/un
                </PriceNonMember>
              </ContainerMember>

              <ContainerDescription>
                <Typography variant="h6">Comentário do Sommelier</Typography>
                <Description>{sommelierComment}</Description>
              </ContainerDescription>
              <ContainerButton>
                <IconButton
                  color="primary"
                  aria-label="reduce"
                  onClick={() => {
                    setCount(Math.max(count - 1, 0));
                  }}
                >
                  <AiOutlineMinusCircle />
                </IconButton>
                <span>{count}</span>
                <IconButton
                  color="primary"
                  aria-label="increase"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <AiOutlinePlusCircle />
                </IconButton>

                <Button variant="text">Adicionar</Button>
              </ContainerButton>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default DescProduct;
