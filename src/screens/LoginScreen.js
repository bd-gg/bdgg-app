import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, Image, Text, StyleSheet, YellowBox} from 'react-native';

import KakaoLogins from '@react-native-seoul/kakao-login';
import NativeButton from 'apsl-react-native-button';
import { GoogleSignin } from '@react-native-community/google-signin';

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
      .then(result => {
        setToken(result.accessToken);
        logCallback(
          `Login Finished:${JSON.stringify(result)}`,
          setLoginLoading(false),
        );
        /* dispatch LOGIN_SUCCESS action */
        props.loginSuccess();
      })
      .catch(err => {
        if (err.code === 'E_CANCELLED_OPERATION') {
          logCallback(`Login Cancelled:${err.message}`, setLoginLoading(false));
        } else {
          logCallback(
            `Login Failed:${err.code} ${err.message}`,
            setLoginLoading(false),
          );
        }
      });
  };


  let googleLogin = () => {
        logCallback('Google login start', setGoogleLoading(true));
        componentDidMount();
        GoogleSignin.signIn()
    .then(result => {
        setToken(result.accessToken);
        logCallback(
            `Login Google Finished:${JSON.stringify(result)}`,
            setGoogleLoading(false),
        );
        props.loginSuccess();
    })
  };

  const kakaoLogout = () => {
    logCallback('Logout Start', setLogoutLoading(true));

    KakaoLogins.logout()
      .then(result => {
        setToken(TOKEN_EMPTY);
        setProfile(PROFILE_EMPTY);
        logCallback(`Logout Finished:${result}`, setLogoutLoading(false));
      })
      .catch(err => {
        logCallback(
          `Logout Failed:${err.code} ${err.message}`,
          setLogoutLoading(false),
        );
      });
  };

  const getProfile = () => {
    logCallback('Get Profile Start', setProfileLoading(true));

    KakaoLogins.getProfile()
      .then(result => {
        setProfile(result);
        logCallback(
          `Get Profile Finished:${JSON.stringify(result)}`,
          setProfileLoading(false),
        );
      })
      .catch(err => {
        logCallback(
          `Get Profile Failed:${err.code} ${err.message}`,
          setProfileLoading(false),
        );
      });
  };

  const {id, email, profile_image_url: photo} = profile;

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.profilePhoto} source={{uri: photo}} />
        <Text>{`id : ${id}`}</Text>
        <Text>{`email : ${email}`}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.token}>{token}</Text>
        <NativeButton
          isLoading={loginLoading}
          onPress={googleLogin}
          activeOpacity={0.5}
          style={styles.btnKakaoLogin}
          textStyle={styles.txtKakaoLogin}>
          GoogleLOGIN
        </NativeButton>
        <NativeButton
          isLoading={loginLoading}
          onPress={kakaoLogin}
          activeOpacity={0.5}
          style={styles.btnKakaoLogin}
          textStyle={styles.txtKakaoLogin}>
          LOGIN
        </NativeButton>
        <NativeButton
          isLoading={logoutLoading}
          onPress={kakaoLogout}
          activeOpacity={0.5}
          style={styles.btnKakaoLogin}
          textStyle={styles.txtKakaoLogin}>
          Logout
        </NativeButton>
        <NativeButton
          isLoading={profileLoading}
          onPress={getProfile}
          activeOpacity={0.5}
          style={styles.btnKakaoLogin}
          textStyle={styles.txtKakaoLogin}>
          getProfile
        </NativeButton>
      </View>
    </View>
  );
}

function componentDidMount() {
  GoogleSignin.configure({
      webClientId: '728024659148-pghu7mmtf2jd3m6n546kg2omqs5rpsdh.apps.googleusercontent.com',
      offlineAccess: false
  })
}

function mapStateToProps(state) {
  return {isLogin: state.isLogin};
}

function mapDispatchToProps(dispatch) {
  return {
    loginSuccess: () => dispatch({type: 'LOGIN_SUCCESS'}),
    loginFailure: () => dispatch({type: 'LOGIN_FAILURE'}),
    logout: () => dispatch({type: 'LOGOUT'}),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 24,
    backgroundColor: 'white',
  },
  profile: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: 'black',
  },
  content: {
    flex: 6,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  token: {
    width: 200,
    fontSize: 12,
    padding: 5,
    borderRadius: 8,
    marginVertical: 20,
    backgroundColor: 'grey',
    color: 'white',
    textAlign: 'center',
  },
  btnKakaoLogin: {
    height: 48,
    width: 240,
    alignSelf: 'center',
    backgroundColor: '#F8E71C',
    borderRadius: 0,
    borderWidth: 0,
  },
  txtKakaoLogin: {
    fontSize: 16,
    color: '#3d3d3d',
  },
});

YellowBox.ignoreWarnings(['source.uri']);
