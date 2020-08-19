import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const CheckedBox = () => (
  <ImageBackground
    style={styles.boxChecked}
    source={require('./img/check.jpeg')}
  />
);

const UncheckedBox = () => <View style={styles.box} />;

const Checkbox = ({label, isChecked, onPress}) => {
  const [checked, setChecked] = useState(isChecked || false);

  const onCheckboxClick = () => {
    setChecked(!checked);
    if (onPress) {
      onPress(checked);
    }
  };
  return (
    <TouchableOpacity
      style={styles.checkboxContainer}
      onPress={onCheckboxClick}>
      {checked ? <CheckedBox /> : <UncheckedBox />}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  boxChecked: {
    width: 16,
    height: 16,
    borderWidth: 2,
    borderColor: '#999',
    resizeMode: 'contain',
    padding: 8,
  },
  box: {
    width: 16,
    height: 16,
    borderWidth: 2,
    borderColor: '#999',
    padding: 8,
  },
  label: {
    color: '#535353',
    fontSize: 12,
    marginLeft: 4,
    alignSelf: 'center',
  },
});

export default Checkbox;
