import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const FILTERS = [
  { id: 'normal', name: 'Normal' },
  { id: 'clarendon', name: 'Clarendon' },
  { id: 'gingham', name: 'Gingham' },
  { id: 'moon', name: 'Moon' },
  { id: 'lark', name: 'Lark' },
  { id: 'reyes', name: 'Reyes' },
  { id: 'juno', name: 'Juno' },
  { id: 'slumber', name: 'Slumber' },
  { id: 'crema', name: 'Crema' },
  { id: 'ludwig', name: 'Ludwig' },
  { id: 'aden', name: 'Aden' },
  { id: 'perpetua', name: 'Perpetua' },
];

const EDIT_TOOLS = [
  { id: 'adjust', icon: 'adjust', name: 'Adjust' },
  { id: 'brightness', icon: 'brightness-6', name: 'Brightness' },
  { id: 'contrast', icon: 'contrast', name: 'Contrast' },
  { id: 'structure', icon: 'image-filter-black-white', name: 'Structure' },
  { id: 'warmth', icon: 'white-balance-sunny', name: 'Warmth' },
  { id: 'saturation', icon: 'palette', name: 'Saturation' },
  { id: 'color', icon: 'color-helper', name: 'Color' },
  { id: 'fade', icon: 'blur', name: 'Fade' },
  { id: 'vignette', icon: 'image-filter-vignette', name: 'Vignette' },
];

const PhotoEditor = ({ onNext, onCancel, imageUri }) => {
  const [activeTab, setActiveTab] = useState('filter');
  const [selectedFilter, setSelectedFilter] = useState('normal');
  const [selectedTool, setSelectedTool] = useState(null);

  const renderFilterItem = (filter) => (
    <TouchableOpacity 
      key={filter.id}
      style={[
        styles.filterItem,
        selectedFilter === filter.id && styles.selectedFilterItem
      ]}
      onPress={() => setSelectedFilter(filter.id)}
    >
      <View style={styles.filterPreview}>
        <View style={[styles.filterEffect, { opacity: filter.id === 'normal' ? 0 : 0.5 }]} />
      </View>
      <Text style={styles.filterName}>{filter.name}</Text>
    </TouchableOpacity>
  );
  
  const renderEditItem = (tool) => (
    <TouchableOpacity 
      key={tool.id}
      style={[
        styles.editItem,
        selectedTool === tool.id && styles.selectedEditItem
      ]}
      onPress={() => setSelectedTool(tool.id)}
    >
      <Icon name={tool.icon} size={24} color="#FFFFFF" />
      <Text style={styles.editName}>{tool.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Preview of the captured/selected image */}
      <View style={styles.imagePreview}>
        <Text style={styles.placeholderText}>Photo Preview</Text>
        {/* Apply filter effect based on selectedFilter */}
        <View style={[
          styles.filterOverlay,
          { backgroundColor: selectedFilter !== 'normal' ? 'rgba(0, 0, 0, 0.2)' : 'transparent' }
        ]} />
      </View>
      
      {/* Top toolbar */}
      <View style={styles.toolbar}>
        <TouchableOpacity onPress={onCancel} style={styles.toolbarButton}>
          <Icon name="close" size={28} color="#FFFFFF" />
        </TouchableOpacity>
        
        <View style={styles.toolbarTabs}>
          <TouchableOpacity 
            style={[styles.toolbarTab, activeTab === 'filter' && styles.activeTab]}
            onPress={() => setActiveTab('filter')}
          >
            <Text style={styles.toolbarTabText}>Filter</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.toolbarTab, activeTab === 'edit' && styles.activeTab]}
            onPress={() => setActiveTab('edit')}
          >
            <Text style={styles.toolbarTabText}>Edit</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity onPress={onNext} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      
      {/* Bottom panel for filters/editing tools */}
      <View style={styles.bottomPanel}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.panelContent}
        >
          {activeTab === 'filter' && FILTERS.map(renderFilterItem)}
          {activeTab === 'edit' && EDIT_TOOLS.map(renderEditItem)}
        </ScrollView>
      </View>
      
      {/* If a tool is selected, show adjustment slider */}
      {activeTab === 'edit' && selectedTool && (
        <View style={styles.adjustmentSlider}>
          <View style={styles.sliderTrack}>
            <View style={styles.sliderThumb} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  imagePreview: {
    width: width,
    height: height - 200, // Leave space for controls
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  filterOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
  },
  toolbarButton: {
    padding: 8,
  },
  toolbarTabs: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 8,
    padding: 4,
  },
  toolbarTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  activeTab: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  toolbarTabText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
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
  bottomPanel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 120,
    paddingTop: 10,
  },
  panelContent: {
    paddingHorizontal: 8,
    paddingBottom: 20,
  },
  filterItem: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 80,
  },
  selectedFilterItem: {
    opacity: 1,
  },
  filterPreview: {
    width: 64,
    height: 64,
    borderRadius: 6,
    backgroundColor: '#CCCCCC',
    marginBottom: 6,
    overflow: 'hidden',
  },
  filterEffect: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  filterName: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  editItem: {
    alignItems: 'center',
    marginHorizontal: 16,
    opacity: 0.7,
  },
  selectedEditItem: {
    opacity: 1,
  },
  editName: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 6,
  },
  adjustmentSlider: {
    position: 'absolute',
    bottom: 140,
    left: 16,
    right: 16,
    height: 40,
    justifyContent: 'center',
  },
  sliderTrack: {
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: '100%',
    position: 'relative',
  },
  sliderThumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: -9,
    left: '50%',
    marginLeft: -10,
  },
});

export default PhotoEditor;