/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Author_UnknownInputs */

const en_ranger_author_unknown = /** @type {(inputs: Ranger_Author_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unknown author`)
};

const es_ranger_author_unknown = /** @type {(inputs: Ranger_Author_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor desconocido`)
};

const de_ranger_author_unknown = /** @type {(inputs: Ranger_Author_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unbekannter Autor`)
};

const fr_ranger_author_unknown = /** @type {(inputs: Ranger_Author_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auteur inconnu`)
};

const it_ranger_author_unknown = /** @type {(inputs: Ranger_Author_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autore sconosciuto`)
};

const nl_ranger_author_unknown = /** @type {(inputs: Ranger_Author_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onbekende maker`)
};

const pl_ranger_author_unknown = /** @type {(inputs: Ranger_Author_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieznany autor`)
};

const pt_ranger_author_unknown = /** @type {(inputs: Ranger_Author_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor desconhecido`)
};

const ru_ranger_author_unknown = /** @type {(inputs: Ranger_Author_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Неизвестный автор`)
};

const sv_ranger_author_unknown = /** @type {(inputs: Ranger_Author_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okänd skapare`)
};

const tr_ranger_author_unknown = /** @type {(inputs: Ranger_Author_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilinmeyen yazar`)
};

const zh_ranger_author_unknown = /** @type {(inputs: Ranger_Author_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未知作者`)
};

const ja_ranger_author_unknown = /** @type {(inputs: Ranger_Author_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不明な作者`)
};

/**
* | output |
* | --- |
* | "Unknown author" |
*
* @param {Ranger_Author_UnknownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_author_unknown = /** @type {((inputs?: Ranger_Author_UnknownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Author_UnknownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_author_unknown(inputs)
	if (locale === "de") return de_ranger_author_unknown(inputs)
	if (locale === "fr") return fr_ranger_author_unknown(inputs)
	if (locale === "it") return it_ranger_author_unknown(inputs)
	if (locale === "nl") return nl_ranger_author_unknown(inputs)
	if (locale === "pl") return pl_ranger_author_unknown(inputs)
	if (locale === "pt") return pt_ranger_author_unknown(inputs)
	if (locale === "ru") return ru_ranger_author_unknown(inputs)
	if (locale === "sv") return sv_ranger_author_unknown(inputs)
	if (locale === "tr") return tr_ranger_author_unknown(inputs)
	if (locale === "zh") return zh_ranger_author_unknown(inputs)
	if (locale === "ja") return ja_ranger_author_unknown(inputs)
	return en_ranger_author_unknown(inputs)
});
