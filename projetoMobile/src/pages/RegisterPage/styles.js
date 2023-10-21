import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00a6f2',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '200px',
        height: '200px',
        marginBottom: '20px'
    },
    input:{
        width: '75%',
        height: '50px',
        backgroundColor: '#c9dbe2',
        padding: '10px',
        fontSize: '20px',
        opacity: '0.9',
        border: '1px solid red',
        borderRadius: '5px',
        marginBottom: '5px'
    },
    btn: {
        backgroundColor: '#060b2c',
        height: '40px',
        width: '75%',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px'
    },
    btnTxt: {
        fontSize: '22px',
        color: '#fbfdfc'
    },
    viewLinks:{
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-between',
        marginTop: '15px'
    }
});

export default styles;