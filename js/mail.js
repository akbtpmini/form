// JavaScript Document

<!--
function populate(paraDay) 
{									
	var objyear=document.getElementById("UserRegister21_byear");
	var objmonth=document.getElementById("UserRegister21_bmonth");
	var objday=document.getElementById("UserRegister21_bday");
	var hidmonth=document.getElementById("UserRegister21_hidmonth");
	var hidday=document.getElementById("UserRegister21_hidday");
	
	timeA = new Date(objyear.options[objyear.selectedIndex].value, objmonth.options[objmonth.selectedIndex].value,1);
	timeDifference = timeA - 86400000;
	timeB = new Date(timeDifference);
	var bdaysInMonth = timeB.getDate();

	for(var i=0; i<objday.length;i++){
		objday.options[0]=null;
	}  

	for (var i = 0; i < bdaysInMonth; i++) {
		objday.options[i] = new Option(i+1,i+1);
	}

	if ( paraDay != -1 )
		objday.selectedIndex = paraDay-1;		
	else 
	{
		if (hidday.value == "")
		{
			objday.options[0].selected = true;
			hidday.value="01";
		}else
		{
			objday.selectedIndex = hidday.value-1;
		}		
	}
	
	hidmonth.value=objmonth.value;
	
}

var counties=new Array();
counties[0]=null;
counties[1]=new Array('100,中正區','103,大同區','104,中山區','105,松山區','106,大安區','108,萬華區','110,信義區','111,士林區','112,北投區','114,內湖區','115,南港區','116,文山區');
counties[2]=new Array('200,仁愛區','201,信義區','202,中正區','203,中山區','204,安樂區','205,暖暖區','206,七堵區');
counties[3]=new Array('207,萬里區','208,金山區','220,板橋區','221,汐止區','222,深坑區','223,石碇區','224,瑞芳區','226,平溪區','227,雙溪區','228,貢寮區','231,新店區','232,坪林區','233,烏來區','234,永和區','235,中和區','236,土城區','237,三峽區','238,樹林區','239,鶯歌區','241,三重區','242,新莊區','243,泰山區','244,林口區','247,蘆洲區','248,五股區','249,八里區','251,淡水區','252,三芝區','253,石門區');
counties[4]=new Array('260,宜蘭市','261,頭城鎮','262,礁溪鄉','263,壯圍鄉','264,員山鄉','265,羅東鎮','266,三星鄉','267,大同鄉','268,五結鄉','269,冬山鄉','270,蘇澳鎮','272,南澳鄉');
counties[5]=new Array('320,中壢市','324,平鎮市','325,龍潭鄉','326,楊梅鎮','327,新屋鄉','328,觀音鄉','330,桃園市','333,龜山鄉','334,八德市','335,大溪鎮','336,復興鄉','337,大園鄉','338,蘆竹鄉');
counties[6]=new Array('300,新竹市');
counties[7]=new Array('302,竹北市','303,湖口鄉','304,新豐鄉','305,新埔鎮','306,關西鎮','307,芎林鄉','308,寶山鄉','310,竹東鎮','311,五峰鄉','312,橫山鄉','313,尖石鄉','314,北埔鄉','315,峨眉鄉');
counties[8]=new Array('350,竹南鎮','351,頭份鎮','352,三灣鄉','353,南庄鄉','354,獅潭鄉','356,後龍鎮','357,通霄鎮','358,苑裡鎮','360,苗栗市','361,造橋鄉','362,頭屋鄉','363,公館鄉','364,大湖鄉','365,泰安鄉','366,銅鑼鄉','367,三義鄉','368,西湖鄉','369,卓蘭鎮');
counties[9]=new Array('400,中區','401,東區','402,南區','403,西區','404,北區','406,北屯區','407,西屯區','408,南屯區','411,太平區','412,大里區','413,霧峰區','414,烏日區','420,豐原區','421,后里區','422,石岡區','423,東勢區','424,和平區','426,新社區','427,潭子區','428,大雅區','429,神岡區','432,大肚區','433,沙鹿區','434,龍井區','435,梧棲區','436,清水區','437,大甲區','438,外埔區','439,大安區');
counties[10]=new Array('500,彰化市','502,芬園鄉','503,花壇鄉','504,秀水鄉','505,鹿港鎮','506,福興鄉','507,線西鄉','508,和美鎮','509,伸港鄉','510,員林鎮','511,社頭鄉','512,永靖鄉','513,埔心鄉','514,溪湖鎮','515,大村鄉','516,埔鹽鄉','520,田中鎮','521,北斗鎮','522,田尾鄉','523,埤頭鄉','524,溪州鄉','525,竹塘鄉','526,二林鎮','527,大城鄉','528,芳苑鄉','530,二水鄉');
counties[11]=new Array('540,南投市','541,中寮鄉','542,草屯鎮','544,國姓鄉','545,埔里鎮','546,仁愛鄉','551,名間鄉','552,集集鎮','553,水里鄉','555,魚池鄉','556,信義鄉','557,竹山鎮','558,鹿谷鄉');
counties[12]=new Array('600,嘉義市');
counties[13]=new Array('602,番路鄉','603,梅山鄉','604,竹崎鄉','605,阿里山鄉','606,中埔鄉','607,大埔鄉','608,水上鄉','611,鹿草鄉','612,太保市','613,朴子市','614,東石鄉','615,六腳鄉','616,新港鄉','621,民雄鄉','622,大林鎮','623,溪口鄉','624,義竹鄉','625,布袋鎮');
counties[14]=new Array('630,斗南鎮','631,大埤鄉','632,虎尾鎮','633,土庫鎮','634,褒忠鄉','635,東勢鄉','636,台西鄉','637,崙背鄉','638,麥寮鄉','640,斗六市','643,林內鄉','646,古坑鄉','647,莿桐鄉','648,西螺鎮','649,二崙鄉','651,北港鎮','652,水林鄉','653,口湖鄉','654,四湖鄉','655,元長鄉');
counties[15]=new Array('700,中區','701,東區','702,南區','703,西區','704,北區','708,安平區','709,安南區','710,永康區','711,歸仁區','712,新化區','713,左鎮區','714,玉井區','715,楠西區','716,南化區','717,仁德區','718,關廟區','719,龍崎區','720,官田區','721,麻豆區','722,佳里區','723,西港區','724,七股區','725,將軍區','726,學甲區','727,北門區','730,新營區','731,後壁區','732,白河區','733,東山區','734,六甲區','735,下營區','736,柳營區','737,鹽水區','741,善化區','742,大內區','743,山上區','744,新市區','745,安定區');
counties[16]=new Array('800,新興區','801,前金區','802,苓雅區','803,鹽埕區','804,鼓山區','805,旗津區','806,前鎮區','807,三民區','811,楠梓區','812,小港區','813,左營區','814,仁武區','815,大社區','820,岡山區','821,路竹區','822,阿蓮區','823,田寮區','824,燕巢區','825,橋頭區','826,梓官區','827,彌陀區','828,永安區','829,湖內區','830,鳳山區','831,大寮區','832,林園區','833,鳥松區','840,大樹區','842,旗山區','843,美濃區','844,六龜區','845,內門區','846,杉林區','847,甲仙區','848,桃源區','849,三民區','851,茂林區','852,茄萣區');
counties[17]=new Array('900,屏東市','901,三地門鄉','902,霧台鄉','903,瑪家鄉','904,九如鄉','905,里港鄉','906,高樹鄉','907,鹽埔鄉','908,長治鄉','909,麟洛鄉','911,竹田鄉','912,內埔鄉','913,萬丹鄉','920,潮州鎮','921,泰武鄉','922,來義鄉','923,萬巒鄉','924,崁頂鄉','925,新埤鄉','926,南州鄉','927,林邊鄉','928,東港鎮','929,琉球鄉','931,佳冬鄉','932,新園鄉','940,枋寮鄉','941,枋山鄉','942,春日鄉','943,獅子鄉','944,車城鄉','945,牡丹鄉','946,恆春鎮','947,滿州鄉');
counties[18]=new Array('970,花蓮市','971,新城鄉','972,秀林鄉','973,吉安鄉','974,壽豐鄉','975,鳳林鎮','976,光復鄉','977,豐濱鄉','978,瑞穗鄉','979,萬榮鄉','981,玉里鎮','982,卓溪鄉','983,富里鄉');
counties[19]=new Array('950,台東市','951,綠島鄉','952,蘭嶼鄉','953,延平鄉','954,卑南鄉','955,鹿野鄉','956,關山鎮','957,海端鄉','958,池上鄉','959,東河鄉','961,成功鎮','962,長濱鄉','963,太麻里','964,金峰鄉','965,大武鄉','966,達仁鄉');
counties[20]=new Array('880,馬公市','881,西嶼鄉','882,望安鄉','883,七美鄉','884,白沙鄉','885,湖西鄉');
counties[21]=new Array('890,金沙鎮','891,金湖鎮','892,金寧鄉','893,金城鎮','894,烈嶼鄉','896,烏坵鄉');
counties[22]=new Array('209,南竿鄉','210,北竿鄉','211,莒光鄉','212,東引鄉');
counties[23]=null;
counties[24]=null;
counties[25]=null;
counties[26]=null;
counties[27]=null;


function DoSelectAddr1(paraAddr1,paraAddr2)
{
	var addr1=document.getElementById("UserRegister21_icst_addr_1");
	var addr2=document.getElementById("UserRegister21_icst_addr_2");
	var zone=document.getElementById("UserRegister21_icst_zone");
	var hidcounty=document.getElementById("UserRegister21_hidcounty");
	var hidCountyIndex=document.getElementById("UserRegister21_hidCountyIndex");
	var t;
	if ( paraAddr1 == "" )
	    t=addr1.options[addr1.selectedIndex].value;
	else 
	    t=paraAddr1;

	t = t.split(',');
	var ary=new Array();
	ary=counties[parseInt(t[0])];
	if(ary==null)
	{
		addr2.length=1;
		addr2.options[0].value='';
		addr2.options[0].text='';
		zone.value='';
	}
	else
	{
		if ( paraAddr2 != "" )
			t3 = paraAddr2.split(',');

        addr2.length=ary.length;
        for(var i=0;i<ary.length;i++)
        {
	        t02 = ary[i].split(',');
	        addr2.options[i] = new Option(t02[1],ary[i]);
	
	        if ( (paraAddr2 == "") && (i==0) )
	            zone.value=t02[0];
	        else if ( (paraAddr2 != "") && (t3[0] == t02[0]) ) 
	        {
	            addr2.options[i].selected = true;
		    }
	    }
	}
	// hidcounty.value=addr1.value;
	// DoSelectAddr2('');
}

function DoSelectAddr2(paraAddr2)
{
	var addr2=document.getElementById("UserRegister21_icst_addr_2");
	var zone=document.getElementById("UserRegister21_icst_zone");
	var hidcity=document.getElementById("UserRegister21_hidcity");
	var hidCityIndex=document.getElementById("UserRegister21_hidCityIndex");
	var t;
	if ( paraAddr2 == "" )
		t=addr2.options[addr2.selectedIndex].value;
	else 
		t=paraAddr2;
	t=t.split(',');
	zone.value=t[0];
	//hidcity.value=addr2.value;
	// hidcity.value=t[1];
}

iparaCstAddr1 = "";
iparaCstAddr2 = "";

if ( iparaCstAddr1 != "" && iparaCstAddr2 != "" ) {
	DoSelectAddr1(iparaCstAddr1,iparaCstAddr2);
	DoSelectAddr2(iparaCstAddr2);
}

function setyear() 
{
	var objyear=document.getElementById("UserRegister21_byear");
	var hidyear=document.getElementById("UserRegister21_hidyear");
	var objday=document.getElementById("UserRegister21_bday");
	var hidday=document.getElementById("UserRegister21_hidday");
	var objmonth=document.getElementById("UserRegister21_bmonth");
	hidyear.value=objyear.value;	
	objday.options.length=0;
	hidday.value="";
	objmonth.options[0].selected = true;
}

paraDay = "";
if ( paraDay != "" ) 
{
	populate(paraDay);
}
//-->

function setday() 
{
	var objday=document.getElementById("UserRegister21_bday");
	var hidday=document.getElementById("UserRegister21_hidday");
	hidday.value=objday.value;
}



// var objmonth=document.getElementById("UserRegister21_bmonth");
// var objday=document.getElementById("UserRegister21_bday");
// var hidday=document.getElementById("UserRegister21_hidday");
// objday.value=hidday.value;
// if (objmonth.value != '00') 
// {
// 	populate(-1);
// }