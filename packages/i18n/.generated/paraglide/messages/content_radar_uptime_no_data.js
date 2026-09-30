/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Uptime_No_DataInputs */

const en_content_radar_uptime_no_data = /** @type {(inputs: Content_Radar_Uptime_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No data`)
};

const es_content_radar_uptime_no_data = /** @type {(inputs: Content_Radar_Uptime_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin datos`)
};

const de_content_radar_uptime_no_data = /** @type {(inputs: Content_Radar_Uptime_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Daten`)
};

const fr_content_radar_uptime_no_data = /** @type {(inputs: Content_Radar_Uptime_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune donnée`)
};

const it_content_radar_uptime_no_data = /** @type {(inputs: Content_Radar_Uptime_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun dato`)
};

const nl_content_radar_uptime_no_data = /** @type {(inputs: Content_Radar_Uptime_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen gegevens`)
};

const pl_content_radar_uptime_no_data = /** @type {(inputs: Content_Radar_Uptime_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak danych`)
};

const pt_content_radar_uptime_no_data = /** @type {(inputs: Content_Radar_Uptime_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem dados`)
};

const ru_content_radar_uptime_no_data = /** @type {(inputs: Content_Radar_Uptime_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет данных`)
};

const sv_content_radar_uptime_no_data = /** @type {(inputs: Content_Radar_Uptime_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga data`)
};

const tr_content_radar_uptime_no_data = /** @type {(inputs: Content_Radar_Uptime_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veri yok`)
};

const zh_content_radar_uptime_no_data = /** @type {(inputs: Content_Radar_Uptime_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无数据`)
};

const ja_content_radar_uptime_no_data = /** @type {(inputs: Content_Radar_Uptime_No_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`データなし`)
};

/**
* | output |
* | --- |
* | "No data" |
*
* @param {Content_Radar_Uptime_No_DataInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_uptime_no_data = /** @type {((inputs?: Content_Radar_Uptime_No_DataInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Uptime_No_DataInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_uptime_no_data(inputs)
	if (locale === "de") return de_content_radar_uptime_no_data(inputs)
	if (locale === "fr") return fr_content_radar_uptime_no_data(inputs)
	if (locale === "it") return it_content_radar_uptime_no_data(inputs)
	if (locale === "nl") return nl_content_radar_uptime_no_data(inputs)
	if (locale === "pl") return pl_content_radar_uptime_no_data(inputs)
	if (locale === "pt") return pt_content_radar_uptime_no_data(inputs)
	if (locale === "ru") return ru_content_radar_uptime_no_data(inputs)
	if (locale === "sv") return sv_content_radar_uptime_no_data(inputs)
	if (locale === "tr") return tr_content_radar_uptime_no_data(inputs)
	if (locale === "zh") return zh_content_radar_uptime_no_data(inputs)
	if (locale === "ja") return ja_content_radar_uptime_no_data(inputs)
	return en_content_radar_uptime_no_data(inputs)
});
