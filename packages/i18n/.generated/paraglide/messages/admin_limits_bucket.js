/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Limits_BucketInputs */

const en_admin_limits_bucket = /** @type {(inputs: Admin_Limits_BucketInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bucket`)
};

const es_admin_limits_bucket = /** @type {(inputs: Admin_Limits_BucketInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grupo`)
};

const de_admin_limits_bucket = /** @type {(inputs: Admin_Limits_BucketInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bereich`)
};

const fr_admin_limits_bucket = /** @type {(inputs: Admin_Limits_BucketInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Groupe`)
};

const it_admin_limits_bucket = /** @type {(inputs: Admin_Limits_BucketInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gruppo`)
};

const nl_admin_limits_bucket = /** @type {(inputs: Admin_Limits_BucketInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Groep`)
};

const pl_admin_limits_bucket = /** @type {(inputs: Admin_Limits_BucketInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grupa`)
};

const pt_admin_limits_bucket = /** @type {(inputs: Admin_Limits_BucketInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grupo`)
};

const ru_admin_limits_bucket = /** @type {(inputs: Admin_Limits_BucketInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Группа`)
};

const sv_admin_limits_bucket = /** @type {(inputs: Admin_Limits_BucketInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grupp`)
};

const tr_admin_limits_bucket = /** @type {(inputs: Admin_Limits_BucketInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grup`)
};

const zh_admin_limits_bucket = /** @type {(inputs: Admin_Limits_BucketInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分组`)
};

const ja_admin_limits_bucket = /** @type {(inputs: Admin_Limits_BucketInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`グループ`)
};

/**
* | output |
* | --- |
* | "Bucket" |
*
* @param {Admin_Limits_BucketInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_limits_bucket = /** @type {((inputs?: Admin_Limits_BucketInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Limits_BucketInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_limits_bucket(inputs)
	if (locale === "de") return de_admin_limits_bucket(inputs)
	if (locale === "fr") return fr_admin_limits_bucket(inputs)
	if (locale === "it") return it_admin_limits_bucket(inputs)
	if (locale === "nl") return nl_admin_limits_bucket(inputs)
	if (locale === "pl") return pl_admin_limits_bucket(inputs)
	if (locale === "pt") return pt_admin_limits_bucket(inputs)
	if (locale === "ru") return ru_admin_limits_bucket(inputs)
	if (locale === "sv") return sv_admin_limits_bucket(inputs)
	if (locale === "tr") return tr_admin_limits_bucket(inputs)
	if (locale === "zh") return zh_admin_limits_bucket(inputs)
	if (locale === "ja") return ja_admin_limits_bucket(inputs)
	return en_admin_limits_bucket(inputs)
});
