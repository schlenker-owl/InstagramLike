import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const toggleLike = () => setLiked(!liked);
  const toggleSave = () => setSaved(!saved);

  return (
    <View style={styles.container}>
      {/* Post Header */}
      <View style={styles.postHeader}>
        <View style={styles.userInfo}>
          <View style={styles.userAvatar} />
          <View>
            <Text style={styles.username}>{post.username}</Text>
            {post.location && <Text style={styles.location}>{post.location}</Text>}
          </View>
        </View>
        <TouchableOpacity>
          <Icon name="dots-horizontal" size={20} color="#262626" />
        </TouchableOpacity>
      </View>

      {/* Post Image */}
      <View style={styles.imageContainer}>
        <View style={styles.postImage} />
      </View>

      {/* Post Actions */}
      <View style={styles.actionsContainer}>
        <View style={styles.leftActions}>
          <TouchableOpacity style={styles.actionButton} onPress={toggleLike}>
            <Icon 
              name={liked ? 'heart' : 'heart-outline'} 
              size={26} 
              color={liked ? '#E1306C' : '#262626'} 
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Feather name="message-circle" size={24} color="#262626" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Feather name="send" size={24} color="#262626" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={toggleSave}>
          <Icon 
            name={saved ? 'bookmark' : 'bookmark-outline'} 
            size={26} 
            color="#262626" 
          />
        </TouchableOpacity>
      </View>

      {/* Likes */}
      <View style={styles.likesContainer}>
        <Text style={styles.likes}>{post.likes} likes</Text>
      </View>

      {/* Caption */}
      <View style={styles.captionContainer}>
        <Text style={styles.caption}>
          <Text style={styles.captionUsername}>{post.username}</Text> {post.caption}
        </Text>
      </View>

      {/* Comments */}
      {post.comments > 0 && (
        <TouchableOpacity style={styles.commentsContainer}>
          <Text style={styles.comments}>
            View all {post.comments} comments
          </Text>
        </TouchableOpacity>
      )}

      {/* Timestamp */}
      <View style={styles.timestampContainer}>
        <Text style={styles.timestamp}>{post.timestamp}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#EFEFEF',
    marginRight: 10,
  },
  username: {
    fontWeight: '600',
    fontSize: 13,
  },
  location: {
    fontSize: 11,
    color: '#262626',
  },
  imageContainer: {
    width: width,
    height: width,
    backgroundColor: '#FAFAFA',
  },
  postImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#EFEFEF',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  leftActions: {
    flexDirection: 'row',
  },
  actionButton: {
    marginRight: 16,
  },
  likesContainer: {
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  likes: {
    fontWeight: '600',
    fontSize: 13,
  },
  captionContainer: {
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  caption: {
    fontSize: 13,
    lineHeight: 18,
  },
  captionUsername: {
    fontWeight: '600',
  },
  commentsContainer: {
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  comments: {
    fontSize: 13,
    color: '#8E8E8E',
  },
  timestampContainer: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  timestamp: {
    fontSize: 11,
    color: '#8E8E8E',
  },
});

export default Post;