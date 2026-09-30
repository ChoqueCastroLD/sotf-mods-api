/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Admin_Recat_Target_ForInputs */

const en_admin_recat_target_for = /** @type {(inputs: Admin_Recat_Target_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`New category for ${i?.name}`)
};

const es_admin_recat_target_for = /** @type {(inputs: Admin_Recat_Target_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nueva categoría de ${i?.name}`)
};

const de_admin_recat_target_for = /** @type {(inputs: Admin_Recat_Target_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Neue Kategorie für ${i?.name}`)
};

const fr_admin_recat_target_for = /** @type {(inputs: Admin_Recat_Target_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nouvelle catégorie de ${i?.name}`)
};

const it_admin_recat_target_for = /** @type {(inputs: Admin_Recat_Target_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nuova categoria per ${i?.name}`)
};

const nl_admin_recat_target_for = /** @type {(inputs: Admin_Recat_Target_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nieuwe categorie voor ${i?.name}`)
};

const pl_admin_recat_target_for = /** @type {(inputs: Admin_Recat_Target_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nowa kategoria dla ${i?.name}`)
};

const pt_admin_recat_target_for = /** @type {(inputs: Admin_Recat_Target_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nova categoria de ${i?.name}`)
};

const ru_admin_recat_target_for = /** @type {(inputs: Admin_Recat_Target_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Новая категория для ${i?.name}`)
};

const sv_admin_recat_target_for = /** @type {(inputs: Admin_Recat_Target_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ny kategori för ${i?.name}`)
};

const tr_admin_recat_target_for = /** @type {(inputs: Admin_Recat_Target_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} için yeni kategori`)
};

const zh_admin_recat_target_for = /** @type {(inputs: Admin_Recat_Target_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的新分类`)
};

const ja_admin_recat_target_for = /** @type {(inputs: Admin_Recat_Target_ForInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の新しいカテゴリー`)
};

/**
* | output |
* | --- |
* | "New category for {name}" |
*
* @param {Admin_Recat_Target_ForInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_target_for = /** @type {((inputs: Admin_Recat_Target_ForInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Target_ForInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_target_for(inputs)
	if (locale === "de") return de_admin_recat_target_for(inputs)
	if (locale === "fr") return fr_admin_recat_target_for(inputs)
	if (locale === "it") return it_admin_recat_target_for(inputs)
	if (locale === "nl") return nl_admin_recat_target_for(inputs)
	if (locale === "pl") return pl_admin_recat_target_for(inputs)
	if (locale === "pt") return pt_admin_recat_target_for(inputs)
	if (locale === "ru") return ru_admin_recat_target_for(inputs)
	if (locale === "sv") return sv_admin_recat_target_for(inputs)
	if (locale === "tr") return tr_admin_recat_target_for(inputs)
	if (locale === "zh") return zh_admin_recat_target_for(inputs)
	if (locale === "ja") return ja_admin_recat_target_for(inputs)
	return en_admin_recat_target_for(inputs)
});
