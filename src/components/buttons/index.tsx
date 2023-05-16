import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Buttons = () => {
  const { pathname } = useLocation();

  return (
    <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
      <Button
        variant={pathname === "/" ? "contained" : "outlined"}
        component={Link}
        to="/"
      >
        Home
      </Button>

      <Button
        variant={pathname === "/page1" ? "contained" : "outlined"}
        component={Link}
        to="/page1"
      >
        One page
      </Button>

      <Button
        variant={pathname === "/page2" ? "contained" : "outlined"}
        component={Link}
        to="/page2"
      >
        Another page
      </Button>
    </Stack>
  );
};

export default Buttons;
