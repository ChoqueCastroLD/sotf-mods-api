/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Delete_FailedInputs */

const en_kits_delete_failed = /** @type {(inputs: Kits_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t delete the kit.`)
};

const es_kits_delete_failed = /** @type {(inputs: Kits_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se ha podido eliminar el kit.`)
};

const de_kits_delete_failed = /** @type {(inputs: Kits_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Kit konnte nicht gelöscht werden.`)
};

const fr_kits_delete_failed = /** @type {(inputs: Kits_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de supprimer le kit.`)
};

const it_kits_delete_failed = /** @type {(inputs: Kits_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile eliminare il kit.`)
};

const nl_kits_delete_failed = /** @type {(inputs: Kits_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De kit kon niet worden verwijderd.`)
};

const pl_kits_delete_failed = /** @type {(inputs: Kits_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się usunąć zestawu.`)
};

const pt_kits_delete_failed = /** @type {(inputs: Kits_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível excluir o kit.`)
};

const ru_kits_delete_failed = /** @type {(inputs: Kits_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось удалить набор.`)
};

const sv_kits_delete_failed = /** @type {(inputs: Kits_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att radera kitet.`)
};

const tr_kits_delete_failed = /** @type {(inputs: Kits_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit silinemedi.`)
};

const zh_kits_delete_failed = /** @type {(inputs: Kits_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除套装失败。`)
};

const ja_kits_delete_failed = /** @type {(inputs: Kits_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットを削除できませんでした。`)
};

/**
* | output |
* | --- |
* | "Couldn’t delete the kit." |
*
* @param {Kits_Delete_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_delete_failed = /** @type {((inputs?: Kits_Delete_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Delete_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_delete_failed(inputs)
	if (locale === "de") return de_kits_delete_failed(inputs)
	if (locale === "fr") return fr_kits_delete_failed(inputs)
	if (locale === "it") return it_kits_delete_failed(inputs)
	if (locale === "nl") return nl_kits_delete_failed(inputs)
	if (locale === "pl") return pl_kits_delete_failed(inputs)
	if (locale === "pt") return pt_kits_delete_failed(inputs)
	if (locale === "ru") return ru_kits_delete_failed(inputs)
	if (locale === "sv") return sv_kits_delete_failed(inputs)
	if (locale === "tr") return tr_kits_delete_failed(inputs)
	if (locale === "zh") return zh_kits_delete_failed(inputs)
	if (locale === "ja") return ja_kits_delete_failed(inputs)
	return en_kits_delete_failed(inputs)
});
