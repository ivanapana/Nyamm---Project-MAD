// src/pages/Belanja/index.tsx

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

// 1. Import Firebase
import {getDatabase, ref, onValue, update, remove} from 'firebase/database';
import {getAuth} from 'firebase/auth';

import {Text as TextAtom} from '../../components/atoms';
import ProgressBar from '../../components/atoms/ProgressBar';
import ShoppingCard from '../../components/molecules/ShoppingCard';

export default function Belanja() {
  // State untuk menampung data dari Firebase
  const [shoppingItems, setShoppingItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]); // Array berisi ID yang dicentang

  const auth = getAuth();
  const user = auth.currentUser;

  // 2. Ambil Data Realtime
  useEffect(() => {
    if (!user) return;

    const db = getDatabase();
    const shoppingRef = ref(db, `shopping_list/${user.uid}`);

    // Listener
    onValue(shoppingRef, snapshot => {
      const data = snapshot.val();
      if (data) {
        // Mapping Object Firebase ke Array UI
        const itemsArray = Object.keys(data).map(key => {
          const itemData = data[key];
          return {
            id: key,
            name: itemData.name,
            // Gabungkan qty dan unit jadi 'amount'
            amount: `${itemData.qty || ''} ${itemData.unit || ''}`.trim(),
            from: itemData.source || 'Manual',
            isChecked: itemData.isChecked || false, // Status checkbox
          };
        });

        setShoppingItems(itemsArray);

        // Sinkronisasi state checkedItems lokal dengan database
        const checkedIds = itemsArray.filter(i => i.isChecked).map(i => i.id);
        setCheckedItems(checkedIds);
      } else {
        setShoppingItems([]);
        setCheckedItems([]);
      }
    });
  }, [user]);

  // 3. Update Status Checklist di Firebase
  const toggleItem = id => {
    const db = getDatabase();

    // Cari status item sekarang
    const currentItem = shoppingItems.find(i => i.id === id);
    const newStatus = !currentItem.isChecked;

    // Update di Firebase (otomatis UI akan re-render karena listener onValue)
    update(ref(db, `shopping_list/${user.uid}/${id}`), {
      isChecked: newStatus,
    });
  };

  // 4. Handle Pindah ke Kulkas (Hapus dari Belanja)
  const handleMoveToKulkas = () => {
    Alert.alert(
      'Pindahkan ke Kulkas',
      `Apakah Anda yakin sudah membeli ${checkedItems.length} item ini? Item akan dihapus dari daftar belanja.`,
      [
        {text: 'Batal', style: 'cancel'},
        {
          text: 'Ya, Pindahkan',
          onPress: async () => {
            const db = getDatabase();
            // Hapus item yang dicentang satu per satu
            const promises = checkedItems.map(id => {
              return remove(ref(db, `shopping_list/${user.uid}/${id}`));
            });

            await Promise.all(promises);
            // Alert atau Toast sukses
            // (Opsional: Disini Anda bisa simpan ke node 'kulkas'/'pantry' di masa depan)
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

          {/* Render List dari State Firebase */}
          {shoppingItems.length > 0 ? (
            shoppingItems.map(item => (
              <ShoppingCard
                key={item.id}
                item={item}
                checked={checkedItems.includes(item.id)}
                onToggle={() => toggleItem(item.id)}
              />
            ))
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
  cardHeader: {padding: 20, paddingBottom: 16, backgroundColor: '#FEFCE8'},
  cardTitle: {color: '#1F2937', fontSize: 18, fontWeight: '700'},
  cardSubtitle: {color: '#6B7280', marginTop: 4},
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
  },
  actionButtonText: {color: '#fff', fontSize: 16, fontWeight: '700'},
});
