import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MdPhone from "@mui/icons-material/Phone";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: blue,
  },
});

const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);

  // Check if any required field is empty
  const requiredFields = [
    "fullName",
    "email",
    "number",
    "reach",
    "styleOfCycling",
  ];
  const isAnyEmptyField = requiredFields.some((field) => !data.get(field));

  if (isAnyEmptyField) {
    // Display alert message for empty fields
    alert("Oops! You need to fill in all details before submitting.");
    return;
  }

  // Extracting form data
  const formData = {
    fullName: data.get("fullName"),
    email: data.get("email"),
    number: data.get("number"),
    reach: data.get("reach"),
    styleOfCycling: data.get("styleOfCycling"),
  };

  // Store form data in local storage
  const submissions =
    JSON.parse(localStorage.getItem("contactSubmissions")) || [];
  submissions.push(formData);
  localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

  // Display success message
  alert("Your contact details have been submitted successfully!");

  // Clear form fields
  event.currentTarget.reset();
};

function ContactForm() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#4a148c" }}>
            <MdPhone />
          </Avatar>
          <Typography component="h1" variant="h5">
            Contact Us
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="number"
                  label="Mobile Number"
                  type="tel"
                  id="number"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="reach"
                  label="When can we reach you?"
                  type="text"
                  id="reach"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="styleOfCycling"
                  label="Style of Cycling"
                  type="text"
                  id="styleOfCycling"
                  autoComplete="off"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }} // Adjusted margin bottom to -10px
              component={Link}
              href="/landingPage/"
              color="inherit" // Changed to primary color
            >
              Wanna go home? Click here
            </Button>
          </Box>
        </Box>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="/landingPage">
              Aura
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default ContactForm;
