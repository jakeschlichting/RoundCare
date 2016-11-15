(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"roundCare_animate_atlas_", frames: [[0,1023,1107,1004],[1440,1023,187,429],[1109,1379,106,33],[1191,1300,76,27],[1191,1329,44,20],[1109,1023,329,275],[1109,1300,80,77],[0,2029,1696,231],[0,0,1854,1021],[0,2262,1641,113]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Asset783x = function() {
	this.spriteSheet = ss["roundCare_animate_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Asset793x = function() {
	this.spriteSheet = ss["roundCare_animate_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Asset813x = function() {
	this.spriteSheet = ss["roundCare_animate_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Asset823x = function() {
	this.spriteSheet = ss["roundCare_animate_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Asset833x = function() {
	this.spriteSheet = ss["roundCare_animate_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Asset843x = function() {
	this.spriteSheet = ss["roundCare_animate_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Asset853x = function() {
	this.spriteSheet = ss["roundCare_animate_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Asset863x = function() {
	this.spriteSheet = ss["roundCare_animate_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Asset873x = function() {
	this.spriteSheet = ss["roundCare_animate_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Asset883x = function() {
	this.spriteSheet = ss["roundCare_animate_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.workLate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Asset883x();
	this.instance.parent = this;
	this.instance.setTransform(-123,-8.4,0.15,0.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.workLate, new cjs.Rectangle(-123,-8.4,246.1,17), null);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Asset813x();
	this.instance.parent = this;
	this.instance.setTransform(-10.3,-3.2,0.195,0.195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-3.2,20.7,6.5);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Asset823x();
	this.instance.parent = this;
	this.instance.setTransform(-7.4,-2.6,0.195,0.195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-2.6,14.9,5.3);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Asset833x();
	this.instance.parent = this;
	this.instance.setTransform(-4.3,-1.9,0.195,0.195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-1.9,8.6,3.9);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Asset783x();
	this.instance.parent = this;
	this.instance.setTransform(-124.7,-113.1,0.225,0.225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.7,-113.1,249.5,226.3);


(lib.RoundCare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Asset863x();
	this.instance.parent = this;
	this.instance.setTransform(-127.7,-17.4,0.151,0.151);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.RoundCare, new cjs.Rectangle(-127.7,-17.4,255.5,34.8), null);


(lib.iphone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Asset873x();
	this.instance.parent = this;
	this.instance.setTransform(-214.1,-117.9,0.231,0.231);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.iphone, new cjs.Rectangle(-214.1,-117.9,428.2,235.8), null);


(lib.dogtail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Asset793x();
	this.instance.parent = this;
	this.instance.setTransform(-21,-48.3,0.225,0.225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dogtail, new cjs.Rectangle(-21,-48.3,42.2,96.7), null);


(lib.wireless = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// Layer 1
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-2.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({startPosition:0},10).to({_off:true},1).wait(20).to({_off:false},0).wait(30));

	// Layer 2
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.2,0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({startPosition:0},19).to({_off:true},1).wait(10).to({_off:false},0).wait(40));

	// Layer 3
	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.2,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},29).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,1.5,8.6,3.9);


(lib.dogbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_250 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(250).call(this.frame_250).wait(64));

	// dogtail
	this.instance = new lib.dogtail();
	this.instance.parent = this;
	this.instance.setTransform(84,-38.5,1,1,-4.8,0,0,3.6,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:3.7,regY:38.9,rotation:22.1,x:84.2,y:-38.6},4).to({regX:3.6,regY:39,rotation:-4.8,x:84,y:-38.5},3).to({regX:3.7,regY:38.9,rotation:24.2,x:84.2,y:-38.6},3).to({regY:39,rotation:-10,x:84.1,y:-38.5},3).to({regX:3.6,rotation:-4.8,x:84},3).to({regX:3.7,regY:38.9,rotation:22.1,x:84.2,y:-38.6},3).to({regX:3.6,regY:39,rotation:-4.8,x:84,y:-38.5},3).to({regX:3.7,regY:38.9,rotation:24.2,x:84.2,y:-38.6},3).to({regY:39,rotation:-10,x:84.1,y:-38.5},3).to({regX:3.6,rotation:-4.8,x:84},3).to({regX:3.7,regY:38.9,rotation:22.1,x:84.2,y:-38.6},4).to({regX:3.6,regY:39,rotation:-4.8,x:84,y:-38.5},3).to({regX:3.7,regY:38.9,rotation:24.2,x:84.2,y:-38.6},2).to({regY:39,rotation:-10,x:84.1,y:-38.5},4).to({regX:3.6,rotation:-4.8,x:84},3).to({regX:3.7,regY:38.9,rotation:22.1,x:84.2,y:-38.6},4).to({regX:3.6,regY:39,rotation:-4.8,x:84,y:-38.5},3).to({regX:3.7,regY:38.9,rotation:24.2,x:84.2,y:-38.6},2).to({regY:39,rotation:-10,x:84.1,y:-38.5},4).to({regX:3.6,rotation:-4.8,x:84},4).to({regX:3.7,regY:38.9,rotation:22.1,x:84.2,y:-38.6},4).to({regX:3.6,regY:39,rotation:-4.8,x:84,y:-38.5},3).to({regX:3.7,regY:38.9,rotation:24.2,x:84.2,y:-38.6},2).to({regY:39,rotation:-10,x:84.1,y:-38.5},4).to({rotation:-10},3).to({regX:3.6,rotation:-4.8,x:84},5).to({regX:3.7,regY:38.9,rotation:22.1,x:84.2,y:-38.6},4).to({regX:3.6,regY:39,rotation:-4.8,x:84,y:-38.5},3).to({regX:3.7,regY:38.9,rotation:24.2,x:84.2,y:-38.6},3).to({regY:39,rotation:-10,x:84.1,y:-38.5},3).to({regX:3.6,rotation:-4.8,x:84},3).to({regX:3.7,regY:38.9,rotation:22.1,x:84.2,y:-38.6},3).to({regX:3.6,regY:39,rotation:-4.8,x:84,y:-38.5},3).to({regX:3.7,regY:38.9,rotation:24.2,x:84.2,y:-38.6},3).to({regY:39,rotation:-10,x:84.1,y:-38.5},3).to({regX:3.6,rotation:-4.8,x:84},3).to({regX:3.7,regY:38.9,rotation:22.1,x:84.2,y:-38.6},4).to({regX:3.6,regY:39,rotation:-4.8,x:84,y:-38.5},3).to({regX:3.7,regY:38.9,rotation:24.2,x:84.2,y:-38.6},2).to({regY:39,rotation:-10,x:84.1,y:-38.5},4).to({regX:3.6,rotation:-4.8,x:84},3).to({regX:3.7,regY:38.9,rotation:22.1,x:84.2,y:-38.6},4).to({regX:3.6,regY:39,rotation:-4.8,x:84,y:-38.5},3).to({regX:3.7,regY:38.9,rotation:24.2,x:84.2,y:-38.6},2).to({regY:39,rotation:-10,x:84.1,y:-38.5},4).to({regX:3.6,rotation:-4.8,x:84},4).to({regX:3.7,regY:38.9,rotation:22.1,x:84.2,y:-38.6},4).to({regX:3.6,regY:39,rotation:-4.8,x:84,y:-38.5},3).to({regX:3.7,regY:38.9,rotation:24.2,x:84.2,y:-38.6},2).to({regY:39,rotation:-10,x:84.1,y:-38.5},4).to({rotation:-10},3).to({regX:3.6,rotation:-4.8,x:84},5).to({regX:3.7,regY:38.9,rotation:22.1,x:84.2,y:-38.6},4).to({regX:3.6,regY:39,rotation:-4.8,x:84,y:-38.5},3).to({regX:3.7,regY:38.9,rotation:24.2,x:84.2,y:-38.6},3).to({regY:39,rotation:-10,x:84.1,y:-38.5},3).to({regX:3.6,rotation:-4.8,x:84},3).to({regX:3.7,regY:38.9,rotation:22.1,x:84.2,y:-38.6},3).to({regX:3.6,regY:39,rotation:-4.8,x:84,y:-38.5},3).to({regX:3.7,regY:38.9,rotation:24.2,x:84.2,y:-38.6},3).to({regY:39,rotation:-10,x:84.1,y:-38.5},3).to({regX:3.6,rotation:-4.8,x:84},3).to({regX:3.7,regY:38.9,rotation:22.1,x:84.2,y:-38.6},4).to({regX:3.6,regY:39,rotation:-4.8,x:84,y:-38.5},3).to({regX:3.7,regY:38.9,rotation:24.2,x:84.2,y:-38.6},2).to({regY:39,rotation:-10,x:84.1,y:-38.5},4).to({regX:3.6,rotation:-4.8,x:84},3).to({regX:3.7,regY:38.9,rotation:22.1,x:84.2,y:-38.6},4).to({regX:3.6,regY:39,rotation:-4.8,x:84,y:-38.5},3).to({regX:3.7,regY:38.9,rotation:24.2,x:84.2,y:-38.6},2).to({regY:39,rotation:-10,x:84.1,y:-38.5},4).to({regX:3.6,rotation:-4.8,x:84},4).to({regX:3.7,regY:38.9,rotation:22.1,x:84.2,y:-38.6},4).to({regX:3.6,regY:39,rotation:-4.8,x:84,y:-38.5},3).to({regX:3.7,regY:38.9,rotation:24.2,x:84.2,y:-38.6},2).to({regY:39,rotation:-10,x:84.1,y:-38.5},4).to({rotation:-10},3).to({_off:true},1).wait(63));

	// dogbody
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},251).wait(63));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.7,-126.9,249.5,240.1);


// stage content:
(lib.roundCareanimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_339 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(339).call(this.frame_339).wait(3));

	// wireless
	this.instance = new lib.wireless();
	this.instance.parent = this;
	this.instance.setTransform(231.6,87.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(259).to({_off:false},0).wait(80).to({_off:true},1).wait(2));

	// paw
	this.instance_1 = new lib.Asset853x();
	this.instance_1.parent = this;
	this.instance_1.setTransform(205.4,115.2,0.156,0.156);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(259).to({_off:false},0).to({_off:true},81).wait(2));

	// house
	this.instance_2 = new lib.Asset843x();
	this.instance_2.parent = this;
	this.instance_2.setTransform(197.5,92,0.14,0.14);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(259).to({_off:false},0).to({_off:true},81).wait(2));

	// maskTwo (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_185 = new cjs.Graphics().p("AthOwIAAoTMAzTAAAIAAITg");
	var mask_graphics_186 = new cjs.Graphics().p("AtcOwIAAoTMAzUAAAIAAITg");
	var mask_graphics_187 = new cjs.Graphics().p("AtXOwIAAoTMAzUAAAIAAITg");
	var mask_graphics_188 = new cjs.Graphics().p("AtSOvIAAoTMAzUAAAIAAITg");
	var mask_graphics_189 = new cjs.Graphics().p("AtNOvIAAoTMAzUAAAIAAITg");
	var mask_graphics_190 = new cjs.Graphics().p("AtIOvIAAoTMAzUAAAIAAITg");
	var mask_graphics_191 = new cjs.Graphics().p("AtDOvIAAoTMAzUAAAIAAITg");
	var mask_graphics_192 = new cjs.Graphics().p("As+OvIAAoTMAzUAAAIAAITg");
	var mask_graphics_193 = new cjs.Graphics().p("As5OvIAAoTMAzUAAAIAAITg");
	var mask_graphics_194 = new cjs.Graphics().p("As0OuIAAoTMAzUAAAIAAITg");
	var mask_graphics_195 = new cjs.Graphics().p("AsvOuIAAoTMAzUAAAIAAITg");
	var mask_graphics_196 = new cjs.Graphics().p("AsqOuIAAoTMAzUAAAIAAITg");
	var mask_graphics_197 = new cjs.Graphics().p("AslOuIAAoTMAzUAAAIAAITg");
	var mask_graphics_198 = new cjs.Graphics().p("AsgOuIAAoTMAzUAAAIAAITg");
	var mask_graphics_199 = new cjs.Graphics().p("AsbOuIAAoTMAzUAAAIAAITg");
	var mask_graphics_200 = new cjs.Graphics().p("AsWOtIAAoTMAzUAAAIAAITg");
	var mask_graphics_201 = new cjs.Graphics().p("AsROtIAAoTMAzUAAAIAAITg");
	var mask_graphics_202 = new cjs.Graphics().p("AsMOtIAAoTMAzUAAAIAAITg");
	var mask_graphics_203 = new cjs.Graphics().p("AsHOtIAAoTMAzUAAAIAAITg");
	var mask_graphics_204 = new cjs.Graphics().p("AsCOtIAAoTMAzUAAAIAAITg");
	var mask_graphics_205 = new cjs.Graphics().p("Ar9OtIAAoTMAzUAAAIAAITg");
	var mask_graphics_206 = new cjs.Graphics().p("Ar3OsIAAoTMAzUAAAIAAITg");
	var mask_graphics_207 = new cjs.Graphics().p("AryOsIAAoTMAzUAAAIAAITg");
	var mask_graphics_208 = new cjs.Graphics().p("ArtOsIAAoTMAzUAAAIAAITg");
	var mask_graphics_209 = new cjs.Graphics().p("AroOsIAAoTMAzUAAAIAAITg");
	var mask_graphics_210 = new cjs.Graphics().p("ArjOsIAAoTMAzUAAAIAAITg");
	var mask_graphics_211 = new cjs.Graphics().p("AreOsIAAoTMAzUAAAIAAITg");
	var mask_graphics_212 = new cjs.Graphics().p("ArZOrIAAoTMAzUAAAIAAITg");
	var mask_graphics_213 = new cjs.Graphics().p("ArUOrIAAoTMAzUAAAIAAITg");
	var mask_graphics_214 = new cjs.Graphics().p("ArPOrIAAoTMAzUAAAIAAITg");
	var mask_graphics_215 = new cjs.Graphics().p("ArKOrIAAoTMAzUAAAIAAITg");
	var mask_graphics_216 = new cjs.Graphics().p("ArFOrIAAoTMAzUAAAIAAITg");
	var mask_graphics_217 = new cjs.Graphics().p("ArAOrIAAoTMAzUAAAIAAITg");
	var mask_graphics_218 = new cjs.Graphics().p("Aq7OqIAAoTMAzUAAAIAAITg");
	var mask_graphics_219 = new cjs.Graphics().p("Aq2OqIAAoTMAzUAAAIAAITg");
	var mask_graphics_220 = new cjs.Graphics().p("AqxOqIAAoTMAzUAAAIAAITg");
	var mask_graphics_221 = new cjs.Graphics().p("AqsOqIAAoTMAzUAAAIAAITg");
	var mask_graphics_222 = new cjs.Graphics().p("AqnOqIAAoTMAzUAAAIAAITg");
	var mask_graphics_223 = new cjs.Graphics().p("AqiOpIAAoTMAzUAAAIAAITg");
	var mask_graphics_224 = new cjs.Graphics().p("AqdOpIAAoTMAzUAAAIAAITg");
	var mask_graphics_225 = new cjs.Graphics().p("AqYOpIAAoTMAzUAAAIAAITg");
	var mask_graphics_226 = new cjs.Graphics().p("AqTOpIAAoTMAzUAAAIAAITg");
	var mask_graphics_227 = new cjs.Graphics().p("AqNOpIAAoTMAzUAAAIAAITg");
	var mask_graphics_228 = new cjs.Graphics().p("AqIOpIAAoTMAzUAAAIAAITg");
	var mask_graphics_229 = new cjs.Graphics().p("AqDOoIAAoTMAzUAAAIAAITg");
	var mask_graphics_230 = new cjs.Graphics().p("Ap+OoIAAoTMAzUAAAIAAITg");
	var mask_graphics_231 = new cjs.Graphics().p("Ap5OoIAAoTMAzUAAAIAAITg");
	var mask_graphics_232 = new cjs.Graphics().p("Ap0OoIAAoTMAzUAAAIAAITg");
	var mask_graphics_233 = new cjs.Graphics().p("ApvOoIAAoTMAzUAAAIAAITg");
	var mask_graphics_234 = new cjs.Graphics().p("ApqOoIAAoTMAzUAAAIAAITg");
	var mask_graphics_235 = new cjs.Graphics().p("AplOnIAAoTMAzUAAAIAAITg");
	var mask_graphics_236 = new cjs.Graphics().p("ApgOnIAAoTMAzUAAAIAAITg");
	var mask_graphics_237 = new cjs.Graphics().p("ApbOnIAAoTMAzUAAAIAAITg");
	var mask_graphics_238 = new cjs.Graphics().p("ApWOnIAAoTMAzUAAAIAAITg");
	var mask_graphics_239 = new cjs.Graphics().p("ApROnIAAoTMAzUAAAIAAITg");
	var mask_graphics_240 = new cjs.Graphics().p("ApMOnIAAoTMAzUAAAIAAITg");
	var mask_graphics_241 = new cjs.Graphics().p("ApHOmIAAoTMAzUAAAIAAITg");
	var mask_graphics_242 = new cjs.Graphics().p("ApCOmIAAoTMAzUAAAIAAITg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(185).to({graphics:mask_graphics_185,x:241.8,y:94.4}).wait(1).to({graphics:mask_graphics_186,x:242.4,y:94.4}).wait(1).to({graphics:mask_graphics_187,x:242.9,y:94.4}).wait(1).to({graphics:mask_graphics_188,x:243.4,y:94.3}).wait(1).to({graphics:mask_graphics_189,x:243.9,y:94.3}).wait(1).to({graphics:mask_graphics_190,x:244.4,y:94.3}).wait(1).to({graphics:mask_graphics_191,x:244.9,y:94.3}).wait(1).to({graphics:mask_graphics_192,x:245.4,y:94.3}).wait(1).to({graphics:mask_graphics_193,x:245.9,y:94.3}).wait(1).to({graphics:mask_graphics_194,x:246.4,y:94.2}).wait(1).to({graphics:mask_graphics_195,x:246.9,y:94.2}).wait(1).to({graphics:mask_graphics_196,x:247.4,y:94.2}).wait(1).to({graphics:mask_graphics_197,x:247.9,y:94.2}).wait(1).to({graphics:mask_graphics_198,x:248.4,y:94.2}).wait(1).to({graphics:mask_graphics_199,x:248.9,y:94.2}).wait(1).to({graphics:mask_graphics_200,x:249.4,y:94.1}).wait(1).to({graphics:mask_graphics_201,x:249.9,y:94.1}).wait(1).to({graphics:mask_graphics_202,x:250.4,y:94.1}).wait(1).to({graphics:mask_graphics_203,x:250.9,y:94.1}).wait(1).to({graphics:mask_graphics_204,x:251.4,y:94.1}).wait(1).to({graphics:mask_graphics_205,x:251.9,y:94.1}).wait(1).to({graphics:mask_graphics_206,x:252.5,y:94}).wait(1).to({graphics:mask_graphics_207,x:253,y:94}).wait(1).to({graphics:mask_graphics_208,x:253.5,y:94}).wait(1).to({graphics:mask_graphics_209,x:254,y:94}).wait(1).to({graphics:mask_graphics_210,x:254.5,y:94}).wait(1).to({graphics:mask_graphics_211,x:255,y:94}).wait(1).to({graphics:mask_graphics_212,x:255.5,y:93.9}).wait(1).to({graphics:mask_graphics_213,x:256,y:93.9}).wait(1).to({graphics:mask_graphics_214,x:256.5,y:93.9}).wait(1).to({graphics:mask_graphics_215,x:257,y:93.9}).wait(1).to({graphics:mask_graphics_216,x:257.5,y:93.9}).wait(1).to({graphics:mask_graphics_217,x:258,y:93.9}).wait(1).to({graphics:mask_graphics_218,x:258.5,y:93.8}).wait(1).to({graphics:mask_graphics_219,x:259,y:93.8}).wait(1).to({graphics:mask_graphics_220,x:259.5,y:93.8}).wait(1).to({graphics:mask_graphics_221,x:260,y:93.8}).wait(1).to({graphics:mask_graphics_222,x:260.5,y:93.8}).wait(1).to({graphics:mask_graphics_223,x:261,y:93.8}).wait(1).to({graphics:mask_graphics_224,x:261.5,y:93.7}).wait(1).to({graphics:mask_graphics_225,x:262,y:93.7}).wait(1).to({graphics:mask_graphics_226,x:262.5,y:93.7}).wait(1).to({graphics:mask_graphics_227,x:263.1,y:93.7}).wait(1).to({graphics:mask_graphics_228,x:263.6,y:93.7}).wait(1).to({graphics:mask_graphics_229,x:264.1,y:93.6}).wait(1).to({graphics:mask_graphics_230,x:264.6,y:93.6}).wait(1).to({graphics:mask_graphics_231,x:265.1,y:93.6}).wait(1).to({graphics:mask_graphics_232,x:265.6,y:93.6}).wait(1).to({graphics:mask_graphics_233,x:266.1,y:93.6}).wait(1).to({graphics:mask_graphics_234,x:266.6,y:93.6}).wait(1).to({graphics:mask_graphics_235,x:267.1,y:93.5}).wait(1).to({graphics:mask_graphics_236,x:267.6,y:93.5}).wait(1).to({graphics:mask_graphics_237,x:268.1,y:93.5}).wait(1).to({graphics:mask_graphics_238,x:268.6,y:93.5}).wait(1).to({graphics:mask_graphics_239,x:269.1,y:93.5}).wait(1).to({graphics:mask_graphics_240,x:269.6,y:93.5}).wait(1).to({graphics:mask_graphics_241,x:270.1,y:93.4}).wait(1).to({graphics:mask_graphics_242,x:270.6,y:93.4}).wait(100));

	// textTwo
	this.instance_3 = new lib.workLate();
	this.instance_3.parent = this;
	this.instance_3.setTransform(23.1,150.8);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(185).to({_off:false},0).to({x:374.1,y:147.7},57).wait(100));

	// maskTwo (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_129 = new cjs.Graphics().p("AxWLUIAAoTMA54AAAIAAITg");
	var mask_1_graphics_130 = new cjs.Graphics().p("AxWLUIAAoTMA59AAAIAAITg");
	var mask_1_graphics_131 = new cjs.Graphics().p("AxVLUIAAoTMA6AAAAIAAITg");
	var mask_1_graphics_132 = new cjs.Graphics().p("AxULUIAAoTMA6EAAAIAAITg");
	var mask_1_graphics_133 = new cjs.Graphics().p("AxTLUIAAoTMA6IAAAIAAITg");
	var mask_1_graphics_134 = new cjs.Graphics().p("AxSLUIAAoTMA6MAAAIAAITg");
	var mask_1_graphics_135 = new cjs.Graphics().p("AxRLUIAAoTMA6QAAAIAAITg");
	var mask_1_graphics_136 = new cjs.Graphics().p("AxQLUIAAoTMA6UAAAIAAITg");
	var mask_1_graphics_137 = new cjs.Graphics().p("AxPLUIAAoTMA6XAAAIAAITg");
	var mask_1_graphics_138 = new cjs.Graphics().p("AxOLUIAAoTMA6bAAAIAAITg");
	var mask_1_graphics_139 = new cjs.Graphics().p("AxOLUIAAoTMA6gAAAIAAITg");
	var mask_1_graphics_140 = new cjs.Graphics().p("AxNLUIAAoTMA6kAAAIAAITg");
	var mask_1_graphics_141 = new cjs.Graphics().p("AxMLUIAAoTMA6oAAAIAAITg");
	var mask_1_graphics_142 = new cjs.Graphics().p("AxLLUIAAoTMA6sAAAIAAITg");
	var mask_1_graphics_143 = new cjs.Graphics().p("AxKLUIAAoTMA6vAAAIAAITg");
	var mask_1_graphics_144 = new cjs.Graphics().p("AxJLUIAAoTMA6zAAAIAAITg");
	var mask_1_graphics_145 = new cjs.Graphics().p("AxILUIAAoTMA63AAAIAAITg");
	var mask_1_graphics_146 = new cjs.Graphics().p("AxHLUIAAoTMA67AAAIAAITg");
	var mask_1_graphics_147 = new cjs.Graphics().p("AxHLUIAAoTMA7AAAAIAAITg");
	var mask_1_graphics_148 = new cjs.Graphics().p("AxGLUIAAoTMA7EAAAIAAITg");
	var mask_1_graphics_149 = new cjs.Graphics().p("AxFLUIAAoTMA7HAAAIAAITg");
	var mask_1_graphics_150 = new cjs.Graphics().p("AxELUIAAoTMA7LAAAIAAITg");
	var mask_1_graphics_151 = new cjs.Graphics().p("AxDLUIAAoTMA7PAAAIAAITg");
	var mask_1_graphics_152 = new cjs.Graphics().p("AxCLUIAAoTMA7TAAAIAAITg");
	var mask_1_graphics_153 = new cjs.Graphics().p("AxBLUIAAoTMA7XAAAIAAITg");
	var mask_1_graphics_154 = new cjs.Graphics().p("AxALUIAAoTMA7bAAAIAAITg");
	var mask_1_graphics_155 = new cjs.Graphics().p("Aw/LUIAAoTMA7eAAAIAAITg");
	var mask_1_graphics_156 = new cjs.Graphics().p("Aw/LUIAAoTMA7jAAAIAAITg");
	var mask_1_graphics_157 = new cjs.Graphics().p("Aw+LUIAAoTMA7nAAAIAAITg");
	var mask_1_graphics_158 = new cjs.Graphics().p("Aw9LUIAAoTMA7rAAAIAAITg");
	var mask_1_graphics_159 = new cjs.Graphics().p("Aw8LUIAAoTMA7vAAAIAAITg");
	var mask_1_graphics_160 = new cjs.Graphics().p("Aw7LUIAAoTMA7yAAAIAAITg");
	var mask_1_graphics_161 = new cjs.Graphics().p("Aw6LUIAAoTMA72AAAIAAITg");
	var mask_1_graphics_162 = new cjs.Graphics().p("Aw5LUIAAoTMA76AAAIAAITg");
	var mask_1_graphics_163 = new cjs.Graphics().p("Aw4LUIAAoTMA7+AAAIAAITg");
	var mask_1_graphics_164 = new cjs.Graphics().p("Aw3LUIAAoTMA8CAAAIAAITg");
	var mask_1_graphics_165 = new cjs.Graphics().p("Aw3LUIAAoTMA8HAAAIAAITg");
	var mask_1_graphics_166 = new cjs.Graphics().p("Aw2LUIAAoTMA8KAAAIAAITg");
	var mask_1_graphics_167 = new cjs.Graphics().p("Aw1LUIAAoTMA8OAAAIAAITg");
	var mask_1_graphics_168 = new cjs.Graphics().p("Aw0LUIAAoTMA8SAAAIAAITg");
	var mask_1_graphics_169 = new cjs.Graphics().p("AwzLUIAAoTMA8WAAAIAAITg");
	var mask_1_graphics_170 = new cjs.Graphics().p("AwyLUIAAoTMA8aAAAIAAITg");
	var mask_1_graphics_171 = new cjs.Graphics().p("AwxLUIAAoTMA8eAAAIAAITg");
	var mask_1_graphics_172 = new cjs.Graphics().p("AwwLUIAAoTMA8hAAAIAAITg");
	var mask_1_graphics_173 = new cjs.Graphics().p("AwvLUIAAoTMA8lAAAIAAITg");
	var mask_1_graphics_174 = new cjs.Graphics().p("AwvLUIAAoTMA8qAAAIAAITg");
	var mask_1_graphics_175 = new cjs.Graphics().p("AwuLUIAAoTMA8uAAAIAAITg");
	var mask_1_graphics_176 = new cjs.Graphics().p("AwtLUIAAoTMA8yAAAIAAITg");
	var mask_1_graphics_177 = new cjs.Graphics().p("AwsLUIAAoTMA82AAAIAAITg");
	var mask_1_graphics_178 = new cjs.Graphics().p("AwrLUIAAoTMA85AAAIAAITg");
	var mask_1_graphics_179 = new cjs.Graphics().p("AwqLUIAAoTMA89AAAIAAITg");
	var mask_1_graphics_180 = new cjs.Graphics().p("AwpLUIAAoTMA9BAAAIAAITg");
	var mask_1_graphics_181 = new cjs.Graphics().p("AwoLUIAAoTMA9FAAAIAAITg");
	var mask_1_graphics_182 = new cjs.Graphics().p("AwoLUIAAoTMA9KAAAIAAITg");
	var mask_1_graphics_183 = new cjs.Graphics().p("AwnLUIAAoTMA9NAAAIAAITg");
	var mask_1_graphics_184 = new cjs.Graphics().p("AwmLUIAAoTMA9RAAAIAAITg");
	var mask_1_graphics_185 = new cjs.Graphics().p("AwlLUIAAoTMA9WAAAIAAITg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(129).to({graphics:mask_1_graphics_129,x:259.4,y:72.4}).wait(1).to({graphics:mask_1_graphics_130,x:259.9,y:72.4}).wait(1).to({graphics:mask_1_graphics_131,x:260.3,y:72.4}).wait(1).to({graphics:mask_1_graphics_132,x:260.8,y:72.4}).wait(1).to({graphics:mask_1_graphics_133,x:261.3,y:72.4}).wait(1).to({graphics:mask_1_graphics_134,x:261.8,y:72.4}).wait(1).to({graphics:mask_1_graphics_135,x:262.3,y:72.4}).wait(1).to({graphics:mask_1_graphics_136,x:262.8,y:72.4}).wait(1).to({graphics:mask_1_graphics_137,x:263.2,y:72.4}).wait(1).to({graphics:mask_1_graphics_138,x:263.7,y:72.4}).wait(1).to({graphics:mask_1_graphics_139,x:264.2,y:72.4}).wait(1).to({graphics:mask_1_graphics_140,x:264.7,y:72.4}).wait(1).to({graphics:mask_1_graphics_141,x:265.2,y:72.4}).wait(1).to({graphics:mask_1_graphics_142,x:265.7,y:72.4}).wait(1).to({graphics:mask_1_graphics_143,x:266.1,y:72.4}).wait(1).to({graphics:mask_1_graphics_144,x:266.6,y:72.4}).wait(1).to({graphics:mask_1_graphics_145,x:267.1,y:72.4}).wait(1).to({graphics:mask_1_graphics_146,x:267.6,y:72.4}).wait(1).to({graphics:mask_1_graphics_147,x:268.1,y:72.4}).wait(1).to({graphics:mask_1_graphics_148,x:268.6,y:72.4}).wait(1).to({graphics:mask_1_graphics_149,x:269,y:72.4}).wait(1).to({graphics:mask_1_graphics_150,x:269.5,y:72.4}).wait(1).to({graphics:mask_1_graphics_151,x:270,y:72.4}).wait(1).to({graphics:mask_1_graphics_152,x:270.5,y:72.4}).wait(1).to({graphics:mask_1_graphics_153,x:271,y:72.4}).wait(1).to({graphics:mask_1_graphics_154,x:271.5,y:72.4}).wait(1).to({graphics:mask_1_graphics_155,x:271.9,y:72.4}).wait(1).to({graphics:mask_1_graphics_156,x:272.4,y:72.4}).wait(1).to({graphics:mask_1_graphics_157,x:272.9,y:72.4}).wait(1).to({graphics:mask_1_graphics_158,x:273.4,y:72.4}).wait(1).to({graphics:mask_1_graphics_159,x:273.9,y:72.4}).wait(1).to({graphics:mask_1_graphics_160,x:274.3,y:72.4}).wait(1).to({graphics:mask_1_graphics_161,x:274.8,y:72.4}).wait(1).to({graphics:mask_1_graphics_162,x:275.3,y:72.4}).wait(1).to({graphics:mask_1_graphics_163,x:275.8,y:72.4}).wait(1).to({graphics:mask_1_graphics_164,x:276.3,y:72.4}).wait(1).to({graphics:mask_1_graphics_165,x:276.8,y:72.4}).wait(1).to({graphics:mask_1_graphics_166,x:277.2,y:72.4}).wait(1).to({graphics:mask_1_graphics_167,x:277.7,y:72.4}).wait(1).to({graphics:mask_1_graphics_168,x:278.2,y:72.4}).wait(1).to({graphics:mask_1_graphics_169,x:278.7,y:72.4}).wait(1).to({graphics:mask_1_graphics_170,x:279.2,y:72.4}).wait(1).to({graphics:mask_1_graphics_171,x:279.7,y:72.4}).wait(1).to({graphics:mask_1_graphics_172,x:280.1,y:72.4}).wait(1).to({graphics:mask_1_graphics_173,x:280.6,y:72.4}).wait(1).to({graphics:mask_1_graphics_174,x:281.1,y:72.4}).wait(1).to({graphics:mask_1_graphics_175,x:281.6,y:72.4}).wait(1).to({graphics:mask_1_graphics_176,x:282.1,y:72.4}).wait(1).to({graphics:mask_1_graphics_177,x:282.6,y:72.4}).wait(1).to({graphics:mask_1_graphics_178,x:283,y:72.4}).wait(1).to({graphics:mask_1_graphics_179,x:283.5,y:72.4}).wait(1).to({graphics:mask_1_graphics_180,x:284,y:72.4}).wait(1).to({graphics:mask_1_graphics_181,x:284.5,y:72.4}).wait(1).to({graphics:mask_1_graphics_182,x:285,y:72.4}).wait(1).to({graphics:mask_1_graphics_183,x:285.4,y:72.4}).wait(1).to({graphics:mask_1_graphics_184,x:285.9,y:72.4}).wait(1).to({graphics:mask_1_graphics_185,x:286.5,y:72.4}).wait(157));

	// text
	this.instance_4 = new lib.RoundCare();
	this.instance_4.parent = this;
	this.instance_4.setTransform(18,114.2);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(129).to({_off:false},0).to({x:379.6},56).to({_off:true},155).wait(2));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EgZ2An6MAAAhPzMAztAAAMAAABPzg");
	var mask_2_graphics_1 = new cjs.Graphics().p("EgaeAn6MAAAhPzMA09AAAMAAABPzg");
	var mask_2_graphics_2 = new cjs.Graphics().p("EgbFAn6MAAAhPzMA2LAAAMAAABPzg");
	var mask_2_graphics_3 = new cjs.Graphics().p("EgbtAn6MAAAhPzMA3bAAAMAAABPzg");
	var mask_2_graphics_4 = new cjs.Graphics().p("EgcUAn6MAAAhPzMA4pAAAMAAABPzg");
	var mask_2_graphics_5 = new cjs.Graphics().p("Egc8An6MAAAhPzMA55AAAMAAABPzg");
	var mask_2_graphics_6 = new cjs.Graphics().p("EgdkAn6MAAAhPzMA7JAAAMAAABPzg");
	var mask_2_graphics_7 = new cjs.Graphics().p("EgeLAn6MAAAhPzMA8XAAAMAAABPzg");
	var mask_2_graphics_8 = new cjs.Graphics().p("EgezAn6MAAAhPzMA9nAAAMAAABPzg");
	var mask_2_graphics_9 = new cjs.Graphics().p("EgfbAn6MAAAhPzMA+3AAAMAAABPzg");
	var mask_2_graphics_10 = new cjs.Graphics().p("EggCAn6MAAAhPzMBAFAAAMAAABPzg");
	var mask_2_graphics_11 = new cjs.Graphics().p("EggqAn6MAAAhPzMBBVAAAMAAABPzg");
	var mask_2_graphics_12 = new cjs.Graphics().p("EghRAn6MAAAhPzMBCjAAAMAAABPzg");
	var mask_2_graphics_13 = new cjs.Graphics().p("Egh5An6MAAAhPzMBDzAAAMAAABPzg");
	var mask_2_graphics_14 = new cjs.Graphics().p("EgihAn6MAAAhPzMBFDAAAMAAABPzg");
	var mask_2_graphics_15 = new cjs.Graphics().p("EgjIAn6MAAAhPzMBGRAAAMAAABPzg");
	var mask_2_graphics_16 = new cjs.Graphics().p("EgjwAn6MAAAhPzMBHhAAAMAAABPzg");
	var mask_2_graphics_17 = new cjs.Graphics().p("EgkYAn6MAAAhPzMBIxAAAMAAABPzg");
	var mask_2_graphics_18 = new cjs.Graphics().p("Egk/An6MAAAhPzMBJ/AAAMAAABPzg");
	var mask_2_graphics_19 = new cjs.Graphics().p("EglnAn6MAAAhPzMBLPAAAMAAABPzg");
	var mask_2_graphics_20 = new cjs.Graphics().p("EgmOAn6MAAAhPzMBMdAAAMAAABPzg");
	var mask_2_graphics_21 = new cjs.Graphics().p("Egm2An6MAAAhPzMBNtAAAMAAABPzg");
	var mask_2_graphics_22 = new cjs.Graphics().p("EgneAn6MAAAhPzMBO9AAAMAAABPzg");
	var mask_2_graphics_23 = new cjs.Graphics().p("EgoFAn6MAAAhPzMBQLAAAMAAABPzg");
	var mask_2_graphics_24 = new cjs.Graphics().p("EgotAn6MAAAhPzMBRbAAAMAAABPzg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EgpVAn6MAAAhPzMBSrAAAMAAABPzg");
	var mask_2_graphics_26 = new cjs.Graphics().p("Egp8An6MAAAhPzMBT5AAAMAAABPzg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EgqkAn6MAAAhPzMBVJAAAMAAABPzg");
	var mask_2_graphics_28 = new cjs.Graphics().p("EgrLAn6MAAAhPzMBWXAAAMAAABPzg");
	var mask_2_graphics_29 = new cjs.Graphics().p("EgrzAn6MAAAhPzMBXnAAAMAAABPzg");
	var mask_2_graphics_30 = new cjs.Graphics().p("EgsbAn6MAAAhPzMBY3AAAMAAABPzg");
	var mask_2_graphics_31 = new cjs.Graphics().p("EgtCAn6MAAAhPzMBaFAAAMAAABPzg");
	var mask_2_graphics_32 = new cjs.Graphics().p("EgtqAn6MAAAhPzMBbVAAAMAAABPzg");
	var mask_2_graphics_33 = new cjs.Graphics().p("EguSAn6MAAAhPzMBclAAAMAAABPzg");
	var mask_2_graphics_34 = new cjs.Graphics().p("Egu5An6MAAAhPzMBdzAAAMAAABPzg");
	var mask_2_graphics_35 = new cjs.Graphics().p("EgvhAn6MAAAhPzMBfDAAAMAAABPzg");
	var mask_2_graphics_36 = new cjs.Graphics().p("EgwIAn6MAAAhPzMBgRAAAMAAABPzg");
	var mask_2_graphics_37 = new cjs.Graphics().p("EgwwAn6MAAAhPzMBhhAAAMAAABPzg");
	var mask_2_graphics_38 = new cjs.Graphics().p("EgxYAn6MAAAhPzMBixAAAMAAABPzg");
	var mask_2_graphics_39 = new cjs.Graphics().p("Egx/An6MAAAhPzMBj/AAAMAAABPzg");
	var mask_2_graphics_40 = new cjs.Graphics().p("EgynAn6MAAAhPzMBlPAAAMAAABPzg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:-21.7,y:146.3}).wait(1).to({graphics:mask_2_graphics_1,x:-21.2,y:146.3}).wait(1).to({graphics:mask_2_graphics_2,x:-20.7,y:146.3}).wait(1).to({graphics:mask_2_graphics_3,x:-20.2,y:146.3}).wait(1).to({graphics:mask_2_graphics_4,x:-19.7,y:146.3}).wait(1).to({graphics:mask_2_graphics_5,x:-19.2,y:146.3}).wait(1).to({graphics:mask_2_graphics_6,x:-18.6,y:146.3}).wait(1).to({graphics:mask_2_graphics_7,x:-18.1,y:146.3}).wait(1).to({graphics:mask_2_graphics_8,x:-17.6,y:146.3}).wait(1).to({graphics:mask_2_graphics_9,x:-17.1,y:146.3}).wait(1).to({graphics:mask_2_graphics_10,x:-16.6,y:146.3}).wait(1).to({graphics:mask_2_graphics_11,x:-16,y:146.3}).wait(1).to({graphics:mask_2_graphics_12,x:-15.5,y:146.3}).wait(1).to({graphics:mask_2_graphics_13,x:-15,y:146.3}).wait(1).to({graphics:mask_2_graphics_14,x:-14.5,y:146.3}).wait(1).to({graphics:mask_2_graphics_15,x:-14,y:146.3}).wait(1).to({graphics:mask_2_graphics_16,x:-13.4,y:146.3}).wait(1).to({graphics:mask_2_graphics_17,x:-12.9,y:146.3}).wait(1).to({graphics:mask_2_graphics_18,x:-12.4,y:146.3}).wait(1).to({graphics:mask_2_graphics_19,x:-11.9,y:146.3}).wait(1).to({graphics:mask_2_graphics_20,x:-11.4,y:146.3}).wait(1).to({graphics:mask_2_graphics_21,x:-10.8,y:146.3}).wait(1).to({graphics:mask_2_graphics_22,x:-10.3,y:146.3}).wait(1).to({graphics:mask_2_graphics_23,x:-9.8,y:146.3}).wait(1).to({graphics:mask_2_graphics_24,x:-9.3,y:146.3}).wait(1).to({graphics:mask_2_graphics_25,x:-8.8,y:146.3}).wait(1).to({graphics:mask_2_graphics_26,x:-8.2,y:146.3}).wait(1).to({graphics:mask_2_graphics_27,x:-7.7,y:146.3}).wait(1).to({graphics:mask_2_graphics_28,x:-7.2,y:146.3}).wait(1).to({graphics:mask_2_graphics_29,x:-6.7,y:146.3}).wait(1).to({graphics:mask_2_graphics_30,x:-6.2,y:146.3}).wait(1).to({graphics:mask_2_graphics_31,x:-5.6,y:146.3}).wait(1).to({graphics:mask_2_graphics_32,x:-5.1,y:146.3}).wait(1).to({graphics:mask_2_graphics_33,x:-4.6,y:146.3}).wait(1).to({graphics:mask_2_graphics_34,x:-4.1,y:146.3}).wait(1).to({graphics:mask_2_graphics_35,x:-3.6,y:146.3}).wait(1).to({graphics:mask_2_graphics_36,x:-3,y:146.3}).wait(1).to({graphics:mask_2_graphics_37,x:-2.5,y:146.3}).wait(1).to({graphics:mask_2_graphics_38,x:-2,y:146.3}).wait(1).to({graphics:mask_2_graphics_39,x:-1.5,y:146.3}).wait(1).to({graphics:mask_2_graphics_40,x:-0.8,y:146.3}).wait(302));

	// dog
	this.instance_5 = new lib.dogbody();
	this.instance_5.parent = this;
	this.instance_5.setTransform(149.5,206.4,1.262,1.262,0,0,0,0.4,0.1);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:155.5,y:207.4},69).to({regX:0.6,regY:0.2,scaleX:0.42,scaleY:0.42,x:163.6,y:191.5},40).to({x:93.5},20).to({_off:true},211).wait(2));

	// iphone
	this.instance_6 = new lib.iphone();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-20.2,176.6,1.578,1.578,90.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:0.1,regY:-0.1,rotation:90,x:161.5,y:176.8},40).wait(29).to({scaleX:0.56,scaleY:0.56,x:159.5,y:178.8},40).to({x:89.4},20).to({_off:true},211).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(67.7,38.2,374.2,676.7);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/roundCare_animate_atlas_.png", id:"roundCare_animate_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;