namespace SpriteKind {
    export const 鸡腿 = SpriteKind.create()
}
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    game.over(true, effects.confetti)
})
function Level_2 () {
    scene.setTileMap(img`
        6 6 6 6 . . . . 6 6 6 a 6 6 6 6 
        6 . . 6 6 6 6 6 6 . . . . . . 6 
        6 . . . . . . . . . . . . . . 6 
        6 . . . . . 6 6 . . 6 6 6 6 6 6 
        6 . . 6 . . 6 6 . . 6 . . . . 6 
        6 . . 6 . . . . . . 6 . . . . 6 
        6 . . 6 6 6 6 6 . . 6 . . . . 6 
        6 . . 6 . . . . . . . . . . . 6 
        2 . . 6 . . 6 6 6 6 6 6 6 . . 6 
        6 . . 6 . . . . . . . . 6 . . 6 
        6 . . . . . . . . . . . 6 . . 6 
        6 . . . . . . . 6 6 6 6 6 . . 6 
        6 6 6 6 6 . . . 6 . . . 6 . . 6 
        6 . . . . . . . 6 . . . . . . 6 
        6 . . . . . . . . . . . . . . 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `)
    scene.setTile(6, img`
        e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 
        e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
        e e e e e e e e e e e e e e e e 
        e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e 
        e 4 e e e e e e e e e e e e 4 e 
        e 4 e 3 3 3 3 3 3 3 3 3 3 e 4 e 
        e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e 
        e 4 e e e e e e e e e e e e 4 e 
        e 4 e 3 3 3 3 3 3 3 3 3 3 e 4 e 
        e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e 
        e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 
        e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
        e e e e e e e e e e e e e e e e 
        e e c c c c c c c c c c c c e e 
        e e c c c c c c c c c c c c e e 
        e e e e e e e e e e e e e e e e 
        `, true)
    scene.setTile(2, img`
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 1 7 7 1 7 7 1 7 7 1 7 7 7 
        1 7 7 1 7 7 1 7 7 1 7 7 1 7 7 7 
        1 7 7 1 7 7 1 7 7 1 7 7 1 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `, false)
    scene.setTile(10, img`
        5 5 4 2 2 2 2 2 4 2 2 2 2 4 4 5 
        5 4 2 2 2 2 2 4 4 4 4 4 4 4 5 5 
        4 2 2 4 2 4 4 4 5 5 5 5 5 5 4 4 
        2 2 2 2 4 4 5 5 4 4 4 5 4 5 4 4 
        4 4 2 4 4 5 5 4 4 2 2 4 5 4 4 2 
        4 4 2 4 5 4 4 2 2 2 2 4 5 4 4 2 
        2 2 4 5 4 4 2 2 2 4 4 2 5 5 4 2 
        4 4 5 5 4 2 2 2 2 4 4 2 4 5 5 4 
        5 5 5 4 2 2 4 2 2 2 2 2 4 5 5 5 
        4 5 4 4 2 2 2 2 2 2 2 2 4 5 4 4 
        4 5 5 2 2 4 2 2 2 4 2 2 4 5 5 4 
        5 5 4 2 4 2 4 2 2 2 2 4 5 5 5 5 
        4 5 5 4 2 4 2 2 2 2 2 4 5 4 4 4 
        4 5 5 5 2 2 2 4 4 4 5 5 5 4 2 2 
        4 5 5 4 5 5 5 5 5 5 5 4 4 2 2 2 
        4 5 5 4 4 4 4 4 4 4 4 2 2 2 4 4 
        `, true)
    scene.placeOnRandomTile(AA, 2)
    补给品 = sprites.create(img`
        ......................bbb.......
        ....................bb333b......
        .................bbb333d33b.....
        ................bb333333d3a.....
        ..............bb33332eeeedba....
        ............bbb333323eee2e3a....
        ..........bbd333333e22222ed3a...
        .......bbbdd3333333e22222edda...
        ......bb3d333333333be222eb3d3a..
        ...bbb3dd33333333333beeeb33d3a..
        ..b3ddd33333333333333333333dda..
        bbddd3333333333333333333333dd3a.
        b33dddddd3333333333333333333d3a.
        bb3333333ddddd33333333333333dda.
        bbbbbbb333dd33dddddddddd3333ddba
        b55553bbbbbb3333dd33333ddd33dd3a
        b555555555553bbbbbbbb33333dddd3a
        bd555555555555555dddbaaaaab3d3ba
        bb55555555555555555dddddddbb33ba
        b3bb35555555555d5555d55dddddbbba
        b33333bbb355dd55555d555ddddddbba
        b5555d333333bbb35dddddd55ddddbba
        b5d555dd5553333bbbbb3ddddddddb3a
        b5d555555555555dd3333bbbbbb3db3a
        bd5d555555d55555dd555ddbbbbbbb3a
        bbb55dd555555555555555ddddddbb3a
        ...bbbbdd555ddd5555ddddddddddb3a
        .......bbbb555555d5ddd5ddddddb3a
        ...........bbbb55555555555dd533a
        ...............bbbbddd5d55d5b3ba
        ...................bbbbddddb3ba.
        .......................bbbaaaa..
        `, SpriteKind.Food)
    tiles.placeOnTile(补给品, tiles.getTileLocation(10, 9))
    补给品2 = sprites.create(img`
        ..........bbbbbb................
        .......bbb444444bb..............
        .....2244444ddd444b.............
        ....244444444dddd44e............
        ...244444444444ddd4be...........
        ..244444444444444d44be..........
        .2b444444444444444d4be..........
        .2b44444444444444444bbe.........
        2bbb4444444444444444bbe.........
        2bbb4444444444444444bbe.........
        2bb4b4444444444444444bbe........
        2bb4444444444444444444be........
        2bb44444444444444444444e........
        2bbb444bbb4444444444444e........
        22bbb444bb4bb444444444be........
        .2bbbbb44bbbb44444444bbe........
        .22bbbbbbbb44bbb444444bbe.......
        ..eeebbbbbbb44bbb444444be.......
        ...eeeeebbbbbbbb44b4444be.......
        .....eeeeee222bb44bbb4bbe.......
        .......eeeee222bb44bbbbee.......
        ............e222bbbbbbbec.......
        ..............ee2bbbbeebdb......
        .................eeeeecdddb.....
        .......................cd11bbbb.
        ........................cd111dbb
        .........................b11111c
        .........................c11dd1c
        .........................cd1dbc.
        .........................cb11c..
        ..........................ccc...
        ................................
        `, SpriteKind.鸡腿)
    tiles.placeOnTile(补给品2, tiles.getTileLocation(12, 5))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.鸡腿, function (sprite, otherSprite) {
    补给品2.destroy()
    info.changeLifeBy(1)
})
function Level_1 () {
    scene.setTileMap(img`
        6 6 6 6 . . . . 6 6 6 5 6 6 6 6 
        6 . . 6 6 6 6 6 6 . . . . . . 6 
        6 . . . . . . . . . . . . . . 6 
        6 . . 6 . . . 6 . . . . . . . 6 
        6 . . 6 . . . 6 . . . . . . . 6 
        6 . . 6 . . . 6 . . 6 6 6 6 6 6 
        6 . . 6 . . . 6 6 6 6 . . . . 6 
        6 . . 6 . . . . . . . . . . . 6 
        2 . . 6 6 6 6 6 6 6 . . . . . 6 
        6 . . . . . . . 6 . . . . . . 6 
        6 . . . . . . . 6 . . . . . . 6 
        6 . . . . . . . 6 . . . . . . 6 
        6 . . . . . . . . . . . . . . 6 
        6 . . . . . . . . . . . . . . 6 
        6 . . . . . . . . . . . . . . 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `)
    scene.cameraFollowSprite(AA)
    scene.setTile(6, img`
        e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 
        e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
        e e e e e e e e e e e e e e e e 
        e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e 
        e 4 e e e e e e e e e e e e 4 e 
        e 4 e 3 3 3 3 3 3 3 3 3 3 e 4 e 
        e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e 
        e 4 e e e e e e e e e e e e 4 e 
        e 4 e 3 3 3 3 3 3 3 3 3 3 e 4 e 
        e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e 
        e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 
        e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
        e e e e e e e e e e e e e e e e 
        e e c c c c c c c c c c c c e e 
        e e c c c c c c c c c c c c e e 
        e e e e e e e e e e e e e e e e 
        `, true)
    scene.setTile(2, img`
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 1 7 7 1 7 7 1 7 7 1 7 7 7 
        1 7 7 1 7 7 1 7 7 1 7 7 1 7 7 7 
        1 7 7 1 7 7 1 7 7 1 7 7 1 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `, false)
    scene.placeOnRandomTile(AA, 2)
    scene.setTile(5, img`
        5 5 4 2 2 2 2 2 4 2 2 2 2 4 4 5 
        5 4 2 2 2 2 2 4 4 4 4 4 4 4 5 5 
        4 2 2 4 2 4 4 4 5 5 5 5 5 5 4 4 
        2 2 2 2 4 4 5 5 4 4 4 5 4 5 4 4 
        4 4 2 4 4 5 5 4 4 2 2 4 5 4 4 2 
        4 4 2 4 5 4 4 2 2 2 2 4 5 4 4 2 
        2 2 4 5 4 4 2 2 2 4 4 2 5 5 4 2 
        4 4 5 5 4 2 2 2 2 4 4 2 4 5 5 4 
        5 5 5 4 2 2 4 2 2 2 2 2 4 5 5 5 
        4 5 4 4 2 2 2 2 2 2 2 2 4 5 4 4 
        4 5 5 2 2 4 2 2 2 4 2 2 4 5 5 4 
        5 5 4 2 4 2 4 2 2 2 2 4 5 5 5 5 
        4 5 5 4 2 4 2 2 2 2 2 4 5 4 4 4 
        4 5 5 5 2 2 2 4 4 4 5 5 5 4 2 2 
        4 5 5 4 5 5 5 5 5 5 5 4 4 2 2 2 
        4 5 5 4 4 4 4 4 4 4 4 2 2 2 4 4 
        `, true)
}
scene.onHitTile(SpriteKind.Player, 5, function (sprite) {
    game.splash("Level 2")
    Level_2()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    补给品.destroy()
    info.changeLifeBy(1)
})
let 补给品2: Sprite = null
let 补给品: Sprite = null
let AA: Sprite = null
AA = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f 3 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f f . . 
    . . f e e e 4 d d d d f d d f . 
    . . . f f e e 4 e e e f b b f . 
    . . . . f 2 2 2 4 d d e b b f . 
    . . . . e 2 2 2 e d d e b f . . 
    . . . . f 4 4 4 f e e f f . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . f f f . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(AA)
AA.setFlag(SpriteFlag.StayInScreen, true)
game.splash("Level", "1")
info.setLife(10)
Level_1()
game.onUpdateInterval(3000, function () {
    info.changeLifeBy(-1)
})
