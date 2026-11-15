/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Hand_4Inputs */

const en_manager_hand_4 = /** @type {(inputs: Manager_Hand_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Extract everything into the Mods folder.`)
};

const es_manager_hand_4 = /** @type {(inputs: Manager_Hand_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Extraer todo en la carpeta Mods.`)
};

const de_manager_hand_4 = /** @type {(inputs: Manager_Hand_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles in den Ordner Mods entpacken.`)
};

const fr_manager_hand_4 = /** @type {(inputs: Manager_Hand_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout extraire dans le dossier Mods.`)
};

const it_manager_hand_4 = /** @type {(inputs: Manager_Hand_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estrarre tutto nella cartella Mods.`)
};

const nl_manager_hand_4 = /** @type {(inputs: Manager_Hand_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles uitpakken in de map Mods.`)
};

const pl_manager_hand_4 = /** @type {(inputs: Manager_Hand_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozpakować wszystko do folderu Mods.`)
};

const pt_manager_hand_4 = /** @type {(inputs: Manager_Hand_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Extrair tudo na pasta Mods.`)
};

const ru_manager_hand_4 = /** @type {(inputs: Manager_Hand_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Распаковать всё в папку Mods.`)
};

const sv_manager_hand_4 = /** @type {(inputs: Manager_Hand_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Packa upp allt i mappen Mods.`)
};

const tr_manager_hand_4 = /** @type {(inputs: Manager_Hand_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her şeyi Mods klasörüne çıkarmak.`)
};

const zh_manager_hand_4 = /** @type {(inputs: Manager_Hand_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`把所有文件解压到 Mods 文件夹。`)
};

const ja_manager_hand_4 = /** @type {(inputs: Manager_Hand_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてを Mods フォルダに展開する。`)
};

/**
* | output |
* | --- |
* | "Extract everything into the Mods folder." |
*
* @param {Manager_Hand_4Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_hand_4 = /** @type {((inputs?: Manager_Hand_4Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Hand_4Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_hand_4(inputs)
	if (locale === "de") return de_manager_hand_4(inputs)
	if (locale === "fr") return fr_manager_hand_4(inputs)
	if (locale === "it") return it_manager_hand_4(inputs)
	if (locale === "nl") return nl_manager_hand_4(inputs)
	if (locale === "pl") return pl_manager_hand_4(inputs)
	if (locale === "pt") return pt_manager_hand_4(inputs)
	if (locale === "ru") return ru_manager_hand_4(inputs)
	if (locale === "sv") return sv_manager_hand_4(inputs)
	if (locale === "tr") return tr_manager_hand_4(inputs)
	if (locale === "zh") return zh_manager_hand_4(inputs)
	if (locale === "ja") return ja_manager_hand_4(inputs)
	return en_manager_hand_4(inputs)
});
