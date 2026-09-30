/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Versions_Col_LoaderInputs */

const en_ui_domain_versions_col_loader = /** @type {(inputs: Ui_Domain_Versions_Col_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const es_ui_domain_versions_col_loader = /** @type {(inputs: Ui_Domain_Versions_Col_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const de_ui_domain_versions_col_loader = /** @type {(inputs: Ui_Domain_Versions_Col_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const fr_ui_domain_versions_col_loader = /** @type {(inputs: Ui_Domain_Versions_Col_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const it_ui_domain_versions_col_loader = /** @type {(inputs: Ui_Domain_Versions_Col_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const nl_ui_domain_versions_col_loader = /** @type {(inputs: Ui_Domain_Versions_Col_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const pl_ui_domain_versions_col_loader = /** @type {(inputs: Ui_Domain_Versions_Col_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const pt_ui_domain_versions_col_loader = /** @type {(inputs: Ui_Domain_Versions_Col_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const ru_ui_domain_versions_col_loader = /** @type {(inputs: Ui_Domain_Versions_Col_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const sv_ui_domain_versions_col_loader = /** @type {(inputs: Ui_Domain_Versions_Col_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const tr_ui_domain_versions_col_loader = /** @type {(inputs: Ui_Domain_Versions_Col_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const zh_ui_domain_versions_col_loader = /** @type {(inputs: Ui_Domain_Versions_Col_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const ja_ui_domain_versions_col_loader = /** @type {(inputs: Ui_Domain_Versions_Col_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

/**
* | output |
* | --- |
* | "RedLoader" |
*
* @param {Ui_Domain_Versions_Col_LoaderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_versions_col_loader = /** @type {((inputs?: Ui_Domain_Versions_Col_LoaderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Versions_Col_LoaderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_versions_col_loader(inputs)
	if (locale === "de") return de_ui_domain_versions_col_loader(inputs)
	if (locale === "fr") return fr_ui_domain_versions_col_loader(inputs)
	if (locale === "it") return it_ui_domain_versions_col_loader(inputs)
	if (locale === "nl") return nl_ui_domain_versions_col_loader(inputs)
	if (locale === "pl") return pl_ui_domain_versions_col_loader(inputs)
	if (locale === "pt") return pt_ui_domain_versions_col_loader(inputs)
	if (locale === "ru") return ru_ui_domain_versions_col_loader(inputs)
	if (locale === "sv") return sv_ui_domain_versions_col_loader(inputs)
	if (locale === "tr") return tr_ui_domain_versions_col_loader(inputs)
	if (locale === "zh") return zh_ui_domain_versions_col_loader(inputs)
	if (locale === "ja") return ja_ui_domain_versions_col_loader(inputs)
	return en_ui_domain_versions_col_loader(inputs)
});
