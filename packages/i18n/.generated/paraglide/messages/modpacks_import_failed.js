/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Import_FailedInputs */

const en_modpacks_import_failed = /** @type {(inputs: Modpacks_Import_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't import the profile`)
};

const es_modpacks_import_failed = /** @type {(inputs: Modpacks_Import_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo importar el perfil`)
};

const de_modpacks_import_failed = /** @type {(inputs: Modpacks_Import_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profil konnte nicht importiert werden`)
};

const fr_modpacks_import_failed = /** @type {(inputs: Modpacks_Import_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d’importer le profil`)
};

const it_modpacks_import_failed = /** @type {(inputs: Modpacks_Import_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile importare il profilo`)
};

const nl_modpacks_import_failed = /** @type {(inputs: Modpacks_Import_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan het profiel niet importeren`)
};

const pl_modpacks_import_failed = /** @type {(inputs: Modpacks_Import_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zaimportować profilu`)
};

const pt_modpacks_import_failed = /** @type {(inputs: Modpacks_Import_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível importar o perfil`)
};

const ru_modpacks_import_failed = /** @type {(inputs: Modpacks_Import_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось импортировать профиль`)
};

const sv_modpacks_import_failed = /** @type {(inputs: Modpacks_Import_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att importera profilen`)
};

const tr_modpacks_import_failed = /** @type {(inputs: Modpacks_Import_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profil içe aktarılamadı`)
};

const zh_modpacks_import_failed = /** @type {(inputs: Modpacks_Import_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法导入配置文件`)
};

const ja_modpacks_import_failed = /** @type {(inputs: Modpacks_Import_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロファイルをインポートできませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn't import the profile" |
*
* @param {Modpacks_Import_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_import_failed = /** @type {((inputs?: Modpacks_Import_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Import_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_import_failed(inputs)
	if (locale === "de") return de_modpacks_import_failed(inputs)
	if (locale === "fr") return fr_modpacks_import_failed(inputs)
	if (locale === "it") return it_modpacks_import_failed(inputs)
	if (locale === "nl") return nl_modpacks_import_failed(inputs)
	if (locale === "pl") return pl_modpacks_import_failed(inputs)
	if (locale === "pt") return pt_modpacks_import_failed(inputs)
	if (locale === "ru") return ru_modpacks_import_failed(inputs)
	if (locale === "sv") return sv_modpacks_import_failed(inputs)
	if (locale === "tr") return tr_modpacks_import_failed(inputs)
	if (locale === "zh") return zh_modpacks_import_failed(inputs)
	if (locale === "ja") return ja_modpacks_import_failed(inputs)
	return en_modpacks_import_failed(inputs)
});
