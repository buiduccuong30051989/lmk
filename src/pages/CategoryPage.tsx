import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, FileText, Clock } from 'lucide-react'
import { getPagesByCategory, pageCategories } from '@/data/masterData'

interface CategoryPageProps {
  categoryId: string
  onPageSelect: (pageId: string) => void
  onBack: () => void
}

export default function CategoryPage({ categoryId, onPageSelect, onBack }: CategoryPageProps) {
  const category = pageCategories.find(cat => cat.id === categoryId)
  const pages = getPagesByCategory(categoryId)

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <CardContent className="lg:p-8 p-4 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Không tìm thấy chủ đề</h1>
            <Button onClick={onBack} variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Quay lại
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const getCategoryIcon = (categoryId: string) => {
    const icons: { [key: string]: string } = {
      allergies: '🌡️',
      digestion: '🍽️',
      heart: '❤️',
      nervous: '🧠',
      urology: '🩺',
      respiratory: '🫁',
      nutrition: '🥗',
      wellness: '🧘‍♂️',
      remedies: '🌿'
    }
    return icons[categoryId] || '📋'
  }

  const getCategoryColor = (categoryId: string) => {
    const colors: { [key: string]: { bg: string; border: string; text: string } } = {
      allergies: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-800' },
      digestion: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-800' },
      heart: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800' },
      nervous: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-800' },
      urology: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800' },
      respiratory: { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-800' },
      nutrition: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800' },
      wellness: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-800' },
      remedies: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-800' }
    }
    return colors[categoryId] || { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-800' }
  }

  const categoryColors = getCategoryColor(categoryId)

  return (
    <div className="max-w-6xl mx-auto lg:p-6 pt-4">
      {/* Header */}
      <div className="mb-8">
        <Button 
          onClick={onBack} 
          variant="outline" 
          className="mb-4 hover:bg-gray-50"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Quay lại trang chủ
        </Button>
        
        <Card className={`${categoryColors.bg} ${categoryColors.border} border-l-4`}>
          <CardContent className="lg:p-8 p-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl">{getCategoryIcon(categoryId)}</div>
              <div>
                <h1 className={`lg:text-3xl text-xl font-bold ${categoryColors.text} mb-2`}>
                  {category.title.replace(/^[^\s]+\s/, '')} {/* Remove emoji from title */}
                </h1>
                <p className={`${categoryColors.text} opacity-80 flex items-center gap-2`}>
                  <FileText className="h-4 w-4" />
                  {pages.length} bài viết trong chủ đề này
                </p>
              </div>
            </div>
            
            <div className={`inline-flex items-center gap-2 px-4 py-2 ${categoryColors.bg} ${categoryColors.border} border rounded-full text-sm ${categoryColors.text}`}>
              <Clock className="h-4 w-4" />
              Cập nhật gần đây
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Articles Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pages.map((page, index) => (
          <Card 
            key={page.id} 
            className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer group"
            onClick={() => onPageSelect(page.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className={`w-8 h-8 ${categoryColors.bg} ${categoryColors.border} border rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <span className="text-sm">{getCategoryIcon(categoryId)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                    {page.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className={`px-2 py-1 ${categoryColors.bg} ${categoryColors.text} rounded-full`}>
                      Bài {index + 1}
                    </span>
                    <span>•</span>
                    <span>Tham khảo</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FileText className="h-4 w-4" />
                  <span>Kinh nghiệm</span>
                </div>
                <div className="text-xs text-gray-400 group-hover:text-blue-500 transition-colors">
                  Xem chi tiết →
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {pages.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Chưa có bài viết nào
            </h3>
            <p className="text-gray-600 mb-6">
              Chủ đề này hiện chưa có nội dung. Sẽ được cập nhật sớm.
            </p>
            <Button onClick={onBack} variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Khám phá chủ đề khác
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Footer Note */}
      <div className="mt-12 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-sm text-amber-800 text-center">
          <strong>⚠️ Lưu ý quan trọng:</strong> Tất cả thông tin chỉ mang tính chất tham khảo. 
          Hãy tham khảo ý kiến bác sĩ chuyên khoa trước khi áp dụng bất kỳ phương pháp điều trị nào.
        </p>
      </div>
    </div>
  )
}
