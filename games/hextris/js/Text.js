function Text(t,i,h,a,o,s){this.x=t,this.y=i,this.font=a,this.color=o,this.opacity=1,this.text=h,this.alive=1,this.draw=function(){return this.alive>0&&(ctx.globalAlpha=this.opacity,renderText(this.x+gdx,this.y+gdy,50,this.color,this.text),ctx.globalAlpha=1,s(this),!0)}}function fadeUpAndOut(t){t.opacity-=MainHex.dt*Math.pow(Math.pow(1-t.opacity,1/3)+1,3)/100,t.alive=t.opacity,t.y-=3*MainHex.dt}