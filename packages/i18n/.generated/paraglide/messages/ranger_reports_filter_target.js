/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Reports_Filter_TargetInputs */

const en_ranger_reports_filter_target = /** @type {(inputs: Ranger_Reports_Filter_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reported content`)
};

const es_ranger_reports_filter_target = /** @type {(inputs: Ranger_Reports_Filter_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenido reportado`)
};

const de_ranger_reports_filter_target = /** @type {(inputs: Ranger_Reports_Filter_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemeldeter Inhalt`)
};

const fr_ranger_reports_filter_target = /** @type {(inputs: Ranger_Reports_Filter_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenu signalé`)
};

const it_ranger_reports_filter_target = /** @type {(inputs: Ranger_Reports_Filter_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenuto segnalato`)
};

const nl_ranger_reports_filter_target = /** @type {(inputs: Ranger_Reports_Filter_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemelde inhoud`)
};

const pl_ranger_reports_filter_target = /** @type {(inputs: Ranger_Reports_Filter_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszona treść`)
};

const pt_ranger_reports_filter_target = /** @type {(inputs: Ranger_Reports_Filter_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conteúdo denunciado`)
};

const ru_ranger_reports_filter_target = /** @type {(inputs: Ranger_Reports_Filter_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предмет жалобы`)
};

const sv_ranger_reports_filter_target = /** @type {(inputs: Ranger_Reports_Filter_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmält innehåll`)
};

const tr_ranger_reports_filter_target = /** @type {(inputs: Ranger_Reports_Filter_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildirilen içerik`)
};

const zh_ranger_reports_filter_target = /** @type {(inputs: Ranger_Reports_Filter_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`被举报内容`)
};

const ja_ranger_reports_filter_target = /** @type {(inputs: Ranger_Reports_Filter_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告された内容`)
};

/**
* | output |
* | --- |
* | "Reported content" |
*
* @param {Ranger_Reports_Filter_TargetInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_reports_filter_target = /** @type {((inputs?: Ranger_Reports_Filter_TargetInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Reports_Filter_TargetInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_reports_filter_target(inputs)
	if (locale === "de") return de_ranger_reports_filter_target(inputs)
	if (locale === "fr") return fr_ranger_reports_filter_target(inputs)
	if (locale === "it") return it_ranger_reports_filter_target(inputs)
	if (locale === "nl") return nl_ranger_reports_filter_target(inputs)
	if (locale === "pl") return pl_ranger_reports_filter_target(inputs)
	if (locale === "pt") return pt_ranger_reports_filter_target(inputs)
	if (locale === "ru") return ru_ranger_reports_filter_target(inputs)
	if (locale === "sv") return sv_ranger_reports_filter_target(inputs)
	if (locale === "tr") return tr_ranger_reports_filter_target(inputs)
	if (locale === "zh") return zh_ranger_reports_filter_target(inputs)
	if (locale === "ja") return ja_ranger_reports_filter_target(inputs)
	return en_ranger_reports_filter_target(inputs)
});
