<link rel="SHORTCUT ICON" href="assets/images/joes-fusion-favicon.ico"/>

<!-- CSS -->
<link rel="stylesheet" type="text/css" href="style.css">

<!-- Scripts -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script type="text/javascript" src="assets/js/instafeed.js"></script>
<script type="text/javascript" src="assets/js/scripts.js"></script>

<script type="text/javascript">
	var userFeed = new Instafeed({
    get: 'user',
    userId: '559722343',
    accessToken: '559722343.1677ed0.2513afc0ba0f4fbda33a0a2cd46d3d5e',
    template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
    limit: 8,
    resolution: "standard_resolution"
	});
    userFeed.run();
</script>