/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Stats_TitleInputs */

const en_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads over time`)
};

const es_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas en el tiempo`)
};

const de_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads im Zeitverlauf`)
};

const fr_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements dans le temps`)
};

const it_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download nel tempo`)
};

const nl_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads in de tijd`)
};

const pl_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania w czasie`)
};

const pt_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads ao longo do tempo`)
};

const ru_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузки по времени`)
};

const sv_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar över tid`)
};

const tr_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaman içinde indirmeler`)
};

const zh_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载量趋势`)
};

const ja_mod_stats_title = /** @type {(inputs: Mod_Stats_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード数の推移`)
};

/**
* | output |
* | --- |
* | "Downloads over time" |
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
