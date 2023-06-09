import { Box } from "@mui/material";
import React from "react";
import {
  BlobProvider,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import Certificatebg from "../../../../../../assets/img/delegateCertifactebg.jpg";
import Of from "../../../../../../assets/img/Of.png";
import Completion from "../../../../../../assets/img/Completion.png";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const styles = StyleSheet.create({
  page: {
    position: "relative",
    width: "900px",
    height: "800px",
    backgroundImage: `url${Certificatebg}`,
  },
  pageBackground: {
    position: "absolute",
    minWidth: "100%",
    minHeight: "100%",
    height: "100%",
    width: "100%",
    backgroundImage: `url(${Certificatebg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },
  section: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: "relative",
    width: "841px",
    height: "841px",

    zIndex: -1,
  },
  certificate: {
    fontSize: 42,
    fontWeight: 600,
    marginBottom: "21px",
  },
  of: {
    fontSize: 40,
    fontWeight: 400,
    marginBottom: "24px",
  },
  completion: {
    marginBottom: "14px",
    // width: "290px",
    // height: "23px",
  },
  presentTo: {
    fontSize: 20,
    fontWeight: 300,
    margin: "0 auto",
    marginBottom: "27px",
  },
  name: {
    fontSize: 38,
    fontWeight: 500,
    margin: "0 auto",
    marginBottom: "41px",
  },
  course: {
    fontSize: 18,
    fontWeight: 300,
    margin: "0 auto",
    marginBottom: "10px",
  },
  courseDate: {
    fontSize: 18,
    fontWeight: 300,
    margin: "0 auto",
    marginBottom: "20px",
  },
  at: {
    fontSize: 14,
    fontWeight: 300,
    margin: "0 auto",
    marginBottom: "15px",
  },
  facilitator: {
    fontSize: 14,
    fontWeight: 300,
    margin: "0 auto",
    marginBottom: "20px",
  },
  facilitatorDate: {
    fontSize: 20,
    fontWeight: 400,
    margin: "0 auto",
    marginBottom: "20px",
  },
});

const certificateData = [
  {
    id: "1",
    name: "Clare O’Roberts",
    date: "10/09/2017 - 15/09/2017",
    address: "East ChinaTraining Ground",
    faclilator: "Clare Facilitator Roberts",
    certificateDate: "27 . 10 . 2021",
  },
];
const DelegateCertificateModal = (props: any) => {
  const Of = "../../../../../../assets/img/Of.png";
  const Completion = "../../../../../../assets/img/Completion.png";
  const Certificatebg = "../../../../../../assets/img/delegateCertifactebg.jpg";
  //   const Certificatebg = "https://ibb.co/hfRZXCK";
  const { open, setOpen } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      maxWidth="md"
      fullWidth
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      sx={{ width: "100%", height: "841px" }}
    >
      <div>
        <BlobProvider
          document={
            <Document>
              <Page size="A4" style={styles.page}>
                {/* <Image
                  src={Certificatebg}
                  style={{ border: "2px solid red" }}
                /> */}
                <View style={styles.section}>
                  <Text style={styles.certificate}>Certificate</Text>
                  <Text style={styles.of}>Of</Text>
                  <Text style={styles.completion}>Completion</Text>
                  <Image src="https://i.ibb.co/cLcCbxN/Certificate.jpg" />
                  {/* *************************************************** below is imagees ******************************************************************* */}

                  {/* <Text style={styles.of}>
                                        <Image src={Of} />
                                    </Text>
                                    <Text style={styles.completion}>
                                    </Text> */}

                  {certificateData.map((item: any) => {
                    return (
                      <div key={item.id}>
                        <Text style={styles.presentTo}>
                          Proudly Presented To
                        </Text>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.course}>
                          Attended the course Social Care Network on:
                        </Text>
                        <Text style={styles.courseDate}>{item.date}</Text>
                        <Text style={styles.at}>At: {item.address}</Text>
                        <Text style={styles.facilitator}>
                          Facilitator: {item.facilitator}
                        </Text>
                        <Text style={styles.facilitatorDate}>
                          {item.certificateDate}
                        </Text>
                      </div>
                    );
                  })}
                </View>
                {/* *********************************************************************************below is backgroubd image ************************************** */}
                {/* <Image src={Certificatebg} style={styles.image} /> */}
              </Page>
            </Document>
          }
        >
          {({ blob, url, loading, error }) =>
            loading
              ? "Loading document..."
              : blob && (
                  <embed
                    src={URL.createObjectURL(blob)}
                    type="application/pdf"
                    style={{ width: "900px", height: "821px" }}
                  />
                )
          }
        </BlobProvider>
      </div>
    </Dialog>
  );
};

export default DelegateCertificateModal;