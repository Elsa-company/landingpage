import STATUS from '../../../../constant/status';

function joinNowModal (state, action) {
	state.status = STATUS.SUCCESS;
	const { key, e } = action.payload;
	// const nodeList = Array.from(e.target.parentElement.querySelectorAll('.menu-item'));

	state.tabs = state.tabs.map((t, index) => {
		if (index === key) {
			// nodeList[index].classList.add('menu-item-actived');
			return { ...t, active: true };
		}
		else {
			// nodeList[index].classList.remove('menu-item-actived');
			return { ...t, active: false };
		}
	});
}

export default joinNowModal;
