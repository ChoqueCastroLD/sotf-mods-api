/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_View_ListInputs */

const en_ui_domain_view_list = /** @type {(inputs: Ui_Domain_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`List`)
};

const es_ui_domain_view_list = /** @type {(inputs: Ui_Domain_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista`)
};

const de_ui_domain_view_list = /** @type {(inputs: Ui_Domain_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liste`)
};

const fr_ui_domain_view_list = /** @type {(inputs: Ui_Domain_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liste`)
};

const it_ui_domain_view_list = /** @type {(inputs: Ui_Domain_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elenco`)
};

const nl_ui_domain_view_list = /** @type {(inputs: Ui_Domain_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lijst`)
};

const pl_ui_domain_view_list = /** @type {(inputs: Ui_Domain_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista`)
};

const pt_ui_domain_view_list = /** @type {(inputs: Ui_Domain_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista`)
};

const ru_ui_domain_view_list = /** @type {(inputs: Ui_Domain_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Список`)
};

const sv_ui_domain_view_list = /** @type {(inputs: Ui_Domain_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista`)
};

const tr_ui_domain_view_list = /** @type {(inputs: Ui_Domain_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liste`)
};

const zh_ui_domain_view_list = /** @type {(inputs: Ui_Domain_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`列表`)
};

const ja_ui_domain_view_list = /** @type {(inputs: Ui_Domain_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リスト`)
};

/**
* | output |
* | --- |
* | "List" |
*
* @param {Ui_Domain_View_ListInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_view_list = /** @type {((inputs?: Ui_Domain_View_ListInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_View_ListInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_view_list(inputs)
	if (locale === "de") return de_ui_domain_view_list(inputs)
	if (locale === "fr") return fr_ui_domain_view_list(inputs)
	if (locale === "it") return it_ui_domain_view_list(inputs)
	if (locale === "nl") return nl_ui_domain_view_list(inputs)
	if (locale === "pl") return pl_ui_domain_view_list(inputs)
	if (locale === "pt") return pt_ui_domain_view_list(inputs)
	if (locale === "ru") return ru_ui_domain_view_list(inputs)
	if (locale === "sv") return sv_ui_domain_view_list(inputs)
	if (locale === "tr") return tr_ui_domain_view_list(inputs)
	if (locale === "zh") return zh_ui_domain_view_list(inputs)
	if (locale === "ja") return ja_ui_domain_view_list(inputs)
	return en_ui_domain_view_list(inputs)
});
