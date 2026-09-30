/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ width: NonNullable<unknown>, depth: NonNullable<unknown>, height: NonNullable<unknown>, pieces: NonNullable<unknown> }} Viewer_StatsInputs */

const en_viewer_stats = /** @type {(inputs: Viewer_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.width} × ${i?.depth} × ${i?.height} m · ${i?.pieces} pieces`)
};

const es_viewer_stats = /** @type {(inputs: Viewer_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.width} × ${i?.depth} × ${i?.height} m · ${i?.pieces} piezas`)
};

const de_viewer_stats = /** @type {(inputs: Viewer_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.width} × ${i?.depth} × ${i?.height} m · ${i?.pieces} Teile`)
};

const fr_viewer_stats = /** @type {(inputs: Viewer_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.width} × ${i?.depth} × ${i?.height} m · ${i?.pieces} pièces`)
};

const it_viewer_stats = /** @type {(inputs: Viewer_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.width} × ${i?.depth} × ${i?.height} m · ${i?.pieces} pezzi`)
};

const nl_viewer_stats = /** @type {(inputs: Viewer_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.width} × ${i?.depth} × ${i?.height} m · ${i?.pieces} stukken`)
};

const pl_viewer_stats = /** @type {(inputs: Viewer_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.width} × ${i?.depth} × ${i?.height} m · ${i?.pieces} elementów`)
};

const pt_viewer_stats = /** @type {(inputs: Viewer_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.width} × ${i?.depth} × ${i?.height} m · ${i?.pieces} peças`)
};

const ru_viewer_stats = /** @type {(inputs: Viewer_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.width} × ${i?.depth} × ${i?.height} м · деталей ${i?.pieces}`)
};

const sv_viewer_stats = /** @type {(inputs: Viewer_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.width} × ${i?.depth} × ${i?.height} m · ${i?.pieces} delar`)
};

const tr_viewer_stats = /** @type {(inputs: Viewer_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.width} × ${i?.depth} × ${i?.height} m · ${i?.pieces} parça`)
};

const zh_viewer_stats = /** @type {(inputs: Viewer_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.width} × ${i?.depth} × ${i?.height} 米 · ${i?.pieces} 个构件`)
};

const ja_viewer_stats = /** @type {(inputs: Viewer_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.width} × ${i?.depth} × ${i?.height} m · ${i?.pieces} 個のパーツ`)
};

/**
* | output |
* | --- |
* | "{width} × {depth} × {height} m · {pieces} pieces" |
*
* @param {Viewer_StatsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const viewer_stats = /** @type {((inputs: Viewer_StatsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Viewer_StatsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_viewer_stats(inputs)
	if (locale === "de") return de_viewer_stats(inputs)
	if (locale === "fr") return fr_viewer_stats(inputs)
	if (locale === "it") return it_viewer_stats(inputs)
	if (locale === "nl") return nl_viewer_stats(inputs)
	if (locale === "pl") return pl_viewer_stats(inputs)
	if (locale === "pt") return pt_viewer_stats(inputs)
	if (locale === "ru") return ru_viewer_stats(inputs)
	if (locale === "sv") return sv_viewer_stats(inputs)
	if (locale === "tr") return tr_viewer_stats(inputs)
	if (locale === "zh") return zh_viewer_stats(inputs)
	if (locale === "ja") return ja_viewer_stats(inputs)
	return en_viewer_stats(inputs)
});
