/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Flag_Absolute_PathInputs */

const en_ranger_flag_absolute_path = /** @type {(inputs: Ranger_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Absolute path inside the zip`)
};

const es_ranger_flag_absolute_path = /** @type {(inputs: Ranger_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ruta absoluta dentro del zip`)
};

const de_ranger_flag_absolute_path = /** @type {(inputs: Ranger_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Absoluter Pfad im Zip`)
};

const fr_ranger_flag_absolute_path = /** @type {(inputs: Ranger_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chemin absolu dans le zip`)
};

const it_ranger_flag_absolute_path = /** @type {(inputs: Ranger_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Percorso assoluto nello zip`)
};

const nl_ranger_flag_absolute_path = /** @type {(inputs: Ranger_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Absoluut pad in de zip`)
};

const pl_ranger_flag_absolute_path = /** @type {(inputs: Ranger_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ścieżka bezwzględna w zipie`)
};

const pt_ranger_flag_absolute_path = /** @type {(inputs: Ranger_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caminho absoluto dentro do zip`)
};

const ru_ranger_flag_absolute_path = /** @type {(inputs: Ranger_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Абсолютный путь внутри zip`)
};

const sv_ranger_flag_absolute_path = /** @type {(inputs: Ranger_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Absolut sökväg i zip-filen`)
};

const tr_ranger_flag_absolute_path = /** @type {(inputs: Ranger_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip içinde mutlak yol`)
};

const zh_ranger_flag_absolute_path = /** @type {(inputs: Ranger_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zip 中含绝对路径`)
};

const ja_ranger_flag_absolute_path = /** @type {(inputs: Ranger_Flag_Absolute_PathInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zip 内に絶対パス`)
};

/**
* | output |
* | --- |
* | "Absolute path inside the zip" |
*
* @param {Ranger_Flag_Absolute_PathInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_flag_absolute_path = /** @type {((inputs?: Ranger_Flag_Absolute_PathInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Flag_Absolute_PathInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_flag_absolute_path(inputs)
	if (locale === "de") return de_ranger_flag_absolute_path(inputs)
	if (locale === "fr") return fr_ranger_flag_absolute_path(inputs)
	if (locale === "it") return it_ranger_flag_absolute_path(inputs)
	if (locale === "nl") return nl_ranger_flag_absolute_path(inputs)
	if (locale === "pl") return pl_ranger_flag_absolute_path(inputs)
	if (locale === "pt") return pt_ranger_flag_absolute_path(inputs)
	if (locale === "ru") return ru_ranger_flag_absolute_path(inputs)
	if (locale === "sv") return sv_ranger_flag_absolute_path(inputs)
	if (locale === "tr") return tr_ranger_flag_absolute_path(inputs)
	if (locale === "zh") return zh_ranger_flag_absolute_path(inputs)
	if (locale === "ja") return ja_ranger_flag_absolute_path(inputs)
	return en_ranger_flag_absolute_path(inputs)
});
