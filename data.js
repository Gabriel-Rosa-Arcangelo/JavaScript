//var data = new Date()

//document.write(data.getDate() + '/' + (data.getMonth() + 1 + '/' + data.getFullYear()))

/*document.write(data.toString())
data.setDate(data.getDate() + 1)
document.write('<hr />')
document.write(data.toString())
document.write('<br /> <br /> <hr />')*/

var data1 = new Date(2017, 0, 15)
var data2 = new Date(2017, 1, 23)

document.write(data1.toString())
document.write('<hr />')
document.write(data2.toString())

document.write('<br /><br /><hr />')

document.write(data1.getTime())
document.write('<hr />')
document.write(data2.getTime())

document.write('<br /><br /><hr />')

var mili_entre = Math.abs(data1.getTime() - data2.getTime())
document.write(mili_entre)
var mili_dia = (1*24*60*60*1000)
document.write('<br /><br /><hr />')

document.write(Math.ceil(mili_entre / mili_dia))