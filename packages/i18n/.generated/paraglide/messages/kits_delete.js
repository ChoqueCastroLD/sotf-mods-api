/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_DeleteInputs */

const en_kits_delete = /** @type {(inputs: Kits_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete kit`)
};

const es_kits_delete = /** @type {(inputs: Kits_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar kit`)
};

const de_kits_delete = /** @type {(inputs: Kits_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit löschen`)
};

const fr_kits_delete = /** @type {(inputs: Kits_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer le kit`)
};

const it_kits_delete = /** @type {(inputs: Kits_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elimina kit`)
};

const nl_kits_delete = /** @type {(inputs: Kits_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit verwijderen`)
};

const pl_kits_delete = /** @type {(inputs: Kits_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń zestaw`)
};

const pt_kits_delete = /** @type {(inputs: Kits_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir kit`)
};

const ru_kits_delete = /** @type {(inputs: Kits_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить набор`)
};

const sv_kits_delete = /** @type {(inputs: Kits_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radera kit`)
};

const tr_kits_delete = /** @type {(inputs: Kits_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kiti sil`)
};

const zh_kits_delete = /** @type {(inputs: Kits_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除套装`)
};

const ja_kits_delete = /** @type {(inputs: Kits_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットを削除`)
};

/**
* | output |
* | --- |
* | "Delete kit" |
*
* @param {Kits_DeleteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_delete = /** @type {((inputs?: Kits_DeleteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_DeleteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_delete(inputs)
	if (locale === "de") return de_kits_delete(inputs)
	if (locale === "fr") return fr_kits_delete(inputs)
	if (locale === "it") return it_kits_delete(inputs)
	if (locale === "nl") return nl_kits_delete(inputs)
	if (locale === "pl") return pl_kits_delete(inputs)
	if (locale === "pt") return pt_kits_delete(inputs)
	if (locale === "ru") return ru_kits_delete(inputs)
	if (locale === "sv") return sv_kits_delete(inputs)
	if (locale === "tr") return tr_kits_delete(inputs)
	if (locale === "zh") return zh_kits_delete(inputs)
	if (locale === "ja") return ja_kits_delete(inputs)
	return en_kits_delete(inputs)
});
