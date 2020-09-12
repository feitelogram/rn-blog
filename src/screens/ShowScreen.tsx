import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { BlogContext } from '../context/BlogContext';

interface ShowProps {
  route: RouteProp<RootStackParamList, 'Show'>;
}

const ShowScreen = ({ route }: ShowProps) => {
  const id = route.params.id || 0;
  const { state, dispatch } = useContext(BlogContext);

  const foundPost = state.find((post) => post.id === id);

  return (
    <View>
      <Text>{foundPost?.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
