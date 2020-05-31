#NoEnv
SendMode Input
#InstallKeybdHook
#UseHook On
Menu, Tray, Icon, shell32.dll, 283
#SingleInstance force
#WinActivateForce

KillOrOpenDiscord() {
    if WinExist("ahk_exe Discord.exe") {
        Process, Close, Discord.exe
        CoordMode, Mouse, Screen
        BlockInput, MouseMove
        MouseGetPos, mouseX, mouseY
        MouseMove, 2630, 1415, 0
        MouseMove, 3350, 1415, 30
        MouseMove, mouseX, mouseY, 0
        BlockInput, MouseMoveOff
    } else {
        Run, C:\Users\fabia\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Discord Inc\Discord.lnk
    }
}
PowerSearch() {
    Send, !{Space}
}

~F24::
FileRead, key, C:\Users\fabia\OneDrive\Projects\streamdeck-macros\key.txt
if (key = "KillOrOpenDiscord")
KillOrOpenDiscord()
else if (key = "PowerSearch")
PowerSearch()