import { Link } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';

const TrendingCard = ({
  movie: { movie_id, title, poster_url },
  index,
}: {
  movie: TrendingMovie;
  index: number;
}) => {
  return (
    <Link href={`/movies/${movie_id}`} asChild>
      <TouchableOpacity className="w-32 relative pl-5">
        <Image
          source={{ uri: poster_url }}
          className="w-32 h-48 rounded-lg"
          resizeMode="cover"
        />
        <View className="absolute bottom-9 -left-3.5 px-2 py-1 rouded-full">
          <Text className="text-6xl text-white font-bold">{index + 1}</Text>
        </View>
        <Text
          className="text-sm font-bold mt-2 text-light-200"
          numberOfLines={2}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;
