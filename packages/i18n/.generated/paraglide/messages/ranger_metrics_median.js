/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ days: NonNullable<unknown> }} Ranger_Metrics_MedianInputs */

const en_ranger_metrics_median = /** @type {(inputs: Ranger_Metrics_MedianInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Median review time · ${i?.days} d`)
};

const es_ranger_metrics_median = /** @type {(inputs: Ranger_Metrics_MedianInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mediana de revisión · ${i?.days} d`)
};

const de_ranger_metrics_median = /** @type {(inputs: Ranger_Metrics_MedianInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Median der Prüfzeit · ${i?.days} T`)
};

const fr_ranger_metrics_median = /** @type {(inputs: Ranger_Metrics_MedianInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Délai médian de revue · ${i?.days} j`)
};

const it_ranger_metrics_median = /** @type {(inputs: Ranger_Metrics_MedianInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tempo mediano di revisione · ${i?.days} g`)
};

const nl_ranger_metrics_median = /** @type {(inputs: Ranger_Metrics_MedianInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mediane beoordelingstijd · ${i?.days} d`)
};

const pl_ranger_metrics_median = /** @type {(inputs: Ranger_Metrics_MedianInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mediana czasu weryfikacji · ${i?.days} dni`)
};

const pt_ranger_metrics_median = /** @type {(inputs: Ranger_Metrics_MedianInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mediana de revisão · ${i?.days} d`)
};

const ru_ranger_metrics_median = /** @type {(inputs: Ranger_Metrics_MedianInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Медиана времени проверки · ${i?.days} дн.`)
};

const sv_ranger_metrics_median = /** @type {(inputs: Ranger_Metrics_MedianInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mediantid för granskning · ${i?.days} d`)
};

const tr_ranger_metrics_median = /** @type {(inputs: Ranger_Metrics_MedianInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Medyan inceleme süresi · ${i?.days} g`)
};

const zh_ranger_metrics_median = /** @type {(inputs: Ranger_Metrics_MedianInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`审核时间中位数 · ${i?.days} 天`)
};

const ja_ranger_metrics_median = /** @type {(inputs: Ranger_Metrics_MedianInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`審査時間の中央値 · ${i?.days} 日`)
};

/**
* | output |
* | --- |
* | "Median review time · {days} d" |
*
* @param {Ranger_Metrics_MedianInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_metrics_median = /** @type {((inputs: Ranger_Metrics_MedianInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Metrics_MedianInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_metrics_median(inputs)
	if (locale === "de") return de_ranger_metrics_median(inputs)
	if (locale === "fr") return fr_ranger_metrics_median(inputs)
	if (locale === "it") return it_ranger_metrics_median(inputs)
	if (locale === "nl") return nl_ranger_metrics_median(inputs)
	if (locale === "pl") return pl_ranger_metrics_median(inputs)
	if (locale === "pt") return pt_ranger_metrics_median(inputs)
	if (locale === "ru") return ru_ranger_metrics_median(inputs)
	if (locale === "sv") return sv_ranger_metrics_median(inputs)
	if (locale === "tr") return tr_ranger_metrics_median(inputs)
	if (locale === "zh") return zh_ranger_metrics_median(inputs)
	if (locale === "ja") return ja_ranger_metrics_median(inputs)
	return en_ranger_metrics_median(inputs)
});
