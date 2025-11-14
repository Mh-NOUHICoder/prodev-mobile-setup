import { Text, View , StyleSheet , Image , TextInput, TouchableOpacity   } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {styles} from '@/styles';
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function App(){
  return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.navGroup}>
          <Ionicons name="person-circle" size={30} color="black" />
          <Image source={require("@/assets/images/logo.png")}  />
        </View>
        <Text style={styles.largeText}>Sign in to your</Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText}>
          Enter your email and password to sign in.
        </Text>
        <View style={styles.formGroup}>
          <View>
            <Text style={styles.placeholderText}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.inputField} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput style={{ flex: 1 }} />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <View style={styles.dividerGroup}>
          <View
            style={styles.divider}
          ></View>
          <Text
            style={styles.dividerText}
          >
            OR
          </Text>
          <View
            style={styles.divider}
          ></View>
        </View>

        <View style={styles.socialMediaButtonGroup}>
          <TouchableOpacity style={styles.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Facebook
              </Text>
            </View>
            <View style={styles.subTextGroup}>
              <Text style={styles.subText}>Don't have an account?</Text>
              <Text style={styles.subTextJoin}>Join now</Text>
            </View>
          </TouchableOpacity>
        </View>



      </SafeAreaView>
    </SafeAreaProvider>
  )
}

