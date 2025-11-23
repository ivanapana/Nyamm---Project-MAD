import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
} from 'react-native';

// Import Firebase
import {getDatabase, ref, onValue, update, remove} from 'firebase/database';
import {getAuth} from 'firebase/auth';


import EditIngredientPopup from '../../components/organisms/EditIngredientPopup';

const Kulkasku = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState(null);
  
 
  const [inventoryItems, setInventoryItems] = useState([]);

  const auth = getAuth();
  const user = auth.currentUser;

  
  useEffect(() => {
    if (!user) return;
    const db = getDatabase();
    
    const inventoryRef = ref(db, `inventory/${user.uid}`);

    onValue(inventoryRef, snapshot => {
      const data = snapshot.val();
      if (data) {
        
        const parsedItems = Object.keys(data).map(key => ({
          id: key,
          ...data[key],
        }));
        setInventoryItems(parsedItems);
      } else {
        setInventoryItems([]);
      }
    });
  }, [user]);

  
  const handleEdit = ingredient => {
    setCurrentIngredient(ingredient);
    setIsPopupVisible(true);
  };

  
  const handleDelete = (item) => {
    Alert.alert(
      'Hapus Bahan',
      `Yakin ingin menghapus ${item.name} dari kulkas?`,
      [
        {text: 'Batal', style: 'cancel'},
        {
          text: 'Hapus',
          style: 'destructive',
          onPress: async () => {
            try {
              const db = getDatabase();
              await remove(ref(db, `inventory/${user.uid}/${item.id}`));
             
            } catch (error) {
              Alert.alert('Error', 'Gagal menghapus bahan.');
            }
          },
        },
      ],
    );
  };

 
  const handleSave = async (updatedIngredient) => {
    try {
      const db = getDatabase();
      
      
      await update(ref(db, `inventory/${user.uid}/${updatedIngredient.id}`), {
        name: updatedIngredient.name,
        quantity: updatedIngredient.quantity,
        unit: updatedIngredient.unit,
      });

      setIsPopupVisible(false); 
      Alert.alert('Berhasil', `Stok "${updatedIngredient.name}" telah diperbarui.`);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Gagal memperbarui data.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Kulkasku
        </Text>
        <Text style={styles.headerSubtitle}>
          Inventaris dapur digital 👩‍🍳
        </Text>
      </View>

      {/* Card Total Item */}
      <View style={styles.summaryCard}>
        <View style={styles.summaryContent}>
          <View style={styles.iconContainer}>
            <Image
              source={{
                uri: 'https://img.icons8.com/color/48/000000/fridge.png',
              }}
              style={{width: 32, height: 32}}
            />
          </View>
          <View>
            <Text style={styles.summaryCount}>
              {inventoryItems.length} 
            </Text>
            <Text style={styles.summaryLabel}>
              Total item di Kulkas
            </Text>
          </View>
        </View>
      </View>

      {/* List Bahan */}
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>
          Semua Bahan
        </Text>
        <Text style={styles.listSubtitle}>
          {inventoryItems.length} item tersimpan
        </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          {inventoryItems.length > 0 ? (
            inventoryItems.map(item => (
              <View key={item.id} style={styles.itemCard}>
                
                {/* Bagian Kiri: Teks Nama & Jumlah */}
                <View style={{flex: 1}}>
                  <Text style={styles.itemName}>
                    {item.name}
                  </Text>
                  <Text style={styles.itemQuantity}>
                    {item.quantity} {item.unit}
                  </Text>
                </View>

                {/* Bagian Kanan: Tombol Aksi (Edit & Delete) */}
                <View style={styles.actionContainer}>
                  
                  {/* Tombol Edit */}
                  <TouchableOpacity 
                    onPress={() => handleEdit(item)} 
                    style={[styles.actionBtn, {backgroundColor: '#FEF3C7', marginRight: 8}]}>
                    <Image
                      source={{
                        uri: 'https://img.icons8.com/fluency/48/000000/edit.png',
                      }}
                      style={{width: 20, height: 20}}
                    />
                  </TouchableOpacity>

                  {/* Tombol Hapus */}
                  <TouchableOpacity 
                    onPress={() => handleDelete(item)}
                    style={[styles.actionBtn, {backgroundColor: '#FEE2E2'}]}>
                    <Image
                      source={{
                        uri: 'https://img.icons8.com/fluency/48/000000/filled-trash.png',
                      }}
                      style={{width: 20, height: 20}}
                    />
                  </TouchableOpacity>

                </View>
              </View>
            ))
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>
                Kulkas masih kosong.
              </Text>
              <Text style={[styles.emptyStateText, {fontSize: 14}]}>
                Pindahkan belanjaanmu kesini!
              </Text>
            </View>
          )}
        </ScrollView>
      </View>

      {/* Popup Edit */}
      <EditIngredientPopup
        visible={isPopupVisible}
        onClose={() => setIsPopupVisible(false)}
        ingredient={currentIngredient}
        onSave={handleSave} 
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#FFD700', 
    padding: 20
  },
  headerTitle: {
    fontSize: 32, 
    fontWeight: 'bold', 
    color: 'white'
  },
  headerSubtitle: {
    fontSize: 16, 
    color: 'white', 
    marginTop: 4
  },
  summaryCard: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  summaryContent: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  iconContainer: {
    backgroundColor: '#FFFACD',
    borderRadius: 12,
    padding: 12,
    marginRight: 16,
  },
  summaryCount: {
    fontSize: 28, 
    fontWeight: 'bold'
  },
  summaryLabel: {
    fontSize: 16, 
    color: '#666'
  },
  listContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#FFF8E1',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  listTitle: {
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 8
  },
  listSubtitle: {
    fontSize: 16, 
    color: '#666', 
    marginBottom: 20
  },
  itemCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  itemName: {
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#333'
  },
  itemQuantity: {
    fontSize: 14, 
    color: '#FFA500', 
    marginTop: 4
  },
  actionContainer: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  actionBtn: {
    padding: 8, 
    borderRadius: 8
  },
  emptyState: {
    alignItems: 'center', 
    marginTop: 40
  },
  emptyStateText: {
    color: '#999', 
    fontSize: 16
  }
});

export default Kulkasku;