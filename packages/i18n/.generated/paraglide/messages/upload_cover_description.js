/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Cover_DescriptionInputs */

const en_upload_cover_description = /** @type {(inputs: Upload_Cover_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shown on cards and at the top of the page, cropped to 16:9.`)
};

const es_upload_cover_description = /** @type {(inputs: Upload_Cover_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se muestra en las tarjetas y arriba de la página, recortada a 16:9.`)
};

const de_upload_cover_description = /** @type {(inputs: Upload_Cover_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erscheint auf Karten und oben auf der Seite, zugeschnitten auf 16:9.`)
};

const fr_upload_cover_description = /** @type {(inputs: Upload_Cover_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Affichée sur les cartes et en haut de la page, recadrée en 16:9.`)
};

const it_upload_cover_description = /** @type {(inputs: Upload_Cover_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrata nelle schede e in cima alla pagina, ritagliata in 16:9.`)
};

const nl_upload_cover_description = /** @type {(inputs: Upload_Cover_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Getoond op kaarten en bovenaan de pagina, bijgesneden tot 16:9.`)
};

const pl_upload_cover_description = /** @type {(inputs: Upload_Cover_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Widoczna na kartach i na górze strony, przycięta do 16:9.`)
};

const pt_upload_cover_description = /** @type {(inputs: Upload_Cover_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aparece nos cartões e no topo da página, recortada em 16:9.`)
};

const ru_upload_cover_description = /** @type {(inputs: Upload_Cover_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Видна в карточках и вверху страницы, кадрируется в 16:9.`)
};

const sv_upload_cover_description = /** @type {(inputs: Upload_Cover_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visas på kort och högst upp på sidan, beskuren till 16:9.`)
};

const tr_upload_cover_description = /** @type {(inputs: Upload_Cover_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kartlarda ve sayfanın üstünde 16:9 kırpılmış olarak gösterilir.`)
};

const zh_upload_cover_description = /** @type {(inputs: Upload_Cover_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示在卡片和页面顶部，裁剪为 16:9。`)
};

const ja_upload_cover_description = /** @type {(inputs: Upload_Cover_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カードやページ上部に16:9で切り抜いて表示されます。`)
};

/**
* | output |
* | --- |
* | "Shown on cards and at the top of the page, cropped to 16:9." |
*
* @param {Upload_Cover_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_cover_description = /** @type {((inputs?: Upload_Cover_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Cover_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_cover_description(inputs)
	if (locale === "de") return de_upload_cover_description(inputs)
	if (locale === "fr") return fr_upload_cover_description(inputs)
	if (locale === "it") return it_upload_cover_description(inputs)
	if (locale === "nl") return nl_upload_cover_description(inputs)
	if (locale === "pl") return pl_upload_cover_description(inputs)
	if (locale === "pt") return pt_upload_cover_description(inputs)
	if (locale === "ru") return ru_upload_cover_description(inputs)
	if (locale === "sv") return sv_upload_cover_description(inputs)
	if (locale === "tr") return tr_upload_cover_description(inputs)
	if (locale === "zh") return zh_upload_cover_description(inputs)
	if (locale === "ja") return ja_upload_cover_description(inputs)
	return en_upload_cover_description(inputs)
});
