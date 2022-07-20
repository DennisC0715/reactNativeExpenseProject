import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HeaderButton = ({ name, size, color, onPress }) => {
 
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && css.pressed}
      android_ripple
    >
      <View style={css.container}>
        <Ionicons name={name} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default HeaderButton;
const css = StyleSheet.create({
  container: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 0,
  },
  pressed: {
    opacity: 0.7,
  },
});
