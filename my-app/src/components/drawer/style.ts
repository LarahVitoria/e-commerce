import styled from "styled-components";

export const Container = styled.div``;
export const List = styled.ul`
  list-style-type: none;
  text-decoration: none;
  width: 15rem;
`;

export const ListItem = styled.li`
  &:hover {
    background-color: #555555;
  }
  > div {
    > span {
      padding: 0.5rem 10rem 0.5rem 1rem;
      > a {
        list-style-type: none;
        text-decoration: none;
        font-family: "Roboto", sans-serif;
        color: #d14b8f;
        font-weight: 500;
        font-size: 18px;
      }
    }
  }
`;
