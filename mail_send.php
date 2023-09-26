<?

  
//解決彈出式視窗文字亂碼問題,在每次alert前宣告meta
$strMeta ="<meta http-equiv='content-type' content='text/html; charset=UTF-8'/>";

//驗證碼
include("captcha/securimage.php");
$img = new Securimage();
$valid = $img->check($_POST['code']);

if($valid == true) {
  /*echo "<center>Thanks, you entered the correct code.<br />Click <a href=\"{$_SERVER['PHP_SELF']}\">here</a> to go back.</center>";*/
} else {
  echo $strMeta."<script>alert('驗證碼錯誤,請重新輸入!!');</script>";
  echo "<script>history.go(-1);</script>";
  exit();
}


//mail

if( $_POST['member_number'] == ""){
echo $strMeta."<script>alert('會員編號尚未填寫,請重新輸入!!');</script>";
echo "<script>history.go(-1);</script>";
exit();
}

if( $_POST['username'] == ""){
echo $strMeta."<script>alert('您的姓名尚未填寫,請重新輸入!!');</script>";
echo "<script>history.go(-1);</script>";
exit();
}
if( $_POST['phone'] == "" && $_POST['mobile'] == "" ){
	echo $strMeta."<script>alert('聯絡電話尚未填寫,請重新輸入!!');</script>";
	echo "<script>history.go(-1);</script>";
	exit();
}
if( $_POST['email'] == "" ){
	echo $strMeta."<script>alert('電子信箱尚未填寫,請重新輸入!!');</script>";
	echo "<script>history.go(-1);</script>";
	exit();
}

$to = "mini.wang@akb48-tp.com"; //收件人
$subject = "=?UTF-8?B?".base64_encode("線上諮詢")."?="; //主旨
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From:=?UTF-8?B?".base64_encode("AKB48_TeamTP")."?=<mini.wang@akb48-tp.com>\r\n"; //寄件人

$message2 = "
基本資料:<br>
會員編號：".$_POST['member_number']."<br>
您的姓名：".$_POST['username']."<br>
聯絡電話：".$_POST['phone']."<br>
電子信箱：".$_POST['email']."<br>


<br>
諮詢需求:<br>
<br>
留言內容:<br>"
.$_POST['message']."
";

//寄出信件

mail($to, $subject, $message2, $headers);
echo $strMeta."<script>alert('您的諮詢已送出!!');</script>";
echo "<script>window.location.href='contact.html'</script>";
?>
