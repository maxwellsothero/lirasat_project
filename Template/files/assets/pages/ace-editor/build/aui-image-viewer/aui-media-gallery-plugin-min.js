AUI.add("aui-media-gallery-plugin",function(a){var d=a.Lang,b=a.Do,e="mediaGalleryPlugin";var c=function(g){var f=this;c.superclass.constructor.apply(f,arguments);};c.NAME=e;c.NS="media";a.extend(c,a.MediaViewerPlugin,{initializer:function(g){var f=this;var h=f._handles;h["show"].detach();h["_changeRequest"]=f.beforeHostMethod("_changeRequest",f._changeRequest);h["_changeRequest"]=f.beforeHostMethod("_changeRequest",f._loadImage);}});a.MediaGalleryPlugin=c;a.MediaGallery=a.ImageGallery;},"@VERSION@",{skinnable:false,requires:["aui-media-viewer-plugin","aui-image-viewer-gallery"]});