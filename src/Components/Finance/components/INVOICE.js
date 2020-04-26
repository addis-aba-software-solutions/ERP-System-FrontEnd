import React, { Component } from 'react';
import { withStyles, Paper, Badge, Table } from '@material-ui/core'
import Logo from '../../../Assets/NAZO.png';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
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
        // width: '100vh',
        // height: '100vh',
        backgroundColor: '#d1d1d1',
        padding: 30
    },
    pdf: {
        // width: '595px',
        // height: '842px',
        // backgroundColor: '#FFFFFF',
        // marginLeft: 100,
        paddingTop: 40,
        paddingRight: 50,
        paddingLeft: 40
    },
    logo: {
        height: 100,
        width: 120,
        marginTop: 10,
        // borderRadius: 50
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
        margin: 5,
        fontSize: 12,
        // fontWeight: 500,
        color: '#FFFFFF'
    },
    tableCell: {
        margin: "auto",
        margin: 2,
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


class Invoice extends Component {
    render() {

        return (
            <Document>
                <Page size="A4" style={styles.pdf}>

                    {/* =========================Header========================== */}
                    <View style={{
                        height: 40
                    }} />

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
                    {/* =========================Invoice Info========================== */}
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
                                        Invoice No:
                                </Text>
                                </View>
                                <View style={{
                                    width: 10
                                }}>

                                </View>
                                <View item>

                                    <Text align='right' style={styles.textBody} >
                                        INV/2020/0013
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
                                        Invoice Date :
                                </Text>
                                </View>
                                <View style={{
                                    width: 10
                                }}>

                                </View>
                                <View item>

                                    <Text align='right' style={styles.textBody} >
                                        20-04-20
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
                                        SO :
                                </Text>
                                </View>
                                <View style={{
                                    width: 10
                                }}>

                                </View>
                                <View item>

                                    <Text align='right' style={styles.textBody} >
                                        SO013
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
                                        Order Date :
                                </Text>
                                </View>
                                <View style={{
                                    width: 10
                                }}>

                                </View>
                                <View item>

                                    <Text align='right' style={styles.textBody} >
                                        20-04-20
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
                                        Due Date :
                                </Text>
                                </View>
                                <View style={{
                                    width: 10
                                }}>
                                </View>
                                <View item>

                                    <Text align='right' style={styles.textBody} >
                                        31-04-20
                                </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* ========================= Table ========================== */}
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
                                <Text style={styles.tableCell}>[Clothing] Sweat Pants, Hoodies</Text>
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

                    {/* ========================= Total ========================== */}
                    <View style={{
                        height: 40
                    }} />

                    <View style={{
                        marginLeft: 300
                    }}>

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
                                    Sub Total :
                                </Text>
                            </View>
                            <View style={{
                                width: 10
                            }}>

                            </View>
                            <View item>

                                <Text align='right' style={styles.textBody} >
                                    65654 ETB
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
                                    Tax :
                                </Text>
                            </View>
                            <View style={{
                                width: 10
                            }}>

                            </View>
                            <View item>

                                <Text align='right' style={styles.textBody} >
                                    12%
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
                                    Total :
                            </Text>
                            </View>
                            <View style={{
                                width: 10
                            }}>

                            </View>
                            <View item>

                                <Text align='right' style={styles.textBody} >
                                    736572654 ETB
                            </Text>
                            </View>

                        </View>
                        <View style={styles.line} />



                    </View>

                    {/* =========+=========================== footer========================== */}

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
                </Page>
            </Document>

        );
    }
}
export default withStyles(styles)(Invoice);