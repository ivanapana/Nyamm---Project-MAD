//src/pages/Belanja/index.tsx
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Text as TextAtom} from '../../components/atoms';
import ProgressBar from '../../components/atoms/ProgressBar';
import ShoppingCard from '../../components/molecules/ShoppingCard';

const SHOPPING_ITEMS = [
  {id: 's1', name: 'Wortel', amount: '500 gram', from: 'Sop Iga Sapi'},
  {id: 's2', name: 'Kentang', amount: '3 buah', from: 'Sop Iga Sapi'},
  {
    id: 's3',
    name: 'Daun bawang',
    amount: '4 batang',
    from: 'Nasi Goreng, Mie Ayam',
  },
  {id: 's4', name: 'Tomat', amount: '5 buah', from: 'Gado-gado'},
  {id: 's5', name: 'Iga sapi', amount: '500 gram', from: 'Sop Iga Sapi'},
  {id: 's6', name: 'Ayam fillet', amount: '300 gram', from: 'Ayam Geprek'},
  {id: 's7', name: 'Telur ayam', amount: '1 kg', from: 'Nasi Goreng, Pancake'},
];

export default function Belanja() {
  const [checkedItems, setCheckedItems] = useState([]);

  const toggleItem = id => {
    setCheckedItems(prev =>
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id],
    );
  };

  const handleMoveToKulkas = () => {
    alert(`Memindahkan ${checkedItems.length} item ke Kulkas!`);
  };

  const totalItems = SHOPPING_ITEMS.length;
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
          {SHOPPING_ITEMS.map(item => (
            <ShoppingCard
              key={item.id}
              item={item}
              checked={checkedItems.includes(item.id)}
              onToggle={toggleItem}
            />
          ))}
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
