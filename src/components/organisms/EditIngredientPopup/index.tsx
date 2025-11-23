import React, {useState, useEffect} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

// Import tombol custom yang sudah ada di folder atoms
import SaveButton from '../../atoms/SaveButton';

const EditIngredientPopup = ({visible, onClose, ingredient, onSave}) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('gram');

  // 1. FIX: Isi form otomatis saat popup muncul (mengikuti data saat ini)
  useEffect(() => {
    if (ingredient && visible) {
      setName(ingredient.name || '');
      // Pastikan quantity diubah ke string agar bisa ditampilkan di TextInput
      setQuantity(ingredient.quantity ? String(ingredient.quantity) : ''); 
      setUnit(ingredient.unit || 'gram');
    }
  }, [ingredient, visible]); 

  // Fungsi helper untuk tombol plus/minus
  const adjustQuantity = (amount) => {
    const currentQty = parseInt(quantity) || 0;
    const newQty = Math.max(0, currentQty + amount); // Tidak boleh minus
    setQuantity(String(newQty));
  };

  const handleSave = () => {
    if (!name || !quantity) return;

    // 2. FIX: Sertakan ID lama agar tidak terjadi duplikasi (create baru) di Firebase
    const updatedData = {
      id: ingredient.id, // PENTING: ID harus tetap sama
      name: name,
      quantity: parseInt(quantity),
      unit: unit,
    };

    onSave(updatedData);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.popupContainer}>
              {/* Header */}
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Edit Bahan</Text>
                <TouchableOpacity onPress={onClose}>
                  <Text style={styles.closeButton}>×</Text>
                </TouchableOpacity>
              </View>

              {/* Body */}
              <View style={styles.body}>
                {/* Input Nama */}
                <Text style={styles.label}>Nama Bahan</Text>
                <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={setName}
                  placeholder="Contoh: Wortel"
                />

                {/* Input Jumlah dengan Tombol +/- */}
                <Text style={styles.label}>Jumlah</Text>
                <View style={styles.qtyContainer}>
                  <TouchableOpacity 
                    style={styles.qtyBtn} 
                    onPress={() => adjustQuantity(-50)}>
                    <Text style={styles.qtyBtnText}>-</Text>
                  </TouchableOpacity>
                  
                  <TextInput
                    style={[styles.input, styles.qtyInput]}
                    value={quantity}
                    onChangeText={setQuantity}
                    keyboardType="numeric"
                    placeholder="0"
                  />
                  
                  <TouchableOpacity 
                    style={styles.qtyBtn} 
                    onPress={() => adjustQuantity(50)}>
                    <Text style={styles.qtyBtnText}>+</Text>
                  </TouchableOpacity>
                </View>

                <Text style={styles.unitText}>Satuan: {unit}</Text>

                {/* 3. FIX: Menggunakan Komponen SaveButton yang sudah ada */}
                <View style={{marginTop: 10}}>
                  <SaveButton onPress={handleSave} title="Simpan" />
                </View>

              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  popupContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
  },
  header: {
    backgroundColor: '#FFD700',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  closeButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  body: {
    padding: 20,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    color: '#000',
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  qtyInput: {
    flex: 1,
    marginHorizontal: 10,
    textAlign: 'center',
    marginBottom: 0, 
  },
  qtyBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyBtnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  unitText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 12,
    marginBottom: 24,
  },
});

export default EditIngredientPopup;