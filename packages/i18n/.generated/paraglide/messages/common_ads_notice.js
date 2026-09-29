/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Ads_NoticeInputs */

const en_common_ads_notice = /** @type {(inputs: Common_Ads_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ads keep downloads free. Sign in to hide them.`)
};

const es_common_ads_notice = /** @type {(inputs: Common_Ads_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los anuncios mantienen gratis las descargas. Inicia sesión para ocultarlos.`)
};

const de_common_ads_notice = /** @type {(inputs: Common_Ads_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werbung hält die Downloads kostenlos. Melde dich an, um sie auszublenden.`)
};

const fr_common_ads_notice = /** @type {(inputs: Common_Ads_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les publicités gardent les téléchargements gratuits. Connectez-vous pour les masquer.`)
};

const it_common_ads_notice = /** @type {(inputs: Common_Ads_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La pubblicità mantiene gratuiti i download. Accedi per nasconderla.`)
};

const nl_common_ads_notice = /** @type {(inputs: Common_Ads_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Advertenties houden downloads gratis. Log in om ze te verbergen.`)
};

const pl_common_ads_notice = /** @type {(inputs: Common_Ads_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reklamy utrzymują darmowe pobieranie. Zaloguj się, aby je ukryć.`)
};

const pt_common_ads_notice = /** @type {(inputs: Common_Ads_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os anúncios mantêm os downloads grátis. Entre para escondê-los.`)
};

const ru_common_ads_notice = /** @type {(inputs: Common_Ads_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Реклама помогает сохранять скачивание бесплатным. Войдите, чтобы скрыть её.`)
};

const sv_common_ads_notice = /** @type {(inputs: Common_Ads_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annonser håller nedladdningarna gratis. Logga in för att dölja dem.`)
};

const tr_common_ads_notice = /** @type {(inputs: Common_Ads_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reklamlar indirmeleri ücretsiz tutar. Gizlemek için giriş yap.`)
};

const zh_common_ads_notice = /** @type {(inputs: Common_Ads_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`广告让下载保持免费。登录即可隐藏广告。`)
};

const ja_common_ads_notice = /** @type {(inputs: Common_Ads_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`広告のおかげでダウンロードは無料です。ログインすると非表示になります。`)
};

/**
* | output |
* | --- |
* | "Ads keep downloads free. Sign in to hide them." |
*
* @param {Common_Ads_NoticeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_ads_notice = /** @type {((inputs?: Common_Ads_NoticeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Ads_NoticeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_ads_notice(inputs)
	if (locale === "de") return de_common_ads_notice(inputs)
	if (locale === "fr") return fr_common_ads_notice(inputs)
	if (locale === "it") return it_common_ads_notice(inputs)
	if (locale === "nl") return nl_common_ads_notice(inputs)
	if (locale === "pl") return pl_common_ads_notice(inputs)
	if (locale === "pt") return pt_common_ads_notice(inputs)
	if (locale === "ru") return ru_common_ads_notice(inputs)
	if (locale === "sv") return sv_common_ads_notice(inputs)
	if (locale === "tr") return tr_common_ads_notice(inputs)
	if (locale === "zh") return zh_common_ads_notice(inputs)
	if (locale === "ja") return ja_common_ads_notice(inputs)
	return en_common_ads_notice(inputs)
});
