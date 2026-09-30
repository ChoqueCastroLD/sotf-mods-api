/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ step: NonNullable<unknown> }} Landing_Start_StepInputs */

const en_landing_start_step = /** @type {(inputs: Landing_Start_StepInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("en", i?.step, {});return /** @type {LocalizedString} */ (`Step ${step__number}`)
};

const es_landing_start_step = /** @type {(inputs: Landing_Start_StepInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("es", i?.step, {});return /** @type {LocalizedString} */ (`Paso ${step__number}`)
};

const de_landing_start_step = /** @type {(inputs: Landing_Start_StepInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("de", i?.step, {});return /** @type {LocalizedString} */ (`Schritt ${step__number}`)
};

const fr_landing_start_step = /** @type {(inputs: Landing_Start_StepInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("fr", i?.step, {});return /** @type {LocalizedString} */ (`Étape ${step__number}`)
};

const it_landing_start_step = /** @type {(inputs: Landing_Start_StepInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("it", i?.step, {});return /** @type {LocalizedString} */ (`Passaggio ${step__number}`)
};

const nl_landing_start_step = /** @type {(inputs: Landing_Start_StepInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("nl", i?.step, {});return /** @type {LocalizedString} */ (`Stap ${step__number}`)
};

const pl_landing_start_step = /** @type {(inputs: Landing_Start_StepInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("pl", i?.step, {});return /** @type {LocalizedString} */ (`Krok ${step__number}`)
};

const pt_landing_start_step = /** @type {(inputs: Landing_Start_StepInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("pt", i?.step, {});return /** @type {LocalizedString} */ (`Passo ${step__number}`)
};

const ru_landing_start_step = /** @type {(inputs: Landing_Start_StepInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("ru", i?.step, {});return /** @type {LocalizedString} */ (`Шаг ${step__number}`)
};

const sv_landing_start_step = /** @type {(inputs: Landing_Start_StepInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("sv", i?.step, {});return /** @type {LocalizedString} */ (`Steg ${step__number}`)
};

const tr_landing_start_step = /** @type {(inputs: Landing_Start_StepInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("tr", i?.step, {});return /** @type {LocalizedString} */ (`Adım ${step__number}`)
};

const zh_landing_start_step = /** @type {(inputs: Landing_Start_StepInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("zh", i?.step, {});return /** @type {LocalizedString} */ (`第 ${step__number} 步`)
};

const ja_landing_start_step = /** @type {(inputs: Landing_Start_StepInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("ja", i?.step, {});return /** @type {LocalizedString} */ (`ステップ ${step__number}`)
};

/**
* | output |
* | --- |
* | "Step {step__number}" |
*
* @param {Landing_Start_StepInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_start_step = /** @type {((inputs: Landing_Start_StepInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Start_StepInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_start_step(inputs)
	if (locale === "de") return de_landing_start_step(inputs)
	if (locale === "fr") return fr_landing_start_step(inputs)
	if (locale === "it") return it_landing_start_step(inputs)
	if (locale === "nl") return nl_landing_start_step(inputs)
	if (locale === "pl") return pl_landing_start_step(inputs)
	if (locale === "pt") return pt_landing_start_step(inputs)
	if (locale === "ru") return ru_landing_start_step(inputs)
	if (locale === "sv") return sv_landing_start_step(inputs)
	if (locale === "tr") return tr_landing_start_step(inputs)
	if (locale === "zh") return zh_landing_start_step(inputs)
	if (locale === "ja") return ja_landing_start_step(inputs)
	return en_landing_start_step(inputs)
});
