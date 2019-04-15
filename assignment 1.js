function emptyAssignments() {
    var table = document.getElementById('firstRow');
    for (var r = 1; r < table.rows.length; r++) {
      for (var i = 2; i <= 6; i++) {

        var emptyCheck = table.rows[r].cells[i].innerHTML;

        if (emptyCheck == null || emptyCheck == '' || isNaN(emptyCheck)) {
          table.rows[r].cells[i].style.background = 'yellow';
        }
      }
    }
  }

  function calEmptyAssigments() {
    var table = document.getElementById('firstRow');
    var count = 0;
    for (var r = 1; r < table.rows.length; r++) {
      for (var i = 2; i <= 6; i++) {

        var emptyCheck = table.rows[r].cells[i].innerHTML;

        if (emptyCheck == null || emptyCheck == '' || isNaN(emptyCheck)) {
          count++;
        }
      }
    }
    document.getElementById('lblShowAss').innerHTML = 'Empty Assignments : ' + count;
  }

  function calGrade() {
    var table = document.getElementById('firstRow');
    for (var r = 1; r < table.rows.length; r++) {
      calculate(r);
    }
  }

  function dotest(element, event) {
    var val = element.textContent;
    var check = myFunction(val, element);
    var row = element.parentNode.rowIndex;
    calculate(row);
  }

  function calculate(r) {
    var table = document.getElementById('firstRow');
    var one = 0.0,
      two = 0.0,
      three = 0.0,
      four = 0.0,
      five = 0.0,
      sum = 0.0,
      mean = 0;
    one = parseFloat(table.rows[r].cells[2].innerHTML);
    two = parseFloat(table.rows[r].cells[3].innerHTML);
    three = parseFloat(table.rows[r].cells[4].innerHTML);
    four = parseFloat(table.rows[r].cells[5].innerHTML);
    five = parseFloat(table.rows[r].cells[6].innerHTML);

    if (isNaN(one)) {
      one = 0.0;
    }
    if (isNaN(two)) {
      two = 0.0;
    }
    if (isNaN(three)) {
      three = 0.0;
    }
    if (isNaN(four)) {
      four = 0.0;
    }
    if (isNaN(five)) {
      five = 0.0;
    }

    sum = one + two + three + four + five;
    mean = Math.ceil(sum / 5);
    if (mean < 40) {
      table.rows[r].cells[7].style.color = '#fff';
      table.rows[r].cells[7].style.background = 'red';
    } else {
      table.rows[r].cells[7].style.color = '#000';
      table.rows[r].cells[7].style.background = 'white';
    }
    table.rows[r].cells[7].innerHTML = mean + '%';
  }

  function myFunction(ctrl, element) {
    var num = ctrl;
    num = parseInt(num, 10);
    if (!isNaN(num)) //if num is number then perform check for range
    {
      if (num < 0 || num > 100) {
        element.innerHTML = '';
        element.style.background = 'yellow';
        alert("Please Enter a Number Between 0 and 100.");
      } else {
        element.style.color = '#000';
        element.style.background = '#fff';
      }
    } else if (num != null && num != '' && !isNaN(num)) {
      element.innerHTML = '';
      element.style.background = 'yellow';
      //just clear if any bad characters entered and show alert if needed
      alert('Please enter digits only');
    } else {
      element.style.background = 'yellow';
    }
  }