import React from "react";
import Button from "../component/UI/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MyCart = () => {
  return (
    <div>
      <Container>
        <TextStyle>
          <h2>Deploying to a GitHub custom subdomain</h2>
          <ol >
            <li style={{marginBottom:"1.5rem"}}>
              Purchase a domain name from a domain service provider of your
              choosing (e.g., Namecheap or GoDaddy)
            </li>
            <li>
              Connect the custom domain to GitHub Pages. To do so, click on the
              Pages menu on the Settings tab. Next, scroll down to the Custom
              domain field and enter the newly purchased domain name. This will
              automatically create a commit with a CNAME file at the root of
              your repository
            </li>
          </ol>
        </TextStyle>
        <Link to="/products">
          <Button>Back</Button>
        </Link>
      </Container>
    </div>
  );
};

export default MyCart;
const Container = styled.div`
  width: 50%;
  margin: 3rem;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
`;
const TextStyle = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 5px;
  padding: 2rem 2rem 2rem 2rem;
  margin-bottom: 3rem;
`;
