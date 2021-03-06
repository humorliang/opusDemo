/* 
二手房页面数据
*/
var tData = {
    // 位置
    model1: {
        posArea: ["鼓楼", "建邺", "秦淮", "玄武", "雨花台", "栖霞", "江宁", "浦口", "六合", "溧水", "高淳"],
        subway: ["1号线", "2号线", "3号线", "4号线", "10号线", "S1机场线", "S8号线"]
    },
    // 筛选条件
    model2: {
        term: ["售价", "面积", "房型", "用途", "权属", "楼层", "朝向", "楼龄", "类型", "电梯", "装修"],
        termCon: [
            ["80万以下", "80-100万", "100-150万", "150-200万", "200-300万", "300-500万"],
            ["60平以下", "60-90平", "90-110平", "110-130平", "130-150平", "150-200平"],
            ["一室", "二室", "三室", "四室", "四室以上"],
            ["普通住宅", "商业类", "别墅", "四合院", "其他"],
            ["商品房", "公房", "经适房", "其他"],
            ["低楼层", "中楼层", "高楼层"],
            ["朝东", "朝南", "朝西", "朝北", "南北"],
            ["5年以内", "10年以内", "15年以内", "20年以内", "20年以上"],
            ["塔楼", "板楼", "板塔结合"],
            ["有电梯", "无电梯"],
            ["精装修", "普通装修", "毛坯房"]
        ]
    },
    //信息筛选条件
    model3: {
        termList: ["满两年", "满五年", "新上", "随时看房", "不看商业类", "不看地下室", "不看车位"]
    },
    //房屋信息
    model4: {
        item: [{
                title: "满五唯一税费少 户型好 楼层好 采光充足",
                des: "江岸水城 | 2室2厅 | 73.65平米 | 南 北 | 毛坯 | 有电梯",
                floor: "中楼层(共11层)2009年建板楼 - 桥北",
                follow: "107人关注 / 共44次带看 / 18天以前发布",
                tag: ["房本满五年", "随时看房"],
                price: "158",
                area: "单价21453元/平米"
            },
            {
                title: " 翠屏湾花园城大三房 送露台 楼层好 毛坯 随时方便看房",
                des: "翠屏湾花园城 | 3室1厅 | 128.77平米 | 南 | 毛坯 | 有电梯",
                floor: "低楼层(共6层)2005年建板楼 - 将军大道",
                follow: "37人关注 / 共20次带看 / 12天以前发布",
                tag: ["房本满五年", "随时看房"],
                price: "257",
                area: "单价19959元/平米"
            },
            {
                title: " 江岸水城 居家两房 面积大 总价低 税费少房主自荐",
                des: " 江岸水城 | 2室2厅 | 80.85平米 | 南 | 精装 | 有电梯",
                floor: "高楼层(共11层)2009年建板楼 - 桥北",
                follow: "139人关注 / 共41次带看 / 1个月以前发布",
                tag: ["房本满五年", "随时看房"],
                price: "156",
                area: "单价19295元/平米"
            },
            {
                title: " 桥北两房，南北通透，满五唯一，",
                des: "威尼斯水城第五街区 | 2室2厅 | 91.3平米 | 南 北 | 其他 | 有电梯",
                floor: "低楼层(共10层)2007年建板楼 - 桥北",
                follow: "25人关注 / 共52次带看 / 3个月以前发布",
                tag: ["房本满五年", "随时看房"],
                price: "205",
                area: "单价22454元/平米"
            },
            {
                title: " 东渡国际青年城 竹山路地铁 武夷绿洲旁房主自荐",
                des: "东渡国际青年城 | 2室2厅 | 76.01平米 | 南 | 精装",
                floor: "高楼层(共25层)2009年建板塔结合 - 东山镇",
                follow: "36人关注 / 共16次带看 / 14天以前发布",
                tag: ["房本满五年", "随时看房"],
                price: "209",
                area: "单价27497元/平米"
            },
            {
                title: " 三山街 来凤里 两房，交通方便 配套完善",
                des: "来凤里 | 2室1厅 | 65.23平米 | 东南 西北 | 毛坯 | 无电梯",
                floor: "高楼层(共8层)1997年建板楼 - 来凤里",
                follow: "32人关注 / 共32次带看 / 30天以前发布",
                tag: ["房本满五年", "随时看房"],
                price: "155",
                area: "单价23763元/平米"
            },
            {
                title: " 满五年 纯毛坯3房2卫大平层 户型方正 中间楼层采光好新上",
                des: "锦绣花园紫桂园 | 3室2厅 | 117.25平米 | 南 北 | 毛坯",
                floor: "中楼层(共6层)2007年建板楼 - 麒麟镇",
                follow: "3人关注 / 共2次带看 / 2天以前发布",
                tag: ["房本满五年", "随时看房"],
                price: "220",
                area: "单价18764元/平米"
            }
        ]
    },
    // 热门问题
    model5: {
        question: [{
                problm: "离婚，有子，一套房，有房贷但已还清，可否再买一套？首付多少？",
                ans: " 1个回答 / 2017-08-10"
            },
            {
                problm: "请您帮忙回答一下贷款相关问题",
                ans: " 1个回答 / 2017-08-10"
            },
            {
                problm: "关于房贷咨询",
                ans: " 1个回答 / 2017-08-09"
            },
            {
                problm: "大神来支招啊！",
                ans: " 1个回答 / 2017-08-10"
            },
            {
                problm: "购房资格 ",
                ans: "1个回答 / 2017-08-09"
            }
        ]
    },
    //热门百科
    model6: {
        problem: [
            "买房时，底层和顶楼是否值得选择？",
            "房屋买卖，哪些消防知识需注意？",
            "以租代售是什么？以租代售的优缺点有哪些？",
            "南京怎么开具电子购房证明？",
            "如何在南京开具新购住房证明？"
        ]
    }
}