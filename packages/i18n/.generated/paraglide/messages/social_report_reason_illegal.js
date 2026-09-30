/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Report_Reason_IllegalInputs */

const en_social_report_reason_illegal = /** @type {(inputs: Social_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Illegal content`)
};

const es_social_report_reason_illegal = /** @type {(inputs: Social_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenido ilegal`)
};

const de_social_report_reason_illegal = /** @type {(inputs: Social_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Illegale Inhalte`)
};

const fr_social_report_reason_illegal = /** @type {(inputs: Social_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenu illégal`)
};

const it_social_report_reason_illegal = /** @type {(inputs: Social_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenuti illegali`)
};

const nl_social_report_reason_illegal = /** @type {(inputs: Social_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Illegale inhoud`)
};

const pl_social_report_reason_illegal = /** @type {(inputs: Social_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nielegalne treści`)
};

const pt_social_report_reason_illegal = /** @type {(inputs: Social_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conteúdo ilegal`)
};

const ru_social_report_reason_illegal = /** @type {(inputs: Social_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Незаконный контент`)
};

const sv_social_report_reason_illegal = /** @type {(inputs: Social_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Olagligt innehåll`)
};

const tr_social_report_reason_illegal = /** @type {(inputs: Social_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yasa dışı içerik`)
};

const zh_social_report_reason_illegal = /** @type {(inputs: Social_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`违法内容`)
};

const ja_social_report_reason_illegal = /** @type {(inputs: Social_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`違法なコンテンツ`)
};

/**
* | output |
* | --- |
* | "Illegal content" |
*
* @param {Social_Report_Reason_IllegalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_report_reason_illegal = /** @type {((inputs?: Social_Report_Reason_IllegalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Report_Reason_IllegalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_report_reason_illegal(inputs)
	if (locale === "de") return de_social_report_reason_illegal(inputs)
	if (locale === "fr") return fr_social_report_reason_illegal(inputs)
	if (locale === "it") return it_social_report_reason_illegal(inputs)
	if (locale === "nl") return nl_social_report_reason_illegal(inputs)
	if (locale === "pl") return pl_social_report_reason_illegal(inputs)
	if (locale === "pt") return pt_social_report_reason_illegal(inputs)
	if (locale === "ru") return ru_social_report_reason_illegal(inputs)
	if (locale === "sv") return sv_social_report_reason_illegal(inputs)
	if (locale === "tr") return tr_social_report_reason_illegal(inputs)
	if (locale === "zh") return zh_social_report_reason_illegal(inputs)
	if (locale === "ja") return ja_social_report_reason_illegal(inputs)
	return en_social_report_reason_illegal(inputs)
});
