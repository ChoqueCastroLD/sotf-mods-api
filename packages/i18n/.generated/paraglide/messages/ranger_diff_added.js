/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Diff_AddedInputs */

const en_ranger_diff_added = /** @type {(inputs: Ranger_Diff_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Added:`)
};

const es_ranger_diff_added = /** @type {(inputs: Ranger_Diff_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadido:`)
};

const de_ranger_diff_added = /** @type {(inputs: Ranger_Diff_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hinzugefügt:`)
};

const fr_ranger_diff_added = /** @type {(inputs: Ranger_Diff_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouté :`)
};

const it_ranger_diff_added = /** @type {(inputs: Ranger_Diff_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiunto:`)
};

const nl_ranger_diff_added = /** @type {(inputs: Ranger_Diff_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toegevoegd:`)
};

const pl_ranger_diff_added = /** @type {(inputs: Ranger_Diff_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodano:`)
};

const pt_ranger_diff_added = /** @type {(inputs: Ranger_Diff_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionado:`)
};

const ru_ranger_diff_added = /** @type {(inputs: Ranger_Diff_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавлено:`)
};

const sv_ranger_diff_added = /** @type {(inputs: Ranger_Diff_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillagd:`)
};

const tr_ranger_diff_added = /** @type {(inputs: Ranger_Diff_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eklendi:`)
};

const zh_ranger_diff_added = /** @type {(inputs: Ranger_Diff_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新增：`)
};

const ja_ranger_diff_added = /** @type {(inputs: Ranger_Diff_AddedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`追加：`)
};

/**
* | output |
* | --- |
* | "Added:" |
*
* @param {Ranger_Diff_AddedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_diff_added = /** @type {((inputs?: Ranger_Diff_AddedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Diff_AddedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_diff_added(inputs)
	if (locale === "de") return de_ranger_diff_added(inputs)
	if (locale === "fr") return fr_ranger_diff_added(inputs)
	if (locale === "it") return it_ranger_diff_added(inputs)
	if (locale === "nl") return nl_ranger_diff_added(inputs)
	if (locale === "pl") return pl_ranger_diff_added(inputs)
	if (locale === "pt") return pt_ranger_diff_added(inputs)
	if (locale === "ru") return ru_ranger_diff_added(inputs)
	if (locale === "sv") return sv_ranger_diff_added(inputs)
	if (locale === "tr") return tr_ranger_diff_added(inputs)
	if (locale === "zh") return zh_ranger_diff_added(inputs)
	if (locale === "ja") return ja_ranger_diff_added(inputs)
	return en_ranger_diff_added(inputs)
});
