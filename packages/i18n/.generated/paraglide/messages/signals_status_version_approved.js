/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown>, mod: NonNullable<unknown> }} Signals_Status_Version_ApprovedInputs */

const en_signals_status_version_approved = /** @type {(inputs: Signals_Status_Version_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version} of ${i?.mod} was approved and is live`)
};

const es_signals_status_version_approved = /** @type {(inputs: Signals_Status_Version_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La versión ${i?.version} de ${i?.mod} se ha aprobado y ya está publicada`)
};

const de_signals_status_version_approved = /** @type {(inputs: Signals_Status_Version_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version} von ${i?.mod} wurde freigegeben und ist online`)
};

const fr_signals_status_version_approved = /** @type {(inputs: Signals_Status_Version_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La version ${i?.version} de ${i?.mod} a été approuvée et est en ligne`)
};

const it_signals_status_version_approved = /** @type {(inputs: Signals_Status_Version_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La versione ${i?.version} di ${i?.mod} è stata approvata ed è online`)
};

const nl_signals_status_version_approved = /** @type {(inputs: Signals_Status_Version_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versie ${i?.version} van ${i?.mod} is goedgekeurd en staat online`)
};

const pl_signals_status_version_approved = /** @type {(inputs: Signals_Status_Version_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wersja ${i?.version} (${i?.mod}) została zatwierdzona i jest dostępna`)
};

const pt_signals_status_version_approved = /** @type {(inputs: Signals_Status_Version_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A versão ${i?.version} de ${i?.mod} foi aprovada e já está no ar`)
};

const ru_signals_status_version_approved = /** @type {(inputs: Signals_Status_Version_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Версия ${i?.version} мода ${i?.mod} одобрена и опубликована`)
};

const sv_signals_status_version_approved = /** @type {(inputs: Signals_Status_Version_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version} av ${i?.mod} har godkänts och är publicerad`)
};

const tr_signals_status_version_approved = /** @type {(inputs: Signals_Status_Version_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} modunun ${i?.version} sürümü onaylandı ve yayında`)
};

const zh_signals_status_version_approved = /** @type {(inputs: Signals_Status_Version_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} 的 ${i?.version} 版本已通过审核并上线`)
};

const ja_signals_status_version_approved = /** @type {(inputs: Signals_Status_Version_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} のバージョン ${i?.version} が承認され、公開されました`)
};

/**
* | output |
* | --- |
* | "Version {version} of {mod} was approved and is live" |
*
* @param {Signals_Status_Version_ApprovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_status_version_approved = /** @type {((inputs: Signals_Status_Version_ApprovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Status_Version_ApprovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_status_version_approved(inputs)
	if (locale === "de") return de_signals_status_version_approved(inputs)
	if (locale === "fr") return fr_signals_status_version_approved(inputs)
	if (locale === "it") return it_signals_status_version_approved(inputs)
	if (locale === "nl") return nl_signals_status_version_approved(inputs)
	if (locale === "pl") return pl_signals_status_version_approved(inputs)
	if (locale === "pt") return pt_signals_status_version_approved(inputs)
	if (locale === "ru") return ru_signals_status_version_approved(inputs)
	if (locale === "sv") return sv_signals_status_version_approved(inputs)
	if (locale === "tr") return tr_signals_status_version_approved(inputs)
	if (locale === "zh") return zh_signals_status_version_approved(inputs)
	if (locale === "ja") return ja_signals_status_version_approved(inputs)
	return en_signals_status_version_approved(inputs)
});
