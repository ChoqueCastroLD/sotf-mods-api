/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Stats_EmptyInputs */

const en_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No downloads recorded in this period yet.`)
};

const es_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay descargas registradas en este periodo.`)
};

const de_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In diesem Zeitraum wurden noch keine Downloads erfasst.`)
};

const fr_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun téléchargement enregistré sur cette période.`)
};

const it_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun download registrato in questo periodo.`)
};

const nl_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen downloads geregistreerd in deze periode.`)
};

const pl_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W tym okresie nie zarejestrowano jeszcze pobrań.`)
};

const pt_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há downloads registrados neste período.`)
};

const ru_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`За этот период загрузок пока нет.`)
};

const sv_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga nedladdningar har registrerats under perioden än.`)
};

const tr_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu dönemde henüz indirme kaydedilmedi.`)
};

const zh_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此时间段内暂无下载记录。`)
};

const ja_mod_stats_empty = /** @type {(inputs: Mod_Stats_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この期間のダウンロードはまだありません。`)
};

/**
* | output |
* | --- |
* | "No downloads recorded in this period yet." |
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
