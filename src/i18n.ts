import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Navigation
          "about_us": "About Us",
          "business_setup": "Business Setup",
          "our_services": "Our Services",
          "blog": "Blog",
          "careers": "Careers",
          "contact_us": "Contact Us",
          
          // Business Setup Options
          "free_zone": "Free Zone",
          "main_land": "Main Land",
          
          // Service Categories
          "accounting_services": "Accounting Services",
          "tax_compliance": "Tax Compliance",
          "visa_other_services": "Visa & Other Services",
          
          // Accounting Services
          "accounting_bookkeeping": "Accounting and Bookkeeping",
          "payroll_services": "Payroll Services",
          "financial_reporting": "Financial Reporting",
          
          // Tax Services
          "vat_compliance": "VAT Compliance",
          "cit_compliance": "CIT Compliance",
          
          // Visa Services
          "golden_visa": "Golden Visa",
          "pro_services": "PRO Services",
          "business_advisory": "Business Advisory",

          // Hero Section
          "hero_title": "Your Trusted Business Partner in UAE",
          "hero_subtitle": "Expert guidance for business setup, accounting, and tax compliance",
          "get_started": "Get Started",
          "learn_more": "Learn More",

          // About Section
          "about_title": "Who We Are",
          "about_description": "RDV Consultants is a leading business consultancy firm in UAE, providing comprehensive solutions for business setup and compliance.",
          
          // Services Section
          "services_title": "Our Services",
          "services_subtitle": "Comprehensive Business Solutions",

          // Contact Form
          "contact_title": "Get in Touch",
          "contact_name": "Your Name",
          "contact_email": "Email Address",
          "contact_phone": "Phone Number",
          "contact_message": "Your Message",
          "contact_submit": "Send Message",

          // Careers Page
          "careers_title": "Join Our Team",
          "careers_subtitle": "Current Openings",
          "tax_manager_title": "Tax Manager",
          "tax_manager_description": "We're seeking an experienced Tax Manager to lead our tax advisory and compliance services. The ideal candidate will have extensive knowledge of UAE tax regulations including VAT and Corporate Tax.",
          "apply_now": "Apply Now",
          "send_cv": "Please send your CV to",

          // Footer
          "footer_address": "Office Address",
          "footer_contact": "Contact Information",
          "footer_social": "Follow Us",
          "footer_rights": "All Rights Reserved",
          "privacy_policy": "Privacy Policy",
          "terms_conditions": "Terms & Conditions"
        }
      },
      ar: {
        translation: {
          "about_us": "معلومات عنا",
          "business_setup": "تأسيس الأعمال",
          "our_services": "خدماتنا",
          "blog": "المدونة",
          "careers": "الوظائف",
          "contact_us": "اتصل بنا",
          
          "free_zone": "المنطقة الحرة",
          "main_land": "البر الرئيسي",
          
          "accounting_services": "الخدمات المحاسبية",
          "tax_compliance": "الامتثال الضريبي",
          "visa_other_services": "التأشيرات والخدمات الأخرى",
          
          "accounting_bookkeeping": "المحاسبة ومسك الدفاتر",
          "payroll_services": "خدمات الرواتب",
          "financial_reporting": "التقارير المالية",
          
          "vat_compliance": "الامتثال لضريبة القيمة المضافة",
          "cit_compliance": "الامتثال لضريبة الشركات",
          
          "golden_visa": "التأشيرة الذهبية",
          "pro_services": "خدمات العلاقات العامة",
          "business_advisory": "استشارات الأعمال",

          "hero_title": "شريكك الموثوق به في الأعمال في الإمارات",
          "hero_subtitle": "إرشادات خبيرة لتأسيس الأعمال والمحاسبة والامتثال الضريبي",
          "get_started": "ابدأ الآن",
          "learn_more": "اعرف المزيد",
          
          "about_title": "من نحن",
          "about_description": "RDV Consultants هي شركة تأسيس الأعمال الرائدة في الإمارات، وتوفر حلولاً شاملة لتأسيس الأعمال والامتثال.",
          
          "services_title": "خدماتنا",
          "services_subtitle": "حلول عملية للأعمال",

          "contact_title": "تواصل معنا",
          "contact_name": "الاسم",
          "contact_email": "عنوان البريد الإلكتروني",
          "contact_phone": "رقم الهاتف",
          "contact_message": "رسالتك",
          "contact_submit": "إرسال الرسالة",

          "careers_title": "انضم إلى فريقنا",
          "careers_subtitle": "الوظائف الشاغرة",
          "tax_manager_title": "مدير الضرائب",
          "tax_manager_description": "نبحث عن مدير ضرائب ذو خبرة لقيادة خدمات الاستشارات الضريبية والامتثال. يجب أن يكون لدى المرشح المثالي معرفة واسعة بالأنظمة الضريبية في الإمارات بما في ذلك ضريبة القيمة المضافة وضريبة الشركات.",
          "apply_now": "قدم الآن",
          "send_cv": "يرجى إرسال سيرتك الذاتية إلى"
        }
      },
      id: {
        translation: {
          "about_us": "Tentang Kami",
          "business_setup": "Pendirian Bisnis",
          "our_services": "Layanan Kami",
          "blog": "Blog",
          "careers": "Karir",
          "contact_us": "Hubungi Kami",
          
          "free_zone": "Zona Bebas",
          "main_land": "Daratan Utama",
          
          "accounting_services": "Layanan Akuntansi",
          "tax_compliance": "Kepatuhan Pajak",
          "visa_other_services": "Visa & Layanan Lainnya",
          
          "accounting_bookkeeping": "Akuntansi dan Pembukuan",
          "payroll_services": "Layanan Penggajian",
          "financial_reporting": "Pelaporan Keuangan",
          
          "vat_compliance": "Kepatuhan PPN",
          "cit_compliance": "Kepatuhan Pajak Perusahaan",
          
          "golden_visa": "Visa Emas",
          "pro_services": "Layanan PRO",
          "business_advisory": "Konsultasi Bisnis",

          "hero_title": "Mitra Bisnis Terpercaya Anda di UAE",
          "hero_subtitle": "Panduan ahli untuk pendirian bisnis, akuntansi, dan kepatuhan pajak",
          "get_started": "Mulai",
          "learn_more": "Pelajari Lebih Lanjut",
          
          "about_title": "Tentang Kami",
          "about_description": "RDV Consultants adalah perusahaan konsultasi bisnis terkemuka di UAE, menyediakan solusi komprehensif untuk pengaturan bisnis dan pengaturan.",
          
          "services_title": "Layanan Kami",
          "services_subtitle": "Solusi Bisnis Komprehensif",

          "contact_title": "Hubungi Kami",
          "contact_name": "Nama Anda",
          "contact_email": "Alamat Email",
          "contact_phone": "Nomor Telepon",
          "contact_message": "Pesan Anda",
          "contact_submit": "Kirim Pesan",

          "careers_title": "Bergabung dengan Tim Kami",
          "careers_subtitle": "Lowongan Saat Ini",
          "tax_manager_title": "Manajer Pajak",
          "tax_manager_description": "Kami mencari Manajer Pajak berpengalaman untuk memimpin layanan konsultasi dan kepatuhan pajak kami. Kandidat ideal harus memiliki pengetahuan luas tentang peraturan pajak UAE termasuk PPN dan Pajak Perusahaan.",
          "apply_now": "Lamar Sekarang",
          "send_cv": "Silakan kirim CV Anda ke"
        }
      },
      th: {
        translation: {
          "about_us": "เกี่ยวกับเรา",
          "business_setup": "การจัดตั้งธุรกิจ",
          "our_services": "บริการของเรา",
          "blog": "บล็อก",
          "careers": "ตำแหน่งงาน",
          "contact_us": "ติดต่อเรา",
          
          "free_zone": "เขตปลอดอากร",
          "main_land": "แผ่นดินใหญ่",
          
          "accounting_services": "บริการบัญชี",
          "tax_compliance": "การปฏิบัติตามภาษี",
          "visa_other_services": "วีซ่าและบริการอื่นๆ",
          
          "accounting_bookkeeping": "การบัญชีและการทำบัญชี",
          "payroll_services": "บริการเงินเดือน",
          "financial_reporting": "การรายงานทางการเงิน",
          
          "vat_compliance": "การปฏิบัติตาม VAT",
          "cit_compliance": "การปฏิบัติตามภาษีนิติบุคคล",
          
          "golden_visa": "วีซ่าทอง",
          "pro_services": "บริการ PRO",
          "business_advisory": "ที่ปรึกษาธุรกิจ",

          "hero_title": "พันธมิตรทางธุรกิจที่ไว้วางใจได้ของคุณใน UAE",
          "hero_subtitle": "คำแนะนำจากผู้เชี่ยวชาญสำหรับการจัดตั้งธุรกิจ การบัญชี และการปฏิบัติตามกฎหมายภาษี",
          "get_started": "เริ่มต้น",
          "learn_more": "เรียนรู้เพิ่มเติม",
          
          "about_title": "เกี่ยวกับเรา",
          "about_description": "RDV Consultants เป็นบริษัทคำปรึกษาธุรกิจที่นำศักดิ์ศรีในอู่อียิปูน ซึ่งให้บริการคำปรึกษาที่ครอบคลุมสำหรับการจัดตั้งธุรกิจและการปฏิบัติตามกฎระเบียบภาษี",
          
          "services_title": "บริการของเรา",
          "services_subtitle": "บริการธุรกิจครอบคลุม",

          "contact_title": "ติดต่อเรา",
          "contact_name": "ชื่อของคุณ",
          "contact_email": "อีเมล",
          "contact_phone": "เบอร์โทรศัพท์",
          "contact_message": "ข้อความของคุณ",
          "contact_submit": "ส่งข้อความ",

          "careers_title": "ร่วมงานกับเรา",
          "careers_subtitle": "ตำแหน่งงานที่เปิดรับ",
          "tax_manager_title": "ผู้จัดการภาษี",
          "tax_manager_description": "เรากำลังมองหาผู้จัดการภาษีที่มีประสบการณ์เพื่อนำทีมให้คำปรึกษาด้านภาษีและการปฏิบัติตามกฎระเบียบ ผู้สมัครที่เหมาะสมต้องมีความรู้กว้างขวางเกี่ยวกับกฎระเบียบภาษีของ UAE รวมถึง VAT และภาษีนิติบุคคล",
          "apply_now": "สมัครตอนนี้",
          "send_cv": "กรุณาส่ง CV ของคุณไปที่"
        }
      }
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 