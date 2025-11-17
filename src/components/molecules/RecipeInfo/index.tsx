import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../atoms/Text';
import Spacing from '../../atoms/Spacing';

const RecipeInfo = ({title, description, cookTime}) => {
  return (
    <View style={styles.container}>
      <Text type="subtitle" numberOfLines={1}>
        {title}
      </Text>
      
      <Spacing size="xs" />
      
      <Text type="body" numberOfLines={2}>
        {description}
      </Text>
      
      <Spacing size="sm" />
      
      <View style={styles.timeContainer}>
        <View style={styles.timeSpacing} />
        <Text type="caption">
          {cookTime}
        </Text>
      </View>
    </View>
  );
};

export default RecipeInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeSpacing: {
    width: 4,
  },
});