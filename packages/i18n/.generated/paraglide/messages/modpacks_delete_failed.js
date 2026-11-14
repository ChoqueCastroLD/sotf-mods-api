/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Delete_FailedInputs */

const en_modpacks_delete_failed = /** @type {(inputs: Modpacks_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't delete the modpack`)
};

const es_modpacks_delete_failed = /** @type {(inputs: Modpacks_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo eliminar el modpack`)
};

const de_modpacks_delete_failed = /** @type {(inputs: Modpacks_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack konnte nicht gelöscht werden`)
};

const fr_modpacks_delete_failed = /** @type {(inputs: Modpacks_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de supprimer le modpack`)
};

const it_modpacks_delete_failed = /** @type {(inputs: Modpacks_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile eliminare il modpack`)
};

const nl_modpacks_delete_failed = /** @type {(inputs: Modpacks_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan de modpack niet verwijderen`)
};

const pl_modpacks_delete_failed = /** @type {(inputs: Modpacks_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się usunąć modpacka`)
};

const pt_modpacks_delete_failed = /** @type {(inputs: Modpacks_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível excluir o modpack`)
};

const ru_modpacks_delete_failed = /** @type {(inputs: Modpacks_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось удалить модпак`)
};

const sv_modpacks_delete_failed = /** @type {(inputs: Modpacks_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att radera modpaketet`)
};

const tr_modpacks_delete_failed = /** @type {(inputs: Modpacks_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod paketi silinemedi`)
};

const zh_modpacks_delete_failed = /** @type {(inputs: Modpacks_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法删除整合包`)
};

const ja_modpacks_delete_failed = /** @type {(inputs: Modpacks_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパックを削除できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn't delete the modpack" |
*
* @param {Modpacks_Delete_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_delete_failed = /** @type {((inputs?: Modpacks_Delete_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Delete_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_delete_failed(inputs)
	if (locale === "de") return de_modpacks_delete_failed(inputs)
	if (locale === "fr") return fr_modpacks_delete_failed(inputs)
	if (locale === "it") return it_modpacks_delete_failed(inputs)
	if (locale === "nl") return nl_modpacks_delete_failed(inputs)
	if (locale === "pl") return pl_modpacks_delete_failed(inputs)
	if (locale === "pt") return pt_modpacks_delete_failed(inputs)
	if (locale === "ru") return ru_modpacks_delete_failed(inputs)
	if (locale === "sv") return sv_modpacks_delete_failed(inputs)
	if (locale === "tr") return tr_modpacks_delete_failed(inputs)
	if (locale === "zh") return zh_modpacks_delete_failed(inputs)
	if (locale === "ja") return ja_modpacks_delete_failed(inputs)
	return en_modpacks_delete_failed(inputs)
});
