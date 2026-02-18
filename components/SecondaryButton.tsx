import { Pressable, Text } from "react-native";
import Colors from "../constants/Colors";

interface Props {
  title: string;
  handlePress: () => void;
}

export default function SecondaryButton({ title, handlePress }: Props) {
  return (
    <Pressable
      onPress={handlePress}
      className="py-4 rounded-xl items-center mb-3"
      style={{ borderWidth: 1, borderColor: Colors.primary }}
    >
      <Text className="text-base font-medium" style={{ color: Colors.white }}>
        {title}
      </Text>
    </Pressable>
  );
}
