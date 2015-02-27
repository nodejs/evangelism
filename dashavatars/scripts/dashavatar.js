var R 					= require('request'),
	config 				= require('./config'),
	Twit 				= require('twit'),
	T 					= new Twit(config.twitter),
	published_version 	= "", 							// storing repo state in memory
	decay 				= 4 * 24 * 3600 * 1000 			// Dashavatars decay back to "normal" avatars in 4 days


function restoreNormalAvatar() {
	// remove dashavatar and restore normal avatar after decay timeout
	
	setTimeout(function() {	
		T.post('account/update_profile_image', {image: config.dashavatars.default}, function(err, data, response) {
			if(err) throw err
			console.log("Dashavatar OFF.")
		})
	}, decay) 
}


function updateDashavatar() {
	T.post('account/update_profile_image', {image: config.dashavatars.new_release}, function(err, data, response) {
		if(err) throw err
		console.log("Dashavatar ON.")

		restoreNormalAvatar()
	})
}


function checkRepoState() {
	R.get({url: config.url, headers: {'User-Agent': 'io.js/1.3.0'}}, function(e, r, b) {
		if(e) throw e

		if(b.message == undefined) {
			var repo_version = JSON.parse(b)[0].name

			if(published_version != repo_version) {
				published_version = repo_version // save the new state of the repo to memory
				updateDashavatar()
			}
		} 
	})
}

setInterval(checkRepoState, 3 * 3600 * 1000) // check repo for a new version every 3 hours and update Dashavatars if needed