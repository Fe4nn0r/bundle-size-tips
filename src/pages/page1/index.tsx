import React from "react";
import Buttons from "components/buttons";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import photo from "../../assets/photo2.json";

export default function Page1() {
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
          Page 1
        </Typography>
      </Container>
      <Buttons />

      <div style={{ marginTop: "3em" }}>
        <img width="1024px" src={`data:image/jpeg;base64,${photo.base64}`} />
      </div>
    </section>
  );
}
