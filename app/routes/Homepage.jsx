import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TypeWriter from "react-native-typewriter";

const { width } = Dimensions.get("window");

const Homepage = () => {
  const navigation = useNavigation();
  const [typingStatus, setTypingStatus] = useState("human1");
  const [sequenceIndex, setSequenceIndex] = useState(0);

  const messages = [
    { text: ": We produce food for Mice", from: "bot" },
    { text: ": We produce food for Hamsters", from: "human2" },
    { text: ": We produce food for Guinea Pigs", from: "bot" },
    { text: ": We produce food for Chinchillas", from: "human1" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSequenceIndex((prev) => (prev + 1) % messages.length);
      setTypingStatus(messages[(sequenceIndex + 1) % messages.length].from);
    }, 4000);
    return () => clearInterval(interval);
  }, [sequenceIndex]);

  const getProfileImage = () => {
    if (typingStatus === "human1")
      return require("../../assets/public/human1.jpeg");
    if (typingStatus === "human2")
      return require("../../assets/public/human2.jpeg");
    return require("../../assets/public/bot.png");
  };

  return (
    <View className="flex-1 bg-[#0e0b1d] px-4 pt-12 pb-6 justify-between">
      {/* Orbital Background Image */}
      <Image
        source={require("../../assets/public/orbital.png")}
        className="absolute bottom-0 left-0 opacity-5"
        style={{ width: 400, height: 400 }}
      />

      {/* Top Section */}
      <View className="items-center">
        <Text
          className="text-5xl text-transparent font-extrabold bg-clip-text"
          style={{
            color: "transparent",
            backgroundImage: "linear-gradient(to right, #217bfe, #e55571)",
          }}
        >
          GenieX
        </Text>
        <Text className="text-lg text-white mt-2">
          Supercharge your creativity and productivity
        </Text>
        <Text className="text-sm text-gray-300 mt-4 text-center max-w-[90%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
          repellendus at neque id obcaecati recusandae veniam officia, placeat
          fugit consequatur doloribus. Incidunt libero error eius repudiandae
          iure labore fugit asperiores.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Dashboard")}
          className="mt-6 bg-[#217bfe] px-6 py-3 rounded-2xl"
        >
          <Text className="text-white text-sm font-semibold">Get Started</Text>
        </TouchableOpacity>
      </View>

      {/* Bot Section */}
      <View className="items-center mt-12">
        <View className="w-[90%] aspect-square bg-[#140e2d] rounded-3xl items-center justify-center relative">
          {/* Background Animation (Placeholder Static) */}
          <Image
            source={require("../../assets/public/bg.png")}
            className="absolute top-0 left-0 opacity-20"
            style={{ width: "200%", height: "100%" }}
          />

          {/* Bot Image */}
          <Image
            source={require("../../assets/public/bot.png")}
            className="w-full h-full"
            resizeMode="contain"
          />

          {/* Chat Bubble */}
          {width > 768 && (
            <View className="absolute bottom-[-20px] right-[-30px] flex-row items-center bg-[#2c2937] px-4 py-2 rounded-xl">
              <Image
                source={getProfileImage()}
                className="w-8 h-8 rounded-full mr-2"
              />
              <TypeWriter
                typing={1}
                maxDelay={50}
                style={{ color: "#fff", fontSize: 12 }}
              >
                {messages[sequenceIndex].text}
              </TypeWriter>
            </View>
          )}
        </View>
      </View>

      {/* Terms Section */}
      <View className="items-center mt-10">
        <Image
          source={require("../../assets/public/logo.png")}
          className="w-4 h-4 mb-2"
          resizeMode="contain"
        />
        <View className="flex-row space-x-4">
          <Text className="text-xs text-gray-500">Terms of Service</Text>
          <Text className="text-xs text-gray-500">Privacy Policy</Text>
        </View>
      </View>
    </View>
  );
};

export default Homepage;
