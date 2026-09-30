/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Report_Resolve_TitleInputs */

const en_ranger_report_resolve_title = /** @type {(inputs: Ranger_Report_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resolve the report`)
};

const es_ranger_report_resolve_title = /** @type {(inputs: Ranger_Report_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resolver el reporte`)
};

const de_ranger_report_resolve_title = /** @type {(inputs: Ranger_Report_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldung erledigen`)
};

const fr_ranger_report_resolve_title = /** @type {(inputs: Ranger_Report_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Résoudre le signalement`)
};

const it_ranger_report_resolve_title = /** @type {(inputs: Ranger_Report_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risolvi la segnalazione`)
};

const nl_ranger_report_resolve_title = /** @type {(inputs: Ranger_Report_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De melding afhandelen`)
};

const pl_ranger_report_resolve_title = /** @type {(inputs: Ranger_Report_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozwiąż zgłoszenie`)
};

const pt_ranger_report_resolve_title = /** @type {(inputs: Ranger_Report_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resolver a denúncia`)
};

const ru_ranger_report_resolve_title = /** @type {(inputs: Ranger_Report_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Решить жалобу`)
};

const sv_ranger_report_resolve_title = /** @type {(inputs: Ranger_Report_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lös anmälan`)
};

const tr_ranger_report_resolve_title = /** @type {(inputs: Ranger_Report_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şikâyeti çöz`)
};

const zh_ranger_report_resolve_title = /** @type {(inputs: Ranger_Report_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`解决举报`)
};

const ja_ranger_report_resolve_title = /** @type {(inputs: Ranger_Report_Resolve_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告を解決`)
};

/**
* | output |
* | --- |
* | "Resolve the report" |
*
* @param {Ranger_Report_Resolve_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_report_resolve_title = /** @type {((inputs?: Ranger_Report_Resolve_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_Resolve_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_report_resolve_title(inputs)
	if (locale === "de") return de_ranger_report_resolve_title(inputs)
	if (locale === "fr") return fr_ranger_report_resolve_title(inputs)
	if (locale === "it") return it_ranger_report_resolve_title(inputs)
	if (locale === "nl") return nl_ranger_report_resolve_title(inputs)
	if (locale === "pl") return pl_ranger_report_resolve_title(inputs)
	if (locale === "pt") return pt_ranger_report_resolve_title(inputs)
	if (locale === "ru") return ru_ranger_report_resolve_title(inputs)
	if (locale === "sv") return sv_ranger_report_resolve_title(inputs)
	if (locale === "tr") return tr_ranger_report_resolve_title(inputs)
	if (locale === "zh") return zh_ranger_report_resolve_title(inputs)
	if (locale === "ja") return ja_ranger_report_resolve_title(inputs)
	return en_ranger_report_resolve_title(inputs)
});
