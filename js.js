if(typeof(Storage) !== "undefined") {
	for(var i = 0; i < localStorage.length; i++ ) {
		if(localStorage[localStorage.key(i)] == "true"){
			document.getElementById(localStorage.key(i)).checked = true;
		}
	}
}else{
	alert(" :( no web storage support!")
}

function moar(){
	var query	=	document.getElementById("search_q").value;
	var engines	=	document.getElementById("engines").elements;
	for (var i = 0; i < engines.length; i++ ) {
		if (engines[i].checked == true) {
			if(engines[i].name == "g_check"){
				var f = document.createElement('form');
				f.setAttribute('id','g');
				f.setAttribute('method','get');
				f.setAttribute('target','_blank');
				f.setAttribute('action',"https://www.google.it/search?");
				var input = document.createElement('input'); 
				input.setAttribute('type','hidden');
				input.setAttribute('name','q');
				input.setAttribute('id','g_q');
				input.value = query;
				f.appendChild(input);
				var input = document.createElement('input'); 
				input.setAttribute('type','hidden');
				input.setAttribute('name','hl');
				input.value = "en-us";
				f.appendChild(input);
				document.body.appendChild(f);
				document.getElementById('g').submit();
			}

			if(engines[i].name == "duck_check"){
				var f = document.createElement('form');
				f.setAttribute('id','duck');
				f.setAttribute('method','post');
				f.setAttribute('target','_blank');
				f.setAttribute('action','https://duckduckgo.com/');
				var input = document.createElement('input'); 
				input.setAttribute('type','hidden');
				input.setAttribute('name','q');
				input.setAttribute('id','duck_q');
				input.value = query;
				f.appendChild(input);
				document.body.appendChild(f);
				document.getElementById('duck').submit();
			}

			if(engines[i].name == "baidu_check"){
				var f = document.createElement('form');
				f.setAttribute('id','baidu');
				f.setAttribute('method','get');
				f.setAttribute('target','_blank');
				f.setAttribute('action','https://www.baidu.com/s?');
				var input = document.createElement('input'); 
				input.setAttribute('type','hidden');
				input.setAttribute('name','wd');
				input.setAttribute('id','baidu_q');
				input.value = query;
				f.appendChild(input);
				document.body.appendChild(f);
				document.getElementById('baidu').submit();
			}

			if(engines[i].name == "bing_check"){
				var f = document.createElement('form');
				f.setAttribute('id','bing');
				f.setAttribute('method','get');
				f.setAttribute('target','_blank');
				f.setAttribute('action','https://bing.com/search?');
				var input = document.createElement('input'); 
				input.setAttribute('type','hidden');
				input.setAttribute('name','q');
				input.setAttribute('id','bing_q');
				input.value = query;
				f.appendChild(input);
				document.body.appendChild(f);
				document.getElementById('bing').submit();
			}
		}
	}
}//endfn

