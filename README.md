npm install -g angular-cli-ghpages

ng build --configuration production --base-href=/WeddingInvitation/


npx angular-cli-ghpages --dir=dist/invitation

ng deploy --base-href=/WeddingInvitation/



ng build --configuration production --output-path=dist/invitation

npx angular-cli-ghpages --dir=dist/invitation/browser
