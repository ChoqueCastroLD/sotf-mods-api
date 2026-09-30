/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_DeleteInputs */

const en_kitsocial_delete = /** @type {(inputs: Kitsocial_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete`)
};

const es_kitsocial_delete = /** @type {(inputs: Kitsocial_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar`)
};

const de_kitsocial_delete = /** @type {(inputs: Kitsocial_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Löschen`)
};

const fr_kitsocial_delete = /** @type {(inputs: Kitsocial_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer`)
};

const it_kitsocial_delete = /** @type {(inputs: Kitsocial_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elimina`)
};

const nl_kitsocial_delete = /** @type {(inputs: Kitsocial_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderen`)
};

const pl_kitsocial_delete = /** @type {(inputs: Kitsocial_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń`)
};

const pt_kitsocial_delete = /** @type {(inputs: Kitsocial_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir`)
};

const ru_kitsocial_delete = /** @type {(inputs: Kitsocial_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить`)
};

const sv_kitsocial_delete = /** @type {(inputs: Kitsocial_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort`)
};

const tr_kitsocial_delete = /** @type {(inputs: Kitsocial_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sil`)
};

const zh_kitsocial_delete = /** @type {(inputs: Kitsocial_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除`)
};

const ja_kitsocial_delete = /** @type {(inputs: Kitsocial_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除`)
};

/**
* | output |
* | --- |
* | "Delete" |
*
* @param {Kitsocial_DeleteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_delete = /** @type {((inputs?: Kitsocial_DeleteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_DeleteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_delete(inputs)
	if (locale === "de") return de_kitsocial_delete(inputs)
	if (locale === "fr") return fr_kitsocial_delete(inputs)
	if (locale === "it") return it_kitsocial_delete(inputs)
	if (locale === "nl") return nl_kitsocial_delete(inputs)
	if (locale === "pl") return pl_kitsocial_delete(inputs)
	if (locale === "pt") return pt_kitsocial_delete(inputs)
	if (locale === "ru") return ru_kitsocial_delete(inputs)
	if (locale === "sv") return sv_kitsocial_delete(inputs)
	if (locale === "tr") return tr_kitsocial_delete(inputs)
	if (locale === "zh") return zh_kitsocial_delete(inputs)
	if (locale === "ja") return ja_kitsocial_delete(inputs)
	return en_kitsocial_delete(inputs)
});
