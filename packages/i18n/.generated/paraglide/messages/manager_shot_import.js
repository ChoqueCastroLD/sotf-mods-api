/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Shot_ImportInputs */

const en_manager_shot_import = /** @type {(inputs: Manager_Shot_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importing a shared profile as a new profile`)
};

const es_manager_shot_import = /** @type {(inputs: Manager_Shot_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importar un perfil compartido como perfil nuevo`)
};

const de_manager_shot_import = /** @type {(inputs: Manager_Shot_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein geteiltes Profil als neues Profil importieren`)
};

const fr_manager_shot_import = /** @type {(inputs: Manager_Shot_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importer un profil partagé comme nouveau profil`)
};

const it_manager_shot_import = /** @type {(inputs: Manager_Shot_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importare un profilo condiviso come nuovo profilo`)
};

const nl_manager_shot_import = /** @type {(inputs: Manager_Shot_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een gedeeld profiel importeren als nieuw profiel`)
};

const pl_manager_shot_import = /** @type {(inputs: Manager_Shot_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Import udostępnionego profilu jako nowego profilu`)
};

const pt_manager_shot_import = /** @type {(inputs: Manager_Shot_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importar um perfil compartilhado como novo perfil`)
};

const ru_manager_shot_import = /** @type {(inputs: Manager_Shot_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Импорт общего профиля как нового профиля`)
};

const sv_manager_shot_import = /** @type {(inputs: Manager_Shot_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importera en delad profil som en ny profil`)
};

const tr_manager_shot_import = /** @type {(inputs: Manager_Shot_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paylaşılan bir profili yeni profil olarak içe aktarma`)
};

const zh_manager_shot_import = /** @type {(inputs: Manager_Shot_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`将共享的配置导入为新配置`)
};

const ja_manager_shot_import = /** @type {(inputs: Manager_Shot_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`共有プロファイルを新しいプロファイルとしてインポート`)
};

/**
* | output |
* | --- |
* | "Importing a shared profile as a new profile" |
*
* @param {Manager_Shot_ImportInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_shot_import = /** @type {((inputs?: Manager_Shot_ImportInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Shot_ImportInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_shot_import(inputs)
	if (locale === "de") return de_manager_shot_import(inputs)
	if (locale === "fr") return fr_manager_shot_import(inputs)
	if (locale === "it") return it_manager_shot_import(inputs)
	if (locale === "nl") return nl_manager_shot_import(inputs)
	if (locale === "pl") return pl_manager_shot_import(inputs)
	if (locale === "pt") return pt_manager_shot_import(inputs)
	if (locale === "ru") return ru_manager_shot_import(inputs)
	if (locale === "sv") return sv_manager_shot_import(inputs)
	if (locale === "tr") return tr_manager_shot_import(inputs)
	if (locale === "zh") return zh_manager_shot_import(inputs)
	if (locale === "ja") return ja_manager_shot_import(inputs)
	return en_manager_shot_import(inputs)
});
