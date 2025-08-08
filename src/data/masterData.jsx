// Import tất cả các nhóm trang
import { pagesGroup1 } from './masterData1.jsx';
import { pagesGroup2 } from './masterData2.jsx';
import { pagesGroup3 } from './masterData3.jsx';
import { pagesGroup4 } from './masterData4.jsx';
import { pagesGroup5 } from './masterData5.jsx';
import { pagesGroup6 } from './masterData6.jsx';

// Tổng hợp tất cả các trang (30 trang)
export const allPages = [
  ...pagesGroup1,  // 1-5
  ...pagesGroup2,  // 6-10
  ...pagesGroup3,  // 11-15
  ...pagesGroup4,  // 16-20
  ...pagesGroup5,  // 21-25
  ...pagesGroup6,  // 26-30
];

// Phân nhóm theo chủ đề để dễ điều hướng
export const pageCategories = [
  {
    id: 'allergies',
    title: '🌡️ Dị ứng & Viêm nhiễm',
    pages: [
      'page01', // Bệnh dị ứng thời tiết
      'page02', // Viêm bờ mi, giác mạc dị ứng
      'page03', // Viêm do virus Herpes
      'page04', // Bệnh Zona thần kinh
      'page06', // Viêm họng & Ho
    ]
  },
  {
    id: 'digestion',
    title: '🍽️ Tiêu hóa & Dưỡng sinh',
    pages: [
      'page05', // Rối loạn tiêu hóa & Tiêu chảy
      'page20', // Dưỡng Tỳ Vị
    ]
  },
  {
    id: 'heart',
    title: '❤️ Tim mạch & Huyết áp',
    pages: [
      'page09', // Bệnh Động Mạch Vành
      'page10', // Cấp cứu đau thắt ngực
      'page12', // Tụt huyết áp
      'page13', // 10 Dấu hiệu đột quỵ
      'page19', // Chăm sóc tim mạch
      'page28', // 10 Thói quen tốt cho tim
      'page29', // 10 thói quen xấu gây hại cho tim
      'page30', // Cấp cứu & Xử lý bệnh tim
    ]
  },
  {
    id: 'nervous',
    title: '🧠 Thần kinh & Não bộ',
    pages: [
      'page07', // Bệnh rối loạn tiền đình
      'page24', // Ba bước giúp não bộ tốt, dễ ngủ
    ]
  },
  {
    id: 'urology',
    title: '🩺 Tiết niệu',
    pages: [
      'page08', // Viêm tuyến tiền liệt
    ]
  },
  {
    id: 'respiratory',
    title: '🫁 Hô hấp',
    pages: [
      'page11', // Bệnh cúm mùa
      'page15', // Bệnh cảm lạnh
    ]
  },
  {
    id: 'nutrition',
    title: '🥗 Dinh dưỡng & Thực phẩm',
    pages: [
      'page14', // Thực phẩm giàu Protein
      'page21', // Nước hồng sâm Hàn Quốc
      'page22', // 10 loại rau người già hạn chế ăn
      'page25', // 7 loại thực phẩm giúp cơ chân khỏe
      'page26', // Trái cây tốt cho xương khớp
    ]
  },
  {
    id: 'wellness',
    title: '🧘‍♂️ Sống khỏe & Phòng bệnh',
    pages: [
      'page16', // Dưỡng khí
      'page17', // Thể Hàn & Dưỡng khí
      'page18', // 5 Cách phòng chống COVID-19
      'page23', // Cách sống giữ cơ thể khỏe mạnh
    ]
  },
  {
    id: 'remedies',
    title: '🌿 Bài thuốc & Phương pháp',
    pages: [
      'page27', // Chườm tê tay, chân, gai chân
    ]
  }
];

// Hàm tìm trang theo ID
export const findPageById = (pageId) => {
  return allPages.find(page => page.id === pageId);
};

// Hàm tìm trang theo category
export const getPagesByCategory = (categoryId) => {
  const category = pageCategories.find(cat => cat.id === categoryId);
  if (!category) return [];
  
  return category.pages.map(pageId => findPageById(pageId)).filter(Boolean);
};

// Thống kê tổng quan
export const getStats = () => ({
  totalPages: allPages.length,
  totalCategories: pageCategories.length,
  pagesByCategory: pageCategories.map(cat => ({
    category: cat.title,
    count: cat.pages.length
  }))
});
