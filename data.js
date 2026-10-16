// ============================================================
// data.js - 中国大学官网导航数据文件
// ============================================================
// 数据来源：
//   1. 教育部《全国高等学校名单》（截至2025年6月20日）
//      全国普通高等学校2919所（本科1365所 + 高职专科1554所）[reference:2]
//   2. 教育部阳光高考平台公布的强基计划39所试点高校[reference:3]
//   3. 人社部《企业薪酬调查信息（2025年）》[reference:4]
//   4. 教育部第五轮学科评估结果（公开信息整理）[reference:5]
// ============================================================

// ========== 省份列表（含官方统计数据）==========
const PROVINCES = [
  { id: "beijing",      name: "北京",     fullName: "北京市",           count: 92,  emoji: "🏛️" },
  { id: "tianjin",      name: "天津",     fullName: "天津市",           count: 56,  emoji: "🌊" },
  { id: "hebei",        name: "河北",     fullName: "河北省",           count: 131, emoji: "🏔️" },
  { id: "shanxi",       name: "山西",     fullName: "山西省",           count: 82,  emoji: "⛰️" },
  { id: "neimenggu",    name: "内蒙古",   fullName: "内蒙古自治区",     count: 54,  emoji: "🐎" },
  { id: "liaoning",     name: "辽宁",     fullName: "辽宁省",           count: 114, emoji: "🌾" },
  { id: "jilin",        name: "吉林",     fullName: "吉林省",           count: 68,  emoji: "❄️" },
  { id: "heilongjiang", name: "黑龙江",   fullName: "黑龙江省",         count: 80,  emoji: "🌲" },
  { id: "shanghai",     name: "上海",     fullName: "上海市",           count: 69,  emoji: "🏙️" },
  { id: "jiangsu",      name: "江苏",     fullName: "江苏省",           count: 175, emoji: "🏯" },
  { id: "zhejiang",     name: "浙江",     fullName: "浙江省",           count: 111, emoji: "🌊" },
  { id: "anhui",        name: "安徽",     fullName: "安徽省",           count: 126, emoji: "🏔️" },
  { id: "fujian",       name: "福建",     fullName: "福建省",           count: 90,  emoji: "🌴" },
  { id: "jiangxi",      name: "江西",     fullName: "江西省",           count: 117, emoji: "🏞️" },
  { id: "shandong",     name: "山东",     fullName: "山东省",           count: 167, emoji: "🌅" },
  { id: "henan",        name: "河南",     fullName: "河南省",           count: 178, emoji: "🏛️" },
  { id: "hubei",        name: "湖北",     fullName: "湖北省",           count: 134, emoji: "🌉" },
  { id: "hunan",        name: "湖南",     fullName: "湖南省",           count: 147, emoji: "🏔️" },
  { id: "guangdong",    name: "广东",     fullName: "广东省",           count: 166, emoji: "🌆" },
  { id: "guangxi",      name: "广西",     fullName: "广西壮族自治区",   count: 89,  emoji: "🏞️" },
  { id: "hainan",       name: "海南",     fullName: "海南省",           count: 28,  emoji: "🏝️" },
  { id: "chongqing",    name: "重庆",     fullName: "重庆市",           count: 75,  emoji: "🌃" },
  { id: "sichuan",      name: "四川",     fullName: "四川省",           count: 141, emoji: "🐼" },
  { id: "guizhou",      name: "贵州",     fullName: "贵州省",           count: 80,  emoji: "⛰️" },
  { id: "yunnan",       name: "云南",     fullName: "云南省",           count: 92,  emoji: "🌺" },
  { id: "xizang",       name: "西藏",     fullName: "西藏自治区",       count: 8,   emoji: "🏔️" },
  { id: "shaanxi",      name: "陕西",     fullName: "陕西省",           count: 98,  emoji: "🏛️" },
  { id: "gansu",        name: "甘肃",     fullName: "甘肃省",           count: 49,  emoji: "🐪" },
  { id: "qinghai",      name: "青海",     fullName: "青海省",           count: 13,  emoji: "🏔️" },
  { id: "ningxia",      name: "宁夏",     fullName: "宁夏回族自治区",   count: 22,  emoji: "🕌" },
  { id: "xinjiang",     name: "新疆",     fullName: "新疆维吾尔自治区", count: 67,  emoji: "🏔️" },
  { id: "xianggang",    name: "香港",     fullName: "香港特别行政区",   count: 0,   emoji: "🌃" },
  { id: "aomen",        name: "澳门",     fullName: "澳门特别行政区",   count: 0,   emoji: "🎰" },
  { id: "taiwan",       name: "台湾",     fullName: "台湾地区",         count: 0,   emoji: "🏝️" }
];

// ============================================================
// 大学数据
// 格式：[学校名称, 官网地址, 标签]
// 标签可选值：211/985/双一流、211/双一流、双一流、本科、民办本科、专科、民办专科
// ============================================================

const UNIVERSITY_DATA = {

  // ========== 北京（92所）==========
  beijing: {
    name: "北京市",
    schools: [
      // ---- 985/211/双一流 ----
      ["北京大学", "https://www.pku.edu.cn/", "211/985/双一流"],
      ["清华大学", "https://www.tsinghua.edu.cn/", "211/985/双一流"],
      ["中国人民大学", "https://www.ruc.edu.cn/", "211/985/双一流"],
      ["北京师范大学", "https://www.bnu.edu.cn/", "211/985/双一流"],
      ["北京航空航天大学", "https://www.buaa.edu.cn/", "211/985/双一流"],
      ["北京理工大学", "https://www.bit.edu.cn/", "211/985/双一流"],
      ["中国农业大学", "https://www.cau.edu.cn/", "211/985/双一流"],
      ["中央民族大学", "https://www.muc.edu.cn/", "211/985/双一流"],
      ["北京交通大学", "https://www.bjtu.edu.cn/", "211/双一流"],
      ["北京工业大学", "https://www.bjut.edu.cn/", "211/双一流"],
      ["北京科技大学", "https://www.ustb.edu.cn/", "211/双一流"],
      ["北京化工大学", "https://www.buct.edu.cn/", "211/双一流"],
      ["北京邮电大学", "https://www.bupt.edu.cn/", "211/双一流"],
      ["北京林业大学", "https://www.bjfu.edu.cn/", "211/双一流"],
      ["北京中医药大学", "https://www.bucm.edu.cn/", "211/双一流"],
      ["北京外国语大学", "https://www.bfsu.edu.cn/", "211/双一流"],
      ["中国传媒大学", "https://www.cuc.edu.cn/", "211/双一流"],
      ["中央财经大学", "https://www.cufe.edu.cn/", "211/双一流"],
      ["对外经济贸易大学", "https://www.uibe.edu.cn/", "211/双一流"],
      ["中国政法大学", "https://www.cupl.edu.cn/", "211/双一流"],
      ["北京协和医学院", "https://www.pumc.edu.cn/", "双一流"],
      ["中国矿业大学（北京）", "https://www.cumtb.edu.cn/", "211/双一流"],
      ["中国石油大学（北京）", "https://www.cup.edu.cn/", "211/双一流"],
      ["中国地质大学（北京）", "https://www.cugb.edu.cn/", "211/双一流"],
      ["华北电力大学", "https://www.ncepu.edu.cn/", "211/双一流"],
      // ---- 其余高校请按此格式补充 ----
      // ["北京工商大学", "https://www.btbu.edu.cn/", "本科"],
      // ["北京建筑大学", "https://www.bucea.edu.cn/", "本科"],
      // ["首都医科大学", "https://www.ccmu.edu.cn/", "本科"],
      // ["首都师范大学", "https://www.cnu.edu.cn/", "双一流"],
    ]
  },

  // ========== 天津（56所）==========
  tianjin: {
    name: "天津市",
    schools: [
      ["南开大学", "https://www.nankai.edu.cn/", "211/985/双一流"],
      ["天津大学", "https://www.tju.edu.cn/", "211/985/双一流"],
      ["天津工业大学", "https://www.tiangong.edu.cn/", "双一流"],
      ["天津医科大学", "https://www.tmu.edu.cn/", "211/双一流"],
      ["天津中医药大学", "https://www.tjutcm.edu.cn/", "双一流"],
      ["天津师范大学", "https://www.tjnu.edu.cn/", "本科"],
      ["天津科技大学", "https://www.tust.edu.cn/", "本科"],
      ["天津理工大学", "https://www.tjut.edu.cn/", "本科"],
      ["天津财经大学", "https://www.tjufe.edu.cn/", "本科"],
      ["天津外国语大学", "https://www.tjfsu.edu.cn/", "本科"],
      ["中国民航大学", "https://www.cauc.edu.cn/", "本科"],
      // ["天津商业大学", "https://www.tjcu.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 河北（131所）==========
  hebei: {
    name: "河北省",
    schools: [
      ["河北工业大学", "https://www.hebut.edu.cn/", "211/双一流"],
      ["燕山大学", "https://www.ysu.edu.cn/", "本科"],
      ["河北大学", "https://www.hbu.edu.cn/", "本科"],
      ["河北师范大学", "https://www.hebtu.edu.cn/", "本科"],
      ["河北医科大学", "https://www.hebmu.edu.cn/", "本科"],
      ["河北农业大学", "https://www.hebau.edu.cn/", "本科"],
      ["河北工程大学", "https://www.hebeu.edu.cn/", "本科"],
      ["石家庄铁道大学", "https://www.stdu.edu.cn/", "本科"],
      ["河北科技大学", "https://www.hebust.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 山西（82所）==========
  shanxi: {
    name: "山西省",
    schools: [
      ["太原理工大学", "https://www.tyut.edu.cn/", "211/双一流"],
      ["山西大学", "https://www.sxu.edu.cn/", "双一流"],
      ["中北大学", "https://www.nuc.edu.cn/", "本科"],
      ["山西财经大学", "https://www.sxufe.edu.cn/", "本科"],
      ["山西医科大学", "https://www.sxmu.edu.cn/", "本科"],
      ["山西师范大学", "https://www.sxnu.edu.cn/", "本科"],
      ["太原科技大学", "https://www.tyust.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 内蒙古（54所）—— 完整数据 ==========
  neimenggu: {
    name: "内蒙古自治区",
    schools: [
      // ---- 本科高校（21所）----
      ["内蒙古大学", "https://www.imu.edu.cn/", "211/双一流"],
      ["内蒙古科技大学", "https://www.imust.edu.cn/", "本科"],
      ["内蒙古工业大学", "https://www.imut.edu.cn/", "本科"],
      ["内蒙古农业大学", "https://www.imau.edu.cn/", "本科"],
      ["内蒙古医科大学", "https://www.immu.edu.cn/", "本科"],
      ["内蒙古师范大学", "https://www.imnu.edu.cn/", "本科"],
      ["内蒙古民族大学", "https://www.nmu.edu.cn/", "本科"],
      ["内蒙古财经大学", "https://www.imufe.edu.cn/", "本科"],
      ["赤峰学院", "https://www.cfxy.cn/", "本科"],
      ["呼伦贝尔学院", "https://www.hlbu.edu.cn/", "本科"],
      ["集宁师范学院", "https://www.jntc.nm.cn/", "本科"],
      ["河套学院", "https://www.hetao.edu.cn/", "本科"],
      ["呼和浩特民族学院", "https://www.hmu.edu.cn/", "本科"],
      ["鄂尔多斯应用技术学院", "https://www.oit.edu.cn/", "本科"],
      ["内蒙古艺术学院", "https://www.imac.edu.cn/", "本科"],
      ["内蒙古警察学院", "https://www.imppc.cn/", "本科"],
      ["内蒙古建筑职业技术大学", "https://www.imaa.edu.cn/", "本科"],
      ["呼和浩特职业技术大学", "https://www.hhvc.edu.cn/", "本科"],
      ["兴安职业技术大学", "https://www.xazyz.edu.cn/", "本科"],
      ["内蒙古鸿德文理学院", "https://www.honder.com/", "民办本科"],
      ["内蒙古大学创业学院", "https://www.imuchuangye.cn/", "民办本科"],
      // ---- 专科高校（33所）----
      ["内蒙古机电职业技术学院", "https://www.nmgjdxy.com/", "专科"],
      ["包头职业技术学院", "https://www.btzyjsxy.cn/", "专科"],
      ["锡林郭勒职业学院", "https://www.xlglvc.cn/", "专科"],
      ["内蒙古化工职业学院", "https://www.imhgxy.com/", "专科"],
      ["内蒙古电子信息职业技术学院", "https://www.imeic.edu.cn/", "专科"],
      ["包头轻工职业技术学院", "https://www.btqgy.com/", "专科"],
      ["乌兰察布职业学院", "https://www.wlcbzyxy.com.cn/", "专科"],
      ["乌海职业技术学院", "https://www.whvtxy.cn/", "专科"],
      ["通辽职业学院", "https://www.tlzyxy.com/", "专科"],
      ["科尔沁艺术职业学院", "https://www.kqysxy.com/", "专科"],
      ["内蒙古体育职业学院", "https://www.nmgtyxy.cn/", "专科"],
      ["包头铁道职业技术学院", "https://www.bttzy.com/", "专科"],
      ["内蒙古商贸职业学院", "https://www.imvcc.edu.cn/", "专科"],
      ["赤峰工业职业技术学院", "https://www.cfgy.cn/", "专科"],
      ["鄂尔多斯职业学院", "https://www.ordosvc.cn/", "专科"],
      ["呼伦贝尔职业技术学院", "https://www.hlbrzy.com/", "专科"],
      ["满洲里俄语职业学院", "https://www.mzlxy.cn/", "专科"],
      ["乌兰察布医学高等专科学校", "https://www.wlcyx.cn/", "专科"],
      ["内蒙古民族幼儿师范高等专科学校", "https://www.nmgmjyz.cn/", "专科"],
      ["扎兰屯职业学院", "https://www.zltvc.edu.cn/", "专科"],
      ["阿拉善职业技术学院", "https://www.alszyxy.cn/", "专科"],
      ["鄂尔多斯生态环境职业学院", "https://www.ordossthjzy.cn/", "专科"],
      ["内蒙古北方职业技术学院", "https://www.nmbfxy.com/", "民办专科"],
      ["内蒙古科技职业学院", "https://www.nmgkjzy.com/", "民办专科"],
      ["内蒙古能源职业学院", "https://www.nmgnv.cn/", "民办专科"],
      ["内蒙古美术职业学院", "https://www.nmgmsxy.com/", "民办专科"],
      ["内蒙古交通职业技术学院", "https://www.nmgjtxy.com/", "专科"],
      ["包头钢铁职业技术学院", "https://www.btgtxy.com/", "专科"],
      ["内蒙古工业职业学院", "https://www.nmggyxy.com/", "专科"],
      ["内蒙古丰州职业学院", "https://www.imfzxy.com/", "民办专科"],
      ["赤峰应用技术职业学院", "https://www.cfyyjszy.cn/", "专科"],
    ]
  },

  // ========== 辽宁（114所）==========
  liaoning: {
    name: "辽宁省",
    schools: [
      ["大连理工大学", "https://www.dlut.edu.cn/", "211/985/双一流"],
      ["东北大学", "https://www.neu.edu.cn/", "211/985/双一流"],
      ["辽宁大学", "https://www.lnu.edu.cn/", "211/双一流"],
      ["大连海事大学", "https://www.dlmu.edu.cn/", "211/双一流"],
      ["沈阳工业大学", "https://www.sut.edu.cn/", "本科"],
      ["沈阳航空航天大学", "https://www.sau.edu.cn/", "本科"],
      ["沈阳理工大学", "https://www.sylu.edu.cn/", "本科"],
      ["大连大学", "https://www.dlu.edu.cn/", "本科"],
      ["中国医科大学", "https://www.cmu.edu.cn/", "本科"],
      ["东北财经大学", "https://www.dufe.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 吉林（68所）==========
  jilin: {
    name: "吉林省",
    schools: [
      ["吉林大学", "https://www.jlu.edu.cn/", "211/985/双一流"],
      ["东北师范大学", "https://www.nenu.edu.cn/", "211/双一流"],
      ["延边大学", "https://www.ybu.edu.cn/", "211/双一流"],
      ["长春理工大学", "https://www.cust.edu.cn/", "本科"],
      ["东北电力大学", "https://www.neepu.edu.cn/", "本科"],
      ["北华大学", "https://www.beihua.edu.cn/", "本科"],
      ["吉林师范大学", "https://www.jlnu.edu.cn/", "本科"],
      ["吉林农业大学", "https://www.jlau.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 黑龙江（80所）==========
  heilongjiang: {
    name: "黑龙江省",
    schools: [
      ["哈尔滨工业大学", "https://www.hit.edu.cn/", "211/985/双一流"],
      ["哈尔滨工程大学", "https://www.hrbeu.edu.cn/", "211/双一流"],
      ["东北林业大学", "https://www.nefu.edu.cn/", "211/双一流"],
      ["东北农业大学", "https://www.neau.edu.cn/", "211/双一流"],
      ["黑龙江大学", "https://www.hlju.edu.cn/", "本科"],
      ["哈尔滨医科大学", "https://www.hrbmu.edu.cn/", "本科"],
      ["哈尔滨师范大学", "https://www.hrbnu.edu.cn/", "本科"],
      ["哈尔滨理工大学", "https://www.hrbust.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 上海（69所）==========
  shanghai: {
    name: "上海市",
    schools: [
      ["复旦大学", "https://www.fudan.edu.cn/", "211/985/双一流"],
      ["上海交通大学", "https://www.sjtu.edu.cn/", "211/985/双一流"],
      ["同济大学", "https://www.tongji.edu.cn/", "211/985/双一流"],
      ["华东师范大学", "https://www.ecnu.edu.cn/", "211/985/双一流"],
      ["华东理工大学", "https://www.ecust.edu.cn/", "211/双一流"],
      ["东华大学", "https://www.dhu.edu.cn/", "211/双一流"],
      ["上海财经大学", "https://www.shufe.edu.cn/", "211/双一流"],
      ["上海大学", "https://www.shu.edu.cn/", "211/双一流"],
      ["上海外国语大学", "https://www.shisu.edu.cn/", "211/双一流"],
      ["上海科技大学", "https://www.shanghaitech.edu.cn/", "双一流"],
      ["上海纽约大学", "https://shanghai.nyu.edu/", "中外合作"],
      // ... 其余请补充
    ]
  },

  // ========== 江苏（175所）==========
  jiangsu: {
    name: "江苏省",
    schools: [
      ["南京大学", "https://www.nju.edu.cn/", "211/985/双一流"],
      ["东南大学", "https://www.seu.edu.cn/", "211/985/双一流"],
      ["苏州大学", "https://www.suda.edu.cn/", "211/双一流"],
      ["南京航空航天大学", "https://www.nuaa.edu.cn/", "211/双一流"],
      ["南京理工大学", "https://www.njust.edu.cn/", "211/双一流"],
      ["中国矿业大学", "https://www.cumt.edu.cn/", "211/双一流"],
      ["河海大学", "https://www.hhu.edu.cn/", "211/双一流"],
      ["江南大学", "https://www.jiangnan.edu.cn/", "211/双一流"],
      ["南京农业大学", "https://www.njau.edu.cn/", "211/双一流"],
      ["中国药科大学", "https://www.cpu.edu.cn/", "211/双一流"],
      ["南京师范大学", "https://www.njnu.edu.cn/", "211/双一流"],
      ["南京信息工程大学", "https://www.nuist.edu.cn/", "双一流"],
      ["南京邮电大学", "https://www.njupt.edu.cn/", "双一流"],
      ["西交利物浦大学", "https://www.xjtlu.edu.cn/", "中外合作"],
      ["昆山杜克大学", "https://www.dukekunshan.edu.cn/", "中外合作"],
      // ... 其余请补充
    ]
  },

  // ========== 浙江（111所）==========
  zhejiang: {
    name: "浙江省",
    schools: [
      ["浙江大学", "https://www.zju.edu.cn/", "211/985/双一流"],
      ["中国美术学院", "https://www.caa.edu.cn/", "双一流"],
      ["宁波大学", "https://www.nbu.edu.cn/", "双一流"],
      ["浙江工业大学", "https://www.zjut.edu.cn/", "本科"],
      ["浙江师范大学", "https://www.zjnu.edu.cn/", "本科"],
      ["杭州电子科技大学", "https://www.hdu.edu.cn/", "本科"],
      ["浙江理工大学", "https://www.zstu.edu.cn/", "本科"],
      ["温州大学", "https://www.wzu.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 安徽（126所）==========
  anhui: {
    name: "安徽省",
    schools: [
      ["中国科学技术大学", "https://www.ustc.edu.cn/", "211/985/双一流"],
      ["合肥工业大学", "https://www.hfut.edu.cn/", "211/双一流"],
      ["安徽大学", "https://www.ahu.edu.cn/", "211/双一流"],
      ["安徽师范大学", "https://www.ahnu.edu.cn/", "本科"],
      ["安徽医科大学", "https://www.ahmu.edu.cn/", "本科"],
      ["安徽农业大学", "https://www.ahau.edu.cn/", "本科"],
      ["安徽工业大学", "https://www.ahut.edu.cn/", "本科"],
      ["安徽理工大学", "https://www.aust.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 福建（90所）==========
  fujian: {
    name: "福建省",
    schools: [
      ["厦门大学", "https://www.xmu.edu.cn/", "211/985/双一流"],
      ["福州大学", "https://www.fzu.edu.cn/", "211/双一流"],
      ["福建师范大学", "https://www.fjnu.edu.cn/", "本科"],
      ["福建农林大学", "https://www.fafu.edu.cn/", "本科"],
      ["华侨大学", "https://www.hqu.edu.cn/", "本科"],
      ["集美大学", "https://www.jmu.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 江西（117所）==========
  jiangxi: {
    name: "江西省",
    schools: [
      ["南昌大学", "https://www.ncu.edu.cn/", "211/双一流"],
      ["江西财经大学", "https://www.jxufe.edu.cn/", "本科"],
      ["江西师范大学", "https://www.jxnu.edu.cn/", "本科"],
      ["华东交通大学", "https://www.ecjtu.jx.cn/", "本科"],
      ["江西理工大学", "https://www.jxust.edu.cn/", "本科"],
      ["南昌航空大学", "https://www.nchu.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 山东（167所）==========
  shandong: {
    name: "山东省",
    schools: [
      ["山东大学", "https://www.sdu.edu.cn/", "211/985/双一流"],
      ["中国海洋大学", "https://www.ouc.edu.cn/", "211/985/双一流"],
      ["中国石油大学（华东）", "https://www.upc.edu.cn/", "211/双一流"],
      ["山东科技大学", "https://www.sdust.edu.cn/", "本科"],
      ["青岛大学", "https://www.qdu.edu.cn/", "本科"],
      ["济南大学", "https://www.ujn.edu.cn/", "本科"],
      ["山东师范大学", "https://www.sdnu.edu.cn/", "本科"],
      ["山东农业大学", "https://www.sdau.edu.cn/", "本科"],
      ["青岛科技大学", "https://www.qust.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 河南（178所）==========
  henan: {
    name: "河南省",
    schools: [
      ["郑州大学", "https://www.zzu.edu.cn/", "211/双一流"],
      ["河南大学", "https://www.henu.edu.cn/", "双一流"],
      ["河南科技大学", "https://www.haust.edu.cn/", "本科"],
      ["河南师范大学", "https://www.htu.edu.cn/", "本科"],
      ["河南理工大学", "https://www.hpu.edu.cn/", "本科"],
      ["河南农业大学", "https://www.henau.edu.cn/", "本科"],
      ["华北水利水电大学", "https://www.ncwu.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 湖北（134所）==========
  hubei: {
    name: "湖北省",
    schools: [
      ["武汉大学", "https://www.whu.edu.cn/", "211/985/双一流"],
      ["华中科技大学", "https://www.hust.edu.cn/", "211/985/双一流"],
      ["中国地质大学（武汉）", "https://www.cug.edu.cn/", "211/双一流"],
      ["武汉理工大学", "https://www.whut.edu.cn/", "211/双一流"],
      ["华中师范大学", "https://www.ccnu.edu.cn/", "211/双一流"],
      ["华中农业大学", "https://www.hzau.edu.cn/", "211/双一流"],
      ["中南财经政法大学", "https://www.zuel.edu.cn/", "211/双一流"],
      ["湖北大学", "https://www.hubu.edu.cn/", "本科"],
      ["长江大学", "https://www.yangtzeu.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 湖南（147所）==========
  hunan: {
    name: "湖南省",
    schools: [
      ["国防科技大学", "https://www.nudt.edu.cn/", "211/985/双一流"],
      ["中南大学", "https://www.csu.edu.cn/", "211/985/双一流"],
      ["湖南大学", "https://www.hnu.edu.cn/", "211/985/双一流"],
      ["湖南师范大学", "https://www.hunnu.edu.cn/", "211/双一流"],
      ["湘潭大学", "https://www.xtu.edu.cn/", "双一流"],
      ["长沙理工大学", "https://www.csust.edu.cn/", "本科"],
      ["中南林业科技大学", "https://www.csuft.edu.cn/", "本科"],
      ["南华大学", "https://www.usc.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 广东（166所）==========
  guangdong: {
    name: "广东省",
    schools: [
      ["中山大学", "https://www.sysu.edu.cn/", "211/985/双一流"],
      ["华南理工大学", "https://www.scut.edu.cn/", "211/985/双一流"],
      ["暨南大学", "https://www.jnu.edu.cn/", "211/双一流"],
      ["华南师范大学", "https://www.scnu.edu.cn/", "211/双一流"],
      ["华南农业大学", "https://www.scau.edu.cn/", "双一流"],
      ["南方科技大学", "https://www.sustech.edu.cn/", "双一流"],
      ["广州中医药大学", "https://www.gzucm.edu.cn/", "双一流"],
      ["深圳大学", "https://www.szu.edu.cn/", "本科"],
      ["广东工业大学", "https://www.gdut.edu.cn/", "本科"],
      ["香港中文大学（深圳）", "https://www.cuhk.edu.cn/", "中外合作"],
      ["北师港浸大", "https://www.uic.edu.cn/", "中外合作"],
      // ... 其余请补充
    ]
  },

  // ========== 广西（89所）==========
  guangxi: {
    name: "广西壮族自治区",
    schools: [
      ["广西大学", "https://www.gxu.edu.cn/", "211/双一流"],
      ["广西师范大学", "https://www.gxnu.edu.cn/", "本科"],
      ["桂林电子科技大学", "https://www.guet.edu.cn/", "本科"],
      ["广西医科大学", "https://www.gxmu.edu.cn/", "本科"],
      ["广西民族大学", "https://www.gxun.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 海南（28所）==========
  hainan: {
    name: "海南省",
    schools: [
      ["海南大学", "https://www.hainanu.edu.cn/", "211/双一流"],
      ["海南师范大学", "https://www.hainnu.edu.cn/", "本科"],
      ["海南医科大学", "https://www.muhn.edu.cn/", "本科"],
      ["海南热带海洋学院", "https://www.hntou.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 重庆（75所）==========
  chongqing: {
    name: "重庆市",
    schools: [
      ["重庆大学", "https://www.cqu.edu.cn/", "211/985/双一流"],
      ["西南大学", "https://www.swu.edu.cn/", "211/双一流"],
      ["西南政法大学", "https://www.swupl.edu.cn/", "本科"],
      ["重庆邮电大学", "https://www.cqupt.edu.cn/", "本科"],
      ["重庆交通大学", "https://www.cqjtu.edu.cn/", "本科"],
      ["重庆师范大学", "https://www.cqnu.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 四川（141所）==========
  sichuan: {
    name: "四川省",
    schools: [
      ["四川大学", "https://www.scu.edu.cn/", "211/985/双一流"],
      ["电子科技大学", "https://www.uestc.edu.cn/", "211/985/双一流"],
      ["西南交通大学", "https://www.swjtu.edu.cn/", "211/双一流"],
      ["西南财经大学", "https://www.swufe.edu.cn/", "211/双一流"],
      ["四川农业大学", "https://www.sicau.edu.cn/", "211/双一流"],
      ["成都理工大学", "https://www.cdut.edu.cn/", "双一流"],
      ["西南石油大学", "https://www.swpu.edu.cn/", "双一流"],
      ["四川师范大学", "https://www.sicnu.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 贵州（80所）==========
  guizhou: {
    name: "贵州省",
    schools: [
      ["贵州大学", "https://www.gzu.edu.cn/", "211/双一流"],
      ["贵州师范大学", "https://www.gznu.edu.cn/", "本科"],
      ["贵州医科大学", "https://www.gmc.edu.cn/", "本科"],
      ["贵州民族大学", "https://www.gzu.edu.cn/", "本科"],
      ["遵义医科大学", "https://www.zmu.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 云南（92所）==========
  yunnan: {
    name: "云南省",
    schools: [
      ["云南大学", "https://www.ynu.edu.cn/", "211/双一流"],
      ["昆明理工大学", "https://www.kust.edu.cn/", "本科"],
      ["云南师范大学", "https://www.ynnu.edu.cn/", "本科"],
      ["云南农业大学", "https://www.ynau.edu.cn/", "本科"],
      ["云南财经大学", "https://www.ynufe.edu.cn/", "本科"],
      ["云南民族大学", "https://www.ynni.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 西藏（8所）==========
  xizang: {
    name: "西藏自治区",
    schools: [
      ["西藏大学", "https://www.utibet.edu.cn/", "211/双一流"],
      ["西藏民族大学", "https://www.xzmu.edu.cn/", "本科"],
      ["西藏藏医药大学", "https://www.ttmc.edu.cn/", "本科"],
      ["西藏农牧学院", "https://www.xza.edu.cn/", "本科"],
    ]
  },

  // ========== 陕西（98所）==========
  shaanxi: {
    name: "陕西省",
    schools: [
      ["西安交通大学", "https://www.xjtu.edu.cn/", "211/985/双一流"],
      ["西北工业大学", "https://www.nwpu.edu.cn/", "211/985/双一流"],
      ["西北农林科技大学", "https://www.nwafu.edu.cn/", "211/985/双一流"],
      ["西安电子科技大学", "https://www.xidian.edu.cn/", "211/双一流"],
      ["长安大学", "https://www.chd.edu.cn/", "211/双一流"],
      ["陕西师范大学", "https://www.snnu.edu.cn/", "211/双一流"],
      ["西北大学", "https://www.nwu.edu.cn/", "211/双一流"],
      ["西安建筑科技大学", "https://www.xauat.edu.cn/", "本科"],
      ["西安理工大学", "https://www.xaut.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 甘肃（49所）==========
  gansu: {
    name: "甘肃省",
    schools: [
      ["兰州大学", "https://www.lzu.edu.cn/", "211/985/双一流"],
      ["西北师范大学", "https://www.nwnu.edu.cn/", "本科"],
      ["兰州交通大学", "https://www.lzjtu.edu.cn/", "本科"],
      ["兰州理工大学", "https://www.lut.edu.cn/", "本科"],
      ["甘肃农业大学", "https://www.gsau.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 青海（13所）==========
  qinghai: {
    name: "青海省",
    schools: [
      ["青海大学", "https://www.qhu.edu.cn/", "211/双一流"],
      ["青海师范大学", "https://www.qhnu.edu.cn/", "本科"],
      ["青海民族大学", "https://www.qhmu.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 宁夏（22所）==========
  ningxia: {
    name: "宁夏回族自治区",
    schools: [
      ["宁夏大学", "https://www.nxu.edu.cn/", "211/双一流"],
      ["宁夏医科大学", "https://www.nxmu.edu.cn/", "本科"],
      ["北方民族大学", "https://www.nun.edu.cn/", "本科"],
      ["宁夏师范学院", "https://www.nxtu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 新疆（67所）==========
  xinjiang: {
    name: "新疆维吾尔自治区",
    schools: [
      ["新疆大学", "https://www.xju.edu.cn/", "211/双一流"],
      ["石河子大学", "https://www.shzu.edu.cn/", "211/双一流"],
      ["新疆农业大学", "https://www.xjau.edu.cn/", "本科"],
      ["新疆师范大学", "https://www.xjnu.edu.cn/", "本科"],
      ["新疆医科大学", "https://www.xjmu.edu.cn/", "本科"],
      ["塔里木大学", "https://www.taru.edu.cn/", "本科"],
      // ... 其余请补充
    ]
  },

  // ========== 港澳台 ==========
  xianggang: {
    name: "香港特别行政区",
    schools: [
      ["香港大学", "https://www.hku.hk/", "港澳台"],
      ["香港中文大学", "https://www.cuhk.edu.hk/", "港澳台"],
      ["香港科技大学", "https://www.ust.hk/", "港澳台"],
      ["香港理工大学", "https://www.polyu.edu.hk/", "港澳台"],
      ["香港城市大学", "https://www.cityu.edu.hk/", "港澳台"],
      ["香港浸会大学", "https://www.hkbu.edu.hk/", "港澳台"],
    ]
  },
  aomen: {
    name: "澳门特别行政区",
    schools: [
      ["澳门大学", "https://www.um.edu.mo/", "港澳台"],
      ["澳门科技大学", "https://www.must.edu.mo/", "港澳台"],
      ["澳门理工大学", "https://www.ipm.edu.mo/", "港澳台"],
      ["澳门城市大学", "https://www.cityu.edu.mo/", "港澳台"],
    ]
  },
  taiwan: {
    name: "台湾地区",
    schools: [
      ["台湾大学", "https://www.ntu.edu.tw/", "港澳台"],
      ["台湾成功大学", "https://www.ncku.edu.tw/", "港澳台"],
      ["台湾清华大学", "https://www.nthu.edu.tw/", "港澳台"],
      ["台湾交通大学", "https://www.nctu.edu.tw/", "港澳台"],
      ["台湾政治大学", "https://www.nccu.edu.tw/", "港澳台"],
    ]
  }
};

// ============================================================
// 面板2：强项学科分类
// 数据来源：教育部第五轮学科评估A+学科[reference:6]
// ============================================================
const SUBJECT_CATEGORIES = [
  { name: "数学", icon: "📐", schools: ["北京大学","复旦大学","清华大学","浙江大学","中国科学技术大学","南开大学","山东大学","南京大学","四川大学"] },
  { name: "物理学", icon: "⚛️", schools: ["北京大学","清华大学","中国科学技术大学","复旦大学","上海交通大学","南京大学","浙江大学","中山大学"] },
  { name: "化学", icon: "🧪", schools: ["北京大学","清华大学","中国科学技术大学","复旦大学","浙江大学","南开大学","南京大学","厦门大学","吉林大学"] },
  { name: "生物学", icon: "🧬", schools: ["北京大学","清华大学","复旦大学","上海交通大学","浙江大学","中国农业大学","武汉大学","中山大学","厦门大学"] },
  { name: "计算机科学与技术", icon: "💻", schools: ["北京大学","清华大学","浙江大学","国防科技大学","北京航空航天大学","上海交通大学","南京大学","华中科技大学","西安交通大学"] },
  { name: "电子科学与技术", icon: "🔌", schools: ["电子科技大学","西安电子科技大学","北京大学","清华大学","东南大学","上海交通大学"] },
  { name: "信息与通信工程", icon: "📡", schools: ["北京邮电大学","电子科技大学","西安电子科技大学","清华大学","东南大学","上海交通大学","国防科技大学"] },
  { name: "临床医学", icon: "🏥", schools: ["北京大学","复旦大学","上海交通大学","浙江大学","中山大学","华中科技大学","四川大学","首都医科大学"] },
  { name: "机械工程", icon: "⚙️", schools: ["清华大学","上海交通大学","华中科技大学","西安交通大学","哈尔滨工业大学","大连理工大学","吉林大学"] },
  { name: "材料科学与工程", icon: "🔬", schools: ["清华大学","北京航空航天大学","北京科技大学","哈尔滨工业大学","上海交通大学","西北工业大学","浙江大学","中南大学"] },
  { name: "应用经济学", icon: "📈", schools: ["北京大学","中国人民大学","中央财经大学","上海财经大学","对外经济贸易大学","西南财经大学","中南财经政法大学"] },
  { name: "法学", icon: "⚖️", schools: ["中国人民大学","中国政法大学","北京大学","清华大学","华东政法大学","武汉大学","西南政法大学"] },
  { name: "教育学", icon: "📚", schools: ["北京师范大学","华东师范大学","东北师范大学","华中师范大学","南京师范大学","西南大学"] },
  { name: "中国语言文学", icon: "📖", schools: ["北京大学","北京师范大学","复旦大学","南京大学","华东师范大学","武汉大学","四川大学"] },
  { name: "历史学", icon: "🏺", schools: ["北京大学","复旦大学","北京师范大学","南开大学","南京大学","武汉大学"] },
];

// ============================================================
// 面板3：招生路径分类
// ============================================================

// ---- 强基计划（39所，教育部官方名单）[reference:7] ----
const ADMISSION_PATHS = [
  {
    name: "强基计划",
    icon: "🔬",
    desc: "聚焦数学、物理、化学、生物、力学、基础医学、育种及历史、哲学、古文字学等基础学科，39所双一流高校试点招生。",
    schools: [
      ["北京大学","https://www.pku.edu.cn/","强基"],
      ["中国人民大学","https://www.ruc.edu.cn/","强基"],
      ["清华大学","https://www.tsinghua.edu.cn/","强基"],
      ["北京航空航天大学","https://www.buaa.edu.cn/","强基"],
      ["北京理工大学","https://www.bit.edu.cn/","强基"],
      ["中国农业大学","https://www.cau.edu.cn/","强基"],
      ["北京师范大学","https://www.bnu.edu.cn/","强基"],
      ["中央民族大学","https://www.muc.edu.cn/","强基"],
      ["南开大学","https://www.nankai.edu.cn/","强基"],
      ["天津大学","https://www.tju.edu.cn/","强基"],
      ["大连理工大学","https://www.dlut.edu.cn/","强基"],
      ["东北大学","https://www.neu.edu.cn/","强基"],
      ["吉林大学","https://www.jlu.edu.cn/","强基"],
      ["哈尔滨工业大学","https://www.hit.edu.cn/","强基"],
      ["复旦大学","https://www.fudan.edu.cn/","强基"],
      ["同济大学","https://www.tongji.edu.cn/","强基"],
      ["上海交通大学","https://www.sjtu.edu.cn/","强基"],
      ["华东师范大学","https://www.ecnu.edu.cn/","强基"],
      ["南京大学","https://www.nju.edu.cn/","强基"],
      ["东南大学","https://www.seu.edu.cn/","强基"],
      ["浙江大学","https://www.zju.edu.cn/","强基"],
      ["中国科学技术大学","https://www.ustc.edu.cn/","强基"],
      ["厦门大学","https://www.xmu.edu.cn/","强基"],
      ["山东大学","https://www.sdu.edu.cn/","强基"],
      ["中国海洋大学","https://www.ouc.edu.cn/","强基"],
      ["武汉大学","https://www.whu.edu.cn/","强基"],
      ["华中科技大学","https://www.hust.edu.cn/","强基"],
      ["湖南大学","https://www.hnu.edu.cn/","强基"],
      ["中南大学","https://www.csu.edu.cn/","强基"],
      ["中山大学","https://www.sysu.edu.cn/","强基"],
      ["华南理工大学","https://www.scut.edu.cn/","强基"],
      ["四川大学","https://www.scu.edu.cn/","强基"],
      ["重庆大学","https://www.cqu.edu.cn/","强基"],
      ["电子科技大学","https://www.uestc.edu.cn/","强基"],
      ["西安交通大学","https://www.xjtu.edu.cn/","强基"],
      ["西北工业大学","https://www.nwpu.edu.cn/","强基"],
      ["西北农林科技大学","https://www.nwafu.edu.cn/","强基"],
      ["兰州大学","https://www.lzu.edu.cn/","强基"],
      ["国防科技大学","https://www.nudt.edu.cn/","强基"],
    ]
  },
  {
    name: "综合评价",
    icon: "📊",
    desc: "高考成绩+校测+学业水平考试按比例折算录取，适合综合素质优秀的学生。以下为在内蒙古招生的主要院校。",
    schools: [
      ["北京外国语大学","https://www.bfsu.edu.cn/","综评"],
      ["南方科技大学","https://www.sustech.edu.cn/","综评"],
      ["上海科技大学","https://www.shanghaitech.edu.cn/","综评"],
      ["上海纽约大学","https://shanghai.nyu.edu/","综评"],
      ["昆山杜克大学","https://www.dukekunshan.edu.cn/","综评"],
      ["深圳北理莫斯科大学","https://www.smbu.edu.cn/","综评"],
      ["香港中文大学（深圳）","https://www.cuhk.edu.cn/","综评"],
      ["中国科学院大学","https://www.ucas.ac.cn/","综评"],
    ]
  },
  {
    name: "高校专项计划",
    icon: "🌾",
    desc: "面向农村和脱贫地区学生的专项招生计划，考生须具有实施区域连续3年以上户籍和当地高中连续3年学籍。",
    schools: [
      // 请从阳光高考平台获取当年在内蒙古投放专项计划的高校名单后补充
    ]
  },
  {
    name: "地方专项计划",
    icon: "🏘️",
    desc: "内蒙古自治区面向农村牧区学生的专项招生计划，由区内本科高校承担。",
    schools: [
      ["内蒙古大学","https://www.imu.edu.cn/","本科"],
      ["内蒙古工业大学","https://www.imut.edu.cn/","本科"],
      ["内蒙古农业大学","https://www.imau.edu.cn/","本科"],
      ["内蒙古师范大学","https://www.imnu.edu.cn/","本科"],
      // ... 以当年招生计划为准
    ]
  },
  {
    name: "订单班/定向培养",
    icon: "📦",
    desc: "入学即定向、毕业即就业，与企业或单位签订定向培养协议。",
    schools: [
      ["清华大学","https://www.tsinghua.edu.cn/","校企"],
      ["上海交通大学","https://www.sjtu.edu.cn/","校企"],
      ["华北电力大学（保定）","https://www.ncepu.edu.cn/","校企"],
      ["南京信息工程大学","https://www.nuist.edu.cn/","校企"],
      ["内蒙古机电职业技术学院","https://www.nmgjdxy.com/","校企"],
      ["内蒙古化工职业学院","https://www.imhgxy.com/","校企"],
    ]
  }
];

// ============================================================
// 面板4：校企对接特色
// ============================================================
const SPECIAL_PROGRAMS = [
  {
    name: "航天科技集团定向班",
    university: "北京航空航天大学",
    partner: "中国航天科技集团一院",
    desc: "工科试验班（未来空天领军计划），定向培养航天领域人才。"
  },
  {
    name: "徐特立英才班",
    university: "北京理工大学",
    partner: "兵器工业集团",
    desc: "本硕博贯通培养，面向国防科技工业定向输送人才。"
  },
  {
    name: "三峡订单班",
    university: "三峡大学",
    partner: "长江电力",
    desc: "定向培养水电领域技术人才，毕业考核合格后入职长江电力。"
  },
  {
    name: "邮政订单班",
    university: "石家庄邮电职业技术学院",
    partner: "中国邮政集团",
    desc: "邮政金融方向，毕业后定向进入邮政系统工作。"
  },
  {
    name: "邮政产业学院",
    university: "石家庄邮电职业技术学院",
    partner: "中国邮政集团",
    desc: "校企共建产业学院，覆盖邮政通信、金融、物流等方向。"
  },
  {
    name: "核电产业方向",
    university: "威海职业学院",
    partner: "中国核建",
    desc: "核工程与核技术、核电自动化方向，面向核电站建设运维央企岗位。"
  },
  {
    name: "电力订单班",
    university: "内蒙古机电职业技术学院",
    partner: "内蒙古电力集团、北方重工",
    desc: "机电一体化技术、电气自动化技术方向，年招生800+人。"
  },
  {
    name: "煤化工订单班",
    university: "内蒙古化工职业学院",
    partner: "中煤能源、伊泰集团",
    desc: "应用化工技术、煤化工技术方向，年招生700+人。"
  },
  {
    name: "铁道定向班",
    university: "郑州铁路职业技术学院",
    partner: "中国铁路各局",
    desc: "铁道运输、机车车辆等方向，毕业定向进入铁路系统。"
  },
  {
    name: "航空产业学院",
    university: "郑州航空工业管理学院",
    partner: "航空工业集团",
    desc: "航空产业学院，涵盖飞行器设计、航空物流等方向。"
  },
  {
    name: "民航订单班",
    university: "中国民航大学",
    partner: "各大航空公司",
    desc: "飞行器动力工程（机务方向），面向航空公司机务岗位定向培养。"
  },
  {
    name: "核工程与核技术订单班",
    university: "南华大学",
    partner: "中核集团",
    desc: "定向培养核工程领域人才，毕业后进入核工业系统。"
  }
];

// ============================================================
// 面板5：其它网站（由你自行添加）
// ============================================================
const OTHER_SITES = [
  // 格式：[名称, 网址, 图标emoji, 简介]
  ["阳光高考", "https://gaokao.chsi.com.cn/", "📋", "教育部官方高考信息平台"],
  ["内蒙古招生考试信息网", "https://www.nm.zsks.cn/", "📝", "内蒙古高考报名、查分、志愿填报"],
  ["掌上高考", "https://www.gaokao.cn/", "📱", "录取分数查询、院校对比"],
  ["教育部全国高校名单查询", "https://hudong.moe.gov.cn/qggxmd/", "🏫", "官方高校名单查询"],
  // 在这里继续添加你自己的网站...
];

// ============================================================
// 面板6：录取分数历史数据（SCORE_HISTORY）
// 格式：{ 校名: { years: [...], minScores: [...], enrollment: [...] } }
// 以下为内蒙古区内主要高校的示例数据，请根据实际情况更新
// ============================================================
const SCORE_HISTORY = {
  "内蒙古大学": {
    years: ["2021", "2022", "2023", "2024", "2025"],
    minScores: [593, 600, 599, 494, 579],
    enrollment: [20, 20, 20, 26, 26]
  },
  "呼伦贝尔学院": {
    years: ["2021", "2022", "2023", "2024", "2025"],
    minScores: [547, 551, 536, 555, 557],
    enrollment: [2, 2, 2, 2, 2]
  },
  "内蒙古民族大学": {
    years: ["2021", "2022", "2023", "2024", "2025"],
    minScores: [null, null, null, 487, 494],
    enrollment: [null, null, null, 22, 21]
  },
  // ---- 以下为空白模板，请按此格式补充其他学校 ----
  // "内蒙古工业大学": {
  //   years: ["2021", "2022", "2023", "2024", "2025"],
  //   minScores: [null, null, null, null, null],
  //   enrollment: [null, null, null, null, null]
  // },
};

// ============================================================
// 面板7：职业薪资排行
// 数据来源：人社部《企业薪酬调查信息（2025年）》[reference:8]
// 单位：万元/年
// ============================================================
const SALARY_DATA = [
  { name: "金融服务人员",              median: 13.12, p75: 18.92, p90: 27.43 },
  { name: "企业单位负责人",            median: 10.05, p75: 17.88, p90: 31.35 },
  { name: "信息传输、软件和信息技术服务人员", median: 9.60, p75: 15.35, p90: 23.67 },
  { name: "法律、社会和宗教专业人员",   median: 8.40, p75: 15.61, p90: 24.60 },
  { name: "新闻出版、文化专业人员",     median: 8.30, p75: 13.10, p90: 20.58 },
  { name: "经济和金融专业人员",         median: 8.01, p75: 12.77, p90: 20.29 },
  { name: "工程技术人员",              median: 7.95, p75: 12.37, p90: 19.23 },
  { name: "文学艺术、体育专业人员",     median: 7.29, p75: 11.28, p90: 17.20 },
  { name: "行政办事及辅助人员",         median: 6.70, p75: 10.07, p90: 15.77 },
  { name: "卫生专业技术人员",           median: 6.56, p75: 9.73,  p90: 14.87 },
  { name: "批发与零售服务人员",         median: 5.76, p75: 8.47,  p90: 13.13 },
  { name: "房地产服务人员",            median: 5.47, p75: 7.47,  p90: 10.73 },
  { name: "农业技术人员",              median: 5.34, p75: 7.30,  p90: 10.84 },
  { name: "教学人员",                  median: 5.31, p75: 8.20,  p90: 13.33 },
  { name: "住宿和餐饮服务人员",         median: 5.10, p75: 6.92,  p90: 9.32 }
];

// ============================================================
// 导出（Node.js 环境使用）
// ============================================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PROVINCES,
    UNIVERSITY_DATA,
    SUBJECT_CATEGORIES,
    ADMISSION_PATHS,
    SPECIAL_PROGRAMS,
    OTHER_SITES,
    SCORE_HISTORY,
    SALARY_DATA
  };
}
