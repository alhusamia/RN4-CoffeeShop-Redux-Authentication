import React from "react";
import { Text, View } from "native-base";
import { connect } from "react-redux";

// Components
import LogoutButton from "./LogoutButton";

const Profile = ({ username }) => (
  <View>
    <Text>Hi is {username} here</Text>
    <LogoutButton />
  </View>
);

const mapStateToProps = ({ user }) => ({
  username: user?.username,
});

export default connect(mapStateToProps)(Profile);
