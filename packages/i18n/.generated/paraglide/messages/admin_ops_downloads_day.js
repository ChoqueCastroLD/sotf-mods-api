/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Downloads_DayInputs */

const en_admin_ops_downloads_day = /** @type {(inputs: Admin_Ops_Downloads_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads · last 24 h`)
};

const es_admin_ops_downloads_day = /** @type {(inputs: Admin_Ops_Downloads_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas · últimas 24 h`)
};

const de_admin_ops_downloads_day = /** @type {(inputs: Admin_Ops_Downloads_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads · letzte 24 h`)
};

const fr_admin_ops_downloads_day = /** @type {(inputs: Admin_Ops_Downloads_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements · dernières 24 h`)
};

const it_admin_ops_downloads_day = /** @type {(inputs: Admin_Ops_Downloads_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download · ultime 24 h`)
};

const nl_admin_ops_downloads_day = /** @type {(inputs: Admin_Ops_Downloads_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads · afgelopen 24 u`)
};

const pl_admin_ops_downloads_day = /** @type {(inputs: Admin_Ops_Downloads_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania · ostatnie 24 h`)
};

const pt_admin_ops_downloads_day = /** @type {(inputs: Admin_Ops_Downloads_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads · últimas 24 h`)
};

const ru_admin_ops_downloads_day = /** @type {(inputs: Admin_Ops_Downloads_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачивания · последние 24 ч`)
};

const sv_admin_ops_downloads_day = /** @type {(inputs: Admin_Ops_Downloads_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar · senaste 24 h`)
};

const tr_admin_ops_downloads_day = /** @type {(inputs: Admin_Ops_Downloads_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirmeler · son 24 sa`)
};

const zh_admin_ops_downloads_day = /** @type {(inputs: Admin_Ops_Downloads_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载 · 最近 24 小时`)
};

const ja_admin_ops_downloads_day = /** @type {(inputs: Admin_Ops_Downloads_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード · 直近 24 時間`)
};

/**
* | output |
* | --- |
* | "Downloads · last 24 h" |
*
* @param {Admin_Ops_Downloads_DayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_downloads_day = /** @type {((inputs?: Admin_Ops_Downloads_DayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Downloads_DayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_downloads_day(inputs)
	if (locale === "de") return de_admin_ops_downloads_day(inputs)
	if (locale === "fr") return fr_admin_ops_downloads_day(inputs)
	if (locale === "it") return it_admin_ops_downloads_day(inputs)
	if (locale === "nl") return nl_admin_ops_downloads_day(inputs)
	if (locale === "pl") return pl_admin_ops_downloads_day(inputs)
	if (locale === "pt") return pt_admin_ops_downloads_day(inputs)
	if (locale === "ru") return ru_admin_ops_downloads_day(inputs)
	if (locale === "sv") return sv_admin_ops_downloads_day(inputs)
	if (locale === "tr") return tr_admin_ops_downloads_day(inputs)
	if (locale === "zh") return zh_admin_ops_downloads_day(inputs)
	if (locale === "ja") return ja_admin_ops_downloads_day(inputs)
	return en_admin_ops_downloads_day(inputs)
});
