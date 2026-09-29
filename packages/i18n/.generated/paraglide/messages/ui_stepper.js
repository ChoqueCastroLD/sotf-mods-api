/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_StepperInputs */

const en_ui_stepper = /** @type {(inputs: Ui_StepperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progress`)
};

const es_ui_stepper = /** @type {(inputs: Ui_StepperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progreso`)
};

const de_ui_stepper = /** @type {(inputs: Ui_StepperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortschritt`)
};

const fr_ui_stepper = /** @type {(inputs: Ui_StepperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progression`)
};

const it_ui_stepper = /** @type {(inputs: Ui_StepperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avanzamento`)
};

const nl_ui_stepper = /** @type {(inputs: Ui_StepperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voortgang`)
};

const pl_ui_stepper = /** @type {(inputs: Ui_StepperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Postęp`)
};

const pt_ui_stepper = /** @type {(inputs: Ui_StepperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progresso`)
};

const ru_ui_stepper = /** @type {(inputs: Ui_StepperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Прогресс`)
};

const sv_ui_stepper = /** @type {(inputs: Ui_StepperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förlopp`)
};

const tr_ui_stepper = /** @type {(inputs: Ui_StepperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlerleme`)
};

const zh_ui_stepper = /** @type {(inputs: Ui_StepperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`进度`)
};

const ja_ui_stepper = /** @type {(inputs: Ui_StepperInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`進行状況`)
};

/**
* | output |
* | --- |
* | "Progress" |
*
* @param {Ui_StepperInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_stepper = /** @type {((inputs?: Ui_StepperInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_StepperInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_stepper(inputs)
	if (locale === "de") return de_ui_stepper(inputs)
	if (locale === "fr") return fr_ui_stepper(inputs)
	if (locale === "it") return it_ui_stepper(inputs)
	if (locale === "nl") return nl_ui_stepper(inputs)
	if (locale === "pl") return pl_ui_stepper(inputs)
	if (locale === "pt") return pt_ui_stepper(inputs)
	if (locale === "ru") return ru_ui_stepper(inputs)
	if (locale === "sv") return sv_ui_stepper(inputs)
	if (locale === "tr") return tr_ui_stepper(inputs)
	if (locale === "zh") return zh_ui_stepper(inputs)
	if (locale === "ja") return ja_ui_stepper(inputs)
	return en_ui_stepper(inputs)
});
