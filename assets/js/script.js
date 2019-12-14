var inputReady = true;
var input = $(".404-input");
input.focus();
$(".container").on("click", function (e) {
	input.focus();
});

input.on("keyup", function (e) {
	$(".new-output").text(input.val());
	// console.log(inputReady);
});

$(".four-oh-four-form").on("submit", function (e) {
	e.preventDefault();
	var val = $(this)
		.children($(".404-input"))
		.val()
		.toLowerCase();
	var href;

	if (val === "fad") {
		showKittens();
	} else if (val === "help") {
		help();
	} else if (val === "social") {
		social();
	} else {
		resetForm();
	}
});

function resetForm(withKittens) {
	var message = "Sorry that command is not recognized.";
	var input = $(".404-input");

	if (withKittens) {
		$(".kittens").removeClass("kittens");
		message = "Done!";
	}

	$(".new-output").removeClass("new-output");
	input.val("");
	$(".terminal").append(
		'<p class="prompt">' +
		message +
		'</p><p class="prompt output new-output"></p>'
	);

	$(".new-output").velocity("scroll"), {
		duration: 100
	};
}

function showKittens() {
	$(".terminal").append(
		"<div class='kittens'>" +
		"<p class='prompt'>	                             ,----,         ,----,                                          ,---,</p>" +
		"<p class='prompt'>       ,--.                ,/   .`|       ,/   .`|                     ,--.              ,`--.' |</p>" +
		"<p class='prompt'>   ,--/  /|    ,---,     ,`   .'  :     ,`   .'  :     ,---,.        ,--.'|   .--.--.    |   :  :</p>" +
		"<p class='prompt'>,---,': / ' ,`--.' |   ;    ;     /   ;    ;     /   ,'  .' |    ,--,:  : |  /  /    '.  '   '  ;</p>" +
		"<p class='prompt'>:   : '/ /  |   :  : .'___,/    ,'  .'___,/    ,'  ,---.'   | ,`--.'`|  ' : |  :  /`. /  |   |  |</p>" +
		"<p class='prompt'>|   '   ,   :   |  ' |    :     |   |    :     |   |   |   .' |   :  :  | | ;  |  |--`   '   :  ;</p>" +
		"<p class='prompt'>'   |  /    |   :  | ;    |.';  ;   ;    |.';  ;   :   :  |-, :   |   \\ | : |  :  ;_     |   |  '</p>" +
		"<p class='prompt'>|   ;  ;    '   '  ; `----'  |  |   `----'  |  |   :   |  ;/| |   : '  '; |  \\  \\    `.  '   :  |</p>" +
		"<p class='prompt'>:   '   \\   |   |  |     '   :  ;       '   :  ;   |   :   .' '   ' ;.    ;   `----.   \\ ;   |  ;</p>" +
		"<p class='prompt'>'   : |.  \\ |   |  '     '   :  |       '   :  |   '   :  ;/| '   : |  ; .'  /  /`--'  /  `--..`;  </p>" +
		"<p class='prompt'>|   | '_\\.' '   :  |     ;   |.'        ;   |.'    |   |    \\ |   | '`--'   '--'.     /  .--,_   </p>" +
		"<p class='prompt'>'   : |     ;   |.'      '---'          '---'      |   :   .' '   : |         `--'---'   |    |`.  </p>" +
		"<p class='prompt'>;   |,'     '---'                                  |   | ,'   ;   |.'                    `-- -`, ; </p>" +
		"<p class='prompt'>'---'                                              `----'     '---'                        '---`'</p>" +
		"<p class='prompt'>                                                              </p></div>"
	);

	var lines = $(".kittens p");
	$.each(lines, function (index, line) {
		setTimeout(function () {
			$(line).css({
				opacity: 1
			});

			textEffect($(line));
		}, index * 100);
	});

	$(".new-output").velocity("scroll"), {
		duration: 100
	};

	setTimeout(function () {
		resetForm(true);
	}, lines.length * 100 + 1000);
}

function social() {
	$(".terminal").append(
		`<p class='prompt'>Social
			<span>
  <a href='mailto:fadholifh14@gmail.com' target='_top' class='soc'><i class='fa fa-envelope s72'></i></a> <a href='https://github.com/fadholifh' target='_blank' class='soc'><i class='fab fa-github s72'></i></a> <a href='https://linkedin.com/in/fadholi-fat-haranto-30765b14b' target='_blank' class='soc'><i class='fab fa-linkedin s72'></i></a>
			</span>
  		</p>`
	);

	var lines = $(".kittens p");
	$.each(lines, function (index, line) {
		setTimeout(function () {
			$(line).css({
				opacity: 1
			});

			textEffect($(line));
		}, index * 100);
	});

	$(".new-output").velocity("scroll"), {
		duration: 100
	};

	setTimeout(function () {
		resetForm(true);
	}, lines.length * 100 + 0);
}

function help() {
	var message = `<p class='prompt'>You can use command below
  fad
  about
  social </p>`;
	$(".terminal").append(`${message}`);
	var lines = $(".kittens p");
	$.each(lines, function (index, line) {
		setTimeout(function () {
			$(line).css({
				opacity: 1
			});

			textEffect($(line));
		}, index * 100);
	});

	$(".new-output").velocity("scroll"), {
		duration: 0
	};

	setTimeout(function () {
		resetForm(true);
	}, lines.length * 100 + 1);
}

n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();

document.getElementById("date").innerHTML = `${m}/${d}/${y}|`;

$(document).ready(function () {
	function clock() {
		let now = new Date();
		let secs = ("0" + now.getSeconds()).slice(-2);
		let mins = ("0" + now.getMinutes()).slice(-2);
		let hr = now.getHours();
		let Time = hr + ":" + mins + ":" + secs;
		document.getElementById("time").innerHTML = Time;
		requestAnimationFrame(clock);
	}

	requestAnimationFrame(clock);
});