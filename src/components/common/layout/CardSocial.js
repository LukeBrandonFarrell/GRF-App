import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Card } from './Card';
import { CardSection } from './CardSection';
import { IconWithText } from '../typography/IconWithText';
import Icon from 'react-native-vector-icons/Ionicons';

const CardSocial = ({ text, icon, onPress, linked, linkedLabel }) => {
  const color = linked ? '#CD2C2E' : '#656565';

  return (
    <TouchableOpacity onPress={onPress}>
      <Card>
        <CardSection>
          <IconWithText
            text={text}
            icon={icon}
            iconColor={color}
            textColor={color}
          />
        </CardSection>

        <CardSection style={{justifyContent: 'flex-end', marginRight: 5, alignItems:'center'}}>
          <Text style={{ color, marginRight: 5 }}>{ linkedLabel }</Text>
          <Icon name='ios-arrow-forward' size={28} color={color}/>
        </CardSection>
      </Card>
    </TouchableOpacity>
  );
};

export { CardSocial };
