/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Rank_TrapperInputs */

const en_ui_domain_rank_trapper = /** @type {(inputs: Ui_Domain_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trapper`)
};

const es_ui_domain_rank_trapper = /** @type {(inputs: Ui_Domain_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trampero`)
};

const de_ui_domain_rank_trapper = /** @type {(inputs: Ui_Domain_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fallensteller`)
};

const fr_ui_domain_rank_trapper = /** @type {(inputs: Ui_Domain_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trappeur`)
};

const it_ui_domain_rank_trapper = /** @type {(inputs: Ui_Domain_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cacciatore di trappole`)
};

const nl_ui_domain_rank_trapper = /** @type {(inputs: Ui_Domain_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strikzetter`)
};

const pl_ui_domain_rank_trapper = /** @type {(inputs: Ui_Domain_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traper`)
};

const pt_ui_domain_rank_trapper = /** @type {(inputs: Ui_Domain_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caçador`)
};

const ru_ui_domain_rank_trapper = /** @type {(inputs: Ui_Domain_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Охотник-ловчий`)
};

const sv_ui_domain_rank_trapper = /** @type {(inputs: Ui_Domain_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pälsjägare`)
};

const tr_ui_domain_rank_trapper = /** @type {(inputs: Ui_Domain_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tuzakçı`)
};

const zh_ui_domain_rank_trapper = /** @type {(inputs: Ui_Domain_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`猎人`)
};

const ja_ui_domain_rank_trapper = /** @type {(inputs: Ui_Domain_Rank_TrapperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`罠師`)
};

/**
* | output |
* | --- |
* | "Trapper" |
*
* @param {Ui_Domain_Rank_TrapperInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_rank_trapper = /** @type {((inputs?: Ui_Domain_Rank_TrapperInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Rank_TrapperInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_rank_trapper(inputs)
	if (locale === "de") return de_ui_domain_rank_trapper(inputs)
	if (locale === "fr") return fr_ui_domain_rank_trapper(inputs)
	if (locale === "it") return it_ui_domain_rank_trapper(inputs)
	if (locale === "nl") return nl_ui_domain_rank_trapper(inputs)
	if (locale === "pl") return pl_ui_domain_rank_trapper(inputs)
	if (locale === "pt") return pt_ui_domain_rank_trapper(inputs)
	if (locale === "ru") return ru_ui_domain_rank_trapper(inputs)
	if (locale === "sv") return sv_ui_domain_rank_trapper(inputs)
	if (locale === "tr") return tr_ui_domain_rank_trapper(inputs)
	if (locale === "zh") return zh_ui_domain_rank_trapper(inputs)
	if (locale === "ja") return ja_ui_domain_rank_trapper(inputs)
	return en_ui_domain_rank_trapper(inputs)
});
