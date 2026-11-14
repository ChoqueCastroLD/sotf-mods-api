/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Import_ButtonInputs */

const en_modpacks_import_button = /** @type {(inputs: Modpacks_Import_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Import .sotfprofile`)
};

const es_modpacks_import_button = /** @type {(inputs: Modpacks_Import_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importar .sotfprofile`)
};

const de_modpacks_import_button = /** @type {(inputs: Modpacks_Import_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`.sotfprofile importieren`)
};

const fr_modpacks_import_button = /** @type {(inputs: Modpacks_Import_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importer un .sotfprofile`)
};

const it_modpacks_import_button = /** @type {(inputs: Modpacks_Import_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importa .sotfprofile`)
};

const nl_modpacks_import_button = /** @type {(inputs: Modpacks_Import_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`.sotfprofile importeren`)
};

const pl_modpacks_import_button = /** @type {(inputs: Modpacks_Import_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importuj .sotfprofile`)
};

const pt_modpacks_import_button = /** @type {(inputs: Modpacks_Import_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importar .sotfprofile`)
};

const ru_modpacks_import_button = /** @type {(inputs: Modpacks_Import_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Импорт .sotfprofile`)
};

const sv_modpacks_import_button = /** @type {(inputs: Modpacks_Import_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importera .sotfprofile`)
};

const tr_modpacks_import_button = /** @type {(inputs: Modpacks_Import_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`.sotfprofile içe aktar`)
};

const zh_modpacks_import_button = /** @type {(inputs: Modpacks_Import_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`导入 .sotfprofile`)
};

const ja_modpacks_import_button = /** @type {(inputs: Modpacks_Import_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`.sotfprofile をインポート`)
};

/**
* | output |
* | --- |
* | "Import .sotfprofile" |
*
* @param {Modpacks_Import_ButtonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_import_button = /** @type {((inputs?: Modpacks_Import_ButtonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Import_ButtonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_import_button(inputs)
	if (locale === "de") return de_modpacks_import_button(inputs)
	if (locale === "fr") return fr_modpacks_import_button(inputs)
	if (locale === "it") return it_modpacks_import_button(inputs)
	if (locale === "nl") return nl_modpacks_import_button(inputs)
	if (locale === "pl") return pl_modpacks_import_button(inputs)
	if (locale === "pt") return pt_modpacks_import_button(inputs)
	if (locale === "ru") return ru_modpacks_import_button(inputs)
	if (locale === "sv") return sv_modpacks_import_button(inputs)
	if (locale === "tr") return tr_modpacks_import_button(inputs)
	if (locale === "zh") return zh_modpacks_import_button(inputs)
	if (locale === "ja") return ja_modpacks_import_button(inputs)
	return en_modpacks_import_button(inputs)
});
