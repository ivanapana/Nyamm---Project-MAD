//src/components/organisms/PopUP/index.tsx
import React from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const PopUP = ({
  visible,
  onClose,
  onConfirm,
  title = 'Keluar dari Akun?',
  description = 'Apakah kamu yakin ingin keluar?',
  subtitle = 'Kamu perlu login kembali untuk mengakses akun.',
  confirmText = 'Ya, Keluar',
  cancelText = 'Batal',
  color = '#ff714a',
  width = '85%',
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container(width)}>
          {/* HEADER */}
          <View style={styles.header(color)}>
            <Text style={styles.headerText}>{title}</Text>
          </View>

          {/* BODY */}
          <View style={styles.body}>
            <Text style={styles.title}>{description}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>

          {/* BUTTONS */}
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={onClose}
              activeOpacity={0.7}>
              <Text style={styles.cancelText}>{cancelText}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.confirmButton(color)}
              onPress={onConfirm}
              activeOpacity={0.7}>
              <Text style={styles.confirmText}>{confirmText}</Text>
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

  container: width => ({
    width: width,
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
  }),

  header: color => ({
    backgroundColor: color,
    paddingVertical: 16,
    alignItems: 'center',
  }),

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

  confirmButton: color => ({
    flex: 1,
    backgroundColor: color,
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
  }),

  confirmText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
});
