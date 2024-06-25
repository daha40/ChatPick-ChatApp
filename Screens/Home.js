import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet , ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';
const profileImag = "https://avatars.githubusercontent.com/u/64675525?s=400&u=b5b1b3a47cc4a6387cfd3d34ec4d5c30af09665b&v=4";
const welcomeImage = require("../assets/welcompic.png");

const Home = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerTitle: "",
            headerLeft: () => (
            <TouchableOpacity>
                <FontAwesome 
                name="search" size={25} 
                color={colors.primary} 
                style={{marginLeft: 15, marginTop: 10}}
                />
            </TouchableOpacity>     
            ),
            headerRight: () => (
                <TouchableOpacity>
                <Image
                    source={{ uri: profileImag }}
                    style={{
                        width: 50,
                        height: 50,
                        marginRight: 15,
                        borderRadius:30,
                        marginTop:15
                    }}
                />
                </TouchableOpacity>     
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome back!</Text>
            <Text style={styles.subtitleText}>Check out the latest updates and messages</Text>
            <View style={styles.containerImg}>    
            <Image
                source={welcomeImage}
                style={styles.image}
            />
            </View>
            <View style={styles.chatContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Chat")}
                    style={styles.chatButton}
                >
                    <Entypo name="chat" size={24} color={colors.lightGray} />
                </TouchableOpacity>
            </View>
        </View>
    );
    };

    export default Home;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#fff",
        },
        chatButton: {
            backgroundColor: colors.primary,
            height: 60,
            width: 60,
            borderRadius: 60,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: colors.primary,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: .9,
            shadowRadius: 8,
            marginRight: 20,
            marginBottom: 50,
            marginLeft:310
        },
        welcomeText: {
            fontSize: 35,
            fontWeight: 'bold',
            color: colors.primary,
            textAlign: 'center',
            marginVertical: 10,
            marginTop:20
        },
        subtitleText: {
            fontSize: 18,
            color: colors.gray,
            textAlign: 'center',
            marginBottom: 20,
            fontWeight:'400'
        },
        chatContainer: {
            flex: 1,
            justifyContent:'flex-end' ,
            alignItems: 'center',
            paddingHorizontal: 20,
        },
        image: {
            width: 450,
            height: 450,
            resizeMode: 'stretch',
        },
        containerImg:{
            marginTop: 80,
            alignItems:'center',
            justifyContent:'center',
            flex:1,

        }
    });