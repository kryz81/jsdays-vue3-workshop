#!/bin/bash
LOCATION=$PWD

declare -a examples=("app-with-ts-and-sass" "component-communication" "component-lifecycle" "composition-api" "dynamic-data" "fetch-data-and-component-lifecycle" "forms" "handling-events" "provide-inject-pattern" "refactoring-to-composition-api" "routing" "slots" "template-directives" "vue-component" "vuex")
declare -a labs=("0-create-app-with-vite" "1-create-vue-component" "2-dynamic-data-events-template-syntax" "3-forms" "4-component-communication" "5-fetch-data-and-component-lifecycle" "6-composition-api")

#for i in "${labs[@]}"
#do
#   SOLUTION="$LOCATION/labs/$i/solution"
#   TEMPLATE="$LOCATION/labs/$i/template"
#   cd $SOLUTION
#   npm install
#   cd $TEMPLATE
#   npm install
#done

for i in "${examples[@]}"
do
   SOLUTION="$LOCATION/examples/$i/solution"
   TEMPLATE="$LOCATION/examples/$i/template"
   cd $SOLUTION
   npm install
   cd $TEMPLATE
   npm install
done






