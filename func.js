const base_url = "http://veonum.alwaysdata.net/?score="
let qrcode = ""

async function setQrcode(text="Test"){
	const res =(await new AwesomeQR.AwesomeQR({
	  text: text,
	  size: 500,
	}).draw())
	//console.log(res)
	qrcode = res
	return res
}

function encodeScore(score) {
	/* btoa((btoa(Date.now())).slice(-8,-2)+btoa(1234)+btoa('veo')) */
	prefix = (btoa(Date.now())).slice(-8,-2)
	key = 'veo'
	score = score.toString()
	return btoa(prefix+btoa(score)+btoa(key))
}

async function setEncodedQrcode(text="Test"){
	const url = base_url + encodeScore(text)
	const res =(await new AwesomeQR.AwesomeQR({
	  text: url,
	  size: 500,
	}).draw())
	//console.log(res)
	qrcode = res
	return res
}