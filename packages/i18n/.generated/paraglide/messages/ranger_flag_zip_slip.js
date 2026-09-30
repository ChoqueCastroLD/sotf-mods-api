/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Flag_Zip_SlipInputs */

const en_ranger_flag_zip_slip = /** @type {(inputs: Ranger_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Path escapes the mod folder (zip slip)`)
};

const es_ranger_flag_zip_slip = /** @type {(inputs: Ranger_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una ruta sale de la carpeta del mod (zip slip)`)
};

const de_ranger_flag_zip_slip = /** @type {(inputs: Ranger_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pfad verlässt den Mod-Ordner (Zip Slip)`)
};

const fr_ranger_flag_zip_slip = /** @type {(inputs: Ranger_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chemin qui sort du dossier du mod (zip slip)`)
};

const it_ranger_flag_zip_slip = /** @type {(inputs: Ranger_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Percorso che esce dalla cartella della mod (zip slip)`)
};

const nl_ranger_flag_zip_slip = /** @type {(inputs: Ranger_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pad verlaat de modmap (zip slip)`)
};

const pl_ranger_flag_zip_slip = /** @type {(inputs: Ranger_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ścieżka wychodzi poza folder moda (zip slip)`)
};

const pt_ranger_flag_zip_slip = /** @type {(inputs: Ranger_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caminho sai da pasta do mod (zip slip)`)
};

const ru_ranger_flag_zip_slip = /** @type {(inputs: Ranger_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Путь выходит за папку мода (zip slip)`)
};

const sv_ranger_flag_zip_slip = /** @type {(inputs: Ranger_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sökväg lämnar moddmappen (zip slip)`)
};

const tr_ranger_flag_zip_slip = /** @type {(inputs: Ranger_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yol mod klasörünün dışına çıkıyor (zip slip)`)
};

const zh_ranger_flag_zip_slip = /** @type {(inputs: Ranger_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`路径超出模组文件夹（zip slip）`)
};

const ja_ranger_flag_zip_slip = /** @type {(inputs: Ranger_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスがMODフォルダーの外に出ています（zip slip）`)
};

/**
* | output |
* | --- |
* | "Path escapes the mod folder (zip slip)" |
*
* @param {Ranger_Flag_Zip_SlipInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_flag_zip_slip = /** @type {((inputs?: Ranger_Flag_Zip_SlipInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Flag_Zip_SlipInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_flag_zip_slip(inputs)
	if (locale === "de") return de_ranger_flag_zip_slip(inputs)
	if (locale === "fr") return fr_ranger_flag_zip_slip(inputs)
	if (locale === "it") return it_ranger_flag_zip_slip(inputs)
	if (locale === "nl") return nl_ranger_flag_zip_slip(inputs)
	if (locale === "pl") return pl_ranger_flag_zip_slip(inputs)
	if (locale === "pt") return pt_ranger_flag_zip_slip(inputs)
	if (locale === "ru") return ru_ranger_flag_zip_slip(inputs)
	if (locale === "sv") return sv_ranger_flag_zip_slip(inputs)
	if (locale === "tr") return tr_ranger_flag_zip_slip(inputs)
	if (locale === "zh") return zh_ranger_flag_zip_slip(inputs)
	if (locale === "ja") return ja_ranger_flag_zip_slip(inputs)
	return en_ranger_flag_zip_slip(inputs)
});
