import Home from '@/views/Home.vue'
import Publications from '@/views/Publications.vue'
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      home: "Home",
      research: "Researchs",
      publication: "Publications"
    },
    home: {
      jobSearch: "I am actively seeking academic positions and postdoctoral opportunities worldwide. Expected to graduate in Dec 2025.",
      name: "Cui Shenglan",
      position: "Ph.D. Candidate in Design",
      intro1: "Hi, I'm ShengLan Cui, a PhD student at Hunan University's Design and Art Academy. Currently engaged in a joint program with the National University of Singapore under the guidance of Assistant Professor Janghee Cho.",
      researchFocus: "My research focuses on the intersection of Design and Artificial Intelligence, examining human-machine relationships from multiple perspectives. Generally speaking, I am interested in how artificial intelligence technology can serve as a 'partner'. Specifically, I explore how AI can serve as a collaborative design partner, learning and creating together with humans. Design plays a crucial role in promoting more meaningful and creative interactions between humans and machines.",
      researchInterest: "From Mutual Learning to Meaningful Co-Creation.",
      viewMore: "View my specific research directions and publications. Latest CV: [cv_cn] [cv_en]",
      contact: "Contact me: cuisl&#64;hnu.edu.cn",
      topics: "Copyright Protection, Intelligent Design, Creativity Support",
      hobbies:"s"
    },

    research1: {
      title: "AI Learn From Human (Expert)",
      minititles1: "Duplicate checking of poster design works",
      minititles2: "Poster plagiarism dataset",
      minititles3: "Exploring AI infringement",
      periods: "2022-2025",
      description1: "",
      description2: "",
      description3: "",
    },
    research2: {
      title: "Human-AI Collaboration",
      minititles1: "Collaborating with AI errors",
      minititles2: "Reflection with GenAI",
      periods: "2022-2025",
      description1: "",
      description2: ""
    },
    research3: {
      title: "Human Learn From AI",
      minititles1: "AI literacy education for students",
      periods: "2022-2025",
      description1: "",
    },
    publication: {
      p1: "Partial academic publications",
      p2: "Please refer to Researchgate for the complete version.",
    },

  },
  cn: {
    nav: {
      home: "主页",
      research: "研究方向",
      publication: "学术发表"
    },

    home: {
      jobSearch: "我正在积极寻找大学教职和博士后岗位（在全球范围内）。预计在25年12月毕业。",
      name: "崔盛兰",
      position: "设计学博士生",
      intro1: "Hi,我是崔盛兰，是湖南大学设计艺术学院博士生，导师是刘芳教授。目前我在新加坡国立大学进行联合培养，导师是Janghee Cho助理教授。",
      researchFocus: "我的研究聚焦于设计与人工智能的交叉领域，关注从多元视角审视人机关系。广义上，我对人工智能技术如何作为“伙伴”比较感兴趣。具体来说，我探索AI如何作为协作式的设计伙伴，与人类共同学习与创造。设计在其中发挥关键作用，推动人机之间更具意义和创造力的互动。",
      researchInterest: "From Mutual Learning to Meaningful Co-Creation.",
      hobbies: "同时我也是一个健身，美食，宠物爱好者。",
      viewMore: "请查看具体的研究方向和部分学术发表。202506版本CV请参考这里[cv_cn][cv_en]。",

      contact: "欢迎联络。cuisl&#64;hnu.edu.cn",
      topics: "版权保护，智能设计，创造力支持"
    },

    research1: {
      title: "AI Learn From Human (Expert)",
      minititles1: "海报设计作品的抄袭查重",
      minititles2: "海报抄袭数据集",
      minititles3: "探索AI侵权",
      periods: "2022-2025",
      description1: "基于深度学习技术的疑似抄袭案例召回技术，以海报设计为案例。",
      description2: "基于互联网资源收集的疑似抄袭案例样本对，以海报设计为案例。",
      description3: "AI可能被用于侵权的技术手段。我们探讨了AI技术支持下可能的侵权手段，组织工作坊提出了保护方案。",
    },
    research2: {
      title: "Human-AI Collaboration",
      minititles1: "与AI错误合作",
      minititles2: "与GenAI共同反思",
      periods: "2022-2025",
      description1: "AI错误如何激发人的创造力？我们探讨了基于错误的创造力模型CETR，并指出两个关键因素：随机性和相关性。",
      description2: "人们如何使用例如ChatGPT，Replic等生成式人工智能对话系统及逆行日常self-care，进而提升心理健康和幸福感？"
    },
    research3: {
      title: "Human Learn From AI",
      minititles1: "中小学生AI素养教育",
      periods: "2022-2025",
      description1: "随着AI深入我们的生活，学习AI知识对我们的学习和创造逐渐重要。我们以设计学生为例，探索AI素养教育。",
    },
    publication: {
      p1: "部分学术发表",
      p2: "完整版本请查看Researchgate",
    },

  },
}


const i18n = createI18n({
  legacy: false,
  locale: 'cn',
  fallbackLocale: 'en',
  messages
})

export default i18n