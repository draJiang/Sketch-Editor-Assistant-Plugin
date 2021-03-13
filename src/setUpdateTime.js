// 在当前画板插入时间
var sketch = require('sketch');

export default function () {
    var document = sketch.getSelectedDocument(); // 当前 .sketch 文档
    var selection = document.selectedLayers // 选中的图层列表

    var Text = require('sketch/dom').Text

    if (selection.layers.length == 0) {
        sketch.UI.message('⚠️ 请选中画板或图层')
        return
    }
    if (selection.layers.length > 1) {
        sketch.UI.message('⚠️ 最多选中 1 画板或图层')
        return
    }

    //  --- 在 '' 符号内配置你的姓名 ---
    var userName = ''

    var isArtboard = false // 记录是否为画板
    var ab // 画板
    var runSun = 0 // 记录查询画板的层级数
    var timeIsExist = false // 记录是否为时间图层
    var timeTextLayer // 时间图层

    // --- 获取画板 ---
    if (selection.layers[0].type == 'Artboard') {
        // 如果当前选中的是画板
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
                break
            }
        }
    }

    // --- 设置时间信息 ---

    // 遍历当前画板，查询是否已存在时间信息
    for (var i = ab.layers.length - 1; i >= 0; i--) {
        if (ab.layers[i].name == '[time]') {
            timeIsExist = true
            timeTextLayer = ab.layers[i]
            break
        }
    }

    // 获取当前时间
    var myDate = new Date();

    function addZero(m) {
        return m < 10 ? '0' + m : m;
    }

    var year = myDate.getFullYear()
    var month = myDate.getMonth() + 1
    var date = myDate.getDate()
    var hours = myDate.getHours()
    var minutes = myDate.getMinutes()

    month = addZero(month)
    hours = addZero(hours)
    minutes = addZero(minutes)
    date = addZero(date)

    myDate = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes

    if (timeIsExist) {
        // 已存在则更新
        timeTextLayer.text = '最近更新：' + myDate + ' ' + userName
        timeTextLayer.name = '[time]'
        timeTextLayer.index = ab.layers.length - 1
    } else {
        // 不存在则新增
        var text = new Text({
            text: '最近更新：' + myDate + ' ' + userName,
            //alignment: Text.Alignment.center
            parent: ab
        })

        text.name = '[time]'
        text.frame.x = 10
        text.frame.y = 10
        text.style.fontSize = 28
        text.style.textColor = '#999999'
        text.index = ab.layers.length - 1

        text.locked = true
    }

    sketch.UI.message('✅ 已添加时间：' + myDate)
}