/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Admin_Eco_Release_SavedInputs */

const en_admin_eco_release_saved = /** @type {(inputs: Admin_Eco_Release_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} added`)
};

const es_admin_eco_release_saved = /** @type {(inputs: Admin_Eco_Release_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} añadida`)
};

const de_admin_eco_release_saved = /** @type {(inputs: Admin_Eco_Release_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} hinzugefügt`)
};

const fr_admin_eco_release_saved = /** @type {(inputs: Admin_Eco_Release_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ajoutée`)
};

const it_admin_eco_release_saved = /** @type {(inputs: Admin_Eco_Release_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} aggiunta`)
};

const nl_admin_eco_release_saved = /** @type {(inputs: Admin_Eco_Release_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} toegevoegd`)
};

const pl_admin_eco_release_saved = /** @type {(inputs: Admin_Eco_Release_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dodano ${i?.name}`)
};

const pt_admin_eco_release_saved = /** @type {(inputs: Admin_Eco_Release_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} adicionada`)
};

const ru_admin_eco_release_saved = /** @type {(inputs: Admin_Eco_Release_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} добавлена`)
};

const sv_admin_eco_release_saved = /** @type {(inputs: Admin_Eco_Release_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} tillagd`)
};

const tr_admin_eco_release_saved = /** @type {(inputs: Admin_Eco_Release_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} eklendi`)
};

const zh_admin_eco_release_saved = /** @type {(inputs: Admin_Eco_Release_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已添加 ${i?.name}`)
};

const ja_admin_eco_release_saved = /** @type {(inputs: Admin_Eco_Release_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を追加しました`)
};

/**
* | output |
* | --- |
* | "{name} added" |
*
* @param {Admin_Eco_Release_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_release_saved = /** @type {((inputs: Admin_Eco_Release_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Release_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_release_saved(inputs)
	if (locale === "de") return de_admin_eco_release_saved(inputs)
	if (locale === "fr") return fr_admin_eco_release_saved(inputs)
	if (locale === "it") return it_admin_eco_release_saved(inputs)
	if (locale === "nl") return nl_admin_eco_release_saved(inputs)
	if (locale === "pl") return pl_admin_eco_release_saved(inputs)
	if (locale === "pt") return pt_admin_eco_release_saved(inputs)
	if (locale === "ru") return ru_admin_eco_release_saved(inputs)
	if (locale === "sv") return sv_admin_eco_release_saved(inputs)
	if (locale === "tr") return tr_admin_eco_release_saved(inputs)
	if (locale === "zh") return zh_admin_eco_release_saved(inputs)
	if (locale === "ja") return ja_admin_eco_release_saved(inputs)
	return en_admin_eco_release_saved(inputs)
});
