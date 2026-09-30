/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Category_InvalidInputs */

const en_upload_preflight_category_invalid = /** @type {(inputs: Upload_Preflight_Category_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The category doesn’t exist any more: choose another.`)
};

const es_upload_preflight_category_invalid = /** @type {(inputs: Upload_Preflight_Category_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La categoría ya no existe: elige otra.`)
};

const de_upload_preflight_category_invalid = /** @type {(inputs: Upload_Preflight_Category_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Kategorie gibt es nicht mehr: Wähle eine andere.`)
};

const fr_upload_preflight_category_invalid = /** @type {(inputs: Upload_Preflight_Category_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La catégorie n’existe plus : choisissez-en une autre.`)
};

const it_upload_preflight_category_invalid = /** @type {(inputs: Upload_Preflight_Category_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La categoria non esiste più: scegline un’altra.`)
};

const nl_upload_preflight_category_invalid = /** @type {(inputs: Upload_Preflight_Category_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De categorie bestaat niet meer: kies een andere.`)
};

const pl_upload_preflight_category_invalid = /** @type {(inputs: Upload_Preflight_Category_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategoria już nie istnieje: wybierz inną.`)
};

const pt_upload_preflight_category_invalid = /** @type {(inputs: Upload_Preflight_Category_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A categoria não existe mais: escolha outra.`)
};

const ru_upload_preflight_category_invalid = /** @type {(inputs: Upload_Preflight_Category_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этой категории больше нет: выберите другую.`)
};

const sv_upload_preflight_category_invalid = /** @type {(inputs: Upload_Preflight_Category_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorin finns inte längre: välj en annan.`)
};

const tr_upload_preflight_category_invalid = /** @type {(inputs: Upload_Preflight_Category_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori artık yok: başka birini seç.`)
};

const zh_upload_preflight_category_invalid = /** @type {(inputs: Upload_Preflight_Category_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该分类已不存在：请选择其他分类。`)
};

const ja_upload_preflight_category_invalid = /** @type {(inputs: Upload_Preflight_Category_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`そのカテゴリーはもうありません。別のものを選んでください。`)
};

/**
* | output |
* | --- |
* | "The category doesn’t exist any more: choose another." |
*
* @param {Upload_Preflight_Category_InvalidInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_category_invalid = /** @type {((inputs?: Upload_Preflight_Category_InvalidInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Category_InvalidInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_category_invalid(inputs)
	if (locale === "de") return de_upload_preflight_category_invalid(inputs)
	if (locale === "fr") return fr_upload_preflight_category_invalid(inputs)
	if (locale === "it") return it_upload_preflight_category_invalid(inputs)
	if (locale === "nl") return nl_upload_preflight_category_invalid(inputs)
	if (locale === "pl") return pl_upload_preflight_category_invalid(inputs)
	if (locale === "pt") return pt_upload_preflight_category_invalid(inputs)
	if (locale === "ru") return ru_upload_preflight_category_invalid(inputs)
	if (locale === "sv") return sv_upload_preflight_category_invalid(inputs)
	if (locale === "tr") return tr_upload_preflight_category_invalid(inputs)
	if (locale === "zh") return zh_upload_preflight_category_invalid(inputs)
	if (locale === "ja") return ja_upload_preflight_category_invalid(inputs)
	return en_upload_preflight_category_invalid(inputs)
});
