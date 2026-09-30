/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_View_CompactInputs */

const en_ui_domain_view_compact = /** @type {(inputs: Ui_Domain_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compact`)
};

const es_ui_domain_view_compact = /** @type {(inputs: Ui_Domain_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compacta`)
};

const de_ui_domain_view_compact = /** @type {(inputs: Ui_Domain_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompakt`)
};

const fr_ui_domain_view_compact = /** @type {(inputs: Ui_Domain_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compact`)
};

const it_ui_domain_view_compact = /** @type {(inputs: Ui_Domain_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatta`)
};

const nl_ui_domain_view_compact = /** @type {(inputs: Ui_Domain_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compact`)
};

const pl_ui_domain_view_compact = /** @type {(inputs: Ui_Domain_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompaktowy`)
};

const pt_ui_domain_view_compact = /** @type {(inputs: Ui_Domain_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compacta`)
};

const ru_ui_domain_view_compact = /** @type {(inputs: Ui_Domain_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Компактный`)
};

const sv_ui_domain_view_compact = /** @type {(inputs: Ui_Domain_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompakt`)
};

const tr_ui_domain_view_compact = /** @type {(inputs: Ui_Domain_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sıkışık`)
};

const zh_ui_domain_view_compact = /** @type {(inputs: Ui_Domain_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`紧凑`)
};

const ja_ui_domain_view_compact = /** @type {(inputs: Ui_Domain_View_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コンパクト`)
};

/**
* | output |
* | --- |
* | "Compact" |
*
* @param {Ui_Domain_View_CompactInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_view_compact = /** @type {((inputs?: Ui_Domain_View_CompactInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_View_CompactInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_view_compact(inputs)
	if (locale === "de") return de_ui_domain_view_compact(inputs)
	if (locale === "fr") return fr_ui_domain_view_compact(inputs)
	if (locale === "it") return it_ui_domain_view_compact(inputs)
	if (locale === "nl") return nl_ui_domain_view_compact(inputs)
	if (locale === "pl") return pl_ui_domain_view_compact(inputs)
	if (locale === "pt") return pt_ui_domain_view_compact(inputs)
	if (locale === "ru") return ru_ui_domain_view_compact(inputs)
	if (locale === "sv") return sv_ui_domain_view_compact(inputs)
	if (locale === "tr") return tr_ui_domain_view_compact(inputs)
	if (locale === "zh") return zh_ui_domain_view_compact(inputs)
	if (locale === "ja") return ja_ui_domain_view_compact(inputs)
	return en_ui_domain_view_compact(inputs)
});
