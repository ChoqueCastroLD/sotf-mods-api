/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Onboarding_Step_DoneInputs */

const en_me_onboarding_step_done = /** @type {(inputs: Me_Onboarding_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Done:`)
};

const es_me_onboarding_step_done = /** @type {(inputs: Me_Onboarding_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hecho:`)
};

const de_me_onboarding_step_done = /** @type {(inputs: Me_Onboarding_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erledigt:`)
};

const fr_me_onboarding_step_done = /** @type {(inputs: Me_Onboarding_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terminé :`)
};

const it_me_onboarding_step_done = /** @type {(inputs: Me_Onboarding_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fatto:`)
};

const nl_me_onboarding_step_done = /** @type {(inputs: Me_Onboarding_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klaar:`)
};

const pl_me_onboarding_step_done = /** @type {(inputs: Me_Onboarding_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zrobione:`)
};

const pt_me_onboarding_step_done = /** @type {(inputs: Me_Onboarding_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Concluído:`)
};

const ru_me_onboarding_step_done = /** @type {(inputs: Me_Onboarding_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Готово:`)
};

const sv_me_onboarding_step_done = /** @type {(inputs: Me_Onboarding_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klart:`)
};

const tr_me_onboarding_step_done = /** @type {(inputs: Me_Onboarding_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamam:`)
};

const zh_me_onboarding_step_done = /** @type {(inputs: Me_Onboarding_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已完成：`)
};

const ja_me_onboarding_step_done = /** @type {(inputs: Me_Onboarding_Step_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完了：`)
};

/**
* | output |
* | --- |
* | "Done:" |
*
* @param {Me_Onboarding_Step_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_step_done = /** @type {((inputs?: Me_Onboarding_Step_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_Step_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_step_done(inputs)
	if (locale === "de") return de_me_onboarding_step_done(inputs)
	if (locale === "fr") return fr_me_onboarding_step_done(inputs)
	if (locale === "it") return it_me_onboarding_step_done(inputs)
	if (locale === "nl") return nl_me_onboarding_step_done(inputs)
	if (locale === "pl") return pl_me_onboarding_step_done(inputs)
	if (locale === "pt") return pt_me_onboarding_step_done(inputs)
	if (locale === "ru") return ru_me_onboarding_step_done(inputs)
	if (locale === "sv") return sv_me_onboarding_step_done(inputs)
	if (locale === "tr") return tr_me_onboarding_step_done(inputs)
	if (locale === "zh") return zh_me_onboarding_step_done(inputs)
	if (locale === "ja") return ja_me_onboarding_step_done(inputs)
	return en_me_onboarding_step_done(inputs)
});
