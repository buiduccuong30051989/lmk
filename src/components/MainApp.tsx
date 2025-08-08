import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Menu, X, Book, Heart, Brain, Stethoscope, Search, TrendingUp, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { allPages, pageCategories, findPageById, getStats, getPagesByCategory } from '@/data/masterData'
import { StatsGrid } from '@/components/StatsGrid'
import HighlightText from '@/components/HighlightText'
import BackToTop from '@/components/BackToTop'
import CategoryPage from '@/pages/CategoryPage'
import healthQuotes from '../data/health_quotes.json'

// QuoteBox Component
const QuoteBox = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const quoteRef = useRef(null)
  const authorRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      // GSAP animation for quote change
      const tl = gsap.timeline()
      
      // Fade out current quote
      tl.to([quoteRef.current, authorRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: 'power2.in'
      })
      // Change quote index
      .call(() => {
        setCurrentQuoteIndex((prev) => (prev + 1) % healthQuotes.quotes.length)
      })
      // Fade in new quote
      .to([quoteRef.current, authorRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out'
      })
    }, 10000) // 10 seconds

    return () => clearInterval(interval)
  }, [])

  const currentQuote = healthQuotes.quotes[currentQuoteIndex]

  return (
    <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
      <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
        💬 Trích dẫn hay
      </h3>
      <div className="text-green-700 space-y-3">
        <p 
          ref={quoteRef}
          className="text-sm italic leading-relaxed"
        >
          "{currentQuote.vietnamese}"
        </p>
        <p 
          ref={authorRef}
          className="text-xs text-right text-green-600 font-medium"
        >
          — {currentQuote.author}
        </p>
      </div>
    </div>
  )
}

function MainApp() {
  const [selectedPageId, setSelectedPageId] = useState(null)
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  
  const menuRef = useRef(null)
  const contentRef = useRef(null)
  const appRef = useRef(null)

  // Filter pages based on search query
  const filteredPages = allPages.filter(page =>
    page.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  useEffect(() => {
    // GSAP animation on app load
    gsap.fromTo(
      appRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )
  }, [])

  useEffect(() => {
    // Animation for menu
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: -300, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }
      )
    }
  }, [isMenuOpen])

  useEffect(() => {
    // Lock/unlock body scroll when menu opens/closes
    if (isMenuOpen) {
      document.body.style.height = '100vh'
      document.body.style.width = '100vw'
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.height = 'unset'
      document.body.style.width = 'unset'
      document.body.style.overflow = 'unset'
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.height = 'unset'
      document.body.style.width = 'unset'
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  useEffect(() => {
    // Animation for content change
    if (selectedPageId && contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
      )
    }
  }, [selectedPageId])

  const handlePageSelect = (pageId) => {
    setSelectedPageId(pageId)
    setSelectedCategoryId(null)
    setIsMenuOpen(false)
    setSearchQuery('')
    // Scroll to top when selecting new page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId)
    setSelectedPageId(null)
    setIsMenuOpen(false)
    setSearchQuery('')
    // Scroll to top when selecting category
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToHome = () => {
    setSelectedPageId(null)
    setSelectedCategoryId(null)
    setSearchQuery('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getCategoryIcon = (categoryId) => {
    const icons = {
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

  const selectedPage = selectedPageId ? findPageById(selectedPageId) : null
  const SelectedComponent = selectedPage?.component
  const stats = getStats()

  // Find which category the selected page belongs to
  const currentCategory = selectedPageId ? pageCategories.find(cat => 
    cat.pages.includes(selectedPageId)
  ) : null

  // Generate dynamic stats from real data
  const topCategories = stats.pagesByCategory
    .sort((a, b) => b.count - a.count)
    .slice(0, 4)
  
  const iconMap = {
    '❤️ Tim mạch & Huyết áp': { icon: <Heart className="h-6 w-6 text-red-500" />, color: 'bg-red-50', id: 'heart' },
    '🧠 Thần kinh & Não bộ': { icon: <Brain className="h-6 w-6 text-purple-500" />, color: 'bg-purple-50', id: 'nervous' },
    '🥗 Dinh dưỡng & Thực phẩm': { icon: <span className="text-2xl">🥗</span>, color: 'bg-green-50', id: 'nutrition' },
    '🌡️ Dị ứng & Viêm nhiễm': { icon: <span className="text-2xl">🌡️</span>, color: 'bg-yellow-50', id: 'allergies' },
    '🧘‍♂️ Sống khỏe & Phòng bệnh': { icon: <span className="text-2xl">🧘‍♂️</span>, color: 'bg-indigo-50', id: 'wellness' },
    '🍽️ Tiêu hóa & Dưỡng sinh': { icon: <Stethoscope className="h-6 w-6 text-blue-500" />, color: 'bg-blue-50', id: 'digestion' }
  }
  
  const homeStatsData = topCategories.map(stat => {
    const categoryData = iconMap[stat.category]
    return {
      title: stat.category.replace(/^[^\s]+\s/, ''), // Remove emoji
      value: `${stat.count} bài`,
      icon: categoryData?.icon || <span className="text-2xl">📋</span>,
      color: categoryData?.color || 'bg-gray-50',
      onClick: () => categoryData?.id && handleCategorySelect(categoryData.id)
    }
  })

  return (
    <div ref={appRef} className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex">
      {/* Menu Button - only show when menu is closed */}
      {!isMenuOpen && (
        <Button
          onClick={() => setIsMenuOpen(true)}
          className="fixed top-2 left-2 z-50 bg-white shadow-lg hover:shadow-xl transition-all duration-200"
          variant="outline"
          size="icon"
        >
          <Menu className="h-4 w-4" />
        </Button>
      )}

      {/* Current page info */}
      {selectedPage && (
        <div className="fixed top-2 right-2 z-50 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
          <div className="flex items-center gap-2 text-sm">
            {currentCategory && (
              <>
                <span>{getCategoryIcon(currentCategory.id)}</span>
                <span className="text-gray-600">{currentCategory.title.split(' ')[1]}</span>
                <span className="text-gray-400">•</span>
              </>
            )}
            <span className="font-medium text-gray-800 max-w-[200px] truncate">
              {selectedPage.title}
            </span>
          </div>
        </div>
      )}

      {/* Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" 
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div 
            ref={menuRef}
            className="relative w-80 bg-white shadow-xl h-screen overflow-y-auto"
          >
            <div className="p-6">
              {/* Close button in sidebar */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Book className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Sổ tay sức khỏe</h2>
                    <p className="text-xs text-gray-500">{stats.totalPages} bài viết</p>
                  </div>
                </div>
                <Button
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-gray-100 hover:bg-gray-200 transition-colors"
                  variant="ghost"
                  size="icon"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Tìm kiếm bài viết..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
                {searchQuery && (
                  <div className="mt-2 text-xs text-gray-500">
                    Tìm thấy {filteredPages.length} kết quả
                  </div>
                )}
              </div>

              {/* Search Results */}
              {searchQuery && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Kết quả tìm kiếm
                  </h3>
                  <div className="space-y-1 max-h-60 overflow-y-auto">
                    {filteredPages.length > 0 ? (
                      filteredPages.map((page) => (
                        <button
                          key={page.id}
                          onClick={() => handlePageSelect(page.id)}
                          className={`w-full text-left p-3 text-sm hover:bg-blue-50 transition-colors rounded ${
                            selectedPageId === page.id ? 'bg-blue-100 text-blue-800 font-medium' : 'text-gray-700'
                          }`}
                        >
                          <HighlightText 
                            text={page.title} 
                            searchQuery={searchQuery}
                          />
                        </button>
                      ))
                    ) : (
                      <div className="text-center py-4 text-gray-500 text-sm">
                        Không tìm thấy kết quả nào
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Categories */}
              {!searchQuery && (
                <div className="space-y-4">
                  {pageCategories.map((category) => (
                    <Card key={category.id} className="overflow-hidden border-l-4 border-l-blue-500">
                      <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
                        <div 
                          className="cursor-pointer hover:bg-blue-100 transition-colors p-2 -m-2 rounded"
                          onClick={() => handleCategorySelect(category.id)}
                        >
                          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                            <span className="text-lg">{getCategoryIcon(category.id)}</span>
                            <span className="flex-1">{category.title}</span>
                            <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full">
                              {category.pages.length}
                            </span>
                          </h3>
                          <p className="text-xs text-gray-600 mt-1 ml-7">Click để xem tất cả bài viết</p>
                        </div>
                        <button 
                          className="w-full text-left mt-2 p-2 text-xs text-gray-500 hover:text-gray-700 hover:bg-blue-50 rounded transition-colors"
                          onClick={() => setSelectedCategory(
                            selectedCategory === category.id ? null : category.id
                          )}
                        >
                          {selectedCategory === category.id ? '▲ Ẩn danh sách' : '▼ Hiện danh sách'}
                        </button>
                      </div>
                      
                      {selectedCategory === category.id && (
                        <CardContent className="p-0">
                          <div className="space-y-1">
                            {category.pages.map((pageId) => {
                              const page = findPageById(pageId)
                              if (!page) return null
                              
                              return (
                                <button
                                  key={pageId}
                                  onClick={() => handlePageSelect(pageId)}
                                  className={`w-full text-left p-3 text-sm hover:bg-blue-50 transition-colors ${
                                    selectedPageId === pageId ? 'bg-blue-100 text-blue-800 font-medium border-r-2 border-r-blue-500' : 'text-gray-700'
                                  }`}
                                >
                                  {page.title}
                                </button>
                              )
                            })}
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              )}

              <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <h4 className="font-medium text-green-800 mb-2 flex items-center gap-2">
                  💡 Lưu ý quan trọng
                </h4>
                <p className="text-sm text-green-700">
                  Thông tin này chỉ mang tính chất tham khảo. 
                  Hãy tham khảo ý kiến bác sĩ trước khi sử dụng thuốc.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {selectedPage ? (
          <div ref={contentRef} className="flex-1 lg:p-6 p-2 pt-12">
            {/* Back to Home Button */}
            <Button 
              onClick={handleBackToHome} 
              variant="outline" 
              className="mb-4 hover:bg-gray-50"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Quay lại trang chủ
            </Button>
            <SelectedComponent />
          </div>
        ) : selectedCategoryId ? (
          <div ref={contentRef} className="flex-1 lg:p-6 p-2 pt-10">
            <CategoryPage 
              categoryId={selectedCategoryId}
              onPageSelect={handlePageSelect}
              onBack={handleBackToHome}
            />
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center lg:p-6 p-2 lg:pt-6 pt-2">
            <Card className="max-w-4xl w-full">
              <CardContent className="lg:p-8 p-4 text-center">
                <div className="mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Book className="h-12 w-12 text-white" />
                  </div>
                  <h1 className="lg:text-4xl text-xl font-bold text-gray-800 mb-3">
                    Sổ tay sức khỏe
                  </h1>
                  <p className="text-gray-600 mb-4 lg:text-lg text-xs">
                    Ghi chép kinh nghiệm chữa bệnh, phòng bệnh và sống lành mạnh
                  </p>
                  <div className="flex justify-center gap-6 text-sm text-gray-600">
                    <span className="bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                      📄 {stats.totalPages} bài viết
                    </span>
                    <span className="bg-green-50 px-4 py-2 rounded-full border border-green-200">
                      📂 {stats.totalCategories} chủ đề
                    </span>
                  </div>
                </div>

                <StatsGrid stats={homeStatsData} />

                <Button 
                  onClick={() => setIsMenuOpen(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 mb-8 px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Menu className="h-5 w-5 mr-2" />
                  Khám phá nội dung
                </Button>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                      🏥 Chủ đề nổi bật
                    </h3>
                    <div className="space-y-2">
                      {stats.pagesByCategory
                        .sort((a, b) => b.count - a.count)
                        .slice(0, 4)
                        .map((category, index) => {
                          const categoryData = pageCategories.find(cat => cat.title === category.category)
                          return (
                            <button
                              key={index}
                              onClick={() => handleCategorySelect(categoryData?.id)}
                              className="w-full text-left text-sm text-blue-700 hover:text-blue-900 hover:bg-blue-100 p-2 rounded transition-colors"
                            >
                              • {category.category.replace(/^[^\s]+\s/, '')} ({category.count} bài)
                            </button>
                          )
                        })
                      }
                    </div>
                  </div>
                  
                  <QuoteBox />
                </div>

                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-800">
                    <strong>⚠️ Lưu ý:</strong> Đây là ghi chép kinh nghiệm cá nhân. 
                    Luôn tham khảo ý kiến bác sĩ trước khi áp dụng bất kỳ phương pháp điều trị nào.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  )
}

export default MainApp