/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Cover_AddInputs */

const en_modpacks_cover_add = /** @type {(inputs: Modpacks_Cover_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add cover`)
};

const es_modpacks_cover_add = /** @type {(inputs: Modpacks_Cover_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir portada`)
};

const de_modpacks_cover_add = /** @type {(inputs: Modpacks_Cover_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titelbild hinzufügen`)
};

const fr_modpacks_cover_add = /** @type {(inputs: Modpacks_Cover_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter une couverture`)
};

const it_modpacks_cover_add = /** @type {(inputs: Modpacks_Cover_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi copertina`)
};

const nl_modpacks_cover_add = /** @type {(inputs: Modpacks_Cover_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omslag toevoegen`)
};

const pl_modpacks_cover_add = /** @type {(inputs: Modpacks_Cover_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj okładkę`)
};

const pt_modpacks_cover_add = /** @type {(inputs: Modpacks_Cover_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar capa`)
};

const ru_modpacks_cover_add = /** @type {(inputs: Modpacks_Cover_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить обложку`)
};

const sv_modpacks_cover_add = /** @type {(inputs: Modpacks_Cover_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till omslag`)
};

const tr_modpacks_cover_add = /** @type {(inputs: Modpacks_Cover_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapak ekle`)
};

const zh_modpacks_cover_add = /** @type {(inputs: Modpacks_Cover_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加封面`)
};

const ja_modpacks_cover_add = /** @type {(inputs: Modpacks_Cover_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カバーを追加`)
};

/**
* | output |
* | --- |
* | "Add cover" |
*
* @param {Modpacks_Cover_AddInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_cover_add = /** @type {((inputs?: Modpacks_Cover_AddInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Cover_AddInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_cover_add(inputs)
	if (locale === "de") return de_modpacks_cover_add(inputs)
	if (locale === "fr") return fr_modpacks_cover_add(inputs)
	if (locale === "it") return it_modpacks_cover_add(inputs)
	if (locale === "nl") return nl_modpacks_cover_add(inputs)
	if (locale === "pl") return pl_modpacks_cover_add(inputs)
	if (locale === "pt") return pt_modpacks_cover_add(inputs)
	if (locale === "ru") return ru_modpacks_cover_add(inputs)
	if (locale === "sv") return sv_modpacks_cover_add(inputs)
	if (locale === "tr") return tr_modpacks_cover_add(inputs)
	if (locale === "zh") return zh_modpacks_cover_add(inputs)
	if (locale === "ja") return ja_modpacks_cover_add(inputs)
	return en_modpacks_cover_add(inputs)
});
