/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ step: NonNullable<unknown> }} Content_Install_Step_NumberInputs */

const en_content_install_step_number = /** @type {(inputs: Content_Install_Step_NumberInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("en", i?.step, {});return /** @type {LocalizedString} */ (`Step ${step__number}:`)
};

const es_content_install_step_number = /** @type {(inputs: Content_Install_Step_NumberInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("es", i?.step, {});return /** @type {LocalizedString} */ (`Paso ${step__number}:`)
};

const de_content_install_step_number = /** @type {(inputs: Content_Install_Step_NumberInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("de", i?.step, {});return /** @type {LocalizedString} */ (`Schritt ${step__number}:`)
};

const fr_content_install_step_number = /** @type {(inputs: Content_Install_Step_NumberInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("fr", i?.step, {});return /** @type {LocalizedString} */ (`Étape ${step__number} :`)
};

const it_content_install_step_number = /** @type {(inputs: Content_Install_Step_NumberInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("it", i?.step, {});return /** @type {LocalizedString} */ (`Passaggio ${step__number}:`)
};

const nl_content_install_step_number = /** @type {(inputs: Content_Install_Step_NumberInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("nl", i?.step, {});return /** @type {LocalizedString} */ (`Stap ${step__number}:`)
};

const pl_content_install_step_number = /** @type {(inputs: Content_Install_Step_NumberInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("pl", i?.step, {});return /** @type {LocalizedString} */ (`Krok ${step__number}:`)
};

const pt_content_install_step_number = /** @type {(inputs: Content_Install_Step_NumberInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("pt", i?.step, {});return /** @type {LocalizedString} */ (`Passo ${step__number}:`)
};

const ru_content_install_step_number = /** @type {(inputs: Content_Install_Step_NumberInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("ru", i?.step, {});return /** @type {LocalizedString} */ (`Шаг ${step__number}:`)
};

const sv_content_install_step_number = /** @type {(inputs: Content_Install_Step_NumberInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("sv", i?.step, {});return /** @type {LocalizedString} */ (`Steg ${step__number}:`)
};

const tr_content_install_step_number = /** @type {(inputs: Content_Install_Step_NumberInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("tr", i?.step, {});return /** @type {LocalizedString} */ (`Adım ${step__number}:`)
};

const zh_content_install_step_number = /** @type {(inputs: Content_Install_Step_NumberInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("zh", i?.step, {});return /** @type {LocalizedString} */ (`第 ${step__number} 步：`)
};

const ja_content_install_step_number = /** @type {(inputs: Content_Install_Step_NumberInputs) => LocalizedString} */ (i) => {
	const step__number = registry.number("ja", i?.step, {});return /** @type {LocalizedString} */ (`手順 ${step__number}：`)
};

/**
* | output |
* | --- |
* | "Step {step__number}:" |
*
* @param {Content_Install_Step_NumberInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_install_step_number = /** @type {((inputs: Content_Install_Step_NumberInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Install_Step_NumberInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_install_step_number(inputs)
	if (locale === "de") return de_content_install_step_number(inputs)
	if (locale === "fr") return fr_content_install_step_number(inputs)
	if (locale === "it") return it_content_install_step_number(inputs)
	if (locale === "nl") return nl_content_install_step_number(inputs)
	if (locale === "pl") return pl_content_install_step_number(inputs)
	if (locale === "pt") return pt_content_install_step_number(inputs)
	if (locale === "ru") return ru_content_install_step_number(inputs)
	if (locale === "sv") return sv_content_install_step_number(inputs)
	if (locale === "tr") return tr_content_install_step_number(inputs)
	if (locale === "zh") return zh_content_install_step_number(inputs)
	if (locale === "ja") return ja_content_install_step_number(inputs)
	return en_content_install_step_number(inputs)
});
