import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import { Dropdown } from 'react-native-element-dropdown';

const VacationsDate = () => {
  const [value, setValue] = useState(null);
  const data = [
    { label: 'Tùy chọn 1', value: 'option1' },
    { label: 'Tùy chọn 2', value: 'option2' },
    { label: 'Tùy chọn 3', value: 'option3' },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header title="Đăng ký nghỉ phép" />
      <View
        style={{
          marginTop: 25,
          marginRight: 10,
          marginLeft: 10,
          borderRadius: 10,
          borderColor: "grey",
          backgroundColor: "#fff",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 5,
          padding: 15,
          height: 500
        }}
      >
        <Text style={styles.label}>Loại phép:</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="---Loại phép---"
          value={value}
          onChange={(item) => {
            setValue(item.value);
          }}
        />

        <Text style={styles.label}>Thời gian nghỉ phép:</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="---Thời gian nghỉ phép---"
          value={value}
          onChange={(item) => {
            setValue(item.value);
          }}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  dropdown: {
    height: 35,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#aaa',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#000',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
  },
});
export default VacationsDate