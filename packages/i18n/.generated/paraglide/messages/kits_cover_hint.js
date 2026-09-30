/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Kits_Cover_HintInputs */

const en_kits_cover_hint = /** @type {(inputs: Kits_Cover_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF or GIF, up to ${i?.max} MB. A wide 3:1 image works best.`)
};

const es_kits_cover_hint = /** @type {(inputs: Kits_Cover_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF o GIF, hasta ${i?.max} MB. Lo ideal es una imagen ancha 3:1.`)
};

const de_kits_cover_hint = /** @type {(inputs: Kits_Cover_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF oder GIF, bis ${i?.max} MB. Am besten ein breites Bild im Format 3:1.`)
};

const fr_kits_cover_hint = /** @type {(inputs: Kits_Cover_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF ou GIF, jusqu’à ${i?.max} Mo. Une image large au format 3:1 est idéale.`)
};

const it_kits_cover_hint = /** @type {(inputs: Kits_Cover_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF o GIF, fino a ${i?.max} MB. L’ideale è un’immagine larga 3:1.`)
};

const nl_kits_cover_hint = /** @type {(inputs: Kits_Cover_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF of GIF, tot ${i?.max} MB. Een brede afbeelding van 3:1 werkt het best.`)
};

const pl_kits_cover_hint = /** @type {(inputs: Kits_Cover_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF lub GIF, do ${i?.max} MB. Najlepiej szeroki obraz 3:1.`)
};

const pt_kits_cover_hint = /** @type {(inputs: Kits_Cover_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF ou GIF, até ${i?.max} MB. O ideal é uma imagem larga 3:1.`)
};

const ru_kits_cover_hint = /** @type {(inputs: Kits_Cover_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF или GIF, до ${i?.max} МБ. Лучше всего широкое изображение 3:1.`)
};

const sv_kits_cover_hint = /** @type {(inputs: Kits_Cover_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF eller GIF, upp till ${i?.max} MB. En bred bild i 3:1 fungerar bäst.`)
};

const tr_kits_cover_hint = /** @type {(inputs: Kits_Cover_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF veya GIF, en fazla ${i?.max} MB. En iyisi 3:1 geniş bir görsel.`)
};

const zh_kits_cover_hint = /** @type {(inputs: Kits_Cover_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG、JPEG、WebP、AVIF 或 GIF，不超过 ${i?.max} MB。最好使用 3:1 的宽图。`)
};

const ja_kits_cover_hint = /** @type {(inputs: Kits_Cover_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`PNG・JPEG・WebP・AVIF・GIF、${i?.max} MB まで。横長の 3:1 がおすすめです。`)
};

/**
* | output |
* | --- |
* | "PNG, JPEG, WebP, AVIF or GIF, up to {max} MB. A wide 3:1 image works best." |
*
* @param {Kits_Cover_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_cover_hint = /** @type {((inputs: Kits_Cover_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Cover_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_cover_hint(inputs)
	if (locale === "de") return de_kits_cover_hint(inputs)
	if (locale === "fr") return fr_kits_cover_hint(inputs)
	if (locale === "it") return it_kits_cover_hint(inputs)
	if (locale === "nl") return nl_kits_cover_hint(inputs)
	if (locale === "pl") return pl_kits_cover_hint(inputs)
	if (locale === "pt") return pt_kits_cover_hint(inputs)
	if (locale === "ru") return ru_kits_cover_hint(inputs)
	if (locale === "sv") return sv_kits_cover_hint(inputs)
	if (locale === "tr") return tr_kits_cover_hint(inputs)
	if (locale === "zh") return zh_kits_cover_hint(inputs)
	if (locale === "ja") return ja_kits_cover_hint(inputs)
	return en_kits_cover_hint(inputs)
});
