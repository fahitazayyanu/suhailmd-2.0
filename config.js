const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347031303215";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347031303215";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_37_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDM1LFxuICAgICAgICA0NixcbiAgICAgICAgMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDkxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNSxcbiAgICAgICAgOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDAsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDYxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNixcbiAgICAgICAgMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDUwLFxuICAgICAgICA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgODIsXG4gICAgICAgIDE4LFxuICAgICAgICAzNixcbiAgICAgICAgMTc2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDkzLFxuICAgICAgICAzNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAxMixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTksXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGZlAreHFVUlFZTHVxMjRQVWwybFAxdHN1RlZEVGpmSW5QYkhRbEtjYXFvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0TENlZjFGa1RHNjM1bHV3bERGUUFBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE2ZGJiNjg1LWU2NjItNGIzMy04MzBmLTViZDY0YTliMTVlYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NCxcbiAgICAgIDI0NCxcbiAgICAgIDIyOSxcbiAgICAgIDk5LFxuICAgICAgMTcsXG4gICAgICA4LFxuICAgICAgOTEsXG4gICAgICAzNixcbiAgICAgIDIyNSxcbiAgICAgIDE3MCxcbiAgICAgIDEzMSxcbiAgICAgIDEwNixcbiAgICAgIDIwMCxcbiAgICAgIDMsXG4gICAgICA1NCxcbiAgICAgIDcwLFxuICAgICAgMTY1LFxuICAgICAgMjIyLFxuICAgICAgMTEzLFxuICAgICAgNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMxLFxuICAgICAgNzYsXG4gICAgICA2OCxcbiAgICAgIDM3LFxuICAgICAgMjIyLFxuICAgICAgNTYsXG4gICAgICAyNTUsXG4gICAgICAxNzksXG4gICAgICA2LFxuICAgICAgMTkzLFxuICAgICAgMTkyLFxuICAgICAgNjIsXG4gICAgICAzOCxcbiAgICAgIDE0OCxcbiAgICAgIDk3LFxuICAgICAgMjI4LFxuICAgICAgNzksXG4gICAgICAxMjMsXG4gICAgICA0NixcbiAgICAgIDIzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBN0NYUEU3QVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAzMTMwMzIxNToxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkZhaGl0YSBTaG9wLm5nXCIsXG4gICAgXCJsaWRcIjogXCIxODkyMTkxNDYzNDI2MDg6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEx2cFBNQkVJTHJwYnNHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsQlNpWjYrT3d2R3IydHp6TGNBTzUveUlRVDFoNUkvZkFSRHpxdGFVTVNvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxUME54N0xVQ0gyeFovZHlldys5VFlNNHVTVHBNYUljZEM1UnVJU1RmVzdMc2plckxnZHNaSjhJRkxJRzZTbEwxMlM2aEZCVkJ5SkxpZUV3WkhzM0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktpYjd0Y3pZNlZzQ001YjFHN3UvWlFnSXFMV1psNXc3cUttRDZ3OWQ4SzdyYTljQUZ5bFdBNXhXT2R0emJYTzVlaXdzNCs5OXdNa2hCdTMrdHEvR0F3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMzEzMDMyMTU6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0OTY0NjE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUEFXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQQVcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCYnlvOHEyTDFnOTNIT3cvMGo4c05VN2lqN0FaVnMvR09nY0N1RHhZdVNzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUxMDIxMjA4MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0NTIxNDUxMDQ2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
