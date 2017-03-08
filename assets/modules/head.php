<!-- CSS -->
<link rel="stylesheet" type="text/css" href="style.css">

<!-- Scripts -->
<script type="text/javascript" src="assets/js/instafeed.js"></script>

<script type="text/javascript">
	var userFeed = new Instafeed({
    get: 'user',
    userId: '15710897',
    accessToken: '15710897.1677ed0.28bb832903894d2b81540726891ad8fd',
    template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
    limit: 8,
    resolution: "standard_resolution"
	});
    userFeed.run();
</script>