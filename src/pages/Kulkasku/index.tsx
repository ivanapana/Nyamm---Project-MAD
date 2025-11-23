//src/pages/Kulkasku/index.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import EditIngredientPopup from '../../components/organisms/EditIngredientPopup';

// Mock data
const ingredients = [
  {id: '1', name: 'Wortel', quantity: 500, unit: 'gram'},
  {id: '2', name: 'Kentang', quantity: 3, unit: 'buah'},
];

const Kulkasku = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState(null);

  const handleEdit = ingredient => {
    setCurrentIngredient(ingredient);
    setIsPopupVisible(true);
  };

  const handleSave = updatedIngredient => {
    Alert.alert(
      'Berhasil',
      `Bahan "${updatedIngredient.name}" telah disimpan.`,
    );
    console.log('Updated:', updatedIngredient);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      {/* Header */}
      <View style={{backgroundColor: '#FFD700', padding: 20}}>
        <Text style={{fontSize: 32, fontWeight: 'bold', color: 'white'}}>
          Kulkasku
        </Text>
        <Text style={{fontSize: 16, color: 'white', marginTop: 4}}>
          Inventaris dapur digital 👩‍🍳
        </Text>
      </View>

      {/* Total Item Card */}
      <View
        style={{
          margin: 20,
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 20,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 5,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#FFFACD',
              borderRadius: 12,
              padding: 12,
              marginRight: 16,
            }}>
            <Image
              source={{
                uri: 'https://via.placeholder.com/24/FFD700/FFFFFF?text=📦',
              }}
              style={{width: 24, height: 24}}
            />
          </View>
          <View>
            <Text style={{fontSize: 28, fontWeight: 'bold'}}>
              {ingredients.length}
            </Text>
            <Text style={{fontSize: 16, color: '#666'}}>
              Total item di Kulkas
            </Text>
          </View>
        </View>
      </View>

      {/* Semua Bahan List */}
      <View
        style={{
          marginHorizontal: 20,
          backgroundColor: '#FFF8E1',
          borderRadius: 20,
          padding: 20,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 5,
        }}>
        <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 8}}>
          Semua Bahan
        </Text>
        <Text style={{fontSize: 16, color: '#666', marginBottom: 20}}>
          {ingredients.length} item tersimpan
        </Text>

        <ScrollView>
          {ingredients.map(item => (
            <View
              key={item.id}
              style={{
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
              }}>
              <View>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  {item.name}
                </Text>
                <Text style={{fontSize: 16, color: '#FFA500'}}>
                  {item.quantity} {item.unit}
                </Text>
              </View>
              <TouchableOpacity onPress={() => handleEdit(item)}>
                <Image
                  source={{
                    uri: 'https://via.placeholder.com/24/FFA500/FFFFFF?text=✏️',
                  }}
                  style={{width: 24, height: 24}}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Popup */}
      <EditIngredientPopup
        visible={isPopupVisible}
        onClose={() => setIsPopupVisible(false)}
        ingredient={currentIngredient}
        onSave={handleSave}
      />
    </SafeAreaView>
  );
};

export default Kulkasku;
