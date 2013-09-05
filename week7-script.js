//Richard Tapalian
//AJAX Assignment
//SE240
//09/04/2013

//These are status codes used for identifying the status of the callback of the webpage
		var statusCodes = {
            100: "Continue",
            101: "Switching Protocols",
            102: "Processing",
            200: "OK",
            201: "Created",
            202: "Accepted",
            203: "Non-Authoritative Information",
            204: "No Content",
            205: "Reset Content",
            206: "Partial Content",
            207: "Multi-Status",
            208: "Already Reported",
            226: "IM Used",
            300: "Multiple Choices",
            301: "Moved Permanently",
            302: "Found",
            303: "See Other",
            304: "Not Modified",
            305: "Use Proxy",
            306: "Reserved",
            307: "Temporary Redirect",
            308: "Permanent Redirect",
            400: "Bad Request",
            401: "Unauthorized",
            402: "Payment Required",
            403: "Forbidden",
            404: "Not Found",
            405: "Method Not Allowed",
            406: "Not Acceptable",
            407: "Proxy Authentication Required",
            408: "Request Timeout",
            409: "Conflict",
            410: "Gone",
            411: "Length Required",
            412: "Precondition Failed",
            413: "Request Entity Too Large",
            414: "Request-URI Too Long",
            415: "Unsupported Media Type",
            416: "Requested Range Not Satisfiable",
            417: "Expectation Failed",
            422: "Unprocessable Entity",
            423: "Locked",
            424: "Failed Dependency",
            425: "Unassigned",
            426: "Upgrade Required",
            427: "Unassigned",
            428: "Precondition Required",
            429: "Too Many Requests",
            430: "Unassigned",
            431: "Request Header Fields Too Large",
            500: "Internal Server Error",
            501: "Not Implemented",
            502: "Bad Gateway",
            503: "Service Unavailable",
            504: "Gateway Timeout",
            505: "HTTP Version Not Supported",
            506: "Variant Also Negotiates (Experimental)",
            507: "Insufficient Storage",
            508: "Loop Detected",
            509: "Unassigned",
            510: "Not Extended",
            511: "Network Authentication Required"
        };

	
		// XML HTTP Request
		//References the personal webpage that AJAX will call
		var xhr = new XMLHttpRequest();
		var content = document.getElementById('content');  
		var url = "http://rtapalian.net63.net/demo.php?page=";
		
		var pageNumber =1;
		//The callback adds the text to the current text on the page
		function callback() {
			var response = xhr.responseText;  
			content.innerHTML += response; 

		}
		
		//This identifies the state of the page, if all is well it proceeds with the callback function
		xhr.onreadystatechange = function() { 
			
		   if (xhr.readyState==4 && xhr.status==200) {  
			callback();  
		   } 
		}
		
		

		//Gets the url with a specific page number
                function makeAJAXCall (){
		xhr.open('GET', url+pageNumber, true);  
                xhr.send();
		//This checks to see if it is at the last page and alerts the user
                if (pageNumber >4){
                alert("You have reached the end of the article");
		}
                else{
                pageNumber ++;
				
                }
                }             
                
        //This event listener uses the button click to run the AJAX call function
                window.addEventListener("load", makeAJAXCall);
                document.getElementById('showResults').addEventListener("click", makeAJAXCall);
		

		
		
		
		 

		
