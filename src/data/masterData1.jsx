import React from 'react';

export const page01 = () => (
  <div className="max-w-4xl mx-auto lg:p-6 pt-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg">
    <div className="bg-white rounded-lg lg:p-6 p-4 shadow-md">
      <h1 className="lg:text-3xl text-xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-3">
        🌡️ Bệnh dị ứng thời tiết
      </h1>
      
      <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded">
        <h3 className="text-lg font-semibold text-red-800 mb-2">Triệu chứng:</h3>
        <p className="text-gray-700">Khi tắm hoặc tiếp xúc với nước bị ngứa và nổi mề đay.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800 mb-3">💊 Thuốc điều trị chính:</h3>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-blue-700">Fexofenadin (Fexodine Fast)</h4>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                <li>• Ngày uống 2 lần, mỗi lần 60mg</li>
                <li>• Hoặc uống 1 lần 120mg</li>
                <li>• Sau đó chỉ uống bổ sung khi xuất hiện triệu chứng</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">🧴 Thuốc bôi ngoài:</h3>
          <div className="p-3 bg-white rounded border">
            <h4 className="font-medium text-purple-700">Dibetalic (Traphaco)</h4>
            <p className="text-sm text-gray-600 mt-1">0.96mg + 0.45g - 15g</p>
            <p className="text-sm text-gray-700 mt-2">Bôi da khi ngứa</p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
        <h3 className="text-lg font-semibold text-indigo-800 mb-3">➕ Thuốc bổ sung:</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
            Thuốc tăng cường hệ miễn dịch
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
            Thuốc giải độc gan Boganic (Traphaco)
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export const page02 = () => (
  <div className="max-w-4xl mx-auto lg:p-6 pt-4 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl shadow-lg">
    <div className="bg-white rounded-lg lg:p-6 p-4 shadow-md">
      <h1 className="lg:text-3xl text-xl font-bold text-green-800 mb-6 border-b-2 border-green-200 pb-3">
        👁️ Viêm bờ mi, giác mạc do dị ứng thời tiết
      </h1>
      
      <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded">
        <h3 className="text-lg font-semibold text-red-800 mb-2">Triệu chứng:</h3>
        <p className="text-gray-700">Phát ban đỏ, mụn đỏ xung quanh mắt, bờ mí, ngứa mắt, chảy nước mắt.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">💊 Thuốc dị ứng:</h3>
          <div className="p-3 bg-white rounded border">
            <h4 className="font-medium text-blue-700">Fetasdin 180mg</h4>
            <p className="text-sm text-gray-600 mt-1">Ngày uống 1 viên</p>
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-800 mb-3">👁️ Thuốc nhỏ mắt:</h3>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-purple-700">TOBRADEX</h4>
              <p className="text-xs text-gray-600">Tobramycin + Dexamethasone 0.3% + 0.1%</p>
            </div>
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-purple-700">Oflovid</h4>
              <p className="text-xs text-gray-600">Ofloxacin - Nhỏ 1 giọt 4 lần/ngày</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h3 className="text-lg font-semibold text-orange-800 mb-3">🔄 Thuốc tuần hoàn:</h3>
          <div className="p-3 bg-white rounded border">
            <h4 className="font-medium text-orange-700">Vinpocetin 5mg</h4>
            <p className="text-sm text-gray-600 mt-1">Ngày uống 4 viên / 2 lần sau ăn (sáng, tối)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const page03 = () => (
  <div className="max-w-4xl mx-auto lg:p-6 pt-4 bg-gradient-to-br from-red-50 to-pink-100 rounded-xl shadow-lg">
    <div className="bg-white rounded-lg lg:p-6 p-4 shadow-md">
      <h1 className="lg:text-3xl text-xl font-bold text-red-800 mb-6 border-b-2 border-red-200 pb-3">
        🦠 Viêm bờ mi + giác mạc do virus (Herpes)
      </h1>
      
      <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded">
        <h3 className="text-lg font-semibold text-red-800 mb-2">Triệu chứng:</h3>
        <p className="text-gray-700">Mụn đỏ xung quanh miệng + bờ mí + loét giác mạc, đỏ mắt, chảy nước mắt.</p>
      </div>

      <div className="mb-6 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
        <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ Nguyên nhân:</h3>
        <p className="text-gray-700 mb-2">Virus ẩn trong tế bào thần kinh của da, mắt tái hoạt động do:</p>
        <ul className="space-y-1 text-gray-600 ml-4">
          <li>• Căng thẳng</li>
          <li>• Nhiễm lạnh, sốt, mất ngủ, lạm dụng thuốc</li>
        </ul>
        <p className="text-sm text-red-600 mt-2 font-medium">→ Thường nhiễm vào mi, mắt, kết mạc, giác mạc</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800 mb-3">💊 Thuốc điều trị:</h3>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-blue-700">Thuốc kháng virus:</h4>
              <p className="text-sm text-gray-600">Acyclovir</p>
            </div>
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-purple-700">Thuốc nhỏ mắt:</h4>
              <p className="text-sm text-gray-600">TOBRADEX</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">🧴 Thuốc bôi ngoài:</h3>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-indigo-700">Thuốc mỡ diệt virus:</h4>
              <p className="text-sm text-gray-600">Acyclovir (bôi thuốc hằng ngày)</p>
            </div>
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-cyan-700">Nước mắt nhân tạo</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const page04 = () => (
  <div className="max-w-4xl mx-auto lg:p-6 pt-4 bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl shadow-lg">
    <div className="bg-white rounded-lg lg:p-6 p-4 shadow-md">
      <h1 className="lg:text-3xl text-xl font-bold text-purple-800 mb-6 border-b-2 border-purple-200 pb-3">
        ⚡ Bệnh Zona thần kinh
      </h1>
      
      <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded">
        <h3 className="text-lg font-semibold text-red-800 mb-2">Triệu chứng:</h3>
        <ul className="text-gray-700 space-y-1">
          <li>• Nóng rát và đau, ngứa ngáy</li>
          <li>• Phát ban và đau dữ dội thần kinh</li>
          <li>• Bọng nước to và tổ chức nhiễm dịch</li>
          <li>• Sống đau ở vùng liên sườn, vai, hông</li>
        </ul>
      </div>

      <div className="mb-6 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
        <h3 className="text-lg font-semibold text-yellow-800 mb-3">⏰ Lưu ý quan trọng:</h3>
        <div className="bg-white p-3 rounded border border-yellow-200">
          <p className="text-gray-700 font-medium text-red-600">
            Việc sử dụng thuốc kháng virus càng sớm càng tốt, nhất là trong 24h sau khi xuất hiện triệu chứng.
          </p>
          <p className="text-sm text-gray-600 mt-2">⚠️ Dùng trước khi bị phát ban</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800 mb-3">💊 Thuốc kháng virus uống:</h3>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-blue-700">Acyclovir (Zovirax)</h4>
            </div>
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-purple-700">Famciclovir (Famvir)</h4>
            </div>
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-indigo-700">Valacyclovir (Valtrex)</h4>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">🧴 Thuốc bôi ngoài:</h3>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-cyan-700">Acyclovir</h4>
            </div>
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-teal-700">Subac</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
        <h3 className="text-lg font-semibold text-indigo-800 mb-3">📋 Liều dùng đã thử nghiệm:</h3>
        <div className="bg-white p-3 rounded border">
          <p className="text-gray-700">
            <span className="font-medium">Acyclovir 800mg × 3 lần/ngày</span> trong 7-10 ngày
          </p>
          <p className="text-sm text-gray-600 mt-1">💡 Thức ăn không ảnh hưởng đến thuốc</p>
        </div>
      </div>
    </div>
  </div>
);

export const page05 = () => (
  <div className="max-w-4xl mx-auto lg:p-6 pt-4 bg-gradient-to-br from-yellow-50 to-orange-100 rounded-xl shadow-lg">
    <div className="bg-white rounded-lg lg:p-6 p-4 shadow-md">
      <h1 className="lg:text-3xl text-xl font-bold text-orange-800 mb-6 border-b-2 border-orange-200 pb-3">
        🤢 Rối loạn tiêu hóa & Tiêu chảy
      </h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800 mb-3">😊 Tiêu chảy nhẹ:</h3>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-blue-700">Enterogermina</h4>
              <p className="text-sm text-gray-600 mt-1">Men tiêu hóa - Uống cách nhau 3-4h</p>
            </div>
            <div className="p-3 bg-red-50 rounded border border-red-200">
              <p className="text-sm text-red-600 font-medium">⚠️ Không uống sữa + ăn trứng</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h3 className="text-lg font-semibold text-red-800 mb-3">🚨 Tiêu chảy cấp:</h3>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-purple-700">Kháng sinh:</h4>
              <p className="text-sm text-gray-600">Biseptol 480mg - Ngày 4 viên / 2 lần</p>
            </div>
            <div className="p-3 bg-white rounded border">
              <h4 className="font-medium text-indigo-700">Kháng viêm:</h4>
              <p className="text-sm text-gray-600">Metronidazol 250mg - Ngày 4 viên / 2 lần</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">🛡️ Bảo vệ niêm mạc:</h3>
          <div className="p-3 bg-white rounded border">
            <h4 className="font-medium text-cyan-700">Smecta</h4>
            <p className="text-sm text-gray-600 mt-1">Ngày 3 gói / 3 lần</p>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800 mb-3">🦠 Men tiêu hóa:</h3>
          <div className="p-3 bg-white rounded border">
            <h4 className="font-medium text-emerald-700">Enterogermina</h4>
            <p className="text-sm text-gray-600 mt-1">Uống cách nhau 3-4h</p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
        <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ Kiêng kỵ:</h3>
        <div className="bg-white p-3 rounded border border-yellow-200">
          <p className="text-red-600 font-medium">Không uống sữa + ăn trứng</p>
        </div>
      </div>
    </div>
  </div>
);

// Export tất cả các trang (5 trang đầu)
export const pagesGroup1 = [
  { id: 'page01', title: 'Bệnh dị ứng thời tiết', component: page01 },
  { id: 'page02', title: 'Viêm bờ mi, giác mạc dị ứng', component: page02 },
  { id: 'page03', title: 'Viêm do virus Herpes', component: page03 },
  { id: 'page04', title: 'Bệnh Zona thần kinh', component: page04 },
  { id: 'page05', title: 'Rối loạn tiêu hóa & Tiêu chảy', component: page05 },
];
