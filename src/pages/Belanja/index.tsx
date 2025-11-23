import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import {
  getDatabase,
  ref,
  onValue,
  update,
  remove,
  set,
} from 'firebase/database';
import {getAuth} from 'firebase/auth';

import {Text as TextAtom} from '../../components/atoms';
import ProgressBar from '../../components/atoms/ProgressBar';
// Ganti ShoppingCard dengan CookingStep agar tampilan sama seperti Detail
import CookingStep from '../../components/molecules/CookingStep';

export default function Belanja() {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) return;

    const db = getDatabase();
    const shoppingRef = ref(db, `shopping_list/${user.uid}`);
    onValue(shoppingRef, snapshot => {
      const data = snapshot.val();
      if (data) {
        const itemsArray = Object.keys(data).map(key => {
          const itemData = data[key];
          return {
            id: key,
            name: itemData.name,
            rawQty: itemData.qty || 0,
            rawUnit: itemData.unit || '',
            amount: `${itemData.qty || ''} ${itemData.unit || ''}`.trim(),
            from: itemData.source || 'Manual',
            isChecked: itemData.isChecked || false,
          };
        });

        setShoppingItems(itemsArray);
        const checkedIds = itemsArray.filter(i => i.isChecked).map(i => i.id);
        setCheckedItems(checkedIds);
      } else {
        setShoppingItems([]);
        setCheckedItems([]);
      }
    });
  }, [user]);

  const toggleItem = id => {
    const db = getDatabase();
    const currentItem = shoppingItems.find(i => i.id === id);
    if (!currentItem) return;

    const newStatus = !currentItem.isChecked;

    update(ref(db, `shopping_list/${user.uid}/${id}`), {
      isChecked: newStatus,
    });
  };

  const handleMoveToKulkas = () => {
    Alert.alert(
      'Pindahkan ke Kulkas',
      `Apakah Anda yakin sudah membeli ${checkedItems.length} item ini? Item akan dipindahkan ke stok Kulkasku.`,
      [
        {text: 'Batal', style: 'cancel'},
        {
          text: 'Ya, Pindahkan',
          onPress: async () => {
            const db = getDatabase();
            const itemsToMove = shoppingItems.filter(i =>
              checkedItems.includes(i.id),
            );

            const movePromises = itemsToMove.map(item => {
              const addToFridgePromise = update(
                ref(db, `inventory/${user.uid}/${item.id}`),
                {
                  name: item.name,
                  quantity: item.rawQty,
                  unit: item.rawUnit,
                  addedAt: Date.now(),
                },
              );
              const removeFromListPromise = remove(
                ref(db, `shopping_list/${user.uid}/${item.id}`),
              );

              return Promise.all([addToFridgePromise, removeFromListPromise]);
            });

            try {
              await Promise.all(movePromises);
            } catch (error) {
              console.error('Gagal memindahkan item:', error);
              Alert.alert('Error', 'Gagal memindahkan beberapa item.');
            }
          },
        },
      ],
    );
  };

  const totalItems = shoppingItems.length;
  const checkedCount = checkedItems.length;
  const progressPercentage =
    totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#FBBF24" />
      <View style={styles.header}>
        <TextAtom style={styles.title}>Daftar Belanja</TextAtom>
        <TextAtom type="caption" style={styles.subtitle}>
          Belanja lebih terorganisir 🛒
        </TextAtom>
        <ProgressBar
          percentage={progressPercentage}
          checkedCount={checkedCount}
          totalCount={totalItems}
        />
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <TextAtom type="subtitle" style={styles.cardTitle}>
              Daftar Belanja Minggu Ini
            </TextAtom>
            <TextAtom type="caption" style={styles.cardSubtitle}>
              Total {totalItems} item
            </TextAtom>
          </View>

          <View style={styles.listContainer}>
            {shoppingItems.length > 0 ? (
              shoppingItems.map((item, index) => {
                const stepData = {
                  id: item.id,
                  text: `${item.amount} ${item.name} (${item.from})`,
                };

                return (
                  <CookingStep
                    key={item.id}
                    step={stepData}
                    index={index}
                    completed={checkedItems.includes(item.id)}
                    onToggle={() => toggleItem(item.id)}
                  />
                );
              })
            ) : (
              <View style={{padding: 20, alignItems: 'center'}}>
                <TextAtom style={{color: '#9CA3AF'}}>
                  Daftar belanja masih kosong.
                </TextAtom>
                <TextAtom style={{color: '#9CA3AF', fontSize: 12}}>
                  Yuk cari resep dulu!
                </TextAtom>
              </View>
            )}
          </View>
        </View>

        {checkedCount > 0 && (
          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleMoveToKulkas}>
            <Text style={styles.actionButtonText}>
              Pindahkan ke Kulkas ({checkedCount} item)
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  header: {
    backgroundColor: '#FBBF24',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  title: {fontSize: 28, fontWeight: '900', color: '#fff', marginBottom: 4},
  subtitle: {color: '#FEF3C7', marginBottom: 20},
  content: {
    paddingHorizontal: 24,
    paddingBottom: 80,
    marginTop: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 24,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  cardHeader: {
    padding: 20,
    paddingBottom: 10,
    backgroundColor: '#FEFCE8',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  cardTitle: {color: '#1F2937', fontSize: 18, fontWeight: '700'},
  cardSubtitle: {color: '#6B7280', marginTop: 4},

  // Container baru untuk list agar rapi
  listContainer: {
    paddingVertical: 10,
  },

  actionButton: {
    backgroundColor: '#10B981',
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: 20,
  },
  actionButtonText: {color: '#fff', fontSize: 16, fontWeight: '700'},
});
