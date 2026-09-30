/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Show_MoreInputs */

const en_admin_show_more = /** @type {(inputs: Admin_Show_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Show ${i?.count} more`)
};

const es_admin_show_more = /** @type {(inputs: Admin_Show_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mostrar ${i?.count} más`)
};

const de_admin_show_more = /** @type {(inputs: Admin_Show_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} weitere anzeigen`)
};

const fr_admin_show_more = /** @type {(inputs: Admin_Show_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Afficher ${i?.count} de plus`)
};

const it_admin_show_more = /** @type {(inputs: Admin_Show_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mostra altri ${i?.count}`)
};

const nl_admin_show_more = /** @type {(inputs: Admin_Show_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nog ${i?.count} tonen`)
};

const pl_admin_show_more = /** @type {(inputs: Admin_Show_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pokaż więcej (${i?.count})`)
};

const pt_admin_show_more = /** @type {(inputs: Admin_Show_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mostrar mais ${i?.count}`)
};

const ru_admin_show_more = /** @type {(inputs: Admin_Show_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Показать ещё (${i?.count})`)
};

const sv_admin_show_more = /** @type {(inputs: Admin_Show_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Visa ${i?.count} till`)
};

const tr_admin_show_more = /** @type {(inputs: Admin_Show_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} tane daha göster`)
};

const zh_admin_show_more = /** @type {(inputs: Admin_Show_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`再显示 ${i?.count} 条`)
};

const ja_admin_show_more = /** @type {(inputs: Admin_Show_MoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`さらに ${i?.count} 件表示`)
};

/**
* | output |
* | --- |
* | "Show {count} more" |
*
* @param {Admin_Show_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_show_more = /** @type {((inputs: Admin_Show_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Show_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_show_more(inputs)
	if (locale === "de") return de_admin_show_more(inputs)
	if (locale === "fr") return fr_admin_show_more(inputs)
	if (locale === "it") return it_admin_show_more(inputs)
	if (locale === "nl") return nl_admin_show_more(inputs)
	if (locale === "pl") return pl_admin_show_more(inputs)
	if (locale === "pt") return pt_admin_show_more(inputs)
	if (locale === "ru") return ru_admin_show_more(inputs)
	if (locale === "sv") return sv_admin_show_more(inputs)
	if (locale === "tr") return tr_admin_show_more(inputs)
	if (locale === "zh") return zh_admin_show_more(inputs)
	if (locale === "ja") return ja_admin_show_more(inputs)
	return en_admin_show_more(inputs)
});
