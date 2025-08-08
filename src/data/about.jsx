import { Card, CardContent } from '@/components/ui/card'

const aboutData = (
  <div className="max-w-6xl mx-auto">
    {/* Single Card Content */}
    <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
      <CardContent className="lg:p-12 p-4 md:p-16">
        <div className="prose prose-lg max-w-none font-high-spirited leading-none" style={{letterSpacing: '2px'}}>
          <p className="text-6xl md:text-6xl lg:text-4xl text-gray-800  mb-8">
            <span className="text-6xl md:text-4xl lg:text-5xl text-emerald-600">Xin chào,</span>
          </p>
          
          <p className="text-4xl md:text-5xl lg:text-6xl text-gray-700  mb-8">
            Tôi là <span className="text-emerald-700">Lại Minh Kha</span>, một người cha, người chồng, và giờ là một người ông với những đứa cháu nhỏ yêu quý. Cuộc đời đã dạy tôi rằng sức khỏe là món quà vô giá nhất. Không có nó, mọi thứ khác đều trở nên mờ nhạt.
          </p>

          <p className="text-4xl md:text-5xl lg:text-6xl text-gray-700  mb-8">
            Nhiều năm qua, tôi ghi chép lại những kinh nghiệm về giữ gìn sức khỏe, chữa bệnh, và sống lành mạnh. Đó là những bài học từ chính trải nghiệm của tôi, với hy vọng giúp bản thân và gia đình sống tốt hơn.
          </p>

          <p className="text-4xl md:text-5xl lg:text-6xl text-gray-700  mb-8">
            Tôi chia sẻ những ghi chép này để lan tỏa điều giản dị: <span className="text-emerald-600">hãy chăm sóc cơ thể, yêu thương tâm hồn, và trân trọng cuộc sống</span>. Sống khỏe không chỉ là không bệnh, mà là sống với trái tim rộng mở và niềm vui mỗi ngày.
          </p>

          <p className="text-4xl md:text-5xl lg:text-6xl text-gray-700  mb-12">
            Chúc bạn và gia đình luôn khỏe mạnh, hạnh phúc, và tìm thấy bình an trong những điều nhỏ bé.
          </p>

          {/* Signature Section */}
          <div className="text-right  pt-8">
            <p className="text-4xl md:text-5xl lg:text-6xl italic text-emerald-700 font-medium mb-4">
              Trân trọng,
            </p>
            <p className="text-4xl md:text-5xl lg:text-5xl ">
              Lại Minh Kha
            </p>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Bottom Quote */}
    <div className="text-center mt-8">
      <div className="inline-flex items-center gap-4 bg-gradient-to-r from-emerald-50 to-blue-50 px-8 py-4 rounded-full border border-emerald-200 shadow-lg">
        <span className="text-3xl">🌱</span>
        <p className="text-emerald-700 font-medium text-4xl md:text-2xl font-high-spirited" style={{letterSpacing: '2px'}}>
          Sức khỏe là hạnh phúc
        </p>
        <span className="text-3xl">💚</span>
      </div>
    </div>
  </div>
)

const AboutContent = () => {
  return aboutData
}

export default AboutContent
