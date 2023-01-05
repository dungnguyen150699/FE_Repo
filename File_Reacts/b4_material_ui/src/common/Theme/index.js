import { createTheme } from "@material-ui/core";

const theme = createTheme({
    color : {
        primary : "#0971f1",
        secondary : "000BCD4",
        error:"#E64A19"
    },
    typoraphy:{
        fontFamily: "Roboto",
    },
    shape:{
        backgroundColor: "#7B1FA2",
        textColor: "white",
        borderColor:"#CCCCCC",
    }
});
export default theme;