var cache_size = 0;
var req_str = 0;
var requests = 0;

function myfunction() {
          cache_size = document.getElementById('csize').value;
          req_str = document.getElementById('request_string').value;
          requests = req_str.split(" ");
          console.log("cache_size");
}

/*This is the fifo() function. */

function fifo() {
  var no_of_frames = parseInt(cache_size);
  var pages = requests;
  var no_of_pages = pages.length;
  var frames = new Array();
  var avail = 0;
  var count = 0;

  for(var i = 0 ; i < no_of_frames; i++)
    frames[i] = -1;

  for(var i = 0 ; i < no_of_pages; i++)
    pages[i] = parseInt(pages[i]);

  var j = 0 ;

  for(var i = 0 ; i < no_of_pages; i++) {
    avail = 0;

    for(var k = 0 ; k < no_of_frames; k++) {
      if(frames[k] == pages[i])
        avail = 1;
    }

    if(avail == 0) {
      frames[j] = pages[i];
      j = (j+1)%no_of_frames;
      count++;
    }

    document.write(frames + "<br>");
  }
    document.write("Page faults = " + count);

  return 0;
}

/*This is the lru() function.*/

function lru() {
  var no_of_frames = parseInt(cache_size);
  var pages = requests;
  var no_of_pages = pages.length;
  var frames = new Array();
  var counter = 0;
  var time = new Array();
  var flag1 = 0;
  var flag2 = 0;
  var pos;
  var faults = 0;

  for(var i = 0 ; i < no_of_frames; i++)
    frames[i] = -1;

  for(var i = 0 ; i < no_of_pages; i++)
    pages[i] = parseInt(pages[i]);

  for(var i = 0; i < no_of_pages; i++) {
    flag1 = flag2 = 0;

    for(var j = 0; j < no_of_frames; j++) {
      if(frames[j] == pages[i]) {
        counter++;
        time[j] = counter;
        flag1 = flag2 = 1;
        break;
      }
    }


  if(flag1 == 0) {
    for(var j = 0 ; j < no_of_frames; j++) {
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
    var minimum = time[0];
    var pos = 0;
    for(var k = 1; k < no_of_frames; k++) {
      if(time[k] < minimum) {
        minimum = time[k];
        pos = k;
      }
    }
      counter++;
      faults++;
      frames[pos] = pages[i];
      time[pos] = counter;


  }
    document.write(frames + "<br>");
}
    document.write("Page faults = " + faults);

  return 0;
}


function optimal() {
  var no_of_frames = parseInt(cache_size);
  var pages = requests;
  var no_of_pages = pages.length;
  var frames = new Array();
  var temp = new Array();
  var flag1 = 0;
  var flag2 = 0;
  var flag3 = 0;
  var pos = 0;
  var faults = 0;
  var max = 0;

  for(var i = 0 ; i < no_of_frames; i++)
    frames[i] = -1;

  for(var i = 0 ; i < no_of_pages; i++)
    pages[i] = parseInt(pages[i]);

  for(var i = 0 ; i < no_of_pages; i++) {
    flag1 = flag2 = 0;

    for(var j = 0 ; j < no_of_frames; j++) {
      if(frames[j] == pages[i]) {
        flag1 = flag2 = 1;
        break;
      }
    }

    if(flag1 == 0) {
      for(var j = 0 ; j < no_of_frames; j++) {
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

      for(var j = 0 ; j < no_of_frames; j++) {
        temp[j] = -1;

        for(var k = i + 1; k < no_of_pages; k++) {
          if(frames[j] == pages[k]) {
            temp[j] = k;
            break;
          }
        }
      }

      for(var j = 0 ; j < no_of_frames; j++) {
        if(temp[j] == -1) {
          pos = j;
          flag3 = 1;
          break;
        }
      }

      if(flag3 == 0) {
        max = temp[0];
        pos = 0;

        for(var j = 1; j < no_of_frames; j++) {
          if(temp[j] > max) {
            max = temp[j];
            pos = j;
          }
        }
      }

      frames[pos] = pages[i];
      faults++;

    }

    document.write(frames + "<br>");

  }

  document.write("Page faults = " + faults);
}
