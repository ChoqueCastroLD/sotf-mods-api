/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_Member_ViewsInputs */

const en_admin_traffic_member_views = /** @type {(inputs: Admin_Traffic_Member_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Views by members`)
};

const es_admin_traffic_member_views = /** @type {(inputs: Admin_Traffic_Member_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vistas de miembros`)
};

const de_admin_traffic_member_views = /** @type {(inputs: Admin_Traffic_Member_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aufrufe von Mitgliedern`)
};

const fr_admin_traffic_member_views = /** @type {(inputs: Admin_Traffic_Member_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vues des membres`)
};

const it_admin_traffic_member_views = /** @type {(inputs: Admin_Traffic_Member_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visualizzazioni dei membri`)
};

const nl_admin_traffic_member_views = /** @type {(inputs: Admin_Traffic_Member_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weergaven door leden`)
};

const pl_admin_traffic_member_views = /** @type {(inputs: Admin_Traffic_Member_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odsłony członków`)
};

const pt_admin_traffic_member_views = /** @type {(inputs: Admin_Traffic_Member_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visualizações de membros`)
};

const ru_admin_traffic_member_views = /** @type {(inputs: Admin_Traffic_Member_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Просмотры участников`)
};

const sv_admin_traffic_member_views = /** @type {(inputs: Admin_Traffic_Member_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visningar av medlemmar`)
};

const tr_admin_traffic_member_views = /** @type {(inputs: Admin_Traffic_Member_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üye görüntülemeleri`)
};

const zh_admin_traffic_member_views = /** @type {(inputs: Admin_Traffic_Member_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`会员浏览`)
};

const ja_admin_traffic_member_views = /** @type {(inputs: Admin_Traffic_Member_ViewsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メンバーのビュー`)
};

/**
* | output |
* | --- |
* | "Views by members" |
*
* @param {Admin_Traffic_Member_ViewsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_member_views = /** @type {((inputs?: Admin_Traffic_Member_ViewsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_Member_ViewsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_member_views(inputs)
	if (locale === "de") return de_admin_traffic_member_views(inputs)
	if (locale === "fr") return fr_admin_traffic_member_views(inputs)
	if (locale === "it") return it_admin_traffic_member_views(inputs)
	if (locale === "nl") return nl_admin_traffic_member_views(inputs)
	if (locale === "pl") return pl_admin_traffic_member_views(inputs)
	if (locale === "pt") return pt_admin_traffic_member_views(inputs)
	if (locale === "ru") return ru_admin_traffic_member_views(inputs)
	if (locale === "sv") return sv_admin_traffic_member_views(inputs)
	if (locale === "tr") return tr_admin_traffic_member_views(inputs)
	if (locale === "zh") return zh_admin_traffic_member_views(inputs)
	if (locale === "ja") return ja_admin_traffic_member_views(inputs)
	return en_admin_traffic_member_views(inputs)
});
