import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {styles} from '@/styles/_joinstyle';
import { FontAwesome, Ionicons  } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router"; // <-- expo-router

export default function App(){
  const router = useRouter();
  return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.navGroup}>
          <Ionicons name="person-circle" size={30} color="black" />
          <AntDesign name="home" size={24} color="black" 
            onPress={() => router.push("/")}
          />
          <Image source={require("@/assets/images/logo-green.png")}  />
        </View>
        <View style={[styles.titleTextGroup,{display: "flex", justifyContent: "center", alignItems: "center"}]}> 
            <Text style={styles.titleText}>Sign in to your</Text>
            <Text style={styles.signupTitleText}>Account</Text>
            <Text style={styles.subText}>
              Enter your email and password to sign in.
            </Text>
        </View>
        <View style={styles.formGroup}>
          <View>
            <Text style={styles.placeholderText}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.inputField} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Password</Text>
            <View style={styles.passwordControl}>
              <TextInput style={{ flex: 1 }} />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>
        <TouchableOpacity style={styles.primaryButton}>
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
            
          </TouchableOpacity>
          <View style={{ flexDirection: "column", gap: 5 , alignItems: "center" , marginTop: 10 }}>
              <Text style={styles.subText}>Don't have an account?</Text>
              <Text style={styles.subText}>Join now</Text>
          </View>
        </View>



      </SafeAreaView>
    </SafeAreaProvider>
  )
}

