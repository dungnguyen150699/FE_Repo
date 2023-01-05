const styles = (theme) =>({
    taskbroad : {
        display: "flex",
        alignItems: " center"
    },
    shape : {
        // backgroundColor: "red",
        backgroundColor: theme.color.primary,
        // backgroundColor: "red",
        // color : "white",
        color : theme.shape.textColor,
        fontFamily : theme.typoraphy.fontFamily,
        // borderColor : "#cccccc",
        // padding : 20,
        // margin:10,
        // borderRadius:4
        borderRadius:theme.shape.borderRadius
    }
});
export default styles;