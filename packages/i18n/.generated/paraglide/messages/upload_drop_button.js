/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Drop_ButtonInputs */

const en_upload_drop_button = /** @type {(inputs: Upload_Drop_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose a file`)
};

const es_upload_drop_button = /** @type {(inputs: Upload_Drop_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elegir archivo`)
};

const de_upload_drop_button = /** @type {(inputs: Upload_Drop_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datei wählen`)
};

const fr_upload_drop_button = /** @type {(inputs: Upload_Drop_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisir un fichier`)
};

const it_upload_drop_button = /** @type {(inputs: Upload_Drop_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli un file`)
};

const nl_upload_drop_button = /** @type {(inputs: Upload_Drop_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestand kiezen`)
};

const pl_upload_drop_button = /** @type {(inputs: Upload_Drop_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz plik`)
};

const pt_upload_drop_button = /** @type {(inputs: Upload_Drop_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolher arquivo`)
};

const ru_upload_drop_button = /** @type {(inputs: Upload_Drop_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбрать файл`)
};

const sv_upload_drop_button = /** @type {(inputs: Upload_Drop_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj fil`)
};

const tr_upload_drop_button = /** @type {(inputs: Upload_Drop_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya seç`)
};

const zh_upload_drop_button = /** @type {(inputs: Upload_Drop_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择文件`)
};

const ja_upload_drop_button = /** @type {(inputs: Upload_Drop_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルを選択`)
};

/**
* | output |
* | --- |
* | "Choose a file" |
*
* @param {Upload_Drop_ButtonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drop_button = /** @type {((inputs?: Upload_Drop_ButtonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drop_ButtonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drop_button(inputs)
	if (locale === "de") return de_upload_drop_button(inputs)
	if (locale === "fr") return fr_upload_drop_button(inputs)
	if (locale === "it") return it_upload_drop_button(inputs)
	if (locale === "nl") return nl_upload_drop_button(inputs)
	if (locale === "pl") return pl_upload_drop_button(inputs)
	if (locale === "pt") return pt_upload_drop_button(inputs)
	if (locale === "ru") return ru_upload_drop_button(inputs)
	if (locale === "sv") return sv_upload_drop_button(inputs)
	if (locale === "tr") return tr_upload_drop_button(inputs)
	if (locale === "zh") return zh_upload_drop_button(inputs)
	if (locale === "ja") return ja_upload_drop_button(inputs)
	return en_upload_drop_button(inputs)
});
