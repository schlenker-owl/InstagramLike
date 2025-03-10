import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList, 
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 4;
const ITEM_HEIGHT = ITEM_WIDTH;
const SPACING = 1;

// Mock data for gallery images
const generateMockGalleryImages = (count = 40) => {
  const images = [];
  
  for (let i = 1; i <= count; i++) {
    images.push({
      id: `img_${i}`,
      uri: `mock_image_${i}`, // In a real app, this would be a real image URI
      type: i % 8 === 0 ? 'video' : 'photo' // Some items are videos
    });
  }
  
  return images;
};

const MOCK_ALBUMS = [
  { id: 'recents', name: 'Recents' },
  { id: 'instagram', name: 'Instagram' },
  { id: 'favorites', name: 'Favorites' },
  { id: 'screenshots', name: 'Screenshots' },
  { id: 'downloads', name: 'Downloads' },
  { id: 'whatsapp', name: 'WhatsApp' },
];

const MOCK_GALLERY_IMAGES = generateMockGalleryImages(50);

const GallerySelector = ({ onImageSelect, onCameraPress, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(MOCK_GALLERY_IMAGES[0]);
  const [selectedAlbum, setSelectedAlbum] = useState('recents');
  const [selectedMediaType, setSelectedMediaType] = useState('all');
  
  const handleImageSelect = (image) => {
    setSelectedImage(image);
    if (onImageSelect) {
      onImageSelect(image);
    }
  };
  
  const renderGalleryItem = ({ item, index }) => {
    const isSelected = selectedImage && selectedImage.id === item.id;
    
    return (
      <TouchableOpacity 
        style={styles.galleryItem} 
        onPress={() => handleImageSelect(item)}
      >
        <View style={[
          styles.galleryImage,
          { backgroundColor: getRandomColor(index) }
        ]}>
          {isSelected && (
            <View style={styles.selectedOverlay}>
              <View style={styles.selectedCheckmark}>
                <Icon name="check" size={16} color="#FFFFFF" />
              </View>
            </View>
          )}
          
          {item.type === 'video' && (
            <View style={styles.videoIndicator}>
              <Icon name="play" size={16} color="#FFFFFF" />
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };
  
  // Function to generate random colors for placeholder items
  const getRandomColor = (index) => {
    const colors = [
      '#FADBD8', '#D5F5E3', '#D6EAF8', '#F5EEF8', 
      '#FDEBD0', '#EAEDED', '#F9EBEA', '#F4ECF7'
    ];
    return colors[index % colors.length];
  };

  return (
    <View style={styles.container}>
      {/* Header with album selector */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Icon name="close" size={24} color="#262626" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.albumSelector}>
          <Text style={styles.albumName}>
            {MOCK_ALBUMS.find(album => album.id === selectedAlbum)?.name || 'Recents'}
          </Text>
          <Icon name="chevron-down" size={20} color="#262626" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => onImageSelect(selectedImage)} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      
      {/* Selected image preview */}
      <View style={styles.previewContainer}>
        <View style={styles.previewImage} />
        
        <TouchableOpacity style={styles.multipleSelectButton}>
          <Icon name="image-multiple-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        
        {selectedImage && selectedImage.type === 'video' && (
          <View style={styles.videoDuration}>
            <Text style={styles.videoDurationText}>0:15</Text>
          </View>
        )}
      </View>
      
      {/* Media type filter */}
      <View style={styles.mediaTypeFilter}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity 
            style={[
              styles.mediaTypeOption,
              selectedMediaType === 'all' && styles.selectedMediaType
            ]}
            onPress={() => setSelectedMediaType('all')}
          >
            <Text style={styles.mediaTypeText}>All</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[
              styles.mediaTypeOption,
              selectedMediaType === 'photos' && styles.selectedMediaType
            ]}
            onPress={() => setSelectedMediaType('photos')}
          >
            <Text style={styles.mediaTypeText}>Photos</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[
              styles.mediaTypeOption,
              selectedMediaType === 'videos' && styles.selectedMediaType
            ]}
            onPress={() => setSelectedMediaType('videos')}
          >
            <Text style={styles.mediaTypeText}>Videos</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[
              styles.mediaTypeOption,
              selectedMediaType === 'selfies' && styles.selectedMediaType
            ]}
            onPress={() => setSelectedMediaType('selfies')}
          >
            <Text style={styles.mediaTypeText}>Selfies</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[
              styles.mediaTypeOption,
              selectedMediaType === 'portraits' && styles.selectedMediaType
            ]}
            onPress={() => setSelectedMediaType('portraits')}
          >
            <Text style={styles.mediaTypeText}>Portraits</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      
      {/* Gallery grid */}
      <FlatList
        data={MOCK_GALLERY_IMAGES}
        renderItem={renderGalleryItem}
        keyExtractor={(item) => item.id}
        numColumns={4}
        initialNumToRender={20}
        maxToRenderPerBatch={20}
        windowSize={21}
        showsVerticalScrollIndicator={false}
      />
      
      {/* Camera button */}
      <TouchableOpacity 
        style={styles.cameraButton}
        onPress={onCameraPress}
      >
        <Icon name="camera" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
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
  closeButton: {
    padding: 8,
  },
  albumSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  albumName: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 4,
  },
  nextButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nextButtonText: {
    color: '#0095F6',
    fontWeight: 'bold',
    fontSize: 16,
  },
  previewContainer: {
    width: width,
    height: width,
    backgroundColor: '#EFEFEF',
    position: 'relative',
  },
  previewImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#EFEFEF',
  },
  multipleSelectButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoDuration: {
    position: 'absolute',
    top: 16,
    left: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 4,
  },
  videoDurationText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  mediaTypeFilter: {
    height: 48,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DBDBDB',
  },
  mediaTypeOption: {
    height: '100%',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  selectedMediaType: {
    borderBottomWidth: 2,
    borderBottomColor: '#262626',
  },
  mediaTypeText: {
    fontSize: 14,
    color: '#262626',
  },
  galleryItem: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    padding: SPACING / 2,
  },
  galleryImage: {
    width: '100%',
    height: '100%',
  },
  selectedOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCheckmark: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#0095F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  videoIndicator: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0095F6',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export default GallerySelector;