import React, { Component } from "react";
import { Text, List, Button } from "native-base";
import { connect } from "react-redux";

// Component
import CartItem from "./CartItem";

import { checkoutCart } from "../../redux/actions";
import { USER, LOGIN } from "../../Navigation/screenNames";

const CoffeeCart = ({ cart, user, checkoutCart, navigation }) => {
  const cartItems = cart.map((item) => (
    <CartItem item={item} key={item.drink + item.option} />
  ));

  return (
    <List>
      {cartItems.length ? (
        <>
          {cartItems}
          <Button
            full
            danger
            onPress={
              user
                ? checkoutCart
                : () => navigation.navigate(USER, { screen: LOGIN })
            }
          >
            <Text>{user ? "Checkout" : "Login to Checkout"}</Text>
          </Button>
        </>
      ) : (
        <Text style={{ textAlign: "center" }}>Buy something</Text>
      )}
    </List>
  );
};

const mapStateToProps = ({ cart, user }) => ({
  cart,
  user,
});

const mapDispatchToProps = (dispatch) => ({
  checkoutCart: () => dispatch(checkoutCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeCart);
