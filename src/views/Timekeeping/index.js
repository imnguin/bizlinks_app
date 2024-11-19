import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Timekeeping = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chấm công</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Image
            source={require('../../../assets/timekeeping1.png')}
            resizeMode='contain'
            style={styles.cardContentImage}
          />
          <View style={styles.cardContentTimerRow}>
            <Text style={styles.cardContentTimerText}>Còn lại </Text>
            <Text
              style={styles.cardContentTimerHighlight}>05 giờ, 32 phút, 21 giây</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btnTimekeeping}>
          <Text style={styles.btnTimekeepingText}>Chấm công ngay</Text>
        </TouchableOpacity>

        <View style={styles.timekeepingInfo}>
          <View style={styles.timekeepingInfoRow}>
            <View style={styles.timekeepingInfoRowContent}>
              <Image
                source={require('../../../assets/352521_location_on_icon.png')}
                resizeMode='contain'
                style={styles.timekeepingInfoRowImage}
              />
              <Text style={styles.timekeepingInfoText}>Nơi làm việc</Text>
            </View>
            <Text style={styles.timekeepingInfoText}>Trụ sở</Text>
          </View>
          <View style={styles.timekeepingInfoHr} />
          <View style={styles.timekeepingInfoRow}>
            <View style={styles.timekeepingInfoRowContent}>
              <Image
                source={require('../../../assets/8666798_clock_watch_icon.png')}
                resizeMode='contain'
                style={styles.timekeepingInfoRowImage}
              />
              <Text style={styles.timekeepingInfoText}>Giờ vào</Text>
            </View>
            <Text style={styles.timekeepingInfoText}>08:00</Text>
          </View>
          <View style={styles.timekeepingInfoHr} />
          <View style={styles.timekeepingInfoRow}>
            <View style={styles.timekeepingInfoRowContent}>
              <Image
                source={require('../../../assets/8666798_clock_watch_icon.png')}
                resizeMode='contain'
                style={styles.timekeepingInfoRowImage}
              />
              <Text style={styles.timekeepingInfoText}>Giờ ra</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          borderRadius: 15,
          borderColor: 'grey',
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 5,
          marginTop: 25,
          marginRight: 10,
          marginLeft: 10,
          alignItems: 'flex-start',
          justifyContent: 'center'
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 15,
            width: '100%',
            justifyContent: 'space-between'
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/history_timekeeping_icon.png')}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                tintColor: '#F46138'
              }}
            />
            <Text style={{ fontSize: 17, fontWeight: '500', color: '#F46138', marginLeft: 10 }}>Lịch sử chấm công</Text>
          </View>
          <Image
            source={require('../../../assets/nextIcon.png')}
            resizeMode='contain'
            style={{
              width: 30,
              height: 30,
              tintColor: '#F46138'
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 95,
    backgroundColor: '#F46138',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  card: {
    marginTop: 25,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 15,
    borderColor: 'grey',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5
  },
  cardContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15
  },
  cardContentImage: {
    width: 200,
    height: 150
  },
  cardContentTimerRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  cardContentTimerText: {
    fontSize: 16,
    color: '#F46138'
  },
  cardContentTimerHighlight: {
    fontWeight: '700',
    fontSize: 16,
    color: '#F46138'
  },
  btnTimekeeping: {
    backgroundColor: '#F46138',
    borderRadius: 10,
    paddingVertical: 13,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTimekeepingText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#fff'
  },
  timekeepingInfo: {
    gap: 20,
    margin: 20,
    borderRadius: 15,
    borderColor: 'grey',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    padding: 20
  },
  timekeepingInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  timekeepingInfoRowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15
  },
  timekeepingInfoRowImage: {
    width: 20,
    height: 20,
    tintColor: '#F46138'
  },
  timekeepingInfoHr: {
    height: 1,
    backgroundColor: '#f2efef'
  },
  timekeepingInfoText: {
    fontSize: 17,
    color: '#F46138',
    fontWeight: '500'
  }
});

export default Timekeeping