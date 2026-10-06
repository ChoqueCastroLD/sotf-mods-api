/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Flag_Extension_FlaggedInputs */

const en_upload_flag_extension_flagged = /** @type {(inputs: Upload_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Executable or script: a moderator must review it.`)
};

const es_upload_flag_extension_flagged = /** @type {(inputs: Upload_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ejecutable o script: un moderador debe revisarlo.`)
};

const de_upload_flag_extension_flagged = /** @type {(inputs: Upload_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Programm oder Skript: Ein Moderator muss es prüfen.`)
};

const fr_upload_flag_extension_flagged = /** @type {(inputs: Upload_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exécutable ou script : un modérateur doit l’examiner.`)
};

const it_upload_flag_extension_flagged = /** @type {(inputs: Upload_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eseguibile o script: un moderatore deve esaminarlo.`)
};

const nl_upload_flag_extension_flagged = /** @type {(inputs: Upload_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Programma of script: een moderator moet het controleren.`)
};

const pl_upload_flag_extension_flagged = /** @type {(inputs: Upload_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik wykonywalny lub skrypt: musi go przejrzeć moderator.`)
};

const pt_upload_flag_extension_flagged = /** @type {(inputs: Upload_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Executável ou script: um moderador precisa revisá-lo.`)
};

const ru_upload_flag_extension_flagged = /** @type {(inputs: Upload_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Исполняемый файл или скрипт: его должен проверить модератор.`)
};

const sv_upload_flag_extension_flagged = /** @type {(inputs: Upload_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Program eller skript: en moderator måste granska det.`)
};

const tr_upload_flag_extension_flagged = /** @type {(inputs: Upload_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çalıştırılabilir dosya ya da betik: bir moderatör incelemeli.`)
};

const zh_upload_flag_extension_flagged = /** @type {(inputs: Upload_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可执行文件或脚本：需要版主审核。`)
};

const ja_upload_flag_extension_flagged = /** @type {(inputs: Upload_Flag_Extension_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`実行ファイルまたはスクリプト：モデレーターの確認が必要です。`)
};

/**
* | output |
* | --- |
* | "Executable or script: a moderator must review it." |
*
* @param {Upload_Flag_Extension_FlaggedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_flag_extension_flagged = /** @type {((inputs?: Upload_Flag_Extension_FlaggedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_Extension_FlaggedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_flag_extension_flagged(inputs)
	if (locale === "de") return de_upload_flag_extension_flagged(inputs)
	if (locale === "fr") return fr_upload_flag_extension_flagged(inputs)
	if (locale === "it") return it_upload_flag_extension_flagged(inputs)
	if (locale === "nl") return nl_upload_flag_extension_flagged(inputs)
	if (locale === "pl") return pl_upload_flag_extension_flagged(inputs)
	if (locale === "pt") return pt_upload_flag_extension_flagged(inputs)
	if (locale === "ru") return ru_upload_flag_extension_flagged(inputs)
	if (locale === "sv") return sv_upload_flag_extension_flagged(inputs)
	if (locale === "tr") return tr_upload_flag_extension_flagged(inputs)
	if (locale === "zh") return zh_upload_flag_extension_flagged(inputs)
	if (locale === "ja") return ja_upload_flag_extension_flagged(inputs)
	return en_upload_flag_extension_flagged(inputs)
});
