# Convert HTML diagrams to PNG images using Chrome headless mode
# Run this script from PowerShell

$sourceDir = "c:\Users\byamb\projects\byambaa1982.github.io\images\blog\multi-agent-gcp"
$chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"

# Check if Chrome exists
if (-not (Test-Path $chromePath)) {
    $chromePath = "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
}

if (-not (Test-Path $chromePath)) {
    Write-Host "Chrome not found. Please install Google Chrome or update the path." -ForegroundColor Red
    exit
}

# HTML files to convert
$htmlFiles = @(
    @{Name="hierarchical-diagram"; Width=900; Height=700}
    @{Name="peer-to-peer-diagram"; Width=900; Height=700}
    @{Name="pipeline-diagram"; Width=1000; Height=800}
    @{Name="production-architecture"; Width=1200; Height=1000}
)

Write-Host "Converting HTML diagrams to PNG images..." -ForegroundColor Green

foreach ($file in $htmlFiles) {
    $htmlPath = Join-Path $sourceDir "$($file.Name).html"
    $outputPath = Join-Path $sourceDir "$($file.Name).png"
    
    if (Test-Path $htmlPath) {
        Write-Host "Converting $($file.Name).html..." -ForegroundColor Yellow
        
        # Use Chrome headless to capture screenshot
        & $chromePath --headless --screenshot=$outputPath --window-size=$($file.Width),$($file.Height) --default-background-color=0 "file:///$htmlPath"
        
        Start-Sleep -Seconds 2
        
        if (Test-Path $outputPath) {
            Write-Host "✓ Created $($file.Name).png" -ForegroundColor Green
        } else {
            Write-Host "✗ Failed to create $($file.Name).png" -ForegroundColor Red
        }
    } else {
        Write-Host "✗ File not found: $htmlPath" -ForegroundColor Red
    }
}

Write-Host "`nConversion complete!" -ForegroundColor Green
Write-Host "Images saved to: $sourceDir" -ForegroundColor Cyan
