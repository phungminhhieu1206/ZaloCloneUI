import colors from '../../../assets/themes/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerLeft: {
    flexDirection: 'row',
    paddingLeft: 8,
  },
  headerTitle: {
    width: '420%',
  },
  headerRight: {
    flexDirection: 'row',
    paddingRight: 14,
  },
  title: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    color: colors.white,
    height: '100%',
  },
});

export default styles;
