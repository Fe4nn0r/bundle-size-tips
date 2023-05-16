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

      <Stack direction="row" spacing={2}>
        <Button color="secondary" onClick={() => setShowMap(!showMap)}>
          Toggle map
        </Button>
      </Stack>

      {showMap && <Map />}
    </section>
  );
}
