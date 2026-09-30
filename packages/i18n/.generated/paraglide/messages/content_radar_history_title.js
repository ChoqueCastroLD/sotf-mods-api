/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_History_TitleInputs */

const en_content_radar_history_title = /** @type {(inputs: Content_Radar_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build history`)
};

const es_content_radar_history_title = /** @type {(inputs: Content_Radar_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historial de builds`)
};

const de_content_radar_history_title = /** @type {(inputs: Content_Radar_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build-Verlauf`)
};

const fr_content_radar_history_title = /** @type {(inputs: Content_Radar_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historique des builds`)
};

const it_content_radar_history_title = /** @type {(inputs: Content_Radar_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cronologia delle build`)
};

const nl_content_radar_history_title = /** @type {(inputs: Content_Radar_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buildgeschiedenis`)
};

const pl_content_radar_history_title = /** @type {(inputs: Content_Radar_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historia buildów`)
};

const pt_content_radar_history_title = /** @type {(inputs: Content_Radar_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Histórico de builds`)
};

const ru_content_radar_history_title = /** @type {(inputs: Content_Radar_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`История сборок`)
};

const sv_content_radar_history_title = /** @type {(inputs: Content_Radar_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buildhistorik`)
};

const tr_content_radar_history_title = /** @type {(inputs: Content_Radar_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm geçmişi`)
};

const zh_content_radar_history_title = /** @type {(inputs: Content_Radar_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本历史`)
};

const ja_content_radar_history_title = /** @type {(inputs: Content_Radar_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ビルド履歴`)
};

/**
* | output |
* | --- |
* | "Build history" |
*
* @param {Content_Radar_History_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_history_title = /** @type {((inputs?: Content_Radar_History_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_History_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_history_title(inputs)
	if (locale === "de") return de_content_radar_history_title(inputs)
	if (locale === "fr") return fr_content_radar_history_title(inputs)
	if (locale === "it") return it_content_radar_history_title(inputs)
	if (locale === "nl") return nl_content_radar_history_title(inputs)
	if (locale === "pl") return pl_content_radar_history_title(inputs)
	if (locale === "pt") return pt_content_radar_history_title(inputs)
	if (locale === "ru") return ru_content_radar_history_title(inputs)
	if (locale === "sv") return sv_content_radar_history_title(inputs)
	if (locale === "tr") return tr_content_radar_history_title(inputs)
	if (locale === "zh") return zh_content_radar_history_title(inputs)
	if (locale === "ja") return ja_content_radar_history_title(inputs)
	return en_content_radar_history_title(inputs)
});
