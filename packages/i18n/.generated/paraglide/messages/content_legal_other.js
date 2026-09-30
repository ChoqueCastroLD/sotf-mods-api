/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Legal_OtherInputs */

const en_content_legal_other = /** @type {(inputs: Content_Legal_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other legal pages`)
};

const es_content_legal_other = /** @type {(inputs: Content_Legal_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otras páginas legales`)
};

const de_content_legal_other = /** @type {(inputs: Content_Legal_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weitere rechtliche Seiten`)
};

const fr_content_legal_other = /** @type {(inputs: Content_Legal_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autres pages juridiques`)
};

const it_content_legal_other = /** @type {(inputs: Content_Legal_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altre pagine legali`)
};

const nl_content_legal_other = /** @type {(inputs: Content_Legal_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere juridische pagina’s`)
};

const pl_content_legal_other = /** @type {(inputs: Content_Legal_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inne strony prawne`)
};

const pt_content_legal_other = /** @type {(inputs: Content_Legal_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outras páginas jurídicas`)
};

const ru_content_legal_other = /** @type {(inputs: Content_Legal_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другие правовые страницы`)
};

const sv_content_legal_other = /** @type {(inputs: Content_Legal_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andra juridiska sidor`)
};

const tr_content_legal_other = /** @type {(inputs: Content_Legal_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer yasal sayfalar`)
};

const zh_content_legal_other = /** @type {(inputs: Content_Legal_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他法律页面`)
};

const ja_content_legal_other = /** @type {(inputs: Content_Legal_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他の法的ページ`)
};

/**
* | output |
* | --- |
* | "Other legal pages" |
*
* @param {Content_Legal_OtherInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_legal_other = /** @type {((inputs?: Content_Legal_OtherInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Legal_OtherInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_legal_other(inputs)
	if (locale === "de") return de_content_legal_other(inputs)
	if (locale === "fr") return fr_content_legal_other(inputs)
	if (locale === "it") return it_content_legal_other(inputs)
	if (locale === "nl") return nl_content_legal_other(inputs)
	if (locale === "pl") return pl_content_legal_other(inputs)
	if (locale === "pt") return pt_content_legal_other(inputs)
	if (locale === "ru") return ru_content_legal_other(inputs)
	if (locale === "sv") return sv_content_legal_other(inputs)
	if (locale === "tr") return tr_content_legal_other(inputs)
	if (locale === "zh") return zh_content_legal_other(inputs)
	if (locale === "ja") return ja_content_legal_other(inputs)
	return en_content_legal_other(inputs)
});
