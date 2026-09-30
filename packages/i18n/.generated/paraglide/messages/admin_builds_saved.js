/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ label: NonNullable<unknown> }} Admin_Builds_SavedInputs */

const en_admin_builds_saved = /** @type {(inputs: Admin_Builds_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} saved`)
};

const es_admin_builds_saved = /** @type {(inputs: Admin_Builds_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} guardada`)
};

const de_admin_builds_saved = /** @type {(inputs: Admin_Builds_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} gespeichert`)
};

const fr_admin_builds_saved = /** @type {(inputs: Admin_Builds_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} enregistré`)
};

const it_admin_builds_saved = /** @type {(inputs: Admin_Builds_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} salvata`)
};

const nl_admin_builds_saved = /** @type {(inputs: Admin_Builds_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} opgeslagen`)
};

const pl_admin_builds_saved = /** @type {(inputs: Admin_Builds_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zapisano ${i?.label}`)
};

const pt_admin_builds_saved = /** @type {(inputs: Admin_Builds_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} salvo`)
};

const ru_admin_builds_saved = /** @type {(inputs: Admin_Builds_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} сохранена`)
};

const sv_admin_builds_saved = /** @type {(inputs: Admin_Builds_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} sparat`)
};

const tr_admin_builds_saved = /** @type {(inputs: Admin_Builds_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} kaydedildi`)
};

const zh_admin_builds_saved = /** @type {(inputs: Admin_Builds_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} 已保存`)
};

const ja_admin_builds_saved = /** @type {(inputs: Admin_Builds_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.label} を保存しました`)
};

/**
* | output |
* | --- |
* | "{label} saved" |
*
* @param {Admin_Builds_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_saved = /** @type {((inputs: Admin_Builds_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_saved(inputs)
	if (locale === "de") return de_admin_builds_saved(inputs)
	if (locale === "fr") return fr_admin_builds_saved(inputs)
	if (locale === "it") return it_admin_builds_saved(inputs)
	if (locale === "nl") return nl_admin_builds_saved(inputs)
	if (locale === "pl") return pl_admin_builds_saved(inputs)
	if (locale === "pt") return pt_admin_builds_saved(inputs)
	if (locale === "ru") return ru_admin_builds_saved(inputs)
	if (locale === "sv") return sv_admin_builds_saved(inputs)
	if (locale === "tr") return tr_admin_builds_saved(inputs)
	if (locale === "zh") return zh_admin_builds_saved(inputs)
	if (locale === "ja") return ja_admin_builds_saved(inputs)
	return en_admin_builds_saved(inputs)
});
