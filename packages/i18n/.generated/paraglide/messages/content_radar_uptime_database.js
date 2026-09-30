/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Uptime_DatabaseInputs */

const en_content_radar_uptime_database = /** @type {(inputs: Content_Radar_Uptime_DatabaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Database`)
};

const es_content_radar_uptime_database = /** @type {(inputs: Content_Radar_Uptime_DatabaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Base de datos`)
};

const de_content_radar_uptime_database = /** @type {(inputs: Content_Radar_Uptime_DatabaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datenbank`)
};

const fr_content_radar_uptime_database = /** @type {(inputs: Content_Radar_Uptime_DatabaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Base de données`)
};

const it_content_radar_uptime_database = /** @type {(inputs: Content_Radar_Uptime_DatabaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Database`)
};

const nl_content_radar_uptime_database = /** @type {(inputs: Content_Radar_Uptime_DatabaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Database`)
};

const pl_content_radar_uptime_database = /** @type {(inputs: Content_Radar_Uptime_DatabaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baza danych`)
};

const pt_content_radar_uptime_database = /** @type {(inputs: Content_Radar_Uptime_DatabaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Banco de dados`)
};

const ru_content_radar_uptime_database = /** @type {(inputs: Content_Radar_Uptime_DatabaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`База данных`)
};

const sv_content_radar_uptime_database = /** @type {(inputs: Content_Radar_Uptime_DatabaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Databas`)
};

const tr_content_radar_uptime_database = /** @type {(inputs: Content_Radar_Uptime_DatabaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veritabanı`)
};

const zh_content_radar_uptime_database = /** @type {(inputs: Content_Radar_Uptime_DatabaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`数据库`)
};

const ja_content_radar_uptime_database = /** @type {(inputs: Content_Radar_Uptime_DatabaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`データベース`)
};

/**
* | output |
* | --- |
* | "Database" |
*
* @param {Content_Radar_Uptime_DatabaseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_uptime_database = /** @type {((inputs?: Content_Radar_Uptime_DatabaseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Uptime_DatabaseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_uptime_database(inputs)
	if (locale === "de") return de_content_radar_uptime_database(inputs)
	if (locale === "fr") return fr_content_radar_uptime_database(inputs)
	if (locale === "it") return it_content_radar_uptime_database(inputs)
	if (locale === "nl") return nl_content_radar_uptime_database(inputs)
	if (locale === "pl") return pl_content_radar_uptime_database(inputs)
	if (locale === "pt") return pt_content_radar_uptime_database(inputs)
	if (locale === "ru") return ru_content_radar_uptime_database(inputs)
	if (locale === "sv") return sv_content_radar_uptime_database(inputs)
	if (locale === "tr") return tr_content_radar_uptime_database(inputs)
	if (locale === "zh") return zh_content_radar_uptime_database(inputs)
	if (locale === "ja") return ja_content_radar_uptime_database(inputs)
	return en_content_radar_uptime_database(inputs)
});
