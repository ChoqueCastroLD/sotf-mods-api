/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Ad_NoticeInputs */

const en_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ads keep downloads free. Sign in to hide them.`)
};

const es_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los anuncios mantienen gratis las descargas. Inicia sesión para ocultarlos.`)
};

const de_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werbung hält die Downloads kostenlos. Melde dich an, um sie auszublenden.`)
};

const fr_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les publicités gardent les téléchargements gratuits. Connectez-vous pour les masquer.`)
};

const it_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La pubblicità mantiene gratuiti i download. Accedi per nasconderla.`)
};

const nl_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Advertenties houden downloads gratis. Log in om ze te verbergen.`)
};

const pl_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reklamy utrzymują darmowe pobieranie. Zaloguj się, aby je ukryć.`)
};

const pt_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os anúncios mantêm os downloads grátis. Entre para escondê-los.`)
};

const ru_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Реклама помогает сохранять скачивание бесплатным. Войдите, чтобы скрыть её.`)
};

const sv_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annonser håller nedladdningarna gratis. Logga in för att dölja dem.`)
};

const tr_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reklamlar indirmeleri ücretsiz tutar. Gizlemek için giriş yap.`)
};

const zh_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`广告让下载保持免费。登录即可隐藏广告。`)
};

const ja_ui_domain_ad_notice = /** @type {(inputs: Ui_Domain_Ad_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`広告のおかげでダウンロードは無料です。ログインすると非表示になります。`)
};

/**
* | output |
* | --- |
* | "Ads keep downloads free. Sign in to hide them." |
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
