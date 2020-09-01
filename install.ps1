$location = Get-Location
$examples = "app-with-ts-and-sass", "component-communication", "component-lifecycle", "composition-api", "dynamic-data", "fetch-data-and-component-lifecycle", "forms", "handling-events", "provide-inject-pattern", "refactoring-to-composition-api", "routing", "slots", "template-directives", "vue-component", "vuex"
$labs = "0-create-app-with-vite", "1-create-vue-component", "2-dynamic-data-events-template-syntax", "3-forms", "4-component-communication", "5-fetch-data-and-component-lifecycle", "6-composition-api"

for ($i=0; $i -lt $examples.length; $i++){
    $path = $location.ToString() + "\examples\" + $examples[$i]
    $solution = $path + "\solution\"
    $template = $path + "\template\"
    Write-Host $solution
    Push-Location $solution
    npm install
    Push-Location $template
    npm install
}

for ($i=0; $i -lt $labs.length; $i++){
    $path = $location.ToString() + "\labs\" + $labs[$i]
    $solution = $path + "\solution\"
    $template = $path + "\template\"
    Write-Host $solution
    Push-Location $solution
    npm install
    Push-Location $template
    npm install
}

Set-Location -Path $location


