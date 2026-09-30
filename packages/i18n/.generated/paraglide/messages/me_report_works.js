/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Report_WorksInputs */

const en_me_report_works = /** @type {(inputs: Me_Report_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`It works`)
};

const es_me_report_works = /** @type {(inputs: Me_Report_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona`)
};

const de_me_report_works = /** @type {(inputs: Me_Report_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funktioniert`)
};

const fr_me_report_works = /** @type {(inputs: Me_Report_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ça marche`)
};

const it_me_report_works = /** @type {(inputs: Me_Report_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funziona`)
};

const nl_me_report_works = /** @type {(inputs: Me_Report_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het werkt`)
};

const pl_me_report_works = /** @type {(inputs: Me_Report_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działa`)
};

const pt_me_report_works = /** @type {(inputs: Me_Report_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona`)
};

const ru_me_report_works = /** @type {(inputs: Me_Report_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работает`)
};

const sv_me_report_works = /** @type {(inputs: Me_Report_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det fungerar`)
};

const tr_me_report_works = /** @type {(inputs: Me_Report_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çalışıyor`)
};

const zh_me_report_works = /** @type {(inputs: Me_Report_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可以用`)
};

const ja_me_report_works = /** @type {(inputs: Me_Report_WorksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動いた`)
};

/**
* | output |
* | --- |
* | "It works" |
*
* @param {Me_Report_WorksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_report_works = /** @type {((inputs?: Me_Report_WorksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Report_WorksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_report_works(inputs)
	if (locale === "de") return de_me_report_works(inputs)
	if (locale === "fr") return fr_me_report_works(inputs)
	if (locale === "it") return it_me_report_works(inputs)
	if (locale === "nl") return nl_me_report_works(inputs)
	if (locale === "pl") return pl_me_report_works(inputs)
	if (locale === "pt") return pt_me_report_works(inputs)
	if (locale === "ru") return ru_me_report_works(inputs)
	if (locale === "sv") return sv_me_report_works(inputs)
	if (locale === "tr") return tr_me_report_works(inputs)
	if (locale === "zh") return zh_me_report_works(inputs)
	if (locale === "ja") return ja_me_report_works(inputs)
	return en_me_report_works(inputs)
});
