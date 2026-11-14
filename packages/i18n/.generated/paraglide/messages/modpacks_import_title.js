/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Import_TitleInputs */

const en_modpacks_import_title = /** @type {(inputs: Modpacks_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Import from SotF Mods Manager`)
};

const es_modpacks_import_title = /** @type {(inputs: Modpacks_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importar desde SotF Mods Manager`)
};

const de_modpacks_import_title = /** @type {(inputs: Modpacks_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aus SotF Mods Manager importieren`)
};

const fr_modpacks_import_title = /** @type {(inputs: Modpacks_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importer depuis SotF Mods Manager`)
};

const it_modpacks_import_title = /** @type {(inputs: Modpacks_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importa da SotF Mods Manager`)
};

const nl_modpacks_import_title = /** @type {(inputs: Modpacks_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importeren uit SotF Mods Manager`)
};

const pl_modpacks_import_title = /** @type {(inputs: Modpacks_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Import z SotF Mods Manager`)
};

const pt_modpacks_import_title = /** @type {(inputs: Modpacks_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importar do SotF Mods Manager`)
};

const ru_modpacks_import_title = /** @type {(inputs: Modpacks_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Импорт из SotF Mods Manager`)
};

const sv_modpacks_import_title = /** @type {(inputs: Modpacks_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importera från SotF Mods Manager`)
};

const tr_modpacks_import_title = /** @type {(inputs: Modpacks_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager'dan içe aktar`)
};

const zh_modpacks_import_title = /** @type {(inputs: Modpacks_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从 SotF Mods Manager 导入`)
};

const ja_modpacks_import_title = /** @type {(inputs: Modpacks_Import_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager からインポート`)
};

/**
* | output |
* | --- |
* | "Import from SotF Mods Manager" |
*
* @param {Modpacks_Import_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_import_title = /** @type {((inputs?: Modpacks_Import_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Import_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_import_title(inputs)
	if (locale === "de") return de_modpacks_import_title(inputs)
	if (locale === "fr") return fr_modpacks_import_title(inputs)
	if (locale === "it") return it_modpacks_import_title(inputs)
	if (locale === "nl") return nl_modpacks_import_title(inputs)
	if (locale === "pl") return pl_modpacks_import_title(inputs)
	if (locale === "pt") return pt_modpacks_import_title(inputs)
	if (locale === "ru") return ru_modpacks_import_title(inputs)
	if (locale === "sv") return sv_modpacks_import_title(inputs)
	if (locale === "tr") return tr_modpacks_import_title(inputs)
	if (locale === "zh") return zh_modpacks_import_title(inputs)
	if (locale === "ja") return ja_modpacks_import_title(inputs)
	return en_modpacks_import_title(inputs)
});
