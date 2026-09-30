/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Downloads_HourInputs */

const en_admin_ops_downloads_hour = /** @type {(inputs: Admin_Ops_Downloads_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads · last hour`)
};

const es_admin_ops_downloads_hour = /** @type {(inputs: Admin_Ops_Downloads_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas · última hora`)
};

const de_admin_ops_downloads_hour = /** @type {(inputs: Admin_Ops_Downloads_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads · letzte Stunde`)
};

const fr_admin_ops_downloads_hour = /** @type {(inputs: Admin_Ops_Downloads_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements · dernière heure`)
};

const it_admin_ops_downloads_hour = /** @type {(inputs: Admin_Ops_Downloads_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download · ultima ora`)
};

const nl_admin_ops_downloads_hour = /** @type {(inputs: Admin_Ops_Downloads_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads · afgelopen uur`)
};

const pl_admin_ops_downloads_hour = /** @type {(inputs: Admin_Ops_Downloads_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania · ostatnia godzina`)
};

const pt_admin_ops_downloads_hour = /** @type {(inputs: Admin_Ops_Downloads_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads · última hora`)
};

const ru_admin_ops_downloads_hour = /** @type {(inputs: Admin_Ops_Downloads_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачивания · последний час`)
};

const sv_admin_ops_downloads_hour = /** @type {(inputs: Admin_Ops_Downloads_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar · senaste timmen`)
};

const tr_admin_ops_downloads_hour = /** @type {(inputs: Admin_Ops_Downloads_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirmeler · son saat`)
};

const zh_admin_ops_downloads_hour = /** @type {(inputs: Admin_Ops_Downloads_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载 · 最近 1 小时`)
};

const ja_admin_ops_downloads_hour = /** @type {(inputs: Admin_Ops_Downloads_HourInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード · 直近 1 時間`)
};

/**
* | output |
* | --- |
* | "Downloads · last hour" |
*
* @param {Admin_Ops_Downloads_HourInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_downloads_hour = /** @type {((inputs?: Admin_Ops_Downloads_HourInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Downloads_HourInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_downloads_hour(inputs)
	if (locale === "de") return de_admin_ops_downloads_hour(inputs)
	if (locale === "fr") return fr_admin_ops_downloads_hour(inputs)
	if (locale === "it") return it_admin_ops_downloads_hour(inputs)
	if (locale === "nl") return nl_admin_ops_downloads_hour(inputs)
	if (locale === "pl") return pl_admin_ops_downloads_hour(inputs)
	if (locale === "pt") return pt_admin_ops_downloads_hour(inputs)
	if (locale === "ru") return ru_admin_ops_downloads_hour(inputs)
	if (locale === "sv") return sv_admin_ops_downloads_hour(inputs)
	if (locale === "tr") return tr_admin_ops_downloads_hour(inputs)
	if (locale === "zh") return zh_admin_ops_downloads_hour(inputs)
	if (locale === "ja") return ja_admin_ops_downloads_hour(inputs)
	return en_admin_ops_downloads_hour(inputs)
});
