import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Import components
import CameraPreview from '../../components/create/CameraPreview';
import PhotoEditor from '../../components/create/PhotoEditor';
import PostComposer from '../../components/create/PostComposer';
import GallerySelector from '../../components/create/GallerySelector';

// Define the stages of post creation
const CREATION_STAGES = {
  GALLERY: 'gallery',
  CAMERA: 'camera',
  EDIT: 'edit',
  COMPOSE: 'compose',
};

const CreateScreen = ({ navigation }) => {
  const [creationStage, setCreationStage] = useState(CREATION_STAGES.GALLERY);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [editedMedia, setEditedMedia] = useState(null);
  
  // Handle back navigation based on current stage
  useEffect(() => {
    const handleBackPress = () => {
      if (creationStage === CREATION_STAGES.EDIT) {
        setCreationStage(selectedMedia ? CREATION_STAGES.GALLERY : CREATION_STAGES.CAMERA);
        return true;
      } else if (creationStage === CREATION_STAGES.COMPOSE) {
        setCreationStage(CREATION_STAGES.EDIT);
        return true;
      } else if (creationStage !== CREATION_STAGES.GALLERY) {
        setCreationStage(CREATION_STAGES.GALLERY);
        return true;
      }
      
      return false;
    };
    
    // In a real app, add hardware back button handler here
    
    // Clean up function
    return () => {
      // Remove hardware back button handler
    };
  }, [creationStage, selectedMedia]);
  
  // Handle image selection from gallery
  const handleMediaSelect = (media) => {
    setSelectedMedia(media);
    setCreationStage(CREATION_STAGES.EDIT);
  };
  
  // Handle photo capture from camera
  const handleCapture = () => {
    // In a real app, this would capture a photo
    const capturedPhoto = { id: 'captured_photo', type: 'photo' };
    setSelectedMedia(capturedPhoto);
    setCreationStage(CREATION_STAGES.EDIT);
  };
  
  // Handle camera flip
  const handleFlipCamera = () => {
    // In a real app, this would flip the camera
    console.log('Flipping camera');
  };
  
  // Navigate from camera to gallery
  const handleGalleryOpen = () => {
    setCreationStage(CREATION_STAGES.GALLERY);
  };
  
  // Handle photo editing completion
  const handleEditComplete = (editedPhoto) => {
    setEditedMedia(editedPhoto || selectedMedia);
    setCreationStage(CREATION_STAGES.COMPOSE);
  };
  
  // Handle post creation
  const handlePost = (postData) => {
    // In a real app, this would create the post
    console.log('Creating post with data:', postData);
    
    // Show confirmation and navigate back to feed
    Alert.alert('Success', 'Your post has been shared!', [
      { text: 'OK', onPress: () => navigation.navigate('Home') }
    ]);
  };
  
  // Render the appropriate component based on the current stage
  const renderContent = () => {
    switch (creationStage) {
      case CREATION_STAGES.GALLERY:
        return (
          <GallerySelector
            onImageSelect={handleMediaSelect}
            onCameraPress={() => setCreationStage(CREATION_STAGES.CAMERA)}
            onClose={() => navigation.goBack()}
          />
        );
      
      case CREATION_STAGES.CAMERA:
        return (
          <CameraPreview
            onCapture={handleCapture}
            onFlipCamera={handleFlipCamera}
            onClose={() => navigation.goBack()}
            onGalleryOpen={handleGalleryOpen}
          />
        );
      
      case CREATION_STAGES.EDIT:
        return (
          <PhotoEditor
            onNext={handleEditComplete}
            onCancel={() => {
              setCreationStage(selectedMedia ? CREATION_STAGES.GALLERY : CREATION_STAGES.CAMERA);
            }}
            imageUri={selectedMedia?.uri}
          />
        );
      
      case CREATION_STAGES.COMPOSE:
        return (
          <PostComposer
            onPost={handlePost}
            onBack={() => setCreationStage(CREATION_STAGES.EDIT)}
            imageUri={editedMedia?.uri || selectedMedia?.uri}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <View style={[
      styles.container, 
      { backgroundColor: creationStage === CREATION_STAGES.CAMERA ? '#000000' : '#FFFFFF' }
    ]}>
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CreateScreen;