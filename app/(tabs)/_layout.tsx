import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

const arrTab = [
  {
    name: 'index',
    title: 'Home',
    iconLib: SimpleLineIcons,
    iconName: 'home',
    size: 16,
  },
  {
    name: 'search',
    title: 'Search',
    iconLib: EvilIcons,
    iconName: 'search',
    size: 24,
  },
  {
    name: 'saved',
    title: 'Saved',
    iconLib: Feather,
    iconName: 'bookmark',
    size: 18,
  },

  {
    name: 'profile',
    title: 'Profile',
    iconLib: AntDesign,
    iconName: 'user',
    size: 17,
  },
];

export default function _Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: '#0f0D23',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: 'absolute',
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: '0f0d23',
          paddingHorizontal: 3,
        },
      }}
    >
      {arrTab.map((tab, i) => (
        <Tabs.Screen
          key={i}
          name={tab.name}
          options={{
            title: tab.title,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                title={tab.title}
                iconLib={tab.iconLib}
                iconName={tab.iconName}
                size={tab.size}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

const TabIcon = ({
  focused,
  title,
  iconLib: Icon,
  iconName,
  size,
}: {
  focused: boolean;
  title: string;
  iconLib: any;
  iconName: string;
  size: number;
}) => {
  const color = focused ? 'black' : '#999';
  const icon = <Icon name={iconName} size={size} color={color} />;
  if (focused) {
    return (
      <>
        <View
          className="flex-1 min-w-[112px] min-h-[55px] rounded-[50px] border flex flex-row mt-4 justify-center items-center"
          style={{
            backgroundColor:
              'linear-gradient(90deg,rgba(245, 176, 232, 1) 0%, rgba(232, 56, 167, 1) 100%)',
          }}
        >
          {icon}
          <Text className="text-secondary text-base font-semibold ml-2">
            {title}
          </Text>
        </View>
      </>
    );
  }
  return (
    <View className="size-full flex-1 justify-center items-center mt-3 rounded-full">
      {icon}
    </View>
  );
};
