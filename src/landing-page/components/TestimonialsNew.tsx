import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";
import t1 from "../../assets/c1.jpg";
import t3 from "../../assets/c3.jpg";
import t2 from "../../assets/c2.jpg";
import t4 from "../../assets/c4.jpg";
import t5 from "../../assets/c5.jpg";

const userTestimonials = [
  {
    // avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    img: t1,
    name: "Basic Plan",
    occupation: "Product Code: #BC-VF6",
    testimonial:
      "Discover Smart Cycles equipped with precision braking systems for safe and reliable stops, ensuring peace of mind on every ride.",
  },
  {
    // avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
    img: t2,

    name: "Basic Plan",
    occupation: "Product Code: #BY-DE7",
    testimonial:
      "Enjoy seamless gear transitions engineered for smooth pedaling and effortless navigation through various terrains, enhancing your cycling experience.",
  },
  {
    // avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />,
    img: t3,

    name: "Basic Plan",
    occupation: "Product Code: #BK-NT4",
    testimonial:
      "Benefit from extended battery life technology, providing longer rides without interruption, ideal for exploring new routes and adventures.",
  },
  {
    // avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/4.jpg" />,
    img: t4,
    name: "Premium Plan",
    occupation: "Product Code: #PZ-GR3",
    testimonial:
      "Elevate your cycling experience with Smart Cycles featuring advanced braking technology, offering precise control and responsive braking in any situation.",
  },
  {
    // avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/5.jpg" />,
    img: t5,
    name: "Premium Plan",
    occupation: "Product Code: #PQ-VR5",
    testimonial:
      "Unlock premium gears designed for optimal performance and efficiency, allowing for effortless shifting and enhanced maneuverability on diverse terrain.",
  },
  {
    // avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
    img: t1,
    name: "Premium Plan",
    occupation: "Product Code: #PE-DI8",
    testimonial:
      "Experience extended battery life capabilities with our premium Smart Cycles, ensuring longer rides between charges and uninterrupted cycling enjoyment.",
  },
];

const whiteLogos = [
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg",
];

const darkLogos = [
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg",
];

const logoStyle = {
  width: "64px",
  opacity: 0.3,
};

export function TestimonialsNew() {
  const theme = useTheme();
  const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos;

  return (
    <Container
      id="testimonialsnew"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Our Products
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Whether navigating urban streets or conquering rugged terrains, our
          cutting-edge bikes offer comfort, durability, and unmatched precision,
          ensuring a seamless riding experience every time.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <img
                  src={testimonial.img}
                  alt={`Testimonial ${index + 1}`}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <Typography variant="body1" color="text.primary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  pr: 2,
                }}
              >
                <CardHeader
                  // avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
                <img
                // src={logos[index]}
                // alt={`Logo ${index + 1}`}
                // style={logoStyle}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
