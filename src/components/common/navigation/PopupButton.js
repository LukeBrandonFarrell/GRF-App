import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class PopupButton extends React.Component {
  state = {
    heightAnim: new Animated.Value(0),
  }

  componentWillReceiveProps(nextProps) {
    if(!this.props.noAnim){
      if(nextProps.visible){
        Animated.timing(
          this.state.heightAnim,
          {
            toValue: 65,
            duration: 150,
          }
        ).start();
      } else {
        Animated.timing(
          this.state.heightAnim,
          {
            toValue: 0,
            duration: 120,
          }
        ).start();
      }
    }
  }

  render(){
    const { buttonStyle, textStyle, iconStyle } = styles;
    const { heightAnim } = this.state;

    return (
      <Animated.View style={{ height: this.props.noAnim ? 65 : heightAnim }}>
        <TouchableOpacity onPress={this.props.onPress}>
          <View style={[ buttonStyle, this.props.buttonStyle ]}>
            <Text style={textStyle}>{ this.props.label }</Text>
            <Icon style={ iconStyle } name={ this.props.icon } size={32}/>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

PopupButton.defaultProps = {
  icon: 'chevron-circle-right',
};

const styles = StyleSheet.create({
  buttonStyle: {
    height:65,
    padding: 14,
    marginTop: 0,
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow:'hidden',
    borderRadius: 0,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#CD2C2E',
  },
  textStyle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },
  iconStyle: {
    color: 'white',
    position: 'absolute',
    right: 15,
  }
});

export { PopupButton };
