/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Flagged_TitleInputs */

const en_upload_flagged_title = /** @type {(inputs: Upload_Flagged_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A moderator will review this file.`)
};

const es_upload_flagged_title = /** @type {(inputs: Upload_Flagged_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un moderador revisará este archivo.`)
};

const de_upload_flagged_title = /** @type {(inputs: Upload_Flagged_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Moderator sieht sich diese Datei an.`)
};

const fr_upload_flagged_title = /** @type {(inputs: Upload_Flagged_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un modérateur va examiner ce fichier.`)
};

const it_upload_flagged_title = /** @type {(inputs: Upload_Flagged_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un moderatore esaminerà questo file.`)
};

const nl_upload_flagged_title = /** @type {(inputs: Upload_Flagged_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een moderator bekijkt dit bestand.`)
};

const pl_upload_flagged_title = /** @type {(inputs: Upload_Flagged_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderator przejrzy ten plik.`)
};

const pt_upload_flagged_title = /** @type {(inputs: Upload_Flagged_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um moderador vai analisar este arquivo.`)
};

const ru_upload_flagged_title = /** @type {(inputs: Upload_Flagged_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модератор посмотрит этот файл.`)
};

const sv_upload_flagged_title = /** @type {(inputs: Upload_Flagged_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En moderator tittar på den här filen.`)
};

const tr_upload_flagged_title = /** @type {(inputs: Upload_Flagged_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir moderatör bu dosyaya bakacak.`)
};

const zh_upload_flagged_title = /** @type {(inputs: Upload_Flagged_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版主会查看这个文件。`)
};

const ja_upload_flagged_title = /** @type {(inputs: Upload_Flagged_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーターがこのファイルを確認します。`)
};

/**
* | output |
* | --- |
* | "A moderator will review this file." |
*
* @param {Upload_Flagged_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_flagged_title = /** @type {((inputs?: Upload_Flagged_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flagged_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_flagged_title(inputs)
	if (locale === "de") return de_upload_flagged_title(inputs)
	if (locale === "fr") return fr_upload_flagged_title(inputs)
	if (locale === "it") return it_upload_flagged_title(inputs)
	if (locale === "nl") return nl_upload_flagged_title(inputs)
	if (locale === "pl") return pl_upload_flagged_title(inputs)
	if (locale === "pt") return pt_upload_flagged_title(inputs)
	if (locale === "ru") return ru_upload_flagged_title(inputs)
	if (locale === "sv") return sv_upload_flagged_title(inputs)
	if (locale === "tr") return tr_upload_flagged_title(inputs)
	if (locale === "zh") return zh_upload_flagged_title(inputs)
	if (locale === "ja") return ja_upload_flagged_title(inputs)
	return en_upload_flagged_title(inputs)
});
