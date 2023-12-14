import { Platform, StatusBar, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#1A1A1A',
  },
  header: {
    width: '100%',
    position: 'relative',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 70,
    paddingHorizontal: 24,
    backgroundColor: '#0D0D0D',
  },
  logo: {
    width: 120,
  },
  form: {
    width: '100%',
    position: 'absolute',
    bottom: -26,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  input: {
    flex: 1,
    height: 52,
    padding: 16,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#0D0D0D',
    borderRadius: 6,
    fontSize: 16,
    color: '#ffffff',
    zIndex: 1,
  },
  button: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
  },
  tasks: {
    width: '100%',
    flex: 1,
    marginTop: 26,
    paddingHorizontal: 24,
    paddingTop: 29,
    paddingBottom: 24,
  },
  infos: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  infoLabelCreated: {
    color: '#4EA8DE',
  },
  infoLabelCompleted: {
    color: '#8284FA',
  },
  infoCounter: {
    width: 25,
    height: 19,
    backgroundColor: '#333333',
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
    borderRadius: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  emptyList: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 48,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#333333',
  },
  emptyListIcon: {
    marginBottom: 16,
  },
  emptyListText: {
    color: '#808080',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})