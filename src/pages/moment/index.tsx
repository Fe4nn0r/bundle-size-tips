import React from "react";
import moment from "moment";
import Buttons from "components/buttons";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function getFormattedDate(locale: string) {
  moment.locale(locale);
  return moment().format("LLLL");
}

export default function MomentPage() {
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
          Moment.js example
        </Typography>

        <div>FR: {getFormattedDate("fr-FR")}</div>
        <div>EN: {getFormattedDate("en-GB")}</div>
      </Container>
      <Buttons />
    </section>
  );
}
