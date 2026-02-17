import { Pressable, Text } from "react-native";

export default function PrimaryButton({ title }: { title: string }) {
  return (
    <Pressable className="bg-[#3FB7A8] py-4 rounded-xl items-center mb-3 active:opacity-80">
      <Text className="text-white text-base font-semibold">{title}</Text>
    </Pressable>
  );
}
