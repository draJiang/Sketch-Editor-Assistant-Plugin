// 增加当前选中图层的画板高度
var sketch = require('sketch');

export default function () {
    var document = sketch.getSelectedDocument();
    var selection = document.selectedLayers

    if (selection.layers.length == 0) {
        sketch.UI.message('⚠️ 请选中 1 个画板或图层')
        return
    }
    if (selection.layers.length > 1) {
        sketch.UI.message('⚠️ 最多选中 1 个画板或图层')
        return
    }

    var isArtboard = false
    var ab
    var runSun = 0
    // console.log(ab)

    // 如果当前选中的是画板
    if (selection.layers[0].type == 'Artboard') {
        ab = selection.layers[0]
    } else {
        ab = selection.layers[0].parent // 取当前选中图层的父图层

        while (isArtboard == false) {
            runSun += 1 // 记录遍历次数，达到上限则跳出
            // 判断图层是否为画板
            if (ab.type == 'Artboard') {
                isArtboard = true
            } else {
                // 不是画板则继续向上查询
                ab = ab.parent
            }
            // 增加上限值，避免处理时间过长
            if (runSun >= 10) {
                sketch.UI.alert('操作失败', '当前选中的图层层级过深，请更换图层或选中画板后再次执行')
                return
            }
        }
    }

    ab.frame.height += 1634
    sketch.UI.message('✅ 已增加画板高度')
}