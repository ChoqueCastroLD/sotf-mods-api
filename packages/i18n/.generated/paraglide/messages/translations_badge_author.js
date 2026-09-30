/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_Badge_AuthorInputs */

const en_translations_badge_author = /** @type {(inputs: Translations_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Translated by the creator`)
};

const es_translations_badge_author = /** @type {(inputs: Translations_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traducido por el creador`)
};

const de_translations_badge_author = /** @type {(inputs: Translations_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vom Ersteller übersetzt`)
};

const fr_translations_badge_author = /** @type {(inputs: Translations_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traduit par le créateur`)
};

const it_translations_badge_author = /** @type {(inputs: Translations_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tradotto dal creatore`)
};

const nl_translations_badge_author = /** @type {(inputs: Translations_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertaald door de maker`)
};

const pl_translations_badge_author = /** @type {(inputs: Translations_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przetłumaczone przez twórcę`)
};

const pt_translations_badge_author = /** @type {(inputs: Translations_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traduzido pelo criador`)
};

const ru_translations_badge_author = /** @type {(inputs: Translations_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Переведено автором`)
};

const sv_translations_badge_author = /** @type {(inputs: Translations_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Översatt av skaparen`)
};

const tr_translations_badge_author = /** @type {(inputs: Translations_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcı tarafından çevrildi`)
};

const zh_translations_badge_author = /** @type {(inputs: Translations_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`由作者翻译`)
};

const ja_translations_badge_author = /** @type {(inputs: Translations_Badge_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者による翻訳`)
};

/**
* | output |
* | --- |
* | "Translated by the creator" |
*
* @param {Translations_Badge_AuthorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_badge_author = /** @type {((inputs?: Translations_Badge_AuthorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Badge_AuthorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_badge_author(inputs)
	if (locale === "de") return de_translations_badge_author(inputs)
	if (locale === "fr") return fr_translations_badge_author(inputs)
	if (locale === "it") return it_translations_badge_author(inputs)
	if (locale === "nl") return nl_translations_badge_author(inputs)
	if (locale === "pl") return pl_translations_badge_author(inputs)
	if (locale === "pt") return pt_translations_badge_author(inputs)
	if (locale === "ru") return ru_translations_badge_author(inputs)
	if (locale === "sv") return sv_translations_badge_author(inputs)
	if (locale === "tr") return tr_translations_badge_author(inputs)
	if (locale === "zh") return zh_translations_badge_author(inputs)
	if (locale === "ja") return ja_translations_badge_author(inputs)
	return en_translations_badge_author(inputs)
});
