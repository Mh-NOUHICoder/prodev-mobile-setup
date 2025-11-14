//join page
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, UserForm } from './types';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import { styles }  from '@/styles/_joinstyle';

type JoinScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Join'>;

type Props = {
  navigation: JoinScreenNavigationProp;
};

const JoinScreen: React.FC<Props> = ({ navigation }) => {
  const [form, setForm] = useState<UserForm>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleJoin = () => {
    if (!form.email || !form.password || !form.firstName || !form.lastName) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    if (form.password !== form.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    Alert.alert('Success', 'Account created!');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
        <View style={[styles.iconsection, {marginTop: 60}]}>
            <AntDesign name="home" size={24} color="black" 
                onPress={() => router.push("/")}
             />
             <Image source={require("@/assets/images/logo-green.png")}  />
        </View>
      <Text style={[styles.title, {marginTop: 60}]}>Create Account</Text>
      
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={form.firstName}
        onChangeText={(text) => setForm({...form, firstName: text})}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={form.lastName}
        onChangeText={(text) => setForm({...form, lastName: text})}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={form.email}
        onChangeText={(text) => setForm({...form, email: text})}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={form.password}
        onChangeText={(text) => setForm({...form, password: text})}
        secureTextEntry
      />
      
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChangeText={(text) => setForm({...form, confirmPassword: text})}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleJoin}>
        <Text style={styles.buttonText}>Join</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('./signin')}>
        <Text style={styles.link}>
          Already have an account? Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
};



export default JoinScreen;