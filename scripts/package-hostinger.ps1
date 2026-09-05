$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem
$projectRoot = Split-Path -Parent $PSScriptRoot
$exportRoot = Join-Path $projectRoot 'dist/client'
$outputRoot = Join-Path $projectRoot 'outputs/hostinger'
if (!(Test-Path -LiteralPath (Join-Path $exportRoot 'index.html'))) { throw 'Run npm run build first.' }
New-Item -ItemType Directory -Path $outputRoot -Force | Out-Null
function Write-Zip($destination, $entries) {
  $zip = [System.IO.Compression.ZipFile]::Open($destination, [System.IO.Compression.ZipArchiveMode]::Create)
  try { foreach ($entry in $entries) { [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $entry.Path, $entry.Name, [System.IO.Compression.CompressionLevel]::Optimal) | Out-Null } }
  finally { $zip.Dispose() }
}
# Use fresh names on repeat runs, preserving earlier deliverables.
$suffix = ''
if (Test-Path -LiteralPath (Join-Path $outputRoot 'shipuntildead-hostinger-upload.zip')) { $suffix = '-' + (Get-Date -Format 'yyyyMMdd-HHmmss') }
$uploadEntries = Get-ChildItem -LiteralPath $exportRoot -Recurse -File -Force | Where-Object { $_.FullName -notmatch '[\\/]\.vite[\\/]' } | ForEach-Object { @{Path=$_.FullName;Name=$_.FullName.Substring($exportRoot.Length+1).Replace('\','/')} }
$uploadZip = Join-Path $outputRoot "shipuntildead-hostinger-upload$suffix.zip"
Write-Zip $uploadZip $uploadEntries
$sourceEntries = @()
foreach ($folder in @('app','components','hooks','lib','public','scripts','.github')) {
  $sourceEntries += Get-ChildItem -LiteralPath (Join-Path $projectRoot $folder) -Recurse -File -Force | ForEach-Object { @{Path=$_.FullName;Name=$_.FullName.Substring($projectRoot.Length+1).Replace('\','/')} }
}
foreach ($file in @('package.json','package-lock.json','next.config.ts','vite.config.ts','tsconfig.json','components.json','.gitignore','.oxfmtrc.json','.oxlintrc.json','README-HOSTINGER.md','README.md')) { $sourceEntries += @{Path=(Join-Path $projectRoot $file);Name=$file} }
$sourceZip = Join-Path $outputRoot "shipuntildead-source$suffix.zip"
Write-Zip $sourceZip $sourceEntries
Copy-Item -LiteralPath (Join-Path $projectRoot 'README-HOSTINGER.md') -Destination (Join-Path $outputRoot 'README-HOSTINGER.md') -Force
Write-Output $uploadZip
Write-Output $sourceZip

