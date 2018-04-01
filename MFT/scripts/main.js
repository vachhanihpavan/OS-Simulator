var blocks = [];
var filled = [];
var totalsize;
var numblocks;

var submitBtn = document.querySelector('#submitBtn');
//console.log('Welcome!');
submitBtn.onclick = getInitValues;

function getInitValues() {
	totalsize = document.querySelector('#totalMemSize').value;
	numblocks = document.querySelector('#numBlocks').value;
	var message = 'Read totalsize =' + totalsize + ' and numblocks = ' + numblocks;

	var template = ''
	var i;
	for (i = 0; i < numblocks; i++) {
		template = template + "<input type='text' class='blockInput' id='blockSize" + i + "'>";
	}
	template += "<button id='submitBlockBtn'>Submit</button>";
	render(template, document.querySelector('#blockContainer'));

	var submitBlockBtn = document.querySelector('#submitBlockBtn');

	var blocksize0 = document.querySelector('#blockSize0');

	var i = 0;
	var blockSizeBtn = document.querySelector('#submitBlockBtn');
	blockSizeBtn.onclick = getBlockSizes;
	
	function getBlockSizes() {
		i = 0;
		for(i = 0; i < numblocks; i++) {
			blockSize = document.querySelector('#blockSize' + i).value;
			blocks[i] = blockSize
			filled[i] = 0;
			console.log(blockSize);
			console.log(filled[i]);
		}
		//check if blocksizes don't exceed the total size
		var blockSum = 0;
		for(i = 0; i < numblocks; i++) 
			blockSum += parseInt(blocks[i]);
		console.log(blockSum);
		console.log(totalsize);
		if(blockSum > totalsize)
			render('Entered block sizes do not match the total size! Re-enter the block sizes.', document.querySelector('#requestMsg'));
		else
			render('Block sizes set successfully', document.querySelector('#requestMsg'));
		var requestBtn = document.querySelector('#submitRequestBtn');
		requestBtn.onclick = handleRequest;

		function handleRequest() {
			var alloc = -1;
			var requestSize = document.querySelector('#requestSize').value;
			for(i = 0; i < numblocks; i++) {
				//perform a first fit request
				console.log(blocks[i]);
				console.log(filled[i]);
				if(parseInt(blocks[i]) >= parseInt(requestSize) && filled[i] == 0) {
					filled[i] = 1;
					render('Allocated block ' + i + ' to the request', document.querySelector('#requestMsg'));

					alloc = i;
					break;
				}
			}
			if(alloc == -1)
				render("Request couldn't be accomodated.", document.querySelector('#requestMsg'));
		}
	}
}

function render (template, node) {
	if(!node)
		return;
	node.innerHTML = template;
}
