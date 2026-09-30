/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Stat_PendingInputs */

const en_content_radar_stat_pending = /** @type {(inputs: Content_Radar_Stat_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Need reports`)
};

const es_content_radar_stat_pending = /** @type {(inputs: Content_Radar_Stat_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faltan reportes`)
};

const de_content_radar_stat_pending = /** @type {(inputs: Content_Radar_Stat_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Berichte fehlen`)
};

const fr_content_radar_stat_pending = /** @type {(inputs: Content_Radar_Stat_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapports manquants`)
};

const it_content_radar_stat_pending = /** @type {(inputs: Content_Radar_Stat_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mancano segnalazioni`)
};

const nl_content_radar_stat_pending = /** @type {(inputs: Content_Radar_Stat_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldingen nodig`)
};

const pl_content_radar_stat_pending = /** @type {(inputs: Content_Radar_Stat_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak zgłoszeń`)
};

const pt_content_radar_stat_pending = /** @type {(inputs: Content_Radar_Stat_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faltam relatos`)
};

const ru_content_radar_stat_pending = /** @type {(inputs: Content_Radar_Stat_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нужны отчёты`)
};

const sv_content_radar_stat_pending = /** @type {(inputs: Content_Radar_Stat_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Behöver rapporter`)
};

const tr_content_radar_stat_pending = /** @type {(inputs: Content_Radar_Stat_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapor gerekli`)
};

const zh_content_radar_stat_pending = /** @type {(inputs: Content_Radar_Stat_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`需要报告`)
};

const ja_content_radar_stat_pending = /** @type {(inputs: Content_Radar_Stat_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告が必要`)
};

/**
* | output |
* | --- |
* | "Need reports" |
*
* @param {Content_Radar_Stat_PendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_stat_pending = /** @type {((inputs?: Content_Radar_Stat_PendingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Stat_PendingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_stat_pending(inputs)
	if (locale === "de") return de_content_radar_stat_pending(inputs)
	if (locale === "fr") return fr_content_radar_stat_pending(inputs)
	if (locale === "it") return it_content_radar_stat_pending(inputs)
	if (locale === "nl") return nl_content_radar_stat_pending(inputs)
	if (locale === "pl") return pl_content_radar_stat_pending(inputs)
	if (locale === "pt") return pt_content_radar_stat_pending(inputs)
	if (locale === "ru") return ru_content_radar_stat_pending(inputs)
	if (locale === "sv") return sv_content_radar_stat_pending(inputs)
	if (locale === "tr") return tr_content_radar_stat_pending(inputs)
	if (locale === "zh") return zh_content_radar_stat_pending(inputs)
	if (locale === "ja") return ja_content_radar_stat_pending(inputs)
	return en_content_radar_stat_pending(inputs)
});
