function handleFileSelect(evt) {
	var files = evt.target.files;
	
	for (var i = 0; i < files.length; i++) {
		var reader = new FileReader();
		reader.readAsText(files[i]);		
		reader.onload = onloadFileReader;
	}
}

function onloadFileReader(file) {
	document.getElementById('output').innerHTML = file.target.result;
}

document.getElementById('myFile').addEventListener('change', handleFileSelect, false);