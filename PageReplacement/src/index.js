var cache_size = 0;
var req_str = 0;
var requests = 0;

function myfunction() {
          cache_size = document.getElementById('csize').value;
          req_str = document.getElementById('request_string').value;
          requests = req_str.split(" ");
}

/*This is the fifo() function. */

function fifo() {
  document.write("this is fifo!!");
}

/*This is the lru() function.*/

function lru() {
  window.alert("This is lru.");

	var no_of_frames , no_of_pages , frames = new Array() , pages = new Array() , counter = 0 , time = new Array() , flag1 = 0, flag2 = 0, pos , faults = 0;

	no_of_frames = parseInt(cache_size);
	pages = requests;
	no_of_pages = pages.length;


	for(var i = 0; i < no_of_frames; i++)
		frames[i] = -1;

  for(var i = 0 ; i < no_of_pages; i++)
    pages[i] = parseInt(pages[i]);


	for(var i = 0 ; i < no_of_pages; i++) {
		flag1 = flag2 = 0;

		for(var j = 0 ; j < no_of_frames; j++) {
			if(frames[j] == pages[i]) {
				counter++;
				time[j] = counter;
				flag1 = flag2 = 1;
				break;
			}
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

		document.write(frames + "<br>");
	}

    document.write("page faults = " + faults);
	return 0;
}

/*This is a new function.*/

function findLRU(var time , var n) {
	var minimum = time[0] , pos = 0;
	for(var i = 1; i < n; i++) {
		if(time[i[ < minimum) {
			minimum = time[i];
			pos = i;
		}
	}
  return pos;
}

/*This is a new function.*/

function optimal() {
  window.alert("in optimal()");
}
