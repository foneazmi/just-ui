import { AppList, AppIconProps } from "@/components/app-icon";
import { SafeAreaView } from "react-native";

const data: AppIconProps[] = [
  {
    label: "Youtube",
    path: "/app1",
    icon: "https://cdn.icon-icons.com/icons2/1826/PNG/64/4202041logosocialsocialmediavideoyoutube-115647_115654.png",
  },
];

export default function () {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppList data={data} />
    </SafeAreaView>
  );
}
