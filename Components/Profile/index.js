import React from "react";
import { Text, View, List, CardItem, Card, ListItem } from "native-base";
import { connect } from "react-redux";

// Components
import LogoutButton from "./LogoutButton";

import styles from "./styles";
const OrderItem = ({ order }) => {
  return (
    <ListItem style={styles.listitem}>
      <Card style={styles.transparent}>
        <CardItem style={styles.transparent}>
          <Text style={styles.text}>{order.date.toString()}</Text>
        </CardItem>
      </Card>
    </ListItem>
  );
};

const Profile = ({ username, orders }) => {
  const orderList = orders.map((order) => (
    <OrderItem key={order.date.toString()} order={order} />
  ));
  return (
    <View>
      <Text> {username}'s Order History</Text>
      <List>{orderList}</List>
      <LogoutButton />
    </View>
  );
};

const mapStateToProps = ({ user, orders }) => ({
  username: user?.username,
  orders,
});

export default connect(mapStateToProps)(Profile);
