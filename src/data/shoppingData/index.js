import LeafIcon from '../../assets/images/kangkungreal.svg';
import MeatIcon from '../../assets/images/meat.svg';
import SpiceIcon from '../../assets/images/spice.svg';

export const categories = [
  {
    id: 'vegetables',
    name: 'Sayuran & Buah',
    icon: <LeafIcon width={32} height={32} />,
    color: '#dcfce7',
    items: [
      {id: 0, name: 'Wortel', amount: '500 gram', from: 'Sop Iga Sapi'},
      {id: 1, name: 'Kentang', amount: '3 buah', from: 'Sop Iga Sapi'},
      {
        id: 2,
        name: 'Daun bawang',
        amount: '4 batang',
        from: 'Nasi Goreng, Mie Ayam',
      },
      {id: 3, name: 'Tomat', amount: '5 buah', from: 'Gado-gado'},
    ],
  },
  {
    id: 'meat',
    name: 'Daging & Protein',
    icon: <MeatIcon width={32} height={32} />,
    color: '#fee2e2',
    items: [
      {id: 4, name: 'Iga sapi', amount: '500 gram', from: 'Sop Iga Sapi'},
      {id: 5, name: 'Ayam fillet', amount: '300 gram', from: 'Ayam Geprek'},
      {id: 6, name: 'Telur ayam', amount: '1 kg', from: 'Nasi Goreng, Pancake'},
      {id: 7, name: 'Daging sapi', amount: '1 kg', from: 'Rendang'},
    ],
  },
  {
    id: 'spices',
    name: 'Bumbu Dapur',
    icon: <SpiceIcon width={32} height={32} />,
    color: '#fef9c3',
    items: [
      {
        id: 8,
        name: 'Bawang merah',
        amount: '250 gram',
        from: 'Multiple recipes',
      },
      {
        id: 9,
        name: 'Bawang putih',
        amount: '150 gram',
        from: 'Multiple recipes',
      },
      {
        id: 10,
        name: 'Cabai rawit',
        amount: '100 gram',
        from: 'Nasi Goreng, Ayam Geprek',
      },
      {id: 11, name: 'Kecap manis', amount: '2 botol', from: 'Nasi Goreng'},
    ],
  },
];
