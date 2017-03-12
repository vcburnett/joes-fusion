<footer>
	<div class="ft-links-section">
		<div class="ft-links">
			<a href="javascript:void(0);">Recipes</a>
			<a href="javascript:void(0);">Articles</a>
			<a href="javascript:void(0);">Interviews</a>
			<a href="javascript:void(0);">Restaurants</a>
		</div>
		<div class="ft-links">
			<a href="javascript:void(0);">Joe's Shop</a>
		</div>
		<div class="ft-links">
			<a href="about-us.php">About Joe's Fusion</a>
			<a href="contact-us.php">Contact Us</a>
		</div>
	</div>
	<div class="ft-metas">
		<div class="ft-logo">
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 400 400" enable-background="new 0 0 400 400" xml:space="preserve">
				<path d="M191.4,281.4l-47.9-22.5l1.6-29.7l18.9,16.6l7.1-4.5l9.8,19.4l20.7,18.2l-13.9-4.8L191.4,281.4zM290.9,200.3l-18-30l3.9-9.4l-50.2-67.6v0l-15.2-25.2L195.3,9l-7.2,20.3l0,0l0,0l-18.6,52l1.3,2.1l-8.6,15.1l-39.8,41.2l-5.5-7.6l-9.5,65.5l36.1,61.2l4.6-84l11-28.1l4.7,3.8l16.3-52.5l69.7,110.6l-0.8-3l4.2,12.3l-7.5,91.9l-43,58.6l40.5-28.5l40-103l6.8,4.3L290.9,200.3z M265.2,305l-3.9-0.7l-13.7,30.1l28.2-27.4l-4.9-11.6L265.2,305z M161.7,75.7l-8.6,24.3l10.7-9.8L161.7,75.7zM183.1,384.2l9.1-9.5l2,0.4l4.1-6.7l-14.5,4.8L183.1,384.2z M176.6,392.8v-6.2l-4.8,2.4L176.6,392.8z"/>
			</svg>
		</div>
		<p>©2016 Joe’s Fusion. All rights reserved. <a href="terms-and-conditions.php">Terms and Conditions</a> | <a href="privacy-policy.php">Privacy Policy</a></p>
	</div>
</footer>

<script src="assets/js/classie.js"></script>
<script>
	(function() {
		// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
		if (!String.prototype.trim) {
			(function() {
				// Make sure we trim BOM and NBSP
				var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
				String.prototype.trim = function() {
					return this.replace(rtrim, '');
				};
			})();
		}

		[].slice.call( document.querySelectorAll( '.input-field' ) ).forEach( function( inputEl ) {
			// in case the input is already filled..
			if( inputEl.value.trim() !== '' ) {
				classie.add( inputEl.parentNode, 'input-filled' );
			}

			// events:
			inputEl.addEventListener( 'focus', onInputFocus );
			inputEl.addEventListener( 'blur', onInputBlur );
		} );

		function onInputFocus( ev ) {
			classie.add( ev.target.parentNode, 'input-filled' );
		}

		function onInputBlur( ev ) {
			if( ev.target.value.trim() === '' ) {
				classie.remove( ev.target.parentNode, 'input-filled' );
			}
		}
	})();
</script>