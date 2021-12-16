import { useState } from "react";
import { Divider, Drawer, IconButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { Container, List, ListItem } from "./style";

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Container>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="#">Clube</Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/">Loja</Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contact">Produtores</Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about">Ofertas</Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about">Eventos</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <AiOutlineMenu />
      </IconButton>
    </Container>
  );
}
export default DrawerComponent;
