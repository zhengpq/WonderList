#转换js
babel --presets react,es2015 js/source -d js/build
#打包js
browserify js/build/app.js -o bundle.js
#打包组件发现工具
browserify js/build/discovery.js -o bundle_discovery.js

#打包css
cat css/*/* css/*.css | sed 's/..\/..\/images/images/g' >bundle.css
#完成
date; echo