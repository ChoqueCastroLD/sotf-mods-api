/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_Source_AuthorInputs */

const en_translations_source_author = /** @type {(inputs: Translations_Source_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yours`)
};

const es_translations_source_author = /** @type {(inputs: Translations_Source_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tuya`)
};

const de_translations_source_author = /** @type {(inputs: Translations_Source_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Von dir`)
};

const fr_translations_source_author = /** @type {(inputs: Translations_Source_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La vôtre`)
};

const it_translations_source_author = /** @type {(inputs: Translations_Source_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tua`)
};

const nl_translations_source_author = /** @type {(inputs: Translations_Source_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Van jou`)
};

const pl_translations_source_author = /** @type {(inputs: Translations_Source_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje`)
};

const pt_translations_source_author = /** @type {(inputs: Translations_Source_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua`)
};

const ru_translations_source_author = /** @type {(inputs: Translations_Source_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш`)
};

const sv_translations_source_author = /** @type {(inputs: Translations_Source_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din`)
};

const tr_translations_source_author = /** @type {(inputs: Translations_Source_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senin`)
};

const zh_translations_source_author = /** @type {(inputs: Translations_Source_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的`)
};

const ja_translations_source_author = /** @type {(inputs: Translations_Source_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自分`)
};

/**
* | output |
* | --- |
* | "Yours" |
*
* @param {Translations_Source_AuthorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_source_author = /** @type {((inputs?: Translations_Source_AuthorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Source_AuthorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_source_author(inputs)
	if (locale === "de") return de_translations_source_author(inputs)
	if (locale === "fr") return fr_translations_source_author(inputs)
	if (locale === "it") return it_translations_source_author(inputs)
	if (locale === "nl") return nl_translations_source_author(inputs)
	if (locale === "pl") return pl_translations_source_author(inputs)
	if (locale === "pt") return pt_translations_source_author(inputs)
	if (locale === "ru") return ru_translations_source_author(inputs)
	if (locale === "sv") return sv_translations_source_author(inputs)
	if (locale === "tr") return tr_translations_source_author(inputs)
	if (locale === "zh") return zh_translations_source_author(inputs)
	if (locale === "ja") return ja_translations_source_author(inputs)
	return en_translations_source_author(inputs)
});
