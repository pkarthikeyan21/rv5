import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
        //backgroundColor: "#f5fcff"
      },
      intro: {
        flexDirection: "row"
      },
      input: {
        height: 80,
        textAlign: "center",
        width: "50%",
        fontSize: 50,
        marginTop: 24,
        color: "#009387"
      },
      // button: {
      //   backgroundColor: "#1D1D1B"
      // },
      buttonText: {
        alignSelf: "center",
        padding: 30,
        fontSize: 25,
        color:"#009387",
        // color: "#FFCB1F",
        fontWeight: "bold"
      },
      result: {
        alignSelf: "center",
        color: "#009387",
        fontSize: 65,
        padding: 15
      },
      // img:{
      //   flex:1,
      //   alignItems:"flex-end",
      //   justifyContent:"flex-end"
      // }
})