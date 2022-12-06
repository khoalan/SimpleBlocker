const SITES = 'www.facebook.com'
const HOSTNAME = window.location.hostname
const generateHTML = () => {
  return `
  	<div class='c'>
  		<div class='mainContent'>Get back to work!!</div>
		  <p id="demo" class='mainContent'></p>
	</div>
	`
}

const styleHTML = () => {
  return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
	body {
	  background: #33cc99;
	  color: #fff;
	  font-family: "Open Sans", sans-serif;
	  max-height: 700px;
	  overflow: hidden;
	}
	.c {
		text-align: center;
		display: block;
		position: relative;
		width: 80%;
		margin: 100px auto;
	  }
	.mainContent {
		text-align: center;
		display: block;
		position: relative;
		letter-spacing: 6px;
		font-size: 4em;
		line-height: 80%;
	} 
	</style>`
}

switch (HOSTNAME) {
  case SITES:
    const originalHTML = document.body.innerHTML
    const originalStyle = document.head.innerHTML
    document.head.innerHTML = styleHTML()
    document.body.innerHTML = generateHTML()
    var countDownNum = 300
    var x = setInterval(() => {
      var distance = countDownNum--
      document.getElementById('demo').innerHTML = distance
      if (distance < 0) {
        clearInterval(x)
        document.head.innerHTML = originalStyle
        document.body.innerHTML = originalHTML
      }
    }, 1000)
}
