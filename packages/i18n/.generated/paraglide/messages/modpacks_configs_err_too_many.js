/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Configs_Err_Too_ManyInputs */

const en_modpacks_configs_err_too_many = /** @type {(inputs: Modpacks_Configs_Err_Too_ManyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The zip has more than 100 files.`)
};

const es_modpacks_configs_err_too_many = /** @type {(inputs: Modpacks_Configs_Err_Too_ManyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El zip tiene más de 100 archivos.`)
};

const de_modpacks_configs_err_too_many = /** @type {(inputs: Modpacks_Configs_Err_Too_ManyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Zip hat mehr als 100 Dateien.`)
};

const fr_modpacks_configs_err_too_many = /** @type {(inputs: Modpacks_Configs_Err_Too_ManyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le zip contient plus de 100 fichiers.`)
};

const it_modpacks_configs_err_too_many = /** @type {(inputs: Modpacks_Configs_Err_Too_ManyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lo zip contiene più di 100 file.`)
};

const nl_modpacks_configs_err_too_many = /** @type {(inputs: Modpacks_Configs_Err_Too_ManyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De zip heeft meer dan 100 bestanden.`)
};

const pl_modpacks_configs_err_too_many = /** @type {(inputs: Modpacks_Configs_Err_Too_ManyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip ma więcej niż 100 plików.`)
};

const pt_modpacks_configs_err_too_many = /** @type {(inputs: Modpacks_Configs_Err_Too_ManyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O zip tem mais de 100 arquivos.`)
};

const ru_modpacks_configs_err_too_many = /** @type {(inputs: Modpacks_Configs_Err_Too_ManyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В zip больше 100 файлов.`)
};

const sv_modpacks_configs_err_too_many = /** @type {(inputs: Modpacks_Configs_Err_Too_ManyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip-filen har fler än 100 filer.`)
};

const tr_modpacks_configs_err_too_many = /** @type {(inputs: Modpacks_Configs_Err_Too_ManyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip'te 100'den fazla dosya var.`)
};

const zh_modpacks_configs_err_too_many = /** @type {(inputs: Modpacks_Configs_Err_Too_ManyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zip 中的文件超过 100 个。`)
};

const ja_modpacks_configs_err_too_many = /** @type {(inputs: Modpacks_Configs_Err_Too_ManyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zip のファイルが 100 件を超えています。`)
};

/**
* | output |
* | --- |
* | "The zip has more than 100 files." |
*
* @param {Modpacks_Configs_Err_Too_ManyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_configs_err_too_many = /** @type {((inputs?: Modpacks_Configs_Err_Too_ManyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_Err_Too_ManyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_configs_err_too_many(inputs)
	if (locale === "de") return de_modpacks_configs_err_too_many(inputs)
	if (locale === "fr") return fr_modpacks_configs_err_too_many(inputs)
	if (locale === "it") return it_modpacks_configs_err_too_many(inputs)
	if (locale === "nl") return nl_modpacks_configs_err_too_many(inputs)
	if (locale === "pl") return pl_modpacks_configs_err_too_many(inputs)
	if (locale === "pt") return pt_modpacks_configs_err_too_many(inputs)
	if (locale === "ru") return ru_modpacks_configs_err_too_many(inputs)
	if (locale === "sv") return sv_modpacks_configs_err_too_many(inputs)
	if (locale === "tr") return tr_modpacks_configs_err_too_many(inputs)
	if (locale === "zh") return zh_modpacks_configs_err_too_many(inputs)
	if (locale === "ja") return ja_modpacks_configs_err_too_many(inputs)
	return en_modpacks_configs_err_too_many(inputs)
});
