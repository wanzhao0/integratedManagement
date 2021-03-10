export const form = {
    select: "", //string	否	 搜索框
    landAcquisitionType: "",//String 否	 土地获取方式(关联数据字典)
    establishType: "", //String	否 立项方式(关联数据字典)
    engineeringType: "",//String 否	工程类型(关联数据字典)
    isMajor: "",// String	否	是否管委会重大项目(0 否，1: 是)
    projectLevel: "", //String	否	项目层级(关联数据字典)
    projectStage: "",// String	否 所处阶段(1: 项目储备；2: 前期审批;  3: 建设施工；4: 竣工备案)
    generatedStartTime: "", //String	否	立项开始时间
    generatedEndTime: "" // String	否立项结束时间
}
//头部信息
export const list = () =>
    [
        {
            title: "工程类型：",
            value: "房屋建筑类",
            key: "engineeringTypeLabel"
        },
        {
            title: "立项方式：",
            value: "备案",
            key: "establishTypeLabel"
        },
        {
            title: "建筑面积：",
            value: "221230.06m²",
            key: "buildArea",
            unit: "m²"
        },
        {
            title: "建设单位：",
            value: "上海泥城万达置业有限公司",
            key: "unitNames"
        },
        {
            title: "总投资额：",
            value: "240000.0000万",
            key: "totalMoney",
            unit: "万"
        },
        {
            title: "所属行业：",
            value: "商业",
            key: "theIndustryLabel"
        },
        {
            title: "土地获取方式：",
            value: "出让",
            key: "landAcquisitionTypeLabel"
        },
        {
            title: "用地面积：",
            value: "212560.23m²",
            key: "landArea",
            unit: "m²"
        },
        {
            title: "建设地址：",
            value: "浦东新区基地东至鸿音路绿化带西至蓄芳路",
            key: "address"
        },

    ]
//头部信息listBot
export const listBot = () =>
    [{
        title: "工程：",
        value: "D03(在监在建)",
        key: "engineeringTypeLabel"
    },
    {
        title: "施工单位：",
        value: "上海建工集团股份有限公司，施灵灵, 1886517620",
        key: "establishTypeLabel"
    },
    {
        title: "监理单位：",
        value: "上海建工集团股份有限公司，施灵灵, 1886517620",
        key: "buildArea"
    },
    {
        title: "工程：",
        value: "D03(在监在建)",
        key: "engineeringTypeLabel"
    },
    {
        title: "施工单位：",
        value: "上海建工集团股份有限公司，施灵灵, 1886517620",
        key: "establishTypeLabel"
    },
    {
        title: "监理单位：",
        value: "上海建工集团股份有限公司，施灵灵, 1886517620",
        key: "buildArea"
    },
    {
        title: "工程：",
        value: "D03(在监在建)",
        key: "engineeringTypeLabel"
    },
    {
        title: "施工单位：",
        value: "上海建工集团股份有限公司，施灵灵, 1886517620",
        key: "establishTypeLabel"
    },
    {
        title: "监理单位：",
        value: "上海建工集团股份有限公司，施灵灵, 1886517620",
        key: "buildArea"
    }
    ]

//状态
export const statusList = () =>
    [
        {
            title: "已完成",
            bgcColor: "#43D49F"
        },
        {
            title: "进行中",
            bgcColor: "#FFCC01"
        },
        {
            title: "未申报",
            bgcColor: "#D7D7D7"
        }
    ]

//tab栏
export const tabList = () =>
    [
        // {
        //     title: "项目信息",
        //     value: "1",
        //     componentName: "projectInformation"
        // },
        {
            title: "审批流程图",
            value: "2",
            componentName: "flowchartG6"
        },
        {
            title: "归档资料",
            value: "3",
            componentName: "filingMaterials"
        },
        {
            title: "施工信息",
            value: "4",
            componentName: "constructionInfo"
        },
        {
            title: "监管信息",
            value: "5",
            componentName: "regulatoryIinformation"
        }
    ]

export const leftTabList = () => [
    {
        title: "基础信息",
        value: "1",
        className: "basics-info"
    },
    {
        title: "建设单位",
        value: "2",
        className: "construction-unit"
    },
    {
        title: "申报单位",
        value: "3",
        className: "application-unit"
    },
    {
        title: "立项投资",
        value: "4",
        className: "project-investment"
    },
    {
        title: "建设内容",
        value: "5",
        className: "construction-content"
    },
    {
        title: "项目投资",
        value: "6",
        className: "investment"
    },
    {
        title: "土地规划",
        value: "7",
        className: "reallocation-land"
    },
    {
        title: "技术指标",
        value: "8",
        className: "technical-index"
    },
    {
        title: "用地信息",
        value: "9",
        className: "land-info"
    },
    {
        title: "其他信息",
        value: "10",
        className: "other-info"
    },
]

