/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar";
//import Pagination from "../../components/pagination";
import {
  FormLabel,
  CssBaseline,
  Radio,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
  Grid,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Button,
  Pagination,
  Divider,
} from "@mui/material";
import CardCatalog from "../../components/cardCatalog";
import { IPropsCards } from "../../interface/interface";
// import { AppContext } from "../../context/context";

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [itens, setItens] = useState<IPropsCards[]>([]);
  const [itensTotals, setItensTotals] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [page, setPage] = useState(1);
  const [price, setPrice] = useState(0);
  // const [startPrice, setStartPrice] = useState(0);
  // const [endPrice, setEndPrice] = useState(0);
  // const [filterPrice, setFilterPrice] = useState(false);
  // const { dispatch } = useContext(AppContext);

  // const addProduct = (item: {
  //   id: number;
  //   image: string;
  //   name: string;
  //   price: number;
  //   discount: number;
  //   priceMember: number;
  //   priceNonMember: number;
  //   type: string;
  //   classification: string;
  //   size: string;
  //   rating: number;
  //   avaliations: number;
  //   country: string;
  //   region: string;
  //   flag: string;
  //   sommelierComment: string;
  // }) => {
  //   dispatch({ type: "ADD_PRODUCT", payload: item });
  // };

  const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number((event.target as HTMLInputElement).value));
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const listTasks = () => {
    axios
      .get(`https://wine-back-test.herokuapp.com/products?limit=9&page=${page}`)
      .then((response) => {
        setItens(response.data.items);
        setItensTotals(response.data.totalItems);
        setItemsPerPage(response.data.itemsPerPage);
      });
  };

  // function SwitchCase(props) {
  //   switch (props.value) {
  //     case 40:
  //       return "You are a Admin.";
  //     case "Manager":
  //       return "You are a Manager.";
  //     default:
  //       return "You are a User";
  //   }
  // }

  // const filterPrice = () => {
  //   debugger;
  //   if (price === 40) {
  //     setStartPrice(0);
  //     setEndPrice(price);
  //   } else if (price === 60) {
  //     setStartPrice(40);
  //     setEndPrice(price);
  //   } else if (price === 200) {
  //     setStartPrice(60);
  //     setEndPrice(price);
  //   } else if (price === 500) {
  //     setStartPrice(200);
  //     setEndPrice(price);
  //   } else if (price === 501) {
  //     setStartPrice(0);
  //     setEndPrice(price);
  //   } else if (price === 200) {
  //     setStartPrice(0);
  //     setEndPrice(price);
  //   }
  // };

  useEffect(() => {
    listTasks();
  }, []);

  useEffect(() => {
    listTasks();
  }, [page]);

  return (
    <>
      <CssBaseline />

      <Navbar />
      <main>
        <Container
          sx={{
            py: 8,
            display: "flex",
            backgroundColor: "#e9e9e9",
          }}
          maxWidth="xl"
        >
          {!isMobile && (
            <Grid
              container
              sx={{
                ml: "3rem",
                display: "flex",
                width: "53%",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{ fontWeight: "bold", my: "1rem" }}
                component="h4"
                align="center"
                color="text.primary"
              >
                Refine sua busca
              </Typography>
              <FormControl component="fieldset">
                <FormLabel component="legend">Por preço</FormLabel>
                <RadioGroup
                  aria-label="Por preço"
                  value={price}
                  // onClick={() => filterPrice()}
                  onChange={(e) => handleChangePrice(e)}
                >
                  <FormControlLabel
                    value={40}
                    control={<Radio />}
                    label="Até R$40"
                  />
                  <FormControlLabel
                    value={60}
                    control={<Radio />}
                    label="R$40 A R$60"
                  />
                  <FormControlLabel
                    value={200}
                    control={<Radio />}
                    label="R$100 A R$200"
                  />
                  <FormControlLabel
                    value={500}
                    control={<Radio />}
                    label="R$200 A R$500"
                  />
                  <FormControlLabel
                    value={501}
                    control={<Radio />}
                    label="Acima de R$500"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          )}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="subtitle2"
              sx={{ mb: "1rem" }}
              gutterBottom
              component="div"
            >
              {itensTotals} produtos encontrados
            </Typography>
            {isMobile && <Divider sx={{ mb: "1rem" }} />}

            <Grid container spacing={5}>
              {itens.map((card) => (
                <Grid
                  item
                  key={card.id}
                  xs={12}
                  sm={6}
                  md={4}
                  onClick={() => navigate(`/productPage/${card.id}`)}
                >
                  <CardCatalog
                    image={card.image}
                    name={card.name}
                    price={card.price}
                    discount={card.discount}
                    priceMember={card.priceMember}
                    priceNonMember={card.priceNonMember}
                    addProduct={() => navigate(`/productPage/${card.id}`)}
                  ></CardCatalog>
                </Grid>
              ))}
            </Grid>
            {!isMobile ? (
              <Pagination
                count={7}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  m: "2rem",
                }}
                color="primary"
                page={page}
                onChange={handleChangePage}
                variant="outlined"
                shape="rounded"
              />
            ) : (
              <>
                <Button
                  sx={{ my: "2rem" }}
                  onClick={() => setPage(page + 1)}
                  variant="outlined"
                >
                  Mostrar mais
                </Button>
                <Typography
                  variant="subtitle2"
                  sx={{ textAlign: "center" }}
                  gutterBottom
                  component="div"
                >
                  Exibindo {itemsPerPage} de {itensTotals} produtos totais
                </Typography>
              </>
            )}
          </div>
        </Container>
      </main>
    </>
  );
};

export default Home;
