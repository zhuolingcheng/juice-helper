const INGREDIENTS = [
  { name: "香蕉", aliases: ["banana"], type: "水果", sweet: 5, acid: 0, bitter: 0, earthy: 0, creamy: 3, fiber: 3, sugar: 4, potassium: 3, tags: ["顺滑", "增甜", "高钾"] },
  { name: "苹果", aliases: ["apple"], type: "水果", sweet: 3, acid: 2, bitter: 0, earthy: 0, creamy: 0, fiber: 3, sugar: 3, tags: ["清爽", "果香"] },
  { name: "梨", aliases: ["pear"], type: "水果", sweet: 3, acid: 1, bitter: 0, earthy: 0, creamy: 0, fiber: 3, sugar: 3, tags: ["温和", "清甜"] },
  { name: "草莓", aliases: ["strawberry"], type: "水果", sweet: 3, acid: 3, bitter: 0, earthy: 0, creamy: 0, fiber: 2, sugar: 2, tags: ["莓果", "酸甜"] },
  { name: "蓝莓", aliases: ["blueberry"], type: "水果", sweet: 3, acid: 2, bitter: 0, earthy: 0, creamy: 0, fiber: 3, sugar: 2, tags: ["莓果", "颜色深"] },
  { name: "芒果", aliases: ["mango"], type: "水果", sweet: 5, acid: 1, bitter: 0, earthy: 0, creamy: 2, fiber: 2, sugar: 5, tags: ["热带", "高糖"] },
  { name: "菠萝", aliases: ["pineapple"], type: "水果", sweet: 4, acid: 4, bitter: 0, earthy: 0, creamy: 0, fiber: 2, sugar: 4, tags: ["酸甜", "酶感"] },
  { name: "橙子", aliases: ["橙", "orange"], type: "水果", sweet: 3, acid: 4, bitter: 0, earthy: 0, creamy: 0, fiber: 2, sugar: 3, vitaminC: 4, tags: ["柑橘", "维C"] },
  { name: "柠檬", aliases: ["lemon"], type: "水果", sweet: 0, acid: 5, bitter: 1, earthy: 0, creamy: 0, fiber: 1, sugar: 0, vitaminC: 4, tags: ["提亮", "强酸"] },
  { name: "西柚", aliases: ["葡萄柚", "grapefruit"], type: "水果", sweet: 2, acid: 4, bitter: 2, earthy: 0, creamy: 0, fiber: 2, sugar: 2, vitaminC: 4, grapefruit: true, tags: ["柑橘", "药物相互作用"] },
  { name: "猕猴桃", aliases: ["奇异果", "kiwi"], type: "水果", sweet: 3, acid: 4, bitter: 0, earthy: 0, creamy: 0, fiber: 3, sugar: 3, vitaminC: 5, tags: ["酸甜", "维C"] },
  { name: "西瓜", aliases: ["watermelon"], type: "水果", sweet: 3, acid: 0, bitter: 0, earthy: 0, creamy: 0, fiber: 1, sugar: 3, tags: ["多水", "清爽"] },
  { name: "牛油果", aliases: ["鳄梨", "avocado"], type: "水果", sweet: 0, acid: 0, bitter: 0, earthy: 1, creamy: 5, fiber: 4, sugar: 0, fat: 4, potassium: 4, tags: ["脂肪", "顺滑", "高钾"] },
  { name: "菠菜", aliases: ["spinach"], type: "蔬菜", sweet: 0, acid: 0, bitter: 2, earthy: 3, creamy: 0, fiber: 3, sugar: 0, leafy: true, vitaminK: 5, oxalate: 5, tags: ["绿叶", "草酸", "维K"] },
  { name: "羽衣甘蓝", aliases: ["kale"], type: "蔬菜", sweet: 0, acid: 0, bitter: 4, earthy: 3, creamy: 0, fiber: 4, sugar: 0, leafy: true, vitaminK: 5, tags: ["绿叶", "维K", "偏苦"] },
  { name: "生菜", aliases: ["lettuce"], type: "蔬菜", sweet: 0, acid: 0, bitter: 1, earthy: 1, creamy: 0, fiber: 2, sugar: 0, leafy: true, vitaminK: 3, tags: ["清淡", "绿叶"] },
  { name: "芹菜", aliases: ["celery"], type: "蔬菜", sweet: 0, acid: 0, bitter: 2, earthy: 2, creamy: 0, fiber: 2, sugar: 0, sodium: 2, tags: ["草本", "清爽"] },
  { name: "黄瓜", aliases: ["cucumber"], type: "蔬菜", sweet: 0, acid: 0, bitter: 0, earthy: 1, creamy: 0, fiber: 1, sugar: 0, tags: ["多水", "清爽"] },
  { name: "胡萝卜", aliases: ["carrot"], type: "蔬菜", sweet: 2, acid: 0, bitter: 0, earthy: 2, creamy: 0, fiber: 3, sugar: 2, tags: ["土甜", "橙色"] },
  { name: "甜菜根", aliases: ["beet", "beetroot"], type: "蔬菜", sweet: 3, acid: 0, bitter: 1, earthy: 5, creamy: 0, fiber: 3, sugar: 3, oxalate: 4, tags: ["泥土味", "草酸"] },
  { name: "番茄", aliases: ["西红柿", "tomato"], type: "蔬菜", sweet: 1, acid: 3, bitter: 0, earthy: 1, creamy: 0, fiber: 2, sugar: 1, tags: ["鲜味", "酸"] },
  { name: "紫甘蓝", aliases: ["red cabbage"], type: "蔬菜", sweet: 1, acid: 0, bitter: 2, earthy: 3, creamy: 0, fiber: 4, sugar: 1, cruciferous: true, tags: ["十字花科", "偏涩"] },
  { name: "西兰花", aliases: ["broccoli"], type: "蔬菜", sweet: 0, acid: 0, bitter: 3, earthy: 3, creamy: 0, fiber: 4, sugar: 1, cruciferous: true, tags: ["十字花科", "偏生青"] },
  { name: "姜", aliases: ["生姜", "ginger"], type: "调味", sweet: 0, acid: 0, bitter: 1, earthy: 1, creamy: 0, fiber: 0, sugar: 0, spice: 5, tags: ["辛辣", "提味"] },
  { name: "薄荷", aliases: ["mint"], type: "调味", sweet: 0, acid: 0, bitter: 1, earthy: 0, creamy: 0, fiber: 0, sugar: 0, herb: 5, tags: ["清凉", "香草"] },
  { name: "酸奶", aliases: ["yogurt", "优格"], type: "乳制品", sweet: 1, acid: 3, bitter: 0, earthy: 0, creamy: 5, fiber: 0, sugar: 2, protein: 3, dairy: true, tags: ["乳制品", "蛋白", "顺滑"] },
  { name: "牛奶", aliases: ["milk"], type: "乳制品", sweet: 1, acid: 0, bitter: 0, earthy: 0, creamy: 4, fiber: 0, sugar: 2, protein: 3, dairy: true, tags: ["乳制品", "顺滑"] },
  { name: "豆浆", aliases: ["soy milk", "soymilk"], type: "植物奶", sweet: 1, acid: 0, bitter: 1, earthy: 2, creamy: 3, fiber: 1, sugar: 1, protein: 3, tags: ["植物蛋白", "豆香"] },
  { name: "杏仁奶", aliases: ["almond milk"], type: "植物奶", sweet: 1, acid: 0, bitter: 1, earthy: 1, creamy: 3, fiber: 1, sugar: 1, oxalate: 2, tags: ["坚果", "轻盈"] },
  { name: "燕麦", aliases: ["oats", "oat"], type: "谷物", sweet: 1, acid: 0, bitter: 0, earthy: 2, creamy: 4, fiber: 5, sugar: 1, grain: true, tags: ["饱腹", "增稠"] },
  { name: "奇亚籽", aliases: ["chia"], type: "种子", sweet: 0, acid: 0, bitter: 0, earthy: 1, creamy: 4, fiber: 5, sugar: 0, fat: 3, tags: ["吸水", "增稠"] },
  { name: "亚麻籽", aliases: ["flaxseed"], type: "种子", sweet: 0, acid: 0, bitter: 1, earthy: 2, creamy: 2, fiber: 5, sugar: 0, fat: 3, tags: ["坚果味", "纤维"] },
  { name: "花生酱", aliases: ["peanut butter"], type: "坚果", sweet: 1, acid: 0, bitter: 1, earthy: 2, creamy: 5, fiber: 2, sugar: 2, fat: 5, protein: 3, tags: ["高脂", "浓郁"] },
  { name: "蜂蜜", aliases: ["honey"], type: "甜味", sweet: 5, acid: 0, bitter: 0, earthy: 0, creamy: 0, fiber: 0, sugar: 5, addedSugar: true, tags: ["添加糖", "增甜"] },
  { name: "椰子水", aliases: ["coconut water"], type: "液体", sweet: 2, acid: 0, bitter: 0, earthy: 0, creamy: 0, fiber: 0, sugar: 2, potassium: 5, tags: ["电解质", "高钾"] }
];

const EXTRA_INGREDIENTS = [
  { name: "葡萄", aliases: ["grape"], type: "水果", sweet: 4, acid: 2, bitter: 0, earthy: 0, creamy: 0, fiber: 1, sugar: 4, tags: ["清甜", "高糖"] },
  { name: "桃子", aliases: ["peach"], type: "水果", sweet: 4, acid: 1, bitter: 0, earthy: 0, creamy: 1, fiber: 2, sugar: 3, tags: ["柔和", "果香"] },
  { name: "油桃", aliases: ["nectarine"], type: "水果", sweet: 4, acid: 2, bitter: 0, earthy: 0, creamy: 0, fiber: 2, sugar: 3, tags: ["酸甜", "果香"] },
  { name: "李子", aliases: ["plum"], type: "水果", sweet: 3, acid: 3, bitter: 0, earthy: 0, creamy: 0, fiber: 2, sugar: 3, tags: ["酸甜", "果皮微涩"] },
  { name: "樱桃", aliases: ["cherry"], type: "水果", sweet: 4, acid: 2, bitter: 0, earthy: 0, creamy: 0, fiber: 2, sugar: 4, tags: ["莓果感", "高糖"] },
  { name: "石榴", aliases: ["pomegranate"], type: "水果", sweet: 3, acid: 3, bitter: 1, earthy: 0, creamy: 0, fiber: 2, sugar: 3, tags: ["酸甜", "籽感"] },
  { name: "火龙果", aliases: ["dragon fruit", "pitaya"], type: "水果", sweet: 2, acid: 0, bitter: 0, earthy: 0, creamy: 1, fiber: 3, sugar: 2, tags: ["清淡", "颜色亮"] },
  { name: "百香果", aliases: ["passion fruit"], type: "水果", sweet: 2, acid: 5, bitter: 1, earthy: 0, creamy: 0, fiber: 3, sugar: 2, vitaminC: 3, tags: ["强酸", "香气高"] },
  { name: "木瓜", aliases: ["papaya"], type: "水果", sweet: 4, acid: 1, bitter: 0, earthy: 0, creamy: 2, fiber: 2, sugar: 3, tags: ["热带", "柔滑"] },
  { name: "哈密瓜", aliases: ["melon", "cantaloupe"], type: "水果", sweet: 4, acid: 0, bitter: 0, earthy: 0, creamy: 0, fiber: 1, sugar: 4, potassium: 2, tags: ["多水", "甜香"] },
  { name: "椰肉", aliases: ["coconut meat"], type: "水果", sweet: 2, acid: 0, bitter: 0, earthy: 1, creamy: 4, fiber: 4, sugar: 2, fat: 4, tags: ["脂肪", "椰香"] },
  { name: "蔓越莓", aliases: ["cranberry"], type: "水果", sweet: 1, acid: 5, bitter: 1, earthy: 0, creamy: 0, fiber: 2, sugar: 1, tags: ["很酸", "莓果"] },
  { name: "黑莓", aliases: ["blackberry"], type: "水果", sweet: 2, acid: 3, bitter: 1, earthy: 1, creamy: 0, fiber: 4, sugar: 2, tags: ["莓果", "籽感"] },
  { name: "覆盆子", aliases: ["树莓", "raspberry"], type: "水果", sweet: 2, acid: 3, bitter: 0, earthy: 0, creamy: 0, fiber: 4, sugar: 2, tags: ["莓果", "酸甜"] },
  { name: "青提", aliases: ["green grape"], type: "水果", sweet: 4, acid: 2, bitter: 0, earthy: 0, creamy: 0, fiber: 1, sugar: 4, tags: ["清甜", "高糖"] },
  { name: "柚子", aliases: ["pomelo"], type: "水果", sweet: 2, acid: 3, bitter: 2, earthy: 0, creamy: 0, fiber: 2, sugar: 2, vitaminC: 3, tags: ["柑橘", "微苦"] },
  { name: "青柠", aliases: ["lime"], type: "水果", sweet: 0, acid: 5, bitter: 1, earthy: 0, creamy: 0, fiber: 1, sugar: 0, vitaminC: 4, tags: ["提亮", "强酸"] },
  { name: "小白菜", aliases: ["bok choy", "pak choi"], type: "蔬菜", sweet: 0, acid: 0, bitter: 1, earthy: 2, creamy: 0, fiber: 2, sugar: 0, leafy: true, vitaminK: 4, cruciferous: true, tags: ["绿叶", "维K"] },
  { name: "上海青", aliases: ["baby bok choy"], type: "蔬菜", sweet: 0, acid: 0, bitter: 1, earthy: 2, creamy: 0, fiber: 2, sugar: 0, leafy: true, vitaminK: 4, cruciferous: true, tags: ["绿叶", "清淡"] },
  { name: "油麦菜", aliases: ["youmai"], type: "蔬菜", sweet: 0, acid: 0, bitter: 2, earthy: 2, creamy: 0, fiber: 2, sugar: 0, leafy: true, vitaminK: 3, tags: ["绿叶", "微苦"] },
  { name: "香菜", aliases: ["cilantro", "coriander"], type: "调味", sweet: 0, acid: 0, bitter: 2, earthy: 1, creamy: 0, fiber: 1, sugar: 0, herb: 5, tags: ["香草", "存在感强"] },
  { name: "欧芹", aliases: ["parsley"], type: "调味", sweet: 0, acid: 0, bitter: 2, earthy: 1, creamy: 0, fiber: 1, sugar: 0, herb: 4, vitaminK: 4, tags: ["香草", "维K"] },
  { name: "罗勒", aliases: ["basil"], type: "调味", sweet: 0, acid: 0, bitter: 1, earthy: 0, creamy: 0, fiber: 0, sugar: 0, herb: 5, tags: ["香草", "清香"] },
  { name: "苦瓜", aliases: ["bitter melon"], type: "蔬菜", sweet: 0, acid: 0, bitter: 5, earthy: 2, creamy: 0, fiber: 3, sugar: 0, tags: ["很苦", "低糖"] },
  { name: "南瓜", aliases: ["pumpkin"], type: "蔬菜", sweet: 3, acid: 0, bitter: 0, earthy: 2, creamy: 3, fiber: 3, sugar: 3, potassium: 2, tags: ["绵密", "土甜"] },
  { name: "红薯", aliases: ["sweet potato"], type: "薯类", sweet: 4, acid: 0, bitter: 0, earthy: 2, creamy: 4, fiber: 4, sugar: 4, potassium: 3, tags: ["熟用更好", "高钾"] },
  { name: "山药", aliases: ["yam"], type: "薯类", sweet: 1, acid: 0, bitter: 0, earthy: 2, creamy: 4, fiber: 3, sugar: 1, tags: ["黏滑", "建议熟用"] },
  { name: "玉米", aliases: ["corn"], type: "谷物", sweet: 3, acid: 0, bitter: 0, earthy: 1, creamy: 2, fiber: 3, sugar: 3, grain: true, tags: ["甜香", "淀粉"] },
  { name: "豌豆", aliases: ["pea"], type: "豆类", sweet: 2, acid: 0, bitter: 1, earthy: 2, creamy: 2, fiber: 4, sugar: 2, protein: 2, tags: ["豆香", "纤维"] },
  { name: "毛豆", aliases: ["edamame"], type: "豆类", sweet: 1, acid: 0, bitter: 1, earthy: 2, creamy: 3, fiber: 4, sugar: 1, protein: 4, tags: ["植物蛋白", "建议熟用"] },
  { name: "豆腐", aliases: ["tofu"], type: "豆类", sweet: 0, acid: 0, bitter: 0, earthy: 1, creamy: 4, fiber: 1, sugar: 0, protein: 4, tags: ["植物蛋白", "顺滑"] },
  { name: "可可粉", aliases: ["cocoa"], type: "调味", sweet: 0, acid: 0, bitter: 4, earthy: 2, creamy: 1, fiber: 2, sugar: 0, tags: ["苦香", "适合香蕉"] },
  { name: "肉桂粉", aliases: ["cinnamon"], type: "调味", sweet: 1, acid: 0, bitter: 1, earthy: 1, creamy: 0, fiber: 0, sugar: 0, spice: 3, tags: ["暖香", "少量"] },
  { name: "抹茶粉", aliases: ["matcha"], type: "调味", sweet: 0, acid: 0, bitter: 4, earthy: 3, creamy: 0, fiber: 1, sugar: 0, caffeine: 3, tags: ["茶苦", "含咖啡因"] },
  { name: "绿茶", aliases: ["green tea"], type: "液体", sweet: 0, acid: 0, bitter: 3, earthy: 1, creamy: 0, fiber: 0, sugar: 0, caffeine: 2, tags: ["茶香", "含咖啡因"] },
  { name: "咖啡", aliases: ["coffee"], type: "液体", sweet: 0, acid: 2, bitter: 4, earthy: 2, creamy: 0, fiber: 0, sugar: 0, caffeine: 4, tags: ["咖啡因", "苦香"] },
  { name: "燕麦奶", aliases: ["oat milk"], type: "植物奶", sweet: 2, acid: 0, bitter: 0, earthy: 1, creamy: 4, fiber: 2, sugar: 2, grain: true, tags: ["顺滑", "谷物香"] },
  { name: "椰奶", aliases: ["coconut milk"], type: "植物奶", sweet: 2, acid: 0, bitter: 0, earthy: 1, creamy: 5, fiber: 1, sugar: 2, fat: 5, tags: ["高脂", "椰香"] },
  { name: "开菲尔", aliases: ["kefir"], type: "乳制品", sweet: 1, acid: 4, bitter: 0, earthy: 0, creamy: 4, fiber: 0, sugar: 2, protein: 3, dairy: true, tags: ["发酵", "酸"] },
  { name: "奶酪", aliases: ["cream cheese"], type: "乳制品", sweet: 0, acid: 2, bitter: 0, earthy: 0, creamy: 5, fiber: 0, sugar: 1, protein: 3, fat: 4, dairy: true, tags: ["浓郁", "高脂"] },
  { name: "核桃", aliases: ["walnut"], type: "坚果", sweet: 0, acid: 0, bitter: 2, earthy: 2, creamy: 3, fiber: 2, sugar: 0, fat: 5, protein: 2, tags: ["坚果", "微苦"] },
  { name: "腰果", aliases: ["cashew"], type: "坚果", sweet: 1, acid: 0, bitter: 0, earthy: 1, creamy: 4, fiber: 1, sugar: 1, fat: 5, protein: 2, tags: ["坚果", "顺滑"] },
  { name: "杏仁", aliases: ["almond"], type: "坚果", sweet: 0, acid: 0, bitter: 1, earthy: 1, creamy: 3, fiber: 3, sugar: 0, fat: 5, protein: 3, oxalate: 3, tags: ["坚果", "草酸"] },
  { name: "芝麻", aliases: ["sesame"], type: "种子", sweet: 0, acid: 0, bitter: 1, earthy: 2, creamy: 3, fiber: 3, sugar: 0, fat: 5, protein: 3, oxalate: 2, tags: ["坚果香", "高脂"] },
  { name: "南瓜籽", aliases: ["pumpkin seed"], type: "种子", sweet: 0, acid: 0, bitter: 1, earthy: 2, creamy: 2, fiber: 2, sugar: 0, fat: 4, protein: 3, tags: ["种子", "蛋白"] },
  { name: "葵花籽", aliases: ["sunflower seed"], type: "种子", sweet: 0, acid: 0, bitter: 1, earthy: 2, creamy: 2, fiber: 3, sugar: 0, fat: 4, protein: 3, tags: ["种子", "高脂"] },
  { name: "红枣", aliases: ["jujube", "date"], type: "甜味", sweet: 5, acid: 0, bitter: 0, earthy: 1, creamy: 1, fiber: 3, sugar: 5, addedSugar: true, tags: ["很甜", "干果"] },
  { name: "葡萄干", aliases: ["raisin"], type: "甜味", sweet: 5, acid: 1, bitter: 0, earthy: 0, creamy: 0, fiber: 2, sugar: 5, addedSugar: true, tags: ["很甜", "干果"] },
  { name: "枫糖浆", aliases: ["maple syrup"], type: "甜味", sweet: 5, acid: 0, bitter: 0, earthy: 1, creamy: 0, fiber: 0, sugar: 5, addedSugar: true, tags: ["添加糖", "焦糖香"] },
  { name: "代糖", aliases: ["sweetener", "stevia"], type: "甜味", sweet: 5, acid: 0, bitter: 1, earthy: 0, creamy: 0, fiber: 0, sugar: 0, tags: ["甜味", "少量"] },
  { name: "冰块", aliases: ["ice"], type: "液体", sweet: 0, acid: 0, bitter: 0, earthy: 0, creamy: 0, fiber: 0, sugar: 0, tags: ["降温", "稀释"] },
  { name: "苏打水", aliases: ["sparkling water"], type: "液体", sweet: 0, acid: 1, bitter: 0, earthy: 0, creamy: 0, fiber: 0, sugar: 0, tags: ["气泡", "清爽"] },
  { name: "海盐", aliases: ["salt"], type: "调味", sweet: 0, acid: 0, bitter: 0, earthy: 0, creamy: 0, fiber: 0, sugar: 0, sodium: 5, tags: ["钠", "少量"] },
  { name: "黑胡椒", aliases: ["pepper"], type: "调味", sweet: 0, acid: 0, bitter: 1, earthy: 1, creamy: 0, fiber: 0, sugar: 0, spice: 3, tags: ["辛香", "少量"] },
  { name: "辣椒", aliases: ["chili"], type: "调味", sweet: 0, acid: 0, bitter: 1, earthy: 1, creamy: 0, fiber: 1, sugar: 0, spice: 5, tags: ["辛辣", "刺激"] },
  { name: "芦荟", aliases: ["aloe"], type: "蔬菜", sweet: 0, acid: 0, bitter: 2, earthy: 1, creamy: 1, fiber: 1, sugar: 0, tags: ["凝胶感", "需食用品种"] },
  { name: "豆芽", aliases: ["sprout", "sprouts"], type: "蔬菜", sweet: 0, acid: 0, bitter: 1, earthy: 2, creamy: 0, fiber: 2, sugar: 0, rawSprout: true, tags: ["食品安全", "生食谨慎"] }
];

INGREDIENTS.push(...EXTRA_INGREDIENTS);

const TYPE_ICONS = {
  全部: "✦",
  水果: "🍓",
  蔬菜: "🥬",
  调味: "🌿",
  乳制品: "🥣",
  植物奶: "🌱",
  谷物: "🌾",
  种子: "⚫",
  坚果: "🥜",
  甜味: "🍯",
  液体: "💧",
  薯类: "🍠",
  豆类: "🫘"
};

const INGREDIENT_ICONS = {
  香蕉: "🍌",
  苹果: "🍎",
  梨: "🍐",
  草莓: "🍓",
  蓝莓: "🫐",
  芒果: "🥭",
  菠萝: "🍍",
  橙子: "🍊",
  柠檬: "🍋",
  西柚: "🍊",
  猕猴桃: "🥝",
  西瓜: "🍉",
  牛油果: "🥑",
  菠菜: "🥬",
  羽衣甘蓝: "🥬",
  生菜: "🥬",
  芹菜: "🌿",
  黄瓜: "🥒",
  胡萝卜: "🥕",
  甜菜根: "🧃",
  番茄: "🍅",
  紫甘蓝: "🥬",
  西兰花: "🥦",
  姜: "🫚",
  薄荷: "🌿",
  酸奶: "🥣",
  牛奶: "🥛",
  豆浆: "🥛",
  杏仁奶: "🥛",
  燕麦: "🌾",
  奇亚籽: "⚫",
  亚麻籽: "🌰",
  花生酱: "🥜",
  蜂蜜: "🍯",
  椰子水: "🥥",
  葡萄: "🍇",
  桃子: "🍑",
  油桃: "🍑",
  李子: "🟣",
  樱桃: "🍒",
  石榴: "🔴",
  火龙果: "🌺",
  百香果: "🟡",
  木瓜: "🟠",
  哈密瓜: "🍈",
  椰肉: "🥥",
  蔓越莓: "🔴",
  黑莓: "🫐",
  覆盆子: "🍓",
  青提: "🍇",
  柚子: "🍊",
  青柠: "🟢",
  小白菜: "🥬",
  上海青: "🥬",
  油麦菜: "🥬",
  香菜: "🌿",
  欧芹: "🌿",
  罗勒: "🌿",
  苦瓜: "🥒",
  南瓜: "🎃",
  红薯: "🍠",
  山药: "🍠",
  玉米: "🌽",
  豌豆: "🟢",
  毛豆: "🫛",
  豆腐: "◻",
  可可粉: "🍫",
  肉桂粉: "✨",
  抹茶粉: "🍵",
  绿茶: "🍵",
  咖啡: "☕",
  燕麦奶: "🥛",
  椰奶: "🥥",
  开菲尔: "🥣",
  奶酪: "🧀",
  核桃: "🌰",
  腰果: "🌰",
  杏仁: "🌰",
  芝麻: "⚫",
  南瓜籽: "🌱",
  葵花籽: "🌻",
  红枣: "🟤",
  葡萄干: "🍇",
  枫糖浆: "🍯",
  代糖: "✨",
  冰块: "🧊",
  苏打水: "🫧",
  海盐: "🧂",
  黑胡椒: "⚫",
  辣椒: "🌶",
  芦荟: "🌵",
  豆芽: "🌱"
};

const COMMON_WARNINGS = [
  {
    test: items => items.some(i => i.grapefruit),
    text: "含西柚/葡萄柚：它可能影响部分降压药、降脂药、抗过敏药、免疫抑制剂等药物代谢；正在服药时先问医生或药师。"
  },
  {
    test: items => sum(items, "vitaminK") >= 5,
    text: "深绿叶菜维生素 K 较高：如果正在使用华法林，重点不是完全不吃，而是保持摄入稳定并按医嘱监测。"
  },
  {
    test: items => sum(items, "oxalate") >= 5,
    text: "草酸负担偏高：有草酸钙肾结石史或医生要求限草酸的人，不建议频繁大量饮用这类组合。"
  },
  {
    test: items => sum(items, "potassium") >= 6,
    text: "钾含量可能偏高：慢性肾病、需限钾或正在使用影响血钾药物的人要谨慎。"
  },
  {
    test: items => sum(items, "sugar") >= 10 || (sum(items, "sugar") >= 8 && items.some(i => i.addedSugar)),
    text: "糖负担偏高：更像甜品奶昔。控糖、减脂或糖尿病人群建议减少高糖水果和蜂蜜，增加无糖酸奶、豆浆或黄瓜等。"
  },
  {
    test: items => items.some(i => i.dairy) && sum(items, "acid") >= 7,
    text: "酸性水果加乳制品可能出现絮状或分层，多数是口感和外观问题；胃酸反流、乳糖不耐受者要更谨慎。"
  },
  {
    test: items => items.filter(i => i.cruciferous).length >= 2,
    text: "生的十字花科蔬菜比例偏高时容易辛辣、生青、胀气；甲状腺疾病人群不要长期大量生饮。"
  },
  {
    test: items => items.some(i => i.rawSprout),
    text: "含豆芽：生豆芽食品安全风险较高，儿童、孕妇、老人、免疫力较弱者建议避免生食。"
  },
  {
    test: items => sum(items, "caffeine") >= 4,
    text: "咖啡因偏高：睡前、心悸、焦虑、孕期或对咖啡因敏感时，建议减少咖啡/抹茶/绿茶比例。"
  },
  {
    test: items => sum(items, "sodium") >= 5,
    text: "钠含量可能偏高：高血压、肾病或需限盐人群不建议额外加盐。"
  }
];

const TIPS = [
  "水果和蔬菜先洗净，表皮粗糙的食材可用流动水充分冲洗后再切。",
  "想要更饱腹：加无糖酸奶、豆浆、燕麦或奇亚籽。",
  "想要更清爽：用黄瓜、柠檬、薄荷或少量姜提亮。",
  "想要更顺滑：香蕉、牛油果、酸奶、燕麦都很好用，但会提高稠度。",
  "莓果、柑橘、猕猴桃能帮绿叶菜降苦味，颜色也更漂亮。"
];

const input = document.querySelector("#ingredients");
const analyzeBtn = document.querySelector("#analyzeBtn");
const clearBtn = document.querySelector("#clearBtn");
const shareBtn = document.querySelector("#shareBtn");
const shareOverlay = document.querySelector("#shareOverlay");
const shareClose = document.querySelector("#shareClose");
const shareText = document.querySelector("#shareText");
const shareStatus = document.querySelector("#shareStatus");
const copyShareBtn = document.querySelector("#copyShareBtn");
const foodSearch = document.querySelector("#foodSearch");
const categoryTabs = document.querySelector("#categoryTabs");
const verdict = document.querySelector("#verdict");
const score = document.querySelector("#score");
const scoreRing = document.querySelector("#scoreRing");
const summaryLine = document.querySelector("#summaryLine");
const recognized = document.querySelector("#recognized");
const notes = document.querySelector("#notes");
const warnings = document.querySelector("#warnings");
const suggestions = document.querySelector("#suggestions");
const fixTip = document.querySelector("#fixTip");
const tasteMeter = document.querySelector("#tasteMeter");
const balanceMeter = document.querySelector("#balanceMeter");
const riskMeter = document.querySelector("#riskMeter");
const knownList = document.querySelector("#knownList");
let activeCategory = "全部";
let currentAnalysis = null;

function sum(items, key) {
  return items.reduce((total, item) => total + (item[key] || 0), 0);
}

function splitInput(value) {
  return value
    .replace(/[，、；;|/]/g, ",")
    .split(/[,\n]+/)
    .map(part => part.trim().toLowerCase())
    .filter(Boolean);
}

function findIngredient(token) {
  return INGREDIENTS.find(item => {
    const names = [item.name, ...item.aliases].map(x => x.toLowerCase());
    return names.includes(token) || names.some(name => token.includes(name));
  });
}

function analyze() {
  const tokens = splitInput(input.value);
  const matched = [];
  const unknown = [];
  const seen = new Set();

  tokens.forEach(token => {
    const item = findIngredient(token);
    if (item && !seen.has(item.name)) {
      matched.push(item);
      seen.add(item.name);
    } else if (!item) {
      unknown.push(token);
    }
  });

  renderRecognized(matched, unknown);

  if (!matched.length) {
    renderEmpty();
    return;
  }

  const metrics = getMetrics(matched);
  const warningList = COMMON_WARNINGS.filter(rule => rule.test(matched)).map(rule => rule.text);
  const noteList = buildNotes(matched, metrics);
  const suggestionList = buildSuggestions(matched, metrics, warningList);
  const finalScore = Math.max(35, Math.min(98, Math.round(metrics.score - warningList.length * 7)));
  const verdictText = finalScore >= 82 ? "很适合，稍作微调更好" : finalScore >= 68 ? "可以搭配，留意细节" : "能做，但建议调整";
  const summary = buildSummaryLine(matched, metrics, finalScore, warningList);

  currentAnalysis = { items: matched, metrics, warningList, finalScore, verdictText, summary };
  verdict.textContent = verdictText;
  summaryLine.textContent = summary;
  score.textContent = finalScore;
  scoreRing.style.background = `conic-gradient(${finalScore >= 70 ? "#2f7d54" : "#b94a3a"} ${finalScore * 3.6}deg, #edf3ed 0deg)`;
  tasteMeter.style.width = `${metrics.taste}%`;
  balanceMeter.style.width = `${metrics.balance}%`;
  riskMeter.style.width = `${Math.min(100, warningList.length * 24 + metrics.risk)}%`;
  renderList(notes, noteList);
  renderList(warnings, warningList.length ? warningList : ["没有触发常见禁忌规则。仍建议按个人体质、过敏史和服药情况判断。"]);
  renderList(suggestions, suggestionList);
  fixTip.textContent = "想换个方向，可以点上面的按钮，我会按这杯的实际食材给救场方案。";
}

function getMetrics(items) {
  const sweet = sum(items, "sweet");
  const acid = sum(items, "acid");
  const bitter = sum(items, "bitter");
  const earthy = sum(items, "earthy");
  const creamy = sum(items, "creamy");
  const fiber = sum(items, "fiber");
  const protein = sum(items, "protein");
  const fat = sum(items, "fat");
  const sugar = sum(items, "sugar");
  const hasFruit = items.some(i => i.type === "水果");
  const hasVeg = items.some(i => i.type === "蔬菜");
  const hasBase = items.some(i => ["乳制品", "植物奶", "液体"].includes(i.type));
  const bitternessBalanced = bitter + earthy <= sweet + acid + 2;
  const creamyBalanced = creamy <= 8 || acid >= 2 || sweet >= 3;
  const taste = clamp(55 + (bitternessBalanced ? 14 : -12) + (creamyBalanced ? 8 : -8) + (acid > 0 ? 6 : 0) - Math.max(0, sugar - 10) * 2);
  const balance = clamp(48 + (hasFruit ? 12 : 0) + (hasVeg ? 12 : 0) + (hasBase ? 10 : 0) + Math.min(fiber, 8) * 2 + Math.min(protein + fat, 6) * 2 - Math.max(0, sugar - 9) * 4);
  const risk = clamp(Math.max(0, sugar - 8) * 4 + Math.max(0, acid - 8) * 3);
  return { sweet, acid, bitter, earthy, creamy, fiber, protein, fat, sugar, taste, balance, risk, score: (taste + balance) / 2 - risk * 0.25 };
}

function clamp(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function getIngredientIcon(item) {
  return INGREDIENT_ICONS[item.name] || TYPE_ICONS[item.type] || "•";
}

function buildSummaryLine(items, m, finalScore, warningList) {
  const scoreMood = finalScore >= 82 ? "这杯很有戏" : finalScore >= 68 ? "这杯可以做" : "这杯能做，但别急着一股脑开打";
  const texture = m.creamy >= 7
    ? "会偏奶昔，入口比较厚"
    : m.acid >= 5
      ? "会比较清爽，酸甜感会先出来"
      : m.fiber >= 9
        ? "饱腹感会比较强"
        : "口感会偏轻盈";
  let watch = "整体没有明显硬伤";
  if (warningList.length) {
    watch = "但有注意事项，先看一眼再决定量";
  } else if (m.sugar >= 9) {
    watch = "不过甜度偏高，像饮品也像甜品";
  } else if (m.bitter + m.earthy > m.sweet + m.acid + 2) {
    watch = "只是菜味可能会露头，需要一点水果或酸味压一压";
  } else if (m.creamy >= 8) {
    watch = "如果不想太稠，记得加点水或冰块";
  }
  return `${scoreMood}，${texture}，${watch}。`;
}

function getFixAdvice(kind, items, m) {
  const hasVeg = items.some(item => item.type === "蔬菜");
  const hasBanana = items.some(item => item.name === "香蕉");
  const hasYogurt = items.some(item => item.name === "酸奶");
  const highSugar = items.filter(item => item.sugar >= 4).map(item => item.name);

  if (kind === "fresh") {
    if (m.creamy >= 7) return "想更清爽：加 80-120ml 水或椰子水，再放几块冰；如果有黄瓜，加几片会立刻变轻。";
    if (m.acid < 3) return "想更清爽：加一点柠檬汁、橙子、猕猴桃或莓果，酸味能把整体提亮。";
    return "这杯已经偏清爽了：少加甜味食材，保留冰块、薄荷或黄瓜就好。";
  }

  if (kind === "smooth") {
    if (!hasBanana && m.sugar < 9) return "想更顺滑：加半根香蕉最稳，甜度、香气和稠度都会上来。";
    if (!hasYogurt) return "想更顺滑：加 100-150ml 无糖酸奶，口感会更像奶昔，也更有饱腹感。";
    return "想更顺滑：加少量燕麦、奇亚籽或牛油果；如果已经很稠，就同步多加一点液体。";
  }

  if (kind === "lessSugar") {
    if (highSugar.length) return `想降甜度：${highSugar.slice(0, 2).join("、")}减半，补黄瓜、菠菜、无糖酸奶或冰块，甜味会稳很多。`;
    return "这杯甜度不算高：别再加蜂蜜、枫糖浆或葡萄干，液体优先选水、无糖酸奶或无糖豆浆。";
  }

  if (kind === "hideGreens") {
    if (!hasVeg) return "这杯没有明显蔬菜味来源。如果觉得味道钝，加一点柠檬、橙子或薄荷就够。";
    if (m.bitter + m.earthy > m.sweet + m.acid + 2) return "想压住菜味：加橙子/猕猴桃/莓果，再配半根香蕉；酸味负责提亮，香蕉负责把生青味包住。";
    return "蔬菜味压力不大：用柠檬、橙子或几片姜提一下香气，不需要额外加太多糖。";
  }

  return "先分析一杯，再选一个想调整的方向。";
}

function buildShareMessage() {
  if (!currentAnalysis?.items?.length) {
    return `${shareData.text}\n${shareData.url}`;
  }

  const names = currentAnalysis.items.map(item => item.name).join(" + ");
  const caution = currentAnalysis.warningList.length
    ? "有注意事项，适合先少量尝试。"
    : "没有触发明显注意事项。";
  return [
    `我刚配了一杯：${names}`,
    `判断：${currentAnalysis.verdictText}`,
    `口感：${currentAnalysis.summary}`,
    `提醒：${caution}`,
    `你也试试这个小助手：${shareData.url}`
  ].join("\n");
}

function buildNotes(items, m) {
  const list = [];
  const names = items.map(i => i.name).join("、");
  list.push(`已识别 ${items.length} 种食材：${names}。`);
  if (m.creamy >= 7) list.push("质地会比较浓稠顺滑，适合做奶昔；如果想喝起来轻一点，可加水、冰块或黄瓜。");
  if (m.acid >= 6) list.push("酸度明显，能压住绿叶菜和甜菜根的生味；空腹或胃酸敏感时建议少量尝试。");
  if (m.bitter + m.earthy > m.sweet + m.acid + 2) list.push("苦味/泥土味可能偏突出，建议加莓果、苹果、橙子或少量蜂蜜来平衡。");
  if (m.sweet >= 9) list.push("整体甜度较高，口感讨喜，但不太适合当低糖饮品。");
  if (items.some(i => i.name === "燕麦" || i.name === "奇亚籽")) list.push("含燕麦或奇亚籽时放置后会继续变稠，建议现打现喝或多加一些液体。");
  if (items.some(i => i.vitaminC) && items.some(i => i.leafy)) list.push("维 C 丰富的水果搭配绿叶菜，风味更亮，也有助于提高植物性铁吸收。");
  if (items.some(i => i.spice >= 4)) list.push("辛辣调味存在感很强，建议从一小片姜或少量辣椒开始，避免盖过水果香。");
  if (items.some(i => i.fat >= 4) && m.creamy >= 8) list.push("脂肪和稠度都偏高，会更像浓厚甜品杯；用水、冰块或酸味水果能拉轻。");
  return list;
}

function buildSuggestions(items, m, warningList) {
  const list = [];
  const hasLiquid = items.some(i => ["乳制品", "植物奶", "液体"].includes(i.type));
  const hasCream = m.creamy >= 4;
  const hasBright = m.acid >= 3;
  const hasProtein = m.protein >= 3;

  if (!hasLiquid) list.push("加一种液体基底：水、无糖酸奶、牛奶、豆浆或椰子水。想清爽选水/黄瓜，想饱腹选酸奶/豆浆。");
  if (!hasBright && items.some(i => i.type === "蔬菜")) list.push("加一点柠檬、橙子、猕猴桃或莓果，能减少蔬菜生青味。");
  if (!hasCream && !items.some(i => i.name === "香蕉")) list.push("想要奶昔口感，可加半根香蕉、少量燕麦、酸奶或牛油果。");
  if (!hasProtein) list.push("如果把它当早餐，建议加入无糖酸奶、豆浆或花生酱，让饱腹感更稳。");
  if (m.sugar >= 9) list.push("把高糖水果减半，换成黄瓜、菠菜、无糖酸奶或冰块，甜度会更稳。");
  if (warningList.length) list.push("因为触发了注意事项，第一次尝试建议少量，并根据服药、肾病、结石史、控糖需求做取舍。");
  list.push(TIPS[(items.length + Math.round(m.taste / 10)) % TIPS.length]);
  return list;
}

function renderRecognized(matched, unknown) {
  recognized.innerHTML = "";
  matched.forEach(item => {
    const card = document.createElement("span");
    card.className = "ingredient-card";

    const icon = document.createElement("span");
    icon.className = "ingredient-icon";
    icon.textContent = getIngredientIcon(item);

    const main = document.createElement("span");
    main.className = "ingredient-main";

    const name = document.createElement("strong");
    name.textContent = item.name;

    const meta = document.createElement("span");
    meta.className = "ingredient-meta";
    meta.textContent = item.type;

    const tags = document.createElement("span");
    tags.className = "ingredient-tags";
    tags.textContent = item.tags.slice(0, 2).join(" · ");

    main.append(name, meta, tags);
    card.append(icon, main);
    recognized.appendChild(card);
  });
  unknown.forEach(name => {
    const card = document.createElement("span");
    card.className = "ingredient-card unknown";
    card.innerHTML = `<span class="ingredient-icon">?</span><span class="ingredient-main"><strong></strong><span class="ingredient-meta">暂未收录</span><span class="ingredient-tags">可手动判断，后续再补充</span></span>`;
    card.querySelector("strong").textContent = name;
    recognized.appendChild(card);
  });
  if (!matched.length && !unknown.length) {
    const empty = document.createElement("span");
    empty.className = "empty-state";
    empty.textContent = "还没有输入。";
    recognized.appendChild(empty);
  }
}

function renderList(node, items) {
  node.innerHTML = "";
  items.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    node.appendChild(li);
  });
}

function renderEmpty() {
  currentAnalysis = null;
  verdict.textContent = "先输入食材";
  summaryLine.textContent = "先把冰箱里的候选食材写上来，我来帮你判断这杯有没有戏。";
  score.textContent = "--";
  scoreRing.style.background = "conic-gradient(#edf3ed 360deg, #edf3ed 0deg)";
  tasteMeter.style.width = "0%";
  balanceMeter.style.width = "0%";
  riskMeter.style.width = "0%";
  renderList(notes, ["输入食材后会分析甜度、酸度、苦味、稠度和饱腹感。"]);
  renderList(warnings, ["这里会显示常见禁忌或需要谨慎的人群。"]);
  renderList(suggestions, ["这里会给出可执行的调整建议和推荐搭配。"]);
  fixTip.textContent = "分析后点一个方向，我会给你更具体的救场方案。";
}

function renderCategoryTabs() {
  const categories = ["全部", ...Array.from(new Set(INGREDIENTS.map(item => item.type)))];
  categoryTabs.innerHTML = "";
  categories.forEach(category => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = category === activeCategory ? "active" : "";
    const icon = document.createElement("span");
    icon.className = "tab-icon";
    icon.textContent = TYPE_ICONS[category] || "•";
    const text = document.createElement("span");
    text.textContent = category;
    button.append(icon, text);
    button.addEventListener("click", () => {
      activeCategory = category;
      renderCategoryTabs();
      renderKnownList();
    });
    categoryTabs.appendChild(button);
  });
}

function renderKnownList() {
  const query = foodSearch.value.trim().toLowerCase();
  const filtered = INGREDIENTS.filter(item => {
    const inCategory = activeCategory === "全部" || item.type === activeCategory;
    const names = [item.name, ...item.aliases, ...item.tags].join(" ").toLowerCase();
    return inCategory && (!query || names.includes(query));
  });

  knownList.innerHTML = "";
  filtered.forEach(item => {
    const button = document.createElement("button");
    button.className = "chip";
    button.type = "button";
    button.title = `${item.name} · ${item.type}`;
    const icon = document.createElement("span");
    icon.className = "chip-icon";
    icon.textContent = getIngredientIcon(item);
    const text = document.createElement("span");
    text.textContent = item.name;
    button.append(icon, text);
    button.addEventListener("click", () => {
      const existing = input.value.trim();
      input.value = existing ? `${existing}、${item.name}` : item.name;
      analyze();
    });
    knownList.appendChild(button);
  });
  if (!filtered.length) {
    const span = document.createElement("span");
    span.className = "tag unknown";
    span.textContent = "没有匹配的食材";
    knownList.appendChild(span);
  }
}

document.querySelectorAll("[data-example]").forEach(button => {
  button.addEventListener("click", () => {
    input.value = button.dataset.example;
    analyze();
  });
});

document.querySelectorAll("[data-fix]").forEach(button => {
  button.addEventListener("click", () => {
    if (!currentAnalysis) {
      fixTip.textContent = "先输入并分析一杯，再选想调整的方向。";
      return;
    }
    fixTip.textContent = getFixAdvice(button.dataset.fix, currentAnalysis.items, currentAnalysis.metrics);
  });
});

analyzeBtn.addEventListener("click", analyze);
input.addEventListener("input", analyze);
foodSearch.addEventListener("input", renderKnownList);
const shareData = {
  title: "健康果蔬搭配小助手",
  text: "我在用这个健康果蔬搭配小助手：输入水果、蔬菜、酸奶、燕麦等食材，就能判断搭配、口感和常见注意事项。",
  url: "https://zhuolingcheng.github.io/juice-helper/"
};

shareBtn.addEventListener("click", () => {
  const shareMessage = buildShareMessage();
  shareText.value = shareMessage;
  shareOverlay.hidden = false;
  copyText(shareMessage).then(copied => {
    shareStatus.textContent = copied
      ? "分享文案已复制。现在打开微信聊天，直接粘贴发送即可。"
      : "复制可能被浏览器限制。请长按下面文案，手动复制后粘贴到微信。";
  });
  copyShareBtn.focus();
});

shareClose.addEventListener("click", () => {
  shareOverlay.hidden = true;
});

shareOverlay.addEventListener("click", event => {
  if (event.target === shareOverlay) {
    shareOverlay.hidden = true;
  }
});

copyShareBtn.addEventListener("click", async () => {
  const shareMessage = buildShareMessage();
  shareText.value = shareMessage;
  const copied = await copyText(shareMessage);
  copyShareBtn.textContent = copied ? "已复制" : "请长按文案复制";
  shareStatus.textContent = copied
    ? "分享文案已复制。现在打开微信聊天，直接粘贴发送即可。"
    : "复制可能被浏览器限制。请长按下面文案，手动复制后粘贴到微信。";
  window.setTimeout(() => {
    copyShareBtn.textContent = "复制分享文案";
  }, 1800);
});
clearBtn.addEventListener("click", () => {
  input.value = "";
  renderRecognized([], []);
  renderEmpty();
});

renderCategoryTabs();
renderKnownList();
renderEmpty();

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {}
  }
  shareText.focus();
  shareText.select();
  try {
    return document.execCommand("copy");
  } catch {
    return false;
  }
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
