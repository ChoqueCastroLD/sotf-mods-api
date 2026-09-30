/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_StepsInputs */

const en_social_compat_steps = /** @type {(inputs: Social_Compat_StepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steps`)
};

const es_social_compat_steps = /** @type {(inputs: Social_Compat_StepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pasos`)
};

const de_social_compat_steps = /** @type {(inputs: Social_Compat_StepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schritte`)
};

const fr_social_compat_steps = /** @type {(inputs: Social_Compat_StepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Étapes`)
};

const it_social_compat_steps = /** @type {(inputs: Social_Compat_StepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passaggi`)
};

const nl_social_compat_steps = /** @type {(inputs: Social_Compat_StepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stappen`)
};

const pl_social_compat_steps = /** @type {(inputs: Social_Compat_StepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kroki`)
};

const pt_social_compat_steps = /** @type {(inputs: Social_Compat_StepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etapas`)
};

const ru_social_compat_steps = /** @type {(inputs: Social_Compat_StepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Шаги`)
};

const sv_social_compat_steps = /** @type {(inputs: Social_Compat_StepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steg`)
};

const tr_social_compat_steps = /** @type {(inputs: Social_Compat_StepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adımlar`)
};

const zh_social_compat_steps = /** @type {(inputs: Social_Compat_StepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`步骤`)
};

const ja_social_compat_steps = /** @type {(inputs: Social_Compat_StepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ステップ`)
};

/**
* | output |
* | --- |
* | "Steps" |
*
* @param {Social_Compat_StepsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_steps = /** @type {((inputs?: Social_Compat_StepsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_StepsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_steps(inputs)
	if (locale === "de") return de_social_compat_steps(inputs)
	if (locale === "fr") return fr_social_compat_steps(inputs)
	if (locale === "it") return it_social_compat_steps(inputs)
	if (locale === "nl") return nl_social_compat_steps(inputs)
	if (locale === "pl") return pl_social_compat_steps(inputs)
	if (locale === "pt") return pt_social_compat_steps(inputs)
	if (locale === "ru") return ru_social_compat_steps(inputs)
	if (locale === "sv") return sv_social_compat_steps(inputs)
	if (locale === "tr") return tr_social_compat_steps(inputs)
	if (locale === "zh") return zh_social_compat_steps(inputs)
	if (locale === "ja") return ja_social_compat_steps(inputs)
	return en_social_compat_steps(inputs)
});
