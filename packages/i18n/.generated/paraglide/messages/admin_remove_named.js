/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Admin_Remove_NamedInputs */

const en_admin_remove_named = /** @type {(inputs: Admin_Remove_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remove ${i?.name}`)
};

const es_admin_remove_named = /** @type {(inputs: Admin_Remove_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Quitar ${i?.name}`)
};

const de_admin_remove_named = /** @type {(inputs: Admin_Remove_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} entfernen`)
};

const fr_admin_remove_named = /** @type {(inputs: Admin_Remove_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirer ${i?.name}`)
};

const it_admin_remove_named = /** @type {(inputs: Admin_Remove_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rimuovi ${i?.name}`)
};

const nl_admin_remove_named = /** @type {(inputs: Admin_Remove_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} verwijderen`)
};

const pl_admin_remove_named = /** @type {(inputs: Admin_Remove_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usuń ${i?.name}`)
};

const pt_admin_remove_named = /** @type {(inputs: Admin_Remove_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remover ${i?.name}`)
};

const ru_admin_remove_named = /** @type {(inputs: Admin_Remove_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Убрать ${i?.name}`)
};

const sv_admin_remove_named = /** @type {(inputs: Admin_Remove_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ta bort ${i?.name}`)
};

const tr_admin_remove_named = /** @type {(inputs: Admin_Remove_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} öğesini kaldır`)
};

const zh_admin_remove_named = /** @type {(inputs: Admin_Remove_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`移除 ${i?.name}`)
};

const ja_admin_remove_named = /** @type {(inputs: Admin_Remove_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を削除`)
};

/**
* | output |
* | --- |
* | "Remove {name}" |
*
* @param {Admin_Remove_NamedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_remove_named = /** @type {((inputs: Admin_Remove_NamedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Remove_NamedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_remove_named(inputs)
	if (locale === "de") return de_admin_remove_named(inputs)
	if (locale === "fr") return fr_admin_remove_named(inputs)
	if (locale === "it") return it_admin_remove_named(inputs)
	if (locale === "nl") return nl_admin_remove_named(inputs)
	if (locale === "pl") return pl_admin_remove_named(inputs)
	if (locale === "pt") return pt_admin_remove_named(inputs)
	if (locale === "ru") return ru_admin_remove_named(inputs)
	if (locale === "sv") return sv_admin_remove_named(inputs)
	if (locale === "tr") return tr_admin_remove_named(inputs)
	if (locale === "zh") return zh_admin_remove_named(inputs)
	if (locale === "ja") return ja_admin_remove_named(inputs)
	return en_admin_remove_named(inputs)
});
