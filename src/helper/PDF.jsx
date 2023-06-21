import { auto } from '@popperjs/core';
import { Document, Page, Text, View, StyleSheet, Svg } from '@react-pdf/renderer';
import QRCode from 'react-qr-code';
import QRCodeGenerator from './QRCodeGenerator';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF'
  },
  body: {
    justifyContent: "center",
    alignItems: "center"

  },
  div1: {
    flexDirection: 'column',
    border: "1px solid black"
  },
  div2: {
    flexDirection: 'row',
    border: "1px solid black"
  },
  div3: {
    // border: "1px solid black",
    margin: 5,
    padding: 10,
    justifyContent: "center",
    alignContent: "center"
    // flexGrow: 1
  },
  forQR: {
    border: "1px solid black",
    marginTop: 20,
    textAlign: 'center',
  }
});

const forText = StyleSheet.create({
    text: {
        margin: 10
    },
    headerTitle: {
        marginBottom: 60,
        marginTop: 60,
        fontSize: "32pt"
    }
  });

// Create Document Component
const PDFTicketWithQR = () => {
  const data = 'https://example.com';
    return (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.body}>
                <Text style={forText.headerTitle}>Transaction Ticket Details</Text>
                <View style={styles.div1}>
                    <View style={styles.forQR}>
                        <QRCodeGenerator text={data} />
                    </View>
                    <View style={styles.div2}>
                        <View style={styles.section}>
                            <Text style={forText.text}>Invoice Code: </Text>
                            <Text style={forText.text}>Business Unit: </Text>
                            <Text style={forText.text}>Branch: </Text>
                            <Text style={forText.text}>Customer: </Text>
                            <Text style={forText.text}>Booking Date: </Text>
                            <Text style={forText.text}>Booking Time: </Text>
                            <Text style={forText.text}>Number of Pass: </Text>
                            <Text style={forText.text}>Total Price: </Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={forText.text}>988-ZNa</Text>
                            <Text style={forText.text}>Bakebe</Text>
                            <Text style={forText.text}>SM MOA</Text>
                            <Text style={forText.text}>Deinen Ryio M. Flores</Text>
                            <Text style={forText.text}>2023-06-19</Text>
                            <Text style={forText.text}>10:55 AM</Text>
                            <Text style={forText.text}>123</Text>
                            <Text style={forText.text}>2199</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Page>
    </Document>
    )
};

export {
    PDFTicketWithQR
}