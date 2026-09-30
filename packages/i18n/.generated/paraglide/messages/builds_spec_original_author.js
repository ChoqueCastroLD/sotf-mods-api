/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Spec_Original_AuthorInputs */

const en_builds_spec_original_author = /** @type {(inputs: Builds_Spec_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Original author`)
};

const es_builds_spec_original_author = /** @type {(inputs: Builds_Spec_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor original`)
};

const de_builds_spec_original_author = /** @type {(inputs: Builds_Spec_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ursprünglicher Autor`)
};

const fr_builds_spec_original_author = /** @type {(inputs: Builds_Spec_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auteur d’origine`)
};

const it_builds_spec_original_author = /** @type {(inputs: Builds_Spec_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autore originale`)
};

const nl_builds_spec_original_author = /** @type {(inputs: Builds_Spec_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oorspronkelijke auteur`)
};

const pl_builds_spec_original_author = /** @type {(inputs: Builds_Spec_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pierwotny autor`)
};

const pt_builds_spec_original_author = /** @type {(inputs: Builds_Spec_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor original`)
};

const ru_builds_spec_original_author = /** @type {(inputs: Builds_Spec_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Первоначальный автор`)
};

const sv_builds_spec_original_author = /** @type {(inputs: Builds_Spec_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ursprunglig upphovsperson`)
};

const tr_builds_spec_original_author = /** @type {(inputs: Builds_Spec_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asıl yazar`)
};

const zh_builds_spec_original_author = /** @type {(inputs: Builds_Spec_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原作者`)
};

const ja_builds_spec_original_author = /** @type {(inputs: Builds_Spec_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`オリジナル作者`)
};

/**
* | output |
* | --- |
* | "Original author" |
*
* @param {Builds_Spec_Original_AuthorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_spec_original_author = /** @type {((inputs?: Builds_Spec_Original_AuthorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Spec_Original_AuthorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_spec_original_author(inputs)
	if (locale === "de") return de_builds_spec_original_author(inputs)
	if (locale === "fr") return fr_builds_spec_original_author(inputs)
	if (locale === "it") return it_builds_spec_original_author(inputs)
	if (locale === "nl") return nl_builds_spec_original_author(inputs)
	if (locale === "pl") return pl_builds_spec_original_author(inputs)
	if (locale === "pt") return pt_builds_spec_original_author(inputs)
	if (locale === "ru") return ru_builds_spec_original_author(inputs)
	if (locale === "sv") return sv_builds_spec_original_author(inputs)
	if (locale === "tr") return tr_builds_spec_original_author(inputs)
	if (locale === "zh") return zh_builds_spec_original_author(inputs)
	if (locale === "ja") return ja_builds_spec_original_author(inputs)
	return en_builds_spec_original_author(inputs)
});
