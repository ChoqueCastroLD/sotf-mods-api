/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Report_PartialInputs */

const en_me_report_partial = /** @type {(inputs: Me_Report_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partly`)
};

const es_me_report_partial = /** @type {(inputs: Me_Report_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A medias`)
};

const de_me_report_partial = /** @type {(inputs: Me_Report_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teilweise`)
};

const fr_me_report_partial = /** @type {(inputs: Me_Report_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En partie`)
};

const it_me_report_partial = /** @type {(inputs: Me_Report_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In parte`)
};

const nl_me_report_partial = /** @type {(inputs: Me_Report_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deels`)
};

const pl_me_report_partial = /** @type {(inputs: Me_Report_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Częściowo`)
};

const pt_me_report_partial = /** @type {(inputs: Me_Report_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em parte`)
};

const ru_me_report_partial = /** @type {(inputs: Me_Report_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Частично`)
};

const sv_me_report_partial = /** @type {(inputs: Me_Report_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delvis`)
};

const tr_me_report_partial = /** @type {(inputs: Me_Report_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kısmen`)
};

const zh_me_report_partial = /** @type {(inputs: Me_Report_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`部分可用`)
};

const ja_me_report_partial = /** @type {(inputs: Me_Report_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一部だけ`)
};

/**
* | output |
* | --- |
* | "Partly" |
*
* @param {Me_Report_PartialInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_report_partial = /** @type {((inputs?: Me_Report_PartialInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Report_PartialInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_report_partial(inputs)
	if (locale === "de") return de_me_report_partial(inputs)
	if (locale === "fr") return fr_me_report_partial(inputs)
	if (locale === "it") return it_me_report_partial(inputs)
	if (locale === "nl") return nl_me_report_partial(inputs)
	if (locale === "pl") return pl_me_report_partial(inputs)
	if (locale === "pt") return pt_me_report_partial(inputs)
	if (locale === "ru") return ru_me_report_partial(inputs)
	if (locale === "sv") return sv_me_report_partial(inputs)
	if (locale === "tr") return tr_me_report_partial(inputs)
	if (locale === "zh") return zh_me_report_partial(inputs)
	if (locale === "ja") return ja_me_report_partial(inputs)
	return en_me_report_partial(inputs)
});
