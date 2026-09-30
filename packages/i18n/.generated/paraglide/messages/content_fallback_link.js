/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ original: NonNullable<unknown> }} Content_Fallback_LinkInputs */

const en_content_fallback_link = /** @type {(inputs: Content_Fallback_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Open the ${i?.original} page`)
};

const es_content_fallback_link = /** @type {(inputs: Content_Fallback_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Abrir la página en ${i?.original}`)
};

const de_content_fallback_link = /** @type {(inputs: Content_Fallback_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seite auf ${i?.original} öffnen`)
};

const fr_content_fallback_link = /** @type {(inputs: Content_Fallback_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ouvrir la page en ${i?.original}`)
};

const it_content_fallback_link = /** @type {(inputs: Content_Fallback_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Apri la pagina in ${i?.original}`)
};

const nl_content_fallback_link = /** @type {(inputs: Content_Fallback_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pagina openen in het ${i?.original}`)
};

const pl_content_fallback_link = /** @type {(inputs: Content_Fallback_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Otwórz stronę w języku: ${i?.original}`)
};

const pt_content_fallback_link = /** @type {(inputs: Content_Fallback_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Abrir a página em ${i?.original}`)
};

const ru_content_fallback_link = /** @type {(inputs: Content_Fallback_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Открыть страницу на языке «${i?.original}»`)
};

const sv_content_fallback_link = /** @type {(inputs: Content_Fallback_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Öppna sidan på ${i?.original}`)
};

const tr_content_fallback_link = /** @type {(inputs: Content_Fallback_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sayfayı ${i?.original} dilinde aç`)
};

const zh_content_fallback_link = /** @type {(inputs: Content_Fallback_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`打开${i?.original}页面`)
};

const ja_content_fallback_link = /** @type {(inputs: Content_Fallback_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.original}のページを開く`)
};

/**
* | output |
* | --- |
* | "Open the {original} page" |
*
* @param {Content_Fallback_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_fallback_link = /** @type {((inputs: Content_Fallback_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Fallback_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_fallback_link(inputs)
	if (locale === "de") return de_content_fallback_link(inputs)
	if (locale === "fr") return fr_content_fallback_link(inputs)
	if (locale === "it") return it_content_fallback_link(inputs)
	if (locale === "nl") return nl_content_fallback_link(inputs)
	if (locale === "pl") return pl_content_fallback_link(inputs)
	if (locale === "pt") return pt_content_fallback_link(inputs)
	if (locale === "ru") return ru_content_fallback_link(inputs)
	if (locale === "sv") return sv_content_fallback_link(inputs)
	if (locale === "tr") return tr_content_fallback_link(inputs)
	if (locale === "zh") return zh_content_fallback_link(inputs)
	if (locale === "ja") return ja_content_fallback_link(inputs)
	return en_content_fallback_link(inputs)
});
