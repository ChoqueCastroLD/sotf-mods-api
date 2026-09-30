/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Readout_TodayInputs */

const en_landing_readout_today = /** @type {(inputs: Landing_Readout_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads today`)
};

const es_landing_readout_today = /** @type {(inputs: Landing_Readout_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas hoy`)
};

const de_landing_readout_today = /** @type {(inputs: Landing_Readout_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads heute`)
};

const fr_landing_readout_today = /** @type {(inputs: Landing_Readout_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements aujourd’hui`)
};

const it_landing_readout_today = /** @type {(inputs: Landing_Readout_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download oggi`)
};

const nl_landing_readout_today = /** @type {(inputs: Landing_Readout_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads vandaag`)
};

const pl_landing_readout_today = /** @type {(inputs: Landing_Readout_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania dziś`)
};

const pt_landing_readout_today = /** @type {(inputs: Landing_Readout_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads hoje`)
};

const ru_landing_readout_today = /** @type {(inputs: Landing_Readout_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузок сегодня`)
};

const sv_landing_readout_today = /** @type {(inputs: Landing_Readout_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar i dag`)
};

const tr_landing_readout_today = /** @type {(inputs: Landing_Readout_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bugünkü indirmeler`)
};

const zh_landing_readout_today = /** @type {(inputs: Landing_Readout_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今日下载`)
};

const ja_landing_readout_today = /** @type {(inputs: Landing_Readout_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今日のダウンロード`)
};

/**
* | output |
* | --- |
* | "Downloads today" |
*
* @param {Landing_Readout_TodayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_readout_today = /** @type {((inputs?: Landing_Readout_TodayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Readout_TodayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_readout_today(inputs)
	if (locale === "de") return de_landing_readout_today(inputs)
	if (locale === "fr") return fr_landing_readout_today(inputs)
	if (locale === "it") return it_landing_readout_today(inputs)
	if (locale === "nl") return nl_landing_readout_today(inputs)
	if (locale === "pl") return pl_landing_readout_today(inputs)
	if (locale === "pt") return pt_landing_readout_today(inputs)
	if (locale === "ru") return ru_landing_readout_today(inputs)
	if (locale === "sv") return sv_landing_readout_today(inputs)
	if (locale === "tr") return tr_landing_readout_today(inputs)
	if (locale === "zh") return zh_landing_readout_today(inputs)
	if (locale === "ja") return ja_landing_readout_today(inputs)
	return en_landing_readout_today(inputs)
});
