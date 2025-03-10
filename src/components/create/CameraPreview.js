import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Dimensions 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const CameraPreview = ({ onCapture, onFlipCamera, onClose, onGalleryOpen }) => {
  const [flashMode, setFlashMode] = useState('off');
  
  const toggleFlash = () => {
    setFlashMode(prev => prev === 'off' ? 'on' : 'off');
  };

  return (
    <View style={styles.container}>
      {/* This would be a real camera preview in a production app */}
      <View style={styles.cameraPreview}>
        <Text style={styles.placeholderText}>Camera Preview</Text>
      </View>
      
      {/* Top controls */}
      <View style={styles.topControls}>
        <TouchableOpacity onPress={onClose} style={styles.controlButton}>
          <Icon name="close" size={28} color="#FFFFFF" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={toggleFlash} style={styles.controlButton}>
          <Icon 
            name={flashMode === 'on' ? 'flash' : 'flash-off'} 
            size={28} 
            color="#FFFFFF" 
          />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.controlButton}>
          <Icon name="cog" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      
      {/* Bottom controls */}
      <View style={styles.bottomControls}>
        <TouchableOpacity onPress={onGalleryOpen} style={styles.galleryButton}>
          <View style={styles.galleryPreview} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={onCapture} style={styles.captureButton}>
          <View style={styles.captureButtonInner} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={onFlipCamera} style={styles.flipButton}>
          <Ionicons name="camera-reverse-outline" size={36} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      
      {/* Camera mode selector */}
      <View style={styles.modeSelector}>
        <TouchableOpacity style={styles.modeOption}>
          <Text style={[styles.modeText, styles.activeMode]}>PHOTO</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.modeOption}>
          <Text style={styles.modeText}>VIDEO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  cameraPreview: {
    width: width,
    height: height,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  topControls: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  controlButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomControls: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButtonInner: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FFFFFF',
  },
  galleryButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  galleryPreview: {
    width: '100%',
    height: '100%',
    backgroundColor: '#CCCCCC',
  },
  flipButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modeSelector: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  modeOption: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  modeText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: '600',
    fontSize: 16,
  },
  activeMode: {
    color: '#FFFFFF',
  },
});

export default CameraPreview;