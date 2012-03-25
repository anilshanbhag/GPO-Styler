console.log("GPO Styler inited");

var path = window.location.pathname;
console.log(path);
if (path == "/src/webmail.php") {
    window.location = "http://gpo.iitb.ac.in/src/right_main.php"; 
} else if (path == "/src/left_main.php") {
    window.location = "http://gpo.iitb.ac.in/src/right_main.php"; 
} else if (window.location.pathname == "/src/right_main.php") {
    var tables = document.getElementsByTagName("table"),
        mail_table = tables[7],
        mail_to_clean = mail_table.getElementsByTagName("tr"),
        mails = [];
    for (var i=1;i <mail_to_clean.length; i+= 2){
        var f = mail_to_clean[i].getElementsByTagName("td");
        var note  = [f[0].innerHTML,f[1].innerHTML,f[2].innerHTML,f[4].innerHTML];
        mails.push(note);
    }
  var header = '<html> \
    <head> \
        <link href="injector.css" rel="stylesheet" type="text/css"> \
    </head> \
    <body> \
        <div id="left_pane"> \
            <div class="button"> \
                <a href="#">COMPOSE</a> \
            </div> \
            <div class="pad"></div> \
            <div id="tab_panel"> \
                <div class="tab"> \
                    <a href="http://gpo.iitb.ac.in/src/right_main.php?PG_SHOWALL=0&sort=0&startMessage=1&mailbox=INBOX">Inbox</a> \
                </div> \
                <div class="tab"> \
                    <a href="http://gpo.iitb.ac.in/src/right_main.php?PG_SHOWALL=0&sort=0&startMessage=1&mailbox=INBOX.Spam">Spam</a> \
                </div> \
                <div class="tab"> \
                    <a href="http://gpo.iitb.ac.in/src/right_main.php?PG_SHOWALL=0&sort=0&startMessage=1&mailbox=INBOX.Trash">Trash</a> \
                </div> \
                <div class="tab"> \
                    <a href="http://gpo.iitb.ac.in/src/right_main.php?PG_SHOWALL=0&sort=0&startMessage=1&mailbox=INBOX.Sent">Sent</a> \
                </div> \
                <div class="tab"> \
                    <a href="#">Folders</a> \
                </div> \
                <div class="tab"> \
                    <a href="#">Options</a> \
                </div> \
            </div> \
        </div> \
        <div id="right_pane"> \
            <div id="unread_mails"> \
                <details open> \
                    <summary><span class="details_summary">Unread Mails</span></summary> \
                    <br/> \
                <table cellpadding="0" style="width:100%;"> \
                    <colgroup> \
                        <col class="c1"> \
                        <col class="c2"> \
                        <col class="c3"> \
                        <col class="c4"> \
                    </colgroup> \
                    <tbody> \
    ';
   var unread_mails ='';
   var seperator = '</tbody> \
                    </table> \
                    </details> \
                </div> \
                <div id="read_mails"> \
                     <details open> \
                        <summary><span class="details_summary">Read Mails</span></summary> \
                        <br/> \
                     <table cellpadding="0" style="width:100%;"> \
                        <colgroup> \
                            <col class="c1"> \
                            <col class="c2"> \
                            <col class="c3"> \
                            <col class="c4"> \
                        </colgroup> \
                        <tbody> \
    ';

    var read_mails = "";
    for (i in mails) {
       read_mails += '<tr class="mail_entry read"><td>' + mails[i][0] + '</td><td>' + mails[i][1] + '</td><td>' + mails[i][3] + '</td><td>' + mails[i][2] + '</td></tr>';
    }
 
    var footer = '      </tbody> \
                        </table> \
                        </details> \
                    </div> \
                </div> \
            </body> \
        </html> \
    ';
    document.body.innerHTML = header + unread_mails + seperator + read_mails + footer;
}
