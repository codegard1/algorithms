<#
DESCRIPTION: build and run a dylan project. 
To use: invoke this script from within the 
Dylan project folder, passing in the name 
of the project
e.g. Make-DylanProject.ps1 -project foobar
#>

# Parameter help description
Param(
  [Parameter(Mandatory = $true)]
  [Alias("project")] 
  [String]
  $ProjectName,
  [Parameter(Mandatory = $false)]
  [Alias("exe")]
  [String]
  $ExecutableName = "$($ProjectName).exe",
  [Parameter(Mandatory = $false)]
  [Alias("lid")]
  [String]
  $LidFileName = "$($ProjectName).lid",
  [Parameter(Mandatory = $false)]
  [String]
  $ExecutableLocation = "$($ENV:OPEN_DYLAN_USER_ROOT)\bin\$($ExecutableName)"
)

# Invoke Build Tool
Write-Host "Build project $($ProjectName) from $($LidFileName)`n..." -ForegroundColor Yellow
Start-Sleep -Seconds 1
Invoke-Expression -Command "dylan-compiler-with-tools.exe /build .\$($LidFileName)"

# Invoke the Executable
If($true -eq (Test-Path -Path $ExecutableLocation)){
  Write-Host "`nRun $($ExecutableName) from $($ExecutableLocation)" -ForegroundColor Yellow
  Write-Host "..."
  Start-Sleep -Seconds 1
  Write-Host "GO`n" -ForegroundColor Yellow
  Invoke-Expression $ExecutableLocation
} Else {
  Write-Host "Error: Executable location $($ExecutableLocation) did not pass muster." -ForegroundColor Red
  Write-Host "`t Is OPEN_DYLAN_USER_ROOT defined? `t ($($ENV:OPEN_DYLAN_USER_ROOT))" -ForegroundColor Yellow
}