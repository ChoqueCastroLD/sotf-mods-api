/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_Original_Author_HintInputs */

const en_basecamp_listing_original_author_hint = /** @type {(inputs: Basecamp_Listing_Original_Author_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For ports and continuations: who made the original.`)
};

const es_basecamp_listing_original_author_hint = /** @type {(inputs: Basecamp_Listing_Original_Author_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para ports y continuaciones: quién hizo el original.`)
};

const de_basecamp_listing_original_author_hint = /** @type {(inputs: Basecamp_Listing_Original_Author_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Für Portierungen und Fortsetzungen: wer das Original gemacht hat.`)
};

const fr_basecamp_listing_original_author_hint = /** @type {(inputs: Basecamp_Listing_Original_Author_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pour les portages et les reprises : qui a créé l’original.`)
};

const it_basecamp_listing_original_author_hint = /** @type {(inputs: Basecamp_Listing_Original_Author_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per port e continuazioni: chi ha creato l’originale.`)
};

const nl_basecamp_listing_original_author_hint = /** @type {(inputs: Basecamp_Listing_Original_Author_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voor ports en voortzettingen: wie het origineel maakte.`)
};

const pl_basecamp_listing_original_author_hint = /** @type {(inputs: Basecamp_Listing_Original_Author_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dla portów i kontynuacji: kto stworzył oryginał.`)
};

const pt_basecamp_listing_original_author_hint = /** @type {(inputs: Basecamp_Listing_Original_Author_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para ports e continuações: quem fez o original.`)
};

const ru_basecamp_listing_original_author_hint = /** @type {(inputs: Basecamp_Listing_Original_Author_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для портов и продолжений: кто создал оригинал.`)
};

const sv_basecamp_listing_original_author_hint = /** @type {(inputs: Basecamp_Listing_Original_Author_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`För porteringar och fortsättningar: vem som gjorde originalet.`)
};

const tr_basecamp_listing_original_author_hint = /** @type {(inputs: Basecamp_Listing_Original_Author_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyarlamalar ve devamlar için: orijinali kimin yaptığı.`)
};

const zh_basecamp_listing_original_author_hint = /** @type {(inputs: Basecamp_Listing_Original_Author_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`适用于移植和续作：原作是谁制作的。`)
};

const ja_basecamp_listing_original_author_hint = /** @type {(inputs: Basecamp_Listing_Original_Author_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移植や続編の場合：オリジナルを作った人。`)
};

/**
* | output |
* | --- |
* | "For ports and continuations: who made the original." |
*
* @param {Basecamp_Listing_Original_Author_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_original_author_hint = /** @type {((inputs?: Basecamp_Listing_Original_Author_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Original_Author_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_original_author_hint(inputs)
	if (locale === "de") return de_basecamp_listing_original_author_hint(inputs)
	if (locale === "fr") return fr_basecamp_listing_original_author_hint(inputs)
	if (locale === "it") return it_basecamp_listing_original_author_hint(inputs)
	if (locale === "nl") return nl_basecamp_listing_original_author_hint(inputs)
	if (locale === "pl") return pl_basecamp_listing_original_author_hint(inputs)
	if (locale === "pt") return pt_basecamp_listing_original_author_hint(inputs)
	if (locale === "ru") return ru_basecamp_listing_original_author_hint(inputs)
	if (locale === "sv") return sv_basecamp_listing_original_author_hint(inputs)
	if (locale === "tr") return tr_basecamp_listing_original_author_hint(inputs)
	if (locale === "zh") return zh_basecamp_listing_original_author_hint(inputs)
	if (locale === "ja") return ja_basecamp_listing_original_author_hint(inputs)
	return en_basecamp_listing_original_author_hint(inputs)
});
