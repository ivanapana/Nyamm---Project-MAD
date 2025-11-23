///src/components/organisms/EditIngredientPopup/index.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';

import SaveButton from '../../atoms/SaveButton';

const EditIngredientPopup = ({visible, onClose, ingredient, onSave}) => {
  const [name, setName] = useState(ingredient?.name || '');
  const [quantity, setQuantity] = useState(
    ingredient?.quantity?.toString() || '',
  );
  const [unit, setUnit] = useState(ingredient?.unit || 'gram');

  const handleSave = () => {
    if (name.trim() && quantity.trim()) {
      onSave({
        name: name.trim(),
        quantity: parseInt(quantity) || 0,
        unit: unit,
      });
      onClose();
    }
  };

  const increment = () => {
    setQuantity(prev => (parseInt(prev) || 0) + 1);
  };

  const decrement = () => {
    setQuantity(prev => Math.max(0, (parseInt(prev) || 0) - 1));
  };

  if (!visible) return null;

  return (
    <Modal transparent={true} animationType="fade" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.popupContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Edit Bahan</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={{fontSize: 24, color: 'white'}}>×</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <Text style={styles.label}>Nama Bahan</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Masukkan nama bahan"
            />

            <Text style={styles.label}>Jumlah</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={decrement}>
                <Text style={styles.quantityButtonText}>−</Text>
              </TouchableOpacity>
              <TextInput
                style={[styles.input, styles.quantityInput]}
                value={quantity}
                onChangeText={setQuantity}
                keyboardType="numeric"
                textAlign="center"
              />
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={increment}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.unitText}>Satuan: {unit}</Text>

            <View style={styles.buttonContainer}>
              {/* Tombol Hapus TIDAK DIIMPLEMENTASIKAN SESUAI INSTRUKSI */}
              <SaveButton title="Simpan" onPress={handleSave} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#FFD700',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  quantityButton: {
    width: 40,
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  quantityInput: {
    flex: 1,
    marginHorizontal: 8,
    textAlign: 'center',
  },
  unitText: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
});

export default EditIngredientPopup;
