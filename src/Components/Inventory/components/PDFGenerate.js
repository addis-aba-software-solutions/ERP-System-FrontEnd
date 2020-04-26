import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import SIV from './SIV'



export default function PDFGenerate() {

  return (
    <div className="container">
      <h2>Best movies of the year</h2>
      <label htmlFor="movies">Select Year</label>

      
        <PDFDownloadLink
          document={<SIV />}
          fileName="Invoice.pdf"
          style={{
            textDecoration: "none",
            padding: "10px",
            color: "#4a4a4a",
            backgroundColor: "#f2f2f2",
            border: "1px solid #4a4a4a"
          }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download Pdf"
          }
        </PDFDownloadLink>
    </div>
  );
}
