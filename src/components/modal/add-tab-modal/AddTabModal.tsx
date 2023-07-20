import { Box, Button, Dialog, DialogContent, DialogTitle, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const AddTabModal = ({ open, onClose, title = "Category", label = "Category Name", onSubmit }: any) => {
  const [categoryName, setCategoryName] = useState("");
  const handleSubmit = () => {
    onSubmit(categoryName);
    setCategoryName("");
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose} maxWidth={"sm"} fullWidth>
      <DialogTitle sx={{ p: 0, mb: 1, backgroundColor: "rgba(247, 136, 18, 0.05)" }}>
        <Typography fontWeight={600} fontSize={"16px"} padding={"20px"}>
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <TextField sx={{ mt: 3}} fullWidth size="small" name="category" label={label} onChange={(e) => setCategoryName(e.target.value)} />
        <Box display={"flex"} gap={"20px"} justifyContent={"flex-end"} sx={{ mt: 5 }}>
          <Button
            sx={{
              backgroundColor: "#F6830F",
              "&:hover": {
                backgroundColor: "#F6830F",
              },
            }}
            variant="contained"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            sx={{
              marginRight: "1rem",
              backgroundColor: "#0E918C",
              "&:hover": {
                backgroundColor: "#0E918C",
              },
            }}
            type="submit"
            variant="contained"
            disabled={!categoryName}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AddTabModal;
