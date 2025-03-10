import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  Switch,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const PostComposer = ({ onPost, onBack, imageUri }) => {
  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  // Social sharing options
  const [shareToFeed, setShareToFeed] = useState(true);
  const [shareToFacebook, setShareToFacebook] = useState(false);
  const [shareToTwitter, setShareToTwitter] = useState(false);
  const [shareToTumblr, setShareToTumblr] = useState(false);
  
  // Advanced options
  const [commentsEnabled, setCommentsEnabled] = useState(true);
  const [likesVisible, setLikesVisible] = useState(true);
  
  const handlePost = () => {
    const postData = {
      caption,
      location,
      imageUri,
      shareToFeed,
      shareToFacebook,
      shareToTwitter,
      shareToTumblr,
      commentsEnabled,
      likesVisible
    };
    
    // Pass the post data to the parent component
    onPost(postData);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 88 : 0}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#262626" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Post</Text>
        <TouchableOpacity onPress={handlePost} style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Share</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.postPreview}>
          <View style={styles.imagePreview} />
          
          <View style={styles.captionContainer}>
            <TextInput
              style={styles.captionInput}
              placeholder="Write a caption..."
              placeholderTextColor="#8E8E8E"
              multiline
              value={caption}
              onChangeText={setCaption}
            />
          </View>
        </View>
        
        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionText}>Tag People</Text>
          <Icon name="chevron-right" size={24} color="#CCCCCC" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionText}>Add Location</Text>
          <Icon name="chevron-right" size={24} color="#CCCCCC" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionText}>Add Music</Text>
          <Icon name="chevron-right" size={24} color="#CCCCCC" />
        </TouchableOpacity>
        
        <View style={styles.sectionDivider} />
        
        <View style={styles.shareSection}>
          <Text style={styles.sectionTitle}>Share To</Text>
          
          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Feed</Text>
            <Switch
              value={shareToFeed}
              onValueChange={setShareToFeed}
              trackColor={{ false: '#767577', true: '#DBDBDB' }}
              thumbColor={shareToFeed ? '#0095F6' : '#f4f3f4'}
              ios_backgroundColor="#767577"
            />
          </View>
          
          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Facebook</Text>
            <Switch
              value={shareToFacebook}
              onValueChange={setShareToFacebook}
              trackColor={{ false: '#767577', true: '#DBDBDB' }}
              thumbColor={shareToFacebook ? '#0095F6' : '#f4f3f4'}
              ios_backgroundColor="#767577"
            />
          </View>
          
          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Twitter</Text>
            <Switch
              value={shareToTwitter}
              onValueChange={setShareToTwitter}
              trackColor={{ false: '#767577', true: '#DBDBDB' }}
              thumbColor={shareToTwitter ? '#0095F6' : '#f4f3f4'}
              ios_backgroundColor="#767577"
            />
          </View>
          
          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Tumblr</Text>
            <Switch
              value={shareToTumblr}
              onValueChange={setShareToTumblr}
              trackColor={{ false: '#767577', true: '#DBDBDB' }}
              thumbColor={shareToTumblr ? '#0095F6' : '#f4f3f4'}
              ios_backgroundColor="#767577"
            />
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.advancedButton}
          onPress={() => setShowAdvanced(!showAdvanced)}
        >
          <Text style={styles.advancedButtonText}>
            {showAdvanced ? 'Hide Advanced Settings' : 'Show Advanced Settings'}
          </Text>
          <Icon 
            name={showAdvanced ? 'chevron-up' : 'chevron-down'} 
            size={20} 
            color="#0095F6" 
          />
        </TouchableOpacity>
        
        {showAdvanced && (
          <View style={styles.advancedSettings}>
            <View style={styles.optionRow}>
              <Text style={styles.optionText}>Comments</Text>
              <Switch
                value={commentsEnabled}
                onValueChange={setCommentsEnabled}
                trackColor={{ false: '#767577', true: '#DBDBDB' }}
                thumbColor={commentsEnabled ? '#0095F6' : '#f4f3f4'}
                ios_backgroundColor="#767577"
              />
            </View>
            
            <View style={styles.optionRow}>
              <Text style={styles.optionText}>Likes visibility</Text>
              <Switch
                value={likesVisible}
                onValueChange={setLikesVisible}
                trackColor={{ false: '#767577', true: '#DBDBDB' }}
                thumbColor={likesVisible ? '#0095F6' : '#f4f3f4'}
                ios_backgroundColor="#767577"
              />
            </View>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DBDBDB',
    paddingHorizontal: 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  shareButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  shareButtonText: {
    color: '#0095F6',
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: {
    flex: 1,
  },
  postPreview: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DBDBDB',
  },
  imagePreview: {
    width: 60,
    height: 60,
    backgroundColor: '#EFEFEF',
    borderRadius: 4,
  },
  captionContainer: {
    flex: 1,
    marginLeft: 16,
  },
  captionInput: {
    fontSize: 16,
    color: '#262626',
    minHeight: 100,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DBDBDB',
  },
  optionText: {
    fontSize: 16,
    color: '#262626',
  },
  sectionDivider: {
    height: 10,
    backgroundColor: '#F9F9F9',
  },
  shareSection: {
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#262626',
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  advancedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  advancedButtonText: {
    color: '#0095F6',
    fontWeight: '600',
    marginRight: 8,
  },
  advancedSettings: {
    borderTopWidth: 0.5,
    borderTopColor: '#DBDBDB',
  },
});

export default PostComposer;