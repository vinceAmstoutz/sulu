define(["services/sulumedia/media-manager"],function(a){"use strict";var b={options:{instanceName:"play-video-overlay"},templates:{video:['<div class="media-play-video-container">','   <video id="<%= playVideoId %>" controls>','       <source src="<%= videoUrl %>" />',"   </video>","</div>"].join("")}},c={loadingClass:"loading",loaderClass:"media-play-video-loader",playVideoId:"media-play-video-id",eventNamespace:"sulu.media-play-video."};return{defaults:b,events:{names:{initialized:{postFix:"initialized"},closed:{postFix:"closed"}},namespace:c.eventNamespace},initialize:function(){if(this.options=this.sandbox.util.extend(!0,{},b,this.options),!this.options.videoId)throw new Error("videoId not defined");this.startLoadingOverlay(),this.loadVideo(this.options.videoId,this.options.locale).then(function(a){this.startVideoOverlay(a)}.bind(this)),this.events.initialized()},startLoadingOverlay:function(){var a=this.sandbox.dom.createElement('<div class="'+c.loadingClass+'"/>'),b=this.sandbox.dom.createElement('<div class="'+c.loaderClass+'" />');this.sandbox.dom.append(this.$el,a),this.sandbox.once("husky.overlay.media-play-video.loading.opened",function(){this.sandbox.start([{name:"loader@husky",options:{el:b,size:"100px",color:"#cccccc"}}])}.bind(this)),this.sandbox.start([{name:"overlay@husky",options:{el:a,skin:"wide",openOnStart:!0,removeOnClose:!0,instanceName:"media-play-video.loading",closeIcon:"",slides:[{title:this.sandbox.translate("sulu.media.play-video.loading"),data:b,okInactive:!0,buttons:[{type:"cancel",inactive:!1,text:"public.cancel",align:"left"}]}]}}])},loadVideo:function(b,c){var d,e=$.Deferred();return d=a.loadOrNew(b,c),d.then(function(a){e.resolve(a)}.bind(this)),e},startVideoOverlay:function(a){var b,d,e=a.url+"&inline=1";b=this.sandbox.dom.createElement('<div class="'+c.singleEditClass+'" id="media-form"/>'),d=this.templates.video({videoUrl:e,playVideoId:c.playVideoId}),this.sandbox.dom.append(this.$el,b),this.bindVideoOverlayEvents(),this.sandbox.start([{name:"overlay@husky",options:{el:b,skin:"wide",openOnStart:!0,removeOnClose:!0,instanceName:"media-play-video",propagateEvents:!1,slides:[{title:a.title,data:d,okInactive:!0,buttons:[{type:"cancel",inactive:!1,text:"public.cancel",align:"left"}],cancelCallback:function(){this.sandbox.stop()}.bind(this)}]}}])},bindVideoOverlayEvents:function(){this.sandbox.once("husky.overlay.media-play-video.opened",function(){var a=document.getElementById(c.playVideoId);a.autoplay=!0}.bind(this)),this.sandbox.once("husky.overlay.media-play-video.initialized",function(){this.sandbox.emit("husky.overlay.media-play-video.loading.close")}.bind(this))},destroy:function(){this.events.closed()}}});