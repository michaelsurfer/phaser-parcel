export default {
    key:'level01',
    
    create(){
        this.cameras.main.backgroundColor.setTo(0,255,255);

        this.add.image(400, 300, 'sky');

        this.add.text(100,100,'Level One',{
            align: 'center',
            fill: 'white',
            fontFamily: 'sans-serif',
            fontSize: 48,
            fontWeight: 'bold',
            backgroundColor:'black'
        })
    },
    preload(){
        this.load.image('sky',require('./assets/sky.png'))

    },
    update(){
        //console.log('level 1 update')
    }
}