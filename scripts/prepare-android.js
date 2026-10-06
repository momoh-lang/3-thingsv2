const fs = require('fs');
const path = require('path');

const appId = 'ca-app-pub-3449409716609317~3082482923';
const manifestPath = path.join('android','app','src','main','AndroidManifest.xml');

if (!fs.existsSync(manifestPath)) {
  throw new Error('AndroidManifest.xml not found');
}

let manifest = fs.readFileSync(manifestPath, 'utf8');

const meta = `    <meta-data android:name="com.google.android.gms.ads.APPLICATION_ID" android:value="${appId}"/>`;

if (!manifest.includes('com.google.android.gms.ads.APPLICATION_ID')) {
  manifest = manifest.replace(
    /<application([^>]*)>/,
    (match, attrs) => `<application${attrs}>\n${meta}`
  );
  fs.writeFileSync(manifestPath, manifest);
}

console.log('Android AdMob configuration prepared.');
