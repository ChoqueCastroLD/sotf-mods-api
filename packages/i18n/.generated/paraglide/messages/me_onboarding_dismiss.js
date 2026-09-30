/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Onboarding_DismissInputs */

const en_me_onboarding_dismiss = /** @type {(inputs: Me_Onboarding_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide`)
};

const es_me_onboarding_dismiss = /** @type {(inputs: Me_Onboarding_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar`)
};

const de_me_onboarding_dismiss = /** @type {(inputs: Me_Onboarding_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ausblenden`)
};

const fr_me_onboarding_dismiss = /** @type {(inputs: Me_Onboarding_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masquer`)
};

const it_me_onboarding_dismiss = /** @type {(inputs: Me_Onboarding_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nascondi`)
};

const nl_me_onboarding_dismiss = /** @type {(inputs: Me_Onboarding_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verbergen`)
};

const pl_me_onboarding_dismiss = /** @type {(inputs: Me_Onboarding_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukryj`)
};

const pt_me_onboarding_dismiss = /** @type {(inputs: Me_Onboarding_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar`)
};

const ru_me_onboarding_dismiss = /** @type {(inputs: Me_Onboarding_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыть`)
};

const sv_me_onboarding_dismiss = /** @type {(inputs: Me_Onboarding_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dölj`)
};

const tr_me_onboarding_dismiss = /** @type {(inputs: Me_Onboarding_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gizle`)
};

const zh_me_onboarding_dismiss = /** @type {(inputs: Me_Onboarding_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐藏`)
};

const ja_me_onboarding_dismiss = /** @type {(inputs: Me_Onboarding_DismissInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非表示`)
};

/**
* | output |
* | --- |
* | "Hide" |
*
* @param {Me_Onboarding_DismissInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_dismiss = /** @type {((inputs?: Me_Onboarding_DismissInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_DismissInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_dismiss(inputs)
	if (locale === "de") return de_me_onboarding_dismiss(inputs)
	if (locale === "fr") return fr_me_onboarding_dismiss(inputs)
	if (locale === "it") return it_me_onboarding_dismiss(inputs)
	if (locale === "nl") return nl_me_onboarding_dismiss(inputs)
	if (locale === "pl") return pl_me_onboarding_dismiss(inputs)
	if (locale === "pt") return pt_me_onboarding_dismiss(inputs)
	if (locale === "ru") return ru_me_onboarding_dismiss(inputs)
	if (locale === "sv") return sv_me_onboarding_dismiss(inputs)
	if (locale === "tr") return tr_me_onboarding_dismiss(inputs)
	if (locale === "zh") return zh_me_onboarding_dismiss(inputs)
	if (locale === "ja") return ja_me_onboarding_dismiss(inputs)
	return en_me_onboarding_dismiss(inputs)
});
