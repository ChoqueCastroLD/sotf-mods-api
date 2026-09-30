/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Col_QueuedInputs */

const en_admin_ops_col_queued = /** @type {(inputs: Admin_Ops_Col_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waiting`)
};

const es_admin_ops_col_queued = /** @type {(inputs: Admin_Ops_Col_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En espera`)
};

const de_admin_ops_col_queued = /** @type {(inputs: Admin_Ops_Col_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wartend`)
};

const fr_admin_ops_col_queued = /** @type {(inputs: Admin_Ops_Col_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En attente`)
};

const it_admin_ops_col_queued = /** @type {(inputs: Admin_Ops_Col_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In attesa`)
};

const nl_admin_ops_col_queued = /** @type {(inputs: Admin_Ops_Col_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachtend`)
};

const pl_admin_ops_col_queued = /** @type {(inputs: Admin_Ops_Col_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czekające`)
};

const pt_admin_ops_col_queued = /** @type {(inputs: Admin_Ops_Col_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na fila`)
};

const ru_admin_ops_col_queued = /** @type {(inputs: Admin_Ops_Col_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ждут`)
};

const sv_admin_ops_col_queued = /** @type {(inputs: Admin_Ops_Col_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Väntar`)
};

const tr_admin_ops_col_queued = /** @type {(inputs: Admin_Ops_Col_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekleyen`)
};

const zh_admin_ops_col_queued = /** @type {(inputs: Admin_Ops_Col_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`等待`)
};

const ja_admin_ops_col_queued = /** @type {(inputs: Admin_Ops_Col_QueuedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`待機`)
};

/**
* | output |
* | --- |
* | "Waiting" |
*
* @param {Admin_Ops_Col_QueuedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_col_queued = /** @type {((inputs?: Admin_Ops_Col_QueuedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Col_QueuedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_col_queued(inputs)
	if (locale === "de") return de_admin_ops_col_queued(inputs)
	if (locale === "fr") return fr_admin_ops_col_queued(inputs)
	if (locale === "it") return it_admin_ops_col_queued(inputs)
	if (locale === "nl") return nl_admin_ops_col_queued(inputs)
	if (locale === "pl") return pl_admin_ops_col_queued(inputs)
	if (locale === "pt") return pt_admin_ops_col_queued(inputs)
	if (locale === "ru") return ru_admin_ops_col_queued(inputs)
	if (locale === "sv") return sv_admin_ops_col_queued(inputs)
	if (locale === "tr") return tr_admin_ops_col_queued(inputs)
	if (locale === "zh") return zh_admin_ops_col_queued(inputs)
	if (locale === "ja") return ja_admin_ops_col_queued(inputs)
	return en_admin_ops_col_queued(inputs)
});
