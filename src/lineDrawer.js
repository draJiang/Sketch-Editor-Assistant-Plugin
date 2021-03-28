var sketch = require('sketch')
var document = sketch.getSelectedDocument(); // 当前文档
var mySelectedLayers = document.selectedLayers; // 选中的图层
export default function () {
    if (mySelectedLayers.layers.length == 0) {
        sketch.UI.message('⚠️ 请选中线条')
        return
    }

    //操作线
    function clickLine(layer, sytleIndex) {
        layer.style.borders[0].color = '#0091ffff'
        layer.style.borders[0].thickness = 2
        layer.style.borderOptions.startArrowhead = 'OpenCircle'
        layer.style.borderOptions.endArrowhead = 'FilledArrow'
        layer.style.borderOptions.dashPattern = [4, 4]

        layer.sharedStyleId = lineStyle[sytleIndex]
    }

    //流程线
    function flowLine(layer, sytleIndex) {
        layer.style.borders[0].color = '#0091ffff'
        layer.style.borders[0].thickness = 2
        layer.style.borderOptions.startArrowhead = 'FilledCircle'
        layer.style.borderOptions.endArrowhead = 'OpenArrow'
        layer.style.borderOptions.dashPattern = []
        layer.sharedStyleId = lineStyle[sytleIndex]
    }

    //线条样式配置
    var lineStyle = ['7560DAB0-5EAD-427B-A833-62C4D141B62F', '94F2F3E3-84FC-4254-984C-78C8AC9CE1A0'] //每次运行脚本将在此列表中循环切换样式
    var sytleIndex = -1
    //遍历选中的所有图层
    for (var i = 0; i < mySelectedLayers.layers.length; i++) {
        //判断是否为线条
        if (mySelectedLayers.layers[i].type != 'ShapePath') {
            //不是线条则跳过
            continue
        } else {
            //是线条则设置样式

            //判断当前样式是否在配置项中
            for (var j = 0; j < lineStyle.length; j++) {
                if (mySelectedLayers.layers[i].sharedStyleId == lineStyle[j]) {
                    if (j == lineStyle.length - 1) {
                        sytleIndex = 0
                    } else {
                        sytleIndex = j + 1
                    }

                    break

                }
            }
            if (sytleIndex < 0) {
                //当前样式不存在在配置样式中，则默认设置为首个样式
                clickLine(mySelectedLayers.layers[i], 0)
            } else {
                //若存在则获取当前样式在配置项中的索引，并设置样式为下一个样式（头尾相连循）
                switch (sytleIndex) {
                    case 0:
                        clickLine(mySelectedLayers.layers[i], sytleIndex)
                        break
                    case 1:
                        flowLine(mySelectedLayers.layers[i], sytleIndex)
                        break
                }
            }

        }

    }
}