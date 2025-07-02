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
      // greeting: "Hi, I'm",
      name: "Cui Shenglan",
      position: "Ph.D. Candidate in Design",
      intro1: "Hi, I'm ShengLan Cui, A PhD student at Hunan University's Design and Art Academy. Currently engaged in a joint program with the National University of Singapore under the guidance of Assistant Professer Janghee Cho.",
      researchFocus: "My research focuses on the intersection of Design and Artificial Intelligence， examining human-machine relationships from multiple perspectives. Generally speaking, I am interested in how artificial intelligence techology can serve as a 'partner'. Specifically, Iexplore how AI can serve as a collaborative design partner, learning and creating together with humans. Design plays a crucial role in promoting more meaningful and creative interactions between humans and machines. ",
      researchInterest: "From Mutual Learning to Meaningful Co-Creation.",
      // tagline: "From Mutual Learning to Meaningful Co-Creation",
      hobbies: "I'm also a fitness, food, and pet enthusiast.",
      viewMore: "View my specific research directions and publications. Latest CV:[cv_cn][cv_en]",
      contact: "Contact me: cuisl@hnu.edu.cn",
      // cvLink: "CV (2025.06)",
      topics: "Copyright Protection,Intelligent Design,Creativity Support"
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
      // greeting: "你好，我是",
      name: "崔盛兰",
      position: "设计学博士生",
      intro1: "Hi,我是崔盛兰，是湖南大学设计艺术学院博士生，导师是刘芳教授。目前我在新加坡国立大学进行联合培养，导师是Janghee Cho助理教授。",
      researchFocus: "我的研究聚焦于设计与人工智能的交叉领域，关注从多元视角审视人机关系。广义上，我对人工智能技术如何作为“伙伴”比较感兴趣。具体来说，我探索AI如何作为协作式的设计伙伴，与人类共同学习与创造。设计在其中发挥关键作用，推动人机之间更具意义和创造力的互动。",
      researchInterest: "From Mutual Learning to Meaningful Co-Creation.",
      // tagline: "从共同学习到意义共创",
      hobbies: "同时我也是一个健身，美食，宠物爱好者。",
      viewMore: "请查看具体的研究方向和部分学术发表。202506版本CV请参考这里[cv_cn][cv_en]。",
      contact: "欢迎联络。cuisl@hnu.edu.cn",
      // cvLink: "简历（2025.06）",
      topics: "版权保护，智能设计，创造力支持"
    },
    research1: {
      title: "AI Learn From Human (Expert)",
      minititles1: "海报设计的作品查重",
      minititles2: "海报抄袭数据集",
      minititles3: "探索AI侵权",
      periods: "2022-2025",
      description1: "",
      description2: "",
      description3: "",
    },
    research2: {
      title: "Human-AI Collaboration",
      minititles1: "与AI错误合作",
      minititles2: "与GenAI共同反思",
      periods: "2022-2025",
      description1: "",
      description2: ""
    },
    research3: {
      title: "Human Learn From AI",
      minititles1: "中小学生AI素养教育",
      periods: "2022-2025",
      description1: "",
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