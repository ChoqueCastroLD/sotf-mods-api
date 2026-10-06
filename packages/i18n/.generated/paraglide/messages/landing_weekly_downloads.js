/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, display: NonNullable<unknown> }} Landing_Weekly_DownloadsInputs */

const en_landing_weekly_downloads = /** @type {(inputs: Landing_Weekly_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} download this week`);
	return /** @type {LocalizedString} */ (`${i?.display} downloads this week`)
	
};

const es_landing_weekly_downloads = /** @type {(inputs: Landing_Weekly_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} descarga esta semana`);
	return /** @type {LocalizedString} */ (`${i?.display} descargas esta semana`)
	
};

const de_landing_weekly_downloads = /** @type {(inputs: Landing_Weekly_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} Download diese Woche`);
	return /** @type {LocalizedString} */ (`${i?.display} Downloads diese Woche`)
	
};

const fr_landing_weekly_downloads = /** @type {(inputs: Landing_Weekly_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} téléchargement cette semaine`);
	return /** @type {LocalizedString} */ (`${i?.display} téléchargements cette semaine`)
	
};

const it_landing_weekly_downloads = /** @type {(inputs: Landing_Weekly_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} download questa settimana`);
	return /** @type {LocalizedString} */ (`${i?.display} download questa settimana`)
	
};

const nl_landing_weekly_downloads = /** @type {(inputs: Landing_Weekly_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} download deze week`);
	return /** @type {LocalizedString} */ (`${i?.display} downloads deze week`)
	
};

const pl_landing_weekly_downloads = /** @type {(inputs: Landing_Weekly_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} pobranie w tym tygodniu`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.display} pobrania w tym tygodniu`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.display} pobrań w tym tygodniu`);
	return /** @type {LocalizedString} */ (`${i?.display} pobrania w tym tygodniu`)
	
};

const pt_landing_weekly_downloads = /** @type {(inputs: Landing_Weekly_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} download esta semana`);
	return /** @type {LocalizedString} */ (`${i?.display} downloads esta semana`)
	
};

const ru_landing_weekly_downloads = /** @type {(inputs: Landing_Weekly_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} скачивание на этой неделе`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.display} скачивания на этой неделе`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.display} скачиваний на этой неделе`);
	return /** @type {LocalizedString} */ (`${i?.display} скачивания на этой неделе`)
	
};

const sv_landing_weekly_downloads = /** @type {(inputs: Landing_Weekly_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} nedladdning den här veckan`);
	return /** @type {LocalizedString} */ (`${i?.display} nedladdningar den här veckan`)
	
};

const tr_landing_weekly_downloads = /** @type {(inputs: Landing_Weekly_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Bu hafta ${i?.display} indirme`);
	return /** @type {LocalizedString} */ (`Bu hafta ${i?.display} indirme`)
	
};

const zh_landing_weekly_downloads = /** @type {(inputs: Landing_Weekly_DownloadsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});return /** @type {LocalizedString} */ (`本周 ${i?.display} 次下载`)
};

const ja_landing_weekly_downloads = /** @type {(inputs: Landing_Weekly_DownloadsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});return /** @type {LocalizedString} */ (`今週 ${i?.display} ダウンロード`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{display} download this week" |
* | * | "{display} downloads this week" |
*
* @param {Landing_Weekly_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_weekly_downloads = /** @type {((inputs: Landing_Weekly_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Weekly_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_weekly_downloads(inputs)
	if (locale === "de") return de_landing_weekly_downloads(inputs)
	if (locale === "fr") return fr_landing_weekly_downloads(inputs)
	if (locale === "it") return it_landing_weekly_downloads(inputs)
	if (locale === "nl") return nl_landing_weekly_downloads(inputs)
	if (locale === "pl") return pl_landing_weekly_downloads(inputs)
	if (locale === "pt") return pt_landing_weekly_downloads(inputs)
	if (locale === "ru") return ru_landing_weekly_downloads(inputs)
	if (locale === "sv") return sv_landing_weekly_downloads(inputs)
	if (locale === "tr") return tr_landing_weekly_downloads(inputs)
	if (locale === "zh") return zh_landing_weekly_downloads(inputs)
	if (locale === "ja") return ja_landing_weekly_downloads(inputs)
	return en_landing_weekly_downloads(inputs)
});
