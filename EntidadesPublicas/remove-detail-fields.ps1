$filePath = "c:\Users\Lenovo\Documents\PROYECTOS\frontend\src\config\surveyConfig.js"
$content = Get-Content -Path $filePath -Raw

# Expresión regular para encontrar y eliminar las líneas de detalle
$pattern = '\s*\{ "type": "text", "name": "[^"]+_detail"[^}]*\},\s*'
$newContent = [regex]::Replace($content, $pattern, [String]::Empty)

# Guardar el contenido modificado
$newContent | Set-Content -Path $filePath -Encoding UTF8

Write-Host "Se han eliminado todos los campos de detalle del formulario."
