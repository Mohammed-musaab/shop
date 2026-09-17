const languageButtons = document.querySelectorAll('.language-button');
const translations = {
  en: {
    heroEyebrow: 'Dates, spices & more', heroTitle: 'Your experience<br>matters here.',
    heroIntro: 'Thank you for choosing us. A few words from you help future guests and customers find a place they can trust.',
    reviewButton: 'Leave a Google review', trustedTitle: 'Trusted by our guests', trustedCopy: 'Every honest note makes a difference.',
    imageCaption: 'YOUR EXPERIENCE / OUR STORY', morePictures: 'See more pictures — click here', stamp: 'GOOD<br>MEMORIES<br><span>✦</span>', stepsEyebrow: '',
    stepsTitle: 'Make someone’s<br><em>next visit easier.</em>', stepOneTitle: 'Scan or tap',
    stepOneCopy: 'Use the QR code in the photo or tap the button above to open Google Reviews.', stepTwoTitle: 'Tell it like it was',
    stepTwoCopy: 'Share the detail that stood out, from the welcome to the little things.', stepThreeTitle: 'Help us grow',
    stepThreeCopy: 'Your words guide our team and help the next guest choose with confidence.', footerThanks: 'Thank you for being part of our story.', footerArabic: 'Thank you for your review.',
    snapshotEyebrow: 'Inside the shop', snapshotTitle: 'A trusted stop for<br><em>good things.</em>', snapshotIntro: 'Dates, spices, nuts and chocolates, thoughtfully arranged in the heart of Al Khobar.',
    ratingCopy: 'Based on 31 Google reviews', productsTitle: 'What you’ll find', productsCopy: 'Premium dates, aromatic spices, fresh nuts and a wide variety of delicious chocolates.',
    tagDates: 'Dates', tagSpices: 'Spices', tagNuts: 'Nuts', tagChocolates: 'Chocolates', visitTitle: 'Plan your visit',
    address: 'King Khaled Street, Al Khobar Al Shamalia, Al Khobar 34427, Saudi Arabia', hours: 'Open today · Closes at 12 am',
    reviewHighlight: 'A clean, well-organized store with colorful displays that make everything look fresh and inviting.', reviewSource: 'A recent Google review'
  },
  ar: {
    heroEyebrow: 'تمور وتوابل وأكثر', heroTitle: 'تجربتكم<br>تهمنا كثيراً.',
    heroIntro: 'شكراً لاختياركم لنا. كلماتكم تساعد الضيوف والعملاء القادمين على اختيار مكان يثقون به.',
    reviewButton: 'اتركوا تقييماً على جوجل', trustedTitle: 'محل ثقة ضيوفنا', trustedCopy: 'كل كلمة صادقة منكم تصنع فرقاً.',
    imageCaption: 'تجربتكم / قصتنا', morePictures: 'شاهدوا المزيد من الصور — اضغطوا هنا', stamp: 'ذكريات<br>جميلة<br><span>✦</span>', stepsEyebrow: '',
    stepsTitle: 'ساعدوا ضيفاً<br><em>في زيارته القادمة.</em>', stepOneTitle: 'امسحوا أو اضغطوا',
    stepOneCopy: 'استخدموا رمز QR في الصورة أو اضغطوا الزر أعلاه لفتح تقييمات جوجل.', stepTwoTitle: 'شاركونا تجربتكم',
    stepTwoCopy: 'اكتبوا عن التفاصيل التي لفتت انتباهكم، من الترحيب إلى اللمسات الصغيرة.', stepThreeTitle: 'ساعدونا على التطور',
    stepThreeCopy: 'كلماتكم توجه فريقنا وتساعد الضيف القادم على الاختيار بثقة.', footerThanks: 'شكراً لكونكم جزءاً من قصتنا.', footerArabic: 'شكراً لتقييمكم.',
    snapshotEyebrow: 'من داخل المتجر', snapshotTitle: 'وجهة موثوقة<br><em>للأشياء الجميلة.</em>', snapshotIntro: 'تمور وتوابل ومكسرات وشوكولاتة، مرتبة بعناية في قلب الخبر.',
    ratingCopy: 'بناءً على 31 تقييماً في جوجل', productsTitle: 'ماذا ستجدون لدينا', productsCopy: 'تمور فاخرة، توابل عطرية، مكسرات طازجة وتشكيلة واسعة من الشوكولاتة اللذيذة.',
    tagDates: 'تمور', tagSpices: 'توابل', tagNuts: 'مكسرات', tagChocolates: 'شوكولاتة', visitTitle: 'خططوا لزيارتكم',
    address: 'شارع الملك خالد، الخبر الشمالية، الخبر 34427، المملكة العربية السعودية', hours: 'مفتوح اليوم · يغلق الساعة 12 صباحاً',
    reviewHighlight: 'متجر نظيف ومنظم بعناية، مع عروض ملونة تجعل كل شيء يبدو طازجاً وجذاباً.', reviewSource: 'من أحدث تقييمات جوجل'
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
