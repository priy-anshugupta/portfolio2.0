# Portfolio dev server — run: .\start.ps1
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "Stopping old Node processes on ports 3000-3002..." -ForegroundColor Yellow
foreach ($port in 3000, 3001, 3002) {
  $conn = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
  if ($conn) {
    Stop-Process -Id $conn.OwningProcess -Force -ErrorAction SilentlyContinue
  }
}
Start-Sleep -Seconds 2

if (-not (Test-Path "node_modules")) {
  Write-Host "Installing dependencies..." -ForegroundColor Cyan
  npm install
}

if (Test-Path ".next") {
  Write-Host "Clearing .next cache..." -ForegroundColor Yellow
  Remove-Item -Recurse -Force .next
}

Write-Host ""
Write-Host "Starting dev server at http://localhost:3000" -ForegroundColor Green
Write-Host "Keep this window open. Press Ctrl+C to stop." -ForegroundColor Gray
Write-Host ""
npm run dev
