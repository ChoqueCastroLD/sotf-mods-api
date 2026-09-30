/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Rum_Empty_TitleInputs */

const en_admin_rum_empty_title = /** @type {(inputs: Admin_Rum_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No field data yet`)
};

const es_admin_rum_empty_title = /** @type {(inputs: Admin_Rum_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay datos de campo`)
};

const de_admin_rum_empty_title = /** @type {(inputs: Admin_Rum_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Felddaten`)
};

const fr_admin_rum_empty_title = /** @type {(inputs: Admin_Rum_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore de données de terrain`)
};

const it_admin_rum_empty_title = /** @type {(inputs: Admin_Rum_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun dato sul campo`)
};

const nl_admin_rum_empty_title = /** @type {(inputs: Admin_Rum_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen veldgegevens`)
};

const pl_admin_rum_empty_title = /** @type {(inputs: Admin_Rum_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak jeszcze danych z terenu`)
};

const pt_admin_rum_empty_title = /** @type {(inputs: Admin_Rum_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda sem dados de campo`)
};

const ru_admin_rum_empty_title = /** @type {(inputs: Admin_Rum_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полевых данных пока нет`)
};

const sv_admin_rum_empty_title = /** @type {(inputs: Admin_Rum_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen fältdata än`)
};

const tr_admin_rum_empty_title = /** @type {(inputs: Admin_Rum_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz saha verisi yok`)
};

const zh_admin_rum_empty_title = /** @type {(inputs: Admin_Rum_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有实测数据`)
};

const ja_admin_rum_empty_title = /** @type {(inputs: Admin_Rum_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだフィールドデータがありません`)
};

/**
* | output |
* | --- |
* | "No field data yet" |
*
* @param {Admin_Rum_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_rum_empty_title = /** @type {((inputs?: Admin_Rum_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Rum_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_rum_empty_title(inputs)
	if (locale === "de") return de_admin_rum_empty_title(inputs)
	if (locale === "fr") return fr_admin_rum_empty_title(inputs)
	if (locale === "it") return it_admin_rum_empty_title(inputs)
	if (locale === "nl") return nl_admin_rum_empty_title(inputs)
	if (locale === "pl") return pl_admin_rum_empty_title(inputs)
	if (locale === "pt") return pt_admin_rum_empty_title(inputs)
	if (locale === "ru") return ru_admin_rum_empty_title(inputs)
	if (locale === "sv") return sv_admin_rum_empty_title(inputs)
	if (locale === "tr") return tr_admin_rum_empty_title(inputs)
	if (locale === "zh") return zh_admin_rum_empty_title(inputs)
	if (locale === "ja") return ja_admin_rum_empty_title(inputs)
	return en_admin_rum_empty_title(inputs)
});
