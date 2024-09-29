import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Link from "next/link"; // If you are using Next.js

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
  isLogin?: boolean;
}

export default function UserCard({
  imageUrl,
  title,
  description,
  link,
  isLogin,
}: CardProps) {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: { xs: "auto", sm: "initial" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          display: "block",
          width: "1px",
          bgcolor: "warning.300",
          left: "500px",
          top: "-24px",
          bottom: "-24px",
          "&::before": {
            top: "4px",
            content: '""',
            display: "block",
            position: "absolute",
            right: "0.5rem",
            color: "text.tertiary",
            fontSize: "sm",
            fontWeight: "lg",
          },
          "&::after": {
            top: "4px",
            content: '""',
            display: "block",
            position: "absolute",
            left: "0.5rem",
            color: "text.tertiary",
            fontSize: "sm",
            fontWeight: "lg",
          },
        }}
      />
      <Card
        orientation="horizontal"
        sx={{
          width: "100%",
          flexWrap: "wrap",
          [`& > *`]: {
            "--stack-point": "500px",
            minWidth:
              "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
          },
          overflow: "auto",
          resize: "horizontal",
        }}
      >
        <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
          <img src={imageUrl ?? ""} loading="lazy" alt={title} />
        </AspectRatio>
        <CardContent>
          <Typography sx={{ fontSize: "xl", fontWeight: "lg" }}>
            {title}
          </Typography>
          <Typography
            level="body-sm"
            textColor="text.tertiary"
            sx={{ fontWeight: "lg" }}
          >
            {description}
          </Typography>

          <Box sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}>
            <Link href={isLogin ? `/category/${link}` : `/login`} passHref>
              <Button variant="solid" color="primary" component="a">
                Details
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
