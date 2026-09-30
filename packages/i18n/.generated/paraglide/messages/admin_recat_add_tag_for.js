/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Admin_Recat_Add_Tag_ForInputs */

const en_admin_recat_add_tag_for = /** @type {(inputs: Admin_Recat_Add_Tag_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Add a tag to ${i?.name}`)
};

const es_admin_recat_add_tag_for = /** @type {(inputs: Admin_Recat_Add_Tag_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Añadir una etiqueta a ${i?.name}`)
};

const de_admin_recat_add_tag_for = /** @type {(inputs: Admin_Recat_Add_Tag_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tag zu ${i?.name} hinzufügen`)
};

const fr_admin_recat_add_tag_for = /** @type {(inputs: Admin_Recat_Add_Tag_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ajouter un tag à ${i?.name}`)
};

const it_admin_recat_add_tag_for = /** @type {(inputs: Admin_Recat_Add_Tag_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aggiungi un tag a ${i?.name}`)
};

const nl_admin_recat_add_tag_for = /** @type {(inputs: Admin_Recat_Add_Tag_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tag toevoegen aan ${i?.name}`)
};

const pl_admin_recat_add_tag_for = /** @type {(inputs: Admin_Recat_Add_Tag_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dodaj tag do ${i?.name}`)
};

const pt_admin_recat_add_tag_for = /** @type {(inputs: Admin_Recat_Add_Tag_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Adicionar uma tag a ${i?.name}`)
};

const ru_admin_recat_add_tag_for = /** @type {(inputs: Admin_Recat_Add_Tag_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Добавить тег для ${i?.name}`)
};

const sv_admin_recat_add_tag_for = /** @type {(inputs: Admin_Recat_Add_Tag_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lägg till en tagg på ${i?.name}`)
};

const tr_admin_recat_add_tag_for = /** @type {(inputs: Admin_Recat_Add_Tag_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} moduna etiket ekle`)
};

const zh_admin_recat_add_tag_for = /** @type {(inputs: Admin_Recat_Add_Tag_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`为 ${i?.name} 添加标签`)
};

const ja_admin_recat_add_tag_for = /** @type {(inputs: Admin_Recat_Add_Tag_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} にタグを追加`)
};

/**
* | output |
* | --- |
* | "Add a tag to {name}" |
*
* @param {Admin_Recat_Add_Tag_ForInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_add_tag_for = /** @type {((inputs: Admin_Recat_Add_Tag_ForInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Add_Tag_ForInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_add_tag_for(inputs)
	if (locale === "de") return de_admin_recat_add_tag_for(inputs)
	if (locale === "fr") return fr_admin_recat_add_tag_for(inputs)
	if (locale === "it") return it_admin_recat_add_tag_for(inputs)
	if (locale === "nl") return nl_admin_recat_add_tag_for(inputs)
	if (locale === "pl") return pl_admin_recat_add_tag_for(inputs)
	if (locale === "pt") return pt_admin_recat_add_tag_for(inputs)
	if (locale === "ru") return ru_admin_recat_add_tag_for(inputs)
	if (locale === "sv") return sv_admin_recat_add_tag_for(inputs)
	if (locale === "tr") return tr_admin_recat_add_tag_for(inputs)
	if (locale === "zh") return zh_admin_recat_add_tag_for(inputs)
	if (locale === "ja") return ja_admin_recat_add_tag_for(inputs)
	return en_admin_recat_add_tag_for(inputs)
});
