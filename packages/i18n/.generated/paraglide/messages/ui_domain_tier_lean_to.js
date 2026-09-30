/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Tier_Lean_ToInputs */

const en_ui_domain_tier_lean_to = /** @type {(inputs: Ui_Domain_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lean-to`)
};

const es_ui_domain_tier_lean_to = /** @type {(inputs: Ui_Domain_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Refugio`)
};

const de_ui_domain_tier_lean_to = /** @type {(inputs: Ui_Domain_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unterstand`)
};

const fr_ui_domain_tier_lean_to = /** @type {(inputs: Ui_Domain_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appentis`)
};

const it_ui_domain_tier_lean_to = /** @type {(inputs: Ui_Domain_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riparo`)
};

const nl_ui_domain_tier_lean_to = /** @type {(inputs: Ui_Domain_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afdak`)
};

const pl_ui_domain_tier_lean_to = /** @type {(inputs: Ui_Domain_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szałas`)
};

const pt_ui_domain_tier_lean_to = /** @type {(inputs: Ui_Domain_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrigo`)
};

const ru_ui_domain_tier_lean_to = /** @type {(inputs: Ui_Domain_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Навес`)
};

const sv_ui_domain_tier_lean_to = /** @type {(inputs: Ui_Domain_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vindskydd`)
};

const tr_ui_domain_tier_lean_to = /** @type {(inputs: Ui_Domain_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sundurma`)
};

const zh_ui_domain_tier_lean_to = /** @type {(inputs: Ui_Domain_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`窝棚`)
};

const ja_ui_domain_tier_lean_to = /** @type {(inputs: Ui_Domain_Tier_Lean_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`差しかけ小屋`)
};

/**
* | output |
* | --- |
* | "Lean-to" |
*
* @param {Ui_Domain_Tier_Lean_ToInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_tier_lean_to = /** @type {((inputs?: Ui_Domain_Tier_Lean_ToInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Tier_Lean_ToInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_tier_lean_to(inputs)
	if (locale === "de") return de_ui_domain_tier_lean_to(inputs)
	if (locale === "fr") return fr_ui_domain_tier_lean_to(inputs)
	if (locale === "it") return it_ui_domain_tier_lean_to(inputs)
	if (locale === "nl") return nl_ui_domain_tier_lean_to(inputs)
	if (locale === "pl") return pl_ui_domain_tier_lean_to(inputs)
	if (locale === "pt") return pt_ui_domain_tier_lean_to(inputs)
	if (locale === "ru") return ru_ui_domain_tier_lean_to(inputs)
	if (locale === "sv") return sv_ui_domain_tier_lean_to(inputs)
	if (locale === "tr") return tr_ui_domain_tier_lean_to(inputs)
	if (locale === "zh") return zh_ui_domain_tier_lean_to(inputs)
	if (locale === "ja") return ja_ui_domain_tier_lean_to(inputs)
	return en_ui_domain_tier_lean_to(inputs)
});
