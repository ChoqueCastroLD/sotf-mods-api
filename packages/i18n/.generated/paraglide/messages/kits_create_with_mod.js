/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Kits_Create_With_ModInputs */

const en_kits_create_with_mod = /** @type {(inputs: Kits_Create_With_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} will be its first item.`)
};

const es_kits_create_with_mod = /** @type {(inputs: Kits_Create_With_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} será su primer elemento.`)
};

const de_kits_create_with_mod = /** @type {(inputs: Kits_Create_With_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} wird der erste Eintrag.`)
};

const fr_kits_create_with_mod = /** @type {(inputs: Kits_Create_With_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} en sera le premier élément.`)
};

const it_kits_create_with_mod = /** @type {(inputs: Kits_Create_With_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} sarà il primo elemento.`)
};

const nl_kits_create_with_mod = /** @type {(inputs: Kits_Create_With_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} wordt het eerste item.`)
};

const pl_kits_create_with_mod = /** @type {(inputs: Kits_Create_With_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} będzie pierwszym elementem.`)
};

const pt_kits_create_with_mod = /** @type {(inputs: Kits_Create_With_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} será o primeiro item.`)
};

const ru_kits_create_with_mod = /** @type {(inputs: Kits_Create_With_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} станет первым элементом.`)
};

const sv_kits_create_with_mod = /** @type {(inputs: Kits_Create_With_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} blir det första objektet.`)
};

const tr_kits_create_with_mod = /** @type {(inputs: Kits_Create_With_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ilk öğesi olacak.`)
};

const zh_kits_create_with_mod = /** @type {(inputs: Kits_Create_With_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 将成为第一项。`)
};

const ja_kits_create_with_mod = /** @type {(inputs: Kits_Create_With_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} が最初のアイテムになります。`)
};

/**
* | output |
* | --- |
* | "{name} will be its first item." |
*
* @param {Kits_Create_With_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_create_with_mod = /** @type {((inputs: Kits_Create_With_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Create_With_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_create_with_mod(inputs)
	if (locale === "de") return de_kits_create_with_mod(inputs)
	if (locale === "fr") return fr_kits_create_with_mod(inputs)
	if (locale === "it") return it_kits_create_with_mod(inputs)
	if (locale === "nl") return nl_kits_create_with_mod(inputs)
	if (locale === "pl") return pl_kits_create_with_mod(inputs)
	if (locale === "pt") return pt_kits_create_with_mod(inputs)
	if (locale === "ru") return ru_kits_create_with_mod(inputs)
	if (locale === "sv") return sv_kits_create_with_mod(inputs)
	if (locale === "tr") return tr_kits_create_with_mod(inputs)
	if (locale === "zh") return zh_kits_create_with_mod(inputs)
	if (locale === "ja") return ja_kits_create_with_mod(inputs)
	return en_kits_create_with_mod(inputs)
});
