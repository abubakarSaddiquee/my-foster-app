import React from "react";
import {
  EMPLOYEMENT_STATUS,
  UPLOADID_DATA,
  ADDITIONAL_DOCS,
} from "./OtherInformationData";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import BankDetailsTable from "./BankDetailsTable";

const OtherInformation = () => {
  const theme: any = useTheme();
  return (
    <>
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1 }}
      >
        Employment Status
      </Typography>
      <Grid container>
        {EMPLOYEMENT_STATUS?.map((item: any) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Box
              key={item.id}
              sx={{
                p: "10px 0 0 0",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.grey[600], mb: 0.5 }}
              >
                {item.label}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.grey[600],
                  fontWeight: 400,
                  textTransform: "unset",
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              {item.sublist?.map((title: any) => (
                <Box
                  key={title.id}
                  sx={{ display: "flex", gap: 0.5, cursor: "pointer" }}
                >
                  <Image src={title.icon} alt="icon" width={24} height={20} />
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.grey[600],
                      fontWeight: 400,
                      textTransform: "unset",
                    }}
                  >
                    {title.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* Additional Docs Section Started */}
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1, mt: 3 }}
      >
        Additional Docs
      </Typography>
      <Grid container>
        {ADDITIONAL_DOCS?.map((item: any) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Box
              key={item.id}
              sx={{
                p: "10px 0 0 0",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.grey[600], mb: 0.5 }}
              >
                {item.label}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.grey[600],
                  fontWeight: 400,
                  textTransform: "unset",
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              {item.sublist?.map((title: any) => (
                <Box
                  key={title.id}
                  sx={{ display: "flex", gap: 0.5, cursor: "pointer" }}
                >
                  <Image src={title.icon} alt="icon" width={24} height={20} />
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.grey[600],
                      fontWeight: 400,
                      textTransform: "unset",
                    }}
                  >
                    {title.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* Bank Details Table */}
      <BankDetailsTable />
      {/* ID Upload Section Started */}
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1, mt: 4 }}
      >
        ID Upload (Passport/DL)
      </Typography>
      {UPLOADID_DATA.map((item: any) => (
        <Box
          key={item.id}
          sx={{
            p: "10px 0 0 0",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ color: theme.palette.grey[600], mb: 1 }}
          >
            {item.label}
          </Typography>
          <Box sx={{ display: "flex", gap: 0.5, cursor: "pointer" }}>
            <Image src={item.icon} alt="icon" width={24} height={22} />
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.grey[600],
                fontWeight: 400,
                textTransform: "unset",
                mb: 1,
              }}
            >
              {item.title}
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default OtherInformation;
