/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Upload_Gallery_HintInputs */

const en_upload_gallery_hint = /** @type {(inputs: Upload_Gallery_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Several at once · PNG, JPEG, WebP, AVIF or GIF · up to 10 MB each · ${i?.max} max`)
};

const es_upload_gallery_hint = /** @type {(inputs: Upload_Gallery_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Varias a la vez · PNG, JPEG, WebP, AVIF o GIF · hasta 10 MB cada una · máximo ${i?.max}`)
};

const de_upload_gallery_hint = /** @type {(inputs: Upload_Gallery_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mehrere auf einmal · PNG, JPEG, WebP, AVIF oder GIF · je bis 10 MB · höchstens ${i?.max}`)
};

const fr_upload_gallery_hint = /** @type {(inputs: Upload_Gallery_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Plusieurs à la fois · PNG, JPEG, WebP, AVIF ou GIF · jusqu’à 10 Mo chacune · ${i?.max} au maximum`)
};

const it_upload_gallery_hint = /** @type {(inputs: Upload_Gallery_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Più di uno alla volta · PNG, JPEG, WebP, AVIF o GIF · fino a 10 MB ciascuno · massimo ${i?.max}`)
};

const nl_upload_gallery_hint = /** @type {(inputs: Upload_Gallery_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Meerdere tegelijk · PNG, JPEG, WebP, AVIF of GIF · tot 10 MB per stuk · maximaal ${i?.max}`)
};

const pl_upload_gallery_hint = /** @type {(inputs: Upload_Gallery_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kilka naraz · PNG, JPEG, WebP, AVIF lub GIF · do 10 MB każdy · maksymalnie ${i?.max}`)
};

const pt_upload_gallery_hint = /** @type {(inputs: Upload_Gallery_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Várias de uma vez · PNG, JPEG, WebP, AVIF ou GIF · até 10 MB cada · no máximo ${i?.max}`)
};

const ru_upload_gallery_hint = /** @type {(inputs: Upload_Gallery_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Можно несколько сразу · PNG, JPEG, WebP, AVIF или GIF · до 10 МБ каждый · максимум ${i?.max}`)
};

const sv_upload_gallery_hint = /** @type {(inputs: Upload_Gallery_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Flera åt gången · PNG, JPEG, WebP, AVIF eller GIF · upp till 10 MB var · högst ${i?.max}`)
};

const tr_upload_gallery_hint = /** @type {(inputs: Upload_Gallery_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aynı anda birkaç tane · PNG, JPEG, WebP, AVIF ya da GIF · her biri en fazla 10 MB · en fazla ${i?.max}`)
};

const zh_upload_gallery_hint = /** @type {(inputs: Upload_Gallery_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`可一次选择多张 · PNG、JPEG、WebP、AVIF 或 GIF · 每张最大 10 MB · 最多 ${i?.max} 张`)
};

const ja_upload_gallery_hint = /** @type {(inputs: Upload_Gallery_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`複数同時に可 · PNG、JPEG、WebP、AVIF、GIF · 1枚 10 MB まで · 最大 ${i?.max} 枚`)
};

/**
* | output |
* | --- |
* | "Several at once · PNG, JPEG, WebP, AVIF or GIF · up to 10 MB each · {max} max" |
*
* @param {Upload_Gallery_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_gallery_hint = /** @type {((inputs: Upload_Gallery_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_gallery_hint(inputs)
	if (locale === "de") return de_upload_gallery_hint(inputs)
	if (locale === "fr") return fr_upload_gallery_hint(inputs)
	if (locale === "it") return it_upload_gallery_hint(inputs)
	if (locale === "nl") return nl_upload_gallery_hint(inputs)
	if (locale === "pl") return pl_upload_gallery_hint(inputs)
	if (locale === "pt") return pt_upload_gallery_hint(inputs)
	if (locale === "ru") return ru_upload_gallery_hint(inputs)
	if (locale === "sv") return sv_upload_gallery_hint(inputs)
	if (locale === "tr") return tr_upload_gallery_hint(inputs)
	if (locale === "zh") return zh_upload_gallery_hint(inputs)
	if (locale === "ja") return ja_upload_gallery_hint(inputs)
	return en_upload_gallery_hint(inputs)
});
