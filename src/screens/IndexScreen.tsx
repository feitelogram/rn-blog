import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BlogContext } from '../context/BlogContext';
import { FlatList } from 'react-native-gesture-handler';
import { ActionTypes } from '../types/actions';

const IndexScreen = () => {
  const { state, dispatch } = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        data={state}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
      <Button
        title='Add Post'
        onPress={() => {
          dispatch({
            type: ActionTypes.addBlogPost,
            payload: {
              title: 'New Post',
            },
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
