export default function Menu() {
  return (
    <div className="space-y-6 md:space-y-8 mt-8 md:mt-12">
      {/* 菜單標題 */}
      <div className="text-center mb-8">
        <img 
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663336016889/iDGsiNaecbphSULy.png" 
          alt="mokuyou" 
          className="w-40 h-auto mx-auto mb-4"
        />
        <p className="text-sm text-muted-foreground">完整菜單</p>
      </div>

      {/* 台灣原茶 */}
      <div className="bg-card rounded-lg p-6 shadow-sm">
        <h3 className="text-2xl font-bold mb-2 text-primary">台灣原茶</h3>
        <p className="text-sm text-muted-foreground mb-4">M $40 | L $45</p>
        <div className="space-y-2">
          <div className="text-sm">清漾小葉 紅茶</div>
          <div className="text-sm">蘭香嫩芽 綠茶</div>
          <div className="text-sm">龍眼木漾 烏龍</div>
          <div className="text-sm">日和晨露 青茶</div>
          <div className="text-sm">維多利亞 伯爵</div>
          <div className="text-sm">原香夢枕 蕎麥</div>
          <div className="text-sm">秋香韻 紅烏龍</div>
        </div>
      </div>

      {/* 低卡義式霜淇淋 招牌口味 */}
      <div className="bg-card rounded-lg p-6 shadow-sm">
        <h3 className="text-2xl font-bold mb-4 text-primary">低卡義式霜淇淋 招牌口味</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span>5.1特濃豆乳霜淇淋</span>
            <span className="font-semibold text-accent">$65</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span>經典OREO豆乳霜淇淋</span>
            <span className="font-semibold text-accent">$75</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span>抹茶豆乳霜淇淋</span>
            <span className="font-semibold text-accent">$75</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span>焦糖豆乳霜淇淋</span>
            <span className="font-semibold text-accent">$75</span>
          </div>
        </div>
      </div>

      {/* 5.1特濃豆乳茶 */}
      <div className="bg-card rounded-lg p-6 shadow-sm">
        <h3 className="text-2xl font-bold mb-4 text-primary">5.1特濃豆乳茶</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span>5.1特濃豆乳紅茶</span>
            <span className="font-semibold text-accent">$60</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span>5.1特濃豆乳綠茶</span>
            <span className="font-semibold text-accent">$60</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span>5.1特濃豆乳烏龍</span>
            <span className="font-semibold text-accent">$60</span>
          </div>
        </div>
      </div>

      {/* 5.1特濃豆乳奶蓋茶 */}
      <div className="bg-card rounded-lg p-6 shadow-sm">
        <h3 className="text-2xl font-bold mb-4 text-primary">5.1特濃豆乳奶蓋茶</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span>5.1特濃豆乳奶蓋紅茶</span>
            <span className="font-semibold text-accent">$70</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span>5.1特濃豆乳奶蓋綠茶</span>
            <span className="font-semibold text-accent">$70</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span>5.1特濃豆乳奶蓋烏龍</span>
            <span className="font-semibold text-accent">$70</span>
          </div>
        </div>
      </div>

      {/* 天然果茶 */}
      <div className="bg-card rounded-lg p-6 shadow-sm">
        <h3 className="text-2xl font-bold mb-2 text-primary">天然果茶</h3>
        <p className="text-sm text-muted-foreground mb-4">M $50 | L $55</p>
        <div className="space-y-2">
          <div className="text-sm">檸檬紅茶</div>
          <div className="text-sm">柚子綠茶</div>
          <div className="text-sm">莓果烏龍</div>
          <div className="text-sm">蜜桃青茶</div>
        </div>
      </div>

      {/* 鮮奶拿鐵 */}
      <div className="bg-card rounded-lg p-6 shadow-sm">
        <h3 className="text-2xl font-bold mb-2 text-primary">鮮奶拿鐵</h3>
        <p className="text-sm text-muted-foreground mb-4">M $45 | L $50</p>
        <div className="space-y-2">
          <div className="text-sm">經典鮮奶茶</div>
          <div className="text-sm">焦糖鮮奶茶</div>
          <div className="text-sm">抹茶鮮奶</div>
        </div>
      </div>

      {/* 手搖飲/霜淇淋配料 */}
      <div className="bg-card rounded-lg p-6 shadow-sm">
        <h3 className="text-2xl font-bold mb-4 text-primary">手搖飲/霜淇淋配料</h3>
        <div className="space-y-2 text-sm">
          <div>珍珠 +$5</div>
          <div>椰果 +$5</div>
          <div>布丁 +$5</div>
          <div>寒天 +$5</div>
        </div>
      </div>

      {/* 霜淇淋輕配料 */}
      <div className="bg-card rounded-lg p-6 shadow-sm">
        <h3 className="text-2xl font-bold mb-4 text-primary">霜淇淋輕配料</h3>
        <div className="space-y-2 text-sm">
          <div>餅乾碎 +$3</div>
          <div>巧克力醬 +$3</div>
          <div>抹茶粉 +$3</div>
        </div>
      </div>

      {/* 霜淇淋贊沢配料 */}
      <div className="bg-card rounded-lg p-6 shadow-sm">
        <h3 className="text-2xl font-bold mb-4 text-primary">霜淇淋贊沢配料</h3>
        <div className="space-y-2 text-sm">
          <div>Oreo餅乾 +$8</div>
          <div>起司片 +$8</div>
          <div>焦糖堅果 +$8</div>
        </div>
      </div>
    </div>
  );
}
