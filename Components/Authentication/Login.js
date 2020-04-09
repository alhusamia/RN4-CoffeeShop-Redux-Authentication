import React, { Component } from "react";

// Screen Names
import { SIGNUP, SHOP, COFFEESHOP, COFFEESHOPS } from "../../Navigation/screenNames";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import styles from "./styles";
import { connect } from "react-redux";
import { login } from "../../redux/actions";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  render() {
    const { navigation, login } = this.props;
    const { username, password } = this.state;
    const { errors } = this.props;

    const goToCoffeList = () =>
      navigation.navigate(SHOP, { screen: COFFEESHOPS });
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Login</Text>
        {!!errors.length && (
          <View className="alert alert-danger" role="alert">
            {errors.map((error) => (
              <Text key={error}>{error}</Text>
            ))}
          </View>
        )}
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A6AEC1"
          value={username}
          onChangeText={(username) => this.setState({ username })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="#A6AEC1"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableOpacity
          style={styles.authButton}
          onPress={() => login(this.state, goToCoffeList)}
        >
          <Text style={styles.authButtonText}>Log in</Text>
        </TouchableOpacity>
        <Text
          style={styles.authOther}
          onPress={() => navigation.replace(SIGNUP)}
        >
          Click here to register!
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.errors.errors,
  };
};
const mapDispatchToProps = {login}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
