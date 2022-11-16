import {StyleSheet} from 'react-native';
import colors from '../../../assets/themes/colors';

const styles = StyleSheet.create({
  headerLeft: {
    flexDirection: 'row',
    paddingLeft: 8,
  },
  headerTitle: {
    width: '120%',
  },
  headerRight: {
    flexDirection: 'row',
    paddingRight: 14,
  },
  title: {
    height: '100%',
    color: colors.white,
    textAlignVertical: 'center',
    fontSize: 16,
  },
});

export default styles;
