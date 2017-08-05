<?php include_once("template-parts/header.php"); ?>
<main class="home">
<div class="container-fluid"> 
	
	<!-- start 'Introducing RC' -->
	<section class="row hero-image" style="background-image: url('images/white-kitten.jpg');">
		<div class="col-sm-10 col-sm-offset-1">
			<h1>ROUNDCARE</h1>
			<h3>Interactive Pet Camera</h3>
		</div>
	</section> <!-- end 'Introducing RC' -->

	<!-- start 'available at' -->
	<section class="row background-blue">
		<div class="col-sm-10 col-sm-offset-1">
						
			<h2>Available at these locations April 15, 2017.</h2>
			<div class="brand-group">
			<a target="_blank" href="http://www.target.com" class="target brand-logos">
				<img src="images/target.png" alt="target logo">
			</a>
			<a target="_blank" href="http://www.walmart.com" class="walmart brand-logos">
				<img src="images/walmart.png" alt="walmart">
			</a>
			</div>


		</div>

	</section>

	<!-- end 'available at' -->

	<!-- start 'video testimonials' -->
	<section class="row ">
		<div class="col-sm-10 col-sm-offset-1">
            <div class="row product-image-row">
			<div class="col-sm-6 testimonial">
				<img src="images/camera-product-outline.png" alt="Roundcare Camera Image" class="img-responsive">
			</div>
		<div class="col-sm-6 testimonial">
			<h3>Take a closer look</h3>
			<a href="/roundcare/product" class="rc-btn-big outline-blue">
				Learn More
			</a>
		</div>
            </div>
		</div>
	</section> 
	<!-- end 'video testimonials' -->

	<!-- start 'reviews' -->
	<section class="row reviews background-blue">
        <!-- html animation -->
        <div>
            <div id="animation_container" style="">
                <canvas id="canvas"  style="display: block; );"></canvas>
                <div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; display: block;">
                </div>
            </div>
        </div>
        <!-- end html animation -->
	</section>
	<!-- end 'reviews here' -->



</div>
</main>

<!-- js for animation -->
<script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>
<script src="roundCare-animate.js"></script>
<script>
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	images = images||{};
	ss = ss||{};
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt) {	
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.roundCareanimate();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
		}
	}
	makeResponsive(false,'both',false,1);	
	fnStartAnimation();
}
</script>
<!-- end animation js -->

<?php include_once("template-parts/footer.php"); ?>

