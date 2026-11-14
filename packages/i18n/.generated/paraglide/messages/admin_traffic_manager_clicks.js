/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_Manager_ClicksInputs */

const en_admin_traffic_manager_clicks = /** @type {(inputs: Admin_Traffic_Manager_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manager download clicks`)
};

const es_admin_traffic_manager_clicks = /** @type {(inputs: Admin_Traffic_Manager_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clics en descargar el manager`)
};

const de_admin_traffic_manager_clicks = /** @type {(inputs: Admin_Traffic_Manager_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klicks auf Manager-Download`)
};

const fr_admin_traffic_manager_clicks = /** @type {(inputs: Admin_Traffic_Manager_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clics sur télécharger le manager`)
};

const it_admin_traffic_manager_clicks = /** @type {(inputs: Admin_Traffic_Manager_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clic su scarica il manager`)
};

const nl_admin_traffic_manager_clicks = /** @type {(inputs: Admin_Traffic_Manager_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klikken op manager downloaden`)
};

const pl_admin_traffic_manager_clicks = /** @type {(inputs: Admin_Traffic_Manager_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kliknięcia w pobranie menedżera`)
};

const pt_admin_traffic_manager_clicks = /** @type {(inputs: Admin_Traffic_Manager_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cliques em baixar o manager`)
};

const ru_admin_traffic_manager_clicks = /** @type {(inputs: Admin_Traffic_Manager_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Клики по скачиванию менеджера`)
};

const sv_admin_traffic_manager_clicks = /** @type {(inputs: Admin_Traffic_Manager_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klick på ladda ner managern`)
};

const tr_admin_traffic_manager_clicks = /** @type {(inputs: Admin_Traffic_Manager_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yönetici indirme tıklamaları`)
};

const zh_admin_traffic_manager_clicks = /** @type {(inputs: Admin_Traffic_Manager_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理器下载点击`)
};

const ja_admin_traffic_manager_clicks = /** @type {(inputs: Admin_Traffic_Manager_ClicksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マネージャーのダウンロードクリック`)
};

/**
* | output |
* | --- |
* | "Manager download clicks" |
*
* @param {Admin_Traffic_Manager_ClicksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_manager_clicks = /** @type {((inputs?: Admin_Traffic_Manager_ClicksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_Manager_ClicksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_manager_clicks(inputs)
	if (locale === "de") return de_admin_traffic_manager_clicks(inputs)
	if (locale === "fr") return fr_admin_traffic_manager_clicks(inputs)
	if (locale === "it") return it_admin_traffic_manager_clicks(inputs)
	if (locale === "nl") return nl_admin_traffic_manager_clicks(inputs)
	if (locale === "pl") return pl_admin_traffic_manager_clicks(inputs)
	if (locale === "pt") return pt_admin_traffic_manager_clicks(inputs)
	if (locale === "ru") return ru_admin_traffic_manager_clicks(inputs)
	if (locale === "sv") return sv_admin_traffic_manager_clicks(inputs)
	if (locale === "tr") return tr_admin_traffic_manager_clicks(inputs)
	if (locale === "zh") return zh_admin_traffic_manager_clicks(inputs)
	if (locale === "ja") return ja_admin_traffic_manager_clicks(inputs)
	return en_admin_traffic_manager_clicks(inputs)
});
