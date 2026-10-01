/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Entity_Read_LessInputs */

const en_entity_read_less = /** @type {(inputs: Entity_Read_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show less`)
};

const es_entity_read_less = /** @type {(inputs: Entity_Read_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar menos`)
};

const de_entity_read_less = /** @type {(inputs: Entity_Read_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weniger anzeigen`)
};

const fr_entity_read_less = /** @type {(inputs: Entity_Read_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher moins`)
};

const it_entity_read_less = /** @type {(inputs: Entity_Read_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra meno`)
};

const nl_entity_read_less = /** @type {(inputs: Entity_Read_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minder tonen`)
};

const pl_entity_read_less = /** @type {(inputs: Entity_Read_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokaż mniej`)
};

const pt_entity_read_less = /** @type {(inputs: Entity_Read_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar menos`)
};

const ru_entity_read_less = /** @type {(inputs: Entity_Read_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Свернуть`)
};

const sv_entity_read_less = /** @type {(inputs: Entity_Read_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa mindre`)
};

const tr_entity_read_less = /** @type {(inputs: Entity_Read_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daha az göster`)
};

const zh_entity_read_less = /** @type {(inputs: Entity_Read_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`收起`)
};

const ja_entity_read_less = /** @type {(inputs: Entity_Read_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`閉じる`)
};

/**
* | output |
* | --- |
* | "Show less" |
*
* @param {Entity_Read_LessInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const entity_read_less = /** @type {((inputs?: Entity_Read_LessInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Entity_Read_LessInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_entity_read_less(inputs)
	if (locale === "de") return de_entity_read_less(inputs)
	if (locale === "fr") return fr_entity_read_less(inputs)
	if (locale === "it") return it_entity_read_less(inputs)
	if (locale === "nl") return nl_entity_read_less(inputs)
	if (locale === "pl") return pl_entity_read_less(inputs)
	if (locale === "pt") return pt_entity_read_less(inputs)
	if (locale === "ru") return ru_entity_read_less(inputs)
	if (locale === "sv") return sv_entity_read_less(inputs)
	if (locale === "tr") return tr_entity_read_less(inputs)
	if (locale === "zh") return zh_entity_read_less(inputs)
	if (locale === "ja") return ja_entity_read_less(inputs)
	return en_entity_read_less(inputs)
});
