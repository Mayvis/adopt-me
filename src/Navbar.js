/** @jsx jsx */
import { useState } from "react";
import { Link } from "@reach/router";
import { jsx, css } from "@emotion/react";
import colors from "./colors";

const Navbar = () => {
  const [padding, setPadding] = useState(15);
  return (
    // eslint-disable-next-line
    <header
      onClick={() => setPadding(padding + 15)}
      css={css`
        background-color: ${colors.secondary};
        padding: ${padding}px;
        margin-bottom: 12px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        role="img"
        aria-label="logo"
        css={css`
          font-size: 60px;
          &:hover {
            text-decoration: underline;
          }
        `}
      >
        👻
      </span>
    </header>
  );
};

export default Navbar;
