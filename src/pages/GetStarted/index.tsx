import React, {useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
  Text,
} from 'react-native';
import Video from 'react-native-video';
import {ButtonYellow} from '../../components/atoms';
import {FeatureCard, Footer} from '../../components/molecules';
const videoSource = require('../../assets/video/intro2.mp4');
const {height, width} = Dimensions.get('window');
const GetStarted = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 6000);

    return () => clearTimeout(timer);
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Video
        source={videoSource}
        style={styles.backgroundVideo}
        muted={true}
        repeat={true}
        resizeMode="cover"
        rate={1.0}
        onError={e => console.log('Video Error:', e)}
      />
      <View style={styles.overlay} />
      <Animated.View style={[styles.contentWrapper, {opacity: fadeAnim}]}>
        <View style={styles.textContainer}>
          <Text style={styles.subtitle}>Rencanakan Menu Harianmu</Text>
          <Text style={styles.description}>
            Kelola resep, buat rencana menu mingguan, dan belanja lebih
            terorganisir dengan nyamm!
          </Text>
        </View>
        <View style={styles.featuresContainer}>
          <FeatureCard emoji="🍳" label="Resep Pilihan" />
          <FeatureCard emoji="📅" label="Perencana Menu" />
          <FeatureCard emoji="🛒" label="Belanja Cerdas" />
        </View>

        <View style={styles.buttonContainer}>
          <ButtonYellow
            label="Mulai Sekarang →"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
        <Footer navigation={navigation} />
      </Animated.View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundVideo: {
    ...StyleSheet.absoluteFillObject,
    height: height + 50,
    width: width,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 40,
    paddingHorizontal: 24,
    width: '100%',
  },

  textContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 8,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    color: '#D4D4D4',
    fontSize: 15,
    marginTop: 12,
    lineHeight: 22,
    marginHorizontal: 10,
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  buttonContainer: {
    marginBottom: 20,
    width: '100%',
  },
});