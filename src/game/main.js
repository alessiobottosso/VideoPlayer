game.module(
    'game.main'
)
.body(function() {
  
//game.addAsset('button.png');

game.createScene('Title', {
    backgroundColor: 'transparent',
    
    init: function() 
    {
        /*
        var button = new game.Button('button.png', function()
        {
            game.system.setScene('Main');
        });
        
        button.sprite.position.x = game.width / 2;
        button.sprite.position.y = 900;
        button.sprite.addTo(this.stage);
        */
    },
    
    mouseup: function()
    {
        game.system.setScene('Main');
    }
});

game.createClass('Button', {
    init: function(texture, callback) 
    {
        this.callback = callback;
        this.sprite = new game.Sprite(texture);
        this.sprite.anchorCenter();
        this.sprite.interactive = true;
        this.sprite.mousedown = this.mousedown.bind(this);
        this.sprite.mouseup = this.mouseup.bind(this);
        this.sprite.mouseupoutside = this.mouseup.bind(this);
        this.sprite.click = this.click.bind(this);
    },
    
    mousedown: function()
    {
        this.sprite.scale.x = 0.9;
        this.sprite.scale.y = 0.9;
    },
    
    mouseup: function()
    {
        this.sprite.scale.x = 1;
        this.sprite.scale.y = 1;
    },
    
    click: function()
    {
        if (typeof this.callback === 'function')
        {
            this.callback();
        }
    }
}),

game.createScene('Main', {
    backgroundColor: 'transparent',
    
    init: function() 
    {
        /*
        var video = document.getElementById('video');
        if (video != null)
        {
            video.play();
        }
        */
        
        var i = 0;
        var sexTip = [];
        
        while (i <= 75)
        {
            if (i < 10)
            {
                game.addAsset('SexTips_10_0000' + i + '.png');
                sexTip.push(game.Texture.fromAsset(
                    'SexTips_10_0000' + i + '.png'));
            }
            else
            {
                game.addAsset('SexTips_10_000' + i + '.png');
                sexTip.push(game.Texture.fromAsset(
                    'SexTips_10_000' + i + '.png'));
            }
            
            i+=1;
        }
        
        this.sprite = new game.Animation(sexTip);
        
        this.sprite.addTo(this.stage);
        
        this.sprite.play();
        
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
