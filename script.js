//your JS code here. If required.
<div id="browser-info"></div>

	<script>
		// Detect browser name and version using the navigator object
		let browserName = navigator.appName;
		let version = navigator.appVersion;

		// Display browser information on the page
		let browserInfoDiv = document.getElementById("browser-info");
		browserInfoDiv.innerHTML = "You are using " + browserName + " version " + version;
	</script>