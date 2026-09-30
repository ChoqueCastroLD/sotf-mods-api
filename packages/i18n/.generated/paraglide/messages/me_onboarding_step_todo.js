/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Onboarding_Step_TodoInputs */

const en_me_onboarding_step_todo = /** @type {(inputs: Me_Onboarding_Step_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To do:`)
};

const es_me_onboarding_step_todo = /** @type {(inputs: Me_Onboarding_Step_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pendiente:`)
};

const de_me_onboarding_step_todo = /** @type {(inputs: Me_Onboarding_Step_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Offen:`)
};

const fr_me_onboarding_step_todo = /** @type {(inputs: Me_Onboarding_Step_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À faire :`)
};

const it_me_onboarding_step_todo = /** @type {(inputs: Me_Onboarding_Step_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Da fare:`)
};

const nl_me_onboarding_step_todo = /** @type {(inputs: Me_Onboarding_Step_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Te doen:`)
};

const pl_me_onboarding_step_todo = /** @type {(inputs: Me_Onboarding_Step_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do zrobienia:`)
};

const pt_me_onboarding_step_todo = /** @type {(inputs: Me_Onboarding_Step_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pendente:`)
};

const ru_me_onboarding_step_todo = /** @type {(inputs: Me_Onboarding_Step_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сделать:`)
};

const sv_me_onboarding_step_todo = /** @type {(inputs: Me_Onboarding_Step_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Att göra:`)
};

const tr_me_onboarding_step_todo = /** @type {(inputs: Me_Onboarding_Step_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapılacak:`)
};

const zh_me_onboarding_step_todo = /** @type {(inputs: Me_Onboarding_Step_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`待完成：`)
};

const ja_me_onboarding_step_todo = /** @type {(inputs: Me_Onboarding_Step_TodoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未完了：`)
};

/**
* | output |
* | --- |
* | "To do:" |
*
* @param {Me_Onboarding_Step_TodoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_step_todo = /** @type {((inputs?: Me_Onboarding_Step_TodoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_Step_TodoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_step_todo(inputs)
	if (locale === "de") return de_me_onboarding_step_todo(inputs)
	if (locale === "fr") return fr_me_onboarding_step_todo(inputs)
	if (locale === "it") return it_me_onboarding_step_todo(inputs)
	if (locale === "nl") return nl_me_onboarding_step_todo(inputs)
	if (locale === "pl") return pl_me_onboarding_step_todo(inputs)
	if (locale === "pt") return pt_me_onboarding_step_todo(inputs)
	if (locale === "ru") return ru_me_onboarding_step_todo(inputs)
	if (locale === "sv") return sv_me_onboarding_step_todo(inputs)
	if (locale === "tr") return tr_me_onboarding_step_todo(inputs)
	if (locale === "zh") return zh_me_onboarding_step_todo(inputs)
	if (locale === "ja") return ja_me_onboarding_step_todo(inputs)
	return en_me_onboarding_step_todo(inputs)
});
