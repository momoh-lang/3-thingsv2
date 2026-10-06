# 3 Things — نسخة AdMob آمنة للاختبار

هذه النسخة مبنية على المشروع الأصلي الذي كان يعمل.

- AdMob مضاف كإضافة اختيارية.
- التطبيق يرسم الواجهة أولاً ثم يحاول تشغيل الإعلان بعد 1.8 ثانية.
- أي خطأ من AdMob يتم تجاهله حتى لا يتسبب في إغلاق التطبيق.
- أثناء الاختبار يتم استخدام Banner Test Ad الرسمي من Google.
- الـ App ID الخاص بـ AdMob يتم وضعه في AndroidManifest أثناء بناء APK.

## البناء من GitHub
ارفع محتويات هذا المجلد إلى Repository، ثم:
Actions → Build APK → Run workflow.

بعد انتهاء البناء:
Artifacts → 3things-apk → app-debug.apk
