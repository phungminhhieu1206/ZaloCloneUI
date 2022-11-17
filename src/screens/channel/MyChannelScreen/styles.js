import colors from '../../../assets/themes/colors';
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerLeft: {
    flexDirection: 'row',
    paddingLeft: 8,
  },
  headerTitle: {
    width: '140%',
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
    paddingTop: Platform.OS === 'ios' ? 12 : 0,
  },
  root: {
    backgroundColor: colors.background,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    padding: 20,
    marginBottom: 20,
  },
});

export default styles;
