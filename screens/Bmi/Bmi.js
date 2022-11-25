import { View, Text, TextInput, Image, TouchableOpacity} from 'react-native'
import React from 'react'

import { styles } from "./styles";

export default class Bmi extends React.Component {
  
  state = {
    height: 0,
    mass: 0,
    resultNumber: 0,
    resultText: ""
  };

  handleCalculate = () => {
    let imc = (this.state.mass) / this.state.height ** 2;
    this.setState({
      resultNumber: imc.toFixed(2)
    });

    if (imc < 18.5) {
      this.setState({ resultText: "Underweight" });
    } else if (imc > 18.5 && imc < 25) {
      this.setState({ resultText: "Normal Weight" });
    } else if (imc >= 25 && imc < 30) {
      this.setState({ resultText: "Overweight" });
    } else {
      this.setState({ resultText: "Obesity" });
    }
  };


  render() {
    return (

    // <ImageBackground
    // source={require("./bg.png")}
    // style={{ width: "100%", height: "100%" }}
    // >
    <View style={styles.container}>
    {/* <Text
      style={{
        color: "#009387",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 30,
        fontSize: 15
      }}
    >
      BMI Calculator
    </Text> */}
    <View style={styles.intro}>
    <TextInput
              placeholder="Height"
              placeholderTextColor="#D0CCC1"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={height => {
                this.setState({ height });
              }}
            />
            <TextInput
              placeholder="Mass"
              placeholderTextColor="#D0CCC1"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={mass => {
                this.setState({ mass });
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleCalculate}
          >
            <Text style={styles.buttonText}>Calculate </Text>
            </TouchableOpacity>
            <Text style={styles.result}>{this.state.resultNumber}</Text>
            <Text style={[styles.result, { fontSize: 35 }]}>
            {this.state.resultText}
            </Text>
            <View style="styles.img">
           <Image
           source={require("./Bmilogo.jpeg")}
           style={{ width: "100%", height: "60%"}}
           >
            </Image>  
          </View>

          </View> 
    // </ImageBackground>
  );
  }
}