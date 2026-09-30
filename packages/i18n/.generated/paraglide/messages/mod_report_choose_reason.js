/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Report_Choose_ReasonInputs */

const en_mod_report_choose_reason = /** @type {(inputs: Mod_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose a reason.`)
};

const es_mod_report_choose_reason = /** @type {(inputs: Mod_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige un motivo.`)
};

const de_mod_report_choose_reason = /** @type {(inputs: Mod_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle einen Grund.`)
};

const fr_mod_report_choose_reason = /** @type {(inputs: Mod_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez un motif.`)
};

const it_mod_report_choose_reason = /** @type {(inputs: Mod_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli un motivo.`)
};

const nl_mod_report_choose_reason = /** @type {(inputs: Mod_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies een reden.`)
};

const pl_mod_report_choose_reason = /** @type {(inputs: Mod_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz powód.`)
};

const pt_mod_report_choose_reason = /** @type {(inputs: Mod_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha um motivo.`)
};

const ru_mod_report_choose_reason = /** @type {(inputs: Mod_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите причину.`)
};

const sv_mod_report_choose_reason = /** @type {(inputs: Mod_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj en anledning.`)
};

const tr_mod_report_choose_reason = /** @type {(inputs: Mod_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir neden seç.`)
};

const zh_mod_report_choose_reason = /** @type {(inputs: Mod_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请选择一个原因。`)
};

const ja_mod_report_choose_reason = /** @type {(inputs: Mod_Report_Choose_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`理由を選んでください。`)
};

/**
* | output |
* | --- |
* | "Choose a reason." |
*
* @param {Mod_Report_Choose_ReasonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_report_choose_reason = /** @type {((inputs?: Mod_Report_Choose_ReasonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Report_Choose_ReasonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_report_choose_reason(inputs)
	if (locale === "de") return de_mod_report_choose_reason(inputs)
	if (locale === "fr") return fr_mod_report_choose_reason(inputs)
	if (locale === "it") return it_mod_report_choose_reason(inputs)
	if (locale === "nl") return nl_mod_report_choose_reason(inputs)
	if (locale === "pl") return pl_mod_report_choose_reason(inputs)
	if (locale === "pt") return pt_mod_report_choose_reason(inputs)
	if (locale === "ru") return ru_mod_report_choose_reason(inputs)
	if (locale === "sv") return sv_mod_report_choose_reason(inputs)
	if (locale === "tr") return tr_mod_report_choose_reason(inputs)
	if (locale === "zh") return zh_mod_report_choose_reason(inputs)
	if (locale === "ja") return ja_mod_report_choose_reason(inputs)
	return en_mod_report_choose_reason(inputs)
});
