/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Error_TitleInputs */

const en_content_radar_error_title = /** @type {(inputs: Content_Radar_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lost signal`)
};

const es_content_radar_error_title = /** @type {(inputs: Content_Radar_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin señal`)
};

const de_content_radar_error_title = /** @type {(inputs: Content_Radar_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Signal`)
};

const fr_content_radar_error_title = /** @type {(inputs: Content_Radar_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signal perdu`)
};

const it_content_radar_error_title = /** @type {(inputs: Content_Radar_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnale perso`)
};

const nl_content_radar_error_title = /** @type {(inputs: Content_Radar_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen signaal`)
};

const pl_content_radar_error_title = /** @type {(inputs: Content_Radar_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak sygnału`)
};

const pt_content_radar_error_title = /** @type {(inputs: Content_Radar_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem sinal`)
};

const ru_content_radar_error_title = /** @type {(inputs: Content_Radar_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет сигнала`)
};

const sv_content_radar_error_title = /** @type {(inputs: Content_Radar_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen signal`)
};

const tr_content_radar_error_title = /** @type {(inputs: Content_Radar_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinyal yok`)
};

const zh_content_radar_error_title = /** @type {(inputs: Content_Radar_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信号丢失`)
};

const ja_content_radar_error_title = /** @type {(inputs: Content_Radar_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信号が途絶えました`)
};

/**
* | output |
* | --- |
* | "Lost signal" |
*
* @param {Content_Radar_Error_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_error_title = /** @type {((inputs?: Content_Radar_Error_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Error_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_error_title(inputs)
	if (locale === "de") return de_content_radar_error_title(inputs)
	if (locale === "fr") return fr_content_radar_error_title(inputs)
	if (locale === "it") return it_content_radar_error_title(inputs)
	if (locale === "nl") return nl_content_radar_error_title(inputs)
	if (locale === "pl") return pl_content_radar_error_title(inputs)
	if (locale === "pt") return pt_content_radar_error_title(inputs)
	if (locale === "ru") return ru_content_radar_error_title(inputs)
	if (locale === "sv") return sv_content_radar_error_title(inputs)
	if (locale === "tr") return tr_content_radar_error_title(inputs)
	if (locale === "zh") return zh_content_radar_error_title(inputs)
	if (locale === "ja") return ja_content_radar_error_title(inputs)
	return en_content_radar_error_title(inputs)
});
