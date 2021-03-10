<template>
    <div class="gis-map">
        <div ref="map" class="map"></div>
    </div>
</template>

<script>
    import { homePageStage, homePageMap } from '@/api/cockpit.js'
    import { form } from "../common/formData"
    import mapconfig from '@/config/config_map.js'
    import jsapiUtil from '@/utils/jsapi'
    import * as esriloader from 'esri-loader'
    import pointsParameters from '@/config/points.js'
    import polygonParameters from '@/config/polygon.js'
    import clientLayersOperate from '@/utils/clientLayersOperate.js'

    export default {
        name: 'MyMap',
        data() {
            return {
                mapInfoList: {}, //地图坐标信息
                stageForm: JSON.parse(JSON.stringify(form)),
                PageMapForm: JSON.parse(JSON.stringify(form)),
                imgActive: 99
            }
        },
        async mounted() {
            let _this = this
            esriloader.loadCss(mapconfig.cssUrl) //添加样式
            const [
                Map,
                Basemap,
                SceneView,
                SpatialReference,
                IdentityManager,
                Camera,
                LayerList,
                Expand,
                Fullscreen,
                Legend,
                GroupLayer,
                TileLayer,
                SceneLayer,
                FeatureLayer,
                DirectLineMeasurement3D,
                AreaMeasurement3D,
                Graphic,
                watchUtils,
            ] = await jsapiUtil.load([
                'esri/Map',
                'esri/Basemap',
                'esri/views/SceneView',
                'esri/geometry/SpatialReference',
                'esri/identity/IdentityManager',
                'esri/Camera',
                'esri/widgets/LayerList',
                'esri/widgets/Expand',
                'esri/widgets/Fullscreen',
                'esri/widgets/Legend',
                'esri/layers/GroupLayer',
                'esri/layers/TileLayer',
                'esri/layers/SceneLayer',
                'esri/layers/FeatureLayer',
                'esri/widgets/DirectLineMeasurement3D',
                'esri/widgets/AreaMeasurement3D',
                'esri/Graphic',
                'esri/core/watchUtils',
            ])

            const air2020Layer = await new TileLayer(
                '/airmap/air2020_kp_3857/MapServer',
                {
                    id: 'air2020Basemap',
                    visible: true,
                    opacity: 1,
                    title: '2020年航空影像',
                }
            )

            const baseLayer = await new TileLayer(
                '/basemap/base_kp_3857/MapServer',
                {
                    id: 'zhengwuBasemap',
                    visible: true,
                    opacity: 1,
                    title: '政务底图',
                }
            )

            const darkblackLayer = await new TileLayer(
                '/basemap/darkblack_kp_3857/MapServer',
                {
                    id: 'air2020',
                    visible: true,
                    opacity: 1,
                    title: '暗黑底图',
                }
            )
            window.map = new Map({
                ground: {
                    surfaceColor: '#012E47',
                },
            })

            const initCamera = {
                heading: 0,
                tilt: 0.49999999999913347,
                fov: 41,
                position: {
                    x: 35077.802827289288,
                    y: -35015.02681828593,
                    z: 95587.70223144352,
                    spatialReference: SpatialReference.WebMercator,
                },
            }

            window.sceneView = new SceneView({
                container: this.$refs.map,
                viewingMode: 'local',
                map: map,
                camera: initCamera,
                popup: {
                    defaultPopupTemplateEnabled: false,
                },

            })

            var fullScreen = new Fullscreen({
                view: window.sceneView,
            })

            var layerList = new LayerList({
                view: window.sceneView,
            })

            var layerListExpand = new Expand({
                expandTooltip: '图层控制',
                view: window.sceneView,
                content: layerList,
            })

            var directLineMeasurement3DExpand = new Expand({
                expandIconClass: 'esri-icon-minus',
                view: window.sceneView,
                expandTooltip: '测距',
            })

            var areaMeasurement3DExpand = new Expand({
                expandIconClass: 'esri-icon-polygon',
                view: window.sceneView,
                expandTooltip: '测面积',
            })

            var directLineMeasurement3D, areaMeasurement3D
            directLineMeasurement3DExpand.watch('expanded', function (expanded) {
                if (expanded) {
                    layerListExpand.collapse()
                    areaMeasurement3DExpand.collapse()
                    directLineMeasurement3D = new DirectLineMeasurement3D({
                        view: window.sceneView,
                    })
                    directLineMeasurement3D.viewModel.newMeasurement()
                    directLineMeasurement3DExpand.content = directLineMeasurement3D
                } else {
                    directLineMeasurement3D.viewModel.clearMeasurement()
                }
            })

            areaMeasurement3DExpand.watch('expanded', function (expanded) {
                if (expanded) {
                    layerListExpand.collapse()
                    directLineMeasurement3DExpand.collapse()
                    areaMeasurement3D = new AreaMeasurement3D({
                        view: window.sceneView,
                    })
                    areaMeasurement3D.viewModel.newMeasurement()
                    areaMeasurement3DExpand.content = areaMeasurement3D
                } else {
                    areaMeasurement3D.viewModel.clearMeasurement()
                }
            })

            var legend = new Legend({
                view: window.sceneView,
            })

            var legendExpand = new Expand({
                expandTooltip: '显示图例',
                expanded: false,
                view: window.sceneView,
                content: legend,
            })

            // window.sceneView.ui.add(legendExpand, 'bottom-left')
            // window.sceneView.ui.add(
            //     [
            //         layerListExpand,
            //         directLineMeasurement3DExpand,
            //         areaMeasurement3DExpand,
            //         fullScreen,
            //     ],
            //     'top-left'
            // )
            window.sceneView.ui.remove([
                'zoom',
                'navigation-toggle',
                'attribution',
                'compass',
            ])

            const baseMapGroupLayer = new GroupLayer({
                title: '基础底图',
                visible: true,
                visibilityMode: 'exclusive',
                layers: [baseLayer, air2020Layer, darkblackLayer],
                opacity: 1,
            })
            map.layers.add(baseMapGroupLayer)

            var cityBuildingLayer = new SceneLayer({
                url:
                    '/Hosted/WhiteModel/SceneServer',
                title: '全市白模',
                visible: false,
                elevationInfo: {
                    mode: 'absolute-height',
                    offset: 0.05,
                },
                renderer: {
                    authoringInfo: {
                        visualVariables: [
                            {
                                field: 'BUILDING_HEIGHT',
                                maxSliderValue: 200,
                                minSliderValue: 1,
                                theme: 'high-to-low',
                                type: 'color',
                            },
                        ],
                    },
                    type: 'class-breaks',
                    visualVariables: [
                        {
                            type: 'color',
                            field: 'BUILDING_HEIGHT',
                            stops: [
                                {
                                    value: '',
                                    color: [20, 96, 166, 0.7],
                                    label: '暂缺',
                                },
                                {
                                    value: 1,
                                    color: [20, 96, 166, 0.7],
                                    label: '< 1',
                                },
                                {
                                    value: 40,
                                    color: [55, 135, 192, 0.7],
                                },
                                {
                                    value: 80,
                                    color: [148, 195, 223, 0.7],
                                    label: '80',
                                },
                                {
                                    value: 120,
                                    color: [230, 238, 251, 0.7],
                                },
                                {
                                    value: 160,
                                    color: [235, 240, 249, 0.7],
                                    label: '> 160',
                                },
                            ],
                        },
                    ],
                    classBreakInfos: [
                        {
                            maxValue: 1.7976931348623157e308,
                            symbol: {
                                type: 'mesh-3d',
                                symbolLayers: [
                                    {
                                        material: {
                                            color: [170, 170, 170],
                                            colorMixMode: 'replace',
                                        },
                                        type: 'fill',
                                        edges: {
                                            type: 'solid',
                                            color: [0, 0, 0],
                                            transparency: 60,
                                            size: 0.5,
                                        },
                                    },
                                ],
                            },
                            minValue: -1.7976931348623157e308,
                        },
                    ],
                    field: 'BUILDING_HEIGHT',
                },
            })

            const modelGroupLayer = new GroupLayer({
                title: '建筑模型',
                visible: true,
                visibilityMode: 'independent',
                layers: [cityBuildingLayer],
                opacity: 1,
            })
            map.layers.add(modelGroupLayer)



            //业务图层(静态)

            const xinpianquRegion = new FeatureLayer({
                title: '新片区边界',
                url:
                    '/region/lg_region/MapServer',
                group: 'LGlabel',
                renderer: {
                    type: "simple",
                    symbol: {
                        type: "simple-fill",
                        color: [0, 0, 0, 0],
                        outline: {
                            color: [255, 255, 190, 1],
                            width: "3px"
                        }
                    }
                },
                labelingInfo: [
                    {
                        symbol: {
                            type: 'label-3d',
                            symbolLayers: [
                                {
                                    type: 'text',
                                    material: {
                                        color: [255, 255, 190, 1],
                                    },
                                    halo: {
                                        color: [0, 0, 0, 0.7],
                                        size: 4,
                                    },
                                    size: 0,
                                    font: { weight: 'bold' },
                                },
                            ],
                        },
                        labelPlacement: 'above-center',
                        labelExpressionInfo: {
                            expression: '$feature.name',
                        },
                    },
                ],
                elevationInfo: {
                    mode: 'absolute-height',
                    offset: 8,
                },
                definitionExpression: ["NAME<='360'"]
            })

            // const jijianquRegion = new FeatureLayer({
            //     title: '集建区边界',
            //     url:
            //         '/services/pianquMark/FeatureServer',
            //     group: 'LGlabel',
            //     labelingInfo: [
            //         {
            //             symbol: {
            //                 type: 'label-3d',
            //                 symbolLayers: [
            //                     {
            //                         type: 'text',
            //                         material: {
            //                             color: [255, 255, 190, 1],
            //                         },
            //                         halo: {
            //                             color: [0, 0, 0, 0.7],
            //                             size: 4,
            //                         },
            //                         size: 16,
            //                         font: { weight: 'bold' },
            //                     },
            //                 ],
            //             },
            //             labelPlacement: 'above-center',
            //             labelExpressionInfo: {
            //                 expression: '$feature.name',
            //             },
            //         },
            //     ],
            //     elevationInfo: {
            //         mode: 'absolute-height',
            //         offset: 8,
            //     },
            // })

            // const qidongquRegion = new FeatureLayer({
            //     title: '启动区边界',
            //     url:
            //         '/services/Hosted/keyCity_label/FeatureServer',
            //     labelingInfo: [{
            //         symbol: {
            //             type: 'label-3d',
            //             symbolLayers: [{
            //                 type: 'text',
            //                 material: {
            //                     color: 'white'
            //                 },
            //                 halo: {
            //                     color: [0, 0, 0, 0.7],
            //                     size: 3
            //                 },
            //                 size: 0,
            //                 font: { weight: "bold" }
            //             }]
            //         },
            //         labelPlacement: 'above-center',
            //         labelExpressionInfo: {
            //             expression: '$feature.name'
            //         },
            //     }],
            //     elevationInfo: {
            //         mode: 'absolute-height',
            //         offset: 8,
            //     },
            // })

            const regionGroupLayer = new GroupLayer({
                title: '边界图层',
                visible: true,
                visibilityMode: 'independent',
                // layers: [xinpianquRegion, jijianquRegion, qidongquRegion],
                layers: [xinpianquRegion],
                opacity: 1,
            })
            map.layers.add(regionGroupLayer)

            // const guihuaModel = new FeatureLayer({
            //     title: '公共交通设施',
            //     url:
            //         '/services/Lgplaninfo/FeatureServer/1',
            //     group: 'landplan873',
            //     elevationInfo: {
            //         mode: 'absolute-height',
            //         offset: 8,
            //     },
            // })

            // const guihualandModel = new FeatureLayer({
            //     title: '公共交通线位',
            //     url:
            //         '/services/Lgplaninfo/FeatureServer/2',
            //     group: 'landplan873',
            //     elevationInfo: {
            //         mode: 'absolute-height',
            //         offset: 8,
            //     },
            // })
            // const guihuayongdiModel = new FeatureLayer({
            //     title: '规划用地',
            //     url:
            //         '/services/LG_landuse1/FeatureServer/0',
            //     group: 'landplan873',
            //     elevationInfo: {
            //         mode: 'absolute-height',
            //         offset: 8,
            //     },
            // })

            // const guihuaGroupLayer = new GroupLayer({
            //     title: '规划图层',
            //     visible: true,
            //     visibilityMode: 'independent',
            //     layers: [guihuaModel, guihualandModel, guihuayongdiModel],
            //     opacity: 1,
            // })
            // map.layers.add(guihuaGroupLayer)
            //业务图层(动态)  撒点
            // setTimeout(this.displayJSONData, 1000)
            this.getHomePageMap()
            window.sceneView.on("click", function (event) {
                console.log(event)
                sceneView.hitTest(event).then(async function (response) {
                    console.log(response.results[0].graphic.attributes)
                    if (response.results.length > 0) {
                        const layername = response.results[0].graphic.layer.id;
                        let objectid = null;
                        objectid = response.results[0].graphic.attributes.objectid;

                        switch (layername) {
                            //可根据图层名称对应不同操作
                            default:
                                const graphiclayer = window.map.findLayerById(
                                    response.results[0].graphic.layer.id
                                );
                                console.log(graphiclayer.source)
                                if (graphiclayer != null && graphiclayer != undefined) {
                                    const graphiclist = graphiclayer.source.items.find(function (
                                        result
                                    ) {
                                        return (
                                            result.attributes.OBJECTID ===
                                            response.results[0].graphic.attributes.OBJECTID
                                        );
                                    });
                                    if (graphiclist != undefined) {
                                        // window.sceneView.goTo([response.results[0].graphic]);
                                        // const params = {
                                        //     location: {
                                        //         coordinateX: response.results[0].graphic.geometry.x,
                                        //         coordinateY: response.results[0].graphic.geometry.y,
                                        //         coordinateH: 0,
                                        //     },
                                        //     title: graphiclist.attributes.OBJECTID,
                                        //     content: {
                                        //         type: "url",
                                        //         url: "http://www.baidu.com",
                                        //     },
                                        // };

                                        // console.log(graphiclist.attributes);
                                        window.parent["myGisMap"](graphiclist.attributes)
                                        // _this.togglePopupTemplate(false);
                                        // that.setPopupContent(params);
                                    }
                                }
                        }
                    }
                });
            });
        },
        created() {
            this.getHomePageStage()
        },
        methods: {
            async displayJSONData() {
                // await clientLayersOperate.displayJSONData(JSON.parse(pointsParameters()))
            },
            getHomePageStage() {
                //阶段项目数量
                homePageStage(this.stageForm).then(res => {
                    let stageList = res.data.result
                    let arry = [null, "projectReserve", "preliminaryApproval", "construction", "completionRecord"]
                    for (let index = 0; index < stageList.length; index++) {
                        let i = stageList[index].projectStage
                        this.mapStageList[arry[i]] = stageList[index].count
                    }
                    // this.mapInfoList = data.mapInfoList
                }).catch(() => { })
            },
            //阶段项目地图点块信息
            getHomePageMap() {
                homePageMap(this.PageMapForm).then(res => {
                    let data = res.data.result
                    console.log(data, "data")
                    let polygonArry = [] //多边形
                    let pointsArry = [] //点
                    let projectStageList = ["", "项目储备", "前期审批", "建设施工", "竣工备案"]
                    for (let index = 0; index < data.length; index++) {
                        if (data[index].type === "2") {
                            let obj = {
                                attrs: {
                                    projectNo: data[index].projectNo,
                                    projectName: data[index].projectName,
                                    type: (data[index].projectStage && projectStageList[data[index].projectStage]) || "前期审批",
                                    name: data[index].projectName,
                                },
                                points: [...data[index].projectCoordinateList]
                            }
                            data[index].projectCoordinateList.forEach(element => {
                                element.coordinateH = 10
                            });
                            polygonArry.push(obj)
                        } else {
                            let obj1 = {
                                coordinateX: data[index].northLatitude,
                                coordinateY: data[index].eastLongitude,
                                coordinateH: 10,
                                attrs: {
                                    projectNo: data[index].projectNo,
                                    projectName: data[index].projectName,
                                    thewlevel: (data[index].projectStage && projectStageList[data[index].projectStage]) || "前期审批",
                                    name: data[index].projectName
                                }
                            }
                            pointsArry.push(obj1)
                        }
                    }
                    console.log(polygonArry, pointsArry)
                    clientLayersOperate.displayJSONData(JSON.parse(polygonParameters(polygonArry,14)))
                    clientLayersOperate.displayJSONData(JSON.parse(pointsParameters(pointsArry)))
                }).catch(() => { })
            }
        },
    }
</script>

<style scoped>
    div {
        box-sizing: border-box;
    }

    .map {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 99;
        background-color: #012E47 !important;
    }

    .gis-map {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
        background-color: #012E47 !important;
    }

    .esri-compass {
        position: absolute;
        top: 175px !important;
    }

    .gis-map>>>.esri-view .esri-view-surface--inset-outline:focus::after {
        outline: none;
    }
</style>