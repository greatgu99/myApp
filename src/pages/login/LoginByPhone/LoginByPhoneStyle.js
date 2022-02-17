import { StyleSheet } from "react-native";
import { pxToDp } from "../../../utils/stylesKits";
const styles = StyleSheet.create({
  bottomFont: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: pxToDp(5),
    width: pxToDp(328),
  },
  buttonStyle: {
    borderRadius: pxToDp(5),
    height: pxToDp(50),
    borderColor: "transparent",
  },
  containerStyle: {
    marginHorizontal: pxToDp(50),
    height: pxToDp(50),
    width: pxToDp(335),
    marginVertical: pxToDp(10),
  },
  btnTitleStyle:{
    fontWeight: "bold", 
    fontSize: pxToDp(23) 
  },
  titleStyle:{ 
    fontSize: pxToDp(25), 
    color: "#444", 
    fontWeight: "bold" 
  }
});

export default styles;