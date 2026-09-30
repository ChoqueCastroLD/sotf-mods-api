/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_PurgeInputs */

const en_admin_ops_purge = /** @type {(inputs: Admin_Ops_PurgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Last CDN purge`)
};

const es_admin_ops_purge = /** @type {(inputs: Admin_Ops_PurgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Última purga de la CDN`)
};

const de_admin_ops_purge = /** @type {(inputs: Admin_Ops_PurgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Letzter CDN-Purge`)
};

const fr_admin_ops_purge = /** @type {(inputs: Admin_Ops_PurgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dernière purge du CDN`)
};

const it_admin_ops_purge = /** @type {(inputs: Admin_Ops_PurgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ultima purge della CDN`)
};

const nl_admin_ops_purge = /** @type {(inputs: Admin_Ops_PurgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laatste CDN-purge`)
};

const pl_admin_ops_purge = /** @type {(inputs: Admin_Ops_PurgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnie czyszczenie CDN`)
};

const pt_admin_ops_purge = /** @type {(inputs: Admin_Ops_PurgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Última purga da CDN`)
};

const ru_admin_ops_purge = /** @type {(inputs: Admin_Ops_PurgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Последняя очистка CDN`)
};

const sv_admin_ops_purge = /** @type {(inputs: Admin_Ops_PurgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste CDN-rensning`)
};

const tr_admin_ops_purge = /** @type {(inputs: Admin_Ops_PurgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son CDN temizleme`)
};

const zh_admin_ops_purge = /** @type {(inputs: Admin_Ops_PurgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上次 CDN 清除`)
};

const ja_admin_ops_purge = /** @type {(inputs: Admin_Ops_PurgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最後の CDN パージ`)
};

/**
* | output |
* | --- |
* | "Last CDN purge" |
*
* @param {Admin_Ops_PurgeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_purge = /** @type {((inputs?: Admin_Ops_PurgeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_PurgeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_purge(inputs)
	if (locale === "de") return de_admin_ops_purge(inputs)
	if (locale === "fr") return fr_admin_ops_purge(inputs)
	if (locale === "it") return it_admin_ops_purge(inputs)
	if (locale === "nl") return nl_admin_ops_purge(inputs)
	if (locale === "pl") return pl_admin_ops_purge(inputs)
	if (locale === "pt") return pt_admin_ops_purge(inputs)
	if (locale === "ru") return ru_admin_ops_purge(inputs)
	if (locale === "sv") return sv_admin_ops_purge(inputs)
	if (locale === "tr") return tr_admin_ops_purge(inputs)
	if (locale === "zh") return zh_admin_ops_purge(inputs)
	if (locale === "ja") return ja_admin_ops_purge(inputs)
	return en_admin_ops_purge(inputs)
});
