import React from "react";
import { View, Text } from "react-native";
import { pxToDp } from "../../utils/stylesKits";
import { Input, Icon, Button } from "react-native-elements";
import { useState } from "react";

export default function LoginByAccount({ navigation }) {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [accountCorrect, setAccountCorrect] = useState(true);
  const [loading, setLoading] = useState(false);
  accountChangeText = (account) => {
    setAccount(account);
    console.log(account);
  };
  passwordChangeText = (password) => {
    setPassword(password);
    console.log(password);
  };
  accountSubmitEditing = () => {
    // 手机点击完成
    setLoading(true);
    // 发送异步请求
    // 模拟登录成功
    setAccountCorrect(false);
    setLoading(false);
  };
  return (
    <View>
      <View style={{ padding: pxToDp(20), paddingTop: pxToDp(40) }}>
        <Text
          style={{ fontSize: pxToDp(25), color: "#444", fontWeight: "bold" }}
        >
          账号密码登录
        </Text>
        <View style={{ marginTop: pxToDp(30) }}>
          <Input
            placeholder="请输入账号"
            keyboardType="email-address"
            value={account}
            inputStyle={{ color: "#333" }}
            onChangeText={accountChangeText}
            leftIcon={{
              type: "foundation",
              name: "torso",
              color: "#ccc",
              size: pxToDp(30),
              marginRight: pxToDp(6),
            }}
          />
        </View>
        <View style={{ marginTop: pxToDp(0) }}>
          <Input
            secureTextEntry={true}
            placeholder="请输入密码"
            // keyboardType="decimal-pad"
            value={password}
            inputStyle={{ color: "#333" }}
            onChangeText={passwordChangeText}
            errorMessage={accountCorrect ? "" : "账号不存在或密码错误"}
            leftIcon={{
              type: "foundation",
              name: "lock",
              color: "#ccc",
              size: pxToDp(30),
              marginRight: pxToDp(6),
            }}
          />
        </View>

        <View style={{ alignItems: "center", margin: pxToDp(20) }}>
          <Button
            title="登录"
            loading={loading}
            disabled={loading || account == "" || password == ""}
            buttonStyle={{
              backgroundColor:
                account != "" && password != ""
                  ? "rgba(111, 202, 186, 1)"
                  : "#ccc",
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
            onPress={accountSubmitEditing}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: pxToDp(5),
              width: pxToDp(328),
            }}
          >
            <View>
              <Text onPress={() => navigation.navigate("LoginByPhone")}>
                手机号登录
              </Text>
            </View>
            <View>
              <Text onPress={() => navigation.navigate("GetBackPassword")}>
                忘记密码
              </Text>
              {/* <Text>忘记密码</Text> */}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
