jQuery (

	function(){

		jQuery("div").on("click", handleClick);

		function handleClick () {

			jQuery(".menu").toggleClass("active");
		}


}

);
