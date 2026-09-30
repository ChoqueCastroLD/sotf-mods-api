/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Stats_TitleInputs */

const en_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads, last 30 days`)
};

const es_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas, últimos 30 días`)
};

const de_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads der letzten 30 Tage`)
};

const fr_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements, 30 derniers jours`)
};

const it_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download, ultimi 30 giorni`)
};

const nl_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads, laatste 30 dagen`)
};

const pl_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania z ostatnich 30 dni`)
};

const pt_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads, últimos 30 dias`)
};

const ru_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузки за последние 30 дней`)
};

const sv_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar, senaste 30 dagarna`)
};

const tr_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirmeler, son 30 gün`)
};

const zh_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近 30 天的下载量`)
};

const ja_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード数（過去30日）`)
};

/**
* | output |
* | --- |
* | "Downloads, last 30 days" |
*
* @param {Mod_Stats_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_stats_title = /** @type {((inputs?: Mod_Stats_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Stats_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_stats_title(inputs)
	if (locale === "de") return de_mod_stats_title(inputs)
	if (locale === "fr") return fr_mod_stats_title(inputs)
	if (locale === "it") return it_mod_stats_title(inputs)
	if (locale === "nl") return nl_mod_stats_title(inputs)
	if (locale === "pl") return pl_mod_stats_title(inputs)
	if (locale === "pt") return pt_mod_stats_title(inputs)
	if (locale === "ru") return ru_mod_stats_title(inputs)
	if (locale === "sv") return sv_mod_stats_title(inputs)
	if (locale === "tr") return tr_mod_stats_title(inputs)
	if (locale === "zh") return zh_mod_stats_title(inputs)
	if (locale === "ja") return ja_mod_stats_title(inputs)
	return en_mod_stats_title(inputs)
});
