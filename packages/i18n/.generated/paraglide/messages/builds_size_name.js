/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ size: NonNullable<unknown> }} Builds_Size_NameInputs */

const en_builds_size_name = /** @type {(inputs: Builds_Size_NameInputs) => LocalizedString} */ (i) => {
	if (i?.size === "S") return /** @type {LocalizedString} */ (`Small`);
	if (i?.size === "M") return /** @type {LocalizedString} */ (`Medium`);
	if (i?.size === "L") return /** @type {LocalizedString} */ (`Large`);
	if (i?.size === "XL") return /** @type {LocalizedString} */ (`Extra large`);
	return /** @type {LocalizedString} */ (`${i?.size}`)
	
};

const es_builds_size_name = /** @type {(inputs: Builds_Size_NameInputs) => LocalizedString} */ (i) => {
	if (i?.size === "S") return /** @type {LocalizedString} */ (`Pequeña`);
	if (i?.size === "M") return /** @type {LocalizedString} */ (`Mediana`);
	if (i?.size === "L") return /** @type {LocalizedString} */ (`Grande`);
	if (i?.size === "XL") return /** @type {LocalizedString} */ (`Enorme`);
	return /** @type {LocalizedString} */ (`${i?.size}`)
	
};

const de_builds_size_name = /** @type {(inputs: Builds_Size_NameInputs) => LocalizedString} */ (i) => {
	if (i?.size === "S") return /** @type {LocalizedString} */ (`Klein`);
	if (i?.size === "M") return /** @type {LocalizedString} */ (`Mittel`);
	if (i?.size === "L") return /** @type {LocalizedString} */ (`Groß`);
	if (i?.size === "XL") return /** @type {LocalizedString} */ (`Riesig`);
	return /** @type {LocalizedString} */ (`${i?.size}`)
	
};

const fr_builds_size_name = /** @type {(inputs: Builds_Size_NameInputs) => LocalizedString} */ (i) => {
	if (i?.size === "S") return /** @type {LocalizedString} */ (`Petite`);
	if (i?.size === "M") return /** @type {LocalizedString} */ (`Moyenne`);
	if (i?.size === "L") return /** @type {LocalizedString} */ (`Grande`);
	if (i?.size === "XL") return /** @type {LocalizedString} */ (`Très grande`);
	return /** @type {LocalizedString} */ (`${i?.size}`)
	
};

const it_builds_size_name = /** @type {(inputs: Builds_Size_NameInputs) => LocalizedString} */ (i) => {
	if (i?.size === "S") return /** @type {LocalizedString} */ (`Piccola`);
	if (i?.size === "M") return /** @type {LocalizedString} */ (`Media`);
	if (i?.size === "L") return /** @type {LocalizedString} */ (`Grande`);
	if (i?.size === "XL") return /** @type {LocalizedString} */ (`Enorme`);
	return /** @type {LocalizedString} */ (`${i?.size}`)
	
};

const nl_builds_size_name = /** @type {(inputs: Builds_Size_NameInputs) => LocalizedString} */ (i) => {
	if (i?.size === "S") return /** @type {LocalizedString} */ (`Klein`);
	if (i?.size === "M") return /** @type {LocalizedString} */ (`Middel`);
	if (i?.size === "L") return /** @type {LocalizedString} */ (`Groot`);
	if (i?.size === "XL") return /** @type {LocalizedString} */ (`Enorm`);
	return /** @type {LocalizedString} */ (`${i?.size}`)
	
};

const pl_builds_size_name = /** @type {(inputs: Builds_Size_NameInputs) => LocalizedString} */ (i) => {
	if (i?.size === "S") return /** @type {LocalizedString} */ (`Mały`);
	if (i?.size === "M") return /** @type {LocalizedString} */ (`Średni`);
	if (i?.size === "L") return /** @type {LocalizedString} */ (`Duży`);
	if (i?.size === "XL") return /** @type {LocalizedString} */ (`Ogromny`);
	return /** @type {LocalizedString} */ (`${i?.size}`)
	
};

const pt_builds_size_name = /** @type {(inputs: Builds_Size_NameInputs) => LocalizedString} */ (i) => {
	if (i?.size === "S") return /** @type {LocalizedString} */ (`Pequena`);
	if (i?.size === "M") return /** @type {LocalizedString} */ (`Média`);
	if (i?.size === "L") return /** @type {LocalizedString} */ (`Grande`);
	if (i?.size === "XL") return /** @type {LocalizedString} */ (`Enorme`);
	return /** @type {LocalizedString} */ (`${i?.size}`)
	
};

const ru_builds_size_name = /** @type {(inputs: Builds_Size_NameInputs) => LocalizedString} */ (i) => {
	if (i?.size === "S") return /** @type {LocalizedString} */ (`Маленькая`);
	if (i?.size === "M") return /** @type {LocalizedString} */ (`Средняя`);
	if (i?.size === "L") return /** @type {LocalizedString} */ (`Большая`);
	if (i?.size === "XL") return /** @type {LocalizedString} */ (`Огромная`);
	return /** @type {LocalizedString} */ (`${i?.size}`)
	
};

const sv_builds_size_name = /** @type {(inputs: Builds_Size_NameInputs) => LocalizedString} */ (i) => {
	if (i?.size === "S") return /** @type {LocalizedString} */ (`Liten`);
	if (i?.size === "M") return /** @type {LocalizedString} */ (`Mellan`);
	if (i?.size === "L") return /** @type {LocalizedString} */ (`Stor`);
	if (i?.size === "XL") return /** @type {LocalizedString} */ (`Enorm`);
	return /** @type {LocalizedString} */ (`${i?.size}`)
	
};

const tr_builds_size_name = /** @type {(inputs: Builds_Size_NameInputs) => LocalizedString} */ (i) => {
	if (i?.size === "S") return /** @type {LocalizedString} */ (`Küçük`);
	if (i?.size === "M") return /** @type {LocalizedString} */ (`Orta`);
	if (i?.size === "L") return /** @type {LocalizedString} */ (`Büyük`);
	if (i?.size === "XL") return /** @type {LocalizedString} */ (`Devasa`);
	return /** @type {LocalizedString} */ (`${i?.size}`)
	
};

const zh_builds_size_name = /** @type {(inputs: Builds_Size_NameInputs) => LocalizedString} */ (i) => {
	if (i?.size === "S") return /** @type {LocalizedString} */ (`小型`);
	if (i?.size === "M") return /** @type {LocalizedString} */ (`中型`);
	if (i?.size === "L") return /** @type {LocalizedString} */ (`大型`);
	if (i?.size === "XL") return /** @type {LocalizedString} */ (`超大型`);
	return /** @type {LocalizedString} */ (`${i?.size}`)
	
};

const ja_builds_size_name = /** @type {(inputs: Builds_Size_NameInputs) => LocalizedString} */ (i) => {
	if (i?.size === "S") return /** @type {LocalizedString} */ (`小`);
	if (i?.size === "M") return /** @type {LocalizedString} */ (`中`);
	if (i?.size === "L") return /** @type {LocalizedString} */ (`大`);
	if (i?.size === "XL") return /** @type {LocalizedString} */ (`特大`);
	return /** @type {LocalizedString} */ (`${i?.size}`)
	
};

/**
* | size | output |
* | --- | --- |
* | "S" | "Small" |
* | "M" | "Medium" |
* | "L" | "Large" |
* | "XL" | "Extra large" |
* | * | "{size}" |
*
* @param {Builds_Size_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_size_name = /** @type {((inputs: Builds_Size_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Size_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_size_name(inputs)
	if (locale === "de") return de_builds_size_name(inputs)
	if (locale === "fr") return fr_builds_size_name(inputs)
	if (locale === "it") return it_builds_size_name(inputs)
	if (locale === "nl") return nl_builds_size_name(inputs)
	if (locale === "pl") return pl_builds_size_name(inputs)
	if (locale === "pt") return pt_builds_size_name(inputs)
	if (locale === "ru") return ru_builds_size_name(inputs)
	if (locale === "sv") return sv_builds_size_name(inputs)
	if (locale === "tr") return tr_builds_size_name(inputs)
	if (locale === "zh") return zh_builds_size_name(inputs)
	if (locale === "ja") return ja_builds_size_name(inputs)
	return en_builds_size_name(inputs)
});
