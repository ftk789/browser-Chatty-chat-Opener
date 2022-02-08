@echo off
SET _test=%1
   SET _result=%_test:chatty:/=%
   cd "C:\Program Files (x86)\Chatty\"
   start Chatty.exe -single -channel %_result%
