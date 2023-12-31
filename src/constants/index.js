import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  ggm,
  freelancer,
  coinfluencer,
  fixhub,
  spotify,
  car,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Hakkımda",
  },
  {
    id: "work",
    title: "Yaptığım İşler",
  },
  {
    id: "contact",
    title: "Bana Ulaş",
  },
];

const services = [
  {
    title: "Web Geliştiricisi",
    icon: web,
  },
  {
    title: "React Geliştiricisi",
    icon: mobile,
  },
  {
    title: "Python Geliştiricisi",
    icon: backend,
  },
  {
    title: "İçrek Üreticsi",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Geliştiricisi",
    company_name: "Co-Influencer",
    icon: coinfluencer,
    iconBg: "#383E56",
    date: "Haziran 2020 - Temmuz 2021",
    points: [
      "React.js ve diğer ilgili teknolojileri kullanarak web uygulamaları geliştirmek ve sürdürmek.",
      "Tasarımcılar, ürün yöneticileri ve diğer geliştiriciler gibi çeşitli ekiplerle işbirliği yaparak yüksek kaliteli ürünler oluşturmak.",
      "Duyarlı tasarımı uygulamak ve tarayıcılar arası uyumluluğu sağlamak.",
      "Kod incelemelerine katılmak ve diğer geliştiricilere yapıcı geri bildirimler sağlamak.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "Temmuz 2021 - Şubat 2022",
    points: [
      "React, MongoDB ve Node.js ile web uygulamalarının geliştirme ve bakımını gerçekleştirdim.",
      "Bağımsız çalıştığım için müşterilerle doğrudan iletişim kurarak ihtiyaçlarını anladım ve projeleri onlara özel olarak tasarladım.",
      "Tasarımcılar, ürün yöneticileri ve diğer geliştiricilerle işbirliği yaparak projelerin başarılı bir şekilde tamamlanmasını sağladım.",
      "Responsive tasarım prensiplerine uygun olarak web uygulamalarını geliştirip, tarayıcılar arası uyumluluğu sağladım.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Ggm Gastro",
    icon: ggm,
    iconBg: "#383E56",
    date: "Şubat 2022 - Halen Çalışıyorum",
    points: [
      "GGM Gastro'da ön uç geliştirici olarak çalıştım ve şirketin web sitesinin geliştirme ve bakımından sorumluydum",
      "Kullanıcı deneyimini iyileştirmek ve daha fazla ziyaretçi çekmek amacıyla yeni bir web sitesi tasarladım ve uyguladım.",
      "HTML, CSS, JavaScript ve diğer ön uç teknolojilerini kullanarak kullanıcı dostu ve görsel açıdan çekici web siteleri oluşturdum.",
      "Müşteri geri bildirimlerine dayanarak web sitesinin performansını optimize ettim ve sürekli geliştirmeler yaptım.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Ekip, profesyonel ve hızlı çözümleriyle etkileyiciydi. Gereksinimlerimizi anladılar ve bizi şaşırtacak bir ürün ortaya koydular. Gelecekteki projelerde yeniden çalışmayı düşünüyoruz.",
    name: "Ilhan Aslan",
  },
  {
    testimonial:
      "Ekip, bağlılık ve teknik becerileriyle etkileyiciydi. İhtiyaçlarımızı dikkatlice dinlediler ve mükemmel bir çözüm sunarak beklentilerimizi aştılar. İletişimleri mükemmeldi ve zamanında tamamladılar.",
    name: "Ceren Dökemener",
  },
  {
    testimonial:
      "Özverili ve profesyonel çalışma. Yaratıcılıklarını ve teknik uzmanlıklarını gösterdiler. Her adımda iletişimde oldular ve sonuçta harika bir ürün elde ettik. Güvenle tavsiye ediyoruz.",
    name: "Hüseyin Kazanç",
  },
];

const projects = [
  {
    name: "Teknik Servis",
    description:
      "Telefon teknik servisi için bir web tabanlı platform geliştirdim. Kullanıcılar, telefon markalarını seçerek, ardından model ve arıza bilgilerini seçerek taleplerini iletebiliyorlar. Bu talepler, dükkan sahibine e-posta olarak iletiliyor. Ayrıca, platformda bir blog bölümü bulunuyor ve admin bu bölümde içerik yayınlayabiliyor. Bu şekilde, kullanıcılar telefon tamiri için kolay bir şekilde taleplerini iletebiliyor ve dükkan sahibi de işlerini daha verimli bir şekilde yönetebiliyor.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: fixhub,
  },
  {
    name: "Spotify Clone",
    description:
      "Çeşitli sağlayıcılardan müzik akışı yapma imkanı sunan bir web tabanlı Spotify klonu geliştirdim. Kullanıcılar, arama yapabilir, şarkıları çalabilir ve çalma listeleri oluşturabilirler. Ayrıca, favori şarkılarını kaydedebilir ve arkadaşlarıyla paylaşabilirler. Admin kullanıcıları da platform üzerinde yönetebilir ve içerik ekleyebilir. Bu şekilde, kullanıcılar müzik dinleme deneyimlerini kolayca yönetebilirken, müzik sağlayıcıları da geniş bir kitleye ulaşma imkanı elde edebilir.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: spotify,
  },
  {
    name: "Araç Sergisi",
    description:
      "Çeşitli otomobil satıcılarının araçlarını sergileyebileceği bir web tabanlı araç vitrini (car showcase) platformu geliştirdim. Kullanıcılar, araç markalarını seçerek, ardından model, fiyat ve diğer detayları filtreleyerek araçları keşfedebilirler. Ayrıca, kullanıcılar iletişim bilgilerini paylaşarak satıcılarla doğrudan iletişime geçebilirler. Admin paneli sayesinde satıcılar, araçları ekleyebilir, düzenleyebilir ve kaldırabilirler. Bu platform sayesinde, otomobil satıcıları ürünlerini geniş bir kitleye sergilerken, kullanıcılar da kolayca istedikleri aracı bulup iletişime geçebilirler.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: car,
  },
];

export { services, technologies, experiences, testimonials, projects };
