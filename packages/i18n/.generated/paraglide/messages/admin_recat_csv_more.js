/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Recat_Csv_MoreInputs */

const en_admin_recat_csv_more = /** @type {(inputs: Admin_Recat_Csv_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`…and ${i?.count} more.`)
};

const es_admin_recat_csv_more = /** @type {(inputs: Admin_Recat_Csv_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`…y ${i?.count} más.`)
};

const de_admin_recat_csv_more = /** @type {(inputs: Admin_Recat_Csv_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`… und ${i?.count} weitere.`)
};

const fr_admin_recat_csv_more = /** @type {(inputs: Admin_Recat_Csv_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`…et ${i?.count} de plus.`)
};

const it_admin_recat_csv_more = /** @type {(inputs: Admin_Recat_Csv_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`…e altre ${i?.count}.`)
};

const nl_admin_recat_csv_more = /** @type {(inputs: Admin_Recat_Csv_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`…en nog ${i?.count}.`)
};

const pl_admin_recat_csv_more = /** @type {(inputs: Admin_Recat_Csv_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`…i jeszcze ${i?.count}.`)
};

const pt_admin_recat_csv_more = /** @type {(inputs: Admin_Recat_Csv_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`…e mais ${i?.count}.`)
};

const ru_admin_recat_csv_more = /** @type {(inputs: Admin_Recat_Csv_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`…и ещё ${i?.count}.`)
};

const sv_admin_recat_csv_more = /** @type {(inputs: Admin_Recat_Csv_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`… och ${i?.count} till.`)
};

const tr_admin_recat_csv_more = /** @type {(inputs: Admin_Recat_Csv_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`…ve ${i?.count} tane daha.`)
};

const zh_admin_recat_csv_more = /** @type {(inputs: Admin_Recat_Csv_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`……还有 ${i?.count} 条。`)
};

const ja_admin_recat_csv_more = /** @type {(inputs: Admin_Recat_Csv_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`…ほか ${i?.count} 件。`)
};

/**
* | output |
* | --- |
* | "…and {count} more." |
*
* @param {Admin_Recat_Csv_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_csv_more = /** @type {((inputs: Admin_Recat_Csv_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Csv_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_csv_more(inputs)
	if (locale === "de") return de_admin_recat_csv_more(inputs)
	if (locale === "fr") return fr_admin_recat_csv_more(inputs)
	if (locale === "it") return it_admin_recat_csv_more(inputs)
	if (locale === "nl") return nl_admin_recat_csv_more(inputs)
	if (locale === "pl") return pl_admin_recat_csv_more(inputs)
	if (locale === "pt") return pt_admin_recat_csv_more(inputs)
	if (locale === "ru") return ru_admin_recat_csv_more(inputs)
	if (locale === "sv") return sv_admin_recat_csv_more(inputs)
	if (locale === "tr") return tr_admin_recat_csv_more(inputs)
	if (locale === "zh") return zh_admin_recat_csv_more(inputs)
	if (locale === "ja") return ja_admin_recat_csv_more(inputs)
	return en_admin_recat_csv_more(inputs)
});
