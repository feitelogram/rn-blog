import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BlogContext } from '../context/BlogContext';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { ActionTypes } from '../types/actions';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const IndexScreen = () => {
  const { state, dispatch } = useContext(BlogContext);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Feather style={styles.newButton} name='plus' size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const addPost = () => {
    dispatch({
      type: ActionTypes.addBlogPost,
      payload: {
        title: `Post number ${state.length + 1}`,
      },
    });
  };

  const deletePost = (id: number) => {
    dispatch({
      type: ActionTypes.deleteBlogPost,
      payload: id,
    });
  };

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Show', { id: item.id });
              }}
            >
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deletePost(item.id as number)}>
              <Feather style={styles.icon} name='trash' />
            </TouchableOpacity>
          </View>
        )}
      />
      <Button title='Add Post' onPress={addPost} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
  newButton: {
    paddingHorizontal: 10,
  },
});

export default IndexScreen;
