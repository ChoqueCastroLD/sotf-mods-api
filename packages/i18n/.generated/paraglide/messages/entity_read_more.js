/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Entity_Read_MoreInputs */

const en_entity_read_more = /** @type {(inputs: Entity_Read_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read more`)
};

const es_entity_read_more = /** @type {(inputs: Entity_Read_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leer más`)
};

const de_entity_read_more = /** @type {(inputs: Entity_Read_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehr lesen`)
};

const fr_entity_read_more = /** @type {(inputs: Entity_Read_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lire la suite`)
};

const it_entity_read_more = /** @type {(inputs: Entity_Read_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leggi tutto`)
};

const nl_entity_read_more = /** @type {(inputs: Entity_Read_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer lezen`)
};

const pl_entity_read_more = /** @type {(inputs: Entity_Read_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czytaj więcej`)
};

const pt_entity_read_more = /** @type {(inputs: Entity_Read_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ler mais`)
};

const ru_entity_read_more = /** @type {(inputs: Entity_Read_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Читать далее`)
};

const sv_entity_read_more = /** @type {(inputs: Entity_Read_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läs mer`)
};

const tr_entity_read_more = /** @type {(inputs: Entity_Read_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Devamını oku`)
};

const zh_entity_read_more = /** @type {(inputs: Entity_Read_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`展开阅读`)
};

const ja_entity_read_more = /** @type {(inputs: Entity_Read_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`続きを読む`)
};

/**
* | output |
* | --- |
* | "Read more" |
*
* @param {Entity_Read_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const entity_read_more = /** @type {((inputs?: Entity_Read_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Entity_Read_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_entity_read_more(inputs)
	if (locale === "de") return de_entity_read_more(inputs)
	if (locale === "fr") return fr_entity_read_more(inputs)
	if (locale === "it") return it_entity_read_more(inputs)
	if (locale === "nl") return nl_entity_read_more(inputs)
	if (locale === "pl") return pl_entity_read_more(inputs)
	if (locale === "pt") return pt_entity_read_more(inputs)
	if (locale === "ru") return ru_entity_read_more(inputs)
	if (locale === "sv") return sv_entity_read_more(inputs)
	if (locale === "tr") return tr_entity_read_more(inputs)
	if (locale === "zh") return zh_entity_read_more(inputs)
	if (locale === "ja") return ja_entity_read_more(inputs)
	return en_entity_read_more(inputs)
});
