// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Last update: September 2026.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-️-operating-systems-i2c-custom-driver",
          title: '⚙️ Operating Systems — I2C Custom Driver',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2019-01-01-Operating-Systems-Course-Final-Project/";
            },},{id: "news-multi-agent-systems-emergent-collaborative-robots",
          title: '🤖 Multi-Agent Systems — Emergent Collaborative Robots',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2020-06-23-Multi-Agent-Systems-Final-Project/";
            },},{id: "news-bioinformatics-network-medicine-for-liver-fibrosis",
          title: '🧬 Bioinformatics — Network Medicine for Liver Fibrosis',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2020-09-15-Bioinformatics-Course-1st-Project/";
            },},{id: "news-bioinformatics-brain-networks-from-eeg",
          title: '🧠 Bioinformatics — Brain Networks from EEG',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2020-10-26-Bioinformatics-Course-2nd-Project/";
            },},{id: "news-neural-networks-interpreting-cnns-via-decision-trees",
          title: '🌳 Neural Networks — Interpreting CNNs via Decision Trees',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2020-11-13-Neural-Networks-Project/";
            },},{id: "news-natural-language-processing-word-in-context",
          title: '🔤 Natural Language Processing — Word-in-Context',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021-03-17-NLP-Course-1st-Project/";
            },},{id: "news-natural-language-processing-aspect-based-sentiment-analysis",
          title: '💬 Natural Language Processing — Aspect-Based Sentiment Analysis',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021-05-20-NLP-Course-2nd-Project/";
            },},{id: "news-defended-ms-c-thesis-sir-summ-extractive-narrative-summarizer",
          title: '🎓 Defended Ms.C. Thesis: SIR-Summ - Extractive Narrative Summarizer',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-10-16-master_thesis/";
            },},{id: "news-started-my-phd-at-sapienza-university-of-rome-italy",
          title: '👨‍💻 Started my PhD at Sapienza, University of Rome, Italy.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-11-01-phd_start/";
            },},{id: "news-accepted-at-the-lisbon-summer-school-lxmls-2024",
          title: '🇵🇹 Accepted at the Lisbon Summer School LxMLS 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-07-11-LxMLS/";
            },},{id: "news-paper-accepted-at-acl-2025-right-answer-wrong-score",
          title: '🇦🇹 Paper accepted at ACL 2025: Right Answer, Wrong Score',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-06-16-paper_metaqa/";
            },},{id: "news-paper-accepted-at-clic-it-2025-what-we-learned-from-continually-training-minerva",
          title: '🇮🇹 Paper accepted at CLiC-it 2025: What We Learned from Continually Training Minerva...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-06-20-paper_continual/";
            },},{id: "news-paper-accepted-at-emnlp-2025-literaryqa",
          title: '🇨🇳 Paper accepted at EMNLP 2025: LiteraryQA',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-08-22-paper_literararyqa/";
            },},{id: "news-supervised-m-sc-student-graduates",
          title: '🎓 Supervised M.Sc. student graduates!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-10-24-graduation_garufi/";
            },},{id: "news-paper-accepted-at-evalita-2026-indaqa-2",
          title: '🇮🇹 Paper accepted at EVALITA 2026: INDAQA 2',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-02-26-paper_indaqa2/";
            },},{id: "news-6-month-visiting-period-at-university-of-edinburgh",
          title: '🏴󠁧󠁢󠁳󠁣󠁴󠁿 6-month visiting period at University of Edinburgh',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-05-01-visiting/";
            },},{id: "news-paper-accepted-at-clic-it-2026-dromedario-3-amp-nbsp",
          title: '🇮🇹 Paper accepted at CLiC-it 2026: Dromedario 3&amp;amp;nbsp; 🐪',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-17-paper_dromedario/";
            },},{id: "news-best-student-paper-award-at-clic-it-2026",
          title: '🏆 Best Student Paper Award at CLiC-it 2026!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-09-16-award_dromedario/";
            },},{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=jxAvKZ4AAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/luca-gioffre", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%69%6F%66%66%72%65@%64%69%61%67.%75%6E%69%72%6F%6D%61%31.%69%74", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV.pdf", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
