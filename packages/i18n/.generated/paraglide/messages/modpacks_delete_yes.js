/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Delete_YesInputs */

const en_modpacks_delete_yes = /** @type {(inputs: Modpacks_Delete_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete`)
};

const es_modpacks_delete_yes = /** @type {(inputs: Modpacks_Delete_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar`)
};

const de_modpacks_delete_yes = /** @type {(inputs: Modpacks_Delete_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Löschen`)
};

const fr_modpacks_delete_yes = /** @type {(inputs: Modpacks_Delete_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer`)
};

const it_modpacks_delete_yes = /** @type {(inputs: Modpacks_Delete_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elimina`)
};

const nl_modpacks_delete_yes = /** @type {(inputs: Modpacks_Delete_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderen`)
};

const pl_modpacks_delete_yes = /** @type {(inputs: Modpacks_Delete_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń`)
};

const pt_modpacks_delete_yes = /** @type {(inputs: Modpacks_Delete_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir`)
};

const ru_modpacks_delete_yes = /** @type {(inputs: Modpacks_Delete_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить`)
};

const sv_modpacks_delete_yes = /** @type {(inputs: Modpacks_Delete_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radera`)
};

const tr_modpacks_delete_yes = /** @type {(inputs: Modpacks_Delete_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sil`)
};

const zh_modpacks_delete_yes = /** @type {(inputs: Modpacks_Delete_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除`)
};

const ja_modpacks_delete_yes = /** @type {(inputs: Modpacks_Delete_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除`)
};

/**
* | output |
* | --- |
* | "Delete" |
*
* @param {Modpacks_Delete_YesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_delete_yes = /** @type {((inputs?: Modpacks_Delete_YesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Delete_YesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_delete_yes(inputs)
	if (locale === "de") return de_modpacks_delete_yes(inputs)
	if (locale === "fr") return fr_modpacks_delete_yes(inputs)
	if (locale === "it") return it_modpacks_delete_yes(inputs)
	if (locale === "nl") return nl_modpacks_delete_yes(inputs)
	if (locale === "pl") return pl_modpacks_delete_yes(inputs)
	if (locale === "pt") return pt_modpacks_delete_yes(inputs)
	if (locale === "ru") return ru_modpacks_delete_yes(inputs)
	if (locale === "sv") return sv_modpacks_delete_yes(inputs)
	if (locale === "tr") return tr_modpacks_delete_yes(inputs)
	if (locale === "zh") return zh_modpacks_delete_yes(inputs)
	if (locale === "ja") return ja_modpacks_delete_yes(inputs)
	return en_modpacks_delete_yes(inputs)
});
