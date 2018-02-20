import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

class PhotoBox extends React.Component {
  static propTypes = {
    url: PropTypes.object.isRequired,
  };

  renderSelected(){
    if(this.props.selected){
      const { tintOverlay, iconOverlay } = styles;

      return (
        <View style={ tintOverlay }>
          <Icon style={ iconOverlay } name='check-circle-o' size={22}/>
        </View>
      );
    }
  }

  render() {
    const { url, onPress } = this.props;
    const { photoBox } = styles;

    return (
      <TouchableOpacity onPress={onPress}>
        <Image source={url} style={ photoBox } />
        { this.renderSelected() }
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  photoBox : {
    flex: 1,
    width: Dimensions.get('window').width / 2,
    borderColor: 'white',
    borderWidth: 0.5,
    resizeMode: 'cover',
  },
  tintOverlay: {
    backgroundColor: '#2c6dcd77',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  iconOverlay: {
    color: 'white',
    top: 6,
    left: 6,
    right: 0,
  }
});

export { PhotoBox };
