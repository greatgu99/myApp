import React from "react";
import { Text, View } from "react-native";
import { pxToDp } from "../../../utils/stylesKits";
import { Input, Icon, Button } from "react-native-elements";
import { useState } from "react";
import validator from "../../../utils/validator";
import styles from "./LoginByPhoneStyle";
// 下方引入用于之后的异步请求
import request from "../../../utils/request";
import { ACCOUNT_LOGINBYPHONE } from "../../../utils/pathMap";


export default function LoginByPhone({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneValid, setPhoneValid] = useState(true);
  const [loading, setLoading] = useState(false);
  phoneNumberChangeText = (phoneNumber) => {
    setPhoneNumber(phoneNumber);
    console.log(phoneNumber);
  };

  phoneNumberSubmitEditing = () => {
    // 手机点击完成
    let phoneValid1 = validator.validatePhone(phoneNumber);
    setPhoneValid(phoneValid1);
    if (!phoneValid1) {
      return;
    }
    // 发送异步请求
    // request.post(ACCOUNT_LOGINBYPHONE,{phone:phoneNumber})
    setLoading(true);
  };

  return (
    <View>
      <View style={{ padding: pxToDp(20), paddingTop: pxToDp(40) }}>
        <Text
          style={styles.titleStyle}
        >
          欢迎使用小程序
        </Text>
        <View style={{ marginTop: pxToDp(40) }}>
          <Input
            placeholder="请输入电话号码"
            maxLength={11}
            keyboardType="phone-pad"
            value={phoneNumber}
            inputStyle={{ color: "#333" }}
            onChangeText={phoneNumberChangeText}
            errorMessage={phoneValid ? "" : "手机号码格式不正确"}
            leftIcon={{
              type: "font-feather",
              name: "phone",
              color: "#ccc",
              size: pxToDp(20),
            }}
          />
          {/* <Text>{phoneNumber}</Text> */}
        </View>
        <View style={{ alignItems: "center", margin: pxToDp(20) }}>
          <Button
            title="获取验证码"
            loading={loading}
            disabled={loading || phoneNumber == ""}
            buttonStyle={{...styles.buttonStyle,
              backgroundColor:
                phoneNumber != "" ? "rgba(111, 202, 186, 1)" : "#ccc",
            }}
            titleStyle={styles.btnTitleStyle}
            containerStyle={styles.containerStyle}
            onPress={phoneNumberSubmitEditing}
          />
          <View
            style={styles.bottomFont}
          >
            <View>
              <Text onPress={() => navigation.navigate("LoginByAccount")}>
                账号密码登录
              </Text>
            </View>
            <View>
              <Text onPress={() => navigation.navigate("Register")}>
                注册账号
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
