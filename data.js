// data.js
const travelData = [
  {
    month: 1, monthLabel: "01", romanNumeral: "I", time: "1月の旅",
    titleJp: "ハザン — 桃の花咲く春の風物詩", titleVi: "Hà Giang",
    descJp: "年始はハザンの各集落で桃やスモモの花が咲き誇る最高の時期です。ベトナム北東部高地の澄んだ涼しい空気とともに絶景を楽しめます。",
    captionVi: "Sắc hoa xuân rực rỡ nơi cao nguyên đá",
    coords: "23.3°N  105.0°E", weather: "8–15°C  ·  霧深い朝", elevation: "1,200m",
    img: "https://cdnsgtt.thesaigontimes.vn/wp-content/uploads/2024/08/ma-pi-leng-1.jpg"
  },
  {
    month: 2, monthLabel: "02", romanNumeral: "II", time: "2月の旅",
    titleJp: "ニンビン — 新春を祝うお祭りシーズン", titleVi: "Ninh Bình",
    descJp: "2月は新春の旅に最適です。世界遺産のチャンアンやバイディン寺では、ベトナムの伝統的な春祭りの活気ある雰囲いています。",
    captionVi: "Hòa mình vào thiên nhiên Tràng An xanh mướt",
    coords: "20.2°N  105.9°E", weather: "16–22°C  ·  穏やかな春風", elevation: "80m",
    img: "https://media.base44.com/images/public/6a13e517c2cff5e3b0e223bd/fc4715ef0_generated_9233aa59.png"
  },
  {
    month: 3, monthLabel: "03", romanNumeral: "III", time: "3月の旅",
    titleJp: "テイグエン — 世界珈琲博物館", titleVi: "Tây Nguyên",
    descJp: "ブアマチュオットにある、エデ族の伝統的な高床式住居を模した美しい建築が話題の博物館。テイグエン地方の文化を感じられる人気スポットです。",
    captionVi: "Mùa hoa cà phê phủ trắng núi đồi Tây Nguyên",
    coords: "12.7°N  108.0°E", weather: "22–30°C  ·  乾季の青空", elevation: "500m",
    img: "https://media.base44.com/images/public/6a13e517c2cff5e3b0e223bd/c64b21042_generated_ae9f927e.png"
  },
  {
    month: 4, monthLabel: "04", romanNumeral: "IV", time: "4月の旅",
    titleJp: "古都フエ — 歴史が息づく世界遺産の街", titleVi: "Cố đô Huế",
    descJp: "4月は気候が穏やかで、古都フエの王宮散策に最適です。フォン川に架かるチャンティエン橋の景色や、繊細な宮廷料理を堪能できます。",
    captionVi: "Nét trầm mặc, cổ kính của Ngọ Môn Huế",
    coords: "16.5°N  107.6°E", weather: "24–30°C  ·  心地よい微風", elevation: "5m",
    img: "https://media.base44.com/images/public/6a13e517c2cff5e3b0e223bd/89b834be0_generated_bbf6e8f1.png"
  },
  {
    month: 5, monthLabel: "05", romanNumeral: "V", time: "5月の旅",
    titleJp: "ハロン湾 — 初夏の輝くエメラルドグリーンの海", titleVi: "Vịnh Hạ Long",
    descJp: "5月は本格的な夏の始まりで、海が青く穏やかになります。何千もの奇岩の間を豪華クルーズ船で巡る特別な体験がおすすめです。",
    captionVi: "Kỳ quan thiên nhiên thế giới nhìn từ trên cao",
    coords: "20.9°N  107.1°E", weather: "26–32°C  ·  海風が心地よい", elevation: "0m",
    img: "https://media.base44.com/images/public/6a13e517c2cff5e3b0e223bd/065661f95_generated_64bf0a07.png"
  },
  {
    month: 6, monthLabel: "06", romanNumeral: "VI", time: "6月の旅",
    titleJp: "ダナン・バナヒルズ — 雲の中に浮かぶ神の手", titleVi: "Bà Nà Hills",
    descJp: "6月のイチオシ！標高1,400mにある中世ヨーロッパ風の避暑地。巨大な手が支える不思議な「ゴールデンブリッジ」は必見です。",
    captionVi: "Làng Pháp cổ kính & Cầu Vàng — バナヒルズ",
    coords: "15.9°N  107.9°E", weather: "24–28°C  ·  霧と涼風", elevation: "1,400m",
    img: "https://media.base44.com/images/public/6a13e517c2cff5e3b0e223bd/a3a43b50c_generated_a95f347c.png"
  },
  {
    month: 7, monthLabel: "07", romanNumeral: "VII", time: "7月の旅",
    titleJp: "ニャチャン — 太陽が眩しい極上のビーチリゾート", titleVi: "Nha Trang",
    descJp: "7月は太陽が眩しい絶好のビーチシーズン。サンゴ礁を見るダイビングや、離島でのアクティビティ、テーマパークが楽しめます。",
    captionVi: "Bờ biển trong xanh trải dài của vịnh Nha Trang",
    coords: "12.2°N  109.2°E", weather: "28–34°C  ·  快晴の日々", elevation: "0m",
    img: "https://media.base44.com/images/public/6a13e517c2cff5e3b0e223bd/a2bcea7c9_generated_5d035b71.png"
  },
  {
    month: 8, monthLabel: "08", romanNumeral: "VIII", time: "8月の旅",
    titleJp: "フーコック島 — 夕日に染まる魅惑の真珠の島", titleVi: "Phú Quốc",
    descJp: "8月の夏の終わりに、高級リゾートでのんびり過ごすのはいかがでしょうか。美しいビーチで沈む夕日を眺める時間は格別です。",
    captionVi: "Bãi cát trắng mịn màng bên làn nước ấm áp",
    coords: "10.2°N  103.9°E", weather: "27–32°C  ·  熱帯のにわか雨", elevation: "0m",
    img: "https://media.base44.com/images/public/6a13e517c2cff5e3b0e223bd/5fccd5650_generated_25d3fc30.png"
  },
  {
    month: 9, monthLabel: "09", romanNumeral: "IX", time: "9月の旅",
    titleJp: "ムーカンチャイ — 黄金色に輝く壮大な棚田", titleVi: "Mù Cang Chải",
    descJp: "9月は北西部が黄金色に染まる稲穂の収穫期です。山肌に広がる壮大な棚田の波は、圧倒されるほどの美しさです。",
    captionVi: "Thảm lúa vàng óng ả trải dài ngút ngàn",
    coords: "21.8°N  104.1°E", weather: "18–26°C  ·  秋晴れ", elevation: "900m",
    img: "https://media.base44.com/images/public/6a13e517c2cff5e3b0e223bd/536f589f6_generated_991ed75e.png"
  },
  {
    month: 10, monthLabel: "10", romanNumeral: "X", time: "10月の旅",
    titleJp: "ハノイ — ロマンチックな黄金色の秋の街並み", titleVi: "Hà Nội",
    descJp: "10月のハノイは最も美しい秋を迎えます。涼しい風が吹き、旧市街を散策しながら伝統菓子（コム）を味わうのが粋な過ごし方です。",
    captionVi: "Mùa thu lá vàng lãng mạn bên Hồ Hoàn Kiếm",
    coords: "21.0°N  105.8°E", weather: "20–28°C  ·  紅葉의 季節", elevation: "15m",
    img: "https://media.base44.com/images/public/6a13e517c2cff5e3b0e223bd/61216ccd2_generated_25fff00d.png"
  },
  {
    month: 11, monthLabel: "11", romanNumeral: "XI", time: "11月の旅",
    titleJp: "ホイアン — ランタンが灯るノスタルジックな古都", titleVi: "Hội An",
    descJp: "11月は心地よい気候になり、夜になると古い街並みがランタンの温かい光で幻想的に包まれます。ノスタルジーを感じる旅へ。",
    captionVi: "Vẻ đẹp lung linh của phố cổ Hội An về đêm",
    coords: "15.9°N  108.3°E", weather: "22–28°C  ·  穏やかな夜風", elevation: "5m",
    img: "https://media.base44.com/images/public/6a13e517c2cff5e3b0e223bd/a33ea5723_generated_2cb8baf2.png"
  },
  {
    month: 12, monthLabel: "12", romanNumeral: "XII", time: "12月の旅",
    titleJp: "ムイネー — 風と太陽が織りなす神秘的な砂丘", titleVi: "Mũi Né",
    descJp: "12月はカイトサーフィンのベストシーズンです。まるでサハラ砂漠のような広大な白い砂丘の絶景が広がります。",
    captionVi: "Những đồi cát uốn lượn độc đáo tại Mũi Né",
    coords: "10.9°N  108.3°E", weather: "24–30°C  ·  乾いた風", elevation: "10m",
    img: "https://media.base44.com/images/public/6a13e517c2cff5e3b0e223bd/41b059ce6_generated_f27864b3.png"
  }
];

const galleryImages = {
  1: [
    { url: "https://photo.znews.vn/Uploaded/zxaint/2025_07_24/hagiang_2_.JPG", cap: "Đồng Văn — cao nguyên đá" },
    { url: "https://ik.imagekit.io/tvlk/blog/2023/02/du-lich-ha-giang-thang-10-1.jpg?tr=dpr-2,w-675", cap: "Hà Giang — sương mù buổi sáng" },
    { url: "https://lockernlock.vn/wp-content/uploads/2023/10/mua-xuan-tai-sapa-dua-hoa-tram-no-di-sapa-mua-nao-dep.jpg", cap: "Hoa đào nở rộ mùa xuân" },
    { url: "https://www.hanoilocaltour.com/wp-content/uploads/1.-When-and-Where-is-the-Sapa-Love-Market-Held-.jpeg", cap: "Lễ hội sapa" },
  ],
  2: [
    { url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/c5/92/a1/trang-an-grottoes-harbor.jpg?w=800&h=600&s=1", cap: "Tràng An — vịnh trên cạn" },
    { url: "https://hoabientourist.com/watermark/product/825x735x1/upload/product/60-4625.jpg", cap: "Chùa Bái Đính uy nghi" },
    { url: "https://aufilduvietnam.com/wp-content/uploads/2021/04/Ninh-binh-balade-en-barque-reserve-naturelle-van-long.jpg", cap: "Thuyền nan trên sông" },
    { url: "https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/04_2022/cac-le-hoi-o-ca-mau.jpg", cap: "Lễ hội mùa xuân" },
  ],
  3: [
    { url: "https://timtour.vn/files/images/Mua-gi-lam-qua/ca-phe-cao-nguyen-1.jpg", cap: "Cà phê Tây Nguyên" },
    { url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400", cap: "Đồn điền cà phê" },
    { url: "https://phanbonmiennam.com.vn/wp-content/uploads/2020/11/Ca-phe-trong-mua-kho.jpg", cap: "Hoa cà phê trắng" },
    { url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=400", cap: "Buôn Ma Thuột" },
  ],
  4: [
    { url: "https://datviettour.com.vn/uploads/images/tin-tuc/cam-nang-du-lich/tour-du-lich-tet-2019/du-lich-hue/dia-diem/avatar.jpg", cap: "Đại Nội Huế buổi tối" },
    { url: "https://media.vietravel.com/images/Content/cau-truong-tien-hue-1.jpg", cap: "Cầu Trường Tiền" },
    { url: "https://media.vietravel.com/images/news/am-thuc-cung-dinh-hue-0.png", cap: "Ẩm thực cung đình Huế" },
    { url: "https://danatravel.vn/data/images/1c-min(1).png", cap: "Lễ hội cung đình Huế" },
  ],
  5: [
    { url: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=400", cap: "Vịnh Hạ Long từ trên cao" },
    { url: "https://images.unsplash.com/photo-1559628233-100c798642d0?q=80&w=400", cap: "Du thuyền giữa kỳ quan" },
    { url: "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?q=80&w=400", cap: "Hang động huyền bí" },
    { url: "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?q=80&w=400", cap: "Bình minh trên vịnh" },
  ],
  6: [
    { url: "https://www.vietnambooking.com/wp-content/uploads/2021/04/tour-ha-noi-da-nang-3-ngay-2-dem.jpg", cap: "Lâu đài Bà Nà Hills" },
    { url: "https://vietnamnomad.com/wp-content/uploads/2020/04/Ba-Na-Hills-Da-Nang-Cover-Vietnamnomad-1024x576.jpg", cap: "Làng Pháp trong sương mây" },
    { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400", cap: "Bãi biển Mỹ Khê Đà Nẵng" },
    { url: "https://i.pinimg.com/736x/00/a3/7f/00a37fd9c7479911e36ba748d139e425.jpg", cap: "Cầu Rồng phun lửa đêm" },
  ],
  7: [
    { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400", cap: "Bãi Nha Trang" },
    { url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=400", cap: "San hô dưới nước" },
    { url: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=400", cap: "Đảo Bình Ba" },
    { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=400", cap: "Lặn biển ngắm san hô" },
  ],
  8: [
    { url: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?q=80&w=400", cap: "Bãi Sao Phú Quốc" },
    { url: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=400", cap: "Hoàng hôn đảo ngọc" },
    { url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=400", cap: "Bể bơi vô cực" },
    { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=400", cap: "Resort 5 sao" },
  ],
  9: [
    { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400", cap: "Ruộng bậc thang vàng óng" },
    { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400", cap: "Mùa gặt tháng 9" },
    { url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=400", cap: "Sương khói buổi sớm" },
    { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400", cap: "Bản làng người Mông" },
  ],
  10: [
    { url: "https://statics.vinpearl.com/ho-hoan-kiem-6_1688884576.jpg", cap: "Hồ Hoàn Kiếm mùa thu" },
    { url: "https://cdn.nhandan.vn/images/1ea1ae7a315d88fc6fbf436960826115d9e6b3c6f48f6ffcf9e7d3e9837338b4c9c9ae5213ce5fbaaa5322ee8d3cc0ac5cfacd5ee898d181029010948d9846a0/20-2219.jpg", cap: "Phố cổ Hà Nội" },
    { url: "https://dacsanthanhnam.com/wp-content/uploads/2021/04/com-lang-vong.jpg", cap: "Cốm Vòng đặc sản" },
    { url: "https://halotravel.vn/wp-content/uploads/2020/05/check-in-pho-co.jpg", cap: "Ăn đêm ở Phố Cổ" },
  ],
  11: [
    { url: "https://media.mia.vn/uploads/blog-du-lich/Pho-den-long-Hoi-An-Chiem-nguong-ve-dep-lung-linh-day-lang-man-02-1618322258.jpg", cap: "Phố Hội An đêm đèn lồng" },
    { url: "https://eholiday.vn/wp-content/uploads/2023/03/tha-den-hoa-dang-tren-song-Hoai.jpeg", cap: "Đèn lồng thả sông Hoài" },
    { url: "https://www.so-vietnam-travel.com/images/destinations/9.-Hoi-An-1.jpg", cap: "Kiến trúc cổ kính" },
    { url: "https://media.mia.vn/uploads/blog-du-lich/banh-mi-phuong-3-1656737659.png", cap: "Bánh mì phố cổ" },
  ],
  12: [
    { url: "https://happy.vietnam.vn/wp-content/uploads/2024/10/Ban-sao-DJI_0553-HDR-1-scaled.jpg", cap: "Đồi cát trắng Mũi Né" },
    { url: "https://res.cloudinary.com/manawa/image/upload/f_auto,c_limit,w_1920,q_auto/articles/62409/Kite", cap: "Kite surf mùa gió" },
    { url: "https://cdn3.ivivu.com/2023/03/KDL-Su%E1%BB%91i-Ti%C3%AAn-ivivu-6.jpg", cap: "Suối Tiên huyền ảo" },
    { url: "https://i.pinimg.com/736x/a9/2c/cc/a92ccc784225589be9d4aba48c4d8833.jpg", cap: "hải sản Mũi Né" },
  ],
};