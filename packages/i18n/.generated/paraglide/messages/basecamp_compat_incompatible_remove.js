/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Basecamp_Compat_Incompatible_RemoveInputs */

const en_basecamp_compat_incompatible_remove = /** @type {(inputs: Basecamp_Compat_Incompatible_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remove ${i?.name}`)
};

const es_basecamp_compat_incompatible_remove = /** @type {(inputs: Basecamp_Compat_Incompatible_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Quitar ${i?.name}`)
};

const de_basecamp_compat_incompatible_remove = /** @type {(inputs: Basecamp_Compat_Incompatible_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} entfernen`)
};

const fr_basecamp_compat_incompatible_remove = /** @type {(inputs: Basecamp_Compat_Incompatible_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirer ${i?.name}`)
};

const it_basecamp_compat_incompatible_remove = /** @type {(inputs: Basecamp_Compat_Incompatible_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rimuovi ${i?.name}`)
};

const nl_basecamp_compat_incompatible_remove = /** @type {(inputs: Basecamp_Compat_Incompatible_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} verwijderen`)
};

const pl_basecamp_compat_incompatible_remove = /** @type {(inputs: Basecamp_Compat_Incompatible_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usuń ${i?.name}`)
};

const pt_basecamp_compat_incompatible_remove = /** @type {(inputs: Basecamp_Compat_Incompatible_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remover ${i?.name}`)
};

const ru_basecamp_compat_incompatible_remove = /** @type {(inputs: Basecamp_Compat_Incompatible_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Убрать ${i?.name}`)
};

const sv_basecamp_compat_incompatible_remove = /** @type {(inputs: Basecamp_Compat_Incompatible_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ta bort ${i?.name}`)
};

const tr_basecamp_compat_incompatible_remove = /** @type {(inputs: Basecamp_Compat_Incompatible_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} modunu kaldır`)
};

const zh_basecamp_compat_incompatible_remove = /** @type {(inputs: Basecamp_Compat_Incompatible_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`移除 ${i?.name}`)
};

const ja_basecamp_compat_incompatible_remove = /** @type {(inputs: Basecamp_Compat_Incompatible_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}を外す`)
};

/**
* | output |
* | --- |
* | "Remove {name}" |
*
* @param {Basecamp_Compat_Incompatible_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_incompatible_remove = /** @type {((inputs: Basecamp_Compat_Incompatible_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Incompatible_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_incompatible_remove(inputs)
	if (locale === "de") return de_basecamp_compat_incompatible_remove(inputs)
	if (locale === "fr") return fr_basecamp_compat_incompatible_remove(inputs)
	if (locale === "it") return it_basecamp_compat_incompatible_remove(inputs)
	if (locale === "nl") return nl_basecamp_compat_incompatible_remove(inputs)
	if (locale === "pl") return pl_basecamp_compat_incompatible_remove(inputs)
	if (locale === "pt") return pt_basecamp_compat_incompatible_remove(inputs)
	if (locale === "ru") return ru_basecamp_compat_incompatible_remove(inputs)
	if (locale === "sv") return sv_basecamp_compat_incompatible_remove(inputs)
	if (locale === "tr") return tr_basecamp_compat_incompatible_remove(inputs)
	if (locale === "zh") return zh_basecamp_compat_incompatible_remove(inputs)
	if (locale === "ja") return ja_basecamp_compat_incompatible_remove(inputs)
	return en_basecamp_compat_incompatible_remove(inputs)
});
