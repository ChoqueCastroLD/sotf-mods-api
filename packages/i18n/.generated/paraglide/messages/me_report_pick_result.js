/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Report_Pick_ResultInputs */

const en_me_report_pick_result = /** @type {(inputs: Me_Report_Pick_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose how it went.`)
};

const es_me_report_pick_result = /** @type {(inputs: Me_Report_Pick_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige qué tal fue.`)
};

const de_me_report_pick_result = /** @type {(inputs: Me_Report_Pick_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle aus, wie es lief.`)
};

const fr_me_report_pick_result = /** @type {(inputs: Me_Report_Pick_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indiquez comment ça s’est passé.`)
};

const it_me_report_pick_result = /** @type {(inputs: Me_Report_Pick_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli com’è andata.`)
};

const nl_me_report_pick_result = /** @type {(inputs: Me_Report_Pick_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies hoe het ging.`)
};

const pl_me_report_pick_result = /** @type {(inputs: Me_Report_Pick_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz, jak poszło.`)
};

const pt_me_report_pick_result = /** @type {(inputs: Me_Report_Pick_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha como foi.`)
};

const ru_me_report_pick_result = /** @type {(inputs: Me_Report_Pick_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите, как прошло.`)
};

const sv_me_report_pick_result = /** @type {(inputs: Me_Report_Pick_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj hur det gick.`)
};

const tr_me_report_pick_result = /** @type {(inputs: Me_Report_Pick_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nasıl gittiğini seç.`)
};

const zh_me_report_pick_result = /** @type {(inputs: Me_Report_Pick_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请选择情况。`)
};

const ja_me_report_pick_result = /** @type {(inputs: Me_Report_Pick_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`結果を選んでください。`)
};

/**
* | output |
* | --- |
* | "Choose how it went." |
*
* @param {Me_Report_Pick_ResultInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_report_pick_result = /** @type {((inputs?: Me_Report_Pick_ResultInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Report_Pick_ResultInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_report_pick_result(inputs)
	if (locale === "de") return de_me_report_pick_result(inputs)
	if (locale === "fr") return fr_me_report_pick_result(inputs)
	if (locale === "it") return it_me_report_pick_result(inputs)
	if (locale === "nl") return nl_me_report_pick_result(inputs)
	if (locale === "pl") return pl_me_report_pick_result(inputs)
	if (locale === "pt") return pt_me_report_pick_result(inputs)
	if (locale === "ru") return ru_me_report_pick_result(inputs)
	if (locale === "sv") return sv_me_report_pick_result(inputs)
	if (locale === "tr") return tr_me_report_pick_result(inputs)
	if (locale === "zh") return zh_me_report_pick_result(inputs)
	if (locale === "ja") return ja_me_report_pick_result(inputs)
	return en_me_report_pick_result(inputs)
});
