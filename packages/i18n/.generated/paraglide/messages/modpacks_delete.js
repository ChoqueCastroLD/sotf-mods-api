/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_DeleteInputs */

const en_modpacks_delete = /** @type {(inputs: Modpacks_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete modpack`)
};

const es_modpacks_delete = /** @type {(inputs: Modpacks_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar modpack`)
};

const de_modpacks_delete = /** @type {(inputs: Modpacks_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack löschen`)
};

const fr_modpacks_delete = /** @type {(inputs: Modpacks_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer le modpack`)
};

const it_modpacks_delete = /** @type {(inputs: Modpacks_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elimina modpack`)
};

const nl_modpacks_delete = /** @type {(inputs: Modpacks_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack verwijderen`)
};

const pl_modpacks_delete = /** @type {(inputs: Modpacks_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń modpack`)
};

const pt_modpacks_delete = /** @type {(inputs: Modpacks_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir modpack`)
};

const ru_modpacks_delete = /** @type {(inputs: Modpacks_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить модпак`)
};

const sv_modpacks_delete = /** @type {(inputs: Modpacks_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radera modpaket`)
};

const tr_modpacks_delete = /** @type {(inputs: Modpacks_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod paketini sil`)
};

const zh_modpacks_delete = /** @type {(inputs: Modpacks_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除整合包`)
};

const ja_modpacks_delete = /** @type {(inputs: Modpacks_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパックを削除`)
};

/**
* | output |
* | --- |
* | "Delete modpack" |
*
* @param {Modpacks_DeleteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_delete = /** @type {((inputs?: Modpacks_DeleteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_DeleteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_delete(inputs)
	if (locale === "de") return de_modpacks_delete(inputs)
	if (locale === "fr") return fr_modpacks_delete(inputs)
	if (locale === "it") return it_modpacks_delete(inputs)
	if (locale === "nl") return nl_modpacks_delete(inputs)
	if (locale === "pl") return pl_modpacks_delete(inputs)
	if (locale === "pt") return pt_modpacks_delete(inputs)
	if (locale === "ru") return ru_modpacks_delete(inputs)
	if (locale === "sv") return sv_modpacks_delete(inputs)
	if (locale === "tr") return tr_modpacks_delete(inputs)
	if (locale === "zh") return zh_modpacks_delete(inputs)
	if (locale === "ja") return ja_modpacks_delete(inputs)
	return en_modpacks_delete(inputs)
});
