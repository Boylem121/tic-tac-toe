window.onload = function() {

  var playCount = 0;
  var row;
  var column;
  var winCount;
  var gridX = new Array();
  var gridY = new Array();


  for (i = 0; i <= 3; i++) {
    gridX[i] = new Array();
    for (j = 0; j <= 3; j++) {
      gridX[i][j] = 0;
    }
  }

  for (i = 0; i <= 3; i++) {
    gridY[i] = new Array();
    for (j = 0; j <= 3; j++) {
      gridY[i][j] = 0;
    }
  }

  function reply_click(clicked_id) {
    if (playCount % 2 == 0) {
      console.log(clicked_id);
      document.getElementById(clicked_id).innerHTML = '<i class="fa fa-times fa-5x xMark" aria-hidden="true"></i>';
      row = clicked_id.replace(/^\D+|\D.*$/g, "");
      column = clicked_id.replace(/.*\D/g, "");
      gridX[row][column] = 1;
      winCheck();
    } else {
      console.log(clicked_id);
      document.getElementById(clicked_id).innerHTML = '<i class="fa fa-circle-o fa-5x circle" aria-hidden="true"></i>';
      row = clicked_id.replace(/^\D+|\D.*$/g, "");
      column = clicked_id.replace(/.*\D/g, "");
      gridY[row][column] = 1;
      winCheck();
    }
    playCount++;
  }

  function winCheck() {
    for (i = 0; i <= 3; i++) {
      for (j = 0; j <= 3; j++) {
        if (playCount % 2 == 0) {
          winCount += gridX[i][j];
        } else {
          winCount += gridY[i][j];
        }
      }
      if (winCount == 3) {
        if (playCount % 2 == 0) {
          alert("X You Win!");
        } else {
          alert("Circle You Win!");
        }
        break;
      } else {
        winCount = 0;
      }

    }
    for (j = 0; j <= 3; j++) {
      for (i = 0; i <= 3; i++) {
        if (playCount % 2 == 0) {
          winCount += gridX[i][j];
        } else {
          winCount += gridY[i][j];
        }
      }
      if (winCount == 3) {
        if (playCount % 2 == 0) {
          alert("X You Win!");
        } else {
          alert("Circle You Win!");
        }
        break;
      } else {
        winCount = 0;
      }
    }

    for (j = 0, i = 0; j <= 3; j++, i++) {
      if (playCount % 2 == 0) {
        winCount += gridX[i][j];
      } else {
        winCount += gridY[i][j];
      }
    }
      if (winCount == 3) {
        if (playCount % 2 == 0) {
          alert("X You Win!");
        } else {
          alert("Circle You Win!");
        }
      } else {
        winCount = 0;
      }

      for (j = 3, i = 1; j > 0; j--, i++) {
        if (playCount % 2 == 0) {
          winCount += gridX[i][j];
        } else {
          winCount += gridY[i][j];
        }
        //console.log(i);
        console.log(j);
      }
        console.log(winCount);
        if (winCount == 3) {
          if (playCount % 2 == 0) {
            alert("X You Win!");
          } else {
            alert("Circle You Win!");
          }
        } else {
          winCount = 0;
        }

  }

  function handleEvent(passedInElement) {
    return function() {
      reply_click(passedInElement);
    };
  }

  for (i = 1; i <= 3; i++) {
    for (j = 1; j <= 3; j++) {
      document.getElementById("grid-" + i + "-" + j).addEventListener('click', handleEvent("grid-" + i + "-" + j));
    }
  }

}
