import styled from "styled-components";

export const Wrapper = styled.div`
  a {
    text-decoration: none;
  }

  .site-header {
    background-color: rgba(0, 0, 0, 0.85);
  }

  .container {
    max-width: 960px;
  }

  .py-2 {
      padding-bottom: .5rem !important:
  }

  .site-header a {
    color: #999;
    transition: ease-in-out color 0.15s;
  }

  .site-header a:hover {
    color: #fff;
    text-decoration: none;
  }
`;
