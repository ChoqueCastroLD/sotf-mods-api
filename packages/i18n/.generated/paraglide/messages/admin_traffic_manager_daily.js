/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_Manager_DailyInputs */

const en_admin_traffic_manager_daily = /** @type {(inputs: Admin_Traffic_Manager_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manager users per day`)
};

const es_admin_traffic_manager_daily = /** @type {(inputs: Admin_Traffic_Manager_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuarios del manager por día`)
};

const de_admin_traffic_manager_daily = /** @type {(inputs: Admin_Traffic_Manager_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manager-Nutzer pro Tag`)
};

const fr_admin_traffic_manager_daily = /** @type {(inputs: Admin_Traffic_Manager_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisateurs du manager par jour`)
};

const it_admin_traffic_manager_daily = /** @type {(inputs: Admin_Traffic_Manager_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utenti del manager al giorno`)
};

const nl_admin_traffic_manager_daily = /** @type {(inputs: Admin_Traffic_Manager_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Managergebruikers per dag`)
};

const pl_admin_traffic_manager_daily = /** @type {(inputs: Admin_Traffic_Manager_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użytkownicy menedżera dziennie`)
};

const pt_admin_traffic_manager_daily = /** @type {(inputs: Admin_Traffic_Manager_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuários do manager por dia`)
};

const ru_admin_traffic_manager_daily = /** @type {(inputs: Admin_Traffic_Manager_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пользователи менеджера в день`)
};

const sv_admin_traffic_manager_daily = /** @type {(inputs: Admin_Traffic_Manager_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Managerns användare per dag`)
};

const tr_admin_traffic_manager_daily = /** @type {(inputs: Admin_Traffic_Manager_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Günlük yönetici kullanıcısı`)
};

const zh_admin_traffic_manager_daily = /** @type {(inputs: Admin_Traffic_Manager_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理器每日用户`)
};

const ja_admin_traffic_manager_daily = /** @type {(inputs: Admin_Traffic_Manager_DailyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マネージャーの日次ユーザー`)
};

/**
* | output |
* | --- |
* | "Manager users per day" |
*
* @param {Admin_Traffic_Manager_DailyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_manager_daily = /** @type {((inputs?: Admin_Traffic_Manager_DailyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_Manager_DailyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_manager_daily(inputs)
	if (locale === "de") return de_admin_traffic_manager_daily(inputs)
	if (locale === "fr") return fr_admin_traffic_manager_daily(inputs)
	if (locale === "it") return it_admin_traffic_manager_daily(inputs)
	if (locale === "nl") return nl_admin_traffic_manager_daily(inputs)
	if (locale === "pl") return pl_admin_traffic_manager_daily(inputs)
	if (locale === "pt") return pt_admin_traffic_manager_daily(inputs)
	if (locale === "ru") return ru_admin_traffic_manager_daily(inputs)
	if (locale === "sv") return sv_admin_traffic_manager_daily(inputs)
	if (locale === "tr") return tr_admin_traffic_manager_daily(inputs)
	if (locale === "zh") return zh_admin_traffic_manager_daily(inputs)
	if (locale === "ja") return ja_admin_traffic_manager_daily(inputs)
	return en_admin_traffic_manager_daily(inputs)
});
