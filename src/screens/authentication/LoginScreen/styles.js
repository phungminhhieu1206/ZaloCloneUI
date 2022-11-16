import {StyleSheet} from 'react-native';
import colors from '../../../assets/themes/colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.accent,
  },
  button: {
    backgroundColor: colors.success,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
});
export default styles;
