/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ width: NonNullable<unknown>, min: NonNullable<unknown> }} Modpacks_Cover_Too_SmallInputs */

const en_modpacks_cover_too_small = /** @type {(inputs: Modpacks_Cover_Too_SmallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`This picture is ${i?.width} px wide. Use one at least ${i?.min} px wide so it looks sharp on the page.`)
};

const es_modpacks_cover_too_small = /** @type {(inputs: Modpacks_Cover_Too_SmallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Esta imagen mide ${i?.width} px de ancho. Usa una de al menos ${i?.min} px para que se vea nítida en la página.`)
};

const de_modpacks_cover_too_small = /** @type {(inputs: Modpacks_Cover_Too_SmallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dieses Bild ist ${i?.width} px breit. Nimm eines mit mindestens ${i?.min} px, damit es auf der Seite scharf aussieht.`)
};

const fr_modpacks_cover_too_small = /** @type {(inputs: Modpacks_Cover_Too_SmallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cette image fait ${i?.width} px de large. Utilisez-en une d’au moins ${i?.min} px pour qu’elle soit nette sur la page.`)
};

const it_modpacks_cover_too_small = /** @type {(inputs: Modpacks_Cover_Too_SmallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Questa immagine è larga ${i?.width} px. Usane una di almeno ${i?.min} px perché sia nitida sulla pagina.`)
};

const nl_modpacks_cover_too_small = /** @type {(inputs: Modpacks_Cover_Too_SmallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Deze afbeelding is ${i?.width} px breed. Gebruik er een van minstens ${i?.min} px zodat hij scherp is op de pagina.`)
};

const pl_modpacks_cover_too_small = /** @type {(inputs: Modpacks_Cover_Too_SmallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ten obraz ma ${i?.width} px szerokości. Użyj co najmniej ${i?.min} px, żeby na stronie był ostry.`)
};

const pt_modpacks_cover_too_small = /** @type {(inputs: Modpacks_Cover_Too_SmallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Esta imagem tem ${i?.width} px de largura. Use uma com pelo menos ${i?.min} px para ficar nítida na página.`)
};

const ru_modpacks_cover_too_small = /** @type {(inputs: Modpacks_Cover_Too_SmallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ширина этого изображения ${i?.width} px. Используйте не меньше ${i?.min} px, чтобы на странице оно было чётким.`)
};

const sv_modpacks_cover_too_small = /** @type {(inputs: Modpacks_Cover_Too_SmallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bilden är ${i?.width} px bred. Använd en som är minst ${i?.min} px så att den blir skarp på sidan.`)
};

const tr_modpacks_cover_too_small = /** @type {(inputs: Modpacks_Cover_Too_SmallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bu resim ${i?.width} px genişliğinde. Sayfada net görünmesi için en az ${i?.min} px genişliğinde bir resim kullan.`)
};

const zh_modpacks_cover_too_small = /** @type {(inputs: Modpacks_Cover_Too_SmallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`这张图片宽 ${i?.width} 像素。请使用至少 ${i?.min} 像素宽的图片，页面上才会清晰。`)
};

const ja_modpacks_cover_too_small = /** @type {(inputs: Modpacks_Cover_Too_SmallInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`この画像の幅は ${i?.width} px です。ページでくっきり表示されるよう、${i?.min} px 以上の画像を使ってください。`)
};

/**
* | output |
* | --- |
* | "This picture is {width} px wide. Use one at least {min} px wide so it looks sharp on the page." |
*
* @param {Modpacks_Cover_Too_SmallInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_cover_too_small = /** @type {((inputs: Modpacks_Cover_Too_SmallInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Cover_Too_SmallInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_cover_too_small(inputs)
	if (locale === "de") return de_modpacks_cover_too_small(inputs)
	if (locale === "fr") return fr_modpacks_cover_too_small(inputs)
	if (locale === "it") return it_modpacks_cover_too_small(inputs)
	if (locale === "nl") return nl_modpacks_cover_too_small(inputs)
	if (locale === "pl") return pl_modpacks_cover_too_small(inputs)
	if (locale === "pt") return pt_modpacks_cover_too_small(inputs)
	if (locale === "ru") return ru_modpacks_cover_too_small(inputs)
	if (locale === "sv") return sv_modpacks_cover_too_small(inputs)
	if (locale === "tr") return tr_modpacks_cover_too_small(inputs)
	if (locale === "zh") return zh_modpacks_cover_too_small(inputs)
	if (locale === "ja") return ja_modpacks_cover_too_small(inputs)
	return en_modpacks_cover_too_small(inputs)
});
