import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from '../layout/Card';

const Title = ({ label }) => {
  return (
    <Card style={{
      backgroundColor: '#f6f6f6',
      borderBottomWidth: 0
    }}>
      <Text style={styles.titleStyle}>{label}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  titleStyle : {
    fontSize: 24,
  }
});

export { Title };
