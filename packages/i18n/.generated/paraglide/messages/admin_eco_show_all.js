/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Eco_Show_AllInputs */

const en_admin_eco_show_all = /** @type {(inputs: Admin_Eco_Show_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Show all ${i?.count} builds`)
};

const es_admin_eco_show_all = /** @type {(inputs: Admin_Eco_Show_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mostrar las ${i?.count} builds`)
};

const de_admin_eco_show_all = /** @type {(inputs: Admin_Eco_Show_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Alle ${i?.count} Builds anzeigen`)
};

const fr_admin_eco_show_all = /** @type {(inputs: Admin_Eco_Show_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Afficher les ${i?.count} builds`)
};

const it_admin_eco_show_all = /** @type {(inputs: Admin_Eco_Show_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mostra tutte le ${i?.count} build`)
};

const nl_admin_eco_show_all = /** @type {(inputs: Admin_Eco_Show_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Alle ${i?.count} builds tonen`)
};

const pl_admin_eco_show_all = /** @type {(inputs: Admin_Eco_Show_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pokaż wszystkie buildy (${i?.count})`)
};

const pt_admin_eco_show_all = /** @type {(inputs: Admin_Eco_Show_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mostrar os ${i?.count} builds`)
};

const ru_admin_eco_show_all = /** @type {(inputs: Admin_Eco_Show_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Показать все сборки (${i?.count})`)
};

const sv_admin_eco_show_all = /** @type {(inputs: Admin_Eco_Show_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Visa alla ${i?.count} byggen`)
};

const tr_admin_eco_show_all = /** @type {(inputs: Admin_Eco_Show_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} sürümün hepsini göster`)
};

const zh_admin_eco_show_all = /** @type {(inputs: Admin_Eco_Show_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`显示全部 ${i?.count} 个版本`)
};

const ja_admin_eco_show_all = /** @type {(inputs: Admin_Eco_Show_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 件のビルドをすべて表示`)
};

/**
* | output |
* | --- |
* | "Show all {count} builds" |
*
* @param {Admin_Eco_Show_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_show_all = /** @type {((inputs: Admin_Eco_Show_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Show_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_show_all(inputs)
	if (locale === "de") return de_admin_eco_show_all(inputs)
	if (locale === "fr") return fr_admin_eco_show_all(inputs)
	if (locale === "it") return it_admin_eco_show_all(inputs)
	if (locale === "nl") return nl_admin_eco_show_all(inputs)
	if (locale === "pl") return pl_admin_eco_show_all(inputs)
	if (locale === "pt") return pt_admin_eco_show_all(inputs)
	if (locale === "ru") return ru_admin_eco_show_all(inputs)
	if (locale === "sv") return sv_admin_eco_show_all(inputs)
	if (locale === "tr") return tr_admin_eco_show_all(inputs)
	if (locale === "zh") return zh_admin_eco_show_all(inputs)
	if (locale === "ja") return ja_admin_eco_show_all(inputs)
	return en_admin_eco_show_all(inputs)
});
