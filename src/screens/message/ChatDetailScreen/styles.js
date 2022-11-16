import {StyleSheet} from 'react-native';
import colors from '../../../assets/themes/colors';

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  headerLeft: {
    flexDirection: 'row',
    paddingLeft: 8,
  },
  headerTitle: {
    width: '120%',
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerRight: {
    flexDirection: 'row',
    paddingRight: 14,
  },
  title: {
    height: '100%',
    color: colors.white,
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default styles;
