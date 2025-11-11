//src/pages/Dashboard/index.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {Gap} from '../../components/atoms';
import {Card} from '../../components/molecules';
import {todayMenu, quickRecipes} from '../../data/todayMenu';

const {width} = Dimensions.get('window');

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
        <TouchableOpacity style={styles.userButton}>
          <Image
            source={require('../../assets/images/profile.png')}
            style={styles.userIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchContent}>
          <Image
            source={require('../../assets/images/search.png')}
            style={styles.searchIcon}
          />
          <Text style={styles.searchPlaceholder}>Cari resep favorit...</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        {/* Menu Hari Ini */}
        <Card padding={20} rounded={20} style={styles.menuCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.titleWrapper}>
              <Image
                source={require('../../assets/images/chefhat.png')}
                style={styles.chefIcon}
              />
              <Text style={styles.sectionTitle}>Menu Hari Ini</Text>
            </View>
            <Text style={styles.dateText}>Minggu, 10 Nov</Text>
          </View>

          {todayMenu.map((item, idx) => (
            <TouchableOpacity key={idx} style={styles.menuItem}>
              <Image source={item.icon} style={styles.timeIcon} />
              <View style={styles.mealDetails}>
                <Text style={styles.mealTime}>{item.time}</Text>
                <Text style={styles.mealName}>{item.meal}</Text>
                <View style={styles.metaContainer}>
                  <View style={styles.metaItem}>
                    <Image
                      source={require('../../assets/images/clock.png')}
                      style={styles.metaIcon}
                    />
                    <Text style={styles.metaText}>{item.duration}</Text>
                  </View>
                  <View style={styles.metaItem}></View>
                </View>
              </View>
              <Image
                source={require('../../assets/images/plus.png')}
                style={styles.plusIcon}
              />
            </TouchableOpacity>
          ))}
        </Card>

        <Gap height={20} />

        {/* Quick Actions */}
        <View style={styles.actionsRow}>
          <TouchableOpacity
            style={[styles.actionCard, styles.primaryAction]}
            onPress={() => navigation.navigate('PerencanaMenu')}>
            <Image
              source={require('../../assets/images/calendar.png')}
              style={styles.actionIcon}
            />
            <Text style={styles.actionTitle}>Perencana Menu</Text>
            <Text style={styles.actionSubtitle}>Atur menu mingguan</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionCard, styles.secondaryAction]}
            onPress={() => navigation.navigate('ShoppingList')}>
            <Image
              source={require('../../assets/images/shopping-cart.png')}
              style={styles.actionIcon}
            />
            <Text style={styles.actionTitle}>Daftar Belanja</Text>
            <Text style={styles.actionSubtitle}>12 item menunggu</Text>
          </TouchableOpacity>
        </View>

        <Gap height={20} />

        {/* Resep Cepat */}
        <Card padding={20} rounded={20} style={styles.recipeCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.titleWrapper}>
              <Image
                source={require('../../assets/images/clockk.png')}
                style={styles.clockIcon}
              />
              <Text style={styles.sectionTitle}>
                Resep Cepat {'<'} 30 Menit
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Recipes')}>
              <Text style={styles.seeAll}>Lihat Semua →</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.recipesGrid}>
            {quickRecipes.map((recipe, idx) => (
              <TouchableOpacity key={idx} style={styles.recipeItem}>
                <Image source={recipe.img} style={styles.recipeImg} />
                <Text style={styles.recipeName}>{recipe.name}</Text>
                <View style={styles.recipeMeta}>
                  <Text style={styles.recipeTime}>{recipe.time}</Text>
                  <Text style={styles.recipeDifficulty}>
                    {recipe.difficulty}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </Card>

        <Gap height={100} />
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9E6',
  },
  header: {
    backgroundColor: '#FFC72C',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 170,
    position: 'relative',
  },
  logo: {
    width: 160,
    height: 50,
    resizeMo1de: 'contain',
    position: 'absolute',
    left: -5,
    top: 17,
  },
  userButton: {
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 23,
    right: 10,
  },
  userIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },

  searchContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    marginHorizontal: 20,
    marginTop: -140,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },

  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#9CA3AF',
    marginRight: 12,
  },
  searchPlaceholder: {
    color: '#9CA3AF',
    fontSize: 16,
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  menuCard: {
    backgroundColor: '#FFF8E1',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  chefIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  clockIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  dateText: {
    fontSize: 12,
    color: '#6B7280',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FFEDB3',
    marginBottom: 12,
  },
  timeIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    marginRight: 12,
  },
  mealDetails: {
    flex: 1,
  },
  mealTime: {
    fontSize: 11,
    fontWeight: '600',
    color: '#D97706',
    marginBottom: 4,
  },
  mealName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  metaContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaIcon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    tintColor: '#6B7280',
  },
  metaText: {
    fontSize: 12,
    color: '#6B7280',
  },
  plusIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: '#FBBF24',
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 12,
  },

  actionCard: {
    flex: 1,
    padding: 20,
    borderRadius: 16,
    alignItems: 'flex-start',
  },
  primaryAction: {
    backgroundColor: '#FFC72C',
  },
  secondaryAction: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#FFEDB3',
  },

  actionIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    marginBottom: 12,
    alignSelf: 'flex-start',
  },

  actionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'left',
  },
  actionSubtitle: {
    fontSize: 11,
    color: '#6B7280',
    textAlign: 'left',
    marginTop: 4,
  },
  recipeCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  seeAll: {
    color: '#F59E0B',
    fontWeight: '600',
    fontSize: 13,
  },

  recipesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },

  recipeItem: {
    width: 140,

    backgroundColor: '#f6f3e9ff',
    borderRadius: 16,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFEDB3',
  },
  recipeImg: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  recipeName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 6,
  },
  recipeMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  recipeTime: {
    fontSize: 11,
    fontWeight: '600',
    color: '#D97706',
  },
  recipeDifficulty: {
    fontSize: 11,
    color: '#6B7280',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  navItem: {
    alignItems: 'center',
    gap: 4,
  },
  navIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  navLabel: {
    fontSize: 11,
    color: '#9CA3AF',
  },
  navLabelActive: {
    fontSize: 11,
    color: '#FBBF24',
    fontWeight: '600',
  },
});
