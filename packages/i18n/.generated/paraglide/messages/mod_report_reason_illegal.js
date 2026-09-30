/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Report_Reason_IllegalInputs */

const en_mod_report_reason_illegal = /** @type {(inputs: Mod_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Illegal content`)
};

const es_mod_report_reason_illegal = /** @type {(inputs: Mod_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenido ilegal`)
};

const de_mod_report_reason_illegal = /** @type {(inputs: Mod_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Illegale Inhalte`)
};

const fr_mod_report_reason_illegal = /** @type {(inputs: Mod_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenu illégal`)
};

const it_mod_report_reason_illegal = /** @type {(inputs: Mod_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenuti illegali`)
};

const nl_mod_report_reason_illegal = /** @type {(inputs: Mod_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Illegale inhoud`)
};

const pl_mod_report_reason_illegal = /** @type {(inputs: Mod_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nielegalne treści`)
};

const pt_mod_report_reason_illegal = /** @type {(inputs: Mod_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conteúdo ilegal`)
};

const ru_mod_report_reason_illegal = /** @type {(inputs: Mod_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Незаконный контент`)
};

const sv_mod_report_reason_illegal = /** @type {(inputs: Mod_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Olagligt innehåll`)
};

const tr_mod_report_reason_illegal = /** @type {(inputs: Mod_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yasa dışı içerik`)
};

const zh_mod_report_reason_illegal = /** @type {(inputs: Mod_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`违法内容`)
};

const ja_mod_report_reason_illegal = /** @type {(inputs: Mod_Report_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`違法なコンテンツ`)
};

/**
* | output |
* | --- |
* | "Illegal content" |
*
* @param {Mod_Report_Reason_IllegalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_report_reason_illegal = /** @type {((inputs?: Mod_Report_Reason_IllegalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Report_Reason_IllegalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_report_reason_illegal(inputs)
	if (locale === "de") return de_mod_report_reason_illegal(inputs)
	if (locale === "fr") return fr_mod_report_reason_illegal(inputs)
	if (locale === "it") return it_mod_report_reason_illegal(inputs)
	if (locale === "nl") return nl_mod_report_reason_illegal(inputs)
	if (locale === "pl") return pl_mod_report_reason_illegal(inputs)
	if (locale === "pt") return pt_mod_report_reason_illegal(inputs)
	if (locale === "ru") return ru_mod_report_reason_illegal(inputs)
	if (locale === "sv") return sv_mod_report_reason_illegal(inputs)
	if (locale === "tr") return tr_mod_report_reason_illegal(inputs)
	if (locale === "zh") return zh_mod_report_reason_illegal(inputs)
	if (locale === "ja") return ja_mod_report_reason_illegal(inputs)
	return en_mod_report_reason_illegal(inputs)
});
