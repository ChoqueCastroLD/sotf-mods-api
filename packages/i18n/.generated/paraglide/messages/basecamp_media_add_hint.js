/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ left: NonNullable<unknown> }} Basecamp_Media_Add_HintInputs */

const en_basecamp_media_add_hint = /** @type {(inputs: Basecamp_Media_Add_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF or GIF up to 10 MB. ${i?.left} left.`)
};

const es_basecamp_media_add_hint = /** @type {(inputs: Basecamp_Media_Add_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF o GIF de hasta 10 MB. Quedan ${i?.left}.`)
};

const de_basecamp_media_add_hint = /** @type {(inputs: Basecamp_Media_Add_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF oder GIF bis 10 MB. Noch ${i?.left} frei.`)
};

const fr_basecamp_media_add_hint = /** @type {(inputs: Basecamp_Media_Add_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF ou GIF jusqu’à 10 Mo. Encore ${i?.left}.`)
};

const it_basecamp_media_add_hint = /** @type {(inputs: Basecamp_Media_Add_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF o GIF fino a 10 MB. Ne restano ${i?.left}.`)
};

const nl_basecamp_media_add_hint = /** @type {(inputs: Basecamp_Media_Add_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF of GIF tot 10 MB. Nog ${i?.left} over.`)
};

const pl_basecamp_media_add_hint = /** @type {(inputs: Basecamp_Media_Add_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF lub GIF do 10 MB. Pozostało: ${i?.left}.`)
};

const pt_basecamp_media_add_hint = /** @type {(inputs: Basecamp_Media_Add_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF ou GIF de até 10 MB. Restam ${i?.left}.`)
};

const ru_basecamp_media_add_hint = /** @type {(inputs: Basecamp_Media_Add_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF или GIF до 10 МБ. Осталось мест: ${i?.left}.`)
};

const sv_basecamp_media_add_hint = /** @type {(inputs: Basecamp_Media_Add_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF eller GIF upp till 10 MB. ${i?.left} kvar.`)
};

const tr_basecamp_media_add_hint = /** @type {(inputs: Basecamp_Media_Add_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`10 MB'a kadar PNG, JPEG, WebP, AVIF veya GIF. ${i?.left} yer kaldı.`)
};

const zh_basecamp_media_add_hint = /** @type {(inputs: Basecamp_Media_Add_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG、JPEG、WebP、AVIF 或 GIF，最大 10 MB。还可添加 ${i?.left} 张。`)
};

const ja_basecamp_media_add_hint = /** @type {(inputs: Basecamp_Media_Add_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG、JPEG、WebP、AVIF、GIF（10 MB まで）。残り ${i?.left} 枚。`)
};

/**
* | output |
* | --- |
* | "PNG, JPEG, WebP, AVIF or GIF up to 10 MB. {left} left." |
*
* @param {Basecamp_Media_Add_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_add_hint = /** @type {((inputs: Basecamp_Media_Add_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_Add_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_add_hint(inputs)
	if (locale === "de") return de_basecamp_media_add_hint(inputs)
	if (locale === "fr") return fr_basecamp_media_add_hint(inputs)
	if (locale === "it") return it_basecamp_media_add_hint(inputs)
	if (locale === "nl") return nl_basecamp_media_add_hint(inputs)
	if (locale === "pl") return pl_basecamp_media_add_hint(inputs)
	if (locale === "pt") return pt_basecamp_media_add_hint(inputs)
	if (locale === "ru") return ru_basecamp_media_add_hint(inputs)
	if (locale === "sv") return sv_basecamp_media_add_hint(inputs)
	if (locale === "tr") return tr_basecamp_media_add_hint(inputs)
	if (locale === "zh") return zh_basecamp_media_add_hint(inputs)
	if (locale === "ja") return ja_basecamp_media_add_hint(inputs)
	return en_basecamp_media_add_hint(inputs)
});
