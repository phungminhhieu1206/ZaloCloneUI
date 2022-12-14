import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function ImageComponent({src}) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const onLoadStart = () => {
    setIsLoading(true);
  };

  const onLoadEnd = () => {
    setIsLoading(false);
  };
  const onError = () => {
    setIsLoading(false);
    setHasError(true);
  };
  return (
    <View style={styles.imageContainer}>
      {isLoading && <Text style={styles.loading}>Loading image</Text>}
      <View>
        <Image
          onLoadEnd={onLoadEnd}
          onError={onError}
          onLoadStart={onLoadStart}
          style={styles.detailPhoto}
          source={{uri: src}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    paddingLeft: '35%',
    paddingTop: '5%',
  },
  imageContainer: {
    height: 300,
    width: '100%',
  },
  detailPhoto: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
  },
});

export default ImageComponent;
