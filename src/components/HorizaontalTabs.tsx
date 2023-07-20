import { useState, Children, SyntheticEvent, ReactNode, useImperativeHandle, forwardRef } from "react";
import { Tabs, Tab, Typography, useTheme, Box, Card } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

const HorizaontalTabs = forwardRef(
  (
    {
      tabsDataArray = [],
      children,
      setActiveTab = () => {},
      variant,
      spacing,
      defaultValue = 0,
      disableBoxShadow = false,
      addIcon = false,
      handleAddTab,
    }: any,
    ref
  ) => {
    const [value, setValue] = useState(defaultValue);
    const handleChange = (event: SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    const arrayChildren = Children.toArray(children);

    const theme: any = useTheme();

    useImperativeHandle(
      ref,
      () => {
        return {
          moveToNextTab: (tabIdx: number) => {
            setValue(tabIdx);
          },
        };
      },
      []
    );

    return (
      <Card
        sx={{
          px: spacing ?? 2,
          boxShadow: disableBoxShadow ? "none" : undefined,
        }}
      >
        <Tabs
          selectionFollowsFocus
          orientation="horizontal"
          variant={variant ? variant : "scrollable"}
          sx={styles.tabRoot(theme)}
          TabIndicatorProps={styles.tabIndicator(theme)}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
        >
          {tabsDataArray?.map((title: string) => (
            <Tab
              wrapped
              key={title}
              onClick={() => {
                setActiveTab ? setActiveTab(title) : console.log(title);
              }}
              label={
                <Typography variant="subtitle2" component="span" color={theme.palette.grey[600]}>
                  {title}
                </Typography>
              }
            />
          ))}
           {addIcon && <AddCircleIcon sx={{ ml: "auto", mt: 0.5, cursor: "pointer" }} onClick={handleAddTab} />}
        </Tabs>
        <Box sx={{ py: 2 }}>
          {arrayChildren?.map((child, index) => (
            <Box key={index}>{value === index && child}</Box>
          ))}
        </Box>
      </Card>
    );
  }
);

HorizaontalTabs.displayName = "HorizaontalTabs";

export default HorizaontalTabs;

// ----------------------------------------------------------------------
// Styles
const styles = {
  tabRoot: (theme: any) => ({
    borderBottom: 1,
    borderColor: theme.palette.primary.lighter,
  }),

  tabIndicator: (theme: any) => ({
    sx: { background: theme.palette.primary.main },
  }),
};
