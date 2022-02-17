import React from "react";
import { View, Text } from 'react-native';
import { pxToDp } from '../../utils/stylesKits'
import { Input, Icon, Button } from 'react-native-elements';
import { useState } from 'react';
import validator from "../../utils/validator";
export default function GetBackPassword(){
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
    // 发送异步请求 用于充值密码
    // request.post(ACCOUNT_GETBACKPASSWORD,{phone:phoneNumber})
    setLoading(true);
  };
  return (
    <View>
      <View style={{padding:pxToDp(20),paddingTop:pxToDp(40)}}>
        <Text style={{fontSize:pxToDp(25),color:"#444",fontWeight:"bold"}}>
          重置密码
        </Text>
        <Text style={{fontSize:pxToDp(15),color:"#888",fontWeight:"bold",paddingTop:pxToDp(20)}}>
          使用已绑定的手机号重置密码
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
            buttonStyle={{
              backgroundColor:
                phoneNumber != "" ? "rgba(111, 202, 186, 1)" : "#ccc",
              borderRadius: pxToDp(5),
              height: pxToDp(50),
              borderColor: "transparent",
            }}
            titleStyle={{ fontWeight: "bold", fontSize: pxToDp(23) }}
            containerStyle={{
              marginHorizontal: pxToDp(50),
              height: pxToDp(50),
              width: pxToDp(335),
              marginVertical: pxToDp(10),
            }}
            onPress={phoneNumberSubmitEditing}
          />
          
        </View>
        <View
            style={{
              width: pxToDp(328),
            }}
          >
            <View>
              {/* <Text onPress={() => navigation.navigate("LoginByAccount")}>
                使用邮箱验证
              </Text> */}
              <Text>使用邮箱验证</Text>
            </View>

          </View>
      </View>
    </View>
  )
}