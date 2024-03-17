import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "Adaptability",
    description:
      "Our project offers unparalleled adaptability, seamlessly integrating with various cycling environments, whether urban streets or rugged terrains, ensuring a tailored experience for every rider.",
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "Durability",
    description:
      "Built to withstand the demands of frequent use, our project boasts exceptional durability, providing riders with a long-lasting and reliable cycling solution, no matter the conditions.",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "User-friendly design",
    description:
      "With a focus on user experience, our project features an intuitive and user-friendly design, making it easy for cyclists of all levels to navigate and enjoy its functionalities effortlessly.",
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: "Innovation",
    description:
      "At the forefront of cycling technology, our project incorporates innovative features such as AI integration and advanced tracking systems, enhancing the overall riding experience and setting new standards for the industry.",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Reliable customer support",
    description:
      "We pride ourselves on offering reliable customer support, ensuring that riders receive prompt assistance and guidance whenever needed, guaranteeing a smooth and enjoyable experience from start to finish.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Precision in every detail",
    description:
      "From bike performance to system operations, our project is meticulously crafted with precision in every detail, ensuring optimal functionality and performance at every turn, so riders can focus on the journey ahead with confidence.",
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#06090a",
      }}
    >
      <Container
        sx={{
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
          <Typography component="h2" variant="h4">
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Elevate your cycling experience with our innovative project,
            offering unparalleled adaptability, durability, and user-friendly
            design. Backed by reliable customer support and precision
            engineering, it sets new standards in cycling technology.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.900",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
