/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown>, mod: NonNullable<unknown> }} Signals_Status_Version_RejectedInputs */

const en_signals_status_version_rejected = /** @type {(inputs: Signals_Status_Version_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version} of ${i?.mod} was not approved`)
};

const es_signals_status_version_rejected = /** @type {(inputs: Signals_Status_Version_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La versión ${i?.version} de ${i?.mod} no se ha aprobado`)
};

const de_signals_status_version_rejected = /** @type {(inputs: Signals_Status_Version_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version} von ${i?.mod} wurde nicht freigegeben`)
};

const fr_signals_status_version_rejected = /** @type {(inputs: Signals_Status_Version_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La version ${i?.version} de ${i?.mod} n’a pas été approuvée`)
};

const it_signals_status_version_rejected = /** @type {(inputs: Signals_Status_Version_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La versione ${i?.version} di ${i?.mod} non è stata approvata`)
};

const nl_signals_status_version_rejected = /** @type {(inputs: Signals_Status_Version_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versie ${i?.version} van ${i?.mod} is niet goedgekeurd`)
};

const pl_signals_status_version_rejected = /** @type {(inputs: Signals_Status_Version_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wersja ${i?.version} (${i?.mod}) nie została zatwierdzona`)
};

const pt_signals_status_version_rejected = /** @type {(inputs: Signals_Status_Version_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A versão ${i?.version} de ${i?.mod} não foi aprovada`)
};

const ru_signals_status_version_rejected = /** @type {(inputs: Signals_Status_Version_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Версия ${i?.version} мода ${i?.mod} не одобрена`)
};

const sv_signals_status_version_rejected = /** @type {(inputs: Signals_Status_Version_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version} av ${i?.mod} godkändes inte`)
};

const tr_signals_status_version_rejected = /** @type {(inputs: Signals_Status_Version_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} modunun ${i?.version} sürümü onaylanmadı`)
};

const zh_signals_status_version_rejected = /** @type {(inputs: Signals_Status_Version_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} 的 ${i?.version} 版本未通过审核`)
};

const ja_signals_status_version_rejected = /** @type {(inputs: Signals_Status_Version_RejectedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} のバージョン ${i?.version} は承認されませんでした`)
};

/**
* | output |
* | --- |
* | "Version {version} of {mod} was not approved" |
*
* @param {Signals_Status_Version_RejectedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_status_version_rejected = /** @type {((inputs: Signals_Status_Version_RejectedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Status_Version_RejectedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_status_version_rejected(inputs)
	if (locale === "de") return de_signals_status_version_rejected(inputs)
	if (locale === "fr") return fr_signals_status_version_rejected(inputs)
	if (locale === "it") return it_signals_status_version_rejected(inputs)
	if (locale === "nl") return nl_signals_status_version_rejected(inputs)
	if (locale === "pl") return pl_signals_status_version_rejected(inputs)
	if (locale === "pt") return pt_signals_status_version_rejected(inputs)
	if (locale === "ru") return ru_signals_status_version_rejected(inputs)
	if (locale === "sv") return sv_signals_status_version_rejected(inputs)
	if (locale === "tr") return tr_signals_status_version_rejected(inputs)
	if (locale === "zh") return zh_signals_status_version_rejected(inputs)
	if (locale === "ja") return ja_signals_status_version_rejected(inputs)
	return en_signals_status_version_rejected(inputs)
});
