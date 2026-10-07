/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Ad_NoticeInputs */

const en_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ads keep downloads free.`)
};

const es_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los anuncios mantienen las descargas gratis.`)
};

const de_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werbung hält die Downloads kostenlos.`)
};

const fr_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La publicité garde les téléchargements gratuits.`)
};

const it_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gli annunci mantengono gratuiti i download.`)
};

const nl_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Advertenties houden downloads gratis.`)
};

const pl_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reklamy pozwalają utrzymać darmowe pobieranie.`)
};

const pt_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os anúncios mantêm os downloads gratuitos.`)
};

const ru_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Реклама помогает сохранять загрузки бесплатными.`)
};

const sv_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annonser håller nedladdningarna gratis.`)
};

const tr_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reklamlar indirmeleri ücretsiz tutar.`)
};

const zh_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`广告让下载保持免费。`)
};

const ja_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`広告によってダウンロードは無料で提供されています。`)
};

/**
* | output |
* | --- |
* | "Ads keep downloads free." |
*
* @param {Ui_Domain_Ad_NoticeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_ad_notice = /** @type {((inputs?: Ui_Domain_Ad_NoticeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Ad_NoticeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_ad_notice(inputs)
	if (locale === "de") return de_ui_domain_ad_notice(inputs)
	if (locale === "fr") return fr_ui_domain_ad_notice(inputs)
	if (locale === "it") return it_ui_domain_ad_notice(inputs)
	if (locale === "nl") return nl_ui_domain_ad_notice(inputs)
	if (locale === "pl") return pl_ui_domain_ad_notice(inputs)
	if (locale === "pt") return pt_ui_domain_ad_notice(inputs)
	if (locale === "ru") return ru_ui_domain_ad_notice(inputs)
	if (locale === "sv") return sv_ui_domain_ad_notice(inputs)
	if (locale === "tr") return tr_ui_domain_ad_notice(inputs)
	if (locale === "zh") return zh_ui_domain_ad_notice(inputs)
	if (locale === "ja") return ja_ui_domain_ad_notice(inputs)
	return en_ui_domain_ad_notice(inputs)
});
