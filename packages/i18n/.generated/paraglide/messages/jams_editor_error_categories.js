/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Error_CategoriesInputs */

const en_jams_editor_error_categories = /** @type {(inputs: Jams_Editor_Error_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Each category needs a unique key (lowercase letters, digits, hyphens; 2 to 31 characters).`)
};

const es_jams_editor_error_categories = /** @type {(inputs: Jams_Editor_Error_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada categoría necesita una clave única (minúsculas, dígitos, guiones; de 2 a 31 caracteres).`)
};

const de_jams_editor_error_categories = /** @type {(inputs: Jams_Editor_Error_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jede Kategorie braucht einen eindeutigen Schlüssel (Kleinbuchstaben, Ziffern, Bindestriche; 2 bis 31 Zeichen).`)
};

const fr_jams_editor_error_categories = /** @type {(inputs: Jams_Editor_Error_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chaque catégorie doit avoir une clé unique (minuscules, chiffres, tirets ; 2 à 31 caractères).`)
};

const it_jams_editor_error_categories = /** @type {(inputs: Jams_Editor_Error_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogni categoria richiede una chiave univoca (minuscole, cifre, trattini; da 2 a 31 caratteri).`)
};

const nl_jams_editor_error_categories = /** @type {(inputs: Jams_Editor_Error_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke categorie heeft een unieke sleutel nodig (kleine letters, cijfers, streepjes; 2 tot 31 tekens).`)
};

const pl_jams_editor_error_categories = /** @type {(inputs: Jams_Editor_Error_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Każda kategoria wymaga unikalnego klucza (małe litery, cyfry, myślniki; 2–31 znaków).`)
};

const pt_jams_editor_error_categories = /** @type {(inputs: Jams_Editor_Error_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada categoria precisa de uma chave única (minúsculas, dígitos, hifens; de 2 a 31 caracteres).`)
};

const ru_jams_editor_error_categories = /** @type {(inputs: Jams_Editor_Error_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У каждой категории должен быть уникальный ключ (строчные буквы, цифры, дефисы; 2–31 символ).`)
};

const sv_jams_editor_error_categories = /** @type {(inputs: Jams_Editor_Error_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varje kategori behöver en unik nyckel (gemener, siffror, bindestreck; 2 till 31 tecken).`)
};

const tr_jams_editor_error_categories = /** @type {(inputs: Jams_Editor_Error_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her kategorinin benzersiz bir anahtarı olmalı (küçük harf, rakam, tire; 2 ile 31 karakter).`)
};

const zh_jams_editor_error_categories = /** @type {(inputs: Jams_Editor_Error_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每个类别需要唯一的键（小写字母、数字、连字符；2 到 31 个字符）。`)
};

const ja_jams_editor_error_categories = /** @type {(inputs: Jams_Editor_Error_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`各カテゴリには一意のキーが必要です（小文字・数字・ハイフン、2〜31文字）。`)
};

/**
* | output |
* | --- |
* | "Each category needs a unique key (lowercase letters, digits, hyphens; 2 to 31 characters)." |
*
* @param {Jams_Editor_Error_CategoriesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_error_categories = /** @type {((inputs?: Jams_Editor_Error_CategoriesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Error_CategoriesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_error_categories(inputs)
	if (locale === "de") return de_jams_editor_error_categories(inputs)
	if (locale === "fr") return fr_jams_editor_error_categories(inputs)
	if (locale === "it") return it_jams_editor_error_categories(inputs)
	if (locale === "nl") return nl_jams_editor_error_categories(inputs)
	if (locale === "pl") return pl_jams_editor_error_categories(inputs)
	if (locale === "pt") return pt_jams_editor_error_categories(inputs)
	if (locale === "ru") return ru_jams_editor_error_categories(inputs)
	if (locale === "sv") return sv_jams_editor_error_categories(inputs)
	if (locale === "tr") return tr_jams_editor_error_categories(inputs)
	if (locale === "zh") return zh_jams_editor_error_categories(inputs)
	if (locale === "ja") return ja_jams_editor_error_categories(inputs)
	return en_jams_editor_error_categories(inputs)
});
