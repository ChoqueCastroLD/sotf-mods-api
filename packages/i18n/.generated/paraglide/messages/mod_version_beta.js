/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Version_BetaInputs */

const en_mod_version_beta = /** @type {(inputs: Mod_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const es_mod_version_beta = /** @type {(inputs: Mod_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const de_mod_version_beta = /** @type {(inputs: Mod_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const fr_mod_version_beta = /** @type {(inputs: Mod_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bêta`)
};

const it_mod_version_beta = /** @type {(inputs: Mod_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const nl_mod_version_beta = /** @type {(inputs: Mod_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bèta`)
};

const pl_mod_version_beta = /** @type {(inputs: Mod_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const pt_mod_version_beta = /** @type {(inputs: Mod_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const ru_mod_version_beta = /** @type {(inputs: Mod_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Бета`)
};

const sv_mod_version_beta = /** @type {(inputs: Mod_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const tr_mod_version_beta = /** @type {(inputs: Mod_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const zh_mod_version_beta = /** @type {(inputs: Mod_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`测试版`)
};

const ja_mod_version_beta = /** @type {(inputs: Mod_Version_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ベータ`)
};

/**
* | output |
* | --- |
* | "Beta" |
*
* @param {Mod_Version_BetaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_version_beta = /** @type {((inputs?: Mod_Version_BetaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Version_BetaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_version_beta(inputs)
	if (locale === "de") return de_mod_version_beta(inputs)
	if (locale === "fr") return fr_mod_version_beta(inputs)
	if (locale === "it") return it_mod_version_beta(inputs)
	if (locale === "nl") return nl_mod_version_beta(inputs)
	if (locale === "pl") return pl_mod_version_beta(inputs)
	if (locale === "pt") return pt_mod_version_beta(inputs)
	if (locale === "ru") return ru_mod_version_beta(inputs)
	if (locale === "sv") return sv_mod_version_beta(inputs)
	if (locale === "tr") return tr_mod_version_beta(inputs)
	if (locale === "zh") return zh_mod_version_beta(inputs)
	if (locale === "ja") return ja_mod_version_beta(inputs)
	return en_mod_version_beta(inputs)
});
