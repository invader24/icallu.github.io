function addKeyListeners(){keypress.register_combo({keys:"left",on_keydown:function(){MainHex&&0!==gameState&&MainHex.rotate(1)}}),keypress.register_combo({keys:"right",on_keydown:function(){MainHex&&0!==gameState&&MainHex.rotate(-1)}}),keypress.register_combo({keys:"down",on_keydown:function(){settings.speedModifier;MainHex&&0!==gameState&&0==settings.speedUpKeyHeld&&(settings.speedUpKeyHeld=!0,window.rush*=4)},on_keyup:function(){MainHex&&0!==gameState&&(window.rush/=4,settings.speedUpKeyHeld=!1)}}),keypress.register_combo({keys:"a",on_keydown:function(){MainHex&&0!==gameState&&MainHex.rotate(1)}}),keypress.register_combo({keys:"d",on_keydown:function(){MainHex&&0!==gameState&&MainHex.rotate(-1)}}),keypress.register_combo({keys:"s",on_keydown:function(){settings.speedModifier;MainHex&&0!==gameState&&0==settings.speedUpKeyHeld&&(settings.speedUpKeyHeld=!0,window.rush*=4)},on_keyup:function(){MainHex&&0!==gameState&&(window.rush/=4,settings.speedUpKeyHeld=!1)}}),keypress.register_combo({keys:"p",on_keydown:function(){pause()}}),keypress.register_combo({keys:"space",on_keydown:function(){pause()}}),keypress.register_combo({keys:"q",on_keydown:function(){devMode&&toggleDevTools()}}),keypress.register_combo({keys:"enter",on_keydown:function(){1!=gameState&&1!=importing||init(1),2==gameState&&(init(),$("#gameoverscreen").fadeOut()),0===gameState&&resumeGame()}}),$("#pauseBtn").on("touchstart mousedown",(function(){if(1==gameState||-1==gameState)return $("#helpScreen").is(":visible")&&$("#helpScreen").fadeOut(150,"linear"),pause(),!1})),$("#colorBlindBtn").on("touchstart mousedown",(function(){window.colors=["#8e44ad","#f1c40f","#3498db","#d35400"],window.hexColorsToTintedColors={"#8e44ad":"rgb(229,152,102)","#f1c40f":"rgb(246,223,133)","#3498db":"rgb(151,201,235)","#d35400":"rgb(210,180,222)"},window.rgbToHex={"rgb(142,68,173)":"#8e44ad","rgb(241,196,15)":"#f1c40f","rgb(52,152,219)":"#3498db","rgb(211,84,0)":"#d35400"},window.rgbColorsToTintedColors={"rgb(142,68,173)":"rgb(229,152,102)","rgb(241,196,15)":"rgb(246,223,133)","rgb(52,152,219)":"rgb(151,201,235)","rgb(46,204,113)":"rgb(210,180,222)"}})),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?$("#restart").on("touchstart",(function(){init(),canRestart=!1,$("#gameoverscreen").fadeOut()})):$("#restart").on("mousedown",(function(){init(),canRestart=!1,$("#gameoverscreen").fadeOut()})),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?$("#restartBtn").on("touchstart",(function(){init(1),canRestart=!1,$("#gameoverscreen").fadeOut()})):$("#restartBtn").on("mousedown",(function(){init(1),canRestart=!1,$("#gameoverscreen").fadeOut()}))}function inside(e,t){for(var n=e[0],o=e[1],r=!1,i=0,s=t.length-1;i<t.length;s=i++){var a=t[i][0],d=t[i][1],g=t[s][0],c=t[s][1];d>o!=c>o&&n<(g-a)*(o-d)/(c-d)+a&&(r=!r)}return r}function handleClickTap(e,t){if(e<120&&t<83&&$(".helpText").is(":visible"))showHelp();else{var n=settings.hexWidth,o=n/2,r=n*(Math.sqrt(3)/2),i=[[n,0],[o,-r],[-o,-r],[-n,0],[-o,r],[o,r]];i=i.map((function(e){return[e[0]+trueCanvas.width/2,e[1]+trueCanvas.height/2]})),MainHex&&0!==gameState&&-1!=gameState&&(e<window.innerWidth/2&&MainHex.rotate(1),e>window.innerWidth/2&&MainHex.rotate(-1))}}