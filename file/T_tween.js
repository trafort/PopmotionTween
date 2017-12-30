
const ball = document.querySelector('#css .ball');

tween({ to: 300, duration: 500 })
	.start(styler(ball).set('x'));
