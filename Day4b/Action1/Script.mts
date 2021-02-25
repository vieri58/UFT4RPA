SystemUtil.Run _
     "c:\Users\Administrator\Desktop\RPA\CICS.rsdm"

TeWindow("TeWindow").TeScreen("Si").TeField("USERID").Set "SYSAD" @@ hightlight id_;_746_;_script infofile_;_ZIP::ssf1.xml_;_
TeWindow("TeWindow").TeScreen("Si").TeField("Password").SetSecure "6037dfa6189e9a91ba9ea21d049fe796" @@ hightlight id_;_826_;_script infofile_;_ZIP::ssf2.xml_;_
TeWindow("TeWindow").TeScreen("Si").TeField("Password").SetCursorPos 5 @@ hightlight id_;_826_;_script infofile_;_ZIP::ssf3.xml_;_
TeWindow("TeWindow").TeScreen("Si").SendKey TE_ENTER @@ hightlight id_;_7958_;_script infofile_;_ZIP::ssf4.xml_;_
TeWindow("TeWindow").TeScreen("Si").Sync
TeWindow("TeWindow").TeScreen("ACCTE0012I Signon complete").SendKey "ACCT" @@ hightlight id_;_7213_;_script infofile_;_ZIP::ssf5.xml_;_
TeWindow("TeWindow").TeScreen("ACCTE0012I Signon complete").SetCursorPos 1,5 @@ hightlight id_;_7213_;_script infofile_;_ZIP::ssf6.xml_;_
TeWindow("TeWindow").TeScreen("ACCTE0012I Signon complete").SendKey TE_ENTER @@ hightlight id_;_7213_;_script infofile_;_ZIP::ssf7.xml_;_
TeWindow("TeWindow").TeScreen("ACCTE0012I Signon complete").Sync
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").TeField("REQUEST TYPE").Set "A" @@ hightlight id_;_662_;_script infofile_;_ZIP::ssf8.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").TeField("ACCOUNT").Set Parameter("account_number") @@ hightlight id_;_675_;_script infofile_;_ZIP::ssf9.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").TeField("PRINTER").SetCursorPos @@ hightlight id_;_692_;_script infofile_;_ZIP::ssf10.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").SendKey TE_ENTER @@ hightlight id_;_9864_;_script infofile_;_ZIP::ssf11.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").Sync
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: NEW RECORD").TeField("SURNAME").Set "Rossi" @@ hightlight id_;_197_;_script infofile_;_ZIP::ssf12.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: NEW RECORD").TeField("FIRST").Set "Mario" @@ hightlight id_;_277_;_script infofile_;_ZIP::ssf13.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: NEW RECORD").TeField("ADDRESS").Set "Milano" @@ hightlight id_;_357_;_script infofile_;_ZIP::ssf14.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: NEW RECORD").TeField("field437").Set "Italy" @@ hightlight id_;_437_;_script infofile_;_ZIP::ssf15.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: NEW RECORD").TeField("NO CARDS ISSUED").Set "1" @@ hightlight id_;_900_;_script infofile_;_ZIP::ssf16.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: NEW RECORD").TeField("DATE ISSUED").Set "02" @@ hightlight id_;_919_;_script infofile_;_ZIP::ssf17.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: NEW RECORD").TeField("DATE ISSUED_2").Set "25" @@ hightlight id_;_922_;_script infofile_;_ZIP::ssf18.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: NEW RECORD").TeField("DATE ISSUED_3").Set "21" @@ hightlight id_;_925_;_script infofile_;_ZIP::ssf19.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: NEW RECORD").TeField("REASON").Set "N" @@ hightlight id_;_941_;_script infofile_;_ZIP::ssf20.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: NEW RECORD").TeField("CARD CODE").Set "2" @@ hightlight id_;_973_;_script infofile_;_ZIP::ssf21.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: NEW RECORD").TeField("APPROVED BY").Set "GW" @@ hightlight id_;_999_;_script infofile_;_ZIP::ssf22.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: NEW RECORD").TeField("APPROVED BY").SetCursorPos 2 @@ hightlight id_;_999_;_script infofile_;_ZIP::ssf23.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: NEW RECORD").SendKey TE_ENTER @@ hightlight id_;_13420_;_script infofile_;_ZIP::ssf24.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").TeField("REQUESTED(protected)").Check CheckPoint("REQUESTED(protected)") @@ hightlight id_;_1842_;_script infofile_;_ZIP::ssf27.xml_;_
TeWindow("TeWindow").InsightObject("InsightObject").Click @@ hightlight id_;_5_;_script infofile_;_ZIP::ssf28.xml_;_
TeWindow("TeWindow").InsightObject("InsightObject_2").Click @@ hightlight id_;_10_;_script infofile_;_ZIP::ssf29.xml_;_
TeWindow("TeWindow").InsightObject("InsightObject_3").Click @@ hightlight id_;_18_;_script infofile_;_ZIP::ssf30.xml_;_
TeWindow("TeWindow").InsightObject("InsightObject_4").Click @@ hightlight id_;_26_;_script infofile_;_ZIP::ssf31.xml_;_
TeWindow("TeWindow").InsightObject("InsightObject_5").Click @@ hightlight id_;_32_;_script infofile_;_ZIP::ssf32.xml_;_
Window("Program Manager").InsightObject("InsightObject").Click @@ hightlight id_;_37_;_script infofile_;_ZIP::ssf33.xml_;_
SystemUtil.CloseProcessByName _
      "RumbaPage.exe"

