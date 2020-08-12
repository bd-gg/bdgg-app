import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, StyleSheet, YellowBox } from 'react-native';

import KakaoLogins from '@react-native-seoul/kakao-login';
import NativeButton from 'apsl-react-native-button';
import { GoogleSignin } from '@react-native-community/google-signin';

import fetch from 'node-fetch';
import { AsyncStorage } from 'react-native';

import { Fonts } from '../Fonts';
import { TouchableOpacity } from 'react-native-gesture-handler';

if (!KakaoLogins) {
  console.error('Module is Not Linked');
}

if (!GoogleSignin) {
  console.error('Google login is not linked');
}

const logCallback = (log, callback) => {
  console.log(log);
  callback;
};

const TOKEN_EMPTY = 'token has not fetched';
const PROFILE_EMPTY = {
  id: 'profile has not fetched',
  email: 'profile has not fetched',
  profile_image_url: '',
};

function LoginScreen(props) {
  const [loginGoogleLoading, setGoogleLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);

  const [token, setToken] = useState(TOKEN_EMPTY);
  const [profile, setProfile] = useState(PROFILE_EMPTY);

  let kakaoLogin = () => {
    logCallback('Login Start', setLoginLoading(true));

    KakaoLogins.login()
      .then((result) => {
        setToken(result.accessToken);
        logCallback(
          `Login Finished:${JSON.stringify(result)}`,
          setLoginLoading(false)
        );
        fetch(
          'http://ec2-13-125-12-178.ap-northeast-2.compute.amazonaws.com:8080/signup',
          {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
              nativeKey: 'pushhostmessage',
              accessToken: result.accessToken,
              refreshToken: result.refreshToken,
              provider: 'kakao',
            }),
          }
        )
          .then((res) => {
            console.log('!!!!!!!!!!!!!!!!!!');
            return res.json();
          })
          .then((res) => {
            console.log(res);
            AsyncStorage.setItem('bdgg-accessToken', res.accessToken);
            AsyncStorage.setItem('bdgg-refreshToken', res.refreshToken);
          })
          .catch((err) => {
            console.error(err);
          });

        /* dispatch LOGIN_SUCCESS action */
        props.loginSuccess();
      })
      .catch((err) => {
        if (err.code === 'E_CANCELLED_OPERATION') {
          logCallback(`Login Cancelled:${err.message}`, setLoginLoading(false));
        } else {
          logCallback(
            `Login Failed:${err.code} ${err.message}`,
            setLoginLoading(false)
          );
        }
      });
  };

  let googleLogin = () => {
    logCallback('Google login start', setGoogleLoading(true));
    componentDidMount();
    GoogleSignin.signIn().then((result) => {
      setToken(result.accessToken);
      logCallback(
        `Login Google Finished:${JSON.stringify(result)}`,
        setGoogleLoading(false)
      );
      props.loginSuccess();
    });
  };

  const kakaoLogout = () => {
    logCallback('Logout Start', setLogoutLoading(true));

    KakaoLogins.logout()
      .then((result) => {
        setToken(TOKEN_EMPTY);
        setProfile(PROFILE_EMPTY);
        logCallback(`Logout Finished:${result}`, setLogoutLoading(false));
      })
      .catch((err) => {
        logCallback(
          `Logout Failed:${err.code} ${err.message}`,
          setLogoutLoading(false)
        );
      });
  };

  const getProfile = () => {
    logCallback('Get Profile Start', setProfileLoading(true));

    KakaoLogins.getProfile()
      .then((result) => {
        setProfile(result);
        logCallback(
          `Get Profile Finished:${JSON.stringify(result)}`,
          setProfileLoading(false)
        );
      })
      .catch((err) => {
        logCallback(
          `Get Profile Failed:${err.code} ${err.message}`,
          setProfileLoading(false)
        );
      });
  };

  const { id, email, profile_image_url: photo } = profile;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image style={styles.Logo} source={require('../assets/img/bdgg.png')} />
        <View>
          <Text style={styles.title}>BoardGG</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.firstText}>간편하게 로그인하고</Text>
        <Text style={styles.secondText}>다양한 서비스를 이용하세요.</Text>
        <TouchableOpacity
          style={styles.KakaoLoginContainer}
          onPress={kakaoLogin}
        >
          <Image
            style={styles.KakaoIcon}
            source={require('../assets/img/kakao.png')}
          />
          <Text style={styles.LoginText}>카카오톡으로 시작하기</Text>
        </TouchableOpacity>
        <View style={styles.EtcLoginContainer}>
          <View>
            <Text style={styles.EtcLoginText}>다른 방법으로 시작하기</Text>
          </View>
          <View style={styles.EtcIconContainer}>
            <TouchableOpacity onPress={googleLogin}>
              <Image
                style={styles.EtcIcon}
                source={require('../assets/img/google-icon.jpg')}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={''}>
              <Image
                style={styles.EtcIcon}
                source={require('../assets/img/facebook-icon.png')}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

function componentDidMount() {
  GoogleSignin.configure({
    webClientId:
      '728024659148-pghu7mmtf2jd3m6n546kg2omqs5rpsdh.apps.googleusercontent.com',
    offlineAccess: false,
  });
}

function mapStateToProps(state) {
  return { isLogin: state.isLogin };
}

function mapDispatchToProps(dispatch) {
  return {
    loginSuccess: () => dispatch({ type: 'LOGIN_SUCCESS' }),
    loginFailure: () => dispatch({ type: 'LOGIN_FAILURE' }),
    logout: () => dispatch({ type: 'LOGOUT' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.BM,
    fontSize: 24,
    marginLeft: 5,
  },
  Logo: {
    width: 120,
    height: 120,
  },
  KakaoIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  content: {
    flex: 6,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 35,
    backgroundColor: 'white',
  },
  firstText: {
    fontSize: 27,
    fontFamily: Fonts.BM,
  },
  secondText: {
    fontSize: 29,
    fontFamily: Fonts.BM,
    fontWeight: 'bold',
    marginTop: 10,
  },
  KakaoLoginContainer: {
    paddingVertical: 10,
    paddingHorizontal: 70,
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#F8E71C',
  },
  LoginText: {
    fontSize: 18,
  },
  EtcLoginContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 30,
    marginBottom: 40,
  },
  EtcLoginText: {
    fontSize: 16,
    color: '#6d6d6d',
  },
  EtcIconContainer: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  EtcIcon: {
    marginTop: 15,
    width: 30,
    height: 30,
  },
});

YellowBox.ignoreWarnings(['source.uri']);
