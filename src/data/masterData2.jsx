import React from 'react';

export const page06 = () => (
  <div className="max-w-4xl mx-auto lg:p-6 pt-4 bg-gradient-to-br from-cyan-50 to-blue-100 rounded-xl shadow-lg">
    <div className="bg-white rounded-lg lg:p-6 p-4 shadow-md">
      <h1 className="lg:text-3xl text-xl font-bold text-cyan-800 mb-6 border-b-2 border-cyan-200 pb-3">
        🦠 Viêm họng & Ho
      </h1>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h3 className="text-lg font-semibold text-red-800 mb-3">🦠 Viêm Amidan cấp:</h3>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-blue-700">Amoxicillin + Acid Clavulanic</h4>
              <p className="text-sm text-gray-600 mt-1">875mg + 125mg</p>
              <p className="text-sm text-gray-600">Uống ngày 2 lần, mỗi lần 1 viên</p>
              <p className="text-sm text-green-600 font-medium">Điều trị từ 6-7 ngày</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
              <p className="text-sm text-yellow-700">
                ➕ Bổ sung men tiêu hóa sau khi dùng kháng sinh<br/>
                ➕ Bổ sung thuốc giải độc gan
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">🤧 Bệnh ho:</h3>
          <p className="text-sm text-gray-600 mb-3 italic">Do viêm đường hô hấp trên do dị ứng thời tiết</p>
          
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-green-700">Terpincold</h4>
              <p className="text-xs text-gray-600">Giảm ho khan và ho ngứa cổ + cảm cúm</p>
              <p className="text-sm text-gray-700 mt-1">
                Người lớn: 1-2 viên mỗi 6 giờ, không quá 8 viên/ngày
              </p>
            </div>
            
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-purple-700">CODEFORTE</h4>
              <p className="text-xs text-gray-600">Trị ho do viêm phế quản, hen suyễn, dị ứng thời tiết</p>
              <p className="text-sm text-gray-700 mt-1">1-2 viên/lần × 3 lần/ngày</p>
              <p className="text-xs text-red-600 mt-1">⚠️ Nên dùng thời gian ngắn</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
        <h3 className="text-lg font-semibold text-purple-800 mb-3">💊 Theralene - Alimemazin 5mg:</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-3 bg-white rounded border">
            <h4 className="font-medium text-green-700 mb-2">✅ Điều trị dị ứng:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Viêm mũi dị ứng</li>
              <li>• Nổi mề đay</li>
              <li>• Giảm ho khan và ho kích ứng</li>
              <li>• Đặc biệt hiệu quả vào chiều và đêm</li>
            </ul>
          </div>
          <div className="p-3 bg-red-50 rounded border border-red-200">
            <h4 className="font-medium text-red-700 mb-2">❌ Không được dùng:</h4>
            <p className="text-sm text-red-600">Để trị ho có đờm</p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
        <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ Tác dụng không mong muốn (CODEFORTE):</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-600">
          <div>• Rối loạn tiêu hóa</div>
          <div>• Rối loạn nhịp tim</div>
          <div>• Hạ huyết áp</div>
          <div>• Táo bón</div>
        </div>
        <p className="text-sm text-red-600 mt-2">
          <strong>Chống chỉ định:</strong> Phì đại tuyến tiền liệt
        </p>
      </div>
    </div>
  </div>
);

export const page07 = () => (
  <div className="max-w-4xl mx-auto lg:p-6 pt-4 bg-gradient-to-br from-teal-50 to-cyan-100 rounded-xl shadow-lg">
    <div className="bg-white rounded-lg lg:p-6 p-4 shadow-md">
      <h1 className="lg:text-3xl text-xl font-bold text-teal-800 mb-6 border-b-2 border-teal-200 pb-3">
        🌀 Bệnh rối loạn tiền đình
      </h1>
      
      <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded">
        <h3 className="text-lg font-semibold text-red-800 mb-2">Triệu chứng:</h3>
        <p className="text-gray-700">Mạch nhanh, huyết áp hạ, người mệt</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ Nguyên nhân:</h3>
          <ul className="text-gray-700 space-y-1 text-sm">
            <li>• Mùa thường thời tiết (chuyển mùa)</li>
            <li>• Tuần hoàn kém</li>
            <li>• Các vấn đề thần kinh, tâm lý</li>
            <li>• Xơ vữa động mạch cảnh</li>
            <li>• Cao huyết áp</li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800 mb-3">🆘 Xử lý cơn chóng mặt:</h3>
          <ul className="text-gray-700 space-y-1 text-sm">
            <li>• Nằm nơi yên tĩnh</li>
            <li>• Buồn nôn: để cho nôn hết</li>
            <li>• Uống ít nước đá thật nóng</li>
            <li>• Thuốc chỉ giải quyết tức thì</li>
          </ul>
        </div>
      </div>

      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">🏃‍♂️ Phòng ngừa lâu dài - Tập luyện:</h3>
        <div className="bg-white p-4 rounded border">
          <h4 className="font-medium text-indigo-700 mb-2">"Tập đầu và cổ" thường xuyên:</h4>
          <ul className="text-gray-700 space-y-1 text-sm">
            <li>• Người đứng và cúi, cúi đầu xuống</li>
            <li>• Nghiêng đầu sang phải, trái hết cỡ</li>
            <li>• Quay đầu hẳn</li>
            <li>• Tập cổ thật mềm, xoa mặt, mắt, tay</li>
          </ul>
        </div>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
        <h3 className="text-lg font-semibold text-purple-800 mb-3">💊 Thuốc điều trị:</h3>
        <p className="text-sm text-gray-600 mb-3 italic">Thuốc tăng cường tuần hoàn não</p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-3 bg-white rounded border">
            <h4 className="font-medium text-blue-700">Sibelium / Stugeron</h4>
            <p className="text-sm text-gray-600 mt-1">1-2 viên, 3 lần/ngày</p>
          </div>
          
          <div className="p-3 bg-white rounded border">
            <h4 className="font-medium text-green-700">Tanganil 500mg</h4>
            <p className="text-sm text-gray-600 mt-1">2 viên/ngày (sáng, chiều tối)</p>
            <p className="text-xs text-green-600 mt-1">Ít tác dụng phụ</p>
          </div>
          
          <div className="p-3 bg-white rounded border">
            <h4 className="font-medium text-indigo-700">Betahistine 16mg</h4>
            <p className="text-sm text-gray-600 mt-1">2 viên/ngày (sáng/chiều tối)</p>
            <p className="text-xs text-blue-600 mt-1">Điều trị chóng mặt nguồn gốc tiền đình</p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
        <h3 className="text-lg font-semibold text-indigo-800 mb-3">🔬 Chẩn đoán bệnh:</h3>
        <div className="grid md:grid-cols-3 gap-3 text-sm text-gray-700">
          <div>• Đo huyết áp</div>
          <div>• Siêu âm động mạch cảnh</div>
          <div>• Chụp cộng hưởng từ (MRI)</div>
        </div>
      </div>
    </div>
  </div>
);

export const page08 = () => (
  <div className="max-w-4xl mx-auto lg:p-6 pt-4 bg-gradient-to-br from-rose-50 to-red-100 rounded-xl shadow-lg">
    <div className="bg-white rounded-lg lg:p-6 p-4 shadow-md">
      <h1 className="lg:text-3xl text-xl font-bold text-rose-800 mb-6 border-b-2 border-rose-200 pb-3">
        🩺 Viêm tuyến tiền liệt
      </h1>
      
      <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded">
        <h3 className="text-lg font-semibold text-red-800 mb-2">Triệu chứng:</h3>
        <ul className="text-gray-700 space-y-1">
          <li>• Bí tiểu, đau rát</li>
          <li>• Cần làm xét nghiệm máu</li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">💊 Kháng sinh chính:</h3>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-blue-700">BICLA MOS BID 1000mg</h4>
              <p className="text-xs text-gray-600">Amoxicilin + Acid clavulanic 875mg + 125mg</p>
              <p className="text-sm text-gray-700 mt-1">
                Ngày 2 lần, mỗi lần 1 viên<br/>
                Điều trị từ 14-28 ngày
              </p>
            </div>
            
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-purple-700">Cotrimoxazole 400/80</h4>
              <p className="text-xs text-gray-600">Trimethoprim 80mg + Sulfamethoxazol 400mg</p>
              <p className="text-sm text-gray-700 mt-1">
                Ngày 2 lần, mỗi lần 1 viên (sáng, tối)<br/>
                Điều trị từ 14-28 ngày
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800 mb-3">🔄 Thuốc hỗ trợ:</h3>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-orange-700">Nếu bí tiểu:</h4>
              <p className="text-sm text-gray-600">Tamsulosin</p>
            </div>
            
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-green-700">Thuốc bổ gan:</h4>
              <p className="text-sm text-gray-600">Giải độc, kháng viêm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="text-lg font-semibold text-yellow-800 mb-3">🔄 Thuốc thay thế (Việt Nam):</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-3 bg-white rounded border">
            <h4 className="font-medium text-indigo-700">Amoxicilin</h4>
          </div>
          <div className="p-3 bg-white rounded border">
            <h4 className="font-medium text-teal-700">TrimesepTol</h4>
            <p className="text-xs text-gray-600">Trimethoprim 80mg + Sulfamethoxazol 400mg</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const page09 = () => (
  <div className="max-w-4xl mx-auto lg:p-6 bg-gradient-to-br from-red-50 to-rose-100 rounded-xl shadow-lg">
    <div className="bg-white rounded-lg lg:p-6 p-4 shadow-md">
      <h1 className="lg:text-3xl text-xl font-bold text-red-800 mb-6 border-b-2 border-red-200 pb-3">
        ❤️ Bệnh Động Mạch Vành
      </h1>
      
      <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded">
        <h3 className="text-lg font-semibold text-red-800 mb-3">🚨 Triệu chứng:</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
          <ul className="space-y-1">
            <li>• Cơn đau thắt ngực</li>
            <li>• Khó chịu ở ngực, nặng tức, nóng rát</li>
            <li>• Đau lan ra cổ, vai, cánh tay</li>
            <li>• Cảm giác như sắp ngất</li>
          </ul>
          <ul className="space-y-1">
            <li>• Hoa mắt chóng mặt</li>
            <li>• Chóng váng, khó thở</li>
            <li>• Đau bụng trên rốn, buồn nôn</li>
            <li>• Đổ mồ hôi, mệt mỏi</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ Nguyên nhân:</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="font-medium text-red-700">Mảng xơ vữa bám trong lòng động mạch gây tắc nghẽn</div>
            <div>Nguồn gốc từ:</div>
            <ul className="ml-4 space-y-1">
              <li>• Cholesterol trong máu cao</li>
              <li>• Thừa cân béo phì</li>
              <li>• Tuổi tác</li>
              <li>• Yếu tố di truyền</li>
              <li>• Thói quen xấu: rượu, thuốc lá</li>
              <li>• Ít vận động, cao huyết áp</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800 mb-3">💊 Điều trị nội khoa:</h3>
          <div className="space-y-2">
            <div className="p-2 bg-white rounded border text-sm">
              <strong className="text-blue-700">Thuốc chẹn beta:</strong> Làm chậm tim đập
            </div>
            <div className="p-2 bg-white rounded border text-sm">
              <strong className="text-purple-700">Thuốc chống đông</strong>
            </div>
            <div className="p-2 bg-white rounded border text-sm">
              <strong className="text-green-700">Thuốc giãn động mạch vành:</strong> Nitroglycerin
            </div>
            <div className="p-2 bg-white rounded border text-sm">
              <strong className="text-orange-700">Thuốc hạ mỡ máu</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
        <h3 className="text-lg font-semibold text-red-800 mb-3">🚨 Khi nào cần cấp cứu:</h3>
        <div className="bg-white p-3 rounded border border-red-200">
          <p className="text-red-700 font-medium">
            Cơn đau thắt ngực kéo dài hơn 20 phút mà dùng thuốc giãn mạch vẫn không hiệu quả
            → Gọi cấp cứu ngay lập tức
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">🍃 Thực phẩm chức năng:</h3>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-blue-700">Ích Tâm Khang PLATINUM</h4>
              <p className="text-xs text-gray-600">(Cty CP thương mại H.Băng)</p>
              <ul className="text-sm text-gray-700 mt-1 space-y-1">
                <li>• Hỗ trợ giảm khó thở, hồi hộp</li>
                <li>• Giảm cholesterol máu</li>
                <li>• Tăng lưu thông máu</li>
              </ul>
            </div>
            
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-green-700">Nghịn PLUS</h4>
              <p className="text-xs text-gray-600">Hoạt huyết, hạ mỡ máu, giảm đau nhức</p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
          <h3 className="text-lg font-semibold text-indigo-800 mb-3">💡 Lời khuyên của thầy thuốc:</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Bỏ thuốc lá, rượu</li>
            <li>• Tập thể dục thường xuyên</li>
            <li>• Tránh stress</li>
            <li>• Ăn giảm muối</li>
            <li>• Không ăn mỡ và phủ tạng động vật</li>
            <li>• Ăn chậm, nhai kỹ, chia nhỏ bữa</li>
            <li>• Điều trị đái tháo đường, rối loạn lipid</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export const page10 = () => (
  <div className="max-w-4xl mx-auto lg:p-6 pt-4 bg-gradient-to-br from-red-100 to-pink-100 rounded-xl shadow-lg">
    <div className="bg-white rounded-lg lg:p-6 p-4 shadow-md">
      <h1 className="lg:text-3xl text-xl font-bold text-red-800 mb-6 border-b-2 border-red-200 pb-3">
        🚨 Cấp cứu đau thắt ngực
      </h1>
      
      <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
        <h3 className="text-xl font-bold text-red-800 mb-3">⚡ HÀNH ĐỘNG NGAY LẬP TỨC:</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border border-red-200">
              <h4 className="font-bold text-red-700 text-lg">1. NGHỈ NGƠI</h4>
              <p className="text-gray-700 text-sm">Dừng mọi hoạt động ngay lập tức</p>
            </div>
            
            <div className="p-3 bg-white rounded border border-red-200">
              <h4 className="font-bold text-red-700 text-lg">2. DÙNG THUỐC</h4>
              <p className="text-gray-700 text-sm">
                <strong className="text-blue-700">Nitroglycerin</strong><br/>
                Dạng ngậm hoặc xịt dưới lưỡi
              </p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border border-red-200">
              <h4 className="font-bold text-red-700 text-lg">3. ĐẾN BỆNH VIỆN</h4>
              <p className="text-gray-700 text-sm">Càng sớm càng tốt</p>
            </div>
            
            <div className="p-3 bg-red-100 rounded border border-red-300">
              <h4 className="font-bold text-red-800 text-lg">⏰ LƯU Ý:</h4>
              <p className="text-red-700 text-sm font-medium">
                Nếu đau > 20 phút và thuốc không hiệu quả<br/>
                → GỌI CẤP CỨU 115
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">🚭 Bỏ thói quen xấu:</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Bỏ thuốc lá</li>
            <li>• Bỏ rượu</li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800 mb-3">🏃‍♂️ Lối sống tích cực:</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Tập thể dục thường xuyên</li>
            <li>• Tránh stress</li>
          </ul>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">🍽️ Chế độ ăn:</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Ăn giảm muối</li>
            <li>• Không ăn mỡ động vật</li>
            <li>• Ăn chậm, nhai kỹ</li>
            <li>• Chia nhỏ bữa</li>
            <li>• Hạn chế béo phì</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
        <h3 className="text-lg font-semibold text-purple-800 mb-3">🩺 Điều trị các bệnh liên quan:</h3>
        <div className="grid md:grid-cols-3 gap-3 text-sm text-gray-700">
          <div className="p-2 bg-white rounded border">Đái tháo đường</div>
          <div className="p-2 bg-white rounded border">Rối loạn lipid máu</div>
          <div className="p-2 bg-white rounded border">Vôi hóa động mạch</div>
        </div>
      </div>
    </div>
  </div>
);

// Export group 2 (trang 6-10)
export const pagesGroup2 = [
  { id: 'page06', title: 'Viêm họng & Ho', component: page06 },
  { id: 'page07', title: 'Bệnh rối loạn tiền đình', component: page07 },
  { id: 'page08', title: 'Viêm tuyến tiền liệt', component: page08 },
  { id: 'page09', title: 'Bệnh Động Mạch Vành', component: page09 },
  { id: 'page10', title: 'Cấp cứu đau thắt ngực', component: page10 },
];
