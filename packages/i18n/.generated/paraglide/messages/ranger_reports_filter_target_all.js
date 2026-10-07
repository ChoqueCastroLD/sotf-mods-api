/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Reports_Filter_Target_AllInputs */

const en_ranger_reports_filter_target_all = /** @type {(inputs: Ranger_Reports_Filter_Target_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Any content`)
};

const es_ranger_reports_filter_target_all = /** @type {(inputs: Ranger_Reports_Filter_Target_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cualquier contenido`)
};

const de_ranger_reports_filter_target_all = /** @type {(inputs: Ranger_Reports_Filter_Target_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeder Inhalt`)
};

const fr_ranger_reports_filter_target_all = /** @type {(inputs: Ranger_Reports_Filter_Target_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout contenu`)
};

const it_ranger_reports_filter_target_all = /** @type {(inputs: Ranger_Reports_Filter_Target_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualsiasi contenuto`)
};

const nl_ranger_reports_filter_target_all = /** @type {(inputs: Ranger_Reports_Filter_Target_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle inhoud`)
};

const pl_ranger_reports_filter_target_all = /** @type {(inputs: Ranger_Reports_Filter_Target_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dowolna treść`)
};

const pt_ranger_reports_filter_target_all = /** @type {(inputs: Ranger_Reports_Filter_Target_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualquer conteúdo`)
};

const ru_ranger_reports_filter_target_all = /** @type {(inputs: Ranger_Reports_Filter_Target_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Любой предмет`)
};

const sv_ranger_reports_filter_target_all = /** @type {(inputs: Ranger_Reports_Filter_Target_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allt innehåll`)
};

const tr_ranger_reports_filter_target_all = /** @type {(inputs: Ranger_Reports_Filter_Target_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm içerikler`)
};

const zh_ranger_reports_filter_target_all = /** @type {(inputs: Ranger_Reports_Filter_Target_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任意内容`)
};

const ja_ranger_reports_filter_target_all = /** @type {(inputs: Ranger_Reports_Filter_Target_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての内容`)
};

/**
* | output |
* | --- |
* | "Any content" |
*
* @param {Ranger_Reports_Filter_Target_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_reports_filter_target_all = /** @type {((inputs?: Ranger_Reports_Filter_Target_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Reports_Filter_Target_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_reports_filter_target_all(inputs)
	if (locale === "de") return de_ranger_reports_filter_target_all(inputs)
	if (locale === "fr") return fr_ranger_reports_filter_target_all(inputs)
	if (locale === "it") return it_ranger_reports_filter_target_all(inputs)
	if (locale === "nl") return nl_ranger_reports_filter_target_all(inputs)
	if (locale === "pl") return pl_ranger_reports_filter_target_all(inputs)
	if (locale === "pt") return pt_ranger_reports_filter_target_all(inputs)
	if (locale === "ru") return ru_ranger_reports_filter_target_all(inputs)
	if (locale === "sv") return sv_ranger_reports_filter_target_all(inputs)
	if (locale === "tr") return tr_ranger_reports_filter_target_all(inputs)
	if (locale === "zh") return zh_ranger_reports_filter_target_all(inputs)
	if (locale === "ja") return ja_ranger_reports_filter_target_all(inputs)
	return en_ranger_reports_filter_target_all(inputs)
});
