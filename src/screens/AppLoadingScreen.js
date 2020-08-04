import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  AsyncStorage,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

const AppLoadingScreen = (props) => {
  useEffect(() => {
    console.log('call1');
    /* check whether access token exists */
    AsyncStorage.getItem('bdgg-accessToken').then((res) => {
      if (res) {
        /* dispatch GET_TOKEN_SUCCESS action */
        props.getTokenSuccess();
      } else {
        /* dispatch GET_TOKEN_FAILURE action */
        props.getTokenFailure();
      }
    });
  });

  return (
    <View style={[styles.container]}>
      <ActivityIndicator size="large" color="#0000ff"></ActivityIndicator>
    </View>
  );
};

const mapStateToProps = (state) => ({
  isLogin: state.authentication.isLogin,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getTokenSuccess: () => dispatch({ type: 'GET_TOKEN_SUCCESS' }),
    getTokenFailure: () => dispatch({ type: 'GET_TOKEN_FAILURE' }),
    logout: () => dispatch({ type: 'LOGOUT' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLoadingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
