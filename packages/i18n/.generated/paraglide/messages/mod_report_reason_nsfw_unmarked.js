/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Report_Reason_Nsfw_UnmarkedInputs */

const en_mod_report_reason_nsfw_unmarked = /** @type {(inputs: Mod_Report_Reason_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adult content not marked 18+`)
};

const es_mod_report_reason_nsfw_unmarked = /** @type {(inputs: Mod_Report_Reason_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenido adulto sin marcar como +18`)
};

const de_mod_report_reason_nsfw_unmarked = /** @type {(inputs: Mod_Report_Reason_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erwachseneninhalt ohne Ab-18-Markierung`)
};

const fr_mod_report_reason_nsfw_unmarked = /** @type {(inputs: Mod_Report_Reason_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenu adulte non marqué 18+`)
};

const it_mod_report_reason_nsfw_unmarked = /** @type {(inputs: Mod_Report_Reason_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenuti per adulti non segnati 18+`)
};

const nl_mod_report_reason_nsfw_unmarked = /** @type {(inputs: Mod_Report_Reason_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhoud voor volwassenen zonder 18+-markering`)
};

const pl_mod_report_reason_nsfw_unmarked = /** @type {(inputs: Mod_Report_Reason_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Treści dla dorosłych bez oznaczenia 18+`)
};

const pt_mod_report_reason_nsfw_unmarked = /** @type {(inputs: Mod_Report_Reason_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conteúdo adulto sem marcação 18+`)
};

const ru_mod_report_reason_nsfw_unmarked = /** @type {(inputs: Mod_Report_Reason_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Контент для взрослых без отметки 18+`)
};

const sv_mod_report_reason_nsfw_unmarked = /** @type {(inputs: Mod_Report_Reason_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vuxeninnehåll utan 18+-märkning`)
};

const tr_mod_report_reason_nsfw_unmarked = /** @type {(inputs: Mod_Report_Reason_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18+ olarak işaretlenmemiş yetişkin içerik`)
};

const zh_mod_report_reason_nsfw_unmarked = /** @type {(inputs: Mod_Report_Reason_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成人内容未标记 18+`)
};

const ja_mod_report_reason_nsfw_unmarked = /** @type {(inputs: Mod_Report_Reason_Nsfw_UnmarkedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`18 歳以上の表示がない成人向けコンテンツ`)
};

/**
* | output |
* | --- |
* | "Adult content not marked 18+" |
*
* @param {Mod_Report_Reason_Nsfw_UnmarkedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_report_reason_nsfw_unmarked = /** @type {((inputs?: Mod_Report_Reason_Nsfw_UnmarkedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Report_Reason_Nsfw_UnmarkedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_report_reason_nsfw_unmarked(inputs)
	if (locale === "de") return de_mod_report_reason_nsfw_unmarked(inputs)
	if (locale === "fr") return fr_mod_report_reason_nsfw_unmarked(inputs)
	if (locale === "it") return it_mod_report_reason_nsfw_unmarked(inputs)
	if (locale === "nl") return nl_mod_report_reason_nsfw_unmarked(inputs)
	if (locale === "pl") return pl_mod_report_reason_nsfw_unmarked(inputs)
	if (locale === "pt") return pt_mod_report_reason_nsfw_unmarked(inputs)
	if (locale === "ru") return ru_mod_report_reason_nsfw_unmarked(inputs)
	if (locale === "sv") return sv_mod_report_reason_nsfw_unmarked(inputs)
	if (locale === "tr") return tr_mod_report_reason_nsfw_unmarked(inputs)
	if (locale === "zh") return zh_mod_report_reason_nsfw_unmarked(inputs)
	if (locale === "ja") return ja_mod_report_reason_nsfw_unmarked(inputs)
	return en_mod_report_reason_nsfw_unmarked(inputs)
});
