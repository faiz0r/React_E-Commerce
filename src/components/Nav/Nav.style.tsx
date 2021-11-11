import styled from "styled-components";

export const Wrapper = styled.div`
  .site-header {
    background-color: rgba(0, 0, 0, 0.85);
    width: 100%;
  }

  .sticky-top {
    position: fixed;
    top: 0;
    z-index: 1020;
  }

  .container {
    max-width: 960px;
  }

  a {
    text-decoration: none;
  }

  .site-header a {
    color: #999;
    transition: ease-in-out color 0.15s;
  }

  .site-header a:hover {
    color: #fff;
  }

  #icon,
  #cart {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;
