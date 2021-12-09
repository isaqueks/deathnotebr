ts-node ssr/index.tsx ./build/index.html
ts-node ssr/watch.tsx ./build/watch.html
rm -rf ./build/watch.html
rm -rf ./postbuild/watch
cp -r ./build/* ./postbuild/