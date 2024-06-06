@echo off
:: Set the IP address, username, and password
set "smb_server=\\172.168.23.34\"
set "username=pakdrive"
set "password=8149"

:: Map the SMB share to a drive letter (e.g., Z:)
net use Z: %smb_server% /user:%username% %password% /persistent:no

:: Check if the mapping was successful
if %errorlevel%==0 (
    echo Successfully connected to the SMB share.
    :: Open the mapped drive in File Explorer
    start Z:
) else (
    echo Failed to connect to the SMB share.
)

:: Exit the script
exit
