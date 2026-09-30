/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Choose_OtherInputs */

const en_upload_choose_other = /** @type {(inputs: Upload_Choose_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose another file`)
};

const es_upload_choose_other = /** @type {(inputs: Upload_Choose_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elegir otro archivo`)
};

const de_upload_choose_other = /** @type {(inputs: Upload_Choose_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere Datei wählen`)
};

const fr_upload_choose_other = /** @type {(inputs: Upload_Choose_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisir un autre fichier`)
};

const it_upload_choose_other = /** @type {(inputs: Upload_Choose_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli un altro file`)
};

const nl_upload_choose_other = /** @type {(inputs: Upload_Choose_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ander bestand kiezen`)
};

const pl_upload_choose_other = /** @type {(inputs: Upload_Choose_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz inny plik`)
};

const pt_upload_choose_other = /** @type {(inputs: Upload_Choose_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolher outro arquivo`)
};

const ru_upload_choose_other = /** @type {(inputs: Upload_Choose_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбрать другой файл`)
};

const sv_upload_choose_other = /** @type {(inputs: Upload_Choose_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj en annan fil`)
};

const tr_upload_choose_other = /** @type {(inputs: Upload_Choose_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başka bir dosya seç`)
};

const zh_upload_choose_other = /** @type {(inputs: Upload_Choose_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择其他文件`)
};

const ja_upload_choose_other = /** @type {(inputs: Upload_Choose_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`別のファイルを選ぶ`)
};

/**
* | output |
* | --- |
* | "Choose another file" |
*
* @param {Upload_Choose_OtherInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_choose_other = /** @type {((inputs?: Upload_Choose_OtherInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Choose_OtherInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_choose_other(inputs)
	if (locale === "de") return de_upload_choose_other(inputs)
	if (locale === "fr") return fr_upload_choose_other(inputs)
	if (locale === "it") return it_upload_choose_other(inputs)
	if (locale === "nl") return nl_upload_choose_other(inputs)
	if (locale === "pl") return pl_upload_choose_other(inputs)
	if (locale === "pt") return pt_upload_choose_other(inputs)
	if (locale === "ru") return ru_upload_choose_other(inputs)
	if (locale === "sv") return sv_upload_choose_other(inputs)
	if (locale === "tr") return tr_upload_choose_other(inputs)
	if (locale === "zh") return zh_upload_choose_other(inputs)
	if (locale === "ja") return ja_upload_choose_other(inputs)
	return en_upload_choose_other(inputs)
});
