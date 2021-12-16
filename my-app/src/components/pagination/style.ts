import styled from "styled-components";

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const Styled = styled.div`
  display: flex;
  > a {
    margin: 1rem;
  }
  > li a {
    font-family: "Roboto", sans-serif;
    color: #555555;
    font-weight: 400;
    font-size: 18px;
    text-decoration: none;
    &:hover {
      color: #d14b8f;
    }
  }
`;
export const Item = styled.li`
  list-style-type: none;
  text-align: center;
  text-decoration: none;
  padding: 1rem;

  &:hover {
    border-bottom: 2px solid #d14b8f;
  }
`;
export const End = styled.div``;
