/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Import_ChooseInputs */

const en_modpacks_import_choose = /** @type {(inputs: Modpacks_Import_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose file`)
};

const es_modpacks_import_choose = /** @type {(inputs: Modpacks_Import_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elegir archivo`)
};

const de_modpacks_import_choose = /** @type {(inputs: Modpacks_Import_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datei wählen`)
};

const fr_modpacks_import_choose = /** @type {(inputs: Modpacks_Import_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisir un fichier`)
};

const it_modpacks_import_choose = /** @type {(inputs: Modpacks_Import_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli file`)
};

const nl_modpacks_import_choose = /** @type {(inputs: Modpacks_Import_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestand kiezen`)
};

const pl_modpacks_import_choose = /** @type {(inputs: Modpacks_Import_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz plik`)
};

const pt_modpacks_import_choose = /** @type {(inputs: Modpacks_Import_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolher arquivo`)
};

const ru_modpacks_import_choose = /** @type {(inputs: Modpacks_Import_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбрать файл`)
};

const sv_modpacks_import_choose = /** @type {(inputs: Modpacks_Import_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj fil`)
};

const tr_modpacks_import_choose = /** @type {(inputs: Modpacks_Import_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya seç`)
};

const zh_modpacks_import_choose = /** @type {(inputs: Modpacks_Import_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择文件`)
};

const ja_modpacks_import_choose = /** @type {(inputs: Modpacks_Import_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルを選択`)
};

/**
* | output |
* | --- |
* | "Choose file" |
*
* @param {Modpacks_Import_ChooseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_import_choose = /** @type {((inputs?: Modpacks_Import_ChooseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Import_ChooseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_import_choose(inputs)
	if (locale === "de") return de_modpacks_import_choose(inputs)
	if (locale === "fr") return fr_modpacks_import_choose(inputs)
	if (locale === "it") return it_modpacks_import_choose(inputs)
	if (locale === "nl") return nl_modpacks_import_choose(inputs)
	if (locale === "pl") return pl_modpacks_import_choose(inputs)
	if (locale === "pt") return pt_modpacks_import_choose(inputs)
	if (locale === "ru") return ru_modpacks_import_choose(inputs)
	if (locale === "sv") return sv_modpacks_import_choose(inputs)
	if (locale === "tr") return tr_modpacks_import_choose(inputs)
	if (locale === "zh") return zh_modpacks_import_choose(inputs)
	if (locale === "ja") return ja_modpacks_import_choose(inputs)
	return en_modpacks_import_choose(inputs)
});
