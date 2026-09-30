/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_History_EmptyInputs */

const en_content_radar_history_empty = /** @type {(inputs: Content_Radar_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This is the first build on record.`)
};

const es_content_radar_history_empty = /** @type {(inputs: Content_Radar_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta es la primera build registrada.`)
};

const de_content_radar_history_empty = /** @type {(inputs: Content_Radar_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das ist der erste erfasste Build.`)
};

const fr_content_radar_history_empty = /** @type {(inputs: Content_Radar_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`C’est le premier build enregistré.`)
};

const it_content_radar_history_empty = /** @type {(inputs: Content_Radar_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa è la prima build registrata.`)
};

const nl_content_radar_history_empty = /** @type {(inputs: Content_Radar_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit is de eerste geregistreerde build.`)
};

const pl_content_radar_history_empty = /** @type {(inputs: Content_Radar_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To pierwszy zapisany build.`)
};

const pt_content_radar_history_empty = /** @type {(inputs: Content_Radar_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta é a primeira build registrada.`)
};

const ru_content_radar_history_empty = /** @type {(inputs: Content_Radar_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это первая записанная сборка.`)
};

const sv_content_radar_history_empty = /** @type {(inputs: Content_Radar_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här är den första registrerade builden.`)
};

const tr_content_radar_history_empty = /** @type {(inputs: Content_Radar_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kaydedilen ilk sürüm.`)
};

const zh_content_radar_history_empty = /** @type {(inputs: Content_Radar_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这是记录中的第一个版本。`)
};

const ja_content_radar_history_empty = /** @type {(inputs: Content_Radar_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`これが最初に記録されたビルドです。`)
};

/**
* | output |
* | --- |
* | "This is the first build on record." |
*
* @param {Content_Radar_History_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_history_empty = /** @type {((inputs?: Content_Radar_History_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_History_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_history_empty(inputs)
	if (locale === "de") return de_content_radar_history_empty(inputs)
	if (locale === "fr") return fr_content_radar_history_empty(inputs)
	if (locale === "it") return it_content_radar_history_empty(inputs)
	if (locale === "nl") return nl_content_radar_history_empty(inputs)
	if (locale === "pl") return pl_content_radar_history_empty(inputs)
	if (locale === "pt") return pt_content_radar_history_empty(inputs)
	if (locale === "ru") return ru_content_radar_history_empty(inputs)
	if (locale === "sv") return sv_content_radar_history_empty(inputs)
	if (locale === "tr") return tr_content_radar_history_empty(inputs)
	if (locale === "zh") return zh_content_radar_history_empty(inputs)
	if (locale === "ja") return ja_content_radar_history_empty(inputs)
	return en_content_radar_history_empty(inputs)
});
