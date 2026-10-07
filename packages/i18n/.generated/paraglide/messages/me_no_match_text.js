/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_No_Match_TextInputs */

const en_me_no_match_text = /** @type {(inputs: Me_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try another name or show everything.`)
};

const es_me_no_match_text = /** @type {(inputs: Me_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prueba con otro nombre o muestra todo.`)
};

const de_me_no_match_text = /** @type {(inputs: Me_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versuche einen anderen Namen oder zeige alles an.`)
};

const fr_me_no_match_text = /** @type {(inputs: Me_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Essayez un autre nom ou affichez tout.`)
};

const it_me_no_match_text = /** @type {(inputs: Me_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prova un altro nome o mostra tutto.`)
};

const nl_me_no_match_text = /** @type {(inputs: Me_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Probeer een andere naam of toon alles.`)
};

const pl_me_no_match_text = /** @type {(inputs: Me_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spróbuj innej nazwy albo pokaż wszystko.`)
};

const pt_me_no_match_text = /** @type {(inputs: Me_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tente outro nome ou mostre tudo.`)
};

const ru_me_no_match_text = /** @type {(inputs: Me_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Попробуйте другое название или покажите все.`)
};

const sv_me_no_match_text = /** @type {(inputs: Me_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prova ett annat namn eller visa allt.`)
};

const tr_me_no_match_text = /** @type {(inputs: Me_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başka bir ad deneyin ya da hepsini gösterin.`)
};

const zh_me_no_match_text = /** @type {(inputs: Me_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`换个名称试试，或显示全部。`)
};

const ja_me_no_match_text = /** @type {(inputs: Me_No_Match_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`別の名前を試すか、すべて表示してください。`)
};

/**
* | output |
* | --- |
* | "Try another name or show everything." |
*
* @param {Me_No_Match_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_no_match_text = /** @type {((inputs?: Me_No_Match_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_No_Match_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_no_match_text(inputs)
	if (locale === "de") return de_me_no_match_text(inputs)
	if (locale === "fr") return fr_me_no_match_text(inputs)
	if (locale === "it") return it_me_no_match_text(inputs)
	if (locale === "nl") return nl_me_no_match_text(inputs)
	if (locale === "pl") return pl_me_no_match_text(inputs)
	if (locale === "pt") return pt_me_no_match_text(inputs)
	if (locale === "ru") return ru_me_no_match_text(inputs)
	if (locale === "sv") return sv_me_no_match_text(inputs)
	if (locale === "tr") return tr_me_no_match_text(inputs)
	if (locale === "zh") return zh_me_no_match_text(inputs)
	if (locale === "ja") return ja_me_no_match_text(inputs)
	return en_me_no_match_text(inputs)
});
