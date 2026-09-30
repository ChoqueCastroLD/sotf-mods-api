/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Version_BetaInputs */

const en_ui_domain_version_beta = /** @type {(inputs: Ui_Domain_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const es_ui_domain_version_beta = /** @type {(inputs: Ui_Domain_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const de_ui_domain_version_beta = /** @type {(inputs: Ui_Domain_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const fr_ui_domain_version_beta = /** @type {(inputs: Ui_Domain_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bêta`)
};

const it_ui_domain_version_beta = /** @type {(inputs: Ui_Domain_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const nl_ui_domain_version_beta = /** @type {(inputs: Ui_Domain_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bèta`)
};

const pl_ui_domain_version_beta = /** @type {(inputs: Ui_Domain_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const pt_ui_domain_version_beta = /** @type {(inputs: Ui_Domain_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const ru_ui_domain_version_beta = /** @type {(inputs: Ui_Domain_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Бета`)
};

const sv_ui_domain_version_beta = /** @type {(inputs: Ui_Domain_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const tr_ui_domain_version_beta = /** @type {(inputs: Ui_Domain_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const zh_ui_domain_version_beta = /** @type {(inputs: Ui_Domain_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`测试版`)
};

const ja_ui_domain_version_beta = /** @type {(inputs: Ui_Domain_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ベータ`)
};

/**
* | output |
* | --- |
* | "Beta" |
*
* @param {Ui_Domain_Version_BetaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_version_beta = /** @type {((inputs?: Ui_Domain_Version_BetaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Version_BetaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_version_beta(inputs)
	if (locale === "de") return de_ui_domain_version_beta(inputs)
	if (locale === "fr") return fr_ui_domain_version_beta(inputs)
	if (locale === "it") return it_ui_domain_version_beta(inputs)
	if (locale === "nl") return nl_ui_domain_version_beta(inputs)
	if (locale === "pl") return pl_ui_domain_version_beta(inputs)
	if (locale === "pt") return pt_ui_domain_version_beta(inputs)
	if (locale === "ru") return ru_ui_domain_version_beta(inputs)
	if (locale === "sv") return sv_ui_domain_version_beta(inputs)
	if (locale === "tr") return tr_ui_domain_version_beta(inputs)
	if (locale === "zh") return zh_ui_domain_version_beta(inputs)
	if (locale === "ja") return ja_ui_domain_version_beta(inputs)
	return en_ui_domain_version_beta(inputs)
});
