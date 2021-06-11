const li = Array.from(document.querySelectorAll('li'));

const getElementAttr = (key) => (el) => el.getAttribute(key);

const getAttrDataSlide = getElementAttr('data-slide');
const getAttrId = getElementAttr('id');

const dataSlideList = li.map(getElementAttr);
const idList = li.map(getAttrId);