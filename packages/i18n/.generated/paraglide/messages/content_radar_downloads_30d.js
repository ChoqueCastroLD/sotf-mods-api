/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, display: NonNullable<unknown> }} Content_Radar_Downloads_30dInputs */

const en_content_radar_downloads_30d = /** @type {(inputs: Content_Radar_Downloads_30dInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} download in 30 days`);
	return /** @type {LocalizedString} */ (`${i?.display} downloads in 30 days`)
	
};

const es_content_radar_downloads_30d = /** @type {(inputs: Content_Radar_Downloads_30dInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} descarga en 30 días`);
	return /** @type {LocalizedString} */ (`${i?.display} descargas en 30 días`)
	
};

const de_content_radar_downloads_30d = /** @type {(inputs: Content_Radar_Downloads_30dInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} Download in 30 Tagen`);
	return /** @type {LocalizedString} */ (`${i?.display} Downloads in 30 Tagen`)
	
};

const fr_content_radar_downloads_30d = /** @type {(inputs: Content_Radar_Downloads_30dInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} téléchargement en 30 jours`);
	return /** @type {LocalizedString} */ (`${i?.display} téléchargements en 30 jours`)
	
};

const it_content_radar_downloads_30d = /** @type {(inputs: Content_Radar_Downloads_30dInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} download in 30 giorni`);
	return /** @type {LocalizedString} */ (`${i?.display} download in 30 giorni`)
	
};

const nl_content_radar_downloads_30d = /** @type {(inputs: Content_Radar_Downloads_30dInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} download in 30 dagen`);
	return /** @type {LocalizedString} */ (`${i?.display} downloads in 30 dagen`)
	
};

const pl_content_radar_downloads_30d = /** @type {(inputs: Content_Radar_Downloads_30dInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} pobranie w 30 dni`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.display} pobrania w 30 dni`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.display} pobrań w 30 dni`);
	return /** @type {LocalizedString} */ (`${i?.display} pobrania w 30 dni`)
	
};

const pt_content_radar_downloads_30d = /** @type {(inputs: Content_Radar_Downloads_30dInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} download em 30 dias`);
	return /** @type {LocalizedString} */ (`${i?.display} downloads em 30 dias`)
	
};

const ru_content_radar_downloads_30d = /** @type {(inputs: Content_Radar_Downloads_30dInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} скачивание за 30 дней`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.display} скачивания за 30 дней`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.display} скачиваний за 30 дней`);
	return /** @type {LocalizedString} */ (`${i?.display} скачивания за 30 дней`)
	
};

const sv_content_radar_downloads_30d = /** @type {(inputs: Content_Radar_Downloads_30dInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} nedladdning på 30 dagar`);
	return /** @type {LocalizedString} */ (`${i?.display} nedladdningar på 30 dagar`)
	
};

const tr_content_radar_downloads_30d = /** @type {(inputs: Content_Radar_Downloads_30dInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`30 günde ${i?.display} indirme`);
	return /** @type {LocalizedString} */ (`30 günde ${i?.display} indirme`)
	
};

const zh_content_radar_downloads_30d = /** @type {(inputs: Content_Radar_Downloads_30dInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});return /** @type {LocalizedString} */ (`30 天内 ${i?.display} 次下载`)
};

const ja_content_radar_downloads_30d = /** @type {(inputs: Content_Radar_Downloads_30dInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});return /** @type {LocalizedString} */ (`30 日間で ${i?.display} ダウンロード`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{display} download in 30 days" |
* | * | "{display} downloads in 30 days" |
*
* @param {Content_Radar_Downloads_30dInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_downloads_30d = /** @type {((inputs: Content_Radar_Downloads_30dInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Downloads_30dInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_downloads_30d(inputs)
	if (locale === "de") return de_content_radar_downloads_30d(inputs)
	if (locale === "fr") return fr_content_radar_downloads_30d(inputs)
	if (locale === "it") return it_content_radar_downloads_30d(inputs)
	if (locale === "nl") return nl_content_radar_downloads_30d(inputs)
	if (locale === "pl") return pl_content_radar_downloads_30d(inputs)
	if (locale === "pt") return pt_content_radar_downloads_30d(inputs)
	if (locale === "ru") return ru_content_radar_downloads_30d(inputs)
	if (locale === "sv") return sv_content_radar_downloads_30d(inputs)
	if (locale === "tr") return tr_content_radar_downloads_30d(inputs)
	if (locale === "zh") return zh_content_radar_downloads_30d(inputs)
	if (locale === "ja") return ja_content_radar_downloads_30d(inputs)
	return en_content_radar_downloads_30d(inputs)
});
