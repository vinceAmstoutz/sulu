define(function(){"use strict";function a(){}var b=null,c=!1,d=function(a){var b=$('<div id="'+a+'"/>');return $("body").append(b),b},e=function(a){c=!0,this.sandbox.once(a,function(){c=!1}.bind(this))};return a.prototype={startCreateCollectionOverlay:function(a){if(c)return!1;var b=a&&a.id?a.id:null,f=d("create-collection-overlay");this.sandbox.start([{name:"collections/collection-create-overlay@sulumedia",options:{el:f,parent:b}}]),e.call(this,"sulu.collection-add.closed")},startMoveMediaOverlay:function(a,b){if(c)return!1;$.isArray(a)||(a=[a]);var f=d("select-collection-overlay");this.sandbox.start([{name:"collections/collection-select-overlay@sulumedia",options:{el:f,instanceName:"move-media",title:this.sandbox.translate("sulu.media.move.overlay-title"),locale:b,disableIds:a}}]),e.call(this,"sulu.collection-select.move-media.closed")},startMoveCollectionOverlay:function(a,b){if(c)return!1;$.isArray(a)||(a=[a]);var f=d("select-collection-overlay");this.sandbox.start([{name:"collections/collection-select-overlay@sulumedia",options:{el:f,instanceName:"move-collection",title:this.sandbox.translate("sulu.collection.move.overlay-title"),rootCollection:!0,disableIds:a,disabledChildren:!0,locale:b}}]),e.call(this,"sulu.collection-select.move-collection.closed")},startEditMediaOverlay:function(a,b){if(c)return!1;$.isArray(a)||(a=[a]);var f=d("edit-media-overlay");this.sandbox.start([{name:"collections/media-edit-overlay@sulumedia",options:{el:f,mediaIds:a,locale:b}}]),e.call(this,"sulu.media-edit.closed")},startEditCollectionOverlay:function(a,b){if(c)return!1;var f=d("edit-collection-overlay");this.sandbox.start([{name:"collections/collection-edit-overlay@sulumedia",options:{el:f,collectionId:a,locale:b}}]),e.call(this,"sulu.collection-edit.closed")},startPermissionSettingsOverlay:function(a,b,f){if(c)return!1;var g=d("permission-settings-overlay");this.sandbox.start([{name:"collections/permission-settings-overlay@sulumedia",options:{el:g,id:a,type:b,securityContext:f}}]),e.call(this,"sulu.permission-settings.closed")},startPlayVideoOverlay:function(a,b){if(c)return!1;var f=d("play-video-overlay");this.sandbox.start([{name:"collections/media-play-video-overlay@sulumedia",options:{el:f,videoId:a,locale:b}}]),e.call(this,"sulu.media-play-video.play-video-overlay.closed")}},a.getInstance=function(){return null===b&&(b=new a),b},a.getInstance()});