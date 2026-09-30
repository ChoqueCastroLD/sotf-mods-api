/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Admin_Tax_Tag_SavedInputs */

const en_admin_tax_tag_saved = /** @type {(inputs: Admin_Tax_Tag_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} saved`)
};

const es_admin_tax_tag_saved = /** @type {(inputs: Admin_Tax_Tag_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} guardada`)
};

const de_admin_tax_tag_saved = /** @type {(inputs: Admin_Tax_Tag_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} gespeichert`)
};

const fr_admin_tax_tag_saved = /** @type {(inputs: Admin_Tax_Tag_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} enregistré`)
};

const it_admin_tax_tag_saved = /** @type {(inputs: Admin_Tax_Tag_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} salvato`)
};

const nl_admin_tax_tag_saved = /** @type {(inputs: Admin_Tax_Tag_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} opgeslagen`)
};

const pl_admin_tax_tag_saved = /** @type {(inputs: Admin_Tax_Tag_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zapisano ${i?.name}`)
};

const pt_admin_tax_tag_saved = /** @type {(inputs: Admin_Tax_Tag_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} salva`)
};

const ru_admin_tax_tag_saved = /** @type {(inputs: Admin_Tax_Tag_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} сохранён`)
};

const sv_admin_tax_tag_saved = /** @type {(inputs: Admin_Tax_Tag_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} sparad`)
};

const tr_admin_tax_tag_saved = /** @type {(inputs: Admin_Tax_Tag_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} kaydedildi`)
};

const zh_admin_tax_tag_saved = /** @type {(inputs: Admin_Tax_Tag_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 已保存`)
};

const ja_admin_tax_tag_saved = /** @type {(inputs: Admin_Tax_Tag_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を保存しました`)
};

/**
* | output |
* | --- |
* | "{name} saved" |
*
* @param {Admin_Tax_Tag_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_tag_saved = /** @type {((inputs: Admin_Tax_Tag_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Tag_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_tag_saved(inputs)
	if (locale === "de") return de_admin_tax_tag_saved(inputs)
	if (locale === "fr") return fr_admin_tax_tag_saved(inputs)
	if (locale === "it") return it_admin_tax_tag_saved(inputs)
	if (locale === "nl") return nl_admin_tax_tag_saved(inputs)
	if (locale === "pl") return pl_admin_tax_tag_saved(inputs)
	if (locale === "pt") return pt_admin_tax_tag_saved(inputs)
	if (locale === "ru") return ru_admin_tax_tag_saved(inputs)
	if (locale === "sv") return sv_admin_tax_tag_saved(inputs)
	if (locale === "tr") return tr_admin_tax_tag_saved(inputs)
	if (locale === "zh") return zh_admin_tax_tag_saved(inputs)
	if (locale === "ja") return ja_admin_tax_tag_saved(inputs)
	return en_admin_tax_tag_saved(inputs)
});
