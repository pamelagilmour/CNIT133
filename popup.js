function workit() { 
    var number=document.getElementById("numb").value; 
    if (number > 0 && number < 11) { 
        var product = document.getElementById("numb").value * 50; 
        document.getElementById("prod").value = product; 
    } else {
			// create the HTML for the popup window
			let popupHTML = '<html>\n';
			popupHTML += '<head>\n';
			popupHTML += '<title>Invalid number</title>\n';
			popupHTML += '</head>\n';
			popupHTML += '<body>\n';
			popupHTML += "<div align='center'>\n";
			popupHTML +=
				'<h4>Invalid number ' +
				userSearchInput +
				' is not between 1 and 10</h4>\n';
			popupHTML +=
				"<input type='button' value='Close Window' onclick='window.close()'>\n";
			popupHTML += '</div>\n';
			popupHTML += '</body>\n';
			popupHTML += '</html>';
			// open the window out of the way of the main content
			let actPopup = window.open(
				'',
				'new_window',
				'width=300, height=100, top=220, left=50,'
			);
			// focus on the window to receive events/html
			actPopup.focus();

			// create the HTML for the popup window
			// let popupHtml = "<html>\n<head>\n<title>No Instances</title>\n</head>\n<body>\n</body>\n</html>\n"
			// let popupHTML = "Hello";

			// let actPopup = window.open("", "The Popup", "width=300,height=100,top=220,left=50"
			// );

			// focus on the window to receive events/html
			// actPopup.focus();

			// add the popupHTML html in the new window actPopup
			// actPopup.document.write(popupHTML);

			// signal to browser actPopup is loaded
			// actPopup.document.close();
		} 
} 