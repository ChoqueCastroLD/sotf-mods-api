/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, count: NonNullable<unknown> }} Basecamp_Attention_GalleryInputs */

const en_basecamp_attention_gallery = /** @type {(inputs: Basecamp_Attention_GalleryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: the gallery has ${count__number} image, aim for 3 or more`);
	return /** @type {LocalizedString} */ (`${i?.name}: the gallery has ${count__number} images, aim for 3 or more`)
	
};

const es_basecamp_attention_gallery = /** @type {(inputs: Basecamp_Attention_GalleryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: la galería tiene ${count__number} imagen, mejor 3 o más`);
	return /** @type {LocalizedString} */ (`${i?.name}: la galería tiene ${count__number} imágenes, mejor 3 o más`)
	
};

const de_basecamp_attention_gallery = /** @type {(inputs: Basecamp_Attention_GalleryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: die Galerie hat ${count__number} Bild, besser 3 oder mehr`);
	return /** @type {LocalizedString} */ (`${i?.name}: die Galerie hat ${count__number} Bilder, besser 3 oder mehr`)
	
};

const fr_basecamp_attention_gallery = /** @type {(inputs: Basecamp_Attention_GalleryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} : la galerie a ${count__number} image, vise 3 ou plus`);
	return /** @type {LocalizedString} */ (`${i?.name} : la galerie a ${count__number} images, vise 3 ou plus`)
	
};

const it_basecamp_attention_gallery = /** @type {(inputs: Basecamp_Attention_GalleryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: la galleria ha ${count__number} immagine, meglio 3 o più`);
	return /** @type {LocalizedString} */ (`${i?.name}: la galleria ha ${count__number} immagini, meglio 3 o più`)
	
};

const nl_basecamp_attention_gallery = /** @type {(inputs: Basecamp_Attention_GalleryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: de galerij heeft ${count__number} afbeelding, mik op 3 of meer`);
	return /** @type {LocalizedString} */ (`${i?.name}: de galerij heeft ${count__number} afbeeldingen, mik op 3 of meer`)
	
};

const pl_basecamp_attention_gallery = /** @type {(inputs: Basecamp_Attention_GalleryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: galeria ma ${count__number} obraz, najlepiej 3 lub więcej`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: galeria ma ${count__number} obrazy, najlepiej 3 lub więcej`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: galeria ma ${count__number} obrazów, najlepiej 3 lub więcej`);
	return /** @type {LocalizedString} */ (`${i?.name}: galeria ma ${count__number} obrazu, najlepiej 3 lub więcej`)
	
};

const pt_basecamp_attention_gallery = /** @type {(inputs: Basecamp_Attention_GalleryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: a galeria tem ${count__number} imagem, o ideal são 3 ou mais`);
	return /** @type {LocalizedString} */ (`${i?.name}: a galeria tem ${count__number} imagens, o ideal são 3 ou mais`)
	
};

const ru_basecamp_attention_gallery = /** @type {(inputs: Basecamp_Attention_GalleryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: в галерее ${count__number} изображение, лучше 3 или больше`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: в галерее ${count__number} изображения, лучше 3 или больше`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: в галерее ${count__number} изображений, лучше 3 или больше`);
	return /** @type {LocalizedString} */ (`${i?.name}: в галерее ${count__number} изображения, лучше 3 или больше`)
	
};

const sv_basecamp_attention_gallery = /** @type {(inputs: Basecamp_Attention_GalleryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: galleriet har ${count__number} bild, sikta på 3 eller fler`);
	return /** @type {LocalizedString} */ (`${i?.name}: galleriet har ${count__number} bilder, sikta på 3 eller fler`)
	
};

const tr_basecamp_attention_gallery = /** @type {(inputs: Basecamp_Attention_GalleryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: galeride ${count__number} görsel var, 3 veya daha fazlasını hedefle`);
	return /** @type {LocalizedString} */ (`${i?.name}: galeride ${count__number} görsel var, 3 veya daha fazlasını hedefle`)
	
};

const zh_basecamp_attention_gallery = /** @type {(inputs: Basecamp_Attention_GalleryInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.name}：图库只有 ${count__number} 张图片，建议 3 张或以上`)
};

const ja_basecamp_attention_gallery = /** @type {(inputs: Basecamp_Attention_GalleryInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.name}：ギャラリーの画像は ${count__number} 枚です。3 枚以上がおすすめです`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{name}: the gallery has {count__number} image, aim for 3 or more" |
* | * | "{name}: the gallery has {count__number} images, aim for 3 or more" |
*
* @param {Basecamp_Attention_GalleryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_gallery = /** @type {((inputs: Basecamp_Attention_GalleryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_GalleryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_gallery(inputs)
	if (locale === "de") return de_basecamp_attention_gallery(inputs)
	if (locale === "fr") return fr_basecamp_attention_gallery(inputs)
	if (locale === "it") return it_basecamp_attention_gallery(inputs)
	if (locale === "nl") return nl_basecamp_attention_gallery(inputs)
	if (locale === "pl") return pl_basecamp_attention_gallery(inputs)
	if (locale === "pt") return pt_basecamp_attention_gallery(inputs)
	if (locale === "ru") return ru_basecamp_attention_gallery(inputs)
	if (locale === "sv") return sv_basecamp_attention_gallery(inputs)
	if (locale === "tr") return tr_basecamp_attention_gallery(inputs)
	if (locale === "zh") return zh_basecamp_attention_gallery(inputs)
	if (locale === "ja") return ja_basecamp_attention_gallery(inputs)
	return en_basecamp_attention_gallery(inputs)
});
