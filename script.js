const languageButtons = document.querySelectorAll('.language-button');
const translations = {
  en: {
    heroEyebrow: '', heroTitle: 'Your experience<br>matters here.',
    heroIntro: 'Thank you for choosing us. A few words from you help future guests and customers find a place they can trust.',
    reviewButton: 'Leave a Google review', trustedTitle: 'Trusted by our guests', trustedCopy: 'Every honest note makes a difference.',
    imageCaption: 'YOUR EXPERIENCE / OUR STORY', stamp: 'GOOD<br>MEMORIES<br><span>✦</span>', stepsEyebrow: '',
    stepsTitle: 'Make someone’s<br><em>next visit easier.</em>', stepOneTitle: 'Scan or tap',
    stepOneCopy: 'Use the QR code in the photo or tap the button above to open Google Reviews.', stepTwoTitle: 'Tell it like it was',
    stepTwoCopy: 'Share the detail that stood out, from the welcome to the little things.', stepThreeTitle: 'Help us grow',
    stepThreeCopy: 'Your words guide our team and help the next guest choose with confidence.', footerThanks: 'Thank you for being part of our story.', footerArabic: 'Thank you for your review.'
  },
  ar: {
    heroEyebrow: '', heroTitle: 'تجربتكم<br>تهمنا كثيراً.',
    heroIntro: 'شكراً لاختياركم لنا. كلماتكم تساعد الضيوف والعملاء القادمين على اختيار مكان يثقون به.',
    reviewButton: 'اتركوا تقييماً على جوجل', trustedTitle: 'محل ثقة ضيوفنا', trustedCopy: 'كل كلمة صادقة منكم تصنع فرقاً.',
    imageCaption: 'تجربتكم / قصتنا', stamp: 'ذكريات<br>جميلة<br><span>✦</span>', stepsEyebrow: '',
    stepsTitle: 'ساعدوا ضيفاً<br><em>في زيارته القادمة.</em>', stepOneTitle: 'امسحوا أو اضغطوا',
    stepOneCopy: 'استخدموا رمز QR في الصورة أو اضغطوا الزر أعلاه لفتح تقييمات جوجل.', stepTwoTitle: 'شاركونا تجربتكم',
    stepTwoCopy: 'اكتبوا عن التفاصيل التي لفتت انتباهكم، من الترحيب إلى اللمسات الصغيرة.', stepThreeTitle: 'ساعدونا على التطور',
    stepThreeCopy: 'كلماتكم توجه فريقنا وتساعد الضيف القادم على الاختيار بثقة.', footerThanks: 'شكراً لكونكم جزءاً من قصتنا.', footerArabic: 'شكراً لتقييمكم.'
  }
};

function setLanguage(language) {
  const content = translations[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = content[element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = content[element.dataset.i18nHtml];
  });
  languageButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.language === language);
  });
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});

setLanguage(document.documentElement.lang === 'ar' ? 'ar' : 'en');
