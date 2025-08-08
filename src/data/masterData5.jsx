import React from 'react';

export const page21 = () => (
  <div className="max-w-4xl mx-auto lg:p-6 pt-4 bg-gradient-to-br from-red-50 to-pink-100 rounded-xl shadow-lg">
    <div className="bg-white rounded-lg lg:p-6 p-4 shadow-md">
      <h1 className="lg:text-3xl text-xl font-bold text-red-800 mb-6 border-b-2 border-red-200 pb-3">
        🧴 Nước hồng sâm Hàn Quốc
      </h1>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Đối tượng nên sử dụng:</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Người mới ốm dậy, mới trị bệnh</li>
            <li>• Người cao tuổi, hệ miễn dịch suy giảm</li>
            <li>• Phụ nữ muốn đẹp da, chống lão hóa</li>
            <li>• Người lao động trí óc, học tập căng thẳng</li>
            <li>• Người hay ốm vặt, muốn sức khỏe ổn định</li>
            <li>• Người chơi thể thao, muốn tăng thể lực</li>
          </ul>
        </div>

        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Người không nên uống:</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• <strong className="text-orange-700">Người cao huyết áp:</strong> uống 1/2 liều</li>
            <li>• Người bị bệnh gan mật cấp tính</li>
            <li>• Người viêm dạ dày, đại tràng</li>
            <li>• Phụ nữ đang mang thai</li>
            <li>• Người dùng thuốc tây cần tư vấn bác sĩ</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">⏰ Thời điểm uống:</h3>
          <div className="p-3 bg-white rounded border">
            <p className="text-gray-700">
              <strong className="text-blue-700">Tốt nhất:</strong> Buổi sáng hoặc buổi trưa<br/>
              <strong className="text-green-700">Thời gian:</strong> Trước ăn hoặc sau ăn 30 phút
            </p>
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-800 mb-3">💊 Liều lượng:</h3>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-purple-700">Ngày đầu:</h4>
              <p className="text-sm text-gray-600">2 lần - mỗi lần 1 gói, 70mg</p>
            </div>
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-indigo-700">Chu kỳ:</h4>
              <p className="text-sm text-gray-600">Uống liên tục 1-2 tuần và nghỉ 1-2 tuần</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const page22 = () => (
  <div className="max-w-4xl mx-auto lg:p-6 pt-4 bg-gradient-to-br from-orange-50 to-red-100 rounded-xl shadow-lg">
    <div className="bg-white rounded-lg lg:p-6 p-4 shadow-md">
      <h1 className="lg:text-3xl text-xl font-bold text-orange-800 mb-6 border-b-2 border-orange-200 pb-3">
        🥬 10 loại rau người già hạn chế ăn
      </h1>
      
      <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">⚠️ Lý do hạn chế:</h3>
        <p className="text-gray-700">
          Các loại rau này ảnh hưởng đến tiêu hóa, gây đầy bụng, khó tiêu, ảnh hưởng đến thận và đau khớp.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h3 className="text-lg font-semibold text-red-800 mb-3">🌱 Đậu & Hạt:</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Đậu Hà Lan</li>
              <li>• Ngô luộc</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">🥬 Rau lá:</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Bắp cải</li>
              <li>• Rau cải xoăn</li>
              <li>• Rau bí/bèo (rau chân vịt, mâm xôi)</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-3">🥒 Rau củ:</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Măng tây</li>
              <li>• Khoai tây</li>
              <li>• Cà tím</li>
              <li>• Ớt chuông</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">🍄 Nấm:</h3>
            <div className="p-3 bg-white rounded border">
              <p className="text-gray-700">
                <strong className="text-green-700">Lưu ý:</strong> Tốt nhất ăn nấm hữu cơ
              </p>
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h3 className="text-lg font-semibold text-amber-800 mb-3">💡 Lưu ý đặc biệt:</h3>
            <div className="space-y-3">
              <div className="p-3 bg-white rounded border">
                <h4 className="font-medium text-blue-700">🌙 Về giấc ngủ:</h4>
                <p className="text-sm text-gray-600">
                  Thiếu hụt Vitamin D sẽ gây mất ngủ ở người già
                </p>
              </div>
              
              <div className="p-3 bg-white rounded border">
                <h4 className="font-medium text-orange-700">☀️ Khuyến nghị:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Bổ sung vitamin D</li>
                  <li>• Đi bộ, tập thể dục ngoài trời</li>
                  <li>• Tắm nắng hàng ngày</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const page23 = () => (
  <div className="max-w-4xl mx-auto lg:p-6 pt-4 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl shadow-lg">
    <div className="bg-white rounded-lg lg:p-6 p-4 shadow-md">
      <h1 className="lg:text-3xl text-xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-3">
        🏃‍♂️ Cách sống giữ cơ thể luôn khỏe mạnh
      </h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">💧 Nước & Tiểu:</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Uống đủ nước - chia nhỏ lần uống trong ngày</li>
              <li>• Đừng nhịn tiểu</li>
              <li>• Đi tiểu đêm: đi xong chờ 30-60 giây đi tiếp</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-3">🧘‍♂️ Tinh thần:</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Đừng căng thẳng</li>
              <li>• Luôn thư giãn</li>
              <li>• Thiền, yoga, đi bộ, nghe nhạc</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">🛁 Tắm rửa:</h3>
            <div className="p-3 bg-white rounded border">
              <p className="text-gray-700">
                Tắm nước ấm, nhưng sau đó tắm nước lạnh 3 phút ở phần dưới
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">🧼 Vệ sinh:</h3>
            <div className="p-3 bg-white rounded border">
              <p className="text-gray-700">Giữ gìn vệ sinh cá nhân</p>
            </div>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <h3 className="text-lg font-semibold text-orange-800 mb-3">🔥 Giữ ấm:</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Giữ ấm cơ thể</li>
              <li>• Đặc biệt khu vực bụng</li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h3 className="text-lg font-semibold text-red-800 mb-3">💺 Sinh hoạt:</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Không ngồi quá lâu</li>
              <li>• Ăn uống khoa học, hạn chế</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const page24 = () => (
  <div className="max-w-4xl mx-auto lg:p-6 pt-4 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl shadow-lg">
    <div className="bg-white rounded-lg lg:p-6 p-4 shadow-md">
      <h1 className="lg:text-3xl text-xl font-bold text-purple-800 mb-6 border-b-2 border-purple-200 pb-3">
        🧠 Ba bước giúp não bộ tốt, dễ ngủ
      </h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">🌙 Bước 1: Ấn vùng gáy tối</h3>
          <div className="p-3 bg-white rounded border">
            <p className="text-gray-700">
              <strong className="text-purple-700">Buổi tối:</strong> Ấn vùng gáy<br/>
              <strong className="text-orange-700">Sáng dậy:</strong> Dùng tay xoa gáy vài phút
            </p>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800 mb-3">✋ Bước 2: Xoay cổ tay</h3>
          <div className="p-3 bg-white rounded border">
            <ul className="text-gray-700 space-y-1">
              <li>• Xoay cổ tay</li>
              <li>• Vuốt nhẹ từng ngón tay</li>
              <li>• Chà 2 bàn tay cho nóng rồi vuốt</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">🦵 Bước 3: Gác chân</h3>
          <div className="p-3 bg-white rounded border">
            <p className="text-gray-700">
              <strong className="text-blue-700">Cách làm:</strong> Gác chân lên tường<br/>
              <strong className="text-green-700">Thời gian:</strong> Tối khoảng 15 phút<br/>
              <strong className="text-purple-700">Tư thế:</strong> Theo dạng sóng
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
        <h3 className="text-lg font-semibold text-indigo-800 mb-3">🌟 Lợi ích:</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-3 bg-white rounded border">
            <h4 className="font-medium text-blue-700">🧠 Cho não bộ:</h4>
            <p className="text-sm text-gray-600">Tăng cường lưu thông máu lên não</p>
          </div>
          <div className="p-3 bg-white rounded border">
            <h4 className="font-medium text-green-700">😴 Cho giấc ngủ:</h4>
            <p className="text-sm text-gray-600">Giúp thư giãn, dễ ngủ hơn</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const page25 = () => (
  <div className="max-w-4xl mx-auto lg:p-6 pt-4 bg-gradient-to-br from-green-50 to-teal-100 rounded-xl shadow-lg">
    <div className="bg-white rounded-lg lg:p-6 p-4 shadow-md">
      <h1 className="lg:text-3xl text-xl font-bold text-green-800 mb-6 border-b-2 border-green-200 pb-3">
        🦵 7 loại thực phẩm giúp cơ chân khỏe mạnh
      </h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h3 className="text-lg font-semibold text-amber-800 mb-3">🌰 Quả óc chó:</h3>
            <div className="p-3 bg-white rounded border">
              <ul className="text-gray-700 space-y-1">
                <li>• <strong className="text-blue-700">Omega 3</strong></li>
                <li>• <strong className="text-green-700">Magiê</strong></li>
                <li>• <strong className="text-purple-700">Giúp cơ bắp phát triển</strong></li>
              </ul>
            </div>
          </div>

          <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
            <h3 className="text-lg font-semibold text-pink-800 mb-3">🐟 Cá hồi:</h3>
            <div className="p-3 bg-white rounded border">
              <ul className="text-gray-700 space-y-1">
                <li>• <strong className="text-blue-700">Giàu Omega 3</strong></li>
                <li>• <strong className="text-red-700">Chống viêm</strong></li>
                <li>• <strong className="text-orange-700">Vitamin D</strong></li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">🥛 Sữa chua Hy Lạp:</h3>
            <div className="p-3 bg-white rounded border">
              <ul className="text-gray-700 space-y-1">
                <li>• <strong className="text-green-700">Protein cao</strong></li>
                <li>• <strong className="text-orange-700">Vitamin D</strong></li>
                <li>• <strong className="text-blue-700">Canxi + B12</strong></li>
                <li>• <strong className="text-purple-700">Giúp cơ bắp khỏe</strong></li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-3">🥬 Rau chân vịt:</h3>
            <div className="p-3 bg-white rounded border">
              <p className="text-gray-700">
                <strong className="text-red-700">Tăng cường tuần hoàn máu</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">🥚 Trứng:</h3>
            <div className="p-3 bg-white rounded border">
              <ul className="text-gray-700 space-y-1">
                <li>• <strong className="text-blue-700">Protein rất cao</strong></li>
                <li>• <strong className="text-orange-700">Vitamin D</strong></li>
                <li>• <strong className="text-green-700">Vitamin nhóm B</strong></li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">🫘 Các loại đậu:</h3>
            <div className="p-3 bg-white rounded border">
              <ul className="text-gray-700 space-y-1">
                <li>• <strong className="text-green-700">Protein thực vật tốt</strong></li>
                <li>• <strong className="text-blue-700">Kẽm cao</strong> - chống chuột rút</li>
                <li>• <strong className="text-red-700">Giúp tim mạch khỏe mạnh</strong></li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <h3 className="text-lg font-semibold text-orange-800 mb-3">🍌 Chuối:</h3>
            <div className="p-3 bg-white rounded border">
              <p className="text-gray-700">
                <span className="text-yellow-700 font-medium">Lưu ý:</span> Ăn lượng ít
              </p>
            </div>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
            <h3 className="text-lg font-semibold text-indigo-800 mb-3">💡 Tóm tắt lợi ích:</h3>
            <div className="p-3 bg-white rounded border">
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Cung cấp protein cho cơ bắp</li>
                <li>• Chống viêm và chuột rút</li>
                <li>• Tăng cường tuần hoàn máu</li>
                <li>• Bổ sung vitamin và khoáng chất</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Export group 5 (trang 21-25)
export const pagesGroup5 = [
  { id: 'page21', title: 'Nước hồng sâm Hàn Quốc', component: page21 },
  { id: 'page22', title: '10 loại rau người già hạn chế ăn', component: page22 },
  { id: 'page23', title: 'Cách sống giữ cơ thể khỏe mạnh', component: page23 },
  { id: 'page24', title: 'Ba bước giúp não bộ tốt, dễ ngủ', component: page24 },
  { id: 'page25', title: '7 loại thực phẩm giúp cơ chân khỏe', component: page25 },
];
