import { motion } from "framer-motion";
import { Star, TrendingUp, Gift, Copy, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { toast } from "sonner";
import { COPY_CONTENT } from "@/lib/copyContent";

import Menu from "@/components/Menu";
export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(COPY_CONTENT);
    setCopied(true);
    toast.success("已複製到剪貼板！貼給ChatGPT幫你分析有多划算 🎉");
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Hero Section */}
      <motion.section 
        className="container py-8 md:py-16 relative"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        style={{
          backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/FHfcMNwu2l7UigS7fkymRa/sandbox/5VoyLOUWd8POSKlHUxkoMR-img-1_1770286133000_na1fn_bW9rdXlvdS1oZXJvLWJn.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRkhmY01Od3UybDdVaWdTN2ZreW1SYS9zYW5kYm94LzVWb3lMT1VXZDhQT1NLbEhVeGtvTVItaW1nLTFfMTc3MDI4NjEzMzAwMF9uYTFmbl9iVzlyZFhsdmRTMW9aWEp2TFdKbi5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=knsb132uqLeXRaTSwpcl3f5~6fMPt~GMf14jv7~aVhqlbzH0KwZ8Ad8FPOQyIRMBuMG5TX5xjccrrmUz0prdm25OBjbqai4pQl8DYmjywkAxmLNT-FoQwxKUHON34rmEs1kx-kNZJ2~GhbRzHkKEmS~EZokhQxmRlMaePWNIYtK5uZEcMooHLQPRisLrNFYm7SY~MQIHL5qoDJ4aM2ilQJyrxUbGSDlZqxIwvTKpr8X-lSGuWeHfj1NlzAGaLLIOv0ZlrUnvU-jx3ryKcFlW1efuKoyQ8WEHhRbAs01H4LpQTV3TUxfXk66jZdZ3SCRuocYKO~yaKRBnLVqRtbqq-Q__)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
          {/* Logo */}
          <motion.img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663336016889/LINWLgnmIFkoxJmy.jpg"
            alt="木曜漾 Logo"
            className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          <h1 className="text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            木曜漾 mokuyou
          </h1>
          
          {/* Main Slogan */}
          <motion.div 
            className="mb-6 p-4 md:p-6 bg-accent/10 rounded-xl border-2 border-accent"
            variants={fadeInUp}
          >
            <p className="text-2xl md:text-3xl font-bold text-accent mb-2">
              週四木曜漾
            </p>
            <p className="text-xl md:text-2xl font-bold text-primary">
              點數雙倍 · 拿五折優惠
            </p>
          </motion.div>

          <p className="text-base md:text-lg text-muted-foreground mb-6">
            台灣茶 · 光泉5.1濃豆漿 · 低卡義式霜淇淋
                <p className="text-sm md:text-base text-muted-foreground mt-4">一杯木曜漾 療癒您每個木曜日</p>
                  <p className="text-sm md:text-base text-muted-foreground">全台唯一霜淇淋保冰30分鐘外送</p>
          </p>

          {/* Quick Stats */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
            <div className="flex items-center gap-1 bg-card px-3 py-2 rounded-full shadow-sm text-sm md:text-base">
              <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-medium">平均4.9星</span>
            </div>
            <div className="flex items-center gap-1 bg-card px-3 py-2 rounded-full shadow-sm text-sm md:text-base">
              <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              <span className="font-medium">最高50.1%折扣</span>
            </div>
            <div className="flex items-center gap-1 bg-card px-3 py-2 rounded-full shadow-sm text-sm md:text-base">
              <Gift className="w-4 h-4 md:w-5 md:h-5 text-destructive" />
              <span className="font-medium">免費領價值超過100元入會禮</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Platform Ratings */}
        <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-2 md:gap-4 max-w-2xl mx-auto mt-8">
          <a href="https://www.google.com/search?q=%E6%9C%A8%E6%9B%9C%E6%BC%BE" target="_blank" rel="noopener noreferrer">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-4">
                <div className="text-center">
                  <p className="text-xs md:text-sm font-medium mb-2">Google Map</p>
                  <div className="flex justify-center mb-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className={`w-3 h-3 md:w-4 md:h-4 ${i <= 4.8 ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <p className="text-sm md:text-base font-bold">4.8</p>
                  <p className="text-xs text-muted-foreground">68則評論</p>
                </div>
              </CardContent>
            </Card>
          </a>

          <a href="https://www.foodpanda.com.tw/restaurant/huv6/mu-yao-yang-shou-yao-yin-zhuan-mai-feng-jia-chuang-shi-dian" target="_blank" rel="noopener noreferrer">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-4">
                <div className="text-center">
                  <p className="text-xs md:text-sm font-medium mb-2">foodpanda</p>
                  <div className="flex justify-center mb-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm md:text-base font-bold">5.0</p>
                  <p className="text-xs text-muted-foreground">49則評論</p>
                </div>
              </CardContent>
            </Card>
          </a>

          <a href="https://www.ubereats.com/tw/store/%E6%9C%A8%E6%9B%9C%E6%BC%BEmokuyou-%E9%80%A2%E7%94%B2%E5%89%B5%E5%A7%8B%E5%BA%97-%E6%89%8B%E6%90%96%E9%A3%B2-l-%E7%BE%A9%E5%BC%8F%E9%9C%9C%E6%B7%87%E6%B7%8B-%E5%B0%88%E8%B3%A3/Aqb0RGTmUt2ywAq-R0ldew" target="_blank" rel="noopener noreferrer">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-4">
                <div className="text-center">
                  <p className="text-xs md:text-sm font-medium mb-2">Uber Eats</p>
                  <div className="flex justify-center mb-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className={`w-3 h-3 md:w-4 md:h-4 ${i <= 4.9 ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <p className="text-sm md:text-base font-bold">4.9</p>
                  <p className="text-xs text-muted-foreground">50筆評分</p>
                </div>
              </CardContent>
            </Card>
          </a>
        </motion.div>
      </motion.section>

      {/* Main Content Tabs */}
      <section className="container py-8 md:py-12">
        <Tabs defaultValue="brand" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-6 md:mb-8">
            <TabsTrigger value="brand" className="text-xs md:text-sm">品牌特色</TabsTrigger>
            <TabsTrigger value="membership" className="text-xs md:text-sm">會員資訊</TabsTrigger>
            <TabsTrigger value="value" className="text-xs md:text-sm">優惠好康</TabsTrigger>
            <TabsTrigger value="reviews" className="text-xs md:text-sm">真實評價</TabsTrigger>
            <TabsTrigger value="products" className="text-xs md:text-sm">MENU</TabsTrigger>
          </TabsList>

          {/* Brand Features Tab */}
          <TabsContent value="brand" className="space-y-4 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">我們的特色</CardTitle>
                  <CardDescription>
                    用心製作，每一杯都是品質保證
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 md:p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                      <Badge variant="outline" className="mt-0.5 flex-shrink-0">1</Badge>
                      <div>
                        <p className="font-semibold text-sm md:text-base">台灣茶葉 品質穩定</p>
                        <p className="text-xs md:text-sm text-muted-foreground">精選七支台灣茶葉，使用智慧泡茶機確保每一杯都完美</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 md:p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                      <Badge variant="outline" className="mt-0.5 flex-shrink-0">2</Badge>
                      <div>
                        <p className="font-semibold text-sm md:text-base">光泉5.1濃豆漿</p>
                        <p className="text-xs md:text-sm text-muted-foreground">適合乳糖不耐症的你，豆乳蕎麥是我們的人氣NO.1</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 md:p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                      <Badge variant="outline" className="mt-0.5 flex-shrink-0">3</Badge>
                      <div>
                        <p className="font-semibold text-sm md:text-base">全台唯一保冰30分鐘外送</p>
                        <p className="text-xs md:text-sm text-muted-foreground">低卡gelato配方，辦公室下午茶也能吃到完整的霜淇淋</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-secondary/30 p-4 md:p-6 rounded-lg">
                    <h3 className="font-semibold text-sm md:text-base mb-3">特殊配料 翻轉您對霜淇淋的既定印象</h3>
                  <p className="text-sm text-muted-foreground mb-4">原來辦公室下午茶也可以吃到完整的霜淇淋</p>
                    <div className="space-y-2">
                      {[
                        'OREO豆乳霜淇淋',
                        '翻轉跳跳糖優格霜淇淋',
                        '醬油仙貝豆乳霜淇淋',
                        '日本抹茶優格霜淇淋',
                        '初榨橄欖油/鹽之花優格霜淇淋'
                      ].map((flavor, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs md:text-sm">
                          <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                          <span>{flavor}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                    <div className="flex-1 bg-secondary/30 p-4 md:p-6 rounded-lg">
                      <h3 className="font-semibold text-sm md:text-base mb-3">店家資訊</h3>
                      <div className="space-y-2 text-xs md:text-sm">
                        <div>
                          <p className="text-muted-foreground">📍 地址</p>
                          <p className="font-medium">台中市西屯區文華路1-8號（逢甲商圈）</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">📞 電話</p>
                          <p className="font-medium">04-2452-3999</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663336016889/KPmQqAKmdHVIFRSc.png" alt="光泉5.1濃豆漿" className="w-full max-w-xs rounded-lg shadow-lg" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Membership Tab */}
          <TabsContent value="membership" className="space-y-4 md:space-y-6" style={{
            backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/FHfcMNwu2l7UigS7fkymRa/sandbox/5VoyLOUWd8POSKlHUxkoMR-img-2_1770286127000_na1fn_bW9rdXlvdS1tZW1iZXJzaGlwLXZpc3VhbA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRkhmY01Od3UybDdVaWdTN2ZreW1SYS9zYW5kYm94LzVWb3lMT1VXZDhQT1NLbEhVeGtvTVItaW1nLTJfMTc3MDI4NjEyNzAwMF9uYTFmbl9iVzlyZFhsdmRTMXRaVzFpWlhKemFHbHdMWFpwYzNWaGJBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GIUsnOtSQ~roUI1BYs1jN3svMMPkSK-LNLOqBAvSzypzaVoTeOq3yy6V4ctG~4-bRFM4M9M76NHHRBhh1UiUq7G8mnLNqjtvNr3BFe1uaT6uzXmRThKnsUR7fiTz~JCCiF-MYkAKrZqkX4q8Ogy3UoinRYaL4xeG-VtC92a4HCxuoV~rSxxue~i4SFkOxVzJ-k04OVq~iMld7rTkaIqqJExS~myL~lvoyqgJxqJOBQnyjYSb3q86jR1rjGjqFc2tKHnbr7fh75Wv4HCdhb7P8AzZRQnEoh8rcXOuQ02KAQ7lO7QapRCYnFKuwSbxHIjrb9AbNy0-LCsbK7Pw7r7C6w__)',
            backgroundSize: '400px',
            backgroundPosition: 'top right',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 md:space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">會員等級</CardTitle>
                  <CardDescription>LINE免費加入，享受專屬優惠</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Card className="border-2 border-primary/20">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base md:text-lg">🌱 初心萌芽</CardTitle>
                        <CardDescription className="text-xs md:text-sm">入會即享</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm">
                        <div>
                          <p className="text-muted-foreground text-xs">點數獲得比例</p>
                          <p className="text-2xl font-bold text-primary">40元/點</p>
                        </div>
                        <div className="bg-secondary/50 p-3 rounded text-xs md:text-sm">
                          <p className="font-semibold mb-2">入會禮（超過100元）</p>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• 10元折價券 × 1</li>
                            <li>• 消費額外贈3點 × 1</li>
                            <li>• • 滿99折20元 × 1</li>
                            <li>• 滿199折50 × 1</li>
                            <li>• 品牌保溫袋 × 1</li>
                            <li>• 霜淇淋第二杯半價 × 1</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-accent/20">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base md:text-lg">🌳 漾漾小樹</CardTitle>
                        <CardDescription className="text-xs md:text-sm">365天內消費滿3000元升級</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm">
                        <div>
                          <p className="text-muted-foreground text-xs">點數獲得比例</p>
                          <p className="text-2xl font-bold text-accent">30元/點</p>
                          <Badge variant="secondary" className="mt-2 text-xs">提升33%效率</Badge>
                        </div>
                        <div className="bg-secondary/50 p-3 rounded text-xs md:text-sm">
                          <p className="font-semibold mb-2">升級禮</p>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• 滿99折20 × 2</li>
                            <li>• 滿199折50 × 2</li>
                            <li>• 豆乳霜淇淋券 × 1</li>
                          </ul>
                        </div>
                        <div className="bg-secondary/50 p-3 rounded text-xs md:text-sm mt-3">
                          <p className="font-semibold mb-2">生日禮</p>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• 滿99折20 × 1</li>
                            <li>• 滿199折50 × 1</li>
                            <li>• 豆乳霜淇淋券 × 1</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">會員資訊</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-xs md:text-sm">
                  <div className="space-y-2">
                    <p className="font-semibold">✓ 使用ocard會員系統</p>
                    <p className="font-semibold">✓ 點數120天有效（滾動式）</p>
                    <p className="font-semibold">✓ 兌換券獲得/領取後30天有效，可轉贈其他會員</p>
                    <p className="font-semibold">✓ 第三方外送平台(如foodpanda/Uber Eats)無法累積點數</p>
                    <p className="font-semibold">✓ 消費需告知會員資訊方可累積點數</p>
                    <p className="font-semibold">✓ 店家直接外送也可以累積點數</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">折扣券方案</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "5元折價券", points: 4 },
                      { name: "10元折價券", points: 8 },
                      { name: "滿99折20元", points: 11, rate: 20 },
                      { name: "滿199折扣50元", points: 20, rate: 25 },
                      { name: "滿299折扣100元", points: 34, rate: 33.3 },
                      { name: "滿499折扣250元", points: 68, rate: 50.1 }
                    ].map((coupon, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 border rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm md:text-base">{coupon.name}</p>
                          <p className="text-xs md:text-sm text-primary font-semibold">{coupon.points}點</p>
                        </div>
                        {coupon.rate && (
                          <div className="text-right flex-shrink-0">
                            <Badge variant={index === 5 ? "default" : "secondary"} className="text-sm md:text-base">
                              {coupon.rate}%
                            </Badge>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Value Analysis Tab */}
          <TabsContent value="value" className="space-y-4 md:space-y-6" style={{
            backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/FHfcMNwu2l7UigS7fkymRa/sandbox/5VoyLOUWd8POSKlHUxkoMR-img-3_1770286138000_na1fn_bW9rdXlvdS12YWx1ZS1jaGFydC1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRkhmY01Od3UybDdVaWdTN2ZreW1SYS9zYW5kYm94LzVWb3lMT1VXZDhQT1NLbEhVeGtvTVItaW1nLTNfMTc3MDI4NjEzODAwMF9uYTFmbl9iVzlyZFhsdmRTMTJZV3gxWlMxamFHRnlkQzFpWncucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=cEfETz-Yx75HeYym4b7wGM4I5k5xsWaIxE3sCyrkjxALD3nItaw9uAAn8mSD9A75ah6PbKESCEyk28doxaYFvcr-TCg9cufvWCrfDTzr6aEii7ihR9~WZzzJD-~Hdhl1eiImspZxvkz6BJVj6t2KrUryPwKqfLRZv6Azujow~a1tXgct1CwuqWKsNdGZF2sJHIKjdL~SplZT29RRkVT4JU5kHAQDtdZTccCcR9tRwdi5O8KqCyMh53zSW7HmwTVT6qul-gZjQXB7W3S~vvHZaqkJsH-CxpDgpiQGH2p90K-Z7Y4K4cqDWt6itILBql~Pqp3hPeGMHG2axIJkZSoDzQ__)',
            backgroundSize: '500px',
            backgroundPosition: 'bottom left',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 md:space-y-6"
            >
              <Card className="border-2 border-accent">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">優惠有多划算？</CardTitle>
                  <CardDescription className="text-xs md:text-sm">★★★★★ 極度划算</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-sm md:text-base mb-3">最大化優惠策略</h3>
                    <div className="space-y-3 text-xs md:text-sm">
                      <div className="flex items-start gap-2">
                        <Badge className="mt-0.5 flex-shrink-0">推薦</Badge>
                        <div>
                          <p className="font-semibold">週四會員日</p>
                          <p className="text-muted-foreground">點數雙倍，回饋率高達21.7%</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Badge variant="outline" className="mt-0.5 flex-shrink-0">策略</Badge>
                        <div>
                          <p className="font-semibold">超殺滿額折扣</p>
                          <p className="text-muted-foreground">消費499元享50.1%折扣，相當於買一送一</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Badge variant="outline" className="mt-0.5 flex-shrink-0">策略</Badge>
                        <div>
                          <p className="font-semibold">最划算品項</p>
                          <p className="text-muted-foreground">5.1濃豆乳霜淇淋回饋率最高12%</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-sm md:text-base mb-3">商品點數兌換表</h4>
                    <div className="space-y-2 text-xs md:text-sm">
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-semibold">商品</span>
                        <span className="font-semibold">點數</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>台灣原茶（45元）</span>
                        <span className="font-semibold">15點</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>豆乳霜淇淋（65元）</span>
                        <span className="font-semibold">18點</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>濃豆乳茶（60元）</span>
                        <span className="font-semibold">20點</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>天然果茶（65元）</span>
                        <span className="font-semibold">22點</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>鮮奶拿鐵（70元）</span>
                        <span className="font-semibold">23點</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>濃豆乳奶蓋茶（75元）</span>
                        <span className="font-semibold">25點</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>優格霜淇淋（75元）</span>
                        <span className="font-semibold">25點</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">※ 可同筆複數兌換，不與折扣券疊加</p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-sm md:text-base mb-3">消費情境試算</h4>
                    <div className="space-y-3 text-xs md:text-sm">
                      <div>
                        <p className="font-semibold mb-2">情境A：週四會員日消費80元</p>
                        <div className="space-y-1 text-muted-foreground">
                          <div className="flex justify-between">
                            <span>初心萌芽會員可得</span>
                            <span>4點</span>
                          </div>
                          <div className="flex justify-between">
                            <span>可兌換</span>
                            <span>5元折價券</span>
                          </div>
                          <div className="flex justify-between pt-1 border-t">
                            <span className="font-semibold">回饋率</span>
                            <span className="font-bold text-primary">10.8%</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">⭐ 情境B：週四消費300元</p>
                        <div className="space-y-1 text-muted-foreground">
                          <div className="flex justify-between">
                            <span>漾漾小樹會員可得</span>
                            <span>20點</span>
                          </div>
                          <div className="flex justify-between">
                            <span>可兌換</span>
                            <span>1個5.1濃豆乳霜淇淋</span>
                          </div>
                          <div className="flex justify-between pt-1 border-t">
                            <span className="font-semibold">回饋率</span>
                            <span className="font-bold text-accent text-base">21.7%</span>
                          </div>
                          <div className="flex justify-between pt-2 border-t text-accent font-semibold">
                            <span>💡 每週四木曜漾</span>
                            <span>滿499折250券也可輕鬆達成</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-sm md:text-base mb-3">商品點數兌換表</h4>
                    <div className="space-y-2 text-xs md:text-sm">
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-semibold">商品</span>
                        <span className="font-semibold">點數</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>台灣原茶（45元）</span>
                        <span className="font-semibold">15點</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>豆乳霜淇淋（65元）</span>
                        <span className="font-semibold">18點</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>濃豆乳茶（60元）</span>
                        <span className="font-semibold">20點</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>天然果茶（65元）</span>
                        <span className="font-semibold">22點</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>鮮奶拿鐵（70元）</span>
                        <span className="font-semibold">23點</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>濃豆乳奶蓋茶（75元）</span>
                        <span className="font-semibold">25點</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>優格霜淇淋（75元）</span>
                        <span className="font-semibold">25點</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">※ 可同筆複數兌換，不與折扣券疊加</p>
                  </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">適合你嗎？</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-xs md:text-sm">
                    <div className="flex items-start gap-2 p-3 bg-secondary/50 rounded">
                      <span className="text-lg">⭐</span>
                      <div>
                        <p className="font-semibold">逢甲商圈學生/上班族</p>
                        <p className="text-muted-foreground">地點方便，經常消費快速累積</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-3 bg-secondary/50 rounded">
                      <span className="text-lg">🥛</span>
                      <div>
                        <p className="font-semibold">乳糖不耐症患者</p>
                        <p className="text-muted-foreground">豆乳系列豐富，完全友善</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="space-y-4 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 md:space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">顧客怎麼說</CardTitle>
                  <CardDescription className="text-xs md:text-sm">多平台真實評價</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <a href="https://www.ubereats.com/tw/store/%E6%9C%A8%E6%9B%9C%E6%BC%BEmokuyou-%E9%80%A2%E7%94%B2%E5%89%B5%E5%A7%8B%E5%BA%97-%E6%89%8B%E6%90%96%E9%A3%B2-l-%E7%BE%A9%E5%BC%8F%E9%9C%9C%E6%B7%87%E6%B7%8B-%E5%B0%88%E8%B3%A3/Aqb0RGTmUt2ywAq-R0ldew" target="_blank" rel="noopener noreferrer">
                      <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow cursor-pointer">
                        <CardContent className="pt-4">
                          <div className="flex gap-1 mb-2">
                            {[1,2,3,4,5].map((i) => (
                              <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-yellow-500" />
                            ))}
                          </div>
                          <p className="text-xs md:text-sm mb-2">「豆乳系列滿自然好喝，拿鐵也順口。霜淇淋外面裝了一袋冰塊保冰超用心，可以直接吃不用先放回冰箱。」</p>
                          <p className="text-xs text-muted-foreground">— 🚗 Uber Eats 顧客</p>
                        </CardContent>
                      </Card>
                    </a>

                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="pt-4">
                        <div className="flex gap-1 mb-2">
                          {[1,2,3,4,5].map((i) => (
                            <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                        <p className="text-xs md:text-sm mb-2">「超級美味！很難找到用『光泉5.1濃豆漿』製作的飲料。我強烈推薦豆乳奶蓋系列。」</p>
                        <p className="text-xs text-muted-foreground">— Google Map 顧客</p>
                        <a href="https://www.google.com/search?q=%E6%9C%A8%E6%9B%9C%E6%BC%BE" target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline mt-2 inline-block">查看完整評價 →</a>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <Card className="border-t-4 border-t-accent">
                      <CardContent className="pt-4">
                        <p className="text-sm font-semibold mb-2">🗺️ Google Map</p>
                        <p className="text-xs text-muted-foreground mb-3">4.8 / 5.0 星</p>
                        <a href="https://www.google.com/search?q=%E6%9C%A8%E6%9B%9C%E6%BC%BE" target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">查看評價 →</a>
                      </CardContent>
                    </Card>
                    <Card className="border-t-4 border-t-primary">
                      <CardContent className="pt-4">
                        <p className="text-sm font-semibold mb-2">🍕 foodpanda</p>
                        <p className="text-xs text-muted-foreground mb-3">5.0 / 5.0 星</p>
                        <a href="https://www.foodpanda.com.tw" target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">查看評價 →</a>
                      </CardContent>
                    </Card>
                    <Card className="border-t-4 border-t-secondary">
                      <CardContent className="pt-4">
                        <p className="text-sm font-semibold mb-2">🚗 Uber Eats</p>
                        <p className="text-xs text-muted-foreground mb-3">4.9 / 5.0 星</p>
                        <a href="https://www.ubereats.com" target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">查看評價 →</a>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-4 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">我們的產品</h2>
                <p className="text-muted-foreground mb-6">絕贊推薦!!9款特色產品，每一款都是用心製作</p>
              </div>

              {/* Gelato Products */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-accent">🍦 低卡義式霜淇淋</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      name: "5.1濃豆乳霜淇淋",
                      desc: "翻轉還原豆漿油條的經典組合",
                      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663336016889/PeTGMqyTMnTBwltV.jpg",
                      price: 65,
                      points: 18
                    },
                    {
                      name: "醫油仙貝豆乳霜淇淋",
                      desc: "酸脆口感 x 豆乳 x 微鹹醫油的三重奏",
                      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663336016889/KKVabfpYBCKichCa.jpg",
                      price: 80,
                      points: null
                    },
                    {
                      name: "經典OREO豆乳霜淇淋",
                      desc: "經典OREO風味，濃郁豆乳搭配",
                      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663336016889/mAUhFzCJpHfuSfVI.jpg",
                      price: 75,
                      points: null
                    },
                    {
                      name: "新鮮藍莓優格霜淇淋",
                      desc: "新鮮藍莓搭配優格，微酸清爽",
                      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663336016889/sDomBCGUBKfFXUsF.jpg",
                      price: 90,
                      points: null
                    },
                    {
                      name: "日本抹茶優格霜淇淋",
                      desc: "進口日本靜岡抹茶，微苦茶香清爽",
                      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663336016889/sqibWMqnHXigTkLZ.jpg",
                      price: 85,
                      points: null
                    },
                    {
                      name: "鹽之花搭初榨橄欖油優格霜淇淋",
                      desc: "fine dining的定番搭配",
                      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663336016889/dscuuGrWrSGdScnr.JPG",
                      price: 90,
                      points: null
                    }
                  ].map((product, idx) => (
                    <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-square overflow-hidden bg-secondary/20 flex items-center justify-center">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="pt-4">
                        <h4 className="font-bold text-sm md:text-base mb-2 text-center">{product.name}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground mb-3 text-center">{product.desc}</p>
                        {product.price && (
                          <div className="flex justify-center items-center gap-4 text-xs md:text-sm">
                            <span className="font-semibold text-accent">${product.price}</span>
                            {product.points && <span className="text-primary font-semibold">{product.points}點</span>}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Drink Products */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary">🥤 特色手搖飲</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      name: "豆乳蕎麥",
                      desc: "獨家豆乳系人氣NO.1 無咖啡因 天然蕎麥香",
                      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663336016889/PhLStLDkJMIrTCko.jpg",
                      price: 60,
                      points: 20
                    },
                    {
                      name: "柳丁綠茶",
                      desc: "木曜漾果系人氣第一名!! 天然a尚好",
                      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663336016889/BCeedPVaVbdyvDuT.jpg",
                      price: 65,
                      points: 22
                    },
                    {
                      name: "5.1濃豆乳奶蓋烏龍",
                      desc: "獨家配方,使用5.1光泉濃豆漿,清爽口感濃郁風味",
                      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663336016889/LcEKRWVnXaHJADTe.jpg",
                      price: 75,
                      points: 25
                    }
                  ].map((product, idx) => (
                    <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-square overflow-hidden bg-secondary/20 flex items-center justify-center">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="pt-4">
                        <h4 className="font-bold text-sm md:text-base mb-2 text-center">{product.name}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground mb-3 text-center">{product.desc}</p>
                        {product.price && (
                          <div className="flex justify-center items-center gap-4 text-xs md:text-sm">
                            <span className="font-semibold text-accent">${product.price}</span>
                            {product.points && <span className="text-primary font-semibold">{product.points}點</span>}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}\n                </div>\n              </div>\n\n              {/* 菜單部分 */}\n              <div>\n                <Menu />\n              </div>         </motion.div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="container py-8 md:py-12 mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">適合你嗎？</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-xs md:text-sm">
                <div className="p-3 bg-gradient-to-r from-amber-50 to-green-50 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-sm mb-2">🍦 霜淇淋愛好者</h4>
                  <p className="text-muted-foreground">獨特口味 + 30分保冰外送 + 高CP值</p>
                </div>
                <div className="flex items-start gap-2 p-3 bg-secondary/50 rounded">
                  <span className="text-lg">⭐</span>
                  <div>
                    <p className="font-semibold">逢甲商圈學生/上班族</p>
                    <p className="text-muted-foreground">地點方便，經常消費快速累積</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 bg-secondary/50 rounded">
                  <span className="text-lg">🥛</span>
                  <div>
                    <p className="font-semibold">乳糖不耐症患者</p>
                    <p className="text-muted-foreground">豆乳系列豐富，完全友善</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/20">
            <CardContent className="p-6 md:p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">立即加入會員</h2>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                領取免費領價值超過100元入會禮，完全免費！
              </p>
              <div className="flex flex-col gap-3">
                <Button size="lg" className="gap-2 w-full md:w-auto md:mx-auto" asChild>
                  <a href="https://line.me/R/ti/p/@185axamr?ts=01221926&oat_content=url" target="_blank" rel="noopener noreferrer">
                    <Gift className="w-4 h-4 md:w-5 md:h-5" />
                    加入 LINE 官方帳號
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary/50">
            <CardContent className="p-6 md:p-8 text-center">
              <h3 className="text-lg md:text-xl font-bold mb-3">一鍵複製完整資訊</h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-4">
                貼給ChatGPT幫你分析有多划算
              </p>
              <Button 
                size="lg" 
                variant="outline"
                className="gap-2 w-full md:w-auto"
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 md:w-5 md:h-5" />
                    已複製！
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 md:w-5 md:h-5" />
                    複製完整資訊
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="container py-6 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6">
            <div>
              <h3 className="font-bold text-base md:text-lg mb-2">木曜漾 mokuyou</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                台灣茶手搖飲/義式霜淇淋專賣<br />
                台中市西屯區文華路1-8號<br />
                電話：04-2452-3999
              </p>
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg mb-2">快速連結</h3>
              <div className="space-y-1 text-xs md:text-sm">
                <a href="https://line.me/R/ti/p/@185axamr?ts=01221926&oat_content=url" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline block">LINE官方帳號</a>
                <a href="https://www.instagram.com/mokuyou_tw/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline block">Instagram</a>
                <a href="https://www.google.com/search?q=%E6%9C%A8%E6%9B%9C%E6%BC%BE" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline block">Google地圖</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg mb-2">外送平台</h3>
              <div className="space-y-1 text-xs md:text-sm">
                <a href="https://www.foodpanda.com.tw/restaurant/huv6/mu-yao-yang-shou-yao-yin-zhuan-mai-feng-jia-chuang-shi-dian" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline block">🍕 foodpanda - 搜尋「木曜漾」</a>
                <a href="https://www.ubereats.com/tw/store/%E6%9C%A8%E6%9B%9C%E6%BC%BEmokuyou-%E9%80%A2%E7%94%B2%E5%89%B5%E5%A7%8B%E5%BA%97-%E6%89%8B%E6%90%96%E9%A3%B2-l-%E7%BE%A9%E5%BC%8F%E9%9C%9C%E6%B7%87%E6%B7%8B-%E5%B0%88%E8%B3%A3/Aqb0RGTmUt2ywAq-R0ldew" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline block">🚗 Uber Eats - 搜尋「木曜漾mokuyou」</a>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t text-center text-xs md:text-sm text-muted-foreground">
            <p>© 2026 木曜漾品牌 · 所有資訊來自官方認證平台，公開透明且安全</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
