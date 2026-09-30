/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Flag_Zip_Bomb_RatioInputs */

const en_ranger_flag_zip_bomb_ratio = /** @type {(inputs: Ranger_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compression ratio too high (zip bomb)`)
};

const es_ranger_flag_zip_bomb_ratio = /** @type {(inputs: Ranger_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ratio de compresión demasiado alto (zip bomb)`)
};

const de_ranger_flag_zip_bomb_ratio = /** @type {(inputs: Ranger_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompressionsverhältnis zu hoch (Zip-Bombe)`)
};

const fr_ranger_flag_zip_bomb_ratio = /** @type {(inputs: Ranger_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taux de compression trop élevé (bombe zip)`)
};

const it_ranger_flag_zip_bomb_ratio = /** @type {(inputs: Ranger_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporto di compressione troppo alto (zip bomb)`)
};

const nl_ranger_flag_zip_bomb_ratio = /** @type {(inputs: Ranger_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compressieverhouding te hoog (zipbom)`)
};

const pl_ranger_flag_zip_bomb_ratio = /** @type {(inputs: Ranger_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zbyt wysoki współczynnik kompresji (bomba zip)`)
};

const pt_ranger_flag_zip_bomb_ratio = /** @type {(inputs: Ranger_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taxa de compressão alta demais (zip bomb)`)
};

const ru_ranger_flag_zip_bomb_ratio = /** @type {(inputs: Ranger_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Слишком высокая степень сжатия (zip-бомба)`)
};

const sv_ranger_flag_zip_bomb_ratio = /** @type {(inputs: Ranger_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`För hög komprimeringsgrad (zipbomb)`)
};

const tr_ranger_flag_zip_bomb_ratio = /** @type {(inputs: Ranger_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sıkıştırma oranı çok yüksek (zip bombası)`)
};

const zh_ranger_flag_zip_bomb_ratio = /** @type {(inputs: Ranger_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`压缩比过高（zip 炸弹）`)
};

const ja_ranger_flag_zip_bomb_ratio = /** @type {(inputs: Ranger_Flag_Zip_Bomb_RatioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`圧縮率が高すぎます（zip 爆弾）`)
};

/**
* | output |
* | --- |
* | "Compression ratio too high (zip bomb)" |
*
* @param {Ranger_Flag_Zip_Bomb_RatioInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_flag_zip_bomb_ratio = /** @type {((inputs?: Ranger_Flag_Zip_Bomb_RatioInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Flag_Zip_Bomb_RatioInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_flag_zip_bomb_ratio(inputs)
	if (locale === "de") return de_ranger_flag_zip_bomb_ratio(inputs)
	if (locale === "fr") return fr_ranger_flag_zip_bomb_ratio(inputs)
	if (locale === "it") return it_ranger_flag_zip_bomb_ratio(inputs)
	if (locale === "nl") return nl_ranger_flag_zip_bomb_ratio(inputs)
	if (locale === "pl") return pl_ranger_flag_zip_bomb_ratio(inputs)
	if (locale === "pt") return pt_ranger_flag_zip_bomb_ratio(inputs)
	if (locale === "ru") return ru_ranger_flag_zip_bomb_ratio(inputs)
	if (locale === "sv") return sv_ranger_flag_zip_bomb_ratio(inputs)
	if (locale === "tr") return tr_ranger_flag_zip_bomb_ratio(inputs)
	if (locale === "zh") return zh_ranger_flag_zip_bomb_ratio(inputs)
	if (locale === "ja") return ja_ranger_flag_zip_bomb_ratio(inputs)
	return en_ranger_flag_zip_bomb_ratio(inputs)
});
