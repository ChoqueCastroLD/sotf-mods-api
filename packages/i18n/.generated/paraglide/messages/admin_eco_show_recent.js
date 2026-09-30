/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Eco_Show_RecentInputs */

const en_admin_eco_show_recent = /** @type {(inputs: Admin_Eco_Show_RecentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Show the latest ${i?.count}`)
};

const es_admin_eco_show_recent = /** @type {(inputs: Admin_Eco_Show_RecentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mostrar las últimas ${i?.count}`)
};

const de_admin_eco_show_recent = /** @type {(inputs: Admin_Eco_Show_RecentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Die letzten ${i?.count} anzeigen`)
};

const fr_admin_eco_show_recent = /** @type {(inputs: Admin_Eco_Show_RecentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Afficher les ${i?.count} derniers`)
};

const it_admin_eco_show_recent = /** @type {(inputs: Admin_Eco_Show_RecentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mostra le ultime ${i?.count}`)
};

const nl_admin_eco_show_recent = /** @type {(inputs: Admin_Eco_Show_RecentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De laatste ${i?.count} tonen`)
};

const pl_admin_eco_show_recent = /** @type {(inputs: Admin_Eco_Show_RecentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pokaż ostatnie (${i?.count})`)
};

const pt_admin_eco_show_recent = /** @type {(inputs: Admin_Eco_Show_RecentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mostrar os últimos ${i?.count}`)
};

const ru_admin_eco_show_recent = /** @type {(inputs: Admin_Eco_Show_RecentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Показать последние (${i?.count})`)
};

const sv_admin_eco_show_recent = /** @type {(inputs: Admin_Eco_Show_RecentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Visa de senaste ${i?.count}`)
};

const tr_admin_eco_show_recent = /** @type {(inputs: Admin_Eco_Show_RecentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Son ${i?.count} sürümü göster`)
};

const zh_admin_eco_show_recent = /** @type {(inputs: Admin_Eco_Show_RecentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`只显示最近 ${i?.count} 个`)
};

const ja_admin_eco_show_recent = /** @type {(inputs: Admin_Eco_Show_RecentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最新 ${i?.count} 件を表示`)
};

/**
* | output |
* | --- |
* | "Show the latest {count}" |
*
* @param {Admin_Eco_Show_RecentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_show_recent = /** @type {((inputs: Admin_Eco_Show_RecentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Show_RecentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_show_recent(inputs)
	if (locale === "de") return de_admin_eco_show_recent(inputs)
	if (locale === "fr") return fr_admin_eco_show_recent(inputs)
	if (locale === "it") return it_admin_eco_show_recent(inputs)
	if (locale === "nl") return nl_admin_eco_show_recent(inputs)
	if (locale === "pl") return pl_admin_eco_show_recent(inputs)
	if (locale === "pt") return pt_admin_eco_show_recent(inputs)
	if (locale === "ru") return ru_admin_eco_show_recent(inputs)
	if (locale === "sv") return sv_admin_eco_show_recent(inputs)
	if (locale === "tr") return tr_admin_eco_show_recent(inputs)
	if (locale === "zh") return zh_admin_eco_show_recent(inputs)
	if (locale === "ja") return ja_admin_eco_show_recent(inputs)
	return en_admin_eco_show_recent(inputs)
});
