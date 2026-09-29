/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Consent_TextInputs */

const en_common_consent_text = /** @type {(inputs: Common_Consent_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We use cookies for ads and anonymous stats. Downloads work either way.`)
};

const es_common_consent_text = /** @type {(inputs: Common_Consent_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usamos cookies para anuncios y estadísticas anónimas. Las descargas funcionan igual.`)
};

const de_common_consent_text = /** @type {(inputs: Common_Consent_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wir nutzen Cookies für Werbung und anonyme Statistiken. Downloads funktionieren so oder so.`)
};

const fr_common_consent_text = /** @type {(inputs: Common_Consent_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nous utilisons des cookies pour la publicité et des statistiques anonymes. Les téléchargements fonctionnent dans tous les cas.`)
};

const it_common_consent_text = /** @type {(inputs: Common_Consent_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usiamo i cookie per la pubblicità e per statistiche anonime. I download funzionano comunque.`)
};

const nl_common_consent_text = /** @type {(inputs: Common_Consent_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We gebruiken cookies voor advertenties en anonieme statistieken. Downloads werken hoe dan ook.`)
};

const pl_common_consent_text = /** @type {(inputs: Common_Consent_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Używamy plików cookie do reklam i anonimowych statystyk. Pobieranie działa tak czy inaczej.`)
};

const pt_common_consent_text = /** @type {(inputs: Common_Consent_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usamos cookies para anúncios e estatísticas anônimas. Os downloads funcionam de qualquer jeito.`)
};

const ru_common_consent_text = /** @type {(inputs: Common_Consent_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мы используем файлы cookie для рекламы и анонимной статистики. Скачивание работает в любом случае.`)
};

const sv_common_consent_text = /** @type {(inputs: Common_Consent_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vi använder cookies för annonser och anonym statistik. Nedladdningar fungerar oavsett.`)
};

const tr_common_consent_text = /** @type {(inputs: Common_Consent_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reklamlar ve anonim istatistikler için çerez kullanıyoruz. İndirmeler her durumda çalışır.`)
};

const zh_common_consent_text = /** @type {(inputs: Common_Consent_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我们使用 Cookie 投放广告并进行匿名统计。无论如何，下载都不受影响。`)
};

const ja_common_consent_text = /** @type {(inputs: Common_Consent_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`広告と匿名の統計のために Cookie を使用しています。どちらを選んでもダウンロードは使えます。`)
};

/**
* | output |
* | --- |
* | "We use cookies for ads and anonymous stats. Downloads work either way." |
*
* @param {Common_Consent_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_consent_text = /** @type {((inputs?: Common_Consent_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Consent_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_consent_text(inputs)
	if (locale === "de") return de_common_consent_text(inputs)
	if (locale === "fr") return fr_common_consent_text(inputs)
	if (locale === "it") return it_common_consent_text(inputs)
	if (locale === "nl") return nl_common_consent_text(inputs)
	if (locale === "pl") return pl_common_consent_text(inputs)
	if (locale === "pt") return pt_common_consent_text(inputs)
	if (locale === "ru") return ru_common_consent_text(inputs)
	if (locale === "sv") return sv_common_consent_text(inputs)
	if (locale === "tr") return tr_common_consent_text(inputs)
	if (locale === "zh") return zh_common_consent_text(inputs)
	if (locale === "ja") return ja_common_consent_text(inputs)
	return en_common_consent_text(inputs)
});
