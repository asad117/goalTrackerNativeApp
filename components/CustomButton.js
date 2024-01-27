import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, title }) => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const buttonStyles = [
    styles.button,
    isHovered && styles.buttonHovered,
  ];

  const textStyles = [
    styles.text,
    isHovered && styles.textHovered,
  ];

  return (
    <TouchableOpacity
      onPress={onPress}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={buttonStyles}
    >
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonHovered: {
    backgroundColor: '#2980b9',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  textHovered: {
    fontWeight: 'bold',
  },
});

export default CustomButton;
