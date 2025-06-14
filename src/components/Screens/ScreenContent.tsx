import { Text, View } from 'react-native';

import { EditScreenInfo } from '../EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>{title}</Text>
      <View className={styles.separator} />
      <EditScreenInfo path={path} />
      {children}
    </View>
  );
};
// const styles = {
//   container: `items-center flex-1 justify-center`,
//   separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
//   title: `text-xl font-bold`,
// };
const styles = {
  container: `flex-1 w-full px-4 py-6`, // No vertical centering, full width
  separator: `h-[1px] my-4 w-full bg-gray-200`,
  title: `text-xl font-bold text-left`,
};