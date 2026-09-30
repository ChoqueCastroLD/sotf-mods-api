/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Flag_Zip_InvalidInputs */

const en_ranger_flag_zip_invalid = /** @type {(inputs: Ranger_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not a valid zip`)
};

const es_ranger_flag_zip_invalid = /** @type {(inputs: Ranger_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No es un zip válido`)
};

const de_ranger_flag_zip_invalid = /** @type {(inputs: Ranger_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein gültiges Zip`)
};

const fr_ranger_flag_zip_invalid = /** @type {(inputs: Ranger_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip invalide`)
};

const it_ranger_flag_zip_invalid = /** @type {(inputs: Ranger_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip non valido`)
};

const nl_ranger_flag_zip_invalid = /** @type {(inputs: Ranger_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen geldige zip`)
};

const pl_ranger_flag_zip_invalid = /** @type {(inputs: Ranger_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieprawidłowy zip`)
};

const pt_ranger_flag_zip_invalid = /** @type {(inputs: Ranger_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não é um zip válido`)
};

const ru_ranger_flag_zip_invalid = /** @type {(inputs: Ranger_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Некорректный zip`)
};

const sv_ranger_flag_zip_invalid = /** @type {(inputs: Ranger_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte en giltig zip`)
};

const tr_ranger_flag_zip_invalid = /** @type {(inputs: Ranger_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geçerli bir zip değil`)
};

const zh_ranger_flag_zip_invalid = /** @type {(inputs: Ranger_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不是有效的 zip`)
};

const ja_ranger_flag_zip_invalid = /** @type {(inputs: Ranger_Flag_Zip_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有効な zip ではありません`)
};

/**
* | output |
* | --- |
* | "Not a valid zip" |
*
* @param {Ranger_Flag_Zip_InvalidInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_flag_zip_invalid = /** @type {((inputs?: Ranger_Flag_Zip_InvalidInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Flag_Zip_InvalidInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_flag_zip_invalid(inputs)
	if (locale === "de") return de_ranger_flag_zip_invalid(inputs)
	if (locale === "fr") return fr_ranger_flag_zip_invalid(inputs)
	if (locale === "it") return it_ranger_flag_zip_invalid(inputs)
	if (locale === "nl") return nl_ranger_flag_zip_invalid(inputs)
	if (locale === "pl") return pl_ranger_flag_zip_invalid(inputs)
	if (locale === "pt") return pt_ranger_flag_zip_invalid(inputs)
	if (locale === "ru") return ru_ranger_flag_zip_invalid(inputs)
	if (locale === "sv") return sv_ranger_flag_zip_invalid(inputs)
	if (locale === "tr") return tr_ranger_flag_zip_invalid(inputs)
	if (locale === "zh") return zh_ranger_flag_zip_invalid(inputs)
	if (locale === "ja") return ja_ranger_flag_zip_invalid(inputs)
	return en_ranger_flag_zip_invalid(inputs)
});
