const fs = require('fs');

const documentationFolder = 'docs';

async function getFiles(directory) {
	const files = [];
	const dir = fs.opendirSync(directory);

	for await (const dirent of dir) {
		files.push(dirent.name);
	}

	return files.sort();
}

function filenameToTitle(filename) {
	return filename.split('.').shift().replace(/_/g, ' ');
}

async function buildSection(directory) {
	const files = await getFiles(`${documentationFolder}/${directory}`);
	const title = filenameToTitle(directory);
	const content = [ `- ${title}` ];

	for (let file of files) {
		content.push(`\t- [${filenameToTitle(file)}](${directory}/${file})`);
	}

	return content.join('\n');
}

async function buildSidebar(watchEventType) {
	if (watchEventType == 'change')
		return;

	console.log('Building _sidebar.md');
	const content = await buildSection('JavaScript_Basics') + '\n' + await buildSection('JavaScript_Advance');

	fs.writeFileSync(`${documentationFolder}/_sidebar.md`, content);
}

fs.watch(`${documentationFolder}/JavaScript_Basics`, buildSidebar);
fs.watch(`${documentationFolder}/JavaScript_Advance`, buildSidebar);

buildSidebar();
