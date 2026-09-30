/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Compare_IntroInputs */

const en_explore_compare_intro = /** @type {(inputs: Explore_Compare_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter two to four mods as creator/name, or paste their page links.`)
};

const es_explore_compare_intro = /** @type {(inputs: Explore_Compare_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribe de dos a cuatro mods como creador/nombre o pega los enlaces de sus páginas.`)
};

const de_explore_compare_intro = /** @type {(inputs: Explore_Compare_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib zwei bis vier Mods als Ersteller/Name ein oder füge ihre Seitenlinks ein.`)
};

const fr_explore_compare_intro = /** @type {(inputs: Explore_Compare_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saisissez de deux à quatre mods sous la forme créateur/nom, ou collez les liens de leurs pages.`)
};

const it_explore_compare_intro = /** @type {(inputs: Explore_Compare_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inserisci da due a quattro mod come creatore/nome o incolla i link delle loro pagine.`)
};

const nl_explore_compare_intro = /** @type {(inputs: Explore_Compare_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voer twee tot vier mods in als maker/naam, of plak de links naar hun pagina’s.`)
};

const pl_explore_compare_intro = /** @type {(inputs: Explore_Compare_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wpisz od dwóch do czterech modów jako twórca/nazwa albo wklej linki do ich stron.`)
};

const pt_explore_compare_intro = /** @type {(inputs: Explore_Compare_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informe de dois a quatro mods como criador/nome ou cole os links das páginas deles.`)
};

const ru_explore_compare_intro = /** @type {(inputs: Explore_Compare_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Введите от двух до четырёх модов в виде автор/название или вставьте ссылки на их страницы.`)
};

const sv_explore_compare_intro = /** @type {(inputs: Explore_Compare_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ange två till fyra mods som skapare/namn eller klistra in länkarna till deras sidor.`)
};

const tr_explore_compare_intro = /** @type {(inputs: Explore_Compare_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İki ila dört modu yapımcı/ad biçiminde gir veya sayfa bağlantılarını yapıştır.`)
};

const zh_explore_compare_intro = /** @type {(inputs: Explore_Compare_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`以“创作者/名称”的格式输入两到四个模组，或粘贴它们的页面链接。`)
};

const ja_explore_compare_intro = /** @type {(inputs: Explore_Compare_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者/名前の形式で 2 ～ 4 個の Mod を入力するか、ページのリンクを貼り付けてください。`)
};

/**
* | output |
* | --- |
* | "Enter two to four mods as creator/name, or paste their page links." |
*
* @param {Explore_Compare_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_compare_intro = /** @type {((inputs?: Explore_Compare_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Compare_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_compare_intro(inputs)
	if (locale === "de") return de_explore_compare_intro(inputs)
	if (locale === "fr") return fr_explore_compare_intro(inputs)
	if (locale === "it") return it_explore_compare_intro(inputs)
	if (locale === "nl") return nl_explore_compare_intro(inputs)
	if (locale === "pl") return pl_explore_compare_intro(inputs)
	if (locale === "pt") return pt_explore_compare_intro(inputs)
	if (locale === "ru") return ru_explore_compare_intro(inputs)
	if (locale === "sv") return sv_explore_compare_intro(inputs)
	if (locale === "tr") return tr_explore_compare_intro(inputs)
	if (locale === "zh") return zh_explore_compare_intro(inputs)
	if (locale === "ja") return ja_explore_compare_intro(inputs)
	return en_explore_compare_intro(inputs)
});
