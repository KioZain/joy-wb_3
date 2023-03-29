$(document).ready(function() {
// Window 01
	const template = [
		'sun', 'flower', 'flower', 'flower',
		'flower', 'flower', 'flower', 'flower', 'flower',
		'flower', 'flower', 'flower', 'flower', 'flower'
	]
	console.log($(".memory-game-icon"));

	$(".memory-game-icon").click(function(){
		if ($(this).hasClass('flower')) {
			$(this).removeClass('flower')
			$(this).addClass('sun');
		} else if ($(this).hasClass('sun')) {
			$(this).removeClass("sun");
			$(this).addClass("forest");
		} else if ($(this).hasClass('forest')) {
			$(this).removeClass("forest");
			$(this).addClass("calmness");
		} else if ($(this).hasClass('calmness')) {
			$(this).removeClass("calmness");
			$(this).addClass("cloud");
		} else if ($(this).hasClass('cloud')) {
			$(this).removeClass("cloud");
			$(this).addClass("mountain");
		}
		else if ($(this).hasClass('mountain')) {
			$(this).removeClass("mountain");
			$(this).addClass("flower");
		}

		const checkResult = []
		$(".memory-game-icon").each(function(index) {
			checkResult.push(this.classList[1] === template[index])
		});
		console.log(checkResult.includes(false));
		if (!checkResult.includes(false)) {
			console.log('you win')
				$(".popup").removeClass("d-none");
		}
	});
// Question 01
	$(".get1").click(function openPop() {
		$(".i1-content").addClass("d-none");
		$(".alt1-content").toggleClass("d-none")
	});

	$(".reboot").click(function back() {
		$(".alt1-content").addClass("d-none");
		$(".i1-content").removeClass("d-none");
	});
// Close pop-up
	$(".closebtn").click(function closePop() {
		$(".popup").toggleClass("d-none");
	});



// Windows 10 ))))))))
	$(function() {
	 	$(".icon-box").draggable();
 	});

































});
