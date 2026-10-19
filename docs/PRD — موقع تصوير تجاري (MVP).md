# PRD — موقع تصوير تجاري (MVP)

Oct 19, 2026 · @mofa

## 1. Overview

موقع Portfolio + Lead Generation لمصور أفراح بيتوسع في تصوير المنتجات والبراندات والشركات، بميزانية منخفضة جدًا، والمصور هو اللي هيدير المحتوى بنفسه.

**المشكلة:** أغلب شغل المصور الحالي أفراح، ومفيش مكان يقدّمه بشكل احترافي للشركات. صفحة Instagram لوحدها مش بتبني ثقة كافية عند صاحب براند أو مسؤول تسويق، ومش بتجمع بيانات عميل محتمل.

**الحل:** موقع سريع وبسيط بيعرض الشغل التجاري كمشاريع (Case Studies)، وبيحوّل الزائر لطلب مشروع عن طريق Inquiry Form وWhatsApp.

**مبدأ أساسي:** الموقع ما يدّعيش خبرة تجارية مش موجودة. أي مشروع تجريبي يتعرض بوضوح على إنه Concept / Spec Project.

## 2. Goals, Non-goals & Success Metrics

**Goals**

1. يقدّم المصور كـ Commercial Photographer موثوق للبراندات والشركات.
2. يحوّل الزائر المهتم لـ Lead مؤهل (Inquiry Form أو WhatsApp).
3. المصور يضيف ويعدّل المشاريع بنفسه من غير كود.
4. تكلفة تشغيل شهرية قريبة من صفر (دومين + استضافة اقتصادية بس).

**Non-goals في الـ MVP**

- نظام حجز مواعيد أو دفع أونلاين.
- Client Dashboard أو حسابات للعملاء أو رفع ملفات.
- CRM كامل.
- Blog مستمر.
- Backend أو Database مخصصة (NestJS / PostgreSQL وغيرهم).
- إعلانات مدفوعة قبل ما يبقى فيه Portfolio تجاري مقنع.

**Success Metrics (تتقاس شهريًا)**

| Metric | التعريف | هدف أول 90 يوم |
| --- | --- | --- |
| Qualified Leads | استفسارات من براندات أو شركات مناسبة | يتحدد بعد أول شهر |
| Inquiry Conversion Rate | Leads ÷ زيارات الموقع | Baseline في أول شهر |
| Paid Projects | مشاريع مدفوعة جت من الموقع أو التواصل المباشر | أول مشروع مدفوع |
| Lead Source | مصدر كل Lead (Instagram, WhatsApp, Google, Outreach) | 100% من الـ Leads متتبعة |

أول شهر هدفه بناء Baseline واختبار طرق الوصول، مش الحكم على الـ SEO.

## 3. Target Users

الشريحة الأساسية هي E-commerce & Product Brands، والثانوية Corporate. الموقع ما يقولش إنه بيقدم كل أنواع التصوير لكل الناس.

| Persona | الأولوية | محتاج إيه | بيدخل الموقع منين |
| --- | --- | --- | --- |
| صاحب براند منتجات (ملابس، سكين كير، عطور، إكسسوارات) | أساسية | صور منتجات للمتجر والإعلانات والسوشيال | Instagram، WhatsApp، رسالة Outreach |
| مسؤول تسويق / Marketing Agency | أساسية | مصور ينفذ Brief إعلاني ويشتغل مع فريق التصميم | LinkedIn، رسالة Outreach، Google |
| شركة / Startup | ثانوية | صور الفريق والإدارة والمقر والفعاليات | LinkedIn، Google |
| المصور (Admin) | داخلي | يضيف مشاريع وصور ويعدّل نصوص بسهولة من الموبايل أو الكمبيوتر | لوحة الـ CMS |

أغلب الزيارات متوقعة من الموبايل عبر لينك في Instagram أو WhatsApp، فالتصميم Mobile-first.

## 4. MVP Scope

الـ MVP = 6 أنواع صفحات + Inquiry Form + CMS + SEO/Analytics أساسي. أي حاجة تانية تتأجل لـ Phase 2.

| Feature | الأولوية | في الـ MVP؟ |
| --- | --- | --- |
| Homepage (Positioning + Selected Work + CTA) | P0 | نعم |
| Portfolio بتصنيفات | P0 | نعم |
| Project Detail (Case Study) | P0 | نعم |
| Services pages (Product / Brand / Corporate) | P0 | نعم |
| About | P0 | نعم |
| Contact + Project Inquiry Form | P0 | نعم |
| WhatsApp CTA (زر عائم + رسالة جاهزة) | P0 | نعم |
| CMS يديره المصور | P0 | نعم |
| SEO أساسي + Sitemap + Alt Text | P0 | نعم |
| Analytics + Search Console | P0 | نعم |
| Testimonials حقيقية | P1 | نعم لو متاحة، وإلا السيكشن يختفي |
| Client Logos | P1 | نعم لو فيه إذن، وإلا السيكشن يختفي |
| نسخة عربية | P2 | لا (إنجليزي فقط في البداية) |
| Booking / Payments / Client Dashboard / CRM | — | لا، Phase 2+ |
| Blog | — | لا، Phase 2+ |
| مسار الأفراح | — | خارج الموقع ده؛ لينك خارجي بس لو المصور عايز |

## 5. Sitemap & Page Requirements

كل صفحة لها هدف تجاري واحد، وكل صفحة بتنتهي بـ CTA لبدء مشروع.

**Routes**

- `/` Home
- `/work` Portfolio · `/work/[category]` · `/work/[slug]` Project Detail
- `/services/product-photography` · `/services/brand-photography` · `/services/corporate-photography`
- `/about`
- `/contact`
- `/thank-you` (بعد إرسال الـ Form، لقياس الـ Conversion)

**Home** — بالترتيب:

1. Hero: صورة قوية + عنوان واضح (مثال: Commercial Photography for Brands & Businesses) + سطر وصف + زرين: View Work و Start a Project.
2. Selected Work: 4–6 مشاريع `featured = true` من الـ CMS.
3. Services: 3 كروت، كل كارت يودّي لصفحة الخدمة.
4. Why Work With Me: 3–4 نقاط حقيقية عن طريقة الشغل والتسليم، بدون أرقام أو ادعاءات غير مثبتة.
5. About مختصر + صورة المصور.
6. Final CTA.

**Portfolio (`/work`)**

- Filter بالتصنيف: All / Product / Brand / Corporate (و Food & Beverage لو فيه شغل فعلي).
- Grid من Cover images؛ الضغط يفتح صفحة المشروع.
- يعرض المشاريع `published = true` بس، مرتبة بـ `order` ثم التاريخ.

**Project Detail (`/work/[slug]`)**

- العنوان، التصنيف، اسم البراند (لو مسموح)، وعلامة "Concept Project" لو `isConcept = true`.
- Brief قصير: الهدف، الفكرة، الاستخدام المقترح للصور، دور المصور.
- Gallery من 6–12 صورة مع Lightbox.
- Services المقدمة كـ Tags.
- Inquiry CTA + لينكات لمشروعين تانيين من نفس التصنيف.

**Service page** — بتجاوب على 4 أسئلة:

1. إيه الخدمة؟
2. مين محتاجها؟
3. نماذج شغل (مشاريع من نفس التصنيف تلقائيًا).
4. إزاي تطلبها؟ (خطوات العمل + CTA).

**About** — صورة احترافية، نبذة، طريقة الشغل (Process من 3–4 خطوات)، والتوجه التجاري بصدق.

**Contact** — Inquiry Form، زر WhatsApp، Email احترافي على الدومين، لينكات Instagram و LinkedIn.

**Global** — Header فيه Work / Services / About / Contact وزر Start a Project. Footer فيه وسائل التواصل. زر WhatsApp عائم على الموبايل.

## 6. Functional Requirements

**FR-1 Project Inquiry Form**

| Field | النوع | إجباري؟ |
| --- | --- | --- |
| Full Name | text | نعم |
| Company / Brand | text | نعم |
| Email | email | نعم (أو Phone) |
| Phone / WhatsApp | tel | نعم (أو Email) |
| What do you need? | select: Product / Brand Campaign / Corporate / Other | نعم |
| Estimated Budget | select: ranges + Not sure yet | لا |
| Timeline | select: ASAP / خلال شهر / مرن | لا |
| Project Details | textarea | لا |
| How did you hear about us? | select | لا |

- Validation على الـ Client، ورسائل خطأ واضحة جنب كل Field.
- حماية من Spam: Honeypot field + Rate limit من خدمة الـ Forms.
- بعد الإرسال: Redirect لـ `/thank-you` + إيميل إشعار للمصور بكل البيانات.
- إيميل تأكيد أوتوماتيك للعميل (لو الخدمة بتدعمه في الخطة المجانية).
- نطاقات الميزانية مش ظاهرة لحد ما المصور يحدد تسعيره؛ وقتها تتعدل من الـ CMS أو Config.
- ممنوع عرض أسعار ثابتة على الموقع.

**FR-2 WhatsApp CTA**

- لينك `wa.me/<number>?text=<رسالة جاهزة مُرمّزة>`.
- الرسالة الجاهزة بتختلف حسب الصفحة (مثال في صفحة مشروع: "Hi, I saw the \[Project\] project and I'd like to discuss a shoot").
- كل ضغطة تتسجل كـ Event في الـ Analytics.

**FR-3 CMS (للمصور)**

- Login آمن، من غير ما يحتاج GitHub أو أي أداة تقنية لو أمكن.
- يضيف / يعدّل / يخفي / يحذف مشروع بكل حقوله.
- يرفع صور متعددة مرة واحدة ويرتّبها بالسحب.
- يعلّم المشروع Featured عشان يظهر في الـ Home.
- يعدّل نصوص الـ Home والـ About والخدمات وبيانات التواصل.
- كل الصور اللي بتترفع تتحسن تلقائيًا (Resize + WebP/AVIF) من غير تدخل منه.
- يشتغل كويس من الموبايل.
- دليل استخدام قصير (صفحة أو فيديو 5 دقائق) يتسلم مع الموقع.

**FR-4 Portfolio Filtering** — Filter بالتصنيف من غير Reload للصفحة، والـ URL يتغير (`/work/product`) عشان يتشارك.

**FR-5 Lightbox** — فتح الصورة كاملة، تقليب بالسحب على الموبايل وبالأسهم على الكمبيوتر، وإغلاق بـ Esc.

## 7. Content Model

أربع Collections بس. أي CMS هيتختار لازم يدعم الحقول دي من غير كود مخصص.

**Project**

```ts
type Project = {
  title: string;
  slug: string;              // auto من العنوان
  category: "product" | "brand" | "corporate";
  client?: string;           // يظهر بس لو فيه إذن
  isConcept: boolean;        // يظهر Badge "Concept Project"
  coverImage: Image;
  gallery: Image[];          // 6–12 صورة
  goal: string;
  idea: string;
  usage: string;             // الاستخدام المقترح للصور
  role: string;              // دور المصور
  services: string[];
  featured: boolean;
  published: boolean;
  order?: number;
  date: string;
  seo: { title?: string; description?: string };
};

type Image = { src: string; alt: string };  // alt إجباري
```

**Service** — `title`, `slug`, `intro`, `whoItsFor`, `deliverables[]`, `process[]`, `heroImage`, `seo`. المشاريع المرتبطة بتتجاب تلقائيًا بالـ `category`.

**Testimonial** — `quote`, `name`, `role`, `company`, `projectRef?`, `published`. لازم يكون حقيقي وبموافقة صاحبه.

**Site Settings (Singleton)** — `heroTitle`, `heroSubtitle`, `heroImage`, `aboutText`, `photographerPhoto`, `whatsappNumber`, `email`, `instagram`, `linkedin`, `budgetRanges[]`, `defaultSeo`.

## 8. Non-functional Requirements

**Performance (Mobile على 4G)**

- Lighthouse Mobile: Performance ≥ 90، SEO ≥ 95، Accessibility ≥ 90.
- LCP < 2.5s، CLS < 0.1.
- الصور: WebP/AVIF مع `srcset` بأحجام متعددة، `loading="lazy"` لأي صورة تحت أول شاشة، والـ Hero يتحمّل بأولوية.
- مفيش صورة على الموقع أكبر من 2400px عرض أو \~400KB في أكبر حجم.
- ممنوع رفع ملفات الكاميرا الأصلية مباشرة للموقع.

**SEO**

- `title` و `meta description` فريدين لكل صفحة ومشروع وخدمة.
- كلمات مستهدفة مبدئية: Product Photographer in Cairo، Commercial Photography Egypt (تتأكد قبل الإطلاق إنها مطابقة للخدمات والمناطق الفعلية).
- `sitemap.xml` و `robots.txt` أوتوماتيك.
- Open Graph image لكل صفحة (عشان شكل اللينك على WhatsApp وLinkedIn).
- Alt Text وصفي إجباري لكل صورة، وأسماء ملفات وصفية.
- Schema.org: `LocalBusiness` أو `ProfessionalService` على الـ Home.
- Google Business Profile لو النشاط مؤهل.

**Analytics**

- أداة خفيفة ومجانية (GA4، أو Plausible/Umami لو فيه ميزانية).
- Events: `inquiry_submit`، `whatsapp_click`، `email_click`، `start_project_click`.
- UTM على كل لينك بيتبعت في الـ Outreach وفي Bio الـ Instagram.
- Google Search Console مربوط من يوم الإطلاق.

**Accessibility & UX**

- تباين ألوان مقبول، Focus واضح، والموقع يتصفح بالكيبورد.
- اللغة: إنجليزي في الـ MVP، والـ Structure يسمح بإضافة العربية (RTL) بعدين.

**Design direction** — Clean / Commercial مع لمسات Editorial: خلفيات هادئة، صور كبيرة، Typography بسيط. التصميم يخدم الصور ومايتنافسش معاها.

**Security & Privacy** — HTTPS، مفيش بيانات عملاء متخزنة على الموقع نفسه، وصفحة Privacy قصيرة بتوضح استخدام بيانات الـ Form.

## 9. Tech Stack & Architecture

**القرار المقترح: Option A (WordPress)** لأن المصور هو اللي هيدير المحتوى والميزانية منخفضة جدًا. Option B مناسب لو أنت عايز Codebase مخصص ومستعد تتحمل وقت إعداد الـ CMS.

|  | Option A: WordPress | Option B: Astro + Decap CMS |
| --- | --- | --- |
| سهولة الإدارة للمصور | عالية جدًا، لوحة مألوفة | متوسطة، محتاجة إعداد Login واختبار |
| تكلفة التشغيل | دومين + استضافة Shared اقتصادية | دومين بس (Hosting مجاني على Netlify / Cloudflare Pages) |
| السرعة | كويسة مع Theme خفيف + Caching | ممتازة (Static + Astro Image) |
| وقت التنفيذ | أقل | أكتر |
| الصيانة | تحديثات Plugins وأمان دورية | قليلة جدًا |
| Forms | Plugin مجاني (مثل Fluent Forms / WPForms Lite) | Netlify Forms أو Formspree أو Web3Forms |
| تحسين الصور | Plugin تحويل WebP/AVIF | Astro `<Image />` وقت الـ Build |

**Option A — المكونات**

- Theme خفيف (مثل Astra / Kadence / GeneratePress) + Child theme للتخصيص.
- Custom Post Types: `project`، `service`، `testimonial` + حقول مخصصة (ACF أو Meta Box المجاني).
- Taxonomy: `project_category`.
- Plugins: SEO (Rank Math أو Yoast)، Caching، تحويل الصور لـ WebP، Form، Backup، Security أساسي.
- قاعدة: أقل عدد Plugins ممكن، ومفيش Page Builder تقيل.

**Option B — المكونات**

- Astro (Static output) + Content Collections بالـ Schema اللي في سيكشن 7.
- Decap CMS على `/admin`، مع Backend GitHub وOAuth provider.
- Media في الـ Repo مع Astro Image، أو Cloudinary (Free tier) لو حجم الصور كبر.
- Deploy تلقائي مع كل Commit من الـ CMS.

**مشترك بين الاتنين**

- Domain باسم المصور + Email احترافي على الدومين.
- مفيش Backend مخصص أو Database خاصة بالمشروع.
- Analytics + Search Console.
- لازم تختبر بنفسك قبل التسليم إن المصور يقدر يضيف مشروع كامل من البداية للنهاية من غير مساعدة.

&#91;embedded content: MVP architecture · 5 parts, no custom backend\]

المصور يحدّث المحتوى من الـ CMS بس، والـ Leads بتوصله إما إيميل من خدمة الـ Forms أو محادثة WhatsApp مباشرة.

## 10. Content Dependencies (Launch Blockers)

الموقع ما يتطلقش من غير 3 مشاريع تجارية على الأقل؛ ده أكبر Risk في المشروع، مش الكود.

| المحتوى | المسؤول | المطلوب |
| --- | --- | --- |
| Project 01 — Product | المصور | 3–5 منتجات من نفس الفئة، خلفيات وإضاءة مدروسة، 6–12 صورة نهائية |
| Project 02 — Brand Campaign | المصور | فكرة إعلانية لمنتج واحد: Hero + تفاصيل + صور سوشيال |
| Project 03 — Corporate | المصور | فريق صغير أو صاحب مشروع + مكان العمل |
| Brief لكل مشروع | المصور + أنت | الهدف، الفكرة، الاستخدام، الدور (فقرة قصيرة لكل بند) |
| موافقات الاستخدام | المصور | إذن مكتوب من البراند لعرض الصور والاسم/اللوجو |
| صورة المصور + نبذة | المصور | صورة احترافية + 80–120 كلمة |
| نصوص الخدمات | أنت (Draft) + المصور (مراجعة) | صفحة لكل خدمة بالـ 4 أسئلة |
| هوية بصرية | أنت | اسم، Logo نصي بسيط، ألوان، خطوط |
| بيانات التواصل | المصور | رقم WhatsApp، Email، لينكات السوشيال |

أي مشروع تجريبي يتعلّم `isConcept = true`. ممنوع استخدام صور الأفراح كدليل على خبرة تجارية.

## 11. Delivery Plan

**Milestones (4 أسابيع)**

1. **Week 1 — Foundation:** تحديد الشريحة والخدمات، الاسم والهوية، اختيار الـ Stack، بدء تصوير المشاريع التجريبية، Wireframes للصفحات.
2. **Week 2 — Build:** تنفيذ الصفحات والـ Content Model والـ CMS، الـ Form والـ WhatsApp، رفع المحتوى المتاح، اختبار الموبايل.
3. **Week 3 — Launch:** SEO والـ Analytics والـ Search Console، QA كامل، ربط الدومين، تسليم المصور ودليل الاستخدام، إطلاق.
4. **Week 4 — Outreach & Iterate:** قائمة 30–50 براند، رسايل شخصية، متابعة، وتعديل الموقع حسب الاعتراضات المتكررة.

**Acceptance Criteria**

- [ ] المصور أضاف مشروع كامل (عنوان، صور، Brief، تصنيف) ونشره من غير مساعدة.
- [ ] المشروع الجديد ظهر في `/work` وفي فلتر التصنيف وفي صفحة الخدمة تلقائيًا.
- [ ] تفعيل `featured` بيظهر المشروع في الـ Home.
- [ ] الـ Form بيبعت إيميل للمصور خلال دقيقة ويحوّل لـ `/thank-you`.
- [ ] الـ Form بيرفض إرسال ناقص الحقول الإجبارية ورسالة الخطأ واضحة.
- [ ] زر WhatsApp بيفتح محادثة برسالة جاهزة على Android وiOS.
- [ ] Lighthouse Mobile بيحقق الأرقام في سيكشن 8 على Home وصفحة مشروع.
- [ ] كل صورة ليها Alt Text، وكل صفحة ليها Title وDescription فريدين.
- [ ] Events الـ Analytics بتتسجل (`inquiry_submit`، `whatsapp_click`).
- [ ] الموقع شغال على Chrome وSafari (موبايل وكمبيوتر) من غير Horizontal scroll.

**Launch Checklist**

- [ ] تحديد الجمهور الأساسي والخدمات
- [ ] اختيار اسم الموقع والهوية البصرية
- [ ] تجهيز 3 مشاريع تجارية + موافقات الاستخدام
- [ ] تنفيذ الصفحات الأساسية
- [ ] إعداد CMS وتجربة إضافة مشروع جديد
- [ ] تحسين الصور وسرعة الموبايل
- [ ] إعداد SEO ونموذج التواصل
- [ ] اختبار الروابط والـ Form على الموبايل والكمبيوتر
- [ ] نشر الموقع وربط الدومين
- [ ] إعداد Analytics وSearch Console
- [ ] تجهيز قائمة البراندات المستهدفة
- [ ] بدء التواصل والمتابعة أسبوعيًا

**Open Questions**

- WordPress ولا Astro + Decap؟ (سيكشن 9)
- نطاقات الميزانية في الـ Form، ولا نخفي الحقل لحد ما التسعير يتحدد؟
- هل Food & Beverage خدمة فعلية تتضاف كتصنيف؟
- هل الموقع يربط بشغل الأفراح (لينك خارجي) ولا يفضل منفصل تمامًا؟
- مين بيدفع تجديد الدومين والاستضافة سنويًا؟
