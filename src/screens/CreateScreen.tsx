import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlogContext } from '../context/BlogContext';

const CreateScreen = () => {
  const { state, dispatch } = useContext(BlogContext);

  return (
    <View>
      <Text>Create Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
