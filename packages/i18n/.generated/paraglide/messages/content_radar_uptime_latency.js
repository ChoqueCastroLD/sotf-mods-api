/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ avg: NonNullable<unknown>, p95: NonNullable<unknown> }} Content_Radar_Uptime_LatencyInputs */

const en_content_radar_uptime_latency = /** @type {(inputs: Content_Radar_Uptime_LatencyInputs) => LocalizedString} */ (i) => {
	const avg__number = registry.number("en", i?.avg, {});
	const p95__number = registry.number("en", i?.p95, {});return /** @type {LocalizedString} */ (`${avg__number} ms average · ${p95__number} ms p95`)
};

const es_content_radar_uptime_latency = /** @type {(inputs: Content_Radar_Uptime_LatencyInputs) => LocalizedString} */ (i) => {
	const avg__number = registry.number("es", i?.avg, {});
	const p95__number = registry.number("es", i?.p95, {});return /** @type {LocalizedString} */ (`${avg__number} ms de media · ${p95__number} ms p95`)
};

const de_content_radar_uptime_latency = /** @type {(inputs: Content_Radar_Uptime_LatencyInputs) => LocalizedString} */ (i) => {
	const avg__number = registry.number("de", i?.avg, {});
	const p95__number = registry.number("de", i?.p95, {});return /** @type {LocalizedString} */ (`Ø ${avg__number} ms · ${p95__number} ms p95`)
};

const fr_content_radar_uptime_latency = /** @type {(inputs: Content_Radar_Uptime_LatencyInputs) => LocalizedString} */ (i) => {
	const avg__number = registry.number("fr", i?.avg, {});
	const p95__number = registry.number("fr", i?.p95, {});return /** @type {LocalizedString} */ (`${avg__number} ms en moyenne · ${p95__number} ms p95`)
};

const it_content_radar_uptime_latency = /** @type {(inputs: Content_Radar_Uptime_LatencyInputs) => LocalizedString} */ (i) => {
	const avg__number = registry.number("it", i?.avg, {});
	const p95__number = registry.number("it", i?.p95, {});return /** @type {LocalizedString} */ (`${avg__number} ms di media · ${p95__number} ms p95`)
};

const nl_content_radar_uptime_latency = /** @type {(inputs: Content_Radar_Uptime_LatencyInputs) => LocalizedString} */ (i) => {
	const avg__number = registry.number("nl", i?.avg, {});
	const p95__number = registry.number("nl", i?.p95, {});return /** @type {LocalizedString} */ (`gemiddeld ${avg__number} ms · ${p95__number} ms p95`)
};

const pl_content_radar_uptime_latency = /** @type {(inputs: Content_Radar_Uptime_LatencyInputs) => LocalizedString} */ (i) => {
	const avg__number = registry.number("pl", i?.avg, {});
	const p95__number = registry.number("pl", i?.p95, {});return /** @type {LocalizedString} */ (`średnio ${avg__number} ms · p95 ${p95__number} ms`)
};

const pt_content_radar_uptime_latency = /** @type {(inputs: Content_Radar_Uptime_LatencyInputs) => LocalizedString} */ (i) => {
	const avg__number = registry.number("pt", i?.avg, {});
	const p95__number = registry.number("pt", i?.p95, {});return /** @type {LocalizedString} */ (`${avg__number} ms em média · ${p95__number} ms p95`)
};

const ru_content_radar_uptime_latency = /** @type {(inputs: Content_Radar_Uptime_LatencyInputs) => LocalizedString} */ (i) => {
	const avg__number = registry.number("ru", i?.avg, {});
	const p95__number = registry.number("ru", i?.p95, {});return /** @type {LocalizedString} */ (`в среднем ${avg__number} мс · p95 ${p95__number} мс`)
};

const sv_content_radar_uptime_latency = /** @type {(inputs: Content_Radar_Uptime_LatencyInputs) => LocalizedString} */ (i) => {
	const avg__number = registry.number("sv", i?.avg, {});
	const p95__number = registry.number("sv", i?.p95, {});return /** @type {LocalizedString} */ (`${avg__number} ms i snitt · ${p95__number} ms p95`)
};

const tr_content_radar_uptime_latency = /** @type {(inputs: Content_Radar_Uptime_LatencyInputs) => LocalizedString} */ (i) => {
	const avg__number = registry.number("tr", i?.avg, {});
	const p95__number = registry.number("tr", i?.p95, {});return /** @type {LocalizedString} */ (`ortalama ${avg__number} ms · p95 ${p95__number} ms`)
};

const zh_content_radar_uptime_latency = /** @type {(inputs: Content_Radar_Uptime_LatencyInputs) => LocalizedString} */ (i) => {
	const avg__number = registry.number("zh", i?.avg, {});
	const p95__number = registry.number("zh", i?.p95, {});return /** @type {LocalizedString} */ (`平均 ${avg__number} 毫秒 · p95 ${p95__number} 毫秒`)
};

const ja_content_radar_uptime_latency = /** @type {(inputs: Content_Radar_Uptime_LatencyInputs) => LocalizedString} */ (i) => {
	const avg__number = registry.number("ja", i?.avg, {});
	const p95__number = registry.number("ja", i?.p95, {});return /** @type {LocalizedString} */ (`平均 ${avg__number} ms · p95 ${p95__number} ms`)
};

/**
* | output |
* | --- |
* | "{avg__number} ms average · {p95__number} ms p95" |
*
* @param {Content_Radar_Uptime_LatencyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_uptime_latency = /** @type {((inputs: Content_Radar_Uptime_LatencyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Uptime_LatencyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_uptime_latency(inputs)
	if (locale === "de") return de_content_radar_uptime_latency(inputs)
	if (locale === "fr") return fr_content_radar_uptime_latency(inputs)
	if (locale === "it") return it_content_radar_uptime_latency(inputs)
	if (locale === "nl") return nl_content_radar_uptime_latency(inputs)
	if (locale === "pl") return pl_content_radar_uptime_latency(inputs)
	if (locale === "pt") return pt_content_radar_uptime_latency(inputs)
	if (locale === "ru") return ru_content_radar_uptime_latency(inputs)
	if (locale === "sv") return sv_content_radar_uptime_latency(inputs)
	if (locale === "tr") return tr_content_radar_uptime_latency(inputs)
	if (locale === "zh") return zh_content_radar_uptime_latency(inputs)
	if (locale === "ja") return ja_content_radar_uptime_latency(inputs)
	return en_content_radar_uptime_latency(inputs)
});
