function myfunction() {
          var cache_size = document.getElementById("csize").value;
          var req_str = document.getElementById("request_string").value;
          document.write(cache_size);
					document.write(req_str);
          myfunc2();
}


function lru() {
	window.alert("in fifo");

	var no_of_frames , no_of_pages , frames , pages , counter = 0 , time , flag1 , flag2 , i , j , pos , faults = 0;

	var req_str = document.getElementById("request_string");
	var cache_size = document.getElementById("csize").value();

	if(req_str === "") {
		window.alert("Empty requests string");
		return;
	}
	if(isNaN(parseInt(cache_size))) {
		window.alert("Enter a numeric value for cache size");
		return;
	}



	no_of_frames = Number(cache_size);
	pages = req_str.split(" ");
	no_of_pages = pages.length()

	for(i = 0; i < no_of_frames; i++)
		frames.push('-1');

	for(i = 0 ; i < no_of_pages; i++) {
		flag1 = flag2 = 0;

		for(j = 0 ; j < no_of_frames; j++) {
			if(frames[j] == pages[i]) {
				counter++;
				time[j] = counter;
				flag1 = flag2 = 1;
				break;
			}


		if(flag1 == 0) {
			for(j = 0 ; j < no_of_frames; j++) {
				if(frames[j] == -1) {
					counter++;
					faults++;
					frames[j] = pages[i];
					time[j] = counter;
					flag2 = 1;
					break;
				}
			}
		}

		if(flag2 == 0) {
			pos = findLRU(time , no_of_frames);
			counter++;
			faults++;
			frames[pos] = pages[i];
			time[pos] = counter;
		}

		//The data in frames array should go back to the webpage.
	}

	return 0;
}

function findLRU(var time , var n) {
	var i , minimum = time[0] , pos = 0;
	for(i = 1; i < n; i++) {
		if(time[i[ < minimum) {
			minimum = time[i];
			pos = i;
		}
	}

	return pos;
}

function optimal() {

	var req_str = document.getElementById("request_string");
        var cache_size = document.getElementById("csize").value();

        if(req_str === "") {
                window.alert("Empty requests string");
                return;
        }
        if(isNaN(parseInt(cache_size))) {
                window.alert("Enter a numeric value for cache size");
                return;
        }

	no_of_frames = Number(cache_size);
        pages = req_str.split(" ");
        no_of_pages = pages.length()

	for(i = 0 ; i < no_of_frames; i++) {
		frames.push('-1');
	}

	for(i = 0 ; i < no_of_pages; i++) {
		flag1 = flag2 = 0;

		for(j = 0 ; j < no_of_frames; j++) {
			if(frames[j] == pages[i]) {
				flag1 = flag2 = 1;
				break;
			}
		}

		if(flag1 == 0) {
			for(j = 0 ; j < no_of_frames; j++) {
				if(frames[j] == -1) {
					faults++;
					frames[j] = pages[i];
					flag2 = 1;
					break;
				}
			}
		}

		if(flag2 == 0) {
			flag3 = 0;

			for(j = 0 ; j < no_of_frames; j++) {
				temp.push('-1');

				for(k = i+1; k < no_of_pages; k++) {
					if(frames[j] == pages[k]) {
						temp[j] = k;
						break;
					}
				}
			}

			for(j = 0 ; j < no_of_frames; j++) {
				if(temp[j] == -1) {
					pos = j;
					flag3 = 1;
					break;
				}
			}

			if(flag3 == 0) {
				max = temp[0];
				pos = 0;

				for(j = 1; j < no_of_frames; j++) {
					if(temp[j] > max) {
						max = temp[j];
						pos = j;
					}
				}
			}

			frames[pos] = pages[i];
			faults++;

			//Send the data in frames array.
		}
	}

	return;
}



function fifo() {


	var req_str = document.getElementById("request_string");
	var cache_size = document.getElementById("csize").value();

	          if(req_str === "") {
	                  window.alert("Empty requests string");
	                  return;
	          }
	          if(isNaN(parseInt(cache_size))) {
	                   window.alert("Enter a numeric value for cache size");
		           return;
		  }

	var no_of_frames = Number(cache_size);
	var pages = req_str.split(" ");
	var no_of_pages = pages.length()
	var frames;
	var avail = 0 , count = 0;

	for(i = 0 ; i < no_of_frames; i++)
		frames.push('-1');


	for(var i = 0 ; i < no_of_pages; i++) {
		avail = 0 ;

		for(var k = 0 ; k < no_of_frames; k++) {
			if(frames[k] == pages[i])
				avail = 1;
		}

		if(avail == 0) {
			frames[k] = pages[i];
			k = (k+1)%no_of_frames;
			count++;
		}

    document.getElementById("result").innerHTML = frames;
	}

	document.getElementById("pge_fault_count").innerHTML = count;

	return 0;
}
