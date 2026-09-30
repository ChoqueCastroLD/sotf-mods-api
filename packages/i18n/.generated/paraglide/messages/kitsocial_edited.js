/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_EditedInputs */

const en_kitsocial_edited = /** @type {(inputs: Kitsocial_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`edited`)
};

const es_kitsocial_edited = /** @type {(inputs: Kitsocial_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`editado`)
};

const de_kitsocial_edited = /** @type {(inputs: Kitsocial_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`bearbeitet`)
};

const fr_kitsocial_edited = /** @type {(inputs: Kitsocial_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`modifié`)
};

const it_kitsocial_edited = /** @type {(inputs: Kitsocial_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`modificato`)
};

const nl_kitsocial_edited = /** @type {(inputs: Kitsocial_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`bewerkt`)
};

const pl_kitsocial_edited = /** @type {(inputs: Kitsocial_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`edytowano`)
};

const pt_kitsocial_edited = /** @type {(inputs: Kitsocial_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`editado`)
};

const ru_kitsocial_edited = /** @type {(inputs: Kitsocial_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`изменено`)
};

const sv_kitsocial_edited = /** @type {(inputs: Kitsocial_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`redigerad`)
};

const tr_kitsocial_edited = /** @type {(inputs: Kitsocial_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`düzenlendi`)
};

const zh_kitsocial_edited = /** @type {(inputs: Kitsocial_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已编辑`)
};

const ja_kitsocial_edited = /** @type {(inputs: Kitsocial_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`編集済み`)
};

/**
* | output |
* | --- |
* | "edited" |
*
* @param {Kitsocial_EditedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_edited = /** @type {((inputs?: Kitsocial_EditedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_EditedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_edited(inputs)
	if (locale === "de") return de_kitsocial_edited(inputs)
	if (locale === "fr") return fr_kitsocial_edited(inputs)
	if (locale === "it") return it_kitsocial_edited(inputs)
	if (locale === "nl") return nl_kitsocial_edited(inputs)
	if (locale === "pl") return pl_kitsocial_edited(inputs)
	if (locale === "pt") return pt_kitsocial_edited(inputs)
	if (locale === "ru") return ru_kitsocial_edited(inputs)
	if (locale === "sv") return sv_kitsocial_edited(inputs)
	if (locale === "tr") return tr_kitsocial_edited(inputs)
	if (locale === "zh") return zh_kitsocial_edited(inputs)
	if (locale === "ja") return ja_kitsocial_edited(inputs)
	return en_kitsocial_edited(inputs)
});
