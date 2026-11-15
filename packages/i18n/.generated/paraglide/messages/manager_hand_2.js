/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Hand_2Inputs */

const en_manager_hand_2 = /** @type {(inputs: Manager_Hand_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download the mod as a zip file.`)
};

const es_manager_hand_2 = /** @type {(inputs: Manager_Hand_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargar el mod como archivo zip.`)
};

const de_manager_hand_2 = /** @type {(inputs: Manager_Hand_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den Mod als Zip-Datei herunterladen.`)
};

const fr_manager_hand_2 = /** @type {(inputs: Manager_Hand_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Télécharger le mod en fichier zip.`)
};

const it_manager_hand_2 = /** @type {(inputs: Manager_Hand_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scaricare la mod come file zip.`)
};

const nl_manager_hand_2 = /** @type {(inputs: Manager_Hand_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De mod downloaden als zip-bestand.`)
};

const pl_manager_hand_2 = /** @type {(inputs: Manager_Hand_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrać mod jako plik zip.`)
};

const pt_manager_hand_2 = /** @type {(inputs: Manager_Hand_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixar o mod como arquivo zip.`)
};

const ru_manager_hand_2 = /** @type {(inputs: Manager_Hand_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать мод в zip-архиве.`)
};

const sv_manager_hand_2 = /** @type {(inputs: Manager_Hand_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ner modden som en zip-fil.`)
};

const tr_manager_hand_2 = /** @type {(inputs: Manager_Hand_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modu zip dosyası olarak indirmek.`)
};

const zh_manager_hand_2 = /** @type {(inputs: Manager_Hand_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载模组的 zip 文件。`)
};

const ja_manager_hand_2 = /** @type {(inputs: Manager_Hand_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod を zip ファイルでダウンロードする。`)
};

/**
* | output |
* | --- |
* | "Download the mod as a zip file." |
*
* @param {Manager_Hand_2Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_hand_2 = /** @type {((inputs?: Manager_Hand_2Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Hand_2Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_hand_2(inputs)
	if (locale === "de") return de_manager_hand_2(inputs)
	if (locale === "fr") return fr_manager_hand_2(inputs)
	if (locale === "it") return it_manager_hand_2(inputs)
	if (locale === "nl") return nl_manager_hand_2(inputs)
	if (locale === "pl") return pl_manager_hand_2(inputs)
	if (locale === "pt") return pt_manager_hand_2(inputs)
	if (locale === "ru") return ru_manager_hand_2(inputs)
	if (locale === "sv") return sv_manager_hand_2(inputs)
	if (locale === "tr") return tr_manager_hand_2(inputs)
	if (locale === "zh") return zh_manager_hand_2(inputs)
	if (locale === "ja") return ja_manager_hand_2(inputs)
	return en_manager_hand_2(inputs)
});
