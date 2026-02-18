import { Text, TextInput, View } from "react-native";
import Colors from "../constants/Colors";

interface Props {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
}

export default function InputField({
  label,
  placeholder,
  secureTextEntry = false,
}: Props) {
  return (
    <View className="mb-4">
      <Text className="mb-2 text-sm" style={{ color: Colors.textSecondary }}>
        {label}
      </Text>

      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colors.textMuted}
        secureTextEntry={secureTextEntry}
        className="py-4 px-4 rounded-xl"
        style={{
          backgroundColor: Colors.inputBackground,
          borderWidth: 1,
          borderColor: Colors.inputBorder,
          color: Colors.textPrimary,
        }}
      />
    </View>
  );
}
