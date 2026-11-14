/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_AddedInputs */

const en_modpacks_added = /** @type {(inputs: Modpacks_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Added`)
};

const es_modpacks_added = /** @type {(inputs: Modpacks_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadido`)
};

const de_modpacks_added = /** @type {(inputs: Modpacks_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hinzugefügt`)
};

const fr_modpacks_added = /** @type {(inputs: Modpacks_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouté`)
};

const it_modpacks_added = /** @type {(inputs: Modpacks_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiunta`)
};

const nl_modpacks_added = /** @type {(inputs: Modpacks_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toegevoegd`)
};

const pl_modpacks_added = /** @type {(inputs: Modpacks_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodano`)
};

const pt_modpacks_added = /** @type {(inputs: Modpacks_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionado`)
};

const ru_modpacks_added = /** @type {(inputs: Modpacks_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавлен`)
};

const sv_modpacks_added = /** @type {(inputs: Modpacks_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillagd`)
};

const tr_modpacks_added = /** @type {(inputs: Modpacks_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eklendi`)
};

const zh_modpacks_added = /** @type {(inputs: Modpacks_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已添加`)
};

const ja_modpacks_added = /** @type {(inputs: Modpacks_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`追加済み`)
};

/**
* | output |
* | --- |
* | "Added" |
*
* @param {Modpacks_AddedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_added = /** @type {((inputs?: Modpacks_AddedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_AddedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_added(inputs)
	if (locale === "de") return de_modpacks_added(inputs)
	if (locale === "fr") return fr_modpacks_added(inputs)
	if (locale === "it") return it_modpacks_added(inputs)
	if (locale === "nl") return nl_modpacks_added(inputs)
	if (locale === "pl") return pl_modpacks_added(inputs)
	if (locale === "pt") return pt_modpacks_added(inputs)
	if (locale === "ru") return ru_modpacks_added(inputs)
	if (locale === "sv") return sv_modpacks_added(inputs)
	if (locale === "tr") return tr_modpacks_added(inputs)
	if (locale === "zh") return zh_modpacks_added(inputs)
	if (locale === "ja") return ja_modpacks_added(inputs)
	return en_modpacks_added(inputs)
});
