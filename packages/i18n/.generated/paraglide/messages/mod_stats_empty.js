/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Stats_EmptyInputs */

const en_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not enough downloads yet to draw a trend.`)
};

const es_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay descargas suficientes para dibujar una tendencia.`)
};

const de_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch nicht genug Downloads für einen Verlauf.`)
};

const fr_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore assez de téléchargements pour tracer une tendance.`)
};

const it_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non ci sono ancora abbastanza download per tracciare un andamento.`)
};

const nl_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog te weinig downloads voor een trend.`)
};

const pl_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Za mało pobrań, by narysować trend.`)
};

const pt_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há downloads suficientes para traçar uma tendência.`)
};

const ru_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пока слишком мало загрузок для графика.`)
};

const sv_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte tillräckligt många nedladdningar för en trend än.`)
};

const tr_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir eğilim çizmek için henüz yeterli indirme yok.`)
};

const zh_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载量还不足以绘制趋势。`)
};

const ja_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`推移を表示するにはダウンロード数がまだ足りません。`)
};

/**
* | output |
* | --- |
* | "Not enough downloads yet to draw a trend." |
*
* @param {Mod_Stats_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_stats_empty = /** @type {((inputs?: Mod_Stats_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Stats_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_stats_empty(inputs)
	if (locale === "de") return de_mod_stats_empty(inputs)
	if (locale === "fr") return fr_mod_stats_empty(inputs)
	if (locale === "it") return it_mod_stats_empty(inputs)
	if (locale === "nl") return nl_mod_stats_empty(inputs)
	if (locale === "pl") return pl_mod_stats_empty(inputs)
	if (locale === "pt") return pt_mod_stats_empty(inputs)
	if (locale === "ru") return ru_mod_stats_empty(inputs)
	if (locale === "sv") return sv_mod_stats_empty(inputs)
	if (locale === "tr") return tr_mod_stats_empty(inputs)
	if (locale === "zh") return zh_mod_stats_empty(inputs)
	if (locale === "ja") return ja_mod_stats_empty(inputs)
	return en_mod_stats_empty(inputs)
});
