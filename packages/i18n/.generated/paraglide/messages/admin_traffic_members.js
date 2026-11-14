/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_MembersInputs */

const en_admin_traffic_members = /** @type {(inputs: Admin_Traffic_MembersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New members`)
};

const es_admin_traffic_members = /** @type {(inputs: Admin_Traffic_MembersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Miembros nuevos`)
};

const de_admin_traffic_members = /** @type {(inputs: Admin_Traffic_MembersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Mitglieder`)
};

const fr_admin_traffic_members = /** @type {(inputs: Admin_Traffic_MembersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveaux membres`)
};

const it_admin_traffic_members = /** @type {(inputs: Admin_Traffic_MembersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovi membri`)
};

const nl_admin_traffic_members = /** @type {(inputs: Admin_Traffic_MembersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe leden`)
};

const pl_admin_traffic_members = /** @type {(inputs: Admin_Traffic_MembersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowi członkowie`)
};

const pt_admin_traffic_members = /** @type {(inputs: Admin_Traffic_MembersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novos membros`)
};

const ru_admin_traffic_members = /** @type {(inputs: Admin_Traffic_MembersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые участники`)
};

const sv_admin_traffic_members = /** @type {(inputs: Admin_Traffic_MembersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nya medlemmar`)
};

const tr_admin_traffic_members = /** @type {(inputs: Admin_Traffic_MembersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni üyeler`)
};

const zh_admin_traffic_members = /** @type {(inputs: Admin_Traffic_MembersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新会员`)
};

const ja_admin_traffic_members = /** @type {(inputs: Admin_Traffic_MembersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新規メンバー`)
};

/**
* | output |
* | --- |
* | "New members" |
*
* @param {Admin_Traffic_MembersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_members = /** @type {((inputs?: Admin_Traffic_MembersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_MembersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_members(inputs)
	if (locale === "de") return de_admin_traffic_members(inputs)
	if (locale === "fr") return fr_admin_traffic_members(inputs)
	if (locale === "it") return it_admin_traffic_members(inputs)
	if (locale === "nl") return nl_admin_traffic_members(inputs)
	if (locale === "pl") return pl_admin_traffic_members(inputs)
	if (locale === "pt") return pt_admin_traffic_members(inputs)
	if (locale === "ru") return ru_admin_traffic_members(inputs)
	if (locale === "sv") return sv_admin_traffic_members(inputs)
	if (locale === "tr") return tr_admin_traffic_members(inputs)
	if (locale === "zh") return zh_admin_traffic_members(inputs)
	if (locale === "ja") return ja_admin_traffic_members(inputs)
	return en_admin_traffic_members(inputs)
});
