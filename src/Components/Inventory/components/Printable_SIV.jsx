import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Logo from "../../../Assets/NAZO.png";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  root: {
    width: "100vh",
    height: "100vh",
    backgroundColor: "#d1d1d1",
    padding: 10,
  },

  text: {
    color: "#686868",
  },
  Header: {
    fontSize: 13,
    padding: 30,
  },
  logo: {
    height: 50,
    width: 80,
    marginTop: 10,
    // borderRadius: 50
  },
  SIVStyling: {
    padding: 30,
  },
  table: {
    padding: 10,
  },
  textBody: {
    fontSize: 12,
    color: "#686868",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderColor: "#686868",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableColHeader: {
    width: "16.8%",
    borderStyle: "solid",
    borderColor: "#686868",
    borderBottomColor: "#000",
    backgroundColor: "#11669F",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol: {
    width: "16.8%",
    borderStyle: "solid",
    borderColor: "#686868",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellHeader: {
    margin: "auto",
    margin: 5,
    fontSize: 12,
    // fontWeight: 500,
    color: "#FFFFFF",
  },
  tableCell: {
    margin: "auto",
    margin: 2,
    color: "#686868",
    fontSize: 10,
  },
  line: {
    width: "auto",
    borderStyle: "solid",
    borderColor: "#11669F",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  total: {
    fontSize: 12,
    color: "#686868",
    marginLeft: 400,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

class SIV extends Component {
  render() {
    return (
      <Document>
        <Page
          size="A4"
          style={{
            padding: 30,
          }}
        >
          <View container xs={12} display="flex" style={styles.Header}>
            <View
              container
              style={{
                flexDirection: "row",
                marginTop: 100,
              }}
            >
              <View item>
                <Text style={styles.text} variant="body2" gutterBottom>
                  Warehouse ID : RFGDERWS4434
                </Text>
                <View style={{ height: 5 }} />

                <Text style={styles.text} variant="body2" gutterBottom>
                  Warehouse Name : Gurd-Sholla Warehouse
                </Text>
                <View style={{ height: 5 }} />

                <Text style={styles.text} variant="body2" gutterBottom>
                  Issued By : Yelekal Solomon
                </Text>
                <View style={{ height: 5 }} />

                <Text style={styles.text} variant="body2" gutterBottom>
                  SIV Date : 12/08/2020
                </Text>
              </View>

              <View
                item
                style={{
                  marginLeft: 160,
                }}
              >
                <Image source={Logo} alt="" style={styles.logo} />
              </View>
            </View>
          </View>
          <View style={styles.line}></View>

          <View
            style={{
              display: "flex",
              justifyContent: "flex-start",
              padding: 20,
            }}
          >
            <Text style={styles.textBody} variant="body2" color="">
              Order Number : YHDGTEYHT776
            </Text>
            <View style={{ height: 5 }} />
            <Text style={styles.textBody} variant="body2" color="">
              Order ID : YHDGTEYHT776
            </Text>
          </View>

          <View
            style={{
              height: 20,
            }}
          ></View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>#</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Item ID</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Description</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Quantity</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Price/Unit</Text>
              </View>

              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Amount</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}></Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  [Clothing] Sweat Pants, Hoodies
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>4.000</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>500 ETB</Text>
              </View>

              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>1920 ETB</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}></Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>[Edibles] Cheralia Biscuit</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>6.000</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>320 ETB</Text>
              </View>

              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>1920 ETB</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>3</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}></Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>[Edibles] Moya Biscuit</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>10.000</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>450 ETB</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>4500 ETB</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>4</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}></Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}></Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}></Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}></Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}></Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>4</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}></Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}></Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}></Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}></Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}></Text>
              </View>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              paddingTop: 20,
              marginLeft: 450,
            }}
          >
            <Text style={styles.textBody} variant="body2" color="">
              Total : 67
            </Text>
          </View>
          <View
            style={{
              paddingLeft: 20,
            }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Text style={styles.textBody} variant="body2" color="">
                Recipient Name : _______________________
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "flex-start",
                paddingTop: 15,
              }}
            >
              <Text style={styles.textBody} variant="body2" color="">
                Recipient Signature : _______________________
              </Text>
            </View>
          </View>

          {/* </View> */}
        </Page>
      </Document>
    );
  }
}

export default withStyles(styles)(SIV);