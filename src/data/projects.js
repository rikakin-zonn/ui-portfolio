// ==========================================
//  作品数据 — 在这里新增作品即可，无需改页面代码
//  新增步骤：复制一个对象，修改字段即可
// ==========================================

const img = (prompt, size = 'landscape_16_9') =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;

export const projects = [
  {
    slug: 'nimbus-banking',
    title: 'Nimbus Banking',
    category: 'Mobile App',
    year: '2025',
    role: 'UI Designer',
    tools: ['Figma', 'Illustrator', 'Principle'],
    tags: ['Finance', 'iOS', 'Redesign'],
    featured: true,
    description:
      '面向年轻用户的移动银行体验重塑，通过渐进式信息展示与克制的视觉语言降低认知负荷。',
    overview:
      'Nimbus Banking 是对传统银行 App 的一次全面体验重塑。项目聚焦于日常高频场景——转账、账单、消费追踪——通过渐进式信息架构让用户在需要时才看到细节。视觉上采用深空蓝为主色，搭配大面积留白与微妙的卡片层级，传递专业感与信任感。动效方面仅保留必要的转场反馈，避免过度装饰。',
    coverImage: img('Modern mobile banking app UI design, clean interface, credit card, soft blue accent, minimal, professional, light background, high quality'),
    gallery: [
      img('Mobile banking app transaction list screen, clean UI, minimal design, light theme, professional', 'portrait_4_3'),
      img('Mobile banking app dashboard with spending charts, clean minimal interface, soft blue', 'portrait_4_3'),
      img('Mobile banking app card details screen, elegant dark blue gradient, minimal', 'portrait_4_3'),
    ],
  },
  {
    slug: 'atlas-dashboard',
    title: 'Atlas Analytics',
    category: 'Web App',
    year: '2024',
    role: 'UI / UX Designer',
    tools: ['Figma', 'After Effects'],
    tags: ['Dashboard', 'SaaS', 'Data Viz'],
    featured: true,
    description:
      'SaaS 数据分析平台仪表盘设计，将复杂的多维数据转化为直觉的可视化叙事。',
    overview:
      'Atlas Analytics 是一款面向中型企业的 SaaS 数据分析平台。设计挑战在于：如何在单屏内呈现多维度指标，同时避免信息过载。解决方案是采用模块化卡片布局，用户可自由拖拽组合仪表盘。配色上以中性灰为底色，仅在关键指标上使用语义色，减少视觉干扰。图表组件遵循统一的设计规范，确保数据可读性。',
    coverImage: img('SaaS analytics dashboard UI design, data visualization, charts, clean white interface, professional, modern, minimal'),
    gallery: [
      img('Analytics dashboard detail view with line charts and metrics, clean UI, professional', 'landscape_4_3'),
      img('Data table with filters and sorting, modern web app interface, clean design', 'landscape_4_3'),
      img('Settings panel for analytics dashboard, form design, clean minimal web UI', 'landscape_4_3'),
    ],
  },
  {
    slug: 'wander-travel',
    title: 'Wander',
    category: 'Mobile App',
    year: '2024',
    role: 'UI Designer',
    tools: ['Figma', 'Photoshop'],
    tags: ['Travel', 'Booking', 'Mobile'],
    featured: true,
    description:
      '旅行预订移动应用，以目的地为先的沉浸式浏览体验重新定义旅行规划流程。',
    overview:
      'Wander 是一款以目的地为入口的旅行预订应用。区别于传统列表式搜索，Wander 用全屏沉浸式目的地卡片吸引用户探索，再逐步引导至酒店与航班预订。设计上采用温暖的色调与圆角卡片，营造轻松的旅行氛围。动效上利用视差滚动增强沉浸感，同时保证加载性能。',
    coverImage: img('Travel booking mobile app UI design, beautiful destination landscape, warm colors, minimal, modern, immersive'),
    gallery: [
      img('Travel app destination detail screen, beautiful scenery, warm minimal design', 'portrait_4_3'),
      img('Travel app hotel booking screen, card layout, clean interface, warm tones', 'portrait_4_3'),
      img('Travel app itinerary timeline, minimal design, warm color palette', 'portrait_4_3'),
    ],
  },
  {
    slug: 'pulse-fitness',
    title: 'Pulse',
    category: 'Mobile App',
    year: '2024',
    role: 'UI Designer',
    tools: ['Figma', 'Principle'],
    tags: ['Health', 'Wearable', 'iOS'],
    featured: false,
    description:
      '健身追踪应用，用活动环与数据可视化让运动记录变得直觉且有趣。',
    overview:
      'Pulse 是一款连接可穿戴设备的健身追踪应用。核心交互围绕"活动环"展开——用环形进度直观展示每日运动完成度。设计上采用深色模式为主，搭配活力绿色作为运动状态反馈色，兼具科技感与运动氛围。数据图表采用简约风格，避免干扰用户关注核心指标。',
    coverImage: img('Fitness tracking app UI design, activity rings, health metrics, vibrant green accent, dark mode, modern, minimal'),
    gallery: [
      img('Fitness app workout summary screen, activity rings, dark mode, green accent', 'portrait_4_3'),
      img('Fitness app heart rate detail, minimal chart design, dark UI', 'portrait_4_3'),
      img('Fitness app daily goal progress, clean dark interface, vibrant accents', 'portrait_4_3'),
    ],
  },
  {
    slug: 'cadence-music',
    title: 'Cadence',
    category: 'Web + Mobile',
    year: '2023',
    role: 'UI Designer',
    tools: ['Figma', 'Illustrator'],
    tags: ['Music', 'Streaming', 'Cross-platform'],
    featured: false,
    description:
      '音乐流媒体平台设计，以沉浸式播放体验与发现式推荐为核心打造跨端一致性。',
    overview:
      'Cadence 是一款跨端音乐流媒体平台。设计目标是建立一致的视觉语言跨越移动端与桌面端。播放界面采用沉浸式全屏专辑封面配合动态渐变，营造与音乐共鸣的氛围。发现页以编辑推荐为主，减少算法推荐的冰冷感。整套设计系统包含完整的色彩规范、字体层级与组件库。',
    coverImage: img('Music streaming app UI design, album covers, playlist, dark theme, purple accent, modern, immersive'),
    gallery: [
      img('Music app now playing screen, full screen album art, dark gradient, purple accent', 'portrait_4_3'),
      img('Music app discover page, editorial layout, dark theme, modern', 'portrait_4_3'),
      img('Music app library view, grid of albums, clean dark interface', 'portrait_4_3'),
    ],
  },
  {
    slug: 'hearth-smart-home',
    title: 'Hearth',
    category: 'IoT Interface',
    year: '2023',
    role: 'UI Designer',
    tools: ['Figma', 'After Effects'],
    tags: ['Smart Home', 'IoT', 'Tablet'],
    featured: false,
    description:
      '智能家居控制界面，用空间化思维组织设备控制，让复杂的家庭自动化变得直觉。',
    overview:
      'Hearth 是一款面向平板设备的智能家居控制中心。设计创新在于用空间化的"房间"概念组织设备——用户通过切换房间标签快速定位设备。每个设备卡片采用拟物与扁平结合的风格，状态反馈清晰。场景模式支持一键联动多设备，并配有流畅的动效过渡。',
    coverImage: img('Smart home control interface UI design, home automation dashboard, device cards, clean, modern, blue accent, tablet'),
    gallery: [
      img('Smart home room control panel, device grid, clean modern UI, blue tones', 'landscape_4_3'),
      img('Smart home scene mode selection, minimal interface, soft lighting', 'landscape_4_3'),
      img('Smart home device detail settings, toggle switches, clean tablet UI', 'landscape_4_3'),
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getAllSlugs() {
  return projects.map((p) => p.slug);
}
