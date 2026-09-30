/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Upload_Tags_FullInputs */

const en_upload_tags_full = /** @type {(inputs: Upload_Tags_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`That’s ${i?.max} tags: remove one to pick another.`)
};

const es_upload_tags_full = /** @type {(inputs: Upload_Tags_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ya son ${i?.max} etiquetas: quita una para elegir otra.`)
};

const de_upload_tags_full = /** @type {(inputs: Upload_Tags_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Das sind ${i?.max} Tags: Entferne einen, um einen anderen zu wählen.`)
};

const fr_upload_tags_full = /** @type {(inputs: Upload_Tags_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cela fait ${i?.max} tags : retirez-en un pour en choisir un autre.`)
};

const it_upload_tags_full = /** @type {(inputs: Upload_Tags_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sono ${i?.max} tag: rimuovine uno per sceglierne un altro.`)
};

const nl_upload_tags_full = /** @type {(inputs: Upload_Tags_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dat zijn ${i?.max} tags: haal er een weg om een andere te kiezen.`)
};

const pl_upload_tags_full = /** @type {(inputs: Upload_Tags_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Masz już ${i?.max} tagów: usuń jeden, aby wybrać inny.`)
};

const pt_upload_tags_full = /** @type {(inputs: Upload_Tags_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Já são ${i?.max} tags: remova uma para escolher outra.`)
};

const ru_upload_tags_full = /** @type {(inputs: Upload_Tags_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Выбрано ${i?.max} тегов: уберите один, чтобы выбрать другой.`)
};

const sv_upload_tags_full = /** @type {(inputs: Upload_Tags_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Det är ${i?.max} taggar: ta bort en för att välja en annan.`)
};

const tr_upload_tags_full = /** @type {(inputs: Upload_Tags_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.max} etiket oldu: başka birini seçmek için birini kaldır.`)
};

const zh_upload_tags_full = /** @type {(inputs: Upload_Tags_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已选 ${i?.max} 个标签：移除一个才能选择其他。`)
};

const ja_upload_tags_full = /** @type {(inputs: Upload_Tags_FullInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`タグは ${i?.max} 個までです。別のタグを選ぶには1つ外してください。`)
};

/**
* | output |
* | --- |
* | "That’s {max} tags: remove one to pick another." |
*
* @param {Upload_Tags_FullInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_tags_full = /** @type {((inputs: Upload_Tags_FullInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Tags_FullInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_tags_full(inputs)
	if (locale === "de") return de_upload_tags_full(inputs)
	if (locale === "fr") return fr_upload_tags_full(inputs)
	if (locale === "it") return it_upload_tags_full(inputs)
	if (locale === "nl") return nl_upload_tags_full(inputs)
	if (locale === "pl") return pl_upload_tags_full(inputs)
	if (locale === "pt") return pt_upload_tags_full(inputs)
	if (locale === "ru") return ru_upload_tags_full(inputs)
	if (locale === "sv") return sv_upload_tags_full(inputs)
	if (locale === "tr") return tr_upload_tags_full(inputs)
	if (locale === "zh") return zh_upload_tags_full(inputs)
	if (locale === "ja") return ja_upload_tags_full(inputs)
	return en_upload_tags_full(inputs)
});
