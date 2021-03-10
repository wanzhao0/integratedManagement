export const tableMap = [
    {
        tableList: [
            {
                titleL: "项目分类",
                valueL: "projectCategoryName",
                titleR: "新片区重大项目",
                valueR: "isMajorLable"
            },
            {
                titleL: "所在区县",
                valueL: "divisionName",
                colspan: "3"
            },
            {
                titleL: "重大工程类型",
                valueL: "engineeringTypeLabel",
                titleR: "是否工程总承包试点项目",
                valueR: "pilotProjectLable"
            },
            {
                titleL: "项目资金来源构成",
                valueL: "capitalStructure",
                titleR: "是否财政性资金工程项目",
                valueR: "financialFunds"
            },
            {
                titleL: "是否国有资本控股",
                valueL: "stateOwnedCapitalLable",
                colspan: "3"
            },
        ],
        tableTitle: {
            title: "基本信息",
            icon: false,
            isDivider: true
        }
    },
    {
        tableList: [
            {
                titleL: "单位名称",
                valueL: "unitName",
                titleR: "单位证件类型",
                valueR: "licenseTypeLabel"
            },
            {
                titleL: "单位证件号码",
                valueL: "licenseCode",
                titleR: "单位性质",
                valueR: "unitNatureLabel",
            },
            {
                titleL: "单位所在区域",
                valueL: "unitAreaName",
                titleR: "单位详细地址",
                valueR: "unitAddress"
            },
            {
                titleL: "法定代表人",
                valueL: "legalRepresentative",
                titleR: "单位联系人",
                valueR: "contacts"
            },
            {
                titleL: "电子邮箱",
                valueL: "contactsEmail",
                titleR: "工程账户号",
                valueR: "accountNumber"
            },
            {
                titleL: "注册资金(万元)",
                valueL: "registeredCapital",
                titleR: "",
                valueR: ""
            }
        ],
        tableTitle: {
            title: "建设单位",
            icon: true,
            isDivider: false
        }
    },
    {
        tableList: [
            {
                titleL: "单位名称",
                valueL: "unitName",
                titleR: "单位证件类型",
                valueR: "licenseTypeLabel"
            },
            {
                titleL: "单位证件号码",
                valueL: "licenseCode",
                titleR: "单位详细地址",
                valueR: "unitAddress",
            },
            {
                titleL: "单位联系人",
                valueL: "contacts",
                titleR: "电子邮箱",
                valueR: "contactsEmail"
            }

        ],
        tableTitle: {
            title: "申报单位",
            icon: true,
            isDivider: false
        }
    },
    {
        tableList: [
            {
                titleL: "立项方式",
                valueL: "establishTypeLabel",
                titleR: "立项日期",
                valueR: "generatedTime"
            },
            {
                titleL: "建设性质",
                valueL: "projectNatureLabel",
                titleR: "立项文号",
                valueR: "projectEstablishDocumentNo"
            },
            {
                titleL: "立项代码",
                valueL: "projectEstablishCode",
                titleR: "在线审批监管平台代码",
                valueR: "projectEstablishDocumentNo"
            },
            {
                titleL: "是否固定资产投资项目",
                valueL: "isFixedAssetsLable",
                titleR: "上海市审批目录",
                valueR: "approvalListName"
            },
            {
                titleL: "投资项目行业分类",
                valueL: "industryName",
                titleR: "产业结构",
                valueR: "industrialStructureName"
            },
            {
                titleL: "是否进行能评",
                valueL: "energyEvaluateLable",
                titleR: "是否进行社会稳定风险评价",
                valueR: "riskEvaluateLable"
            },
            {
                titleL: "备注",
                valueL: "remark",
                colspan: "3"
            },
        ],
        tableTitle: {
            title: "立项投资",
            icon: false,
            isDivider: true
        }
    },
    {
        tableList: [
            {
                titleL: "预计开工日期",
                valueL: "planStartTime",
                titleR: "预计竣工日期",
                valueR: "planCompleteTime"
            },
            {
                titleL: "预计投产日期",
                valueL: "planProduceTime",
                titleR: "建设期(月)",
                valueR: "constructionPeriod",
            },
            {
                titleL: "项目类型",
                valueL: "projectTypeLabel",
                titleR: "是否含建筑或构筑物",
                valueR: "belongBuildingLable"
            },
            {
                titleL: "建设内容",
                valueL: "constructionContent",
                colspan: "3"
            },
            {
                titleL: "地上面积(㎡)",
                valueL: "abovegroundArea",
                titleR: "地下面积(㎡)",
                valueR: "undergroundArea"
            },
            {
                titleL: "总建筑面积(㎡)",
                valueL: "buildArea",
                titleR: "总用地面积(㎡)",
                valueR: "landArea"
            },
            {
                titleL: "新增建设用地面积(㎡)",
                valueL: "newLand",
                colspan: "3"
            },
        ],
        tableTitle: {
            title: "项目建设内容",
            icon: true,
            isDivider: false
        }
    },
    {
        tableList: [
            {
                titleL: "总投资(万元)",
                valueL: "totalMoney",
                titleR: "工程建设费(万元)",
                valueR: "constructionCost"
            },
            {
                titleL: "其中设备购置费(万元)",
                valueL: "equipmentCost",
                titleR: "工程建设其他费用(万元)",
                valueR: "otherCost",
            },
            {
                titleL: "预留费(万元)",
                valueL: "reserveCost",
                titleR: "前期费或其他(万元)",
                valueR: "upfrontCost"
            },
            {
                titleL: "建设期贷款利息(万元)",
                valueL: "loanInterest",
                titleR: "铺底流动资金(万元)",
                valueR: "fluidCapital"
            }

        ],
        tableTitle: {
            title: "项目投资",
            icon: true,
            isDivider: false
        }
    },
    {
        tableList: [
            {
                titleL: "项目类型",
                valueL: "projectTypeLabel",
                titleR: "土地出让方式",
                valueR: "landAcquisitionTypeLabel"
            },
            {
                titleL: "签订日期",
                valueL: "landContractSigningDate",
                titleR: "土地出让地块编号",
                valueR: "landContractLotNumber"
            },
            {
                titleL: "土地出让合同编号",
                valueL: "landContractNo",
                titleR: "土地出让合同宗地",
                valueR: "landContractParcelNo"
            },
            {
                titleL: "建设工程性质",
                valueL: "engineeringPropertiesLabel",
                titleR: "是否免审方案",
                valueR: "isExemptionSchemeLable"
            }
        ],
        tableTitle: {
            title: "土地规划",
            icon: false,
            isDivider: true
        }
    },
    {
        tableList: [
            {
                titleL: "总建筑面积(㎡)",
                valueL: "buildArea",
                titleR: "计容建筑面积(㎡)",
                valueR: "capacityBuildingArea"
            },
            {
                titleL: "地上建筑面积(㎡)",
                valueL: "abovegroundArea",
                titleR: "地下建筑面积(㎡)",
                valueR: "undergroundArea",
            },
            {
                titleL: "建设项目用地面积(m²)",
                valueL: "landArea",
                titleR: "最高建筑物高度(m)",
                valueR: "maximumBuildingHeight"
            },
            {
                titleL: "容积率",
                valueL: "plotRatio",
                titleR: "建设长度(m)",
                valueR: "constructionLength"
            },
            {
                titleL: "绿地率上限",
                valueL: "greeningRateUpper",
                titleR: "绿地率下限",
                valueR: "greeningRateLower"
            },
            {
                titleL: "建筑密度上限",
                valueL: "buildingDensityUpper",
                titleR: "建筑密度下限",
                valueR: "buildingDensityLower"
            },
            {
                titleL: "建设规模",
                valueL: "constructionContent",
                colspan: "3"
            }
        ],
        tableTitle: {
            title: "技术指标",
            icon: true,
            isDivider: false
        }
    },
    {
        tableList: [
            {
                titleL: "门牌号",
                valueL: "houseNumber",
                titleR: "图幅号",
                valueR: "sheetNumber",
            },
            {
                titleL: "四至范围",
                valueL: "fourToScopeLable",
                colspan: "3"
            },

            {
                titleL: "建设用地面积(m²)",
                valueL: "landArea",
                titleR: "土地用途",
                valueR: "landUseLabel"
            },
            {
                titleL: "批准用地机关",
                valueL: "landApprovalAuthority",
                titleR: "批准用地文号",
                valueR: "landApprovalDocumentNo"
            },
            {
                titleL: "现状土地使用权属情况",
                valueL: "landUseRightLabel",
                titleR: "现状用地性质",
                valueR: "landUseNatureLabel"
            },
            {
                titleL: "备注",
                valueL: "remark3",
                colspan: "3"
            },

        ],
        tableTitle: {
            title: "用地信息",
            icon: true,
            isDivider: false
        }
    },
    {
        tableList: [
            {
                titleL: "是否文物或优秀历史建筑",
                valueL: "isCulturalRelicLable",
                titleR: "文物保护建筑等级",
                valueR: "culturalRelicLevelLable"
            },
            {
                titleL: "是否历史保护建筑",
                valueL: "isHistoricBuildingsLable",
                titleR: "历保编号",
                valueR: "historicBuildingsNo"
            },
            {
                titleL: "建设单位是否具备自行招标条件",
                valueL: "selfBiddingConditionsLable",
                titleR: "立项批文中是否指定招标方式",
                valueR: "designatedBiddingMethodLable"
            },
            {
                titleL: "是否保护性建筑",
                valueL: "protectiveBuildingLable",
                titleR: "重大工程项目年份",
                valueR: "majorProjectYear"
            },
            {
                titleL: "重大工程项目文号",
                valueL: "majorProjectDocumentNo",
                titleR: "重大工程项目编号",
                valueR: "majorProjectNo"
            },
            {
                titleL: "是否地处风景名胜区",
                valueL: "scenicAttractionLable",
                titleR: "如为既有建筑改造，是否有节能改造内容",
                valueR: "energySavingRetrofitLable"
            },
            {
                titleL: "是否有民防设施",
                valueL: "civilDefenseFacilitiesLable",
                titleR: "有无配套绿化",
                valueR: "supportingGreeningLable"
            },
            {
                titleL: "最大单体面积(m)",
                valueL: "maximumMonomerArea",
                titleR: "是否有100米以上的建筑工程",
                valueR: "exceedHundredLable"
            },
            {
                titleL: "全装修住宅比例(%)",
                valueL: "residentialProportion",
                titleR: "是否装配式建筑",
                valueR: "prefabricatedBuildingLable"
            },
            {
                titleL: "装配式建筑落实比例(%)",
                valueL: "prefabricatedBuildingProportion",
                titleR: "装配式建筑面积(m)",
                valueR: "prefabricatedBuildingArea"
            },
            {
                titleL: "单体预制率(%)",
                valueL: "monomerPrefabricationRate",
                titleR: "单体装配率(%)",
                valueR: "monomerAssemblyRate"
            },
            {
                titleL: "是否申报绿色建筑标识",
                valueL: "greenBuildingIdentificationLable",
                titleR: "设计标识",
                valueR: "designIdentificationStar"
            },
            {
                titleL: "运行标识",
                valueL: "operationIdentificationStar",
                titleR: "",
                valueR: ""
            },
            {
                titleL: "设计阶段是否采用BIM技术",
                valueL: "bimDesignPhaseLable",
                titleR: "施工阶段是否采用BIM技术",
                valueR: "bimConstructionPhaseLable"
            },
            {
                titleL: "运行阶段是否采用BIM技术",
                valueL: "bimOperationPhaseLable",
                titleR: "立项文件中BIM技术专项费用(万元)",
                valueR: "bimSpecialExpenses"
            },
            {
                titleL: "备注",
                valueL: "remark4",
                colspan: "3"
            }
        ],
        tableTitle: {
            title: "其他信息",
            icon: false,
            isDivider: true
        }
    }
]