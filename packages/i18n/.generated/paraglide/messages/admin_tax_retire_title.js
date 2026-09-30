/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Admin_Tax_Retire_TitleInputs */

const en_admin_tax_retire_title = /** @type {(inputs: Admin_Tax_Retire_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retire ${i?.name}?`)
};

const es_admin_tax_retire_title = /** @type {(inputs: Admin_Tax_Retire_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Retirar ${i?.name}?`)
};

const de_admin_tax_retire_title = /** @type {(inputs: Admin_Tax_Retire_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} stilllegen?`)
};

const fr_admin_tax_retire_title = /** @type {(inputs: Admin_Tax_Retire_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirer ${i?.name} ?`)
};

const it_admin_tax_retire_title = /** @type {(inputs: Admin_Tax_Retire_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ritirare ${i?.name}?`)
};

const nl_admin_tax_retire_title = /** @type {(inputs: Admin_Tax_Retire_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} intrekken?`)
};

const pl_admin_tax_retire_title = /** @type {(inputs: Admin_Tax_Retire_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wycofać ${i?.name}?`)
};

const pt_admin_tax_retire_title = /** @type {(inputs: Admin_Tax_Retire_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aposentar ${i?.name}?`)
};

const ru_admin_tax_retire_title = /** @type {(inputs: Admin_Tax_Retire_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вывести ${i?.name}?`)
};

const sv_admin_tax_retire_title = /** @type {(inputs: Admin_Tax_Retire_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pensionera ${i?.name}?`)
};

const tr_admin_tax_retire_title = /** @type {(inputs: Admin_Tax_Retire_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} emekliye ayrılsın mı?`)
};

const zh_admin_tax_retire_title = /** @type {(inputs: Admin_Tax_Retire_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`停用 ${i?.name}？`)
};

const ja_admin_tax_retire_title = /** @type {(inputs: Admin_Tax_Retire_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を引退させますか？`)
};

/**
* | output |
* | --- |
* | "Retire {name}?" |
*
* @param {Admin_Tax_Retire_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_retire_title = /** @type {((inputs: Admin_Tax_Retire_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Retire_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_retire_title(inputs)
	if (locale === "de") return de_admin_tax_retire_title(inputs)
	if (locale === "fr") return fr_admin_tax_retire_title(inputs)
	if (locale === "it") return it_admin_tax_retire_title(inputs)
	if (locale === "nl") return nl_admin_tax_retire_title(inputs)
	if (locale === "pl") return pl_admin_tax_retire_title(inputs)
	if (locale === "pt") return pt_admin_tax_retire_title(inputs)
	if (locale === "ru") return ru_admin_tax_retire_title(inputs)
	if (locale === "sv") return sv_admin_tax_retire_title(inputs)
	if (locale === "tr") return tr_admin_tax_retire_title(inputs)
	if (locale === "zh") return zh_admin_tax_retire_title(inputs)
	if (locale === "ja") return ja_admin_tax_retire_title(inputs)
	return en_admin_tax_retire_title(inputs)
});
