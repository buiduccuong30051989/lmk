import React from 'react';

export const page11 = () => (
  <div className="max-w-4xl mx-auto lg:p-6 pt-4 bg-gradient-to-br from-green-50 to-lime-100 rounded-xl shadow-lg">
    <div className="bg-white rounded-lg lg:p-6 p-4 shadow-md">
      <h1 className="lg:text-3xl text-xl font-bold text-green-800 mb-6 border-b-2 border-green-200 pb-3">
        🦠 Bệnh cúm mùa
      </h1>
      
      <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded">
        <h3 className="text-lg font-semibold text-red-800 mb-3">🌡️ Triệu chứng:</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
          <ul className="space-y-1">
            <li>• Sốt cao 39-40°C</li>
            <li>• Ớn lạnh</li>
            <li>• Ho, hắt hơi, ngạt mũi</li>
            <li>• Đau họng</li>
          </ul>
          <ul className="space-y-1">
            <li>• Đau cơ, đau đầu</li>
            <li>• Cảm thấy yếu và mệt mỏi</li>
            <li>• Nhức nhối với ánh sáng</li>
            <li>• Kéo dài 7-10 ngày</li>
          </ul>
        </div>
        <div className="mt-3 p-3 bg-yellow-50 rounded border border-yellow-200">
          <p className="text-sm text-yellow-800">
            <strong>📝 Chẩn đoán:</strong> Test nhanh để xác định cúm A hoặc B<br/>
            <strong>🚨 Đi khám ngay nếu:</strong> sốt ho nặng, thở gấp, đau ngực, ho ra máu, đau nhức cơ khớp
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">💊 Thuốc kháng virus:</h3>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-blue-700">Tamin Flu</h4>
            </div>
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-purple-700">Flustad 75</h4>
              <p className="text-sm text-gray-600 mt-1">Hộp 10v, ngày uống 2v chia làm 2 lần (sáng, tối)</p>
              <p className="text-xs text-green-600 mt-1">💡 Uống ngay khi xét nghiệm COVID dương, trước 48h bị mắc bệnh</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800 mb-3">🍊 Thuốc hỗ trợ:</h3>
          <div className="space-y-2">
            <div className="p-2 bg-white rounded border text-sm">
              <strong className="text-orange-700">Vitamin tổng hợp</strong> (quan trọng vitamin D)
            </div>
            <div className="p-2 bg-white rounded border text-sm">
              <strong className="text-blue-700">Althax 120mg</strong> - tăng cường miễn dịch<br/>
              <span className="text-xs text-gray-600">Ngày 1 viên</span>
            </div>
            <div className="p-2 bg-white rounded border text-sm">
              <strong className="text-green-700">Omega 3-6-9</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <h3 className="text-lg font-semibold text-yellow-800 mb-3">🍽️ Chế độ ăn uống khi bị cúm:</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-green-700 mb-2">🍊 Trái cây giàu vitamin C:</h4>
            <p className="text-sm text-gray-700">Cam, chanh, bưởi, quýt, táo</p>
            
            <h4 className="font-medium text-blue-700 mb-2 mt-3">🍲 Thức ăn dạng lỏng:</h4>
            <p className="text-sm text-gray-700">Cháo, phở gà, trứng gà, ngũ cốc tăng cường</p>
          </div>
          <div>
            <h4 className="font-medium text-purple-700 mb-2">🫖 Đồ uống:</h4>
            <p className="text-sm text-gray-700">Trà xanh + gừng, đồ uống tăng điện giải</p>
            
            <h4 className="font-medium text-red-700 mb-2 mt-3">🥩 Thực phẩm bổ dưỡng:</h4>
            <p className="text-sm text-gray-700">Thịt bò + hải sản giàu kẽm, đậu bắp luộc, rau cải màu đậm</p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
        <h3 className="text-lg font-semibold text-indigo-800 mb-3">💡 Lưu ý quan trọng:</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li className="flex items-start">
            <span className="text-red-600 mr-2">❌</span>
            <span><strong>Thuốc Amoxicillin + Acid:</strong> Viêm đường hô hấp nhẹ không được dùng</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✅</span>
            <span><strong>Tắm rửa:</strong> Cúm + cảm lạnh nên tắm nước ấm hàng ngày</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">💧</span>
            <span><strong>Giữ ấm:</strong> Uống trà gừng, nước ấm, chè đặc, kẹo, socola</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export const page12 = () => (
  <div className="max-w-4xl mx-auto lg:p-6 pt-4 bg-gradient-to-br from-red-50 to-orange-100 rounded-xl shadow-lg">
    <div className="bg-white rounded-lg lg:p-6 p-4 shadow-md">
      <h1 className="lg:text-3xl text-xl font-bold text-red-800 mb-6 border-b-2 border-red-200 pb-3">
        📉 Tụt huyết áp
      </h1>
      
      <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded">
        <h3 className="text-lg font-semibold text-red-800 mb-2">📊 Chỉ số:</h3>
        <p className="text-gray-700 font-medium">
          Tâm thu &lt; 90 mmHg và tâm trương &lt; 60 mmHg
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ Biểu hiện:</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Choáng váng, chóng mặt, ngất xỉu</li>
            <li>• Hoa mắt, nhìn mờ, mất tập trung</li>
            <li>• Buồn nôn, vã mồ hôi</li>
            <li>• Suy nhược cơ thể</li>
            <li>• Nhịp thở ngắn, thở nhanh hơn</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">🔍 Nguyên nhân:</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Đột ngột thay đổi tư thế</li>
            <li>• Ăn thiếu chất dinh dưỡng</li>
            <li>• Nhiệt độ quá lạnh, quá nóng</li>
            <li>• Cơ thể mất nước</li>
            <li>• Mắc bệnh tim mạch</li>
            <li>• Do thuốc gây ra (thuốc cao huyết áp,...)</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
        <h3 className="text-lg font-semibold text-green-800 mb-3">🚑 Xử lý khi bị tụt huyết áp:</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-blue-700">🛌 Tư thế:</h4>
              <p className="text-sm text-gray-600">Nằm hoặc ngồi, kê chân cao hơn</p>
            </div>
            
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-orange-700">🫖 Đồ uống:</h4>
              <p className="text-sm text-gray-600">Trà gừng, nước ấm, chè đặc, kẹo, socola</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-green-700">🫁 Thở:</h4>
              <p className="text-sm text-gray-600">Cởi bỏ quần áo chật, thở sâu</p>
            </div>
            
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-purple-700">💊 Thuốc:</h4>
              <p className="text-sm text-gray-600">Hoạt huyết dưỡng não (cho cả cao HA & thấp HA)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
        <h3 className="text-lg font-semibold text-purple-800 mb-3">💊 Thuốc beta-block:</h3>
        <div className="bg-white p-3 rounded border">
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Khi bắt đầu dùng thuốc, nên giảm liều từ từ trong vòng ít nhất 2 tuần</li>
            <li>• Liều như viên 25mg dùng trong trường hợp dùng hằng ngày</li>
            <li>• Thuốc được đánh giá khá an toàn khi sử dụng thời gian dài</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export const page13 = () => (
  <div className="max-w-4xl mx-auto lg:p-6 pt-4 bg-gradient-to-br from-purple-50 to-red-100 rounded-xl shadow-lg">
    <div className="bg-white rounded-lg lg:p-6 p-4 shadow-md">
      <h1 className="lg:text-3xl text-xl font-bold text-purple-800 mb-6 border-b-2 border-purple-200 pb-3">
        🧠 10 Dấu hiệu đột quỵ trước 30 ngày
      </h1>
      
      <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
        <h3 className="text-lg font-semibold text-red-800 mb-3">⚠️ Các dấu hiệu cảnh báo:</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="text-gray-700 space-y-2">
            <li>• Đau đầu dữ dội, đau liên tục</li>
            <li>• Tê bì chân tay, tê liệt nửa người</li>
            <li>• Mất hoặc suy giảm thị lực đột ngột</li>
            <li>• Lời nói không rõ, nói khó</li>
            <li>• Chóng mặt, mất thăng bằng</li>
          </ul>
          <ul className="text-gray-700 space-y-2">
            <li>• Mệt mỏi, buồn ngủ kéo dài</li>
            <li>• Tim đập loạn, đau ngực nhẹ</li>
            <li>• Ù tai, mất thính giác</li>
            <li>• Nhịp thở bất thường, khó thở</li>
            <li>• Đờ đẫn, lơ mơ bất thường</li>
          </ul>
        </div>
      </div>

      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">🔍 Nguyên nhân chính:</h3>
        <div className="bg-white p-3 rounded border">
          <p className="text-gray-700 mb-2">
            <strong className="text-red-700">Vỡ mạch máu não</strong> do cao huyết áp gây xơ vữa động mạch
          </p>
          <p className="text-gray-700">
            Mảng xơ trong máu hình thành làm các mạch máu tắc nghẽn → Tắc mạch máu não
          </p>
          <div className="mt-3 p-2 bg-yellow-50 rounded">
            <p className="text-sm text-yellow-800">
              <strong>⏰ Thời gian nguy hiểm:</strong> 2h sáng đến 11h trưa, tăng cao vào mùa đông
            </p>
          </div>
        </div>
      </div>

      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
        <h3 className="text-lg font-semibold text-red-800 mb-3">🚑 SƠ CỨU KHẨN CẤP:</h3>
        <div className="bg-white p-4 rounded border border-red-200">
          <div className="mb-4 p-3 bg-red-100 rounded">
            <p className="text-red-800 font-bold text-center">
              ⏰ 3-4 GIỜ ĐẦU QUAN TRỌNG NHẤT ĐỂ CỨU SỐNG
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded">
                <h4 className="font-medium text-blue-700">1. Làm sạch đường thở</h4>
                <p className="text-sm text-gray-600">Loại bỏ đờm dãi, dị vật trong miệng</p>
              </div>
              
              <div className="p-3 bg-green-50 rounded">
                <h4 className="font-medium text-green-700">2. Tư thế nằm</h4>
                <p className="text-sm text-gray-600">Đầu hơi nâng lên</p>
              </div>
              
              <div className="p-3 bg-yellow-50 rounded">
                <h4 className="font-medium text-yellow-700">3. Nếu tê liệt</h4>
                <p className="text-sm text-gray-600">Nằm nghiêng về bên không bị tê liệt</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 bg-purple-50 rounded">
                <h4 className="font-medium text-purple-700">4. Nếu hôn mê</h4>
                <p className="text-sm text-gray-600">Thở hấp hối → ép tim ngoài ngực</p>
                <p className="text-xs text-gray-500">(2 lần thổi ngực, 10 lần ép tim)</p>
              </div>
              
              <div className="p-3 bg-red-100 rounded border border-red-300">
                <h4 className="font-medium text-red-700">5. ĐƯA ĐẾN BỆNH VIỆN</h4>
                <p className="text-sm text-red-600 font-medium">NGAY LẬP TỨC!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800 mb-3">💊 Thuốc giảm nhẹ triệu chứng:</h3>
        <div className="p-3 bg-white rounded border">
          <h4 className="font-medium text-blue-700">Cảm lạnh Cao Nhật (bột màu vàng)</h4>
          <p className="text-sm text-gray-600 mt-1">
            Uống sau ăn 30 phút<br/>
            Người lớn mỗi lần 1 gói, ngày 3 lần
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const page14 = () => (
  <div className="max-w-4xl mx-auto lg:p-6 pt-4 bg-gradient-to-br from-green-50 to-blue-100 rounded-xl shadow-lg">
    <div className="bg-white rounded-lg lg:p-6 p-4 shadow-md">
      <h1 className="lg:text-3xl text-xl font-bold text-green-800 mb-6 border-b-2 border-green-200 pb-3">
        🍖 Thực phẩm giàu Protein cho người già
      </h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">🐟 Hải sản:</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Cá ngừ, cá thu</li>
              <li>• Cá hồi, cá mòi</li>
              <li>• Cá trích</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">🍗 Thịt gia cầm:</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Thịt gà</li>
              <li>• Thịt vịt</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-3">🌱 Đậu nành:</h3>
            <div className="bg-white p-3 rounded border">
              <p className="text-sm text-gray-700 mb-2">
                <strong className="text-blue-700">Tốt nhất:</strong> Ăn dạng đậu phụ
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong className="text-green-700">Sữa đậu nành không đường:</strong> 100g/ngày
              </p>
              <p className="text-xs text-orange-600 mt-2">
                💡 Nên ăn cách ngày là tốt nhất cho người bị thoái hóa đốt sống cổ<br/>
                ⚠️ Không ăn thường xuyên quá → đầy bụng khó tiêu
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">🌾 Các loại hạt đậu</h3>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <h3 className="text-lg font-semibold text-orange-800 mb-3">🥚 Trứng</h3>
          </div>

          <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
            <h3 className="text-lg font-semibold text-pink-800 mb-3">🥛 Sữa, sữa chua</h3>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
            <h3 className="text-lg font-semibold text-indigo-800 mb-3">🛢️ Dầu Omega 3:</h3>
            <div className="bg-white p-3 rounded border">
              <p className="text-sm text-green-700 mb-2">
                <strong>Công dụng:</strong> Làm chậm loãng xương, tăng chất nhờn cho khớp
              </p>
              <div className="space-y-1 text-sm text-gray-700">
                <div><strong className="text-blue-700">Cá béo:</strong> cá hồi, cá thu, cá ngừ</div>
                <div><strong className="text-purple-700">Hạt:</strong> hạt chia + hạt lanh + quả óc chó</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const page15 = () => (
  <div className="max-w-4xl mx-auto lg:p-6 pt-4 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl shadow-lg">
    <div className="bg-white rounded-lg lg:p-6 p-4 shadow-md">
      <h1 className="lg:text-3xl text-xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-3">
        ❄️ Bệnh cảm lạnh
      </h1>
      
      <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">📝 Định nghĩa:</h3>
        <p className="text-gray-700">
          Bệnh thường xảy ra vào mùa đông hoặc khi cơ thể bị dính nước mưa quá lâu, ngủ bị trúng gió đột ngột vào sáng sớm, tối.
        </p>
        <p className="text-gray-700 mt-2">
          Là bệnh truyền nhiễm do virus gây ra ở hệ thống hô hấp, ảnh hưởng nhiều đến mũi, gây ho, xì mũi, khó thở.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h3 className="text-lg font-semibold text-red-800 mb-3">🌡️ Triệu chứng:</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Đổ mũi, nghẹt mũi chảy nước mũi</li>
            <li>• Hắt hơi, ho nhiều vào sáng sớm hoặc chiều tối</li>
            <li>• Đau đầu nhẹ, nặng đầu, khó chịu</li>
            <li>• Sốt nhẹ, có thể sốt cao, ớn lạnh</li>
            <li>• Cảm nhận thân nhiệt vừa nóng vừa lạnh</li>
            <li>• Mệt mỏi, kiệt sức, không muốn ăn</li>
            <li>• Hắt hơi liên tục</li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800 mb-3">💡 Cách chữa đơn giản:</h3>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-blue-700">a) Thức khuya để thoát độc:</h4>
              <p className="text-sm text-gray-600">
                Thức cao giờ để tán bớt khí độc ra bên ngoài. Có thể xông hơi để thải độc.
                Chỉ cần thức khuya vài lần bệnh sẽ thuyên giảm nhanh.
              </p>
            </div>
            
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-orange-700">b) Thực phẩm hỗ trợ:</h4>
              <p className="text-sm text-gray-600">
                Cam chanh, trà gừng, nước bạc hà, cháo hành nóng, đường phèn, thực phẩm giàu kẽm
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">🍯 Dùng mật ong:</h3>
          <div className="p-3 bg-white rounded border">
            <p className="text-gray-700">
              <strong>Liều dùng:</strong> Mỗi ngày 4 muỗng cà phê mật ong nguyên chất
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Chia làm 2 lần trong ngày, sau bữa ăn chính 15 phút
            </p>
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-800 mb-3">😴 Nghỉ ngơi:</h3>
          <div className="p-3 bg-white rounded border">
            <p className="text-gray-700">Nghỉ ngơi nhiều</p>
            <p className="text-sm text-green-600 mt-1">
              <strong>Thời gian:</strong> Bệnh kéo dài 1-2 ngày là khỏi
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-indigo-50 p-4 rounded-lg border border-indigo-200">
        <h3 className="text-lg font-semibold text-indigo-800 mb-3">🍲 Ăn gì khi cảm lạnh:</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="text-gray-700 space-y-1">
            <li>• Súp gà với diếp cá, lá tía tô + thịt gà</li>
            <li>• Thực phẩm giàu vitamin C</li>
            <li>• Trà gừng</li>
          </ul>
          <ul className="text-gray-700 space-y-1">
            <li>• Tỏi</li>
            <li>• Nước dừa (tăng điện giải)</li>
            <li>• Rau màu xanh đậm, chuối, khoai lang</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// Export group 3 (trang 11-15)
export const pagesGroup3 = [
  { id: 'page11', title: 'Bệnh cúm mùa', component: page11 },
  { id: 'page12', title: 'Tụt huyết áp', component: page12 },
  { id: 'page13', title: '10 Dấu hiệu đột quỵ', component: page13 },
  { id: 'page14', title: 'Thực phẩm giàu Protein', component: page14 },
  { id: 'page15', title: 'Bệnh cảm lạnh', component: page15 },
];
