import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const PopUP = ({visible, onClose, onConfirm}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Keluar dari Akun?</Text>
          </View>

          <View style={styles.body}>
            <View style={styles.iconWrapper}>
              <View style={styles.iconCircle} />
            </View>

            <Text style={styles.title}>Apakah kamu yakin ingin keluar?</Text>
            <Text style={styles.subtitle}>
              Kamu perlu login kembali untuk mengakses akun.
            </Text>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelText}>Batal</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
              <Text style={styles.confirmText}>Ya, Keluar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PopUP;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#ff714a',
    paddingVertical: 16,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  body: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  iconWrapper: {
    marginBottom: 16,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFE8D9',
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    gap: 10,
  },
  cancelButton: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: '#CFCFCF',
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: '#ff714a',
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  confirmText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
});
