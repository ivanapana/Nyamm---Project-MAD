import React, { useState } from 'react';
import { X } from 'lucide-react';

const PopupKulkas = ({ isOpen, onClose, item, onSave, onDelete }) => {
  const [namaBahan, setNamaBahan] = useState(item?.nama || '');
  const [jumlah, setJumlah] = useState(item?.jumlah || 0);
  const [satuan, setSatuan] = useState(item?.satuan || 'gram');

  if (!isOpen) return null;

  const handleIncrement = () => {
    setJumlah(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (jumlah > 0) {
      setJumlah(prev => prev - 1);
    }
  };

  const handleSave = () => {
    onSave({
      nama: namaBahan,
      jumlah: jumlah,
      satuan: satuan
    });
    onClose();
  };

  const handleDelete = () => {
    onDelete();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-yellow-400 px-6 py-4 flex items-center justify-between">
          <h2 className="text-white text-2xl font-bold">Edit Bahan</h2>
          <button 
            onClick={onClose}
            className="text-white hover:bg-yellow-500 rounded-full p-1 transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Nama Bahan */}
          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              Nama Bahan
            </label>
            <input
              type="text"
              value={namaBahan}
              onChange={(e) => setNamaBahan(e.target.value)}
              className="w-full px-4 py-3 bg-gray-100 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Masukkan nama bahan"
            />
          </div>

          {/* Jumlah */}
          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              Jumlah
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDecrement}
                className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-2xl font-bold hover:bg-gray-200 transition-colors"
              >
                −
              </button>
              <div className="flex-1 px-6 py-3 bg-white border-2 border-gray-200 rounded-xl text-center text-2xl font-bold">
                {jumlah}
              </div>
              <button
                onClick={handleIncrement}
                className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-2xl font-bold hover:bg-gray-200 transition-colors"
              >
                +
              </button>
            </div>
            <p className="text-center text-gray-600 mt-2">
              Satuan: <span className="font-semibold">{satuan}</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={handleDelete}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
              </svg>
              Hapus
            </button>
            <button
              onClick={handleSave}
              className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupKulkas;