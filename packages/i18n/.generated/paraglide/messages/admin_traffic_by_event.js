/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_By_EventInputs */

const en_admin_traffic_by_event = /** @type {(inputs: Admin_Traffic_By_EventInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actions`)
};

const es_admin_traffic_by_event = /** @type {(inputs: Admin_Traffic_By_EventInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acciones`)
};

const de_admin_traffic_by_event = /** @type {(inputs: Admin_Traffic_By_EventInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktionen`)
};

const fr_admin_traffic_by_event = /** @type {(inputs: Admin_Traffic_By_EventInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actions`)
};

const it_admin_traffic_by_event = /** @type {(inputs: Admin_Traffic_By_EventInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Azioni`)
};

const nl_admin_traffic_by_event = /** @type {(inputs: Admin_Traffic_By_EventInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acties`)
};

const pl_admin_traffic_by_event = /** @type {(inputs: Admin_Traffic_By_EventInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Akcje`)
};

const pt_admin_traffic_by_event = /** @type {(inputs: Admin_Traffic_By_EventInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ações`)
};

const ru_admin_traffic_by_event = /** @type {(inputs: Admin_Traffic_By_EventInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Действия`)
};

const sv_admin_traffic_by_event = /** @type {(inputs: Admin_Traffic_By_EventInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Handlingar`)
};

const tr_admin_traffic_by_event = /** @type {(inputs: Admin_Traffic_By_EventInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eylemler`)
};

const zh_admin_traffic_by_event = /** @type {(inputs: Admin_Traffic_By_EventInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作`)
};

const ja_admin_traffic_by_event = /** @type {(inputs: Admin_Traffic_By_EventInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アクション`)
};

/**
* | output |
* | --- |
* | "Actions" |
*
* @param {Admin_Traffic_By_EventInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_by_event = /** @type {((inputs?: Admin_Traffic_By_EventInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_By_EventInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_by_event(inputs)
	if (locale === "de") return de_admin_traffic_by_event(inputs)
	if (locale === "fr") return fr_admin_traffic_by_event(inputs)
	if (locale === "it") return it_admin_traffic_by_event(inputs)
	if (locale === "nl") return nl_admin_traffic_by_event(inputs)
	if (locale === "pl") return pl_admin_traffic_by_event(inputs)
	if (locale === "pt") return pt_admin_traffic_by_event(inputs)
	if (locale === "ru") return ru_admin_traffic_by_event(inputs)
	if (locale === "sv") return sv_admin_traffic_by_event(inputs)
	if (locale === "tr") return tr_admin_traffic_by_event(inputs)
	if (locale === "zh") return zh_admin_traffic_by_event(inputs)
	if (locale === "ja") return ja_admin_traffic_by_event(inputs)
	return en_admin_traffic_by_event(inputs)
});
