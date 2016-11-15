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
				<img src="images/walma2rt.png" alt="walmart">
			</a>
			</div>
		</div>

	</section>

	<!-- end 'available at' -->

	<!-- start 'video testimonials' -->
	<section class="row product-image-row">
			<div class="col-sm-6 testimonial">
				<img src="images/camera-product-outline.png" alt="Roundcare Camera Image" class="img-responsive">
			</div>
		<div class="col-sm-6 testimonial">
			<h3>Take a closer look</h3>
			<a href="/roundcare/product" class="rc-btn-big outline-blue">
				Learn More
			</a>
		</div>
	</section> 
	<!-- end 'video testimonials' -->

	<!-- start 'reviews' -->
	<section class="row reviews background-blue">
		<div class="col-sm-10 col-sm-offset-1">
			<h2>Product Reviews</h2>
			<?php include_once("template-parts/testimonials.php"); ?>

		</div>
	</section>
	<!-- end 'reviews here' -->



</div>
</main>

<?php include_once("template-parts/footer.php"); ?>

