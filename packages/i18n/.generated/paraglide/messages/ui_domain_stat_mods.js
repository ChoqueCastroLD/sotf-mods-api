/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Stat_ModsInputs */

const en_ui_domain_stat_mods = /** @type {(inputs: Ui_Domain_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const es_ui_domain_stat_mods = /** @type {(inputs: Ui_Domain_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const de_ui_domain_stat_mods = /** @type {(inputs: Ui_Domain_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const fr_ui_domain_stat_mods = /** @type {(inputs: Ui_Domain_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const it_ui_domain_stat_mods = /** @type {(inputs: Ui_Domain_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const nl_ui_domain_stat_mods = /** @type {(inputs: Ui_Domain_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const pl_ui_domain_stat_mods = /** @type {(inputs: Ui_Domain_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody`)
};

const pt_ui_domain_stat_mods = /** @type {(inputs: Ui_Domain_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const ru_ui_domain_stat_mods = /** @type {(inputs: Ui_Domain_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды`)
};

const sv_ui_domain_stat_mods = /** @type {(inputs: Ui_Domain_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar`)
};

const tr_ui_domain_stat_mods = /** @type {(inputs: Ui_Domain_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlar`)
};

const zh_ui_domain_stat_mods = /** @type {(inputs: Ui_Domain_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组`)
};

const ja_ui_domain_stat_mods = /** @type {(inputs: Ui_Domain_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD`)
};

/**
* | output |
* | --- |
* | "Mods" |
*
* @param {Ui_Domain_Stat_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_stat_mods = /** @type {((inputs?: Ui_Domain_Stat_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Stat_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_stat_mods(inputs)
	if (locale === "de") return de_ui_domain_stat_mods(inputs)
	if (locale === "fr") return fr_ui_domain_stat_mods(inputs)
	if (locale === "it") return it_ui_domain_stat_mods(inputs)
	if (locale === "nl") return nl_ui_domain_stat_mods(inputs)
	if (locale === "pl") return pl_ui_domain_stat_mods(inputs)
	if (locale === "pt") return pt_ui_domain_stat_mods(inputs)
	if (locale === "ru") return ru_ui_domain_stat_mods(inputs)
	if (locale === "sv") return sv_ui_domain_stat_mods(inputs)
	if (locale === "tr") return tr_ui_domain_stat_mods(inputs)
	if (locale === "zh") return zh_ui_domain_stat_mods(inputs)
	if (locale === "ja") return ja_ui_domain_stat_mods(inputs)
	return en_ui_domain_stat_mods(inputs)
});
