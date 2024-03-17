import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ExploreIcon from "@mui/icons-material/Explore";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import EventNoteIcon from "@mui/icons-material/EventNote";
import MapIcon from "@mui/icons-material/Map";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const items = [
  {
    icon: <ExploreIcon />,
    title: "Realtime cycle management",
    description:
      "Effortless real-time monitoring and optimization for a seamless cycling experience.",
  },
  {
    icon: <AccessibilityNewIcon />,
    title: "Availability and access",
    description:
      "Instant accessibility with live updates on bike availability and convenient access points.",
  },
  {
    icon: <EventNoteIcon />,
    title: "Booking management",
    description:
      "Simple and efficient bike reservation and route planning for hassle-free rides.",
  },
  {
    icon: <MapIcon />,
    title: "Tracking and map integration",
    description:
      "Precision navigation with real-time tracking and seamless map integration.",
  },
  {
    icon: <EmojiObjectsIcon />,
    title: "Integration of AI (Artificial Intelligence)",
    description:
      "Smart AI algorithms enhancing system efficiency and user experience for intuitive cycling.",
  },
];

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(null);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  return (
    <Container
      id="features"
      sx={{ py: { xs: 8, sm: 16 }, textAlign: "center" }}
    >
      <Typography component="h2" variant="h4" color="text.primary">
        Product features
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: { xs: 2, sm: 4 } }}
      >
        Revolutionize your cycling experience with our cutting-edge product
        feature. Seamlessly integrated AI technology ensures intuitive
        navigation and optimal performance, making every ride a breeze.
      </Typography>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        useFlexGap
      >
        {items.map(({ icon, title, description }, index) => (
          <Card
            key={index}
            variant="outlined"
            component={Button}
            sx={{
              p: 3,
              height: "fit-content",
              width: "100%",
              background: "none",
              borderColor:
                selectedItemIndex === index ? "primary.light" : "grey.200",
              "&:hover": {
                borderColor: "primary.light",
              },
              "&:hover .MuiButton-label": {
                textDecoration: "none",
              },
            }}
            onClick={() => handleItemClick(index)}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                textAlign: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: 2.5,
              }}
            >
              <Box
                sx={{
                  color:
                    selectedItemIndex === index ? "primary.main" : "grey.500",
                }}
              >
                {icon}
              </Box>
              <Box sx={{ textTransform: "none" }}>
                <Typography
                  color="text.primary"
                  variant="body2"
                  fontWeight="bold"
                >
                  {title}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                  sx={{ my: 0.5 }}
                >
                  {description}
                </Typography>
                <Button
                  disableRipple
                  disableFocusRipple
                  sx={{
                    color: "primary.main",
                    "&:hover": { textDecoration: "none" },
                  }}
                  onClick={(event) => event.stopPropagation()}
                >
                  Learn more
                  <ChevronRightRoundedIcon fontSize="small" />
                </Button>
              </Box>
            </Box>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
