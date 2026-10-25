/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Drop_Title_FreeInputs */

const en_upload_drop_title_free = /** @type {(inputs: Upload_Drop_Title_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drop your mod file here`)
};

const es_upload_drop_title_free = /** @type {(inputs: Upload_Drop_Title_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suelta aquí el archivo del mod`)
};

const de_upload_drop_title_free = /** @type {(inputs: Upload_Drop_Title_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-Datei hier ablegen`)
};

const fr_upload_drop_title_free = /** @type {(inputs: Upload_Drop_Title_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déposez le fichier du mod ici`)
};

const it_upload_drop_title_free = /** @type {(inputs: Upload_Drop_Title_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trascina qui il file della mod`)
};

const nl_upload_drop_title_free = /** @type {(inputs: Upload_Drop_Title_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sleep je modbestand hierheen`)
};

const pl_upload_drop_title_free = /** @type {(inputs: Upload_Drop_Title_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upuść tutaj plik moda`)
};

const pt_upload_drop_title_free = /** @type {(inputs: Upload_Drop_Title_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solte aqui o arquivo do mod`)
};

const ru_upload_drop_title_free = /** @type {(inputs: Upload_Drop_Title_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перетащите сюда файл мода`)
};

const sv_upload_drop_title_free = /** @type {(inputs: Upload_Drop_Title_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Släpp moddfilen här`)
};

const tr_upload_drop_title_free = /** @type {(inputs: Upload_Drop_Title_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod dosyanı buraya bırak`)
};

const zh_upload_drop_title_free = /** @type {(inputs: Upload_Drop_Title_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`将模组文件拖到这里`)
};

const ja_upload_drop_title_free = /** @type {(inputs: Upload_Drop_Title_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODファイルをここにドロップ`)
};

/**
* | output |
* | --- |
* | "Drop your mod file here" |
*
* @param {Upload_Drop_Title_FreeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drop_title_free = /** @type {((inputs?: Upload_Drop_Title_FreeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drop_Title_FreeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drop_title_free(inputs)
	if (locale === "de") return de_upload_drop_title_free(inputs)
	if (locale === "fr") return fr_upload_drop_title_free(inputs)
	if (locale === "it") return it_upload_drop_title_free(inputs)
	if (locale === "nl") return nl_upload_drop_title_free(inputs)
	if (locale === "pl") return pl_upload_drop_title_free(inputs)
	if (locale === "pt") return pt_upload_drop_title_free(inputs)
	if (locale === "ru") return ru_upload_drop_title_free(inputs)
	if (locale === "sv") return sv_upload_drop_title_free(inputs)
	if (locale === "tr") return tr_upload_drop_title_free(inputs)
	if (locale === "zh") return zh_upload_drop_title_free(inputs)
	if (locale === "ja") return ja_upload_drop_title_free(inputs)
	return en_upload_drop_title_free(inputs)
});
