game.module(
    'game.main'
)
.body(function() {

game.createScene('Main', {
    backgroundColor: 'transparent',
    
    init: function() 
    {
        var video = document.getElementById('video');
        if (video != null)
        {
            video.play();
        }
        
        /*
        this.sexTip = [game.Texture.fromFrame ('SexTips_10_00000.png')];
        var i = 0;
        
        while (i <= 75)
        {
            /*
            this.sexTip.push 
            (game.Texture.fromFrame ('SexTips_10_00000.png'));
            */
        //}
        
        /*
        this.runAnim = [game.Texture.fromFrame('run01.png'),    
            game.Texture.fromFrame('run02.png'),    
            game.Texture.fromFrame('run03.png')];
            
            this.jumpAnim = [game.Texture.fromFrame('jump01.png'),    
            game.Texture.fromFrame('jump02﻿.png'),    
            game.Texture.fromFrame('jump03.png')];
            
            this.sprite = new game.Animation(this.runAnim);
            
            // Change anim
            this.sprite.textures = this.jumpAnim;    
        */
        
        
    }
});



});
