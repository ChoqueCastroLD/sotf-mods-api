/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ days: NonNullable<unknown> }} Ranger_Metrics_MeanInputs */

const en_ranger_metrics_mean = /** @type {(inputs: Ranger_Metrics_MeanInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mean review time · ${i?.days} d`)
};

const es_ranger_metrics_mean = /** @type {(inputs: Ranger_Metrics_MeanInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tiempo medio de revisión · ${i?.days} d`)
};

const de_ranger_metrics_mean = /** @type {(inputs: Ranger_Metrics_MeanInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mittlere Prüfzeit · ${i?.days} T`)
};

const fr_ranger_metrics_mean = /** @type {(inputs: Ranger_Metrics_MeanInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Délai moyen de revue · ${i?.days} j`)
};

const it_ranger_metrics_mean = /** @type {(inputs: Ranger_Metrics_MeanInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tempo medio di revisione · ${i?.days} g`)
};

const nl_ranger_metrics_mean = /** @type {(inputs: Ranger_Metrics_MeanInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gemiddelde beoordelingstijd · ${i?.days} d`)
};

const pl_ranger_metrics_mean = /** @type {(inputs: Ranger_Metrics_MeanInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Średni czas weryfikacji · ${i?.days} dni`)
};

const pt_ranger_metrics_mean = /** @type {(inputs: Ranger_Metrics_MeanInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tempo médio de revisão · ${i?.days} d`)
};

const ru_ranger_metrics_mean = /** @type {(inputs: Ranger_Metrics_MeanInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Среднее время проверки · ${i?.days} дн.`)
};

const sv_ranger_metrics_mean = /** @type {(inputs: Ranger_Metrics_MeanInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Snittid för granskning · ${i?.days} d`)
};

const tr_ranger_metrics_mean = /** @type {(inputs: Ranger_Metrics_MeanInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ortalama inceleme süresi · ${i?.days} g`)
};

const zh_ranger_metrics_mean = /** @type {(inputs: Ranger_Metrics_MeanInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`平均审核时间 · ${i?.days} 天`)
};

const ja_ranger_metrics_mean = /** @type {(inputs: Ranger_Metrics_MeanInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`平均審査時間 · ${i?.days} 日`)
};

/**
* | output |
* | --- |
* | "Mean review time · {days} d" |
*
* @param {Ranger_Metrics_MeanInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_metrics_mean = /** @type {((inputs: Ranger_Metrics_MeanInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Metrics_MeanInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_metrics_mean(inputs)
	if (locale === "de") return de_ranger_metrics_mean(inputs)
	if (locale === "fr") return fr_ranger_metrics_mean(inputs)
	if (locale === "it") return it_ranger_metrics_mean(inputs)
	if (locale === "nl") return nl_ranger_metrics_mean(inputs)
	if (locale === "pl") return pl_ranger_metrics_mean(inputs)
	if (locale === "pt") return pt_ranger_metrics_mean(inputs)
	if (locale === "ru") return ru_ranger_metrics_mean(inputs)
	if (locale === "sv") return sv_ranger_metrics_mean(inputs)
	if (locale === "tr") return tr_ranger_metrics_mean(inputs)
	if (locale === "zh") return zh_ranger_metrics_mean(inputs)
	if (locale === "ja") return ja_ranger_metrics_mean(inputs)
	return en_ranger_metrics_mean(inputs)
});
