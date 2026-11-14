/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_DeletedInputs */

const en_modpacks_deleted = /** @type {(inputs: Modpacks_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack deleted`)
};

const es_modpacks_deleted = /** @type {(inputs: Modpacks_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack eliminado`)
};

const de_modpacks_deleted = /** @type {(inputs: Modpacks_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack gelöscht`)
};

const fr_modpacks_deleted = /** @type {(inputs: Modpacks_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack supprimé`)
};

const it_modpacks_deleted = /** @type {(inputs: Modpacks_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack eliminato`)
};

const nl_modpacks_deleted = /** @type {(inputs: Modpacks_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack verwijderd`)
};

const pl_modpacks_deleted = /** @type {(inputs: Modpacks_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięto modpack`)
};

const pt_modpacks_deleted = /** @type {(inputs: Modpacks_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack excluído`)
};

const ru_modpacks_deleted = /** @type {(inputs: Modpacks_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модпак удалён`)
};

const sv_modpacks_deleted = /** @type {(inputs: Modpacks_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpaketet raderades`)
};

const tr_modpacks_deleted = /** @type {(inputs: Modpacks_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod paketi silindi`)
};

const zh_modpacks_deleted = /** @type {(inputs: Modpacks_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`整合包已删除`)
};

const ja_modpacks_deleted = /** @type {(inputs: Modpacks_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパックを削除しました`)
};

/**
* | output |
* | --- |
* | "Modpack deleted" |
*
* @param {Modpacks_DeletedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_deleted = /** @type {((inputs?: Modpacks_DeletedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_DeletedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_deleted(inputs)
	if (locale === "de") return de_modpacks_deleted(inputs)
	if (locale === "fr") return fr_modpacks_deleted(inputs)
	if (locale === "it") return it_modpacks_deleted(inputs)
	if (locale === "nl") return nl_modpacks_deleted(inputs)
	if (locale === "pl") return pl_modpacks_deleted(inputs)
	if (locale === "pt") return pt_modpacks_deleted(inputs)
	if (locale === "ru") return ru_modpacks_deleted(inputs)
	if (locale === "sv") return sv_modpacks_deleted(inputs)
	if (locale === "tr") return tr_modpacks_deleted(inputs)
	if (locale === "zh") return zh_modpacks_deleted(inputs)
	if (locale === "ja") return ja_modpacks_deleted(inputs)
	return en_modpacks_deleted(inputs)
});
