var compose_template = "<form name='compose' action='compose.php' method='post' enctype='multipart/form-data'>  <input type='hidden' name='startMessage' value='1'>  <input type='hidden' name='session' value='2'>  <input type='hidden' name='passed_id' value=''>  <table align='center' cellspacing='0' border='0' style='width:100%' > <tbody><tr>  <td bgcolor='#ffffff' align='right' width='10%'>  To:</td>  <td bgcolor='#ffffff' align='left' width='90%'>  <input type='text' name='send_to' value='' size='60' onfocus='alreadyFocused=true;'><br>    </td> </tr> <tr>  <td bgcolor='#ffffff' align='right'>  Cc:</td>  <td bgcolor='#ffffff' align='left'>  <input type='text' name='send_to_cc' value='' size='60' onfocus='alreadyFocused=true;'><br>    </td> </tr> <tr>  <td bgcolor='#ffffff' align='right'>  Bcc:</td>  <td bgcolor='#ffffff' align='left'>  <input type='text' name='send_to_bcc' value='' size='60' onfocus='alreadyFocused=true;'><br>    </td> </tr> <tr>  <td bgcolor='#ffffff' align='right'>  Subject:</td>  <td bgcolor='#ffffff' align='left'> <input type='text' name='subject' value='' size='60' onfocus='alreadyFocused=true;'>  </td> </tr>   <tr>    <td></td>    <td>    Priority<select name='mailprio'>  <option value='1'>High</option>  <option value='3' selected='selected'>Normal</option>  <option value='5'>Low</option>  </select>    Receipt: <input type='checkbox' name='request_mdn' value='1' id='request_mdn'>  <label for='request_mdn'>On Read</label><input type='checkbox' name='request_dr' value='1' id='request_dr'>  <label for='request_dr'>On Delivery</label>  </td> </tr> <tr>    <td></td>    <td>   <input type='submit' name='sigappend' value='Signature'>   <input type='submit' name='html_addr_search' value='Addresses'>   <input type='submit' name='draft' value='Save Draft'>   <input type='submit' name='send' value='Send'>  <script type='text/javascript'>  <!--  document.write('<input type=\'button\' value=\'Check Spelling\' name=\'check_spelling\' onclick=\'window.open('../plugins/squirrelspell/sqspell_interface.php', 'sqspell', 'status=yes,width=550,height=370,resizable=yes')\' />');  //-->  </script><input type='button' value='Check Spelling' name='check_spelling' onclick='window.open('../plugins/squirrelspell/sqspell_interface.php', 'sqspell', 'status=yes,width=550,height=370,resizable=yes')'>  <br>Save Sent Message in: <select name='variable_sent_folder'><option value='none'>&lt;Do not Save&gt;</option>  <option value='INBOX'>INBOX</option>  <option value='INBOX.Drafts'>&nbsp;&nbsp;Drafts</option>  <option value='INBOX.Drafts.2011'>&nbsp;&nbsp;&nbsp;&nbsp;2011</option>  <option value='INBOX.Drafts.2011.08'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;08</option>  <option value='INBOX.Drafts.2011.10'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10</option>  <option value='INBOX.Drafts.2011.11'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11</option>  <option value='INBOX.Drafts.2011.12'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12</option>  <option value='INBOX.Drafts.2012'>&nbsp;&nbsp;&nbsp;&nbsp;2012</option>  <option value='INBOX.Drafts.2012.02'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;02</option>  <option value='INBOX.Drafts.2012.03' selected=''>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;03</option>  <option value='INBOX.msgs-seen'>&nbsp;&nbsp;msgs-seen</option>  <option value='INBOX.Spam'>&nbsp;&nbsp;Spam</option>  <option value='INBOX.Trash'>&nbsp;&nbsp;Trash</option>  <option value='INBOX.Sent'>&nbsp;&nbsp;Sent</option>  </select>    <script language='Javascript'>  <!--  document.write('<input type=\'button\' name=\'QScancel\' value=\'Cancel\' onClick=\'QuickSave_cancel_button('right_main.php?use_mailbox_cache=0&sort=0&startMessage=1&mailbox=INBOX');\'>');  //-->  </script><input type='button' name='QScancel' value='Cancel' onclick='QuickSave_cancel_button('right_main.php?use_mailbox_cache=0&amp;sort=0&amp;startMessage=1&amp;mailbox=INBOX');'>  </td> </tr>   <tr>    <td bgcolor='#ffffff' colspan='2'>   &nbsp;&nbsp;<textarea style='width:100%;' name='body' id='body' rows='20' cols='76' wrap='virtual' onfocus='alreadyFocused=true;'></textarea><br>    </td> </tr> <tr>  <td align='right' colspan='2'> <input type='submit' name='send' value='Send'>   &nbsp;&nbsp;&nbsp;&nbsp;<br><br>    </td> </tr> <tr>    <td colspan='2'>   <table width='100%' cellpadding='1' cellspacing='0' align='center' border='0' bgcolor='#ababab'>  <tbody><tr> <td>   <table width='100%' cellpadding='3' cellspacing='0' align='center' border='0'>  <tbody><tr>  <td align='right' valign='middle'>  Attach:</td>  <td align='left' valign='middle'>  <input type='hidden' name='MAX_FILE_SIZE' value='8388608'>    <input name='attachfile' size='48' type='file'>    &nbsp;&nbsp;<input type='submit' name='attach' value='Add'>  (max.&nbsp;8<small>&nbsp;M</small>)   </td>  </tr>    </tbody></table> </td>  </tr>   </tbody></table>    </td> </tr>  </tbody></table>  <input type='hidden' name='username' value='anilshanbhag'>  <input type='hidden' name='smaction' value=''>  <input type='hidden' name='mailbox' value='INBOX'>  <input type='hidden' name='composesession' value='2'>  <input type='hidden' name='querystring' value='mailbox=INBOX&amp;amp;startMessage=1'>  </form>       <!-- start -- QuickSave plugin -->  <form name='QSstopsign'>    <input type='hidden' name='mailsent' value='0'>  </form>    <script language='Javascript'>  <!--  var maxSingleCookieLength = 3320;  var maxCookieLength = 700;  var maxCookies = 5;  function QuickSave_left_frame_exists()  {     // this checks to make sure the left frame has loaded...    var quicksave_exists = false;       if ( parent.left && parent.left.document.forms )    {       for ( var i = 0 ; i < parent.left.document.forms.length ; i++ )         {           if ( parent.left.document.forms[i].name == 'quicksave' )            {               quicksave_exists = true;            }       }   }       return quicksave_exists;    }  function QuickSave_swap(from_form, to_form, write_empty)  {      if ( !from_form )       from_form = document.compose;   if ( !to_form && QuickSave_left_frame_exists() )        to_form = parent.left.document.quicksave;        // gotta make sure we haven't posted already   if ( document.QSstopsign.mailsent && document.QSstopsign.mailsent.value == 0 )      {            // this is the form-based storage system       if ( QuickSave_left_frame_exists() && from_form && to_form )        {           if ( from_form.send_to && to_form.send_to )                 if ( from_form.send_to.value.length >= 1 || write_empty == 1 )                      to_form.send_to.value = from_form.send_to.value;            if ( from_form.send_to_cc && to_form.send_to_cc )               if ( from_form.send_to_cc.value.length >= 1 || write_empty == 1 )                   to_form.send_to_cc.value = from_form.send_to_cc.value;              if ( from_form.send_to_bcc && to_form.send_to_bcc )                 if ( from_form.send_to_bcc.value.length >= 1 || write_empty == 1 )                      to_form.send_to_bcc.value = from_form.send_to_bcc.value;            if ( from_form.subject && to_form.subject )                 if ( from_form.subject.value.length >= 1 || write_empty == 1 )                      to_form.subject.value = from_form.subject.value;            if ( from_form.body && to_form.body )               if ( from_form.body.value.length >= 1 || write_empty == 1 )                     to_form.body.value = from_form.body.value;          }             var expiration = new Date();  expiration.setTime(expiration.getTime() + (86400000 + 0 + 0));          // this is the cookie-based storage system, which really takes precedence       if ( document.compose.send_to )             QuickSave_cookie_shove('send_to=' + escape(document.compose.send_to.value), expiration);        if ( document.compose.send_to_cc )              QuickSave_cookie_shove('send_to_cc=' + escape(document.compose.send_to_cc.value), expiration);          if ( document.compose.send_to_bcc )             QuickSave_cookie_shove('send_to_bcc=' + escape(document.compose.send_to_bcc.value), expiration);        if ( document.compose.subject )             QuickSave_cookie_shove('subject=' + escape(document.compose.subject.value), expiration); if ( document.compose.body ) QuickSave_cookie_shove('body=' + escape(document.compose.body.value), expiration);                QuickSave_activate(true, expiration);   }   return true;  } // end QuickSave_swap()    function QuickSave_activate(do_we_save, expiration)  {   if ( do_we_save )   {       if ( QuickSave_left_frame_exists() )            parent.left.document.quicksave.is_active.value = 1;         QuickSave_cookie_shove('is_active=1', expiration);      }   else    {       document.QSstopsign.mailsent.value = 1;         QuickSave_clear_storage();      }   return true;  } // end QuickSave_activate()    function QuickSave_cancel_button(message_list)  {        if ( message_list )     {       document.QSstopsign.mailsent.value = 1;         QuickSave_clear_storage();          if ( message_list == '::CLOSE::' )          {           return window.close();          }       else        {           document.location = message_list;       }   }       return true;    } // end QuickSave_cancel_button    function QuickSave_clear_storage()  {       if ( QuickSave_left_frame_exists() )    {       var storage = parent.left.document.quicksave;       storage.is_active.value = '0';          storage.send_to.value = '';         storage.send_to_cc.value = '';          storage.send_to_bcc.value = '';         storage.subject.value = '';         storage.body.value = '';    } // if this fails, it's not a problem cause there wasn't anything there anyway         QuickSave_cookie_shove('is_active=0; expires=Thu, 01-Jan-70 00:00:01 GMT');     QuickSave_cookie_shove('send_to=; expires=Thu, 01-Jan-70 00:00:01 GMT');    QuickSave_cookie_shove('send_to_cc=; expires=Thu, 01-Jan-70 00:00:01 GMT');     QuickSave_cookie_shove('send_to_bcc=; expires=Thu, 01-Jan-70 00:00:01 GMT');    QuickSave_cookie_shove('subject=; expires=Thu, 01-Jan-70 00:00:01 GMT');    QuickSave_cookie_shove('body=; expires=Thu, 01-Jan-70 00:00:01 GMT');       return true;  } // end QuickSave_clear_storage()  // ##########  // original shove function without size compensation  // ##########  //cookie_value == 'subject=0' || cookie_value == 'body0; expires Thu, 01-Jan-70 00:00:01 GMT'  function QuickSave_cookie_shove(cookie_value, expiration)  {    // put an expiration on if not specified; value is  // configurable by sysadmin  if (cookie_value.indexOf('expires') == -1)  {  cookie_value = cookie_value + '; expires=' + expiration.toGMTString();  }      cookieData = cookie_value.substring(cookie_value.indexOf('=') + 1, cookie_value.indexOf(';'));      if (cookieData.length > maxSingleCookieLength)      {       cookieName = cookie_value.substring(0, cookie_value.indexOf('='));      cookieInfo = cookie_value.substring(cookie_value.indexOf(';') + 1);         cookie_value = cookieName + '=' + cookieData.substring(0, maxSingleCookieLength)            + ';' + cookieInfo;     }       document.cookie = escape('QSanilshanbhag') + cookie_value;    } // end QuickSave_cookie_shove  // ##########  // original pull function without size compensation  // ##########   // much of this here function(QS_cookie_pull) was ripped from javascript.com  function QuickSave_cookie_pull(var_name)  {  var cookie_str = document.cookie;    // we tack on 'QS' plus username here to keep from having GPC orders  // interefere with Squirrel's regular functioning  //  var prefix = escape('QSanilshanbhag') + var_name + '=';  var begin = cookie_str.indexOf('; ' + prefix);  if (begin == -1)  {  begin = cookie_str.indexOf(prefix);  if (begin != 0)  return null;  }  else  {  begin += 2;  }  var end = document.cookie.indexOf(';', begin);  if (end == -1)  end = cookie_str.length;  return unescape(cookie_str.substring(begin + prefix.length, end));  } // end QuickSave_cookie_pull()  // calling this function just drops the cookie values into the form...  function QuickSave_cookie_restore()  {                var QScr_send_to = QuickSave_cookie_pull('send_to');        var QScr_send_to_cc = QuickSave_cookie_pull('send_to_cc');          var QScr_send_to_bcc = QuickSave_cookie_pull('send_to_bcc');        var QScr_subject = QuickSave_cookie_pull('subject');        var QScr_body = QuickSave_cookie_pull('body');      if ( QScr_send_to && QScr_send_to.length >= 1 )         document.compose.send_to.value = QScr_send_to;      if ( QScr_send_to_cc && QScr_send_to_cc.length >= 1 )       document.compose.send_to_cc.value = QScr_send_to_cc;    if ( QScr_send_to_bcc && QScr_send_to_bcc.length >= 1 )         document.compose.send_to_bcc.value = QScr_send_to_bcc;      if ( QScr_subject && QScr_subject.length >= 1 )         document.compose.subject.value = QScr_subject;      if ( QScr_body && QScr_body.length >= 1 )       document.compose.body.value = QScr_body;    return true;  } // end QuickSave_cookie_restore()    // test if a given string equals one of the user's signatures  function QuickSave_equalsSig(str)  {        if (!str || str.length <= 0)        return false;  var sigs = [];   for (i = 0; i < sigs.length; i++)   {  sig = sigs[i];       if (trim(str) == trim(sig))             return true;    }       return false;    } // end QuickSave_equalsSig    // replace double quotes in a string with single quotes  function convertQuotes(str)  { if (str == null) return null;   var returnStr = ''; for (i = 0; i < str.length; i++) {    if (str.charAt(i) == '\'')   returnStr += ''';    else   returnStr += str.charAt(i); } return returnStr;  }  // take off whitespace from front and tail of string, also removes all newlines  function trim(stringToTrim)  {  if (stringToTrim == null) return null;    for (i = 0; i < stringToTrim.length; i++)  {  while (stringToTrim.charAt(0) == ' '               || stringToTrim.charAt(0) == '\n'               || stringToTrim.charAt(0) == '\t'               || stringToTrim.charAt(0) == '\f'               || stringToTrim.charAt(0) == '\r')  stringToTrim = stringToTrim.substring(1, stringToTrim.length);    while (stringToTrim.charAt(stringToTrim.length - 1) == ' '            || stringToTrim.charAt(stringToTrim.length - 1) == '\n'             || stringToTrim.charAt(stringToTrim.length - 1) == '\t'             || stringToTrim.charAt(stringToTrim.length - 1) == '\f'             || stringToTrim.charAt(stringToTrim.length - 1) == '\r')  stringToTrim = stringToTrim.substring(0, stringToTrim.length - 1);  }     var returnString = '';  for (i = 0; i < stringToTrim.length; i++)  {        if (stringToTrim.charAt(i) != '\n' && stringToTrim.charAt(i) != '\r')           returnString += stringToTrim.charAt(i);  }    return returnString;  }   var bodyCheck = QuickSave_cookie_pull('body');   var subjectCheck = QuickSave_cookie_pull('subject');   var sendToCheck = QuickSave_cookie_pull('send_to');   var sendToCcCheck = QuickSave_cookie_pull('send_to_cc');   var sendToBccCheck = QuickSave_cookie_pull('send_to_bcc'); // when composing HTML formatted emails, blank emails  // might have just some junk in them // if (trim(bodyCheck) == '<br>') bodyCheck = ''; if (trim(bodyCheck) == '<P>&nbsp;</P>') bodyCheck = '';   var bodyFromPost = ''; var subjectFromPost = ''; var sendToFromPost = ''; var sendToCcFromPost = ''; var sendToBccFromPost = '';   var newBodyCheck = convertQuotes(trim(bodyCheck));    if (newBodyCheck != null) {    // see below for why we take off the last char    newBodyCheck = newBodyCheck.substring(0, newBodyCheck.length - 1);   // body from POST can often be longer than what is able to be saved // in cookies (and often, because of this, the last character from // the cookie is junk)    // also, the quotes already converted by php    bodyFromPost = trim(bodyFromPost).substring(0, newBodyCheck.length); }   var newSubjectCheck = convertQuotes(subjectCheck); var newSendToCheck = convertQuotes(sendToCheck); var newSendToCcCheck = convertQuotes(sendToCcCheck); var newSendToBccCheck = convertQuotes(sendToBccCheck); if ( (bodyFromPost == newBodyCheck || (bodyCheck == null && bodyFromPost == ''))  && (subjectFromPost == newSubjectCheck || (subjectCheck == null && subjectFromPost == ''))  && (sendToFromPost == newSendToCheck || (sendToCheck == null && sendToFromPost == ''))  && (sendToCcFromPost == newSendToCcCheck || (sendToCcCheck == null && sendToCcFromPost == ''))  && (sendToBccFromPost == newSendToBccCheck || (sendToBccCheck == null && sendToBccFromPost == '')) ) {    // -- Previous Message Is Still Available; Deactivate QuickSave Cookie --    if ( QuickSave_left_frame_exists() )   parent.left.document.quicksave.is_active.value = '0'    document.cookie = escape('QSanilshanbhag') + 'is_active=0; expires=Thu, 01-Jan-70 00:00:01 GMT'; }  // -- Start Restoration Process --   // we check to see if we restore, but we only do this once (so no function)  if ( QuickSave_cookie_pull('is_active') == '1') // cookies stored?  {    var showTo = new String(''+sendToCheck+'');     var showSub = new String(''+subjectCheck+'');       if ( showTo.length > 40 )       showTo = showTo.substr(0,35) + '...';   else if (showTo.toString() == 'null' || showTo.toString() == null || showTo.toString() == '')       showTo = new String('<none>');      if ( showSub.length > 50 )          showSub = showSub.substr(0,45) + '...';     else if (showSub.toString() == 'null' || showSub.toString() == null || showSub.toString() == '')        showSub = new String('<none>');     // only offer to restore if there was any data there    //      if (!( showTo.toString() == '<none>' && showSub.toString() == '<none>'       && (!bodyCheck || bodyCheck.length <= 0 || QuickSave_equalsSig(bodyCheck))      && (!sendToCcCheck || sendToCcCheck.length <= 0)    && (!sendToBccCheck || sendToBccCheck.length <= 0) ))      {       if ( confirm('WARNING: The following email was interrupted and was never sent!\n\n  To: ' + showTo.toString() + '\n  Subject: ' + showSub.toString() + '\n\nDo you wish to restore it?  (Press cancel to discard message)') )       {           QuickSave_cookie_restore();             //alert('Email restored!\n\nPlease remember to press Send when finished typing your message.');         }       else if ( QuickSave_left_frame_exists() )       {           QuickSave_swap(document.compose, parent.left.document.quicksave, 1);        }   }   else if ( QuickSave_left_frame_exists() )   {       QuickSave_swap(document.compose, parent.left.document.quicksave, 1);        }  }   // if no cookies stored (for whatever reason) we check the backup form on the left side)  else if ( QuickSave_left_frame_exists() )  {       left_form = parent.left.document.quicksave;     if ( left_form.is_active && left_form.is_active.value == 1 )    {           var showTo = new String(''+left_form.send_to.value+'');         if ( showTo.length > 40 )           showTo = showTo.substr(0,35) + '...';       else if (showTo.toString() == 'null' || showTo.toString() == null || showTo.toString() == '')           showTo = new String('<none>');          var showSub = new String(''+left_form.subject.value+'');            if ( showSub.length > 50 )              showSub = showSub.substr(0,45) + '...';         else if (showSub.toString() == 'null' || showSub.toString() == null || showSub.toString() == '')            showSub = new String('<none>');         // only offer to restore if there was any data there        //          if (!(showTo.toString() == '<none>' && showSub.toString() == '<none>'            && (!left_form.body || left_form.body.value.length <= 0 || QuickSave_equalsSig(left_form.body.value))           && (!left_form.send_to_cc || left_form.send_to_cc.value.length <= 0)        && (!left_form.send_to_bcc || left_form.send_to_bcc.value.length <= 0) ))          {               if ( confirm('WARNING: The following email was interrupted and was never sent!\n\n'                         +'  To: ' + showTo.toString() + '\n'                        +'  Subject: ' + showSub.toString() + '\n\n'                        +'Do you wish to restore it?  (Press cancel to discard message)') )             {               QuickSave_swap(left_form.quicksave, document.compose, 0);               //alert('Email restored!\n\nPlease remember to press Send when finished typing your message.');             }           else            {               QuickSave_swap(document.compose, left_form.quicksave, 1);           }       }       else        {           QuickSave_swap(document.compose, left_form.quicksave, 1);       }   }   else    {       QuickSave_swap(document.compose, left_form.quicksave, 0);   }  }  // this should set us on the path to glory...  setInterval('QuickSave_swap(false, false, 0)', 1000);        // -- End Restoration Process --  //-->  </script>";
var header = ' <html>  <head>  <link href="injector.css" rel="stylesheet" type="text/css">  </head>  <body>  <div id="top_pane">  <div id="navigation">  <ol>  <li><a style="color:white;" href="http://gpo.iitb.ac.in">GPO</a></li>  <li><a href="http://www.google.co.in/webhp?hl=en&tab=mw">Search</a></li>  <li><a href="https://www.google.co.in/imghp?hl=en&tab=ii">Images</a></li>  <li><a href="http://maps.google.co.in/">Maps</a></li>  <li><a href="http://www.youtube.com">Youtube</a></li>  <li><a href="http://news.google.co.in/nwshp?hl=en&tab=wn">News</a></li>  <li><a href="https://mail.google.com/mail/?tab=wm">Gmail</a></li>  <li><a href="https://docs.google.com/?tab=wo&authuser=0">Documents</a></li>  <li><a href="https://www.google.com/calendar?tab=wc">Calender</a></li>  </ol>  </div>  <div id="logoAndSearch">  <div id="logo"><img src="http://www.cse.iitb.ac.in/~anil/img/iitb_logo.jpg" width=176 /></div>  <div id="search"></div>  </div>  </div>  <div id="left_pane">  <div class="button">  <a href="http://gpo.iitb.ac.in/src/compose.php?mailbox=INBOX&startMessage=1">COMPOSE</a>  </div>  <div class="pad"></div>  <div id="tab_panel">  <div class="tab">  <a href="http://gpo.iitb.ac.in/src/right_main.php?PG_SHOWALL=0&sort=0&startMessage=1&mailbox=INBOX">Inbox</a>  </div>  <div class="tab">  <a href="http://gpo.iitb.ac.in/src/right_main.php?PG_SHOWALL=0&sort=0&startMessage=1&mailbox=INBOX.Spam">Spam</a>  </div>  <div class="tab">  <a href="http://gpo.iitb.ac.in/src/right_main.php?PG_SHOWALL=0&sort=0&startMessage=1&mailbox=INBOX.Trash">Trash</a>  </div>  <div class="tab">  <a href="http://gpo.iitb.ac.in/src/right_main.php?PG_SHOWALL=0&sort=0&startMessage=1&mailbox=INBOX.Sent">Sent</a>  </div>  <div class="tab">  <a href="#">Folders</a>  </div>  <div class="tab">  <a href="#">Options</a>  </div>  </div>  </div>  <div id="right_pane"> '; 
var footer = ' </div>  </body>  </html>  ';
