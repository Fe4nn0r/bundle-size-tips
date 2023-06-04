import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Buttons from "components/buttons";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Map } from "components/map";

export default function Home() {
  const [showMap, setShowMap] = useState(false);
  return (
    <section>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Homepage
        </Typography>
      </Container>

      <Buttons />

      <Stack
        style={{ marginTop: "3em" }}
        align="center"
        direction="column"
        spacing={2}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowMap(!showMap)}
          style={{ marginBottom: "3em" }}
        >
          Toggle map
        </Button>
      </Stack>

      {showMap && <Map />}
    </section>
  );
}
