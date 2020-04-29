import React, { Component } from 'react';
import { withStyles } from '@material-ui/core'
import Logo from '../../../Assets/NAZO.png';
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
        backgroundColor: '#d1d1d1',
        padding: 30
    },
    pdf: {
        paddingTop: 40,
        paddingRight: 50,
        paddingLeft: 40
    },
    logo: {
        height: 100,
        width: 120,
        marginTop: 10,
    },
    text: {
        color: '#000000',
        fontWeight: 10,
        marginTop: 25
    },
    textBody: {
        fontSize: 12,
        color: '#686868'
    },
    header: {
        flexDirection: 'row'
    },
    column: {
        flexDirection: 'column',
        marginBottom: 200
    },
    table: {
        display: "table",
        width: "auto",
        borderStyle: "solid",
        borderColor: '#686868',
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0
    },
    tableRow: {
        margin: "auto",
        flexDirection: "row"
    },
    tableColHeader: {
        width: "16.8%",
        borderStyle: "solid",
        borderColor: '#686868',
        borderBottomColor: '#000',
        backgroundColor: '#11669F',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
    },
    tableCol: {
        width: "16.8%",
        borderStyle: "solid",
        borderColor: '#686868',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
    },
    tableCellHeader: {
        margin: "auto",
        fontSize: 12,
        // fontWeight: 500,
        color: '#FFFFFF'
    },
    tableCell: {
        margin: "auto",
        color: '#686868',
        fontSize: 10
    },
    line: {
        width: "auto",
        borderStyle: "solid",
        borderColor: '#11669F',
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0
    },
    total: {
        fontSize: 12,
        color: '#686868',
        marginLeft: 400
    }
});

// export default Invoice

// import React from "react";
// import {
//     Page,
//     View,
//     Document,
//     StyleSheet,
//     Text
// } from "@react-pdf/renderer";


// const styles = StyleSheet.create({
//     page: {
//         backgroundColor: "#ffffff"
//     },
//     section: {
//         margin: 10,
//         padding: 10,
//         flexGrow: 1
//     },
//     movieContainer: {
//         backgroundColor: "#f6f6f5",
//         display: "flex",
//         flexDirection: "row",
//         padding: 5
//     },
//     movieDetails: {
//         display: "flex",
//         marginLeft: 5
//     },
//     movieTitle: {
//         fontSize: 15,
//         marginBottom: 10
//     },
//     movieOverview: {
//         fontSize: 10
//     },

//     image: {
//         height: 200,
//         width: 150
//     },
//     subtitle: {
//         display: "flex",
//         justifyContent: "space-between",
//         flexDirection: "row",
//         width: 150,
//         alignItems: "center",
//         marginBottom: 12
//     },
//     vote: {
//         display: "flex",
//         flexDirection: "row"
//     },
//     rating: {
//         height: 10,
//         width: 10
//     },
//     vote_text: {
//         fontSize: 10
//     },
//     vote_pop: {
//         fontSize: 10,
//         padding: 2,
//         backgroundColor: "#61C74F",
//         color: "#fff"
//     },
//     vote_pop_text: {
//         fontSize: 10,
//         marginLeft: 4
//     },
//     overviewContainer: {
//         minHeight: 110
//     },
//     detailsFooter: {
//         display: "flex",
//         flexDirection: "row"
//     },
//     lang: {
//         fontSize: 8,
//         fontWeight: 700
//     },
//     vote_average: {
//         fontSize: 8,
//         marginLeft: 4,
//         fontWeight: "bold"
//     }
// });

function PdfDocument(props) {
    console.log("XXXXXXXXXXXXXXXXXXXxxxxxxxxxxx");
    console.log(props);

    return (
        <Document>
            <Page style={styles.pdf}>
                <View style={{
                    height: 40
                }} />
                {props.data
                    ? [props.data].map((data) => {
                        return (
                            <>

                                <View container style={styles.header}>
                                    <View item xs={6}>
                                        <Text style={styles.textBody}  >
                                            NAZO PLC
                                </Text>
                                        <View style={{
                                            height: 10
                                        }}>

                                        </View>
                                        <Text style={styles.textBody}  >
                                            Haile garment, Addis Ababa
                                </Text>
                                        <View style={{
                                            height: 10
                                        }}>

                                        </View>
                                        <Text style={styles.textBody} >
                                            Mobile : +251 91 147 5672
                                </Text>
                                        <View style={{
                                            height: 10
                                        }}>

                                        </View>
                                        <Text style={styles.textBody} >
                                            Website : nazoplcethio.com
                                </Text>



                                    </View>

                                    <View item xs={6}>
                                        <View container style={{
                                            // marginBottom: 100,
                                            marginLeft: 200,
                                            flexDirection: 'row'

                                        }}>

                                            <Image source={Logo} alt='' style={styles.logo} />

                                        </View>


                                    </View>

                                </View>
                                <View style={{
                                    height: 25
                                }} />

                                <View style={styles.line}>
                                </View>

                                <View style={{
                                    height: 25
                                }}>
                                </View>

                                <View container style={styles.header}>

                                    <View item style={{
                                        // marginTop: 30
                                    }}>
                                        <Text align='left' style={styles.textBody} style={{ color: '#11669F' }} variant='body2' color=''>
                                            Invoice To
                            </Text>
                                        <View style={{
                                            marginLeft: 10,
                                        }}>
                                            <View style={{
                                                height: 10
                                            }}></View>

                                            <Text align='left' style={styles.textBody} variant='body2' >
                                                Samuel Kassa
                                </Text>
                                            <View style={{
                                                height: 10
                                            }}>

                                            </View>
                                            <Text align='left' style={styles.textBody} variant='body2' >
                                                Military Tera (Merkato)
                                </Text>
                                            <View style={{
                                                height: 10
                                            }}>

                                            </View>

                                            <View style={styles.contactInformation}>
                                                <Text align='left' style={styles.textBody} variant='body2' >
                                                    +251 921-33-44-32
                                    </Text>
                                                <View style={{
                                                    height: 10
                                                }}>

                                                </View>
                                                <Text align='left' style={styles.textBody} variant='body2' >
                                                    +251 921-33-44-32
                                </Text>
                                                <View style={{
                                                    height: 10
                                                }}>

                                                </View>

                                            </View>
                                            <View style={styles.contactInformation}>
                                                <Text align='right' style={styles.textBody} variant='body2' >
                                                    SamuelKassa23@gmail.com
                                </Text>
                                                <Text align='right' style={styles.textBody} variant='body2' >
                                                </Text>

                                            </View>

                                        </View>

                                    </View>


                                    <View item style={{
                                        marginLeft: 200,
                                        marginTop: 30
                                    }}>
                                        <View container style={{
                                            flexDirection: 'row',
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}>
                                            <View item >

                                                <Text align='right' style={{
                                                    color: '#11669F',
                                                    fontSize: 12
                                                }} >
                                                    Invoice No:{data.invoiceId}
                                                </Text>
                                            </View>
                                            <View style={{
                                                width: 10
                                            }}>

                                            </View>
                                            <View item>

                                                <Text align='right' style={styles.textBody} >

                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{
                                            height: 10
                                        }}>

                                        </View>

                                        <View container style={{
                                            flexDirection: 'row',
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}>
                                            <View item >

                                                <Text align='right' style={{
                                                    color: '#11669F',
                                                    fontSize: 12
                                                }} >
                                                    Invoice Date :{data.date}
                                                </Text>
                                            </View>
                                            <View style={{
                                                width: 10
                                            }}>

                                            </View>
                                            <View item>

                                                <Text align='right' style={styles.textBody} >

                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{
                                            height: 10
                                        }}>

                                        </View>

                                        <View container style={{
                                            flexDirection: 'row',
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}>

                                            <View style={{
                                                width: 10
                                            }}>

                                            </View>

                                        </View>
                                        <View style={{
                                            height: 10
                                        }}>

                                        </View>

                                        <View container style={{
                                            flexDirection: 'row',
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}>

                                            <View style={{
                                                width: 10
                                            }}>


                                            </View>

                                            <View style={{
                                                height: 10
                                            }}>

                                            </View>


                                        </View>
                                    </View>

                                    <View style={{
                                        height: 20
                                    }}>

                                    </View>
                                    <View style={styles.line}>
                                    </View>

                                    <View style={{
                                        height: 20
                                    }}>
                                    </View>

                                    <View style={styles.table}>
                                        <View style={styles.tableRow}>
                                            <View style={styles.tableColHeader}>
                                                <Text style={styles.tableCellHeader}>#</Text>
                                            </View>
                                            <View style={styles.tableColHeader}>
                                                <Text style={styles.tableCellHeader}>Item Name</Text>
                                            </View>
                                            <View style={styles.tableColHeader}>
                                                <Text style={styles.tableCellHeader}>Quantity</Text>
                                            </View>
                                            <View style={styles.tableColHeader}>
                                                <Text style={styles.tableCellHeader}>Unit Price</Text>
                                            </View>
                                            <View style={styles.tableColHeader}>
                                                <Text style={styles.tableCellHeader}>Amount</Text>
                                            </View>
                                        </View>



                                    </View>


                                    {props.invoice_item ? props.invoice_item.map((item) => {
                                        return (
                                            <View style={styles.tableRow}>
                                                <View style={styles.tableCol}>
                                                    <Text style={styles.tableCell}>{item.itemName}</Text>
                                                </View>

                                                <View style={styles.tableCol}>
                                                    <Text style={styles.tableCell}>{item.itemName}</Text>
                                                </View>
                                                <View key={item.itemName} style={styles.movieContainer}>
                                                    <View style={styles.tableCol}>
                                                        <Text style={styles.tableCell}>{item.itemName}</Text>
                                                    </View>

                                                    <View style={styles.movieContainer}>
                                                        <Text style={styles.tableCell}>{item.quantity}</Text>
                                                    </View>
                                                    <View style={styles.movieContainer}>
                                                        <Text style={styles.tableCell}>{item.unitPrice}</Text>
                                                    </View>
                                                    <View style={styles.movieContainer}>
                                                        <Text style={styles.tableCell}>{item.quantity * item.unitPrice}</Text>
                                                    </View>
                                                </View>


                                            </View>
                                        );
                                    }) : null}


                                    <View style={{
                                        height: 40
                                    }} />

                                    <View key={data.itemName} style={styles.movieContainer}>


                                        <View container style={{
                                            flexDirection: 'row',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            paddingBottom: 5
                                        }}>
                                            <View item >

                                                <Text align='right' style={{
                                                    color: '#11669F',
                                                    fontSize: 12
                                                }} >
                                                    Sub Total : {data.subTotal}
                                                </Text>
                                            </View>
                                            <View style={{
                                                width: 10
                                            }}>

                                            </View>
                                            <View item>

                                                <Text align='right' style={styles.textBody} >

                                                </Text>
                                            </View>

                                        </View>

                                        <View style={styles.line} />
                                        <View style={{ height: 5 }} />

                                        <View container style={{
                                            flexDirection: 'row',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            paddingBottom: 5
                                        }}>
                                            <View item >

                                                <Text align='right' style={{
                                                    color: '#11669F',
                                                    fontSize: 12
                                                }} >
                                                    Tax :{data.Tax}
                                                </Text>
                                            </View>
                                            <View style={{
                                                width: 10
                                            }}>

                                            </View>
                                            <View item>

                                                <Text align='right' style={styles.textBody} >

                                                </Text>
                                            </View>

                                        </View>
                                        <View style={styles.line} />
                                        <View style={{ height: 5 }} />
                                        <View container style={{
                                            flexDirection: 'row',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            paddingBottom: 5
                                        }}>
                                            <View item >
                                                <Text align='right' style={{
                                                    color: '#11669F',
                                                    fontSize: 12
                                                }} >
                                                    Total :{data.Total}
                                                </Text>
                                            </View>
                                            <View style={{
                                                width: 10
                                            }}>

                                            </View>
                                            <View item>

                                                <Text align='right' style={styles.textBody} >

                                                </Text>
                                            </View>

                                        </View>
                                        <View style={styles.line} />



                                    </View>



                                    <View style={{ height: 80 }} />
                                    <View style={styles.line} />
                                    <View container style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }} >

                                        <Text variant='caption' style={styles.textBody}>
                                            Phone : +2519 1234 56 77
                            </Text>
                                        <Text style={styles.textBody}>
                                            Website : EastAfrican.com
                                        </Text>

                                        <Text style={styles.textBody}>
                                            Email : EastAfrican@gmail.com
                                        </Text>
                                    </View>
                                </View>




                            </>
                        )

                    })
                    : ""}

                <View style={styles.tableRow}>

                </View>




            </Page>
        </Document >
    );
}
export default PdfDocument