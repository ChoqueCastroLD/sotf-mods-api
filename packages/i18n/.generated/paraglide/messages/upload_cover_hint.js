/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Cover_HintInputs */

const en_upload_cover_hint = /** @type {(inputs: Upload_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF or GIF · up to 10 MB · at least 1280 × 720 looks best`)
};

const es_upload_cover_hint = /** @type {(inputs: Upload_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF o GIF · hasta 10 MB · mejor 1280 × 720 o más`)
};

const de_upload_cover_hint = /** @type {(inputs: Upload_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF oder GIF · bis 10 MB · ab 1280 × 720 sieht es am besten aus`)
};

const fr_upload_cover_hint = /** @type {(inputs: Upload_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF ou GIF · jusqu’à 10 Mo · idéalement 1280 × 720 ou plus`)
};

const it_upload_cover_hint = /** @type {(inputs: Upload_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF o GIF · fino a 10 MB · meglio da 1280 × 720 in su`)
};

const nl_upload_cover_hint = /** @type {(inputs: Upload_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF of GIF · tot 10 MB · vanaf 1280 × 720 ziet het er het best uit`)
};

const pl_upload_cover_hint = /** @type {(inputs: Upload_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF lub GIF · do 10 MB · najlepiej od 1280 × 720`)
};

const pt_upload_cover_hint = /** @type {(inputs: Upload_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF ou GIF · até 10 MB · fica melhor a partir de 1280 × 720`)
};

const ru_upload_cover_hint = /** @type {(inputs: Upload_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF или GIF · до 10 МБ · лучше от 1280 × 720`)
};

const sv_upload_cover_hint = /** @type {(inputs: Upload_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF eller GIF · upp till 10 MB · ser bäst ut från 1280 × 720`)
};

const tr_upload_cover_hint = /** @type {(inputs: Upload_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF ya da GIF · en fazla 10 MB · en iyisi 1280 × 720 ve üstü`)
};

const zh_upload_cover_hint = /** @type {(inputs: Upload_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PNG、JPEG、WebP、AVIF 或 GIF · 最大 10 MB · 建议 1280 × 720 以上`)
};

const ja_upload_cover_hint = /** @type {(inputs: Upload_Cover_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`PNG、JPEG、WebP、AVIF、GIF · 最大 10 MB · 1280 × 720 以上がおすすめ`)
};

/**
* | output |
* | --- |
* | "PNG, JPEG, WebP, AVIF or GIF · up to 10 MB · at least 1280 × 720 looks best" |
*
* @param {Upload_Cover_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_cover_hint = /** @type {((inputs?: Upload_Cover_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Cover_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_cover_hint(inputs)
	if (locale === "de") return de_upload_cover_hint(inputs)
	if (locale === "fr") return fr_upload_cover_hint(inputs)
	if (locale === "it") return it_upload_cover_hint(inputs)
	if (locale === "nl") return nl_upload_cover_hint(inputs)
	if (locale === "pl") return pl_upload_cover_hint(inputs)
	if (locale === "pt") return pt_upload_cover_hint(inputs)
	if (locale === "ru") return ru_upload_cover_hint(inputs)
	if (locale === "sv") return sv_upload_cover_hint(inputs)
	if (locale === "tr") return tr_upload_cover_hint(inputs)
	if (locale === "zh") return zh_upload_cover_hint(inputs)
	if (locale === "ja") return ja_upload_cover_hint(inputs)
	return en_upload_cover_hint(inputs)
});
