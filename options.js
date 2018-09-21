'use strict';

const ignoredConversations = document.querySelector('#ignored-conversations');
const ignoredUsers = document.querySelector('#ignored-users');
const onlyImportant = document.querySelector('#important-only');

document.querySelector('#save').onclick = () => {
	const settings = {
		ignoredConversations: ignoredConversations.value.split('\n'),
		ignoredUsers: ignoredUsers.value.split('\n'),
		onlyImportant: onlyImportant.checked,
	};

	browser.storage.local.set(settings);
};

document.querySelector('#reset').onclick = () => {
	browser.storage.local.clear();
	ignoredConversations.value = '';
	ignoredUsers.value = '';
	onlyImportant.checked = false;
};

browser.storage.local.get().then(settings => {
	ignoredConversations.value = settings.ignoredConversations.join('\n');
	ignoredUsers.value = settings.ignoredUsers.join('\n');
	onlyImportant.checked = settings.onlyImportant;
});
