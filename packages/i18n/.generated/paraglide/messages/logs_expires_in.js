/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ time: NonNullable<unknown> }} Logs_Expires_InInputs */

const en_logs_expires_in = /** @type {(inputs: Logs_Expires_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Deleted in ${i?.time}`)
};

const es_logs_expires_in = /** @type {(inputs: Logs_Expires_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Se borra en ${i?.time}`)
};

const de_logs_expires_in = /** @type {(inputs: Logs_Expires_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wird gelöscht in ${i?.time}`)
};

const fr_logs_expires_in = /** @type {(inputs: Logs_Expires_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Supprimé dans ${i?.time}`)
};

const it_logs_expires_in = /** @type {(inputs: Logs_Expires_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Eliminato tra ${i?.time}`)
};

const nl_logs_expires_in = /** @type {(inputs: Logs_Expires_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wordt verwijderd over ${i?.time}`)
};

const pl_logs_expires_in = /** @type {(inputs: Logs_Expires_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zostanie usunięty za ${i?.time}`)
};

const pt_logs_expires_in = /** @type {(inputs: Logs_Expires_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Apagado em ${i?.time}`)
};

const ru_logs_expires_in = /** @type {(inputs: Logs_Expires_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Удалится через ${i?.time}`)
};

const sv_logs_expires_in = /** @type {(inputs: Logs_Expires_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Raderas om ${i?.time}`)
};

const tr_logs_expires_in = /** @type {(inputs: Logs_Expires_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} sonra silinecek`)
};

const zh_logs_expires_in = /** @type {(inputs: Logs_Expires_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`将在 ${i?.time} 后删除`)
};

const ja_logs_expires_in = /** @type {(inputs: Logs_Expires_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} 後に削除`)
};

/**
* | output |
* | --- |
* | "Deleted in {time}" |
*
* @param {Logs_Expires_InInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_expires_in = /** @type {((inputs: Logs_Expires_InInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Expires_InInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_expires_in(inputs)
	if (locale === "de") return de_logs_expires_in(inputs)
	if (locale === "fr") return fr_logs_expires_in(inputs)
	if (locale === "it") return it_logs_expires_in(inputs)
	if (locale === "nl") return nl_logs_expires_in(inputs)
	if (locale === "pl") return pl_logs_expires_in(inputs)
	if (locale === "pt") return pt_logs_expires_in(inputs)
	if (locale === "ru") return ru_logs_expires_in(inputs)
	if (locale === "sv") return sv_logs_expires_in(inputs)
	if (locale === "tr") return tr_logs_expires_in(inputs)
	if (locale === "zh") return zh_logs_expires_in(inputs)
	if (locale === "ja") return ja_logs_expires_in(inputs)
	return en_logs_expires_in(inputs)
});
