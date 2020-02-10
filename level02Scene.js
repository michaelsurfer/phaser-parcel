export default {
    key:'level02',
    
    create(){
        this.cameras.main.backgroundColor.setTo(0,0,255);
        this.add.image(400, 300, 'sky');

        this.add.text(100,100,'Level Two',{
            align: 'center',
            fill: 'white',
            fontFamily: 'sans-serif',
            fontSize: 48,
            fontWeight: 'bold'
        })
    },

    update(){
        //console.log('level 2 update')
    }
}