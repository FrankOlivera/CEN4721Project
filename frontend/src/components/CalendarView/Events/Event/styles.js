import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(() => ({
    card: {
        background: "white",
        margin: 10,
    },
    title: {
        background: "#0021A5",
        textAlign: "center",
        color: 'white',
        fontSize: 30,
    },
    description: {
        padding: 10,
        paddingLeft: 20,
        resize: "none",
        fontSize: 23,
        outlineStyle: "none",
        outlineColor: "grey",
        flexWrap: "wrap",
        overflowWrap: "break-word",
        overflowX: "auto",
        overflowY: "scroll",
    },
    description2: {
        padding: 10,
        paddingLeft: 20,
        resize: "none",
        fontSize: 23,
        outlineStyle: "none",
        outlineColor: "grey",
        flexWrap: "wrap",
        overflowWrap: "break-word",
        overflowX: "auto",
        overflowY: "auto",
    },
    time: {
        textAlign: "center",
        padding: 10,
    },
    deleteButton: {
        fontSize: 20,
        fontWeight: 30,
        margin: 10,
    },
    selectButton: {
        fontSize: 20,
        fontWeight: 30,
        margin: 10,
    }

}));
