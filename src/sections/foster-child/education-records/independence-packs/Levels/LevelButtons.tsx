import React from "react";
import BronzeLevel from "@root/assets/svg/bronze-level";
import SilverLevel from "@root/assets/svg/silver-level";
import GoldLevel from "@root/assets/svg/gold-level";
import { Box, Button } from "@mui/material";

export default function LevelButtons() {
  return (
    <div>
      <Box sx={{ mt: 6, mb: 4 }}>
        <Button
          sx={{
            mr: 2,
            color: "#A46628",
            fontWeight: "700",
            fontSize: "16px",
            background: "#FFFFFF",
            border: "1px solid #A46628",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "5px",
            "&:hover": {
              background: "#FFFFFF",
              border: "1px solid #A46628",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
            },
          }}
          variant="outlined"
          startIcon={<BronzeLevel width="23" height="33" color={"#A46628"} />}
        >
          Bronze Level
        </Button>
        <Button
          sx={{
            mr: 2,
            color: "#A4B0C1",
            fontWeight: "700",
            fontSize: "16px",
            background: "#FFFFFF",
            border: "1px solid #A4B0C1",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "5px",
            "&:hover": {
              background: "#FFFFFF",
              border: "1px solid #A4B0C1",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
            },
          }}
          variant="outlined"
          startIcon={<SilverLevel />}
        >
          Silver Level
        </Button>
        <Button
          sx={{
            color: "#FFBA01",
            fontWeight: "700",
            fontSize: "16px",
            background: "#FFFFFF",
            border: "1px solid #FFBA01",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "5px",
            "&:hover": {
              background: "#FFFFFF",
              border: "1px solid #FFBA01",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
            },
          }}
          variant="outlined"
          startIcon={<GoldLevel />}
        >
          Gold Level
        </Button>
      </Box>
    </div>
  );
}
