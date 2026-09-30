/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Ui_Domain_Version_MinInputs */

const en_ui_domain_version_min = /** @type {(inputs: Ui_Domain_Version_MinInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version}+`)
};

const es_ui_domain_version_min = /** @type {(inputs: Ui_Domain_Version_MinInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version}+`)
};

const de_ui_domain_version_min = /** @type {(inputs: Ui_Domain_Version_MinInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version}+`)
};

const fr_ui_domain_version_min = /** @type {(inputs: Ui_Domain_Version_MinInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version}+`)
};

const it_ui_domain_version_min = /** @type {(inputs: Ui_Domain_Version_MinInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version}+`)
};

const nl_ui_domain_version_min = /** @type {(inputs: Ui_Domain_Version_MinInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version}+`)
};

const pl_ui_domain_version_min = /** @type {(inputs: Ui_Domain_Version_MinInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version}+`)
};

const pt_ui_domain_version_min = /** @type {(inputs: Ui_Domain_Version_MinInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version}+`)
};

const ru_ui_domain_version_min = /** @type {(inputs: Ui_Domain_Version_MinInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version}+`)
};

const sv_ui_domain_version_min = /** @type {(inputs: Ui_Domain_Version_MinInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version}+`)
};

const tr_ui_domain_version_min = /** @type {(inputs: Ui_Domain_Version_MinInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version}+`)
};

const zh_ui_domain_version_min = /** @type {(inputs: Ui_Domain_Version_MinInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version}+`)
};

const ja_ui_domain_version_min = /** @type {(inputs: Ui_Domain_Version_MinInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version}+`)
};

/**
* | output |
* | --- |
* | "{version}+" |
*
* @param {Ui_Domain_Version_MinInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_version_min = /** @type {((inputs: Ui_Domain_Version_MinInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Version_MinInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_version_min(inputs)
	if (locale === "de") return de_ui_domain_version_min(inputs)
	if (locale === "fr") return fr_ui_domain_version_min(inputs)
	if (locale === "it") return it_ui_domain_version_min(inputs)
	if (locale === "nl") return nl_ui_domain_version_min(inputs)
	if (locale === "pl") return pl_ui_domain_version_min(inputs)
	if (locale === "pt") return pt_ui_domain_version_min(inputs)
	if (locale === "ru") return ru_ui_domain_version_min(inputs)
	if (locale === "sv") return sv_ui_domain_version_min(inputs)
	if (locale === "tr") return tr_ui_domain_version_min(inputs)
	if (locale === "zh") return zh_ui_domain_version_min(inputs)
	if (locale === "ja") return ja_ui_domain_version_min(inputs)
	return en_ui_domain_version_min(inputs)
});
