import {
  AppBar,
  Toolbar,
  CssBaseline,
  useTheme,
  useMediaQuery,
  Grid,
  IconButton,
} from "@mui/material";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import DrawerComponent from "../drawer/index";
import { Item, Styled } from "./style";
import Logo from "../logo/index";
// import {  useGlobalContext } from "../../context/context";
import React from "react";



function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  // const { amount } = useGlobalContext();


  return (
    <AppBar  position="sticky" color="secondary">
      <CssBaseline />
      <Toolbar>
        {isMobile ? (
          <>
            <DrawerComponent />
            <Logo />
          </>
        ) : (
          <Grid container direction="row" justifyContent="space-between">
            <Grid style={{ display: "flex" }}>
              <Logo />
            </Grid>
            <Grid item>
              <Styled>
                <Item>
                  <Link to="">Clube</Link>
                </Item>
                <Item>
                  <Link to="/">Loja</Link>
                </Item>
                <Item>
                  <Link to="#">Produtores</Link>
                </Item>
                <Item>
                  <Link to="#">Ofertas</Link>
                </Item>
                <Item>
                  <Link to="#">Eventos</Link>
                </Item>
              </Styled>
            </Grid>
          </Grid>
        )}
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          {isMobile === false && (
            <Grid item>
              <IconButton
                style={{ border: "1px solid #555555", margin: "0px 10px" }}
                component="span"
              >
                <AiOutlineUser />
              </IconButton>
            </Grid>
          )}
          <Grid item>
            <IconButton
              style={{ border: "1px solid #555555", margin: "0px 10px" }}
              component="span"
            >
              <AiOutlineSearch />
            </IconButton>
            {(["right"] as const).map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton
                  style={{ border: "1px solid #555555", margin: "0px 10px" }}
                  onClick={() => navigate(`/cart`)}
                  component="span"
                >
                  <CgShoppingCart />
                  {/* {amount} */}
                </IconButton>
                
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
   

  );
}
export default Navbar;
