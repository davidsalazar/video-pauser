function VideoPauser(videoSelector) {
	const videos = document.querySelectorAll(videoSelector);
	if (!videos) return false;

	const css = `
	  .accessibleMutedLoopedVideoPauser {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	  }
  
	  .accessibleMutedLoopedVideoPauser__button {
		all: unset;
		cursor: pointer; 
		font-size: 32px;
		padding: 2px 14px;
		color: #fff;
		display: inline-block;
		z-index: 3;
		position: absolute;
		top: 50%;
		left: -500%;
		background-color: rgba(0, 0, 0, .5);
		transform: translate(-50%, -50%);
	  }
  
	  .accessibleMutedLoopedVideoPauser__button:focus, .accessibleMutedLoopedVideoPauser:hover .accessibleMutedLoopedVideoPauser__button {
		left: 50%;
		outline: 2px solid #fff;
	  }
  `;

	const style = document.createElement('style');
	style.textContent = css;
	document.head.appendChild(style);

	videos.forEach(video => {
		if (!video.autoplay || !video.muted || !video.loop) return true;

		const div = document.createElement('div');
		div.classList.add('accessibleMutedLoopedVideoPauser');

		let videoTitle = video.hasAttribute('title')
			? ' ' + video.getAttribute('title')
			: '';
		const button = document.createElement('button');
		button.classList.add('accessibleMutedLoopedVideoPauser__button');
		button.innerHTML = '⏸';
		button.setAttribute('tabindex', '0');
		button.setAttribute('aria-label', 'Pause' + videoTitle);
		button.setAttribute('data-paused', '0');
		button.addEventListener('click', e => {
			let paused = button.getAttribute('data-paused');
			button.innerHTML = paused == 1 ? '⏸' : '▶';
			button.setAttribute(
				'aria-label',
				(paused == 1 ? 'Pause' : 'Play') + videoTitle
			);

			if (paused == 1) video.play();
			else video.pause();
			button.setAttribute('data-paused', paused == 1 ? 0 : 1);
		});

		div.appendChild(button);
		video.parentElement.insertBefore(div, video);
		div.appendChild(video);
	});
}
module.exports = VideoPauser;
