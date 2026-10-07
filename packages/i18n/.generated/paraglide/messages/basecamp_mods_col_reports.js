/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_Col_ReportsInputs */

const en_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To answer`)
};

const es_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por responder`)
};

const de_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zu beantworten`)
};

const fr_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À traiter`)
};

const it_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Da rispondere`)
};

const nl_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Te beantwoorden`)
};

const pl_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do odpowiedzi`)
};

const pt_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para responder`)
};

const ru_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ждут ответа`)
};

const sv_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Att besvara`)
};

const tr_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıt bekleyen`)
};

const zh_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`待回复`)
};

const ja_basecamp_mods_col_reports = /** @type {(inputs: Basecamp_Mods_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返信待ち`)
};

/**
* | output |
* | --- |
* | "To answer" |
*
* @param {Basecamp_Mods_Col_ReportsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_col_reports = /** @type {((inputs?: Basecamp_Mods_Col_ReportsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Col_ReportsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_col_reports(inputs)
	if (locale === "de") return de_basecamp_mods_col_reports(inputs)
	if (locale === "fr") return fr_basecamp_mods_col_reports(inputs)
	if (locale === "it") return it_basecamp_mods_col_reports(inputs)
	if (locale === "nl") return nl_basecamp_mods_col_reports(inputs)
	if (locale === "pl") return pl_basecamp_mods_col_reports(inputs)
	if (locale === "pt") return pt_basecamp_mods_col_reports(inputs)
	if (locale === "ru") return ru_basecamp_mods_col_reports(inputs)
	if (locale === "sv") return sv_basecamp_mods_col_reports(inputs)
	if (locale === "tr") return tr_basecamp_mods_col_reports(inputs)
	if (locale === "zh") return zh_basecamp_mods_col_reports(inputs)
	if (locale === "ja") return ja_basecamp_mods_col_reports(inputs)
	return en_basecamp_mods_col_reports(inputs)
});
