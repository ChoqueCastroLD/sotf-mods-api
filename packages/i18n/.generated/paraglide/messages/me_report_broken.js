/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Report_BrokenInputs */

const en_me_report_broken = /** @type {(inputs: Me_Report_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`It’s broken`)
};

const es_me_report_broken = /** @type {(inputs: Me_Report_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Está roto`)
};

const de_me_report_broken = /** @type {(inputs: Me_Report_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaputt`)
};

const fr_me_report_broken = /** @type {(inputs: Me_Report_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`C’est cassé`)
};

const it_me_report_broken = /** @type {(inputs: Me_Report_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non funziona`)
};

const nl_me_report_broken = /** @type {(inputs: Me_Report_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het is kapot`)
};

const pl_me_report_broken = /** @type {(inputs: Me_Report_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie działa`)
};

const pt_me_report_broken = /** @type {(inputs: Me_Report_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Está quebrado`)
};

const ru_me_report_broken = /** @type {(inputs: Me_Report_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не работает`)
};

const sv_me_report_broken = /** @type {(inputs: Me_Report_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det är trasigt`)
};

const tr_me_report_broken = /** @type {(inputs: Me_Report_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bozuk`)
};

const zh_me_report_broken = /** @type {(inputs: Me_Report_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不能用`)
};

const ja_me_report_broken = /** @type {(inputs: Me_Report_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動かない`)
};

/**
* | output |
* | --- |
* | "It’s broken" |
*
* @param {Me_Report_BrokenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_report_broken = /** @type {((inputs?: Me_Report_BrokenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Report_BrokenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_report_broken(inputs)
	if (locale === "de") return de_me_report_broken(inputs)
	if (locale === "fr") return fr_me_report_broken(inputs)
	if (locale === "it") return it_me_report_broken(inputs)
	if (locale === "nl") return nl_me_report_broken(inputs)
	if (locale === "pl") return pl_me_report_broken(inputs)
	if (locale === "pt") return pt_me_report_broken(inputs)
	if (locale === "ru") return ru_me_report_broken(inputs)
	if (locale === "sv") return sv_me_report_broken(inputs)
	if (locale === "tr") return tr_me_report_broken(inputs)
	if (locale === "zh") return zh_me_report_broken(inputs)
	if (locale === "ja") return ja_me_report_broken(inputs)
	return en_me_report_broken(inputs)
});
