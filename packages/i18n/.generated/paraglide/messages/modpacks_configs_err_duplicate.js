/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Configs_Err_DuplicateInputs */

const en_modpacks_configs_err_duplicate = /** @type {(inputs: Modpacks_Configs_Err_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The same file is in the zip twice.`)
};

const es_modpacks_configs_err_duplicate = /** @type {(inputs: Modpacks_Configs_Err_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El mismo archivo está dos veces en el zip.`)
};

const de_modpacks_configs_err_duplicate = /** @type {(inputs: Modpacks_Configs_Err_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieselbe Datei ist zweimal im Zip.`)
};

const fr_modpacks_configs_err_duplicate = /** @type {(inputs: Modpacks_Configs_Err_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le même fichier figure deux fois dans le zip.`)
};

const it_modpacks_configs_err_duplicate = /** @type {(inputs: Modpacks_Configs_Err_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lo stesso file è due volte nello zip.`)
};

const nl_modpacks_configs_err_duplicate = /** @type {(inputs: Modpacks_Configs_Err_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hetzelfde bestand staat twee keer in de zip.`)
};

const pl_modpacks_configs_err_duplicate = /** @type {(inputs: Modpacks_Configs_Err_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten sam plik jest w zipie dwa razy.`)
};

const pt_modpacks_configs_err_duplicate = /** @type {(inputs: Modpacks_Configs_Err_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O mesmo arquivo está duas vezes no zip.`)
};

const ru_modpacks_configs_err_duplicate = /** @type {(inputs: Modpacks_Configs_Err_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Один и тот же файл есть в zip дважды.`)
};

const sv_modpacks_configs_err_duplicate = /** @type {(inputs: Modpacks_Configs_Err_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Samma fil finns två gånger i zip-filen.`)
};

const tr_modpacks_configs_err_duplicate = /** @type {(inputs: Modpacks_Configs_Err_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aynı dosya zip'te iki kez var.`)
};

const zh_modpacks_configs_err_duplicate = /** @type {(inputs: Modpacks_Configs_Err_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zip 中有重复的文件。`)
};

const ja_modpacks_configs_err_duplicate = /** @type {(inputs: Modpacks_Configs_Err_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`同じファイルが zip に 2 回入っています。`)
};

/**
* | output |
* | --- |
* | "The same file is in the zip twice." |
*
* @param {Modpacks_Configs_Err_DuplicateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_configs_err_duplicate = /** @type {((inputs?: Modpacks_Configs_Err_DuplicateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_Err_DuplicateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_configs_err_duplicate(inputs)
	if (locale === "de") return de_modpacks_configs_err_duplicate(inputs)
	if (locale === "fr") return fr_modpacks_configs_err_duplicate(inputs)
	if (locale === "it") return it_modpacks_configs_err_duplicate(inputs)
	if (locale === "nl") return nl_modpacks_configs_err_duplicate(inputs)
	if (locale === "pl") return pl_modpacks_configs_err_duplicate(inputs)
	if (locale === "pt") return pt_modpacks_configs_err_duplicate(inputs)
	if (locale === "ru") return ru_modpacks_configs_err_duplicate(inputs)
	if (locale === "sv") return sv_modpacks_configs_err_duplicate(inputs)
	if (locale === "tr") return tr_modpacks_configs_err_duplicate(inputs)
	if (locale === "zh") return zh_modpacks_configs_err_duplicate(inputs)
	if (locale === "ja") return ja_modpacks_configs_err_duplicate(inputs)
	return en_modpacks_configs_err_duplicate(inputs)
});
