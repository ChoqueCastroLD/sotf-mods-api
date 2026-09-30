/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Item_NextInputs */

const en_ranger_item_next = /** @type {(inputs: Ranger_Item_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next item`)
};

const es_ranger_item_next = /** @type {(inputs: Ranger_Item_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siguiente elemento`)
};

const de_ranger_item_next = /** @type {(inputs: Ranger_Item_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nächster Eintrag`)
};

const fr_ranger_item_next = /** @type {(inputs: Ranger_Item_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Élément suivant`)
};

const it_ranger_item_next = /** @type {(inputs: Ranger_Item_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elemento successivo`)
};

const nl_ranger_item_next = /** @type {(inputs: Ranger_Item_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgend item`)
};

const pl_ranger_item_next = /** @type {(inputs: Ranger_Item_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Następny element`)
};

const pt_ranger_item_next = /** @type {(inputs: Ranger_Item_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Próximo item`)
};

const ru_ranger_item_next = /** @type {(inputs: Ranger_Item_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Следующий элемент`)
};

const sv_ranger_item_next = /** @type {(inputs: Ranger_Item_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nästa objekt`)
};

const tr_ranger_item_next = /** @type {(inputs: Ranger_Item_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonraki öğe`)
};

const zh_ranger_item_next = /** @type {(inputs: Ranger_Item_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下一项`)
};

const ja_ranger_item_next = /** @type {(inputs: Ranger_Item_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`次の項目`)
};

/**
* | output |
* | --- |
* | "Next item" |
*
* @param {Ranger_Item_NextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_item_next = /** @type {((inputs?: Ranger_Item_NextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Item_NextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_item_next(inputs)
	if (locale === "de") return de_ranger_item_next(inputs)
	if (locale === "fr") return fr_ranger_item_next(inputs)
	if (locale === "it") return it_ranger_item_next(inputs)
	if (locale === "nl") return nl_ranger_item_next(inputs)
	if (locale === "pl") return pl_ranger_item_next(inputs)
	if (locale === "pt") return pt_ranger_item_next(inputs)
	if (locale === "ru") return ru_ranger_item_next(inputs)
	if (locale === "sv") return sv_ranger_item_next(inputs)
	if (locale === "tr") return tr_ranger_item_next(inputs)
	if (locale === "zh") return zh_ranger_item_next(inputs)
	if (locale === "ja") return ja_ranger_item_next(inputs)
	return en_ranger_item_next(inputs)
});
