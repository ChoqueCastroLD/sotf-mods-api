/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Flag_Extension_FlaggedInputs */

const en_ranger_flag_extension_flagged = /** @type {(inputs: Ranger_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Executable or script file`)
};

const es_ranger_flag_extension_flagged = /** @type {(inputs: Ranger_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivo ejecutable o script`)
};

const de_ranger_flag_extension_flagged = /** @type {(inputs: Ranger_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ausführbare Datei oder Skript`)
};

const fr_ranger_flag_extension_flagged = /** @type {(inputs: Ranger_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fichier exécutable ou script`)
};

const it_ranger_flag_extension_flagged = /** @type {(inputs: Ranger_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File eseguibile o script`)
};

const nl_ranger_flag_extension_flagged = /** @type {(inputs: Ranger_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitvoerbaar bestand of script`)
};

const pl_ranger_flag_extension_flagged = /** @type {(inputs: Ranger_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik wykonywalny lub skrypt`)
};

const pt_ranger_flag_extension_flagged = /** @type {(inputs: Ranger_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivo executável ou script`)
};

const ru_ranger_flag_extension_flagged = /** @type {(inputs: Ranger_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Исполняемый файл или скрипт`)
};

const sv_ranger_flag_extension_flagged = /** @type {(inputs: Ranger_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Körbar fil eller skript`)
};

const tr_ranger_flag_extension_flagged = /** @type {(inputs: Ranger_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çalıştırılabilir dosya veya betik`)
};

const zh_ranger_flag_extension_flagged = /** @type {(inputs: Ranger_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可执行文件或脚本`)
};

const ja_ranger_flag_extension_flagged = /** @type {(inputs: Ranger_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`実行ファイルまたはスクリプト`)
};

/**
* | output |
* | --- |
* | "Executable or script file" |
*
* @param {Ranger_Flag_Extension_FlaggedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_flag_extension_flagged = /** @type {((inputs?: Ranger_Flag_Extension_FlaggedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Flag_Extension_FlaggedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_flag_extension_flagged(inputs)
	if (locale === "de") return de_ranger_flag_extension_flagged(inputs)
	if (locale === "fr") return fr_ranger_flag_extension_flagged(inputs)
	if (locale === "it") return it_ranger_flag_extension_flagged(inputs)
	if (locale === "nl") return nl_ranger_flag_extension_flagged(inputs)
	if (locale === "pl") return pl_ranger_flag_extension_flagged(inputs)
	if (locale === "pt") return pt_ranger_flag_extension_flagged(inputs)
	if (locale === "ru") return ru_ranger_flag_extension_flagged(inputs)
	if (locale === "sv") return sv_ranger_flag_extension_flagged(inputs)
	if (locale === "tr") return tr_ranger_flag_extension_flagged(inputs)
	if (locale === "zh") return zh_ranger_flag_extension_flagged(inputs)
	if (locale === "ja") return ja_ranger_flag_extension_flagged(inputs)
	return en_ranger_flag_extension_flagged(inputs)
});
