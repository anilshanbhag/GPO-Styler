#!/bin/bash

java -jar ~/closure-compiler/compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --js src/js/template.js src/js/gpostyler.js --js_output_file dist/injector.js
