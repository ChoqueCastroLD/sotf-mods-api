/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Kits_Add_FailedInputs */

const en_kits_add_failed = /** @type {(inputs: Kits_Add_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Couldn’t add ${i?.name}.`)
};

const es_kits_add_failed = /** @type {(inputs: Kits_Add_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No se ha podido añadir ${i?.name}.`)
};

const de_kits_add_failed = /** @type {(inputs: Kits_Add_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} konnte nicht hinzugefügt werden.`)
};

const fr_kits_add_failed = /** @type {(inputs: Kits_Add_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Impossible d’ajouter ${i?.name}.`)
};

const it_kits_add_failed = /** @type {(inputs: Kits_Add_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Impossibile aggiungere ${i?.name}.`)
};

const nl_kits_add_failed = /** @type {(inputs: Kits_Add_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} kon niet worden toegevoegd.`)
};

const pl_kits_add_failed = /** @type {(inputs: Kits_Add_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nie udało się dodać ${i?.name}.`)
};

const pt_kits_add_failed = /** @type {(inputs: Kits_Add_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Não foi possível adicionar ${i?.name}.`)
};

const ru_kits_add_failed = /** @type {(inputs: Kits_Add_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Не удалось добавить ${i?.name}.`)
};

const sv_kits_add_failed = /** @type {(inputs: Kits_Add_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Det gick inte att lägga till ${i?.name}.`)
};

const tr_kits_add_failed = /** @type {(inputs: Kits_Add_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} eklenemedi.`)
};

const zh_kits_add_failed = /** @type {(inputs: Kits_Add_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`无法添加 ${i?.name}。`)
};

const ja_kits_add_failed = /** @type {(inputs: Kits_Add_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を追加できませんでした。`)
};

/**
* | output |
* | --- |
* | "Couldn’t add {name}." |
*
* @param {Kits_Add_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_add_failed = /** @type {((inputs: Kits_Add_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Add_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_add_failed(inputs)
	if (locale === "de") return de_kits_add_failed(inputs)
	if (locale === "fr") return fr_kits_add_failed(inputs)
	if (locale === "it") return it_kits_add_failed(inputs)
	if (locale === "nl") return nl_kits_add_failed(inputs)
	if (locale === "pl") return pl_kits_add_failed(inputs)
	if (locale === "pt") return pt_kits_add_failed(inputs)
	if (locale === "ru") return ru_kits_add_failed(inputs)
	if (locale === "sv") return sv_kits_add_failed(inputs)
	if (locale === "tr") return tr_kits_add_failed(inputs)
	if (locale === "zh") return zh_kits_add_failed(inputs)
	if (locale === "ja") return ja_kits_add_failed(inputs)
	return en_kits_add_failed(inputs)
});
