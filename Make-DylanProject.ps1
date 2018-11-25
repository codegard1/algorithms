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
  $ExecutableLocation = "C:\Users\n5014\Documents\DylanRoot\bin\$($ExecutableName)"
)

# Invoke Build Tool
Write-Host "About to build project $($ProjectName) from $($LidFileName)" -ForegroundColor Magenta
Start-Sleep -Seconds 1
Invoke-Expression -Command "dylan-compiler-with-tools.exe /build .\$($LidFileName)"

# Invoke the Executable
If($true -eq (Test-Path -Path $ExecutableLocation)){
  Write-Host "About to run $($ExecutableName) from $($ExecutableLocation)" -ForegroundColor Magenta
  Start-Sleep -Seconds 1
  Invoke-Expression $ExecutableLocation
}