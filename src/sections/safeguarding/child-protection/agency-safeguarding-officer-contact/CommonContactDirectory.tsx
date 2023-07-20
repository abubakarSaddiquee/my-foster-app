import React, { useState } from "react";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { Box, Card, Typography, useTheme } from "@mui/material";

const CommonContactDirectory = ({ tableHeaderProps, disableBoxShadow, data, tableProps, handleAddTab, defaultValue }: any) => {
  const theme = useTheme();
  const tabArr = data.map(({ name }: any) => name);
  const alphabets = [...Array(26)].map((_, i) => String.fromCharCode(i + 97).toUpperCase());

  const [selectedAlphabet, setSelectedAlphabet] = useState<string>("A");

  const handleFilterTable = (alphabet: string) => setSelectedAlphabet(alphabet);

  const isFiltered = (d: any) => d.filter((obj: any) => obj.name.charAt(0) === selectedAlphabet);

  return (
    <Card sx={styles.card}>
      {tableHeaderProps && <TableHeader {...tableHeaderProps} />}
      <HorizaontalTabs tabsDataArray={tabArr} defaultValue={defaultValue} disableBoxShadow={disableBoxShadow} addIcon handleAddTab={handleAddTab}>
        {data.map((obj: any, i: number) => (
          <CustomTable key={i} data={isFiltered(obj.tableData)} columns={obj.tableColumns} {...tableProps} />
        ))}
      </HorizaontalTabs>
      <Box sx={styles.alphabetParentBox(tableHeaderProps)}>
        {alphabets.map((alphabet: any) => (
          <Box key={alphabet} sx={styles.aplhabetBox(selectedAlphabet, alphabet, theme.palette)} onClick={() => handleFilterTable(alphabet)}>
            <Typography sx={styles.alphabets}>{alphabet}</Typography>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default CommonContactDirectory;
const styles = {
  card: {
    width: "100%",
    px: 1,
    py: 2,
    position: "relative",
    overflow: "visible",
  },
  alphabetParentBox: (tableHeaderProps: boolean) => ({
    position: "absolute",
    left: "-20px",
    top: tableHeaderProps ? "190px" : "100px",
    width: "20px",
    overflowY: "auto",
    maxHeight: "550px",
  }),
  alphabets: {
    marginTop: "6px",
    fontSize: "14",
    fontWeight: "600",
    textAlign: "center",
  },
  aplhabetBox: (selectedAlphabet: any, alphabet: any, palette: any) => ({
    cursor: "pointer",
    paddingBlock: "10px",
    borderRadius: "3px 0px 0px 3px",
    color: selectedAlphabet === alphabet ? "#FFFFFF" : palette.mode === "dark" ? "#637381" : palette.primary.main,
    backgroundColor: selectedAlphabet === alphabet ? "#F6830F" : "transparent",
    boxShadow: selectedAlphabet === alphabet ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none",
    clipPath: "polygon(23% 35%, 84% 35%, 100% 20%, 100% 95%, 87% 80%, 26% 80%, 0% 80%, 0 35%)",
  }),
};
