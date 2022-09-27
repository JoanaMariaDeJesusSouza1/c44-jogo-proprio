class Ground{
    constructor(x,y,w,h){
        var options = {
            isStatic: true
        }
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x, y, w, h, options)
        World.add(world, this.body )
    }
    display(){
        push()
        rectMode(CENTER)
        stroke(5)
        fill("#412369")
        rect(this.body.position.x,this.body.position.y, this.w, this.h )
        pop()
    }

    group(){

        labirintoGp = new Group()
        labirintoGp.add(chao1)
        labirintoGp.add(chao2)
        labirintoGp.add(chao3)
        labirintoGp.add(chao4)
        labirintoGp.add(chao5)
        labirintoGp.add(chao6)
        labirintoGp.add(chao7)
        labirintoGp.add(chao8)
        labirintoGp.add(chao9)
        labirintoGp.add(chão10)
        labirintoGp.add(chao11)
        labirintoGp.add(chao12)
        labirintoGp.add(chao13)
        labirintoGp.add(chao14)
        labirintoGp.add(chao15)
        labirintoGp.add(chao16)
        labirintoGp.add(chao17)
        labirintoGp.add(chao18)
        labirintoGp.add(chao19)
        labirintoGp.add(chao20)
        labirintoGp.add(chao21)
        labirintoGp.add(chao22)
        labirintoGp.add(chao23)
        labirintoGp.add(chao14)
        labirintoGp.add(chao25)
        labirintoGp.add(chao26)

    }
}