/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Name_MissingInputs */

const en_upload_preflight_name_missing = /** @type {(inputs: Upload_Preflight_Name_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add a name (2 characters or more).`)
};

const es_upload_preflight_name_missing = /** @type {(inputs: Upload_Preflight_Name_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añade un nombre (2 caracteres o más).`)
};

const de_upload_preflight_name_missing = /** @type {(inputs: Upload_Preflight_Name_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Füge einen Namen hinzu (mindestens 2 Zeichen).`)
};

const fr_upload_preflight_name_missing = /** @type {(inputs: Upload_Preflight_Name_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajoutez un nom (2 caractères ou plus).`)
};

const it_upload_preflight_name_missing = /** @type {(inputs: Upload_Preflight_Name_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi un nome (almeno 2 caratteri).`)
};

const nl_upload_preflight_name_missing = /** @type {(inputs: Upload_Preflight_Name_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voeg een naam toe (minstens 2 tekens).`)
};

const pl_upload_preflight_name_missing = /** @type {(inputs: Upload_Preflight_Name_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj nazwę (co najmniej 2 znaki).`)
};

const pt_upload_preflight_name_missing = /** @type {(inputs: Upload_Preflight_Name_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicione um nome (2 caracteres ou mais).`)
};

const ru_upload_preflight_name_missing = /** @type {(inputs: Upload_Preflight_Name_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавьте название (от 2 символов).`)
};

const sv_upload_preflight_name_missing = /** @type {(inputs: Upload_Preflight_Name_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till ett namn (minst 2 tecken).`)
};

const tr_upload_preflight_name_missing = /** @type {(inputs: Upload_Preflight_Name_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir ad ekle (en az 2 karakter).`)
};

const zh_upload_preflight_name_missing = /** @type {(inputs: Upload_Preflight_Name_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请填写名称（至少 2 个字符）。`)
};

const ja_upload_preflight_name_missing = /** @type {(inputs: Upload_Preflight_Name_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前を入力してください（2文字以上）。`)
};

/**
* | output |
* | --- |
* | "Add a name (2 characters or more)." |
*
* @param {Upload_Preflight_Name_MissingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_name_missing = /** @type {((inputs?: Upload_Preflight_Name_MissingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Name_MissingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_name_missing(inputs)
	if (locale === "de") return de_upload_preflight_name_missing(inputs)
	if (locale === "fr") return fr_upload_preflight_name_missing(inputs)
	if (locale === "it") return it_upload_preflight_name_missing(inputs)
	if (locale === "nl") return nl_upload_preflight_name_missing(inputs)
	if (locale === "pl") return pl_upload_preflight_name_missing(inputs)
	if (locale === "pt") return pt_upload_preflight_name_missing(inputs)
	if (locale === "ru") return ru_upload_preflight_name_missing(inputs)
	if (locale === "sv") return sv_upload_preflight_name_missing(inputs)
	if (locale === "tr") return tr_upload_preflight_name_missing(inputs)
	if (locale === "zh") return zh_upload_preflight_name_missing(inputs)
	if (locale === "ja") return ja_upload_preflight_name_missing(inputs)
	return en_upload_preflight_name_missing(inputs)
});
