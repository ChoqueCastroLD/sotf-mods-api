/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Install_Kit_MoreInputs */

const en_content_install_kit_more = /** @type {(inputs: Content_Install_Kit_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Browse all Kits`)
};

const es_content_install_kit_more = /** @type {(inputs: Content_Install_Kit_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver todos los Kits`)
};

const de_content_install_kit_more = /** @type {(inputs: Content_Install_Kit_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Kits ansehen`)
};

const fr_content_install_kit_more = /** @type {(inputs: Content_Install_Kit_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir tous les Kits`)
};

const it_content_install_kit_more = /** @type {(inputs: Content_Install_Kit_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sfoglia tutti i Kit`)
};

const nl_content_install_kit_more = /** @type {(inputs: Content_Install_Kit_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Kits bekijken`)
};

const pl_content_install_kit_more = /** @type {(inputs: Content_Install_Kit_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz wszystkie zestawy`)
};

const pt_content_install_kit_more = /** @type {(inputs: Content_Install_Kit_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver todos os Kits`)
};

const ru_content_install_kit_more = /** @type {(inputs: Content_Install_Kit_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все наборы`)
};

const sv_content_install_kit_more = /** @type {(inputs: Content_Install_Kit_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa alla Kits`)
};

const tr_content_install_kit_more = /** @type {(inputs: Content_Install_Kit_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm Kitlere göz at`)
};

const zh_content_install_kit_more = /** @type {(inputs: Content_Install_Kit_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浏览所有套装`)
};

const ja_content_install_kit_more = /** @type {(inputs: Content_Install_Kit_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのキットを見る`)
};

/**
* | output |
* | --- |
* | "Browse all Kits" |
*
* @param {Content_Install_Kit_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_install_kit_more = /** @type {((inputs?: Content_Install_Kit_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Install_Kit_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_install_kit_more(inputs)
	if (locale === "de") return de_content_install_kit_more(inputs)
	if (locale === "fr") return fr_content_install_kit_more(inputs)
	if (locale === "it") return it_content_install_kit_more(inputs)
	if (locale === "nl") return nl_content_install_kit_more(inputs)
	if (locale === "pl") return pl_content_install_kit_more(inputs)
	if (locale === "pt") return pt_content_install_kit_more(inputs)
	if (locale === "ru") return ru_content_install_kit_more(inputs)
	if (locale === "sv") return sv_content_install_kit_more(inputs)
	if (locale === "tr") return tr_content_install_kit_more(inputs)
	if (locale === "zh") return zh_content_install_kit_more(inputs)
	if (locale === "ja") return ja_content_install_kit_more(inputs)
	return en_content_install_kit_more(inputs)
});
