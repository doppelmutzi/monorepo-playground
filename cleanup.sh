find . -type f -name 'yarn.lock' -exec rm {} +
find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
