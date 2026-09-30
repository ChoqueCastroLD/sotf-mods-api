/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ads_DescriptionInputs */

const en_admin_ads_description = /** @type {(inputs: Admin_Ads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google AdSense for visitors who accepted advertising cookies. Never on the console or downloads.`)
};

const es_admin_ads_description = /** @type {(inputs: Admin_Ads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google AdSense para los visitantes que aceptaron las cookies de publicidad. Nunca en la consola ni en las descargas.`)
};

const de_admin_ads_description = /** @type {(inputs: Admin_Ads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google AdSense für Besucher, die Werbe-Cookies akzeptiert haben. Nie in der Konsole oder bei Downloads.`)
};

const fr_admin_ads_description = /** @type {(inputs: Admin_Ads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google AdSense pour les visiteurs qui ont accepté les cookies publicitaires. Jamais dans la console ni sur les téléchargements.`)
};

const it_admin_ads_description = /** @type {(inputs: Admin_Ads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google AdSense per i visitatori che hanno accettato i cookie pubblicitari. Mai nella console né nei download.`)
};

const nl_admin_ads_description = /** @type {(inputs: Admin_Ads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google AdSense voor bezoekers die advertentiecookies hebben geaccepteerd. Nooit in de console of bij downloads.`)
};

const pl_admin_ads_description = /** @type {(inputs: Admin_Ads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google AdSense dla odwiedzających, którzy zaakceptowali ciasteczka reklamowe. Nigdy w konsoli ani przy pobieraniu.`)
};

const pt_admin_ads_description = /** @type {(inputs: Admin_Ads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google AdSense para visitantes que aceitaram os cookies de publicidade. Nunca no console nem nos downloads.`)
};

const ru_admin_ads_description = /** @type {(inputs: Admin_Ads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google AdSense для посетителей, принявших рекламные cookie. Никогда в консоли и на скачиваниях.`)
};

const sv_admin_ads_description = /** @type {(inputs: Admin_Ads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Google AdSense för besökare som godkänt annonscookies. Aldrig i konsolen eller vid nedladdningar.`)
};

const tr_admin_ads_description = /** @type {(inputs: Admin_Ads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reklam çerezlerini kabul eden ziyaretçiler için Google AdSense. Konsolda ve indirmelerde asla yok.`)
};

const zh_admin_ads_description = /** @type {(inputs: Admin_Ads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`面向接受了广告 Cookie 的访客的 Google AdSense。控制台和下载处绝不显示。`)
};

const ja_admin_ads_description = /** @type {(inputs: Admin_Ads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`広告 Cookie を承諾した訪問者向けの Google AdSense。コンソールとダウンロードには表示しません。`)
};

/**
* | output |
* | --- |
* | "Google AdSense for visitors who accepted advertising cookies. Never on the console or downloads." |
*
* @param {Admin_Ads_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ads_description = /** @type {((inputs?: Admin_Ads_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ads_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ads_description(inputs)
	if (locale === "de") return de_admin_ads_description(inputs)
	if (locale === "fr") return fr_admin_ads_description(inputs)
	if (locale === "it") return it_admin_ads_description(inputs)
	if (locale === "nl") return nl_admin_ads_description(inputs)
	if (locale === "pl") return pl_admin_ads_description(inputs)
	if (locale === "pt") return pt_admin_ads_description(inputs)
	if (locale === "ru") return ru_admin_ads_description(inputs)
	if (locale === "sv") return sv_admin_ads_description(inputs)
	if (locale === "tr") return tr_admin_ads_description(inputs)
	if (locale === "zh") return zh_admin_ads_description(inputs)
	if (locale === "ja") return ja_admin_ads_description(inputs)
	return en_admin_ads_description(inputs)
});
