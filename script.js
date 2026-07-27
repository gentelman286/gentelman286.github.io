const capabilityData = {
  model: {
    kicker: "MODEL · 标准化数据语言",
    title: "用一个模型，读懂每一台设备",
    desc: "独创工业物模型架构，将设备属性、事件与服务统一描述，解耦物理装备与软件系统，让跨厂区、跨品牌、跨年代的设备数据成为可治理的数据资产。",
    points: [
      "标准统一：跨系统共享同一设备语义",
      "积木开发：模型资产按场景快速复用",
      "AI 治理：辅助构建、分类与持续运营",
      "开放互通：标准接口连接产业生态"
    ],
    icon: "icon-model",
    core: "设备语义中心",
    meta: "属性 · 事件 · 服务",
    nodes: ["设备", "产线", "工厂", "应用"]
  },
  gateway: {
    kicker: "GATEWAY · 云边端实时协同",
    title: "一套软网关，连接复杂工业现场",
    desc: "基于边缘云的工业软网关，以插件化方式适配主流工业协议，支持南向多源实时采集、北向云端互联与边缘规则计算，在不改变现场设备的前提下打通 OT / IT 数据链路。",
    points: [
      "协议插件：新旧协议灵活兼容与扩展",
      "弹性部署：利旧硬件，降低现场投入",
      "高可靠：负载均衡与故障切换机制",
      "边云协同：应用统一下发、监控与运维"
    ],
    icon: "icon-gateway",
    core: "边缘连接中心",
    meta: "采集 · 解析 · 计算",
    nodes: ["PLC", "DCS", "CNC", "云平台"]
  },
  ai: {
    kicker: "GEWU AI · 工业知识智能生成",
    title: "让工业知识，转化为可运行的智能",
    desc: "依托格物小知与工业大模型能力，以自然语言辅助生成物模型、协议代码和边缘应用，结合企业知识与场景数据，缩短从业务描述到智能应用的工程链路。",
    points: [
      "模型生成：对话式构建设备信息模型",
      "协议生成：辅助开发工业通信驱动",
      "场景问答：设备、工艺与知识随问随用",
      "边缘闭环：智能应用下发并在现场执行"
    ],
    icon: "icon-ai",
    core: "工业智能中心",
    meta: "知识 · 生成 · 决策",
    nodes: ["知识库", "模型库", "数据流", "边缘应用"]
  }
};

const industryData = {
  equipment: {
    kicker: "EQUIPMENT MANUFACTURING",
    title: "让复杂装备拥有统一的数字语言",
    desc: "面向航天、船舶及高端装备，沉淀热处理、机加工、环境试验、生产辅助等设备模型，贯通设备、MES / DNC、PLC / DCS 与 AR 应用。",
    metrics: [["26", "类设备物模型"], ["4", "类重点工艺"], ["20+", "项目实践"]],
    scenes: ["设备联网", "系统互通", "AGV 调度", "数字化车间"],
    label: "GEWU DIGITAL FACTORY",
    kpiName: "设备在线率",
    kpiValue: "98.7%"
  },
  mine: {
    kicker: "SMART MINING",
    title: "从井下连接，到全矿智能协同",
    desc: "围绕综合管控、地质保障与安全生产，形成轻量化矿山能力包，对接核心设备系统与行业协议，让实时数据、业务应用和安全决策同屏协同。",
    metrics: [["38", "项核心功能"], ["5", "类应用场景"], ["7", "类设备系统"]],
    scenes: ["综合管控", "地质保障", "安全管控", "实时计算"],
    label: "GEWU SMART MINE",
    kpiName: "安全态势指数",
    kpiValue: "96.2%"
  },
  electronics: {
    kicker: "ELECTRONICS & SEMICONDUCTOR",
    title: "让精密制造的每个环节可控可追",
    desc: "聚焦半导体与 PCB 制造，以 SECS / GEM 协议连接设备，支撑数据采集、协议解析、指令下发与设备自动化控制，并衔接生产、仓储、质量与追溯体系。",
    metrics: [["2", "大细分方向"], ["4", "类核心应用"], ["SECS", "设备协议能力"]],
    scenes: ["EAP 设备自动化", "RMS 配方管理", "实时监控", "质量追溯"],
    label: "GEWU ELECTRONICS",
    kpiName: "工艺数据完整度",
    kpiValue: "99.5%"
  },
  chemical: {
    kicker: "CHEMICAL EQUIPMENT HEALTH",
    title: "让关键机组从被动维修走向主动健康",
    desc: "围绕大化工设备高价值场景，打通第三方数据、设备物模型与时序计算，支撑状态监测报警、寿命预测、设备问数和 AI 故障诊断预警。",
    metrics: [["1+5+N", "产品规划"], ["PI", "第三方协议"], ["AI", "故障诊断"]],
    scenes: ["智能开停机", "机泵诊断", "寿命预测", "加热炉预测"],
    label: "GEWU CHEMICAL",
    kpiName: "关键机组健康度",
    kpiValue: "95.8%"
  },
  light: {
    kicker: "TEXTILE · FOOD · FOOTWEAR",
    title: "把多品类柔性生产沉淀为标准能力",
    desc: "面向纺织、食品与鞋服行业，沉淀行业物模型、BI 大屏模板和生产工艺管理组件，帮助中小企业快速构建透明工厂与精益工艺闭环。",
    metrics: [["62", "个行业物模型"], ["40", "个纺织模型"], ["15+7", "食品与鞋服"]],
    scenes: ["行业 BI 大屏", "工艺组态", "生产透明化", "模板复用"],
    label: "GEWU LIGHT INDUSTRY",
    kpiName: "工艺执行符合率",
    kpiValue: "97.6%"
  }
};

const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

function setCapability(name) {
  const data = capabilityData[name];
  if (!data) return;

  $$(".capability-tab").forEach((tab) => {
    const active = tab.dataset.capability === name;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });

  $("#cap-kicker").textContent = data.kicker;
  $("#cap-title").textContent = data.title;
  $("#cap-desc").textContent = data.desc;
  $("#cap-points").innerHTML = data.points
    .map((point) => `<li><svg><use href="#icon-check"></use></svg>${point}</li>`)
    .join("");

  const visual = $("#cap-visual");
  visual.dataset.mode = name;
  $(".visual-core svg use", visual).setAttribute("href", `#${data.icon}`);
  $(".visual-core strong", visual).textContent = data.core;
  $(".visual-core small", visual).textContent = data.meta;
  $$(".visual-node", visual).forEach((node, index) => {
    node.textContent = data.nodes[index];
  });

  const panel = $(".capability-panel");
  panel.animate(
    [{ opacity: 0.55, transform: "translateY(6px)" }, { opacity: 1, transform: "translateY(0)" }],
    { duration: 330, easing: "cubic-bezier(.2,.75,.25,1)" }
  );
}

function setIndustry(name) {
  const data = industryData[name];
  if (!data) return;

  $$(".industry-tab").forEach((tab) => {
    const active = tab.dataset.industry === name;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });

  $("#industry-kicker").textContent = data.kicker;
  $("#industry-title").textContent = data.title;
  $("#industry-desc").textContent = data.desc;
  $("#industry-metrics").innerHTML = data.metrics
    .map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`)
    .join("");
  $("#industry-scenes").innerHTML = data.scenes.map((scene) => `<span>${scene}</span>`).join("");

  const dashboard = $("#industry-dashboard");
  dashboard.dataset.theme = name;
  $(".dash-top span", dashboard).lastChild.textContent = data.label;
  $(".dash-kpi small", dashboard).textContent = data.kpiName;
  $(".dash-kpi strong", dashboard).textContent = data.kpiValue;

  $(".industry-panel").animate(
    [{ opacity: 0.45, transform: "translateX(8px)" }, { opacity: 1, transform: "translateX(0)" }],
    { duration: 360, easing: "cubic-bezier(.2,.75,.25,1)" }
  );
}

function enableKeyboardTabs(selector, setter, dataKey) {
  const tabs = $$(selector);
  tabs.forEach((tab, index) => {
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
      event.preventDefault();
      const direction = ["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1;
      const next = tabs[(index + direction + tabs.length) % tabs.length];
      next.focus();
      setter(next.dataset[dataKey]);
    });
  });
}

$$(".capability-tab").forEach((tab) => {
  tab.addEventListener("click", () => setCapability(tab.dataset.capability));
});

$$(".industry-tab").forEach((tab) => {
  tab.addEventListener("click", () => setIndustry(tab.dataset.industry));
});

enableKeyboardTabs(".capability-tab", setCapability, "capability");
enableKeyboardTabs(".industry-tab", setIndustry, "industry");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -35px" }
);

$$(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 5, 3) * 60}ms`;
  revealObserver.observe(element);
});

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const target = Number(element.dataset.target);
      const duration = 1300;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = Math.floor(target * eased).toLocaleString("zh-CN");
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
      counterObserver.unobserve(element);
    });
  },
  { threshold: 0.6 }
);

$$(".counter").forEach((counter) => counterObserver.observe(counter));

const header = $(".site-header");
const progressBar = $(".scroll-progress");
const navLinks = $$(".site-nav a");
const sectionLinks = navLinks.filter((link) => link.getAttribute("href")?.startsWith("#"));
const sections = sectionLinks.map((link) => $(link.getAttribute("href"))).filter(Boolean);

function updateScrollUI() {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  header.classList.toggle("scrolled", scrollTop > 18);
  progressBar.style.width = `${maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0}%`;

  let current = "";
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= 170) current = section.id;
  });
  sectionLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}

window.addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();

const menuToggle = $(".menu-toggle");
const siteNav = $("#site-nav");

function closeMenu() {
  menuToggle.classList.remove("open");
  siteNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const open = !siteNav.classList.contains("open");
  menuToggle.classList.toggle("open", open);
  siteNav.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

const dialog = $("#consult-dialog");
const closeDialog = $(".dialog-close");
const consultForm = $(".consult-form");
const formStatus = $(".form-status");

$$(".js-open-consult").forEach((button) => {
  button.addEventListener("click", () => {
    formStatus.textContent = "";
    dialog.showModal();
    document.body.classList.add("dialog-open");
  });
});

function hideDialog() {
  dialog.close();
  document.body.classList.remove("dialog-open");
}

closeDialog.addEventListener("click", hideDialog);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) hideDialog();
});
dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));

consultForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = new FormData(consultForm).get("name");
  formStatus.textContent = `${name || "您好"}，预约意向已在本页生成。演示版本不会向外发送数据。`;
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeMenu();
});
