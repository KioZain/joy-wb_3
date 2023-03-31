$(document).ready(function() {
// Window 01
// fatal error

const btn = document.querySelector("#refresh");
btn.addEventListener("click",function(){
	location.reload();
});


	const template = [
		'sun', 'sun', 'sun', 'sun',
		'mountain', 'mountain', 'mountain', 'mountain', 'mountain',
		'forest', 'forest', 'forest', 'forest', 'forest',
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
				$(".story p").text("Порой я слишком сильно увлекаюсь мыслями о прошлом.Это происходит обычно когда мало что получается в настоящем времени. Ведь раньше точно было лучше же?Правда?");
		}
	});
// Question 01
	$(".get1").click(function open() {
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
// Window02
$(".bug8").click(function hide() {
	$(this).css("display", "none");
})
;$(".bug7").click(function hide() {
	$(this).css("display", "none");
});
;$(".bug6").click(function hide() {
	$(this).css("display", "none");
});
;$(".bug5").click(function hide() {
	$(this).css("display", "none");
});
;$(".bug4").click(function hide() {
	$(this).css("display", "none");
});
;$(".bug3").click(function hide() {
	$(this).css("display", "none");
});
;$(".bug2").click(function hide() {
	$(this).css("display", "none");
});
;$(".bug1").click(function hide() {
	$(this).css("display", "none");
});
$(".calm-down").click(function open() {
	$('.alt2-content').removeClass("d-none");
	$('.i2-content').addClass("d-none");
})
// Window 03
$(".get3").click(function open() {
	$(".i3-content").toggleClass("d-none");
	$(".alt3-content").toggleClass("d-none");
});
$(".i5-btn-sad").click(function FatalError() {
	$(".warning").removeClass('d-none');
});
$("#close").click(function FatalError() {
	$(".warning").toggleClass('d-none');
});
$(".сrashBtn").click(function FatalError() {
	$(".warning").addClass('d-none');
	$(".fatalError").removeClass('d-none');
	$(".grid-wrapper").addClass('d-none');
});
// Window3
let count =0;
document.getElementById('increase').onclick = function(){
	count+=10;
	document.getElementById('input').innerHTML = count;
	if (count <= 10) {
		$('.change5 h1').text("Может быть и хуже в целом...");
	}
	if (count == 20) {
		$('.change5 h1').text("Ну, хотя бы сегодня была не самая плохая погода");
	}
	if (count == 20) {
		$('.change5 h1').text("Ну, хотя бы сегодня была не самая плохая погода");
	}
	if (count == 30) {
		$('.change5 h1').text("Возможно завтра уже не будет дождя");
	}
	if (count == 40) {
		$('.change5 h1').text("хочется верить,что и это пройдёт");
	}
	if (count == 50) {
		$('.change5 h1').text("Завтра точно будет лучше,чем вчера");
	}
	if (count == 60) {
		$('.change5 h1').text("Как насчёт прогулки?Я точно за!");
	}
	if (count == 70) {
		$('.change5 h1').text("Кажется,что сегодня солнце улыбается мне! :)");
	}
	if (count == 80) {
		$('.change5 h1').text("Однозначно,это был очень насыщенный день!");
	}
	if (count == 90) {
		$('.change5 h1').text("Сегодня у меня отличое настроение!");
	}
	if (count == 100) {
		$('.change5 h1').text("Лучше и не бывает!Пойду поделюсь со всеми радостью!");
		$(".popup").removeClass('d-none');
		$(".story p").text("В один момент я начал понимать,что повседневные мелочи способны приносить мне куда больше чем я мог представить.Далеко не всегда нужно свернуть горы,чтобы почувствовать себя хорошо.");
	}
}
console.log(input.value)
//Window 04
	$(".get4").click(function open() {
		$(".i4-content").toggleClass("d-none");
		$(".alt4-content").toggleClass("d-none");
	});
	$(".reboot").click(function back() {
		$(".alt3-content").addClass("d-none");
		$(".i3-content").removeClass("d-none");
	});
	$("#check").click(function replace() {
		$(".change").text("Вообще-то,если так подумать,то мне ещё как трудно!");
		$(".i4-checkbox").click(function functionName() {
			$(".i4-checkbox").addClass("passed");
			$(this).removeClass("status")
			$(".change").text("Вот, вот это уже свобода воли!");
			$(".popup").removeClass("d-none");
			$(".story p").text("У меня редко получалось находить компромисс с собой.Я часто соглашался со всеми против своей воли, потому что боялся, что меня не поймут или же осудят.");
			})
		});
// Window05
	$(".status").click(function failed() {
		$(this).removeClass("status");
		$(this).addClass("failed");
		$(".change").text("Может сначала стоило подумать с чем ты согласился?");
		$(".get4").addClass("reboot");
		$(this).removeClass("question","restart");
	});
	$(".restart").click(function restart() {
				$(".i3-content").removeClass("d-none");
	});
// Windows 8)))))
	$(".arrow_loading").click (function txtchange() {
		$(".change2").text("Долго оно будет виснуть?");
		$(".arrow_loading").click (function txtchange() {
			$(".change2").text("Скоро надеюсь?");
			$(".arrow_loading").click (function txtchange() {
				$(".first").removeClass("process");
				$(".second").removeClass("d-none");
				$(".second").addClass("process");
				$(".change2").text("Я вообще-то тороплюсь");
				$(".change3").text("80%");
					$(".arrow_loading").click (function txtchange() {
							$(".change2").text("Это должно быть шутка...");
						$(".arrow_loading").click (function txtchange() {
								$(".change2").text("Ладно,подождём");
								$(".arrow_loading").click (function txtchange() {
										$(".change2").text("...");
									$(".arrow_loading").click (function txtchange() {
											$(".change2").text("........");
											$(".arrow_loading").click (function txtchange() {
												$(".change2").text("О! Ну наконец-то");
												$(".change3").text("90%");
												$(".second").removeClass("process");
												$(".third").removeClass("d-none");
												$(".fourth").removeClass("d-none");
												$(".fourth").addClass("process");
												$(".arrow_loading").click (function txtchange() {
													$(".change2").text("Началось...");
													$(".arrow_loading").click (function txtchange() {
														$(".change2").text("Может оно не стоит того?");
														$(".arrow_loading").click (function txtchange() {
															$(".change2").text("Хотя столько ждал");
															$(".arrow_loading").click (function txtchange() {
																$(".change2").text("...........");
																$(".arrow_loading").click (function txtchange() {
																	$(".change2").text("Неужели...");
																	$(".change3").text("99%");
																	$(".arrow_loading").click (function txtchange() {
																		$(".change2").text("Ладно,ладно...");
																		$(".arrow_loading").click (function txtchange() {
																			$(".change2").text("ПОЧТИ!...");
																			$(".arrow_loading").click (function txtchange() {
																				$(".change2").text("Наконец-то!");
																				$(".change3").text("100%");
																				$(".fourth").removeClass("process");
																				$(".popup").removeClass("d-none");
																				$(".story p").text("Чему научила меня жизнь.Так это точно терпению.Далеко не всё,что кажется жизненно необходимым сейчас действительно нужно. Стоит просто подождать и настоящее счастье всегда придёт.");
																	})
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
// Windows 10 & 11
		let insideBox = false;
		let iconNumber =0;
		let droppedIcon;
		let currentSet;
$ (function droppable() {
		$( ".iconBoxSun" ).draggable({ revert: true });
			$( ".stateContainer" ).droppable({
			drop: function (event,ui) {
				droppedIcon = $(ui.draggable);
				$(droppedIcon).css("display", "none");
				$(".q10").removeClass("question");
				$(".q10").addClass("reboot");
				insideBox=true;
				$(".change4").text("Солнечно");
				$(".stateContainer").addClass("blue");
		}
	});
});
		$(function(){
	     $(".question").click(function(){
	      if (insideBox == true){
	      $(".iconBoxSun").css("display", "block");
				$(".iconBoxAnxiety").css("display", "block");
				$(".iconBoxCalmness").css("display", "block");
	      insideBox = false;
				$(".stateContainer").removeClass("blue");
				$(".emotionContainer").removeClass("blue");
				$(".change4").text("")
				$(".change6 h1").text("")
	      }
	    });
	   });
		$ (function droppable() {
			 $( ".iconBoxCalmness" ).draggable({ revert: true });
				 $( ".emotionContainer" ).droppable({
				 drop: function (event,ui) {
					 droppedIcon = $(ui.draggable);
					 $(droppedIcon).css("display", "none");
					 $(".q10").removeClass("question");
					 $(".q10").addClass("reboot");
					 insideBox=true;
					 $(".change6 h1").text("Спокойно");
					 $(".emotionContainer").addClass("blue");
					 $(".popup").removeClass('d-none');
					 $(".story p").text("Часто бывает такое,что я вовсе не могу определить какое у меня сегодня настроение. Вот вроде бы всё хорошо идёт, однако внтури всё равно почему-то пусто прямо как в ночном метро.");
			 }
		 });
	 });
});
// const item= document.createElement('div');
// item.classList.add('pgBarItem');
// const progressBar = document.getElementById('bar');
// progressBar.innerHTML = "";
// let n = count/10;
// for (let i=0;i<n;i++){
// 	$(function (){
// 	$('pgBarItem').appendTo('progress-bar');
// 	});
// }
