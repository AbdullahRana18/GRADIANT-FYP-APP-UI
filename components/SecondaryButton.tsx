import { Pressable, Text } from "react-native";

export default function SecondaryButton({ title }: { title: string }) {
  return (
    <Pressable className="border border-[#3FB7A8] py-4 rounded-xl items-center">
      <Text className="text-white text-base font-medium">{title}</Text>
    </Pressable>
  );
}
