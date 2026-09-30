/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Report_Choose_ReasonInputs */

const en_social_report_choose_reason = /** @type {(inputs: Social_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose a reason.`)
};

const es_social_report_choose_reason = /** @type {(inputs: Social_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige un motivo.`)
};

const de_social_report_choose_reason = /** @type {(inputs: Social_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle einen Grund.`)
};

const fr_social_report_choose_reason = /** @type {(inputs: Social_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez un motif.`)
};

const it_social_report_choose_reason = /** @type {(inputs: Social_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli un motivo.`)
};

const nl_social_report_choose_reason = /** @type {(inputs: Social_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies een reden.`)
};

const pl_social_report_choose_reason = /** @type {(inputs: Social_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz powód.`)
};

const pt_social_report_choose_reason = /** @type {(inputs: Social_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha um motivo.`)
};

const ru_social_report_choose_reason = /** @type {(inputs: Social_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите причину.`)
};

const sv_social_report_choose_reason = /** @type {(inputs: Social_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj en anledning.`)
};

const tr_social_report_choose_reason = /** @type {(inputs: Social_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir neden seç.`)
};

const zh_social_report_choose_reason = /** @type {(inputs: Social_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请选择一个原因。`)
};

const ja_social_report_choose_reason = /** @type {(inputs: Social_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`理由を選んでください。`)
};

/**
* | output |
* | --- |
* | "Choose a reason." |
*
* @param {Social_Report_Choose_ReasonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_report_choose_reason = /** @type {((inputs?: Social_Report_Choose_ReasonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Report_Choose_ReasonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_report_choose_reason(inputs)
	if (locale === "de") return de_social_report_choose_reason(inputs)
	if (locale === "fr") return fr_social_report_choose_reason(inputs)
	if (locale === "it") return it_social_report_choose_reason(inputs)
	if (locale === "nl") return nl_social_report_choose_reason(inputs)
	if (locale === "pl") return pl_social_report_choose_reason(inputs)
	if (locale === "pt") return pt_social_report_choose_reason(inputs)
	if (locale === "ru") return ru_social_report_choose_reason(inputs)
	if (locale === "sv") return sv_social_report_choose_reason(inputs)
	if (locale === "tr") return tr_social_report_choose_reason(inputs)
	if (locale === "zh") return zh_social_report_choose_reason(inputs)
	if (locale === "ja") return ja_social_report_choose_reason(inputs)
	return en_social_report_choose_reason(inputs)
});
