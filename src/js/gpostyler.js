/**
 * @constructor
  */
function GPOStyler() {
    console.log("GPO Styler inited");
    this.path = window.location.pathname;
}

GPOStyler.prototype = {
    actionSelector : function() {
        switch (this.path) {
            case "/src/login.php": 
                this.loginPageHandler();
                break;
            case "/src/webmail.php":
            case "/src/left_main.php": 
                this.redirect();
                break;
            case "/src/compose.php":
                this.composePageHandler();
                break;
            case "/src/right_main.php":
                this.mainPageHandler();
                break;
            default:
                this.unknownHandler();
                break;
        } 
    },

    loginPageHandler : function() {
    
    },

    redirect: function() {
        window.location = "http://gpo.iitb.ac.in/src/right_main.php"; 
    },

    composePageHandler: function() {
        document.body.innerHTML = header + compose_template + footer;
    },

    mainPageHandler : function() {
        var content = document.getElementsByTagName("form")[0];
		var mail_table=document.getElementsByTagName("table")[7].getElementsByTagName("tr");
		var mail_data=new Array();
		for(i in mail_table)
		{
			if(i==0)
			{
				var cols=new Array();
				for(j in mail_table[i].getElementsByTagName("td"))
				{
					cols[j]=mail_table[i].getElementsByTagName("td")[j];
				}
				mail_data[i]=cols;
			}
			else if ((i%2)==1)
			{
				var c=i;c++;c=c/2;
				var cols=new Array();
				for(j in mail_table[i].getElementsByTagName("td"))
				{
					cols[j]=mail_table[i].getElementsByTagName("td")[j];
				}
				mail_data[c]=cols;
			}
		}

		for(i in mail_data)
		{
			if(i==0){}
			else
			{
				if(mail_data[i][1].getElementsByTagName("b").length==0)
					mail_data[i-1][0]="R";
				else
					mail_data[i-1][0]="U";
		
				mail_data[i-1][1]=mail_data[i][1].innerText;//sender
				mail_data[i-1][2]=mail_data[i][2].innerText;//time
				mail_data[i-1][3]=mail_data[i][4].innerHTML;//Subject
				mail_data[i-1][4]=mail_data[i][0].innerHTML;//Checkbox
			}
		}

		console.log(mail_data);
		
		var unread_mail_string = '<div id="unread_mails"><details open><summary><span class="details_summary">Unread</span></summary><br/><table cellpadding="0" style="width:100%;"><colgroup><col class="c1"><col class="c2"><col class="c3"><col class="c4"></colgroup><tbody>',
			unread_mail_counter = 0,
			read_mail_string = '<div id="read_mails"><details open><summary><span class="details_summary">Everything Else</span></summary><br/><table cellpadding="0" style="width:100%;"><colgroup><col class="c1"><col class="c2"><col class="c3"><col class="c4"></colgroup><tbody>',
			read_mail_counter = 0;
		for (i in mail_data) {
			if (mail_data[i][0] == "R") {
				read_mail_string += '<tr class="mail_entry read"><td class="checkbox">' +  mail_data[i][4] + '</td><td class="sender">' + mail_data[i][1] + '</td><td class="subject">' + mail_data[i][3] + '</td><td class="time">' + mail_data[i][2] + '</td></tr>'; read_mail_counter += 1;
			} else if (mail_data[i][0] == "U") {
				unread_mail_string += '<tr class="mail_entry"><td class="checkbox">' +  mail_data[i][4] + '</td><td class="sender">' + mail_data[i][1] + '</td><td class="subject">' + mail_data[i][3] + '</td><td class="time">' + mail_data[i][2] + '</td></tr>'; unread_mail_counter += 1;
			}
		}
		var mail_string_end = "</tbody></table></details></div>"; unread_mail_string += mail_string_end; read_mail_string += mail_string_end; 
		if (unread_mail_counter == 0) unread_mail_string = '<div id="unread_mails"><details open><summary><span class="details_summary">Unread Mails</span></summary> <div style="text-align:center; padding-top: 10px; padding-bottom: 10px; font-size: 15px; "> Woohoo! You\'ve read all the messages in your inbox. </div> </details></div>';
		document.body.innerHTML = header + mail_page_header + unread_mail_string + read_mail_string + mail_page_footer + footer;
    },

    unknownHandler: function() {
        var content = document.body.innerHTML;
		document.body.innerHTML = header + content + footer;
    }
}

var gpoStyler = new GPOStyler();
gpoStyler.actionSelector();
