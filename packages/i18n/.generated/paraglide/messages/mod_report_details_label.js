/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Report_Details_LabelInputs */

const en_mod_report_details_label = /** @type {(inputs: Mod_Report_Details_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details (optional)`)
};

const es_mod_report_details_label = /** @type {(inputs: Mod_Report_Details_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalles (opcional)`)
};

const de_mod_report_details_label = /** @type {(inputs: Mod_Report_Details_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details (optional)`)
};

const fr_mod_report_details_label = /** @type {(inputs: Mod_Report_Details_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Détails (facultatif)`)
};

const it_mod_report_details_label = /** @type {(inputs: Mod_Report_Details_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dettagli (facoltativo)`)
};

const nl_mod_report_details_label = /** @type {(inputs: Mod_Report_Details_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details (optioneel)`)
};

const pl_mod_report_details_label = /** @type {(inputs: Mod_Report_Details_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szczegóły (opcjonalnie)`)
};

const pt_mod_report_details_label = /** @type {(inputs: Mod_Report_Details_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalhes (opcional)`)
};

const ru_mod_report_details_label = /** @type {(inputs: Mod_Report_Details_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подробности (необязательно)`)
};

const sv_mod_report_details_label = /** @type {(inputs: Mod_Report_Details_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detaljer (valfritt)`)
};

const tr_mod_report_details_label = /** @type {(inputs: Mod_Report_Details_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayrıntılar (isteğe bağlı)`)
};

const zh_mod_report_details_label = /** @type {(inputs: Mod_Report_Details_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`详情（可选）`)
};

const ja_mod_report_details_label = /** @type {(inputs: Mod_Report_Details_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`詳細（任意）`)
};

/**
* | output |
* | --- |
* | "Details (optional)" |
*
* @param {Mod_Report_Details_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_report_details_label = /** @type {((inputs?: Mod_Report_Details_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Report_Details_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_report_details_label(inputs)
	if (locale === "de") return de_mod_report_details_label(inputs)
	if (locale === "fr") return fr_mod_report_details_label(inputs)
	if (locale === "it") return it_mod_report_details_label(inputs)
	if (locale === "nl") return nl_mod_report_details_label(inputs)
	if (locale === "pl") return pl_mod_report_details_label(inputs)
	if (locale === "pt") return pt_mod_report_details_label(inputs)
	if (locale === "ru") return ru_mod_report_details_label(inputs)
	if (locale === "sv") return sv_mod_report_details_label(inputs)
	if (locale === "tr") return tr_mod_report_details_label(inputs)
	if (locale === "zh") return zh_mod_report_details_label(inputs)
	if (locale === "ja") return ja_mod_report_details_label(inputs)
	return en_mod_report_details_label(inputs)
});
