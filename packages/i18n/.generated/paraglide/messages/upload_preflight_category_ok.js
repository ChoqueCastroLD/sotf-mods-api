/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Category_OkInputs */

const en_upload_preflight_category_ok = /** @type {(inputs: Upload_Preflight_Category_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Category chosen.`)
};

const es_upload_preflight_category_ok = /** @type {(inputs: Upload_Preflight_Category_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoría elegida.`)
};

const de_upload_preflight_category_ok = /** @type {(inputs: Upload_Preflight_Category_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorie gewählt.`)
};

const fr_upload_preflight_category_ok = /** @type {(inputs: Upload_Preflight_Category_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégorie choisie.`)
};

const it_upload_preflight_category_ok = /** @type {(inputs: Upload_Preflight_Category_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria scelta.`)
};

const nl_upload_preflight_category_ok = /** @type {(inputs: Upload_Preflight_Category_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorie gekozen.`)
};

const pl_upload_preflight_category_ok = /** @type {(inputs: Upload_Preflight_Category_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategoria wybrana.`)
};

const pt_upload_preflight_category_ok = /** @type {(inputs: Upload_Preflight_Category_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria escolhida.`)
};

const ru_upload_preflight_category_ok = /** @type {(inputs: Upload_Preflight_Category_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Категория выбрана.`)
};

const sv_upload_preflight_category_ok = /** @type {(inputs: Upload_Preflight_Category_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori vald.`)
};

const tr_upload_preflight_category_ok = /** @type {(inputs: Upload_Preflight_Category_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori seçildi.`)
};

const zh_upload_preflight_category_ok = /** @type {(inputs: Upload_Preflight_Category_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已选择分类。`)
};

const ja_upload_preflight_category_ok = /** @type {(inputs: Upload_Preflight_Category_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリーを選択済み。`)
};

/**
* | output |
* | --- |
* | "Category chosen." |
*
* @param {Upload_Preflight_Category_OkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_category_ok = /** @type {((inputs?: Upload_Preflight_Category_OkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Category_OkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_category_ok(inputs)
	if (locale === "de") return de_upload_preflight_category_ok(inputs)
	if (locale === "fr") return fr_upload_preflight_category_ok(inputs)
	if (locale === "it") return it_upload_preflight_category_ok(inputs)
	if (locale === "nl") return nl_upload_preflight_category_ok(inputs)
	if (locale === "pl") return pl_upload_preflight_category_ok(inputs)
	if (locale === "pt") return pt_upload_preflight_category_ok(inputs)
	if (locale === "ru") return ru_upload_preflight_category_ok(inputs)
	if (locale === "sv") return sv_upload_preflight_category_ok(inputs)
	if (locale === "tr") return tr_upload_preflight_category_ok(inputs)
	if (locale === "zh") return zh_upload_preflight_category_ok(inputs)
	if (locale === "ja") return ja_upload_preflight_category_ok(inputs)
	return en_upload_preflight_category_ok(inputs)
});
