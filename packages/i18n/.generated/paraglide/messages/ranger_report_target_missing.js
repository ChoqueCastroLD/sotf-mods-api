/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ type: NonNullable<unknown>, id: NonNullable<unknown> }} Ranger_Report_Target_MissingInputs */

const en_ranger_report_target_missing = /** @type {(inputs: Ranger_Report_Target_MissingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} #${i?.id} (no longer exists)`)
};

const es_ranger_report_target_missing = /** @type {(inputs: Ranger_Report_Target_MissingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} n.º ${i?.id} (ya no existe)`)
};

const de_ranger_report_target_missing = /** @type {(inputs: Ranger_Report_Target_MissingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} Nr. ${i?.id} (existiert nicht mehr)`)
};

const fr_ranger_report_target_missing = /** @type {(inputs: Ranger_Report_Target_MissingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} nº ${i?.id} (n’existe plus)`)
};

const it_ranger_report_target_missing = /** @type {(inputs: Ranger_Report_Target_MissingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} n. ${i?.id} (non esiste più)`)
};

const nl_ranger_report_target_missing = /** @type {(inputs: Ranger_Report_Target_MissingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} nr. ${i?.id} (bestaat niet meer)`)
};

const pl_ranger_report_target_missing = /** @type {(inputs: Ranger_Report_Target_MissingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} nr ${i?.id} (już nie istnieje)`)
};

const pt_ranger_report_target_missing = /** @type {(inputs: Ranger_Report_Target_MissingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} nº ${i?.id} (não existe mais)`)
};

const ru_ranger_report_target_missing = /** @type {(inputs: Ranger_Report_Target_MissingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} № ${i?.id} (больше не существует)`)
};

const sv_ranger_report_target_missing = /** @type {(inputs: Ranger_Report_Target_MissingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} nr ${i?.id} (finns inte längre)`)
};

const tr_ranger_report_target_missing = /** @type {(inputs: Ranger_Report_Target_MissingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} #${i?.id} (artık yok)`)
};

const zh_ranger_report_target_missing = /** @type {(inputs: Ranger_Report_Target_MissingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} #${i?.id}（已不存在）`)
};

const ja_ranger_report_target_missing = /** @type {(inputs: Ranger_Report_Target_MissingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} #${i?.id}（存在しません）`)
};

/**
* | output |
* | --- |
* | "{type} #{id} (no longer exists)" |
*
* @param {Ranger_Report_Target_MissingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_report_target_missing = /** @type {((inputs: Ranger_Report_Target_MissingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_Target_MissingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_report_target_missing(inputs)
	if (locale === "de") return de_ranger_report_target_missing(inputs)
	if (locale === "fr") return fr_ranger_report_target_missing(inputs)
	if (locale === "it") return it_ranger_report_target_missing(inputs)
	if (locale === "nl") return nl_ranger_report_target_missing(inputs)
	if (locale === "pl") return pl_ranger_report_target_missing(inputs)
	if (locale === "pt") return pt_ranger_report_target_missing(inputs)
	if (locale === "ru") return ru_ranger_report_target_missing(inputs)
	if (locale === "sv") return sv_ranger_report_target_missing(inputs)
	if (locale === "tr") return tr_ranger_report_target_missing(inputs)
	if (locale === "zh") return zh_ranger_report_target_missing(inputs)
	if (locale === "ja") return ja_ranger_report_target_missing(inputs)
	return en_ranger_report_target_missing(inputs)
});
