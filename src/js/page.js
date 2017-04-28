function page_change(page_num){
    
    //課題：画面遷移が遅い

    if(window.confirm('ページ遷移してもよろしいでしょうか？')){
        
        if(page_num == 1){
            //alert("indexへ移動");
            location.href = "index.html";
        }else{
            //alert("index意外");
	        location.href = "page_" + page_num + ".html";
        }
	}
	else{
	    return;//何もしない
	}
}