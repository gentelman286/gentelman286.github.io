const pageSelect = (selector, context = document) => context.querySelector(selector);
const pageSelectAll = (selector, context = document) => [...context.querySelectorAll(selector)];

const pageHeader = pageSelect(".site-header");
const pageProgress = pageSelect(".scroll-progress");
const pageMenuToggle = pageSelect(".menu-toggle");
const pageNav = pageSelect("#site-nav");
const pageNavLinks = pageSelectAll(".site-nav a");
const currentPage = document.body.dataset.page || "";

pageNavLinks.forEach((link) => {
  link.classList.toggle("active", link.dataset.nav === currentPage);
});

function updatePageScroll() {
  const top = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  pageHeader?.classList.toggle("scrolled", top > 10);
  if (pageProgress) pageProgress.style.width = `${max > 0 ? (top / max) * 100 : 0}%`;
}

window.addEventListener("scroll", updatePageScroll, { passive: true });
updatePageScroll();

function closePageMenu() {
  pageMenuToggle?.classList.remove("open");
  pageNav?.classList.remove("open");
  pageMenuToggle?.setAttribute("aria-expanded", "false");
}

pageMenuToggle?.addEventListener("click", () => {
  const open = !pageNav.classList.contains("open");
  pageMenuToggle.classList.toggle("open", open);
  pageNav.classList.toggle("open", open);
  pageMenuToggle.setAttribute("aria-expanded", String(open));
});

pageNavLinks.forEach((link) => link.addEventListener("click", closePageMenu));
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closePageMenu();
});

pageSelectAll("[data-filter-group]").forEach((group) => {
  const targetName = group.dataset.filterGroup;
  const cards = pageSelectAll(`[data-filter-target="${targetName}"]`);
  pageSelectAll("[data-filter]", group).forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      pageSelectAll("[data-filter]", group).forEach((item) => item.classList.toggle("active", item === button));
      cards.forEach((card) => {
        const categories = (card.dataset.category || "").split(" ");
        card.classList.toggle("hidden", filter !== "all" && !categories.includes(filter));
      });
    });
  });
});

pageSelectAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const open = !item.classList.contains("open");
    item.classList.toggle("open", open);
    button.setAttribute("aria-expanded", String(open));
  });
});

pageSelectAll(".local-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = pageSelect(".form-status", form);
    const name = new FormData(form).get("name");
    if (status) status.textContent = `${name || "您好"}，需求信息已在本页生成。本演示页面不会上传或发送数据。`;
  });
});

const productPlan = new Map();
const planButton = pageSelect(".floating-plan");
const planDrawer = pageSelect(".plan-drawer");
const planList = pageSelect(".plan-list");
const planCount = pageSelect(".plan-count");

function renderPlan() {
  if (!planList || !planCount) return;
  planCount.textContent = String(productPlan.size);
  if (!productPlan.size) {
    planList.innerHTML = '<p class="plan-empty">尚未添加产品，可从商城卡片加入方案清单。</p>';
    return;
  }
  planList.innerHTML = [...productPlan.entries()]
    .map(([id, name]) => `<div class="plan-item"><span>${name}</span><button type="button" data-remove-product="${id}">移除</button></div>`)
    .join("");
  pageSelectAll("[data-remove-product]", planList).forEach((button) => {
    button.addEventListener("click", () => {
      productPlan.delete(button.dataset.removeProduct);
      renderPlan();
    });
  });
}

pageSelectAll(".js-add-plan").forEach((button) => {
  button.addEventListener("click", () => {
    productPlan.set(button.dataset.productId, button.dataset.productName);
    button.textContent = "已加入方案";
    renderPlan();
  });
});

planButton?.addEventListener("click", () => planDrawer?.classList.add("open"));
pageSelect(".drawer-close")?.addEventListener("click", () => planDrawer?.classList.remove("open"));
pageSelect(".js-clear-plan")?.addEventListener("click", () => {
  productPlan.clear();
  pageSelectAll(".js-add-plan").forEach((button) => (button.textContent = "加入方案清单"));
  renderPlan();
});

renderPlan();
